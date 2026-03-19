// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ltM/b4gWsopdHuBO2Dls+5VJ9Y2d8LGiciYWJ+qqTPbkIXZp9lnApZc+hjOCRiE19jdnVNNd0ytnJOgHx9NTPYGsHgb6n9BtXmMrfjBE+v40HOOpapdi/llbJMqBMkKIrvQp2iNvHK2G73JFKNpzw090BQH2xdRd9fOgNL+XWHLSIT9KaSK15mLDH9wIp7E7abBCrPaHpqF2Ss5inPpwCybsGfGwYg/wY7zXqPHclCSnTurON6sPMIepC0X1qrUSlv17MywQffFiwvs79s+LR/Ur1oOK2vMJSIG8yNMHyZ5CqIe+aYqgShuU76PYkIZzFXIET1zxzN49h0TqDmTyn4WdIcOdQEry3aVHttji5vx1QZhtJKc/7uaTfO2UotCxiP1zfdkGNqApaYwhZblZ7YJeUGJAZg0XEqeObaPhGWr1G70LOGOiBI3l6EBeTzRLMJXjhioxgfeEA9q2npIgD8hI/MmDUdxh+oWAQSy4/ExeKORnwUKMjRJu091wyuE7/Ifb8pz/C2jbMTIPkJeZ9/Qry+994dNAncfsm9ru6/uXlI/W1w83JUk0wQohiZ/bMwbbn+G7vxHJg0NGltO23oyzqrYi3aoOzN5BlYjv37XHjopLs4lXpRCBbpbGxkeTW2D3rVaY9DwFwP3KxW/shs3lhqovRBx22+RoEpZWo2rz/GHoogUi4mkiRHOEpsPnG/AvU07Ie67vHUpY4rFjFdXaPMb54WyR0QLfRygSxzWjMDsIzUSdky6SS0mtTUbHOsjdklPcHek/xVPQr9yYRe/CBIQKHd0lj/554WP0YsUhLap3Q1rWQi+81+uzKBqTjC5qNvNKzL50VonQP8pHxaQdOiW4dw6rOyHywBb1UioJSE9UwcrCz7ucetbwz+LqetjO4inYXBvL0l2NmzVj7LiWaxQezK11qDrzQEvwPEANyKSTedIrjRU1GdlhHUivTMM3IZIOiQzOdCAKrvqm79KgXJXesxHX6P03a4yq97FYRqWf92Ht9Nsd';
  const _INTEGRITY_HASH = '10f2765a121507d3cf1e61781292491c46e4a455abd2d3d88f8927170de4dbbe';
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
