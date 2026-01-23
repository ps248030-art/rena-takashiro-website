// ★ここだけ毎回貼り替える（Colabで出る trycloudflare のURL）
const API_BASE = "PASTE_TRYCLOUDFLARE_URL_HERE";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#registrationForm");
  const msg = document.querySelector("#msg");

  const show = (text) => {
    msg.style.display = "block";
    msg.textContent = text;
  };

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      name: document.querySelector("#name").value.trim(),
      kana: document.querySelector("#kana").value.trim(),
      age: Number(document.querySelector("#age").value),
      email: document.querySelector("#email").value.trim(),
      gender: document.querySelector("#gender").value,
    };

    if (!data.name || !data.kana || !data.age || !data.email || !data.gender) {
      show("未入力があります");
      return;
    }

    try {
      const res = await fetch(API_BASE + "/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.status === 409) {
        const j = await res.json().catch(() => ({}));
        show(j.detail || "このメールアドレスは既に登録されています");
        return;
      }

      if (!res.ok) {
        show("登録に失敗しました（サーバーエラー）");
        return;
      }

      const j = await res.json();
      show("登録完了！会員番号: " + j.member_id);
      form.querySelector('button[type="submit"]').disabled = true;

    } catch (err) {
      show("通信エラー：Colabが起動しているか確認して");
      console.error(err);
    }
  });
});
