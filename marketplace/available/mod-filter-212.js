// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1prSdBlNiAUmic7mlKBMBQGW19nO2mlZa6buat0CewU2vLXavEDdxnHX3dpSDywu+GBao+MydJ3gVJAX1nb9AS6/eQUQ1r1WkGKiAgX9xxuAyrMDuE3DCM2P4hFPugOlEPCbDZ2zXGlitfI20JIHQHlsyoAuDlr0Vdtk5jIBDw7BPRsUIRPHO83p2Ne2FW7kynsrhBDwiM/Q5NbFhDlQ24AbevEEqyrsaaBWb5sCQ6HGFcAo9Yr9nKZj3mIRp2NMDe9hixcLCn/ptaor1ANxpDI0+2oYgfsY5pUF+zL412y6U77RBg4MvMTBb9UGBppxFdCZ0dSB4jaxOf8COASQOtFE5Ci3X+GHn3hqqmyhG/yO6No6ihXR1GgZylYwQicXyKEAgyqQtu48vkQXIQMimk19Z8HGRj3Dk8Go4/ZCe6tTzDGwTL9RR0xWOtVbnjKjR2TTKAJMjYQDW0UhRyG0zD1+Kqn2YBY4gGSvhY+aJ9Mi3+2e56sEYVJBGtCZoqFH2p2MX/PDl421W0tJuJBcv3o656kh6B3VJgpqkpTSn/4JDeNB77mHN+zwtrC+68sDmzwfxgvT7IqJK4LiblAR2Yd0hlOiynszOGOp0BEZSBXLvyZbgbSXM5djPDGRnCN7FEk74eqdMW2T4O8FSN417p7/2wTxld5RvuccM06a0FgsG67OAB60AwLEBgYb6pwYPqNqA9BUzfrVhFeZp8E+A+Z4qF0h3EdTTqjiMP6XVQzY7UX4u+3hzDUxZOHmOEjKOdfrHmVOqrZCDCRe3E65mx/c0L2/DRzMy9Nz/Y+vgc+pHdtnO3l2/M+7n3s71d3EQMcFyBB2sc6Nuephys6UBBDzIDWdyIUis0sHpx1V7LetW9kwI0hjR0mELRf1R8i5G8rEkMkWCbMvE65JsfYNLBs+0PHq3xw1k7QF9g8mwO7bw2HrZdELFteti94X1/SfQXXlT0JCEwZx66uCnDa00CoBQvVJ4+Zlly5Gm6YBiJ0i5nLxgeauNdVacRxQYiGT+zto9h6eFWgO0OMYkd0tWgp5p3xZoG0APDdJbOa76aF5Ra8Z2n32IstHYinMe/YqZmc83715IdI2rzDfF76VnpFgMmmD0TWA8WiHsE7bZc9xCMxYlts6jc+M++37fxUm3YWRw/J5BgrnRLXEQfKglc1546hXYSCPe3oHqBY3K3gfKxYX1Lsj7yugsPqCA/hbnd6cXkIKigbC13EyaPUOpSnvfGX0948vX8D8lWFD35YDZZlZpXr+viZcUdSMA8Wc32cbZvKdcvMaIL4VqvyaNHZQpfgS3xFxEDa77rXJtOKXw0rnlnxcA8t22gcQtFr8CVJf4Xi/JSF5zyhYMn928noPIA2W3YILXDBnZcbztKaEN6HtzFxMLg==';
  const _INTEGRITY_HASH = 'ee2ee97fa53e61c2e3a8082853a076244661deb8418916393fbebac3e4b9886a';
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
