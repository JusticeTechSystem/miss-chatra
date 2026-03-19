// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Rv14WW/4pm3I+DJE/sz6MggLdpBIqqgNhwagJu1Lk+4ZIVxMor+i9kUeZ3sHiud7HS73NVB/u6VoPkc+caIgAaL8MYHdvf1VQjh5mUaZpD2cfDl8BXIOJPNCc8m00eD8DkGHyyBQS+dOSBurFmmjxkDRxIO3lBj/l7zqc4cKbnLAiawhDFikGHsmVzkhryDzhjkXPS6iW3OUF89EgY5+7Oj4DK6kvxWWStdwjuuRskvZwNrH6s+MPG7kAukK5oJCrfSwX2+ve0plL/Myw17NXJsR1KODJKQcvRz0HJDKK9cm5tTf3bw5zm9+Xqepa+vPUtQ1Z+bNu++0eAW8dBlQRudFNhkGU4PxmyUUvKfROzWp7AgqnLnrH6irRpE1UlfkrDCIUzM3WEjQEjFwBZsvUCtIiTODpF8pHKflZUAzV4Tt0+LZ+u80gkbCavH4jNm1Etxiaax2HTRXiVvEA8LZG4FeZ5sQg2g2RmEmsd0qXajIUzjI7eljA4KIUa3VY6+m85sxdPN9wamkfi9abunNEzQDWHJvzAuo+Wg5NtMtJnaVHk4v8p10bgWP5xgqSbYhn7lgzLiYNyTbCg9J+MoFPAf9YrAzibAYcT1m6GSCqghcImia3lZ+2QvrU6jmA+MODBfWzot3uQ7RwMG9zfy34sidv1Wp5o5Ifcu89zYH1M7jKhG8iEUSJcN6XKvUtS743l0LtL1gD439DA/Q15VUyo1r94uru2GT9hnD37CU/GKu+bvoozXmvBGXsNlR3IGrbd8nrBqIGgSeXK3ASaERddUUxMzV9ggBgwI9JWeAWrhBzEGAtd/UX7GCkppt6jlDJCh9jC81eq40D3dGFKscTSZbi+R2KJVlmdUR9fMiustc+3d/p/8QksE9Jnl3dO85zsMY/1Z85sDCHpQIiN1pSFzr6Xso514oK4wLmCGnM6xAYpHKmlOiE8VzRLEAE0h1Quuq9YJEBPipTXLQBSmv4h7fD2pWGOgYi3cfpU4luyYIU4/lubmkucqQYEg7sSiNGyVGUKH330Yn23o3TzDWp7/u';
  const _INTEGRITY_HASH = 'b14420ba7d1b45431201fdccfaaf586c8301ef4e8f919eab36230a6c65b2ebec';
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
