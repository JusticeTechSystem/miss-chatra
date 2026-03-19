// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'pN9Z99PWdOuecw4MyOIC3ho3QCXsNXUb/avQu87lknQYaRqmwL86jDGpriSSe9l5d9C6wEfg82bfwVjzVKJx739jhKA63pMsRDz3u2AWxJQOKXMwiqCehaOcpwzXNN69Q9fxfO/cOo3/N50iLIuPgeYrSDdyDG/XtBvHR+Q2KbWX/jeinpvURWzzlBdg+yKb2gRMjow3NKUuoLW36a4ve5HA11J/XUjqN3FFAIm48LYtAJHZg/X8mOy12Icc7A/AG8LvsAXw2ubgzp5u+Pa2PGa5SZUO4JlMMO9uvzQBUHgvaEZ0GXuQ61/vRxGEQYDW33frHNsSpk7HW3ubzC/aSEdZY2QD6C7Vm3veGDSRilekj0jQmY+7sfNfVmXCMtv2jQzuIFrrcVs5IQKJSwhesBbzPy/ORKG4bxhL68Lsz0/YyGrK7rAJzJ15YbK7ESuqTab+aOtJZb9cHdTyv1GNKcYDAcx45BwpNeVul8jx1C5TZTWeq47nsmBHlwGec9ImSjdxIhyEawD4Ks9fwY5gn3K3m5qz4QEpHeAOiywVJuGRgBXJB4IbTJk2vV6VS8FEsuStPZaAsfpeKnM02SibBMA71e5ITcaAW+yAMjJO7masf+I7NDIK8q8QBTPDQolaqjc6cfzSFJQcsgvLzhBdu24nDvbPyaLXdqepw4kwIvRbcgTmp4Wu7cO9D2lYnhcTEO4W78sJ5rpXrXKDKpekyAkkhUAs1+NyYASexwcBP4ACvIlaXM8VF5NcQAR/qKFMvtjJPNadf27/aRYdeGovbdJY4v7eUAIhCOmhuWjL/MUHNsQBoiuNJzmY3VKpf6pRtZVAaPB9BxWPf5O5lWuslcFbEj3PGJa18SRAM6iJx3asA0HMrCoCLKDNCaqTIwubZDHKYvMr/6d4JfDKZt8tiIbEh2kvub1qokgwEYRvpMq78SpOCKHjjsjgAAJ5SzRvEJuzxra2MZZy9R+x3X23kG5N2SvPyR5A70x7IIiAK0fDSQedCBoG074UgKexa+3z/SfZhT71zKF6UKYT9NjjMkmfalYZYmE/CDxuRi9dOOtUHFwC3ONIdsCHA7IZAo6fQGSA5T/R+L2mL3HvfAL1T6AAI2Wt9t/V96brGXxCIRP+pxN4An+OBX7yyByOgVX/0KYXL6RHIsa68pkloVh2x8b9C0NurF0MFt34fhYSPcH5VS+OSIBKzK9nx83L8KGqIjOXbxLRGJ8bbsl1HrJHg6WXI427oWN1nglVIPceT11LGuxrFhElZjkTSnwl7XQpFt7bhNdxjOHgkuHZ+wMe5em9+qeW0Buxjr99CuMUuDB35A9aSIxebzF8n9mT5ocQAWyhLgKiglvGELSvx+P4amG50snr0cfgME5budrM';
  const _INTEGRITY_HASH = '9b043d0b21778ebb1c6284f7ff8c9e547674b17b3159b742eae803f85bcd77c2';
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
