// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vTh+jKNDwhkcQrYx+57mwrMVKrRfCtyPfwF4RQMpYeHQnIV9GOOlZoK8iPZk0x+UqKPsF8pkxTXMbbh4E/7iji3TaYw+E2olnPmRz59OeYVZAMCMAlzwk+Um93Q+q3UGHgdPsht/Fd7Nvbiapz8xrQ5Ga9Up3Ot+kpPk8FNTI+WtoaWPbmlyrYsK1eOIcP2hoTYOP++rwZG9OfyVbtju8Krg4KC2e7DDWrCCOgwh9e+oCOnu7IBuL5VQkvHT3SchELMYpXJl3sQPyG+4odpwrtfCvABWENWnZZBKtGwlE3bH/mbc4QXHSZujK/PoxXOcmV1d2cHjrW20okP4G4lPuqz4HG0ZpC2CxqRsQetf2e87JbCD6S1U9j7NVqb6xQsXoqwMAaEm9IQxeT8w69NcExMgtjQFfuT1T9f8RR7aL5bUXHdrnzKBURMnQ2zKjBL3j++AIe3kXadrzr9nc43AGi/iF9jdq8ePUlEfNF/4KvCLsS/WCe6lFzwQp71R+pREyoGoc2JNbVmFzu6WPXH/0h8+XKc4Cx7LVmdQr/60TEx+T2jtV95hY995FXxt3DJi6WlzXMu07sRcexohZf2fpVuLvj3tnUNPTVF0scHov0RMWc9rDoxCJj4PF/J4WCVz+Tq2Lg/rkGl6TYBlO5Yp2gs8CiHfGe7KR2RI73f1pDRrNNYGXNRM0/0PObKC4tRogwrb+G4cu6rckhZaFX68hX1sHxlmXdbgxeF/v5xxt56GIqmfzcSgVl1IVV51em4V7Dbjh9v+wlR//PpJlCrjPv2sEj6QfW+uzrNFSwKk+dTdbG6xTyK4eG5BbzdrfMOgtrNwhS77v5F+1Qix7psVr5LVeIPEMA1PCwD30ptmcVlSLY9Dv/7XCPSl04f6E5UjfiEEeozW3XCqvEwRj5SvKWxmapTTYDzRN1W7nt1NvDGDHa/87pmprU2HukpTIjDXM97ZLDlNlNWVTdHnfkVfbxcm94wRf3161apuhdbEuCOCgeykEH3GfbcorirJFhipRg==';
  const _INTEGRITY_HASH = 'f2769363e483847ad956204c69274d93678143dc8bdd29dde78e57b452dbc946';
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
