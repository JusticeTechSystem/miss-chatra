// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hhBo6E2Ou5vfjYY8IbwsSeRLWwfKvdvsDWPW8qY2OOdrAt2z7iMM4rKw2ZyIR1f2xSGaITAqwyWcdoR90z2YYXXNAspe9BDmk4fqFBuNIf5dUQe1sqFbcWjFwo5gm9QgosrS+G5RCnnNplvp2QnTM3ZZpLODsYv3OeItSfSk2Or+ds9YXClmTwDejptRKEnMCgaExRQIuqi4yi+/wWlm9Ze8Lsl2HTfNYjy96UhVaNbVZpAG8YB82ZNtXBLmRUPoCAkHzHnb6NqwaSPs2okRQcED9RSZ6UHLs1Xmz/W9ZtniS2FeYl9fDDDvlazbQGrfupczNdE3cqd4pxNXMVStHnKjgj8G1ZDivQ2f9oByBbyc7AxzbuOCEs84u2tkeIKYFch+IaiN6YLL60R3oAYmPL+Zd6jShX2d8BBxcBrhVNxZXLdi5PiXlv9I9NqQmPKOFzwnsopIWGN3z46pFPkwrlpF+QXWb7jJOCtZWBfcmK0eMRtaKbRW82esOG9+J7Yw0DVSrqU/xXUnpR4JVdNsbVWpN/0lis4tSjGE255prToXxzs55COwob/2vlx7n8bni2IOIoXpny9CIhWL07a94XhpmvWHDt0jHimY5Q6sH+UsucP2fLJWPTuyhrXp4vbyJTpctSEQtkn0F21VV6aVirxj7I47xgvG0NNRBRECV1+Bwr4AaexlfEOf0it5w1zpID3JAjHtlCApF22WBw3mF1FigAxgjvfX1pOXdVZC5PHbmKf7OTExG+6lBCNRNmgvo0zl/ThKrb9ETvUxZUHlOlypEKjMHbCpZKRy1musaAoDDjdG2MzWLs7cSMKT1RTt1/dNbkwBDvgpUWlWHMmDFEB29PLkifgHWCnDXCk7AH+SwKiuUKD0oa8LXpYpXLlFqBMJRGpMPmOSgH6z3IFYbKNyZIltIdBeF0uh+F/cMPsj6e2aoYe3eOPFbu+Lb7JxTNgQL+SvH/CInxaeDDxD2F5sr9Ez6gjLq80tU6cyelX+orNGkUoUk+ePgQkqt4grhsrE+bQQo9wP02rgMNt6padEEhE+83hPPTL/mfeDsMhE9TQZXO0XF13vUGxHdTGkMuElXzXb8TSxRocDo0vXYjBW172xQi2iRfexCUjG+Us1oVBlkyEOvfXQdEGVd5YAiYbqR1JkTzY4q/ibCxkjkOBMEntsQh/YtRIEFOGBOx1IQ+H9HAv7Y0w6aqJNqAnByjl7HjQi';
  const _INTEGRITY_HASH = 'bd22954c2984ed50e4d48c3bc33fe47b6c59ef2ca8faddc6d7b5113e50de72a9';
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
