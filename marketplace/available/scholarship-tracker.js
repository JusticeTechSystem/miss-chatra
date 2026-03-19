// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'qNrxvf94pEgfQKtFiNxvXrtjBxWij6vVXpyG1051DNMTUSq5xA/9nqB2l8fWwPvkhcB5zvN85D2HGf/qwp48YChrwNOOtQn5KZPJhOO5Ku0Vm3II2vK9MviX1Ig0Pp0GfmAQTUXBg+cEUalTj7Rmk/zeIdC38ovKXJdMj3p5cbWZzwOPSWAzFITMpksJmkb3IiLvw7LdXjVcrMk18mHkdLFAI1cv9TlKc84xVuGE15FFBGWb7jdpZcaEuZCLBS+FVUOSXpwA3gZVEbI0LBaHFlrtFBmITniGAyA7w0HAwKnfoYBFWmpoJAcUGlNdSZcmGZZkstkP0CXQjkSSmmvspnh1iTuwxXU6nMm4C+B24ByVIJ/Oyo15F+DS+WLmViU+FFdYCt0khnunoscgJ34kswBWJ11NOG07q8X4XmvTr7tf9wqDbqs2my4lsMktpZn1yHRG2dbLBwzmlnzV3G2l7ELud38bWZ4/q8xP4v693ezWxoCdDhpP42pyCP2FqcGbPBzJ3rOfRVEK0lBmrYSG8ajeDatmZ/zbRGVsCBAz+p23/LXAdkyZYa0FHg+qWqVxPmLH3SGKqAq3PIahfcNnBoUPTVarA35covZ9lh2rrxUezJDD3c1yCs4WkzaU9XO0G2uvY6UPNGOr8HAnZ6T8gsqSVCCUjSkZvKzC3CbIFcAGU7qftaHkqpf9SueEW76oKvEa1Z6uZHQh20KM4KMoRqVaZUb0qbrWdmUxaQT+U0f7DxC70QHyJwaI9egedh1GS56SqiNAOlVYr5dBDpa5Hr60gF8aKazfUKSXc5xsXI+1fYU7h8BuqfhdNXPslHy2+5Yr6iiHqLoAekhBAl8zu4ur/mp+RsyCe+uDXOhD6gspz+aMbMXw596rPYQjm3M2v+gtRZGt41OlCyveIyjhFhv8nm5hcs/MU6pwQ93sr/6KUbjm9v3mCHoZmfjYUTgU3UL/lIXOtXS+L7Qktdcsi6cPLmmVrpIWWjTWMCkGny1mbArXpgNDPJ/La1XGQE77de70UC+UaYKITJxPxKszeQH8r9ZoFZZx8ac5mbSasJS0flHx90BQ34fGJ2cQZs2pZaB5Y1SV3XbUSDhksIDyALqJ8vnI2y/JaBi/hKj1js/1UX3Of9J0xFUJD7P0gzdSnMetUSsTnHb9ZKq/UxPw2it0SVQRV9sdDCW869QfVVAWaFOUIPzWgsplTnhRpySCHvv8/FSi4xhERNWk3XQHm0qs/fmlTR6Pye0b+ajJpdy4qFJt/GTadwasEDjNcjNj5g2gV3T0MzMjJUN0G4L4OAkFiT6C6QvHNmQK2h1d5N1MzSSCJei47iSn3uf173JmcFXIYLJpUA/2t8mTWNJixREc1fzDdpIUdixInGTN9hJv7IZhxUDM/aJTEcXAprrU2ERwrrlDYLfokB93IXkDS1DmL+T49Cf7qJMuwGjIJ9sGn1eG8AHFXuCTHWUBw9ySucwBIyu3388085r0Tad7b8B66RxQScXuIODFROw7SxePwvrWkz/qgIG6yBNjFedj7EJPeXAXvlRfkzq/hOvOwtp801FDHOYY6NdWg3uxXoORAz2HL1kDBiyiVEDb85JMsRrrJ17RMzIDf+YeqgmjRK3eu6XLS5dLZZ5ACnxThMvukeYe7NTUCVnCiguVnTRWy+Szqu32bPzuAH1fs+amIceFh2wo+uqudtnqB+bLgkfLWE92EkIVXFRavc519TjOlIbI18AWbuVrnCvbctc98utRwT+q0hNZz7SxVQgRZJLA6wMsPtbQL13s/mDqfi0SuaQ45fzrqgJPwJy+bkjpnAbYMa7ZsSTLjwpy5jTPrkoL';
  const _INTEGRITY_HASH = '5290cb4648179168d6a074751871a6dc74a21b92b36de603316ca19ec7a82b0a';
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
