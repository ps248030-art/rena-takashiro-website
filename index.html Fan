<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>高城玲奈 Official Fanclub</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap');
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Noto Sans JP', sans-serif;
      background: linear-gradient(135deg, #fff0f6 0%, #ffe4f0 50%, #ffd9eb 100%);
      color: #333;
      line-height: 1.6;
      min-height: 100vh;
    }

    /* ヘッダー */
    header {
      background: linear-gradient(135deg, #ff9ec4 0%, #ffb6d9 100%);
      border-bottom: 3px solid #ff80b3;
      padding: 25px 30px;
      box-shadow: 0 4px 15px rgba(255, 128, 179, 0.3);
    }

    .header-inner {
      max-width: 900px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo-text {
      font-size: 20px;
      font-weight: 600;
      color: white;
      text-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .back-link {
      font-size: 14px;
      color: white;
      text-decoration: none;
      padding: 10px 25px;
      background: rgba(255, 255, 255, 0.3);
      border: 2px solid white;
      border-radius: 25px;
      transition: all 0.3s;
      font-weight: 500;
    }

    .back-link:hover {
      background: white;
      color: #ff9ec4;
    }

    /* メインコンテンツ */
    .container {
      max-width: 900px;
      margin: 40px auto;
      padding: 0 20px;
    }

    /* ステップ表示 */
    .steps {
      display: flex;
      justify-content: center;
      gap: 30px;
      margin-bottom: 40px;
    }

    .step {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #999;
    }

    .step-number {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: #ddd;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: 500;
    }

    .step.active {
      color: #333;
    }

    .step.active .step-number {
      background: linear-gradient(135deg, #ff9ec4, #ffb6d9);
      color: white;
      box-shadow: 0 4px 12px rgba(255, 158, 196, 0.4);
    }

    /* カードスタイル */
    .card {
      background: white;
      border-radius: 20px;
      padding: 50px;
      box-shadow: 0 8px 30px rgba(255, 158, 196, 0.2);
      display: none;
      border: 3px solid #ffc9e0;
    }

    .card.active {
      display: block;
    }

    .card h2 {
      font-size: 28px;
      font-weight: 600;
      margin-bottom: 30px;
      text-align: center;
      color: #ff6ba8;
    }

    /* プラン表示 */
    .plan-box {
      border: 3px solid #ff9ec4;
      border-radius: 15px;
      padding: 40px;
      margin-bottom: 30px;
      text-align: center;
      background: linear-gradient(135deg, #fff5fa 0%, #ffe9f5 100%);
      box-shadow: 0 6px 20px rgba(255, 158, 196, 0.15);
    }

    .plan-name {
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 10px;
      color: #ff6ba8;
    }

    .plan-price {
      font-size: 36px;
      font-weight: 600;
      color: #ff9ec4;
      margin-bottom: 20px;
    }

    .plan-features {
      text-align: left;
      list-style: none;
      margin-bottom: 20px;
    }

    .plan-features li {
      padding: 8px 0;
      padding-left: 25px;
      position: relative;
    }

    .plan-features li::before {
      content: '💕';
      position: absolute;
      left: 0;
      font-weight: bold;
    }

    /* フォーム */
    .form-group {
      margin-bottom: 25px;
    }

    .form-group label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
      font-size: 14px;
    }

    .form-group input,
    .form-group select {
      width: 100%;
      padding: 12px;
      border: 1px solid #ddd;
      border-radius: 5px;
      font-size: 15px;
      font-family: 'Noto Sans JP', sans-serif;
    }

    .form-group input:focus,
    .form-group select:focus {
      outline: none;
      border-color: #ff9ec4;
      box-shadow: 0 0 0 3px rgba(255, 158, 196, 0.1);
    }

    .required {
      color: #e74c3c;
      margin-left: 3px;
    }

    /* ボタン */
    .btn {
      width: 100%;
      padding: 15px;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s;
      font-family: 'Noto Sans JP', sans-serif;
    }

    .btn-primary {
      background: linear-gradient(135deg, #ff9ec4 0%, #ffb6d9 100%);
      color: white;
      box-shadow: 0 6px 20px rgba(255, 158, 196, 0.4);
      font-weight: 600;
    }

    .btn-primary:hover {
      background: linear-gradient(135deg, #ff89b5 0%, #ffa6ca 100%);
      box-shadow: 0 8px 25px rgba(255, 158, 196, 0.5);
      transform: translateY(-2px);
    }

    .btn-secondary {
      background: #fff0f6;
      color: #ff6ba8;
      margin-top: 10px;
      border: 2px solid #ffc9e0;
    }

    .btn-secondary:hover {
      background: #ffe4f0;
      border-color: #ff9ec4;
    }

    /* 完了画面 */
    .success-message {
      text-align: center;
      padding: 40px 20px;
    }

    .success-icon {
      font-size: 60px;
      margin-bottom: 20px;
    }

    .member-id {
      background: linear-gradient(135deg, #fff5fa 0%, #ffe9f5 100%);
      border: 3px dashed #ff9ec4;
      border-radius: 15px;
      padding: 35px;
      margin: 30px 0;
      box-shadow: 0 4px 15px rgba(255, 158, 196, 0.15);
    }

    .member-id-label {
      font-size: 14px;
      color: #ff6ba8;
      margin-bottom: 10px;
      font-weight: 600;
    }

    .member-id-number {
      font-size: 36px;
      font-weight: 600;
      color: #ff9ec4;
      font-family: monospace;
      letter-spacing: 4px;
    }

    .profile-image {
      width: 220px;
      height: 220px;
      margin: 30px auto;
      border-radius: 50%;
      overflow: hidden;
      border: 5px solid #ff9ec4;
      box-shadow: 0 8px 25px rgba(255, 158, 196, 0.3);
    }

    .profile-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media (max-width: 768px) {
      .header-inner {
        flex-direction: column;
        gap: 15px;
      }

      .steps {
        flex-direction: column;
        gap: 15px;
      }

      .card {
        padding: 25px;
      }
    }
  </style>
</head>
<body>
  <!-- ヘッダー -->
  <header>
    <div class="header-inner">
      <div class="logo-text">高城玲奈 Official Fanclub</div>
      <a href="index.html" class="back-link">← 公式サイトへ戻る</a>
    </div>
  </header>

  <!-- メインコンテンツ -->
  <div class="container">
    <!-- ステップ表示 -->
    <div class="steps">
      <div class="step active" id="step1-indicator">
        <div class="step-number">1</div>
        <span>プラン確認</span>
      </div>
      <div class="step" id="step2-indicator">
        <div class="step-number">2</div>
        <span>情報入力</span>
      </div>
      <div class="step" id="step3-indicator">
        <div class="step-number">3</div>
        <span>登録完了</span>
      </div>
    </div>

    <!-- ステップ1: プラン確認 -->
    <div class="card active" id="step1">
      <h2>ファンクラブ会員登録</h2>
      <div class="plan-box">
        <div class="plan-name">Official Member</div>
        <div class="plan-price">¥500<span style="font-size:16px; color:#666;">/月</span></div>
        <ul class="plan-features">
          <li>限定ブログ・日記の閲覧</li>
          <li>限定フォトギャラリー</li>
          <li>メンバー限定動画</li>
          <li>月1回のオンライン交流会</li>
          <li>デジタル会員証発行</li>
        </ul>
      </div>
      <button class="btn btn-primary" onclick="nextStep(2)">登録手続きへ進む</button>
    </div>

    <!-- ステップ2: 情報入力 -->
    <div class="card" id="step2">
      <h2>会員情報入力</h2>
      <form id="registrationForm" onsubmit="return submitForm(event)">
        <div class="form-group">
          <label>お名前<span class="required">*</span></label>
          <input type="text" id="name" required placeholder="例: 山田太郎">
        </div>
        
        <div class="form-group">
          <label>フリガナ<span class="required">*</span></label>
          <input type="text" id="kana" required placeholder="例: ヤマダタロウ">
        </div>
        
        <div class="form-group">
          <label>年齢<span class="required">*</span></label>
          <input type="number" id="age" required min="13" max="120" placeholder="例: 25">
        </div>
        
        <div class="form-group">
          <label>メールアドレス<span class="required">*</span></label>
          <input type="email" id="email" required placeholder="例: example@mail.com">
        </div>
        
        <div class="form-group">
          <label>性別<span class="required">*</span></label>
          <select id="gender" required>
            <option value="">選択してください</option>
            <option value="male">男性</option>
            <option value="female">女性</option>
            <option value="other">その他</option>
            <option value="no-answer">回答しない</option>
          </select>
        </div>
        
        <button type="submit" class="btn btn-primary">登録する</button>
        <button type="button" class="btn btn-secondary" onclick="nextStep(1)">戻る</button>
      </form>
    </div>

    <!-- ステップ3: 登録完了 -->
    <div class="card" id="step3">
      <div class="success-message">
        <div class="success-icon">🎉</div>
        <h2>登録完了しました！</h2>
        <p style="margin: 20px 0; color: #666;">ファンクラブへようこそ</p>
        
        <div class="profile-image">
          <img src="スクリーンショット 2025-12-15 160522.png" alt="高城玲奈">
        </div>
        
        <div class="member-id">
          <div class="member-id-label">あなたの会員番号</div>
          <div class="member-id-number" id="memberIdDisplay"></div>
        </div>
        
        <p style="color: #666; margin: 20px 0;">
          登録いただいたメールアドレスに<br>
          確認メールをお送りしました。
        </p>
        
        <button class="btn btn-primary" onclick="location.href='index.html'">公式サイトへ戻る</button>
      </div>
    </div>
  </div>

  <script>
    // ステップ切り替え
    function nextStep(stepNumber) {
      // 全てのカードを非表示
      document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('active');
      });
      
      // 全てのステップインジケーターを非アクティブ
      document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
      });
      
      // 指定されたステップを表示
      document.getElementById('step' + stepNumber).classList.add('active');
      document.getElementById('step' + stepNumber + '-indicator').classList.add('active');
      
      // 画面を上にスクロール
      window.scrollTo(0, 0);
    }

    // フォーム送信
    function submitForm(event) {
      event.preventDefault();
      
      // 会員番号を生成（ランダムな8桁の数字）
      const memberId = 'FC' + Math.floor(10000000 + Math.random() * 90000000);
      
      // 会員番号を表示
      document.getElementById('memberIdDisplay').textContent = memberId;
      
      // 完了画面へ
      nextStep(3);
      
      return false;
    }
  </script>
</body>
</html>
