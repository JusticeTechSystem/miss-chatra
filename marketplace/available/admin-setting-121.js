// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'AkgqkH1wLXZaeV4WLPhyPTFY/7vxp5PVLDN6/mKAJxieGpHauuc2Qs1KPMfRZOBUnn1LJxy3PR3GTLysrI7YlMp3hb7eIfwQlmbdr+MYUFWvcU0Tg74LXuBshSiaIg44LACXwb2KsUT7kxaIQxTTi8SUzxX1lBS84rCePaxg2jFz9WFpIYA0mnNAm2ZNJQANWEyxUV9T6mZq/mpUGIgyBx/jj2XqkLBh9jan2ggaiutsnr+RK6+PfLN9rZbOawLB5QawClVhEhI8BSdHGPAjH+3/aOIvZLSs9QSAkaN4Mwb+Qtd/pFm2cx0UxVdoy9d+hjtNmgJvEhy0nqDrGmivv7nGDH0DUgl7uj+fMN2tX189IJVxLLoo3VQZrqLU6TNCgzG0VKiyIVHecstceGDxrla0JcIBg/ddtKrwvTxVUKZg/67w0+S7BznpkSGCPiJ7WhxAlTV/MFuLSKXpoW7bWKnZJ+STiv1C4LEu7+lSP8mv0YCDz6+DYQ3itEI/hlOhdkV4ULzOfYYgVX3E93ERiFtyAq+bWKufBQUbdVx2N/6oowdjecUapQxc9/watSjA2S1MdzuD+66zUBAk/7fKvzInscNKwsSZ6TLFwTtjrAgNW0IHzjcPidmeWiSlxYwX19+mR1WU8/Noyg5b02enF6H/xq6wElR4f9dhmIzkUKHzxVf6Ap0TlU2IYjI1PzFm+nsfmf5N4sQ43oreU1mQNI4wz576N93/iLLSTvL/To9RDWideBHbWwi+IDJ+9YWqhGDWasDa9KpZLTmohHswr00SwbeSqYH3to6NDKJCHrSL4gC42I9Kr14O15KOEQosmv4nhkGp27XUl6zdEjMeqQ3fMCUpBmNqVoKl5f6mwJbGfJVdLbJmUZ4XUUA+H7G/9i/LRu4FCFVPBIbSX7UhZfbNUtTIvMVyxcRecRPV5yjb92irbhRZgG9SApCmqUsSd1hU4rqgajkCFA3ORexHeBMC9xloFhuWxy+40OmoGLycYDoZhT5Z9irVZk0qIeJW/KRjqYDyc2g=';
  const _INTEGRITY_HASH = 'e4ef7d4e24a559e4859cc41139b9b1981b1b2656ffacd5801e33cd2309ba9d3b';
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
