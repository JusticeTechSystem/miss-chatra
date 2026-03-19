// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gh7UjnEdzbtwSHuQkoZL5gSSyl7e9WFG50Pzh2wLEwwX6EjzK4qgMugpAGyUYAlJBvgUE6I+Wq7nDEIqvjYH3z6d90ls/O1jKwy9gD2VKVamut3NcpWGnNW8eg0kVv0XeDIqIjwysbKPGw0ByqBvElcBxQrZEx45ECkds0KEje0eA+VJI/8vGwTFDgfjEbqZIqZ4slHSeHuA4Zkg5dQsi/cP4heiglgYGV/rpYH3+tx7kELL7h+P1iBGRGMbQhvqctw9RVorPuQsSTFmfM49F/e9nw7I0HuW0B3F7nwznKp0Asc8RhHSKYYveC+I4mDhZdPyjb8aHmkzVbuH8vaTb4iygsFk/sBtTWPqdZT7vSYdM0P6zZlIgeXX3Yr8/WF+b7oEU1askNglPzMiay8Aoy06+E41aCsTe9HOK9RwW/SKfGYAm6T5R/mDPNDk8yVU6Jm4u05LEGNadnZzyOG5uGGuiTIsPBB8Nv2rURZ8sCR6wqj9X1yOGKR8Iks1fDguVZYb5FjOkH7x/OM2tHDmj+5ll93WTO1kE4L7fgT0lMgPefW2HsgJkPewsSEXelp+amqdLfMQjRQ9D7WhP15Q2lyU38BoNvcZd927vXEtrh0yuha3o2JsXO+YTkS6Y9XXSWKggbtMNiU1wNdI3JmG2rl3BcsQRMohU4veULKGRVgXxxekv6LHArauP2m7aD4tj+kO7yeaKNgPVaJG9smhgw89lgRDKEg6O4VcvRc99LFL469YTafdMsugUM5jmyhEFfdDiFzMoC+QhCJ02JQ2SiBK/n3jgF0tZBa7sYcV3EClbHt5rX7vD9cGM20tD8sRQhPSXUkJIT15kL3HUghyKg77GChhoRg5Cb672DZJYAgzDRAtyCt5OPzKB50Ie0RK1S5cZV+LyyBeda/vVWnFzRY/Jj76/WwY2B2EOEJnolP+LdSWJI5lFrYytfMmynTZvZOwyFvwTYmf7V472txNPXbBA4ZbiaLn3v5exRgk8bj6SODy5f1BVR61DY7np0fO7ivXuIJWmhEKWSqaOec7QlqvNrLPvBCFl4npfBRcm4RfwenS8yVO8zAg32v4fWEQ7pThphfXvKELosWWKhq2xfYuh87ymTDn9xCvp1gbrxgals5bddBSu1Z6g9gVaAzZoOaoUgKY3ElgqA6GtWrLXGq4r5neoHE5UCYxpZPde1ILSJRnRQ3FnSLpq3oI0SstWDBD01lGAP86wu7pNg==';
  const _INTEGRITY_HASH = '4b1dea3b3ef7277341b6908ea606b7d334be9ab31a570eb330bc198a1469bd5b';
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
