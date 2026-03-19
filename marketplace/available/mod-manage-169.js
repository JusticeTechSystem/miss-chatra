// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'HIKJxtRfgEPQnZH1RB4wQL5qVKMFQmJcnGQL337CMv0SX5LyaPmZQ5DuYUdd0GZ4NcWcGIAy3V5AInC97hayeqI0+SGamNzZEfnAFm8KleL5MSTxnYQIpWCFeCNNa1IMI2jI4jvp/vdwukac+jpUwdWvX2Bt3F/uPIgRu0CKqW6n52OCsuSRk6jsoHkaUrXBetu66T62MLJ5F+JpEGK3FPL7ARca/6f/6w/F0kx9o/CuXRev8iG+15LOEhUAWUv9IKMPuvfG1K22PL8nq8gR7HlA8Wh7SB9tiGaZJobvhsRyr8Q9yMQQX7SQPTyMWh842gyUder4NCChV0iOCOmqrto/fg/3NbR99dLQC+UMrMcbDalwcTAb6iQD9+r8gf3UOIHODmayuJRQTGpS5iXXfOM8cHfY6k4KL/j7flarwGB+JiIDcFrqcO4D9XWkhVvZoaJGaX6AwWsPKDoug+X0yH6/94ZXeFVudrL0zAnbAU5lPsXc9wf1I89+KKY7+JgSVb+MhEGclh49IZB+m7KRTKMsxhLnJVk06MoUJbyaS7EqoLPjOEV/Mj/KkzZi87UZVj9/wrSE7VsWEHgwfnFpy/ZggzC5Zrj0lXmseCD82FqvCM5oCowQbO4e67rjcva/reeFFCTdHJqGEylIZYOfMTjaUyv4kqEFrYYiC+U9OCnkN/jd4gLLPSmS44JeqJZTgBFASEOod5ukBElARMntP7jXJY/h6KQxFxocYVK3c4t+ile9KjByB0mVj1zF+2aJgZ8qq+LWYUoTDsYWD1fMkGk89wfkWnqx7sQyF3J/8qmbnJDXxotqndvMxs1K7AzsKo8vj+g43VT0Xt3uGAV3z+FuhL2cVkLjdC9Xg/1F4JIC6W1kxr+cyCX1iHd0eVqHLcrzsXXURSG7mR2g/pb2Sk/PtG5iw2/rkiLo5+L4GEaODzNvXcWTWyONYR4oEfBqF8owBqDrL+M8RDiRDv8+mYCzDKCxIBRBQe0WLoNPrw6TQspXOg8X2+1B2TlUIoviPO4NHKGOxAivqOSThOq0Rw1mEPaul5usgEmeNpXrLld5d1epo36sd40ZDsGTn+513GTaGhObPt0QtIc0II2jt7o9dNsoc8x/4tZ3lSPZ27pd+fsz3OlBhp3+BGP91UwprDRqKXF9Q8EQOvKVSvF1h+dJdhwPw588PM7jZ41+MV3fMBWHwpkTTljsyH4zFGTLUilIg/dpLVutj2vci63haPsRVu91HnDv9A/G3p89hwA4j4XwiXdiIXo9n6ex4WetOgzRGzP8awFUDgHLtEYWFdP00lbMcWjkAUfpxB80RqTDEj977IukkcTZbjTfSIuulwoiNmZcrI5/6cN7Dao0C5cuqAmGSMFPOkvn5JwDyGPUA2VLeWOssQ==';
  const _INTEGRITY_HASH = '8f6624a58aa5c57d66ed34eb96689c76eaffec4b7f61eb0bdad6af60e35451af';
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
