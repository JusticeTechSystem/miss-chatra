// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3dAo/mjqoDoWA69H0Bv8+jP0fPATlBvhykt7ERuvaSWsTR81YsyC806aaWeSaOV2LKPPxasgqXhZM6DEVHl/2KunfGfkoIEZ1lfrrQ2t6lHgJaYGbQOhidYGoad1K1Dfq+XxmF3rSTCMZU/OrUF4BousHjxBdeSy1opthpTAIbi6mZM28VkqKarKfdOCNwtPZXf3bwqAno+MMcbJLnYT/XLxSpQxsRxcUgWy4H4V57SsosYvr5xpqRQfFko1LZvHA1pt6yAk+UKd2zxLh56ccxsizrn1Cj8EL9UK+0Pn4v6D76ACaRp/dfM4tlhSH96b6rZhrS+Z32xU/963LA9PXormy2deAxs5KMJiMEfh+tvzuSST4NTAjD+FdM8rAEfqmmhi7PvABz/ySv07qtQGSj1JxU7GtirBmJWujcU3WAzJRCdTyny9FO1tSeLpfC8O3FJ72AHW3MpUGFu7GvQ4O0xBuJV1Xcsm/Ls4j0KLHvIPukltFJU4D2dizBwnuFuNly6ylwXjadWZYLZnQNkOsayqK6dN0Pss0H6oq7f3ONFG4ytD40mnLun9/+JE3f8x4OFtkAFZaAbOUJKxzu+hzD4G48SNzA5Ipz9VT8iH5eGnlJ+49Vu9cbECvYKhbmnpAGSMZAaVm0shXAr3vMgeDoEstXhkZTQodzNvAczzqkqodX713Ij1jCK06rDlbjeJpdID4kD19WN9Nz27O4dmwizBuD3CQOOmw5cnfnjlVFSLruX5P32ZwnWwfidvB6T54acnSm/DuyjaUHkQ9Ewaa9VbBS4l8miphn107O0r5twb1XUOdHV3Dlo1l/acdkDJWYMIYiTFRZN1yXi850YJnMuQw5Ss3C3IjXRvC4N1k8UN2eqjt6+dZncd/55Ps5CV97d8iAojm6zvJG+zxs0P8yk+ql8KKJ34TDT7SYYZ88hwC0N+pEpsvL6Qvxvh1PwsII96YG+gFoDKgafKfhXHAYHDfi2ZacwresNh3e5J4zjyZy2oi/EX37WkKgDe07qmzh3nCECzcm1pTqHVrUUMw64ofQFVjg+jnpEh1nphJBI35CbBPPA63IX9LExUwRc3BV1tcSaBernJh7jn+PYITIhmiO8UUHbbbVOT5YdpUCeHGxYNzTCDuCaiEaoUF9L1ic/yo1yOppePJ59rCzQ33etAKEENIVSfouI/xPd4o8tSZprvgcFyplqSBYiUyk/ovW7aTJLa3qPvOCblq49/H8TPFe36IOmdvcBVsPjzELykhZITSV9cpeVoPfDp7HSmatlTRsEtswp7gknFys6JAVfiC77sXX/p6BTigDUbckUMC1a1aCduT8aDYEJZnRrCtmBxo1oVmfAFx0gTirzqa7SMsg/pH7uGwver+Gtfymv+maPZ8VwefA==';
  const _INTEGRITY_HASH = 'cf73ff1e376a58772288fc265d9d1ab68efde4dc962dee85cd51d5f9537c1d00';
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
