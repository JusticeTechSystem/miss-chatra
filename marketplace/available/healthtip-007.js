// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2R6bP0S/6mOPpR5kSV8c+vOshNFlrsO87hqEXpZQoweEuUX+Dlk3dGY3GG9Op+yK8hptcvPUmOF3vwr97g4Lax0Tk8dhHUYj5DVdWJBh27jsf8uPYidwHvrAQ13M7RoATWiK5/nS/Vsz/F/8nQ9tTFYsJhgOMVZ1x9iNdAoSIU6RmbX3ryBnPtfiFy1cK1lHSAlLRuSDH2s+7ZeVHR3HfYDG7v27FXV/jZGfFyeg8qJW+AOnNzw0neU3x/lVAckndw5sPDddjyZEv7NqXi+qBjFXqDNFIaW6TbJBKKOaViWJTatb8PXFJFKLgLXF5r49f/pWCNHZJZY9mOInk/fCUnu1YkDGfoHStOJ5H0d9dgw/3Fpv3UPJByT7gXZff+dUFlawFF9ajSoW5TK+WydXJWGK76vcyiYxcgoDkGVyyexLibDIb5kehRZpTtdY+0VEjsjXCuWMJ9m/v0yGz/0J/nCHDYBA8JUHAEIUyztaffbd+VCUVkV7jpFZcy4lBwrjQMTB4WLy8jRjrVbmf69899e84IKLORoowxvZ2rXu9SJ57G2nya/4/ZFwNdKR/HIlVIzJYgy9ei7lo3k1OkcF9qxkr5NvtuNKS3sCC8D/BH60W3s5ZLj2kwjNUo/BYlVbKgY/5Z0PE02JsW/3DDLJA2LNWFCjZ/ya/DoZg4LokGRLt3fUvCmEmVM1vOAiAtRLq2/iecKJAdlMpQtpvAFeSmbDVcTFE2ojXQC9rap5fRRTBcKLcwYCNT1dxO2wRpih47yLp31NHmcafydJGfxGETYHwtDf841r8sOpJMTS/mENiXbU763d9edFOoxmIieHDR1iPILwKRWzzszWP6pBHHeAuQMHsJwgEUCvHh7kZISzxYYt65nns7Z4YXknUmKNIFPDx7o4yLcvKIKKLj/a8n7JNOXHIu8ztWj+yMvsX2pU6LkkaUrFfQ==';
  const _INTEGRITY_HASH = '40758cc0dabde933173a354ce4c10020be8617858ccf86a5f1066b04cf47c16d';
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
