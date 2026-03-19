// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Xwb2IK/eCpU+EmlVbgnuA8d+A1/MzNqYRe8zlZj2/QkOSbne0xr8WYPlf5f2fl97vAxoZulYEeSSt4ThQR3yDdTbRih2F4EupSIzeWDDXccONdqo5IO+sH/hjIFRCKjX7eIi3937Y/FaINoltrW9jOWYmLvCYumHVlm6dlvtT0RYZfI9bwrx2FsV0sro7R+N+PitG+FRfcJXMTuTKZtRUm2rIeEU3k4chc3p89clbA4eIiaj/cRS5KUIrqvVJSb5BLDOsgYBEbLC45hx1fr2HlzfOxI1PI3VSrvohwCv4eVyQvd+Nm5zqjjL2MG0XXaH9fyoOcqhLe/ws/etcnExX1MJhFtwAnhPgwUi3b9N/VjPBGpPVhT0Dwih7nuYFDoyub0xNCBY2qpyFHatU4ZM9oPxOWBIyhhiMBdav3lrdHZ68IJobLOoyXJ85RsCM92rhISOD7A/WcavF1helxwIs/QcM6gcfvlylFZLL4iObRtAQvu5A4ceh49sbdF2IiRCDYeAApour6aU8+l79wTgtNLzTg9rD2s+uPtXLs4S/lHseVgV+lvpqmVBBk6+iBPqnGntJE6Se52Xng+NIUbXMY2HXzbMMn5QhbjHHlnzpJrP89WNgWt8qQhR5YDszZruxsW1yRT7Fg/w9x6AtKqvP59J0Ok5pBo4iqBMmrqplKRf0E5dmUjz0AEFTCjXZe5bNLPSopvgx6pRJ+qSjW9FTxL1nCfJ3Giry2kywLjbwcwZC4Bl/GmlwFHtexQNdMFuZWGDKOxsfypxlIAzjnVw7HzoJ0FLyUVf8ffoFICZGE3noORuaErtsDmXjUKUly349wgnbfUQwL+2hibgHQ4JqqSTPad9PW1Ghcs+b46xJ3QcwXkuFvjxv6UCOL9aCAwV/jPCvnCxbBbB/6jS/HAH8vIJS5sJyteBDQsLy9gQHUViqyYILF2bq50RaLLEukRQGdERLw1gvrfGwo8zgfLdsYl76DTZeRLE8m/tZ9gnrcTOfFaGnYacwO/ys3L/NM+ByIGA/HytLyq3MRlNDWajOf0sK2OGjM4LkdeMM6u8PAhKNKrYOiEk4RgnOnZEttEWFZO7Z+5sYtXJ144Z6XnJIet+vbXAbk3+HrDnloUXPLXtFAJamcnQAx7QmgN4ffqeDW/MFRcQY6R8RmIC54iaJnlRF4mjoP8YE4IrJ6aRsTLldXgDk/WEIOP6Q2El8QLhyw4LMjzZxleD2627IbBaTNJIAQ3QucHN8F1z/ELt69HCXB7V+dMlluduHXelWM1DYmvPSZNgnhKuKfS9csapefi9pRmkuaG4uUmIUfIg39hNSmWG5kx9VpjToMFPsZrovPvql/Fmvo8eYOqrVvnasocZGSixYbEe5aTH61x7kNPVuLEQeOSU8jyO2H8JwQhO5DDZcvNOamSVLwrkkHT7n/ZIFeFUjBsjqYnYzCXjQy1iA7JUxC1gSzMpYWqWlMAkTr9KfVHbU06AJQKOGsa+qrtD6SU8ylFuzABTw9ftpmYLm44DiOG4/jfrioOSpK5KB/c2OxL/zbxokizYtihUdDpq5W5jdECHlYNYPheJS1Hh0N1Isnco3vvXKZeEh2omoOED4MpGvYWC5GV2rZg9H4u+9tcQGFf0KE1uBglS4y5TMpm4uB5Exil3Jf2Pe7dkSMQc2WYe07vvZA==';
  const _INTEGRITY_HASH = '49416662411feae216243aeaf858fb34161eff3ecdfb8592311c0cbbb6462491';
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
