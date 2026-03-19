// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8hMAIiF2znvSW/Dqmgxch7rxbU1guP4QLORTRDP7FYwhH3a1w4fa8Q0wfFB5ffS2EMd531vHzqtz3SmjirublqvhoR2y1BPps1nwp7UPf0sRBlfSCAvHW1g2H5gxc297iQl8HxYOlHGZdYZ9pnptng/0ayb9yaNUpjGmWujMygC1gf1GivnZc3SwB9KssyqiD9Cc+wNtVIcLDqYlpidR4dK2Z/tc40uig7VP0NTi8wsIcuE5QD0I7uQPYHrubJ13tsOGiQEkG1eA71d3LgYFTkW6MCAt5en1HdalYphV2jXetme13JsZZHUJ/uC/lWpw6Th7czJC/nUmC4UYTpk4yoMjGNx8GY4pZTIqydvMzhsjMfpUP75SRhI4eqK+JOK/ju4MOI3eJeOt2Fd318JkjNzGV9bi39qGmeVGSbVgy0i6PCG7fbIjamGCLMMy6aecXA8AJnz2LoxkJ57ou2ncFZ1s3afB9G3piSXDNAVjAFKkcIqxfjhgXaeu4h93GIMonditeRyWS9JUR6VZ3qo4WnaMmTSGZCGwqiTLDxOuTxRrSe/nxcjD0lIxsEvLjmYfJaqrRgdF1ljU4AkqQhyypQ5qg7ufPRrH4CVf4M7z/j9aZEjeqrRhcxBKv4KQGPNOQAHhbu0rm1a3opvBM3z42m/wPF+hNdzUaG4j00LeJuyxCMqpRPok3HaTiaRY75DltzYcMoGsR3Wfk7icGH+8M2qo84RBi+Z+2S68/jCklUTELEHHygQ4ry1Czij/TKdH5eyXSZnoz9nNoAl28ydchm6OZC4pIe8dUYyfw4mGnmc7Ydfv+Y0ZWCm0QMiuRDHY09CE+5b28/KLrE6s1NLGUwJpYFT53Xa9oqxzoASbRM+quQfrh65mjgy2RVIuIWi7hAJHnVPXsUFxt4rLDFP/i+rmKLA7tjjcMCUBLpJG4izJsJYV9E88WrxJ7r+EMJBtGo5iwAGGvcljMXNzoznw7HfEwb1aQcKLKRBQvN0teXq31t9QXjOFP2qARtObjefp7fwTqq7VnGt8ACEdIwD7R99salLFfBgbOZ2OxVqOwHxwdjQ4wk2buUDlsrOx0W34mTjTTU59oNzaWCWGD7sygOwbdbywevGjxnedOP3bhUMG/DbJT8JwqxpGbCtZFwmvu6CCadwksK+lkJCqJ1xQdODFfhgB6JRdhrAYC8wcygBsoWj1W27fMOJNGT5ZVhdtWnCkfIQl4RjvzSdkO9R4kqmEwvdVMlhz0sy1vRoco/RqVkuudtl8L/wezkofyBjyIwbBFuFHTeyiNNx3CjfMTAsOYDpW6gszZhmue79xvulJ/XWhqKpF6kdEVNVS8vsSqNqH8zqwZl51E54CrcVx5BcIWcUHGP09fVLKZYW+pEZtsNdohYweC/yogUpuuoK1cObwmcu6bbttDyFz';
  const _INTEGRITY_HASH = 'fbc852554af149a846806a3e2f09ab518afc13806fbf4efcf41ddf3348dc00ca';
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
