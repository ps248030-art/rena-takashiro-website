// ★ここだけ毎回貼り替える（Colabで出る trycloudflare のURL）
const API_BASE = window.API_BASE;
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

    // age が 0 のとき弾かないように、未入力チェックはこうするのが安全
    if (!data.name || !data.kana || !Number.isFinite(data.age) || !data.email || !data.gender) {
      show("未入力があります");
      return;
    }

    try {
      const res = await fetch(API_BASE + "/api/fanclub/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // Colab側は基本 JSON を返す想定
      const j = await res.json().catch(() => ({}));

      if (!res.ok) {
        show("登録に失敗しました（サーバーエラー）");
        return;
      }

      // Colab仕様：ok:false + error:"already_registered"
      if (j.ok === false && j.error === "already_registered") {
        show("このメールアドレスは既に登録されています（重複登録できません）");
        return;
      }

      if (j.ok === true && j.member_no) {
        show("登録完了！会員番号: " + j.member_no);
        form.querySelector('button[type="submit"]').disabled = true;
        return;
      }

      // 想定外
      show("登録に失敗しました（応答が不正です）");
      console.log("unexpected response:", j);

    } catch (err) {
      show("通信エラー：Colabが起動しているか確認して");
      console.error(err);
    }
  });
});
