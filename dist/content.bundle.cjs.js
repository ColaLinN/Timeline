'use strict';

const _maxSaveNumber = 100;
const _root = "https://twitter.com";
// const _primaryContainer = document.querySelector("[data-testid=primaryColumn]");

// function addMenu(tweetEle) {
// 	let dropdownElem = tweetEle.querySelector("[data-testid=Dropdown]");

// 	if (dropdownElem) {
// 		console.log("detect");
// 		const newOptionElem = document.createElement("p");
// 		newOptionElem.innerText = "asdfasdf";

// 		dropdownElem.append(newOptionElem);
// 	}
// }

function processTweets() {
  let tweets = document.querySelectorAll("[data-testid=cellInnerDiv]");
  tweets.forEach(tweet => {
    if (isElementInViewport(tweet)) {
      let userNameElem = tweet.querySelector("[data-testid=User-Name]");
      let userIdElem = tweet.querySelector("a[role='link']");
      let tweetUrlElem = tweet.querySelector("a[role='link'][dir='ltr'][aria-label]");
      let tweetBodyElem = tweet.querySelector("[data-testid=tweetText]");
      let tweetTimeElem = tweet.querySelector("a[role='link'] time");
      let tweetImgElems = tweet.querySelectorAll("img[alt='Image']");
      let showMoreLink;
      if (userNameElem && userIdElem && tweetUrlElem && tweetTimeElem) {
        if (tweetBodyElem) {
          showMoreLink = tweetBodyElem.querySelector("[data-testid=tweet-text-show-more-link]");
        }
        let userName = userNameElem.textContent;
        let tweetBody = tweetBodyElem.textContent;
        if (!!showMoreLink) {
          tweetBody = tweetBody.slice(0, -9);
        }
        let userId = userIdElem.href.split("/").pop();
        let tweetUrl = _root + tweetUrlElem.getAttribute("href");
        let tweetTime = tweetTimeElem.getAttribute("datetime");
        let tweetImages = Array.from(tweetImgElems).map(ele => ele.getAttribute("src"));
        saveTweet(userName, tweetBody, userId, tweetUrl, tweetTime, tweetImages);
      }
    }
  });
}
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}
let isLocked = false; // 锁标志

// 等待解锁的函数
async function waitForUnlock() {
  while (isLocked) {
    await new Promise(resolve => setTimeout(resolve, 100)); // 暂停100毫秒后继续检查锁状态
  }
}

// 使用锁的函数
async function saveTweet(userName, tweetBody, userId, tweetUrl, tweetTime, tweetImages, engaged) {
  await waitForUnlock(); // 等待锁被释放
  isLocked = true; // 获取锁
  console.log("saving tweet");
  try {
    const result = await new Promise((resolve, reject) => {
      chrome.storage.local.get("tweets", data => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve(data);
        }
      });
    });
    let tweets = result.tweets || [];
    const tweet = {
      userName: userName,
      tweetBody: tweetBody,
      userId: userId,
      tweetUrl: tweetUrl,
      tweetTime: tweetTime,
      tweetImages: tweetImages,
      captureDate: new Date().toISOString(),
      engaged: engaged
    };
    if (!tweets.some(t => t.tweetUrl === tweetUrl)) {
      if (tweets.length >= _maxSaveNumber) {
        tweets.shift();
      }
      tweets.push(tweet);
    }
    await new Promise((resolve, reject) => {
      chrome.storage.local.set({
        tweets: tweets
      }, () => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve();
        }
      });
    });
  } catch (error) {
    console.error("Failed to save tweet:", error);
  } finally {
    isLocked = false; // 释放锁
  }
}

function main() {
  {
    let lastScrollTop = 0;
    window.addEventListener("scroll", function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (Math.abs(scrollTop - lastScrollTop) > 300) {
        lastScrollTop = scrollTop;
        processTweets();
      }
    });
  }
  window.onload = function () {
    setInterval(processTweets, 500);
    const targetNode = document.querySelector("#react-root");
    if (targetNode) {
      const config = {
        attributes: true,
        childList: true,
        subtree: true
      };
      let currentUrl = window.location.href;
      const callback = function (mutationsList, observer) {
        for (const mutation of mutationsList) {
          if (mutation.type === "childList" && window.location.href !== currentUrl) {
            currentUrl = window.location.href;
            let tweetID = currentUrl.split("/").pop();
            chrome.storage.local.get("tweets", function (data) {
              let tweets = data.tweets || [];

              // Find the relevant tweet in the storage by its ID
              let tweetIndex = tweets.findIndex(tweet => tweet.tweetUrl.includes(tweetID));
              if (tweetIndex !== -1) {
                // Update the 'engaged' attribute of the tweet
                tweets[tweetIndex].engaged = true;

                // Save the updated tweets array back to the storage
                chrome.storage.local.set({
                  tweets: tweets
                });
              } else {
                processTweets();
              }
            });
          }
        }
      };
      const observer = new MutationObserver(callback);
      observer.observe(targetNode, config);
    } else {
      console.error("Target node not found");
    }
  };
}

main();
