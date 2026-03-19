// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Kepr3rKrMk0n7jre1vx+6PP8x35Rwr35mPWdYpIarM9aGmmpXbqev7A2Fp8vKxA+2tHiLTilJQ5bMQLcg4JmboOIYaHuymqYC1GkNye8MA/Zu6CBrpC0PQPL0gJbyscZQl06hpzEeB5qMeDv/8Vzf64Lah51AX72rDJhsYkB6tt2KdabSoJUHXUSFR5rWE2a7LVU6Q1Wjd5bie/6Gcn1U6ELanaV6FwHr25i5n1CesyMFcvcl2X+wsTfRz9bhuuM8b6yuCKO0l+kOECvU/T6Va38oQF/na1WKkvBvFiQ3MrFDzJVxlaKLLSSMNyB2+Q6r2xaKQvrF0jfqnHCdf5GQixgT75iCvJdhvoJoyhITqRZ/FNSmp24LstCYz7Bs/j0uA2f3zLNkWEBPCbz/cS1tPS+9/jujJylYw7Y5zsKSCUwoYqLLPnYtjnfbx1NpEVHuoTYUw0mcY7n7T+Mpysni1sTt6izsstBK0PbJHkcu4x8u1mtpr/2+6tFImnBUQgKLrSv90H0VrR0xLLLRMoyoXlHp35gbM4Dv2/vMyq1bdfAAZjPnY326MjcEEaz7xqoDJM7kgLXqlADLqKaCA0YZWIu5yNU4ugSBdHL2E4aML915Teu82OCniLBwH7I7aBOW3Rk2sjUb87auutScdOXoBlWhVKut2B6ktQdN47nOixBjPsnxfsd830FgTJIaefwGosxdrzuuQxuuRzsiILz7rnjhAo=';
  const _INTEGRITY_HASH = '9c01352f79f6d04ecba59788ef67f2d63667379099e1a9a55571921b33c7835b';
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
