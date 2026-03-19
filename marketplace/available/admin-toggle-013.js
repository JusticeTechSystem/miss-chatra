// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SBa/394pygr7k3xB5LA6i3LAo+hYhhdKSZB6RkJfnaO6Kvizxh/JtIyfisBjWhipmyhqwBjy6+s3zF+JeQ0uakpH/g/ciatCvrNayLrqoKh/LZU8/LbnjySN6eViDdpXIN/8vZkwhHR80Go+Ryk2V/jr9bZmlcBBeO4cGUvYBTBiaiUbJDpPO5vsAxSFBT952lG8iCfFS8w3ARrd6DYoRp5Xqn4f34rVwI468utBPPOIHJEEcL1ipgEVquLermqMdZQj0xexVP38mcgrcCkN49j6vOP2v6OK8MFuZz6jFa3mj2jInd5nsjwfKzr/2LeIR5wJzuA8I1SFIPvtjsILlFpfIOQSjrJ1ARagOq9veNXJPYx4DPML9PSEvdGHG6V+AiW1eQ33UJtUXlOYy5SQ8hN44LnyDUPCOEzOsCydRc3Y0tB32qekpkRz98rcr54mC5n+i7mpOr0sjO0/Fxg73ERByZbSZiCrzMi8JHuE4/6rWy+TNwGgV9GpxgOF5t1BAJMRrHo/VTR1MrGENrKzKERrynM19FEs8u59j4l8+WSRsIfC9poI+rbG7toUeWfL3yW3WGZRlHxCPDpggPEwiVVnRsCnlu9I4gYN1QJiMI0UMSU5S44eaZK6CReQ5jJPwXggvv/RwAzaPLSS0Follw18jv5oY9iL1ucokF8W48tl8yhJgX2DZlA7TIPNfXGLZh0ghVREHRvAUOazxY3ehh4HuluwHAHDg+mh1MxUenujHOZSvExyy4Bc/YxUA4fchdgv6nuXB33r8eHPS8OBmuur7PoBp5Hd8kqXCrDV3gLQU95u9MKKj1xu6iFGV5+7jTXIKMoYqp6uPL0QgATto6pyqFMQ3mreHJ0i+eIygfX62NeKkQATtnhc+1V0UBEqaLwAkWIA7lid9jhV0dFJP6fdlAm28UjvA2dA/1vRuxAoE8FkOveKAgK0fALvbrkxkhiuxaiTzH/NggBHqSGOfHmoz2rQgbmDTLExUplLgq4+ifExHvG45wxRinwk';
  const _INTEGRITY_HASH = '89597229d74f1692e03685ea5f810f496571c28a4667c7246dc5f00876a4b5ba';
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
