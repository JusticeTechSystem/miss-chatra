// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'uEgJJz+bmWNGJxiX9SgiEAYfUwluOs8/oD2CHEPM0p+t3ESSLwSWh9/A+A7JH9wSBiEtLYYDeqIrgOIbfKfhvAhXZYPNMBQlDrytL4UPl7wbeqAMh3Acl+IgIfPlb7EkQPSan3LRrJhMTCOs1MymFI+iS/gNPiqN5RDbu2XnooeUmW8Q0VkOmljV9bOLzsTJy0ksFTtpnrvcvRspyLa4iGUR5i8MBbuqW2TEcCj+AAB5y3aYLeMq/kwZAaj4CAZBwVOeLmFOfCjctPqXuTgSixLDnFyCaXODsJ+Z4sldr8dolUOcpct31NqnvUyjT64M2uWb5YXGBMbRh62E+ELw4uzIrkj4YrTlOAhJDez7KOBLsEkelkNZbYRmmg6F9qlN1TfMVcMzLF71//BfMF7T15JSKVJnIzyUXOazG8iTllhKgwf2ro+KEPDi2Igw3mGB59aVcbmMRsrBOWXHUxHFJUkaboNfvKwpzWljWGowBN91op4KKpzXvNzZIwfERdjlGbAIW51HzulTzk+D1hfCkCAd83+fwegAVCTLvE7w7+ASZxEeLYYA4mMXtKhH/7vvFW/+K/LgKK4fVd12h3TfZv5h/cL4otGLDKI2O1I+L3NzJ4wkVhLjYD4wVjrzdhD/boA3p49cESR7oRZxMVM3Bir5QeH2q1rRBiE8IyJfOz/+bhSxHeZFMEbqqcPsNCFF/xwfkRGM9OHruWDFXZq4vhJ5QhLbZM/YzXITG4CbeGxDSDOg21YjbMajReVbR/zhppqz9AmKR/i9movdhHs/HQt79HvxWdseLai6b+gd0n3M1MHnEqDOKCKqCV8XC76Kps3yQYg8kVL/1GsME9NJ660ba/z04G61fwjnGFypEmRQJpZPKMUsGEx3O1rfczoDpG6Ei/Vbj/b6q4HZFmsOk27trz2tPU3reU6WLihF9DPK6cKnDI8gVpGiAUH2I6mkxeJm+FKxrRVycu9DyAcqZsa2mDOZUzMbt6kmqor2rKcDYIgTJd5nGNp18mGZiY2m/vg9WqXRNBsHxpDrwbiz/kFHjWSorRaIgp7c1u4bUG9E5gjg5zuUC39GKqoGfNcHkwo7/iR4/a2iPlOxRC2eoZQI9SGo9mLXp7x/JdAKgk5NinvTZpyhd3/1BIXftOI0TcPDwtZVRH+MUfClSTsF5uqUshpa/utfIZHDuvlFYBBakCTDTE2/ZPXMgGL8thMQ+7N42WSCsSakAn/1ofzUIhjk+CI5H/Q3y1OQpCjxlBVUVJnVExCjJJ4TxeO8KemtMuAW4DbEeTCxBzC+3HPMHeGs+VtMtyRqxk83KfdRE7+URd6VaJryt+bjjpUqiDTSlsUypqgvr5/Fv0qM7WejYwit+OgV1s6r88geOXe2/HHNbSMWYr3WEOlShbkWP8r3tyDt1FMIEu0ayXBVw1sNAYAm5c1O3wtIIpD/GvpEHKjI0CrJxCyry8qEHNXcYvcKxbRy+O8dmwWswbX/6VS5/cwUieMnPP1JQKzvAHM3w1lPIt71p39EXcFZAQEublPwiq0mHS5+zBDmpyF73qOx6ePR0nzs2fTTfsNLyE2g1Fg8Dm4aWAWt8xjjKfZpEbY8XAFqbfs4MCPY28q1pVV0/ANM5M/rY5/lpIyV/1fMP0LBsl8w2aumklHrDzxo7dbS4CIS9N0OX7CDcr+CNB9UhxANiItvDes+eZ6Bc8YtPE62eh9aRzA/GmjvnD2HXaawTCPcpOX/xnwnyMMf11RS9RzDG9yzJQjPNFCTGPReWTtJo2pGSXWdV+sBNH12QDe56igDprfQJz0UZ9TJyM/6fhEbcMpR1PNrl+kzDr65da27YyBXuScbhmKM+nTEFjY=';
  const _INTEGRITY_HASH = '0bdd73a5631260f6a5f1deb82f022e5cb7e4c2a4fdeaff86ba76a8c4339b8a02';
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
