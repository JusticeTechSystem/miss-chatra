// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'igsKuiQroGvN1bhcNmERF95dQbHLIhyGIDVikKMdpJ6okiOV4BegPrR1H4nY2n46zPID3jsy1v+AHxYA41tT3+OVQTCYkff9RN/Knpo5GqL3a2lpqtEHmXgNipCqVcu7VgnWCcgxTzibQ3hZHvCdxFaKQXIyPgeNpaMnAqlCJwIT+HnYOOMK3aveaUBw5ZRqPJ9zLI8dCXfWC/kLQOpxsRSVqLOMRI5xp1BwjUCO3PtOJcMnOhJLo1MxtBWiAwlVbn0TwDj5QKHH/VGZoV6VSi+Fum6kUqKm/aNlN10zfxW5CbMx6D/mkLTY0gvjyLsFIWL1JoJvuzFVAMk5ylok3TbA0Ru0iu4FxFETLl4LXLAYS7HUayus73vRSrnuZM6Z0GbOqi0/1VWsnNiWfXlvueCeVf+C7NZRvpCTvssZyL+1iqlwvti4401cxRN+SYyf9wqiTJ+42R9VAsC1wMzIE3/myebnU3FRQ419aeagWe4Jobl1GQN1bCXJAJ3vazjqiT0z32fqpUay6NoAP5WSm/Rgpn2Mseirw5cFnOPQL4Plnle73pwW6YwzGs8r9cOuqeRmhggjFW3Ig/Yu179cDXAiT48bQENIfpPI3m236SS/vjTN52d4GsJUnNbxSVYtapWpHZAf1G/PXGehOrrEjPgKRgOUVaB/3K79Ad8gHj1F/4v+yIw9tvU3jhaTjdjNag7jl5wf5KpXzBd5v+gCS1z6PdLLzMbWPxPLdtLRiEgPvWjLhhRE8Yp2GJy6gvtaL2LZZW9T6CpZg8ka23Wq9DnqE+VleZEvN0faUOWVcTslVFLt44MhqOctD0mpSETUpjrcg9fHNDjyKQ3V5qpuVju5IMo2nBzOJ2K0eZ9cjDTDAOXG/ijkeRtJkF70ABcBPXRjHjNUono8deBFgNPkN37K/AjxIE2IhFl45JSsxBa91rYjxvCGAa/WXvDeXrmq5GEBcpu6TN6YtICnAJIny7TuyrcBDir6fYuTJhLX60xeSPEvHoorYcJ8BAnr5jkhg8CuaELDtYgS6p1aNu4JLqJUjVKr1THesVABiOUQqpiJLlBvOQzxR0tDjYe1bhs/HRFjQwh3XqplNICd7Z40z0hew9QEcyQG/zdMgqfkjHzD8qOCULmSLbkGrvwIs7DTUbpouUh0X6SwHUJ5++LLLBY2rsyqoUo4wd9Kgex7tb7VvmETT/lkPWLwk5E5o8OfWlCLi/VEH/SYZAgVTlnoOVaK';
  const _INTEGRITY_HASH = '8262522806e3658d6446e877b974bd2d8d24da9938d336bc56845af7c9e5510c';
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
