// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sjR10erDAOocEusZWncnoLYNe4kcKh0c4PATUUkWMcf1DypVsXRM36lHGjNU5DiBETsB+NHV66vHpz2aJJkM8+A7MCo2GvYtxeYQzfdcP1EHeVhm0jsuI1dqtUXNG7Uk/8wGfxKN1pDq3UydCU0BbAI9c6g/PgtEKnCStd9UiU887/JG+cbOVj3oi6x42XxdtNVrB0q+z5MzRkO1WMy5xYyaVTfzhbl2at6wuH0sM3MZ0fvsL953+WD5ctpke0Ad1fJI+4mYhnklrf1aaEeL7YvXbmqtTmBq69hOMGYu6tlQVcPiRFll2ZUkWy8D7ip2D82HKswJ3fzTF8JE9PLzYhAZcGossRI9YkUEVgXG/MCUhJCvyEFvCR1It/ayfxQqEr3wtNVdZDY0sVZAvwF5ffoHw7SJbeoyzpjJ1eAmX3OEM6PiO9/cenWDOW03GOOlVQiAer2apJ3KhjveOz+Vs0hliJMQuYMP5sRVDPWku7YsS/E9Dtr+oDDGsY3P86v38+P1vRt5rJkPvBeCcvEXl2TPfq1KZzxjk7K4SZGYq9o4ermgF1ydfE6XaHnqoJLiF9WxaQFaMxiFQlReNLmCC8BKcwt8g4U/LEUaOkJywS7iU874ZhMpgjOwmeXO1K3hRU/6Vailw1o9UlYkc1tlrcqDxLXJvzLo/pp7BhbTW/thEEP6WuDHxpIpIk5YX6bXIeZ8wOC8nnWypgm6bBWqGOBeaC8YqHK9bV4abeyEihlj5xD1d3TaAsZBnhuJTE4QReRdFQF27oCTG5tlO672ondsPUjiSf4UPQ6lEYAS4NQEbQMLv9TXg4m48u6Sm6FsOiH7psEZoW5i0O41aSAUF6PSiX5WIFFNdIauCAKayIM/dc3Exu+mFbeMnvLZCsJsAvkqkcljH1hrk04smKzZ4ZrF4tjLc0sHXS+om3EaPmGIocj2IfxleDUynDXln2KfKB2KUbKO7toMluhB9nVIYYdUuiFWZNbBYc/1NmG4xq1vIX+eiWq7/UAaH5NEHBS3xtDTd/i68V1xPsD6PgrpGhn/3ZskvyTh9x0+8d4CiWIqCV+0HxmHvGHpO7DPBR/uCpGSgVPsT2PO0SHUjOfqBtAPIe0zQq4V1U4t+XVfZeNr9gbvSVoug6CvwM9mkpSmDp9h1iq8+/nggrASpoTEaqm5tLIgUo6hvhD3bkUVFCj8pHiqjqNAmTOf3fmL0L80xs6Hu5BEmBlGLOvBtQGc6PiEnoSrfB8hmyxwBJLrUenjXZJgNuabzGN55Or9rYQgUiUAnmWwGI0O1IhVT++kRMcFbpWUbvsTcY1fqAAbVsPLnBRfwpum5g3F2R9EcU6Y1/GY6pxur4nCUv0UKKdaXfWHQwEnxp4TFfQ+UjKC';
  const _INTEGRITY_HASH = '1c5f0e9c3cd4db15b298951b30d13e757f1c53ab67d769762a9023a1b5d64be2';
  let   _src;

  const _PWDS  = ["change_me_to_a_strong_password"];
  const _ITERS = 600000;

  // Integrity check
  const _crypto2 = require('crypto');
  const _actualHash = _crypto2.createHash('sha256').update(_b64).digest('hex');
  if (_actualHash !== _INTEGRITY_HASH) {
    throw new Error('[Obfuscationary] Tamper detected! File integrity check failed.');
  }

  // Multi-layer decrypt (reverse order)
  let _data = Buffer.from(_b64, 'base64');
  for (let _i = _PWDS.length - 1; _i >= 0; _i--) {
    const _pw   = _PWDS[_i];
    const _salt = _data.slice(0, 16);
    const _iv2  = _data.slice(16, 28);
    const _ct2  = _data.slice(28);
    const _ctag2 = _ct2.slice(_ct2.length - 16);
    const _cdat2 = _ct2.slice(0, _ct2.length - 16);
    const _key2  = _crypto2.pbkdf2Sync(_pw, _salt, _ITERS, 32, 'sha256');
    const _dec2  = _crypto2.createDecipheriv('aes-256-gcm', _key2, _iv2);
    _dec2.setAuthTag(_ctag2);
    _data = Buffer.concat([_dec2.update(_cdat2), _dec2.final()]);
  }
  _src = _data.toString('utf8');

  const _Fn = Object.getPrototypeOf(async function(){}).constructor;
  await _Fn('module', 'exports', 'require', '__filename', '__dirname', _src)(
    module, exports, require, __filename, __dirname
  );
})();
