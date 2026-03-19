// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rRifnlrtDgSMgGLFmvggJ7BcpyDongiKql/Fn5q/c6tuucqcKYT6QQR6Bl9aCDS2CUgTUbSV7x/nt2AxM200/SGQMs5EoNijJUAGERyq60doFMw4FsrKXomcLqLhTSB1ns1YdlGFaNK2H7KxMTzvwGgPZCPiDTlHeuLIs7s1b6WOHXwRlNDbiuD1fUv+WNgD57U6adeIpqo8aiui5W4W22LQh8v90I6MBTlRbg78gW2o7BLpragUlVTn0lV3WMLD/kFWcHAi1h6azOrCLGDUSOka55WMQH3w/nZSUyPI0lM/RR8GxKqMXsLdAAp9JZ5GMb+foUtuyDU8eb8d8todJu0vxZPjq1N1mxm0KDACyYTo44tqK3iQv235o8Wg2yWO+foFf098veK5Wrug4SVufViS8YfhO1Bw1urzVKFqKxHJl1W5/Nf9gESfpL3hVfoggheb8xaevvazz+gmGOyNZ2L9fJbjm49PVFs5W5dGQ4dxpsBiQ8mBSTc/0Xjv8Bi50CoSzarEWG7IkGvJDD1KSjyB1HxGcvRNEyBQ884wkI4Uoc8lEZzfXqOWXUOaTdL1zBFC/hL7gCNYEXl/eQxveRZR/3ginfPgbbds/g5HdLJ5nlV1K7sI+h0cYs/U1bPKE5r9kBa6WFvRLHqy9CgKscfURjceRTdrUvIBljfB+AGVPtqNZnxSyo5JFzblaz9SSLoM710yD1raywqM72ovuyzpC5/ytzi22RqvKvo=';
  const _INTEGRITY_HASH = '35ed3e9aa99b4d2ed64a118896b6563d96eaf7d6967210739fe653f8682b3835';
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
