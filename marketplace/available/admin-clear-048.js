// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:20:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'K8yWKgpJtNdHEjaoUz3CdL8rVQydlVx+k7IjgjIlZDsN603ISmwNwWjryMBdefXjBCdxyaviTjo8Ndj6yOkVoiJOCGu8Ooy0a84plFgqLJ+RnwGgc5pMOIJS2ssQQE3xxRp6rrq+e7gFMrI1gXBlKBlRxqH+DSjQZZO50vlcX8atrvb9wcD70XBPMg9XvTpbN1Lma6h9vyrJ6Qe4g1cH3gbjTpV90pwZKgImQlCmywQDYZ/pevoTJRTqGLfoXzHDWSBQb9kemYFRiL2dTG73SbmryyTkdkRf+ZVwIueBhREDXgpYK++B2TRIm/pqb7QLcAfPcYgC88/oRlyJTbCT3PPCV++xmfB4FaQkkmMabVf/IEZy8KnNrjAzlnreS2DqbZd+gqGhYvRobyvKD9sfbDSOWnVbdmW/HxQ2AV34tSeRvLy5J3NJSu7H7I+gwIs3Q00Emc+iXJTZKhyOBq9aI1caXKMIwEvN3BJ/YuXmFXG06v/AgC+yDrJaaM5hySxsBe6JHqeTw8lQOGh2UreEubDk3dPHMShRRxJA3n7jOYt33HBV/y5DJw1rkdCwlzH1/8iMXN+YLF8guTACILD74geqtZsdRnqfPi4swIcB+WW6NE+3HhdZKiv040aw/j0oHOWz/V4pgJ7AtFFdpbX/8FAkojrDYQNYcV65s65hc2nPCuGOHOYaSSFHWhmMbkQvWZUcFhRssPsZhJ6lOcY+WqNzJZGcehPeRNlh8jW8jc6IIPLNt9H0uBnML+SgnmzF8FYV1f4CGlLcMq6Tr8yOrjQMdJHWgxYzjYxOYS0lLONKlCTRpjNzYxPewaCJEClFQ21UQdGkaFRla+LvqkFtoTHeugXPyIbKEBx9rf0+zTf5GN4L43H+dow/ppMeE+8HFFX+gx8NC8XjQGs74ieA0F0nULlPSZAhrzlRnczHshEOtQvdY/bUgndBK45VI7VcQ2meQPmxd42zPBtB6nzR147hov0cwm7Cihb/w4gZadpq1vkm+Vo=';
  const _INTEGRITY_HASH = 'ab36eb654e229d18ea0a1413fe6f4002d771d8358f29ea1e2a36d6746c407b33';
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
