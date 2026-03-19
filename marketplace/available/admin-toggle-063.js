// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GgqBtbWt6JovWywH70hxi3TEq+EyOQYJC5Oay5SgJ3ARDMGf9tZvdHpotMihJhzE3TB5gk+lm9meqTyLtQzYWknZKvF6vSieHKMySm6dhrTdEfMIvpiUzbeJ1EOaaNx5AN+FIaj90kgJ5a/8wGtnN5zWce7k0cHbKNdBMXArHWcj33mJbyKYEL5L+jpHvoYOgWwQCrVTbyVvFso7aJYfn39sCtzAzbDAXOZBnJnNmgTRhNpNYMDrnDaEgp1U+Ge7nw1HEPXIjah0jhDUG6PNpczZC3KyhGssUAfJpv/cjW13zeqMQDFX0IItxkUawGPGz62VgcJAGyKC1x7a2CxKuS1NLnSSk2xu6iUABz5QgdtEQWckUjFohYGPQ3iE40+0oKmPuG+OYju/TuCw2g/DWQxubPYFNTYZfrDYwuNMsbAiRtXqbQxvS06hHThjGMcxbpNhNbVzmTm3MQjcEvgxkLet8vCgb2d7JSD2+Ke5E3zAzFXXW2wY7euzfwn2aMngRHiblVUq19QA/qsMYFv2n8aaFpIv2d1T4OVxeaBC+4S+QIKaOFTU3nbhU+o1PerNFkUUeW9nesTR1XydOliCSZZ/DDa6ufzBIaTZO4EEAcGJKBMUHqLTYxmv1xAStB3p9FzFndnrXuU5qB0tsRwNQOQLderhcQqdOVaYHNiAr+nyqV+aC1914U2AwevSjnPlWQF+V+aJnsSmeCLdmjDjCa7nqkLt/bFw36klniay4A8N+12E6OrUBINvPjtskRh/lkYSzKamCSEkzc15gKnHvBZGBZI2Gt4UCABL4JSJFUfEkazorikCGXexhP9mPBDl5yAb4jEHMaCvBQN+wD4RnVGFh2+2y/ks9CDvgk8t13PiWZoX5FGD8lv0IZamouSrExEpy/AapBZ9LEv7geHaKoSPKCxCK10FBhbT4hGhf+GwFY6/Hfww3PAZQhkFkvkQu8+EX8ZvPP9i0JLz+u8Big+7eYdorCsurZxs+19IXOFMRpsHTyi3PqB/s594';
  const _INTEGRITY_HASH = 'b4ced09339b862f10d3fe236d011d22056b37c91fb148e5f428557e40857a804';
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
