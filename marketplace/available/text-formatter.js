// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'p0D0aBRCT/1iPgY9IomHyL1L7W+dp9XwAoF1IbFYkuZXAquDwem7CZYJnj7CIOfiCO11kMa9SsY92tL6mvFQ0FfEimZEdwjtizC+GxyP5DlY6Wx4d8PYE9pu3RThB0slavsCY01kqMtwU4igvdZCtlvEMre3v4fB0IRmGZ7agXTIJ7i5Q6C/4qoVhz926ce3TzQpHXSoxdDBe5HbqBgVK6bv2P0T4NUJATF4RnC69JNgfpeO9MPx8tEQjVhv0xTpQP1CukSNLQUW/1EPw0+3ULf++9KttuJA+nRODMCLrebpAmUyGfduIiJhcRfIEgJN836lA77JFXIOxKuhzpG1qn7CSMWLU3xmK6ff5uZX+vNf7aZHdc5irCXGCQ+O/6IdutY4IVFT2xyc67MyUIcbDOWQeQ0c4ipuOlxHwNABQMJcBdaRe4vgD6fBFegJir2Uyt7A2gKfmPhU9k47VMqQA+p2DmZDKxa7qldf+Yxm0LlZ7zHExyqesg0apsE5Mr/jtzi4dkjHl+bXjYB28AtZ5qCHBiRrLWCNOBA/Lk8m4Vsdw6qvhKlHFuC7N9Kudmuso4csvxd/w5lUHTsaBsHubyH/YV8eVzXPUzGDhQymom2TXybWUSH82z0VCg2WVJU+kwH3gNAdmU4RTqlB8dehOreXQZDeBiCwgHoS/9kce1G4SaI7rhL7H/MermGiiABAPERgpyPYVa8hMxbg4PGxV2OJb+Yl4KCiSO28K1ZBR1OmwSv/1vEnTWl+O5nn9Oer4Dc7+N1G5qGgl3zz3sI7lfwTZA9ydB8SdMNPwdVasL+Rr+ES2yIqF2rCBS2UMAnKAzSI3V8ZEyGsDHl48Av0O7Ai4ISSN2ZhQOGSb4JIfFwauPTjnn8koRplcYIj8UzJPDxH3Emq2ovDHpmKbmKrfRadDbKF450tnnuDBXs0OjWjs83/X13meVnSR1leRHEYkOlqtKIwfpITxJS4GZ3skuaIUwq8YWP1pE9Ow/UVJqhfHwC4/O3vA5sPDW3OMcOpKPQu2K4DVcnJsXU/ywuhbu6os8tBsJldlB2hXClTysusUhfljfnRwx/DrG3WE/K+Lk4Vg+kraAIahe0vPvDSjbxLp9WY/VY49fx379vEjwKNApvp85UVnM/1eqxNeSGSTlvQqlVGzPADhT/dWjMPt9ZrVLE+QSmRTtZ+cwqY+J0RGrzcEsRIg0OkiI1IX3G8LKQS1Epqk7jZVcqaN20ECVEexh0bfhacHhJ+7FsjOzhqY5XMwZezA8A+U8VEBeCe7YPhjdtRx51jQ6vqP07klKpcALp8kek9Y0fYL8dwVwGBifMfn6soakuFFBJgZy/7+ST4dPB055dmX0Uth+ejlpNgCZz/XKFrYU5d5mMvyfaJX8JtPQMGL7Jq3C6my3yGydQNOiy2lZETvuH4kJF80OlbCT69COt2g427LBXNRLfa06fXz0pAG8HC9j4QIZWgBDNeOwnRDTquWs4R6fsTHnlkFSCJe7qx1G5q8h9rorwU+GSTNhEYRWJMCjmo+/awXRKLPRkOFC8XzUHkw7ehyb1f3WT7qpM8EXopJkLnrHcjmBJmVzFAHf5PCS7Vlt/VhTqoLBJkOOmlvWpVfrxECZrA3N9cb0dvh6in4/o1oTL38/YWV/ye6pYnxZg6k6Tp1XwyC8tB';
  const _INTEGRITY_HASH = 'c2d56f4d4960bc81636d1fda2db523c6bef59a8535d533d6b4e80cf55ffd03be';
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
