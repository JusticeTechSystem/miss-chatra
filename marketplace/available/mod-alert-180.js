// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'h1J2//qSiUarRn3lNNcWKDa3+uYS+71p2T+JAcLgMYfE9AerLQYLCA99ymPLJy85XyekGZ+Et/gJYSPcmvANuAAR9rJMUN/WpuYyOvbIMCwMrdmPuxYjLMITYhj9/aTT6xYISSqM8Ikc684rL5jgBl+1RswdJa8gtfyEvHiU6e0OtMCTq295SKKmJIQcBTG1+bS99SZ+0Gdaw6eApea96JwX70nnh7jaL0ei1nWewjAjxAlYXOTv6FDN+WCRp7Nh8hVoqzVB5cwF7P/s/g1QuKFKmI/YIZ6Bt7WABMCBj6uOdRjm4oRVs5UeVkTOJWfACLY2I3D1qE8hhrIu9WsvgLjO80LKZEHFTyny9UiNviK4c+7gN6g0sF2Hehc4klKJOxpS5abCcCQhglvMgDCwofQK9clnk0a/PeQJmhAUT15yBtqibBy7xJNzG/BWA7fsNljfnxNLYePcfaP+MF7n0miKRIP94QBS4DcNmCsggIfP1Z9EZoeeLUw7HeRMeLlFyPLbTG6eYoy5yKqYdcFwGGZRynxmHmHN00oYTnJDvuMLBC2XCsqAeY+JKQS3Pd/h2Mzd0ALoHYmquiUgbnbgGTkHqrvfxsUinLob5KUz7RPr3AEac6zXgbKu2ZMvkqMoy895zPRBJ4o6pa6ndOUVZHEciuXqZD9s92H3gvkdC4yNmDfTG3ynOFLkGzOAJbamv+SxprmINI3nq/cI/Dx59EhuHtsEyyXidz/2hRMDLXGLlMMYYDdYlf9H+S3ejcuuRmfmiuu9Kuit/fhzkuCXwJ9M7jEhZFFu64Z9ZLn4FPVp5S11+Z2oWaC6UHgHtwgr9dlqhzsNg6/qDPCrgL+R8aG9waCFJO6AiIowqvYmC95Z3VLrPImD3l8LssdqaDcG75wsFimcz4hWdyqyFfQAimTcd5oHOqGHb+HjnSLKccFmNMkiUO00TjbSjg8a7oqej70Gc7YIwp+tuxZfZJY37Q0lz1swufUT4ODs9X7ZyfoG4K29OWkHpi7qwkoj/HF8TuZM8uMbDWzd8AC4M3fHe6OqsNzy8/g9FbG2xGB/2DTWQM5kjJYH0v3co96BF8suZDM8m5ZRlLkZ3gm6mwuw07GgTb43Sc796MYyFlHGZ4Am1kc/eNZl5yaixgGEETxRPZSWGV/An5jv7bJk5JoWEV2QO8bt1V5AGEf2Q+yvmz1Ngf+jF6Gdr0ELiHd7WxrJUZu8ccG5Lil/ORfWJ3Qt0VEIuBsX3SRZbvwl7qxouVUu4bqhxB3BelxbiLlS6KRHyqZwVRO1H6L6twA+Li3yo1lZdZ/IvsmhmhKjhSjUYOXekHyhj2DjyhNuCKeYRFY2F+oFZJFdmeYm7tETgxCSqfoHJi5DO3rU8BLv6+J4';
  const _INTEGRITY_HASH = '56c98391ecaeedf4a11a4262a30aa6bbd520e4c6e274f35919d1175572919213';
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
