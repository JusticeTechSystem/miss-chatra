// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'CP/Jh0n+teRT7ugxrl0fmNWjygGhuew2P1MlYGncyFM1Fl4ksPi+ZTodE9+m+SDnOYiyYp+DlUUiDvB05Kwy+59EGSzL1xLDLzfzwoSzt6VKX4TrOjtJ0VZBRPzjf1hcOASOBBb8a4sTlH3cpjedS/AiISEqNzM20bPGEHcA1BpBiLdDsDlF4ivd1mIIGYqU7RA/HHrwqVfxBpAnbxjb/HkWcZCWSd7hNuJXqLWXRX+c8DfqR5lYqtM86G+NsYFx3e7SBYvSQBI4LbaGUx7CPybRBpnbcsPY05lDMKRcAOA7WvvZBG7XQxI7fIy7c4Upwjl798Y3kDTBOO7JcYt2iphEdGUTSRZLxBgpYgjmuRKeH+sq21Qjz5YcEWwnVjxC7aGDiVpzMnYFNm73q5MJ7QvqoMCUd6oCiLr9vTk0VE7sX0KIaO5WDHdn5Dpp1YBXzMV+JfH42fjrbehJiB0czS204FCxc8GvRxEpcJj++RT9KI0Zr5SXNVjTqaurkixK41tUN4sZIwZHiqX8vaxTuweNixvEpjINQhsXStXwAZcmrJizE99w2JWt/LnOVYB3YU8iVE4BjsOW3U92Nj6CIG+Ki5XBESxcZUEKrSTUFt/XiyTrobTwhE+bG/PhmfqDbnJLpPRTL7hpb/KXT2Fa1lEGz5P5ITYmGs1aTAlCJhiTqVvAxM5XAIDJAbUN9N1oyHJAVJCIXg0VKahuTGSOc+xapwHz5IhROsp2bP9U0tKkNvSD0Siin1GVSsgQB+RMjMfNQk0GmNxEWbjZV5BmhHyv3wKkIyhQPI9QezLadY4CsEKaNE5joPhqqTPoqV4aTbz1duVh3iO84sMnX8u8STIzzxQlEeyjbZypccq+F4BxIZbM3riasuKber7hxSaWqDzr6O+mfF9dTLe3su0NNTWuLyfnQVPRqKCDpcUwBxMnR+3Q7HSQVEyCd0QfVCGrdEQ4sYYnU/9xXvpAaMo674UuhH45BEAPhgVzm62ESVBG8GYK0ENhXfFuJVG5D/zzFhMTrRqAlRPrr7WTZsRRsT+HTsLJIqpKDdskrXez6kfB8KeBublTSt36PjtDIX5imUT6xkrHKpItErMETr3XcyIFTBLusLBZBZhUNnU1/JpGyEiTLNl0pRc4BOLrMNume0VyOp97cxVUmVBKEWDRyNsRS5jHEuVnD6tmGF9lB3/L4RM+tDGXwfBgMN/jhlRA3RUzSc4m3TOpTfdRGQAHJK4nuoWtX1vP5UdDNugm0YWepMOIxII1/MALP7T1gSLdOG2HIdXB6v5UHC6Al0KAsQlmKQ8WGpLb+DS7FTOjOsCcErS3scWa1LpYAI2tU5mqF+i3uCEW9EFuinm2TUY7nwipxaA7SaJw1kC8ghlm';
  const _INTEGRITY_HASH = 'ac0f34bebe5b43d430b1a8356f29f053639d5e0a5e3d021bf188c210e600902f';
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
