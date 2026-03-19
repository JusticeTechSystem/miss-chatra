// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'aKidGbsgg6rRfGuXFLB7UO3Ie2HPvkiu1jGBWa2vgq9sOzPSTwZ+3FvEEJEHd2zybCunT8zhHsdzpn5woBDJHSUX/0ALy4BxR/MIhX99PD5PAr1bY0jw+E9pfqYQI5ISOYMDOkBowEpM0urInFEI93abpecdrtjWDLnOvXCk5nWtD0qk4N/JHnudEyk0xrZ8UASGGN5JT91384GTURwUp37+5ukSMGyLybeB7JNqi7PftpanEr5W2zovCtcExCbfAN1uM7JdocS4Vxlzi27YvIWbigh4HrI2wq+BnUsIL52N+o4yJdilTioSnyWdY5O5czJTbm1wY/f9nB6bRGcVAe8TbMunegVNJGDKMEgeCH1l0eCa+x23cXppBee/FqLNRcXiJWw1TKDqd7/4t+0YvlJ2bdzEBZ4KIJ3MJzaUwD0OYTv8xI7/IvimkfsTaJu6XAaUQnXhzhdxs+YWt7CRcFR0Z8Vobswo+6PCejEFxM/+f+yY/1uhO98pQ0jLSrzHjV4E5wqTSCvU0MpcKzfwzUkXAa/EsAw953uTf4HsRxadsZvSWMYMAmrMSdrdlChLdiF8Qxqz2L9d9rxSH+OfrmTfgKZjSWm3OwVedn/Iwqlv9XThYo6GOq1CkcEIP/KOt0lweUdaIxxif8/kWP0IlltRjt9Fr3k2igtuGNCnHj28td0Azqlt1lG/4gk51Alj7POyebNhevdSrQ1Z10mply438lqxHpdqnKl7AdDFLBaIcvwN5TlxW02SDXR6LIpLlgu8Ak072LgOWCMl7GbEoAhVEC6pb9m6/KpzSBqdWhBhnLT1dtV5jMb3khpU3PZtAW8p+yJT1dC+dwtgpvHl3qenxAgPsNCDF6/x0vjkyLNE/xwH10OLoqU6bDF1kturonwKF4h/5FfwCu50W6H4rnOYIZ9Ly1N6RCCUy6DS0hW65mMQFi9XceFHceiXfy+WxtNUkZMA0cuTUjipMoCULap175jb/cf342dtpSQ52UG0/crejvm34WxT3TWBk/y6RA7QFSA/HrtdqVYprwr+iG5B5ix/LetL/VqSRr0K1enxu0lS9O0EauOu6b9qnx+lGMkcuZEcAzU2qXKWiQTb1eV1Dbg+ZGykC4d5XM/XTysm+jyerQQ6JPCdlUR3Jk4I2kmcOkD1AJWl8zCcrZCj1DmcFrbicCibUdp9B/aQ25+w3sFqbR6laRmizGGusAAltPxPWOYd9TpbZk9ToAsu0+4efgpmTPTw5EBE+qDMbj3gsMgUbugj2EJQal8UHRkv+Yag6LHT1htbkcWGyoe9ZsHL1caiM7REUlgIsfuQHPGr0VCjj0PskwZSoW3ifS66';
  const _INTEGRITY_HASH = '74c2c9f17a071dcb4fcb16c7112fe9f93597aac3379ecd66f1062963e4175fc3';
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
