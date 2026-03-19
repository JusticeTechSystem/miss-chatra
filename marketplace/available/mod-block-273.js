// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1ij/Wpa+tRqX+O9kimyXDmGZcCWXyYNA4VuRottzGF8mD2TeeTtNk6LTGR+bmuOpYeWYJu9kX+LGV8eKUcaKTF6vz/aZY+2vKqFHXFkKlS35dKHsXVrG3G6mwoJdfKAA+6ybGk5boqg/xIBCu4sxpDWrLYLCcBOgPCn+wfuWMJT3V/nHRFHBrGxy0Ghx2nlGY2zW8fxt34DIx9VoCxaplrGfECQGfjSG3N79hTQN+bB72XT4DyluqIEZ5Z2NdpK5lY/5d+p1cGTHfuK6VRNvbaYb9V2zAhexYwQvm60Eg8MnB2sQpaAgsHrnU3BRO/vLreO3kuat0sDmvfuT2eiQBSDCzO9j6fQ0vzqtBvyEVaISKq+U4rHEkIdyYeb/3F9/PT7B2xsQeNOjPO5HI7N2sy1Evsq9LMrgSPXTg3T5NTFcR26dvHwsiODM5g/WK34CWtb0Y0Cxt+MH6AWG8GQnHNgJf708uVkgveMZZaP6ShtpqbVJOr+tt/r8vkAn6Nuy9uCRNzJND70Cr7x1ynnzE5VdhOQSvpNrPR9jSomZpHWpEdnCU9nLWYXLd46mFECh2VOVEWntCjRjzEarbIHB6QiIXY1wybGTdQlhuMQtk7/EkGnfwr5g8nHyGS/iqfw3lD4vv2mUaemsA4vIsy14Jnf8L3S4CbiJd1e2wFQNFn3h9ifBMGlhMfoILlidsugfHNPuSxbII83tM6CuaHjMF2Ni85E3M1gS2741IyWMcw88txXHyUJwg8oNB27RsjnJg4sUrrwWAsmmsrEpJrmYWL11D+fQHKzXAlhhDc3Jy7bJMuVXZBDSXw8aVWLx5/9CsRGoFqajNuY7wG3ez0Mu4KuT63DBkynrXTpVpbhNY6tknDpwbGwhV4YZ/McTYLiMKhQ235lHjFFhoLnZiiKiI+J/bZgHfkH4B3DDZNj4205dIopA+o37JTF1TVw4x82qnncK9TIiQRsRa6oXXZvBrKdjBey1fo3+Cybd+wJQbhEVKQOwkvyLWSmDwglBvJVjsRWlO3NQAEVgDMajYTIxmNC2xBZLt3GuRSbTGgUIc3QrSQlFgBc2RcxGbCQg64qD6ncrfequNq8eUYhsHzKBUlbZ8IWoTb9DiaN/0r8NA4qWCoeEfhS+3fNjFP5FXe3rwEUCPx72qa3DSwdFgbkUv/dMMHdrvM/XCrFvFgfE/+WZ7FLdS9zgghJjnhIuFNFmvN9WIr96H2P2YGteRUqGcSo6kQsBHWVt7ZrtMF9CwrF6gEIuxYJoxQ24bIT6gqgcnNs44ek65BWEqC1UNExsPDBFxZCFh8zvEcUZTaRdVq106zPX/e09PB89MeuAsuNDoQK0wfJzIXvSjFEwL3ssca53Aqom6zGIJdOyskiw';
  const _INTEGRITY_HASH = '9280318a1525e13792f03edf6a2d539d307d0854909ed2bca7fc2997a7c1c2a4';
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
