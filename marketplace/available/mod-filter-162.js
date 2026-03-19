// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4Z3yfWFq+fP6LnOjjzWw23VOA+cttMOk59/FJaN7w9T+8wXDys+IPzRLSuSKWngdrETZd6qHHiqKA3MFBrgmGUlalojbJf44XlCyUTqobr4X5uUkljlf7go+GQUeWbaCpOwgcDKzVHe8P0EFBxez/2O7jZX4+ebZT+2k15IuoFI5aPkUkwhVGHP1BBxJgpRSugBaHzZ4SoZUnyIU09OoYHusCYW4cnxS4RVqHdh09/r+YDNCYZ+4yPRJhHtYwZxUD9k0Es5/FCtxJ863/fomqeKNqua6L+6JFuUJzBwYK9eqMG0bU3+jtdnsmTfJ9aauAgBrZsh3Gas4M02VyK+/4ZKeNaHL59VbVCmTORSaNEmVydfNbCI0+N3yTyjuF8P1ruKK/GsDSkJfn/1KvoCuPdXUVM2/epLU/rZGxYZnia8oD858dY3ZGxpHpJNDihzpMuakClY6NwnuRpp5XcBMhQFrkm4qFmIGyVUr9oB2WFfXTzERa1X9gHThGxtk/JQ02LEbwH8WdkqSEsAqq2daOdn3WvbIc57xuYo1aZeyecvaeG/utuVUQFOW4rlJvAHvGmrve4A77pIydaAnt+H2ytHDmxBamy90pVGMSCm4pV+XwUzozZCWbKWymFkAR5j5pGUe6Ht+yaPnfIoar+5fWgo+AinzWtPNWiaKyQNt23yXo50z4OEfOWue1Jtq5NYI+frDenTZ2i194Rl9wOKv6Ceh5L50KtzJlzR2IaowZWnbLhZ7g+KuP9OnHbxqjtKqWG3gKY0SZel53OsxnT3JuVVUAjwPpBf684ziVTbTouHuG6bItQFHXK6bPkbgChi9tHAucD8qW9WHV85S8he8dXF3pM4a7ib9/rryxwBTH6A4BKj7e8xLNVAx2Isxa9QItq2LM5f8DAjsLElUyzoVxTZfzjjAeSI/wpOsfiiu9b6UrZG58JWQ+ksnagE/I7PRH4321cJ0akfnBVdvGs72NVaLGJRNwXXjKW/A5JKEyyW5k2giEbLHlioNNk4W6P1wbVn+w1QHaSp7mNr/C33TLR4S5fpklYArHfYBRd/+rcQdecLdfLKL+WpGng/HQm8jl6blJ1uaRI8JzFLGGKUmsXJDMdzDszfa79Y7KwMk2+V6jzeyNNDiEYpZllTtq9ueFJ0k/BiM0HyYAkI1swTOPaigrANMx0Qsg48j7sFbFo4t+Hb97XhTdCPx0GKFRytwor2tcYebzXjkZ2mfLTRX/lLx4lOAPKrLEGszk5m8Iqn3Gv9B2AgNoACFlk3ryf72cWoCOnSFjiduQlzhYh1OcVEy5vCtangvP6AVTM7FlxVRLnFInkDRyOQHY9kOJhPD0KwHNNuW3SHb/Le5GyB/9xqz4BpXOzLnohnBqO0SKBntMRHplJF3Gg==';
  const _INTEGRITY_HASH = '7066925c96b65deaa8fb1c89bb16a8974d0f69735f83955ccd948b1c3e031539';
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
