document.addEventListener("DOMContentLoaded", async () => {
    try {
      const res = await fetch("http://localhost:8080/tweets");
        if (res.status === 401) {
            res.redirect('/log-in');
            return
        } else {
            const { tweets } = await res.json();
        }
      console.log(tweets);
    } catch (e) {
      console.error(e);
    }
  });
