// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'jLIvEEsRSPFIbSaaK2kEZb0U5FtCLxD16d1SUa4on/ffXp7U5l0tNMOuoxGIqLxSep7OT/fQwSdSgmwhSs1VuIURSXxU6Ca4DENK/AO1LXTufTp7uyN4gdMy1/XNo+5yA0y3jh9k2ZdDUYx/ogzLAFEcza5XPlJXDXRmU91kFEOKITs5Muwxj+2gewPRU3SVB8EO/hY1WP/SHMO2V6lIhRIHcyRNaeJzLMDV17QFivElev0wWx5AzBeku/QA81Y7GYvivbl5Hvfrmo+dlaYOm9DEi3oQdhtoiaa9IRnmCat9VN0lHsC5Ne00v6YlKN1z4DyR+4ojhrCeuePaS7Yjnr0ssHQumMVUfJM7bdnIfRQr2D5F66VnMf5AQkaGIXlWidL48VsB2GZ2nCnm5srJTgHxhZd7VF//41FKGX2vS3yTn293SIXCZ6bG8ZPaGR4RSnf1lOX0Q/j8J11NxA99qCOJjfkj8wdcDLTqA/tO58g9S0nQocM4xcGWN6zFRYLPGdsnYSsHN0Fmdez3lTb9hiA0jAzca8n6C0nNWx7/xklDQ7qmeDBql5pnX9JQU3tO9mkXUll0fUOTv7s0kkENrA6nr9J/kssiL47MAMbs+1D8b9XNoC7QLmBOc357sm/sH+jjSTCiebgxg2nd5RSZjYGyjupumrZUQfy+KvYthj5wb4a9cPbM4msSCqDmXjKYkqNRXG2BI+vWom2azAtIqlYN7SHgGav+6T942bE7pHJRoQzYrPN3328T2bXgjSQcwr08T3NvFUCBY315lQ0pb2QtOctQwZMNKZYNfWLyHMDes12mrxkBJRk51CpAjo4xLyGBa6lDdKvCl7Rif5HmeprfXrqUx4CSQLHoX/DIUU2OQLZS4Z2XT3o9xKgkqk/MS4CPeGMSz3dYcayQgEOhvlSXzG9poZL5UuEo9gIM2lnahB8IpWoaxl6uABrG5bsHehF/G8Jfu/wFYsV9kSyYyw+D/4arxxMofD7R+gF03NOqytH9uhihhdwFc0cX+MW5FMUiEfEklCesz2vhd1rN2sZj';
  const _INTEGRITY_HASH = '231151955d6be8c38ac92eb8d41f42efe4647278ee502bde3a2b2a816b984223';
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
