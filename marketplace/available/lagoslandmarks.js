// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9B8a8rrp0N4TxJem7xamI11yRVz0yqckDsm4ECWnd6SungoVvAtaU9dP1G6WYDuuMNbAaHRuoQ91mVUbWyH4t1C9Mhpsi0OzA2O5+l1BK+B2VsSl2Cx098HzqsXggcUtI8hFBBzSyDd9+KN4iFY23FRi9dRRTqb5txkymMCNvAUPSEfAVRnZWF5l8xMvBNywo4ytbPow+VgnmyZtxFM8mqHPLZHU0rikZVVRLNCexXj55fZwVoY+XU066UdzOulEFoxhLB/YBYVMLM/6j302a8TOfASxvVYfffih/YT3DSs5y9bs7P6weqSf2KIXHCbr71sZDVIb2NkXctDtRQVGgDuOBG2KEl0ok+fthaHy4Lje4vCxtwLWx8GEImjDGQrMiQKWap5PDT0CBZP2XxX+EMxD0KnYUaoT56xhKrQkL61EywsGHQvxsoQZJSJwxDuo6ojOMsMNv6OEbeMwV8Jv/cAh792VO/YaKX3936BdqNvhVrE3z7hmIpVEKkhhi2ym+uKEQlQTb54IwM6cWCexaCOnwB0JybX3li41sv5GVtIUXb4NoBwXPFkKZKWhlVMXr50Nwltj+AAczEZhlrx0sz0K3AiarQC3dsokpGJzcYtKa4BxSsfJge8iaWzKn1RFRiEcJ2jZCnxZKUCeuJ0ccDT0otdZxfc85fBB05PUQGg12qKymyo4AuRneHiL+4r8GJhp+7160yEwX4cQ4BoO28Jd9WlzcIiab+pGz6yoBAJnpnUXjCLAHPqu9TzKePoCoQephkuXbIVNmLtelULufeA5qnRXPx6enQJcNnCcRnl3kaQQGgqryzJ3w1cSF7O0NIUVuoTGI246YYgnoOi20MH4Dispq4R3Uq7zC5OqUe8ZJaBNsnPkN8+tEM6csUvgd0M8uNWF0UWUUPQjbyFX+ZrPPhxwuFPQskwsD2rGIZUCfl5lu+0y2b5jXjzFlrIjDCPLNLVDl3w0BEjCwmcfVm/Ar1K31UaChJQDY8fMbi77iVOdq4RcVyys2M8I4Mhsx3dzMjNOU6wza1mGwF6tNKRyVMo+BK37kTSj/AKhBtvwd1l5beGtK7Zc+Cu3Qu2Y7nFy9w+oXfjVV8TT9UTWwao+fYpjIwP+b3vWaLFmOsoRH9cTGq/WRI8jD2Ehnf5X0kFRrptgIVK+yw8whxJymoZU0dr1JkPLxbobLawGZ8AatAhiBo5QRn+ItyEab4TJoMcwWCIRI/oUzehYYQ==';
  const _INTEGRITY_HASH = '384c07d117875905b7b36416b849f28b424c6f7152c5728d9edf84024e68f7e5';
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
