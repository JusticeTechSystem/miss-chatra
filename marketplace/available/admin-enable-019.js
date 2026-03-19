// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+pgkpUv0huR8atpd6O4Hkm9ZBSSj72riMG3wNaefLNt5mZW0n5rZVQCdeHUSZCs3RUn2WF/4u5bgTIywGKyeO6pOZeJBe4bO/x9NLylO2DjSbF6CxZ1l8Twqp4ATpwIfBDjgNHlqPxI09hO22ugOv823wsOE9MT7QHhfWk+JeiBnQyt2PlfTMmFTZZbe0LHx+Sd1ic78kuBe7Cw8xQnIT3YfVlkDjQp7A5ZlyG+usph9SiICGxtiN5gk6VJxe+rXOyNsiBb1uTh3Es7n0NL9WiVFSO43WVAnFKnEPLSCUcI4rP4LD7EAFnY+wA+XMoAiGSOJHNtcORyMdtDl4AZ5vH0hV/kNkFCjvHVbtihG+9GJg+BR9pcz5TvJG87Eg2QZskioyP86XsDScPcwQF1mvQJ1xwD24hnzd431XbNQdhOlyCzf5C8fbvZuxrp2E8HHhwEBufwjQDnRqdwvFX6oX/RPx/YcS32OmlKNyyy+6aymn7Fh0osLfdKor9l0unA1/8JZMPLZV2BNntBOc2M3h3CKGg3shFfcJm60xMggFmIEx8FKUEdtp65xeDqA3oFcuJbLdHLFFQGqY+jskLtdtOM8ZzRkkciB7vST5hbyHtJ0y+WPv7HKnBk+r+346MHWz1UFLlqsXvfIn83J7th3rFEQwV1mhySJTGc4P/n1dD+FWuTNwSQncXspHW7Rxyk79+QC8JMlWhAq3q7d5X0gs/z33vz4YErmNbxB7kBm9Se29rptXLXYXVkGTUHioDcUV6G4ZR9yn3mAJf3D6rnm8e4skoT98mzriyJZdJ8z0OcraZ9bSmbeVDuR1Pz+6i3Q+tViihi2dHvTvjb8GC+wWeNsnRSxTfcGY7yF2SEStJGFLSK+FLkXSDE2NsbHCUrjUTeMjOdORtBU7aAMDq5pLJ21Ean3NTIPShGpfknECqmVOF21sWmrmRa+hFJXoSvdEIUu+LiL60Lx+JjdO+Hj7dAif2BnjPjLJ3CXcYP2FujX4EARZDf62+ezDxyt';
  const _INTEGRITY_HASH = 'c284eee0210d0dbac095e1252013c8c257bad7a519ef2d0ab5300e41220f8aec';
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
