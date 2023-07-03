(() => {
  let count = 0;
  function getAllButtons() {
    return document.querySelectorAll(".artdeco-button__text") || [];
  }
  async function unfollowAll() {
    const unfollow_btns = getAllButtons();
    for (let unfollow_btn of unfollow_btns) {
      if (unfollow_btn.innerText == "Following") {
        count = count + 1;
        window.scrollTo(0, unfollow_btn.offsetTop - 10);
        unfollow_btn.click();
        await new Promise((resolve) => setTimeout(resolve, 100));
        unfollow_btn.click(); // yes we need it twice now to double confirm linkedin popup
        console.log(`Unfollowed #${count}:`);
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
    }
  }
  async function run() {
    await unfollowAll();
    window.scrollTo(0, document.body.scrollHeight);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const buttons = getAllButtons();
    if (buttons.length) run();
  }
  run();
})();
