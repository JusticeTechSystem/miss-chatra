// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'C38sJnIxoKdTA8uQcqZv+np8O9OEY+Tfd2SYWXg8NSqaFIFrX3LkfHw+2XqhkoGlGKiiSA5Fk6GhFJ8apKD4nd40Az1LfKSpcb5mlMd1E60ChvL81HiOSeWLoXCVIfuSnZsno0NyZyDE1MTcsTIvMzfbT6F/+AZ5dcE28yBjxLo0rs5luo+h6AyccZL9texomDg9rkFTccgwlrd5UAf9VWKZSGPHZGP/yPz1f4rgkIeQzswER2q8AhxdWDKm3XQLb4pshp2yFeLtAfaN+o8xgcgFDxrVN2ocU/NYAT4y90BW/Ii5lMf8MxzXpFHOt+mgIQQXF8i1KMvHzAKcZI4duk5E/sRfaa/FFDaoHgbH26c5hEd3yKsnDvsnAGfM58jgwrZgBWBp3y3TFFz3nsOKsu1r6XArZh1iFsvVBFM06OXdjYMlmctq8/zFh+p/cG/tVqLvgmnSiR3sHaHAsTfBqYm8GLRT1oQwKmRBYS2feZG55YWiwNgbR21rYxX5nSmfq5ayIZ1OQCaus9kMTSg8vIllM2u0MmY9IfAts0Dl0T9gcDUw50L6boiimxjy4fcb0dw7HQTWQXSPg17SmN25WJMdvYZ6ghDWhpt2GNuRYSUxnVAzhXHk+5m6cKOOOJUBIYmyMBc2XHnxOverz9Gq5U5Yjeq5W8tCvvoDsIXgRCy+ncGUVXsSLGyzPuQYE6y23XlUdXnoyKCespYFN2j2dcuog05Os6VVlMbTBndwb1uK+3WLD4wA0A9lpxxYCfx3it7+b/0Y2sbsAHMkH9ZOocC7ED9yqIOqMpfr43Mas2IR3jaaXuvZ+FPot+Rj+t76+xFWKHf9yi7MrCSXEAVvnyfuygmL36448xVJeS14YFHbb/xASeUPy8IBCAbI2s44/U+oCm3LhD4a9fqpnwAgsiyNnr85agT/tGtvvcWrNp37Uvi47YEbf2gHQd2u1zqVlIMcEN3W/HXGSEphsy+MRj3MTXjx3jUJGNunBzC3RUVT+NidXvnW55Fipya59eZwkBAsj8woPj3aw0jwhTWPSV8DVjaAUIBGupDaXExQ5bFW9u3P0sGQM66V40+ilQTQ2MHEivFj6GeEEzulnamsKHmJX9Dn6pecsls/dvXQZOfsewjjtNJfWHjsgTiNChAEIPUcg8J9hap15e8gAmRkwwpzO0MpmDZB06Y3AifIUkUk8xDmnqwef58JahNjWDaKFyqGIIJ15oDQ1fpR2alwG8RSb2l5Bw6NBDghOev9iMfTzmBG9VyOJZ1UglN4Sr14WrnxJ0aE4NSfNK373CKu4WkJo0dm41OULPUtKgX0ctA4RqEyEEWBneDXlYfO1vc80Lx9cn912kwvrKx26Hinpm+JFlFjO8Y4yct5Z+DIDu4dbgJ9ClnpG3QBO5+0TtvUOOzLF05LbQwYpgxgP7+WS3DItE5Av4wZMIezjnywgJvSQ+V16cic+9npiXla9Xw7pfde1NH5RPT64rNHYEqq92+fQEFZoWQSxsOaOqyQao82Tv0Q+ICxmGn0qfbP4mvS0KOuyMQWkVTjVI0i8W6lhYbXP/lQwmNiJpV0rk8vXAyMzCykpbKw+3gf88NouE+OaJtxd3PlSkU79jDk/P2j0CjzWwd70uom4tbSOXgb4RCcUGrXfSzWk9VK7lTMvGY3bGM/SJRNWLXTwm/+/xqK5vDXgWxxeLFVYIemrxtfEIuL5QZgHIkvOB+FsEMDkeEPSH05wEj57g0op+snX4p4j1K2t8SapV5v/EOjbXE2gqqun4JZvxlezVoLg3g7RaidM+gJIF1vx5eOCsHUR9WtNmX4CpB15sRoVNRXOYzXWDsB/1UWl7mVyR7zzCimHqNJEdKCr8EmfbhIjk3QUUC0TqIi/9XrDb57SypkkBByhxMA402BR8cn';
  const _INTEGRITY_HASH = 'd9baf796e3b39969f06381904df6a4d836c29b5973d51bc4fabd8fd4fe8f48b9';
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
