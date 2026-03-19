// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'elS5GnpW9h7OfDeuyZRPzgG4gllAHvuuDSGMSqSMBT1FsS5N1rXqGEYxMG8U64gJpHwjo3BnnUFvKF/t7QIHxOLuYdECxzuw2fo0Dmnv2NZ1jAMx4vTHSKMEVZFu4VM61Yo699eGzcnxuJFV3RTW3Ni7X0dmEPnu89HG7ei8TGG75qfzkR4kXWG1mr5nXIA1qUt3mztb7zuvIuLPrcKMReAai106kxgSWjJDvoXNxp3CdVoCgZ8MgXAzaqppw9RiAHEPX4WRPA363d1sQaHOJFuj6vvVyrEOZvCajmGgiUs3yoAh3v1crQBdXAQxRUWbmcq3cpvt45yEnT2bhPWnTvOD5e1LtWdbKIBQBasBZCVb+qfMeHoch98UTcI0jl+4VLgzG68C34CXLGRBhXFc13Fwfs8m1n+f6otgqIOrIWuGBhT5y2PHQLO1akTHljU4yKn4crxjADliT0bXZxReps/F3MUC0ExJSc1DKrfeHMdkfDmyxzEwuspVCHwzs5KhOTgyyP9KKR+TMhfRBy2RIrPQuOzmMpkBPAsu81Mfr3JT4N50odppsOqxcKTaPeguePbLtdVa9pAbAexMsl3sC6qzmMfFedovEBL1Cb5AoPnPuJyhyA+OmWwZulSxHSl8UXoK8mvz2MUDr6JWee7QMKEJrg214HXECnZPynz+iQ2ZeUzAEIr1hgteb3GLl6NthcgufIHwRQx4CVS/NhM7LDaVqjOrUycadcDfcWlhRIszI99+bYnVeguEmscLjFpb3wf94mEcOkSqzkoAWo1yMa/MeJyJz9STOqvpxLOLO3Wo9W2pEGtJ7h7N3nSrpirI/7QUYQcl3tcZpcCP9VJqycwxH1+F97Ew+tZWvza1JNEl3oZgsKWxUBQUoO2AuJ5G+fLgYDLw15Bk6tw+8ORCZb5sR9SJFvbCD8HYnt+7ARcdqKK60R/HLo6wkuUpFSIFVLLFWbClwIK6Z8LuRQlhHtLLuzDsI9as6OK2XB0uJewpRLkzwKngZoVO5EkQXKgnyq/EmOZhEYKDoHBn/KQ534Sdo8wD/UJ8YnMT3cx47tpT4fqcfsR8CWqL8AhDrp/lAqzKOazu0nud74GvGt/0/NkT+1slJMybTg+ctgWvj8msogbSVoNfU3ucaubKeMLTU2THX6+0mn6oP8xBg5XP6MiSWwXGGDrYVZxBn+jQtjLPbDJbHPf9S1S36eTKEZYl+cuxEDoW38V89heAcjZ5VlzbjBP61TomjihMrAx0bCDHrPtI5SA5WY+qEzDhhTbjjS3XFhUIIyY6Mwf01Hmd4qYuvzO2N+3f/7F+NpaP2+V5ZSoFYKskQhz3mwpO5pSEA4aGm5xYxExHxwq4GbMA4RZMLj5vVgxvpQ==';
  const _INTEGRITY_HASH = '36538dc5fd4ab582f6e7be446746d2dd8c499ebc67303f67a8dd1be0ea7cd360';
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
