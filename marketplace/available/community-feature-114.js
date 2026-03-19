// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'XmvsHUAuCMrr2s1R+Og04h+5/vvFw2WX4QP5G6dgxvCgjTb66bgbuqLGGH6rA0j5tb2Ix0vGrwfrHctfwul3Ph4IOhNPZp0BQfS39ujvWwjYCxt+qKzDFmprxyhK2hvKuruxb+66rq6D4tAyxI2oIzbA9Mrh/k9so1PBPHTDpG3w9lVvbPUvoq0Z3Ulr/Ev9I6mg53fM213FHjWlXCnF00WKjbcXI+67VrdY6ZVmQA/dubPGWnU/GpW4hyH6Rq4adAI2s4l57YdB0vBYWnd/260c2lU+O/ap6NXRNPZEppbqJgJ29rOpN4OA5puKFxzDVCEfiMGki1kFUeUr+aoym08saSiReLDIshKeb2VPAkRQcmICwOdnZNgB82VKYyixJ5BKUx+ViOx21EpSh0wbjmvWNJm+y7YvF0z9Qhrhj06D9AeB1oZ+d2Py3hlnW0EeyCHYZIghsj82Bs5WSAh6hTD3dFf3QE2tg3tvORI30qUEgKzdNXip4fK1x1S2EDX2ry4YECSxpMQavIKyoNYspNz5+Lc5nh4lXer6FRVpDfV0/MrEs0BV4viFC3yYyvDagJbVw/KwiHy6khrB7plOhX8rRKdCd8lecuNXGzxn9S2JryyboG+7MX1qkv0qEVfvFNJI+l5vKUBHEivMlqH13WDqZlJgqnpAmjMYw1ibV8aLEsqGC6d6Bkresnkno0oGx7lvMYjnEp5IwR90BcDKUU/MDPpuSMq5w0ZSckFmhCwK4sKXK0g=';
  const _INTEGRITY_HASH = '165035f197839d344c050108b359a72d33e77b3d88b3083cd319565ca0001897';
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
