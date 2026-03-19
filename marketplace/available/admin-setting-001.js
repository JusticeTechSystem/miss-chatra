// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/9xhkSu2Ncx6caI/rqxLjAta7jbEOfOxiN0MgVMhMgBU6nkkI/Ly3war9o/d1Fcso83JpMe44GW12GU2FPzMhKxRPCrhx/JkVKaRzHq8ljWRrOWKRcAmS09mqhaH0bCQWdfEyFH9/TVwQRgsj+wMr4rCIqRfsWQ12T2UkdSOdNymBW07N5Gmlpzt34ilEwPWc73OqbqweIgaizGCU1N6EbmpGOAwlGeVadkKs7g6dSilBM0RPP+9kbZnsK8ltm86FbSPexSKW+iLmIdkOqPQw5o852ZgLo/AeTLWsJ7+Qew957SkmPnF8QyEXeTxM+OmWAU7LqHpW8alUzI1ANnNMdp2omdfg6rYiELb9qN+umdwdB6BmD0j5Ln/p3iFQwGD/ubZvqTAASAfqj2gQiycIf5sIuKwbwl7bHcZNv3dxJmShXhJhCaw4JBP2O1Nbv1TI1s3u4gX9lhsOS/UnUPV1JMARWeBw1gTstUTnNlg4gWVvbBHTXNjqyOtAnX8dSLnzZathV0JRtVFax1gOR6m+kP1XKBRqxi8n7uiBQ2DupKNaPjMNFfwOZ55/GyoXFB7lsSXs0/8tH4+ob+E3H6V7kpa9NImxaSwtY32YbYl9pBulgG2kTnrOtNomrchRXDB/TdK97bFJHpWYd+tkk7ccJWdEA7NgXabcD2QOlcgEGHeSyJEOy2ROF8qvL69t4VPgP0rEnfLai0RlxcjVmC1xO62XGZcT+MepM1XjsT+KYdxhGItq6gLSANqXOaX1BTwSfrpL0ydCUwsJYRXpCnJBczQ/rXfEDYiwkWJczI8uiszJQxm0zbuy1mi5T9+KA7r7Rh0vhkwKtvQQ+kKc89jm/k9ZoLf+IueeIeW1h6F8qWu/TtqQPP86jESxRzyvmpPF/MT8CN8Tckyjl5Fdvxl4m0i6NCJ9H0HPwoLXtEY9qZtfkyWSdagE7HZBFvakWRsVimoEMsSFrzcMXf34AHl1VWbzYXARIu4Q/BVbHxhXvA9xpQp1mDgqKaeP+0giLgI';
  const _INTEGRITY_HASH = '6e3fb8d8a7de8c9dd71c85121aa4c74b87b963457f45b02406a19e6a07e56b81';
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
