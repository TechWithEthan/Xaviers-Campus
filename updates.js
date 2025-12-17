(function () {

  var ua = navigator.userAgent;

  /* ===============================
     OS DETECTION
  =============================== */
  var isWindows = ua.indexOf("Windows NT") !== -1;
  var isWin7 = ua.indexOf("Windows NT 6.1") !== -1;
  var isWin8 = ua.indexOf("Windows NT 6.2") !== -1 || ua.indexOf("Windows NT 6.3") !== -1;
  var isWin10or11 = ua.indexOf("Windows NT 10.0") !== -1;

  /* ===============================
     BROWSER DETECTION (UPDATED ONLY)
  =============================== */
  var chromeMatch = ua.match(/Chrome\/(\d+)/);
  var firefoxMatch = ua.match(/Firefox\/(\d+)/);
  var edgeMatch = ua.match(/Edg\/(\d+)/);

  var chromeVersion = chromeMatch ? parseInt(chromeMatch[1]) : 0;
  var firefoxVersion = firefoxMatch ? parseInt(firefoxMatch[1]) : 0;
  var edgeVersion = edgeMatch ? parseInt(edgeMatch[1]) : 0;

  var isModernChrome = chromeVersion >= 110;
  var isModernFirefox = firefoxVersion >= 110;
  var isModernEdge = edgeVersion >= 110;

  var isModernBrowser =
    isModernChrome ||
    isModernFirefox ||
    isModernEdge;

  /* ===============================
     FINAL ALLOW RULE
     (Windows 11 ≈ Win10 + Modern Browser)
  =============================== */
  var allow =
    isWindows &&
    isWin10or11 &&
    !isWin7 &&
    !isWin8 &&
    isModernBrowser;

  if (allow) return; // ✅ ALLOWED

  /* ===============================
     BLOCK EVERYTHING ELSE
  =============================== */

  // Inject CSS
  var style = document.createElement("style");
  style.innerHTML = `
    body > * { display: none !important; }
    #block-screen {
      position: fixed;
      inset: 0;
      background: #020617;
      color: #e5e7eb;
      font-family: Arial, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 999999;
      text-align: center;
      padding: 40px;
    }
    #block-box {
      background: #0f172a;
      padding: 32px;
      border-radius: 16px;
      max-width: 460px;
    }
    #block-box h1 {
      font-size: 2rem;
      margin-bottom: 10px;
    }
    #block-box p {
      font-size: 1.1rem;
      opacity: 0.9;
    }
  `;
  document.head.appendChild(style);

  // Inject HTML
  var div = document.createElement("div");
  div.id = "block-screen";
  div.innerHTML = `
    <div id="block-box">
      <h1>🚫 Access Restricted</h1>
      <p>This website is available only on <b>Windows 11</b> with an updated browser.</p>
      <p>Please upgrade your system or browser to continue.</p>
    </div>
  `;
  document.body.appendChild(div);

})();
