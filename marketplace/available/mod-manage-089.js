// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'bCDgjAlHFGPQIk9sLXsriL9gZDy2AfiZibewu8k4hQ4v/FuKbhmUlPfMnjgTtQoWYZDLxHs4G5zdJ3hlbMLVDAy+Vuzjdujd+1DGH4q2XbozX8eXK9kV6ziPCPFlu2tG1MlZIQksxlOMeiMl/VLIL8p/kgkONQzHSmjhV1jf/Htrhi8wh19mNUeUpnci+9WGNvzm+GYGUR94rcHfq0EBiB9eqvS+lx+LrwA9ez1UnajEFckj8/JmosQ+nAzRiLPj0GoNONNI1hb/bEki7SFYiXdMVU+Nfc20+lX/ys8w2KTAAIKCpdyDxaHBN8BRoOva1G/U4BS1wWRwiKmrK2YL27p62FgcLgfmUm395Qiwti1GKHa1MOIPMTRaikIKsCQsYHKLo3Myv3RbnUMoGGwmjD1VmjhEzmJ33V2t8HUpuIcHBoNlaS5d6JvK2Qze+PmpIp/CMQSv6SF9JNrYiOYrpuzLnmLiiG6D9eFll6T/LgQ2QeJFkeUoWOzDbMdVQGj+Li/koLrLZ1iRzxVd35waFljzYi7bCn7D/ebH3eGVAaZOzBFLK/o58mo9EhjjRWK5mgIhP+EV4gIyyN2wHxA8weu6xDsZUgV3DIGnubVnYbmklY7q3yVxr6JNRt7scoBGiNtE6w2JwJN2kP+ptwgyhhr4NhLocARQ+fPoGgrwYHGcBN/zSbSxAtFBnQpyU1piwDgH9IrhCT+t0AIf572YEPvcM5FAXJ/cPAn/wVFptRqyqtk7wujKnVw40zT7vA4DnvRUvCFtF31DArZjBOHyD7p77b09rQJHY/XtzCHjdzFD5atjfgo70qnet9HSssCpHjFM6TiXewxHZtootHBI4ot5sLQtKPKvXAcdRK2Npzy71NISbClJyf619MwAKFysQHwPKTFMagm0VvDm4WLqJDgZxk2NfDKu1GpW3EGvdtVcbcmtslTitCKYl+Z4vprOsmhVwKts2ucJa59Gf4evkyiHw7y2woitcHqBXEoIFB2Iqy6bjTArrH4J7SWR8m+ldYDdbGinzhgbtKTxWURHzp3aH52S8OiRUbdRBSFKdtIkr3ettRsXNrqtAWkYJY5szqdLsW8zskS0IxGI2F2J8EfBBnIzNwvn2VanLoYY1szTZ3NMtVZ0vAKLuSgYsl78hact5PkBDdoJZ//LmbpH9RfiPCb4NxzJWrEjCFdjAixWwBNnqy/kkEtSmgh+57V5dEOj5LUQ7KxxKHkPj27RDAyXab0riZZdcPZlshZIgWrLTXPEva3wEHOgxoDUJDYIHGbPw8K4DrsC29axDtX/gTesuY0thitZnejoMbxmxaaO+PdVWtjqRbfJHhdILE3d3ScFtwQPXvBMPcwBuYkeROUb6eYJr1OyslZn0+hoabXEnHk=';
  const _INTEGRITY_HASH = 'ee9a56c0b47981f99e4d45efdc05fd13a1bd52215200287f9cf1e42b6e95f38b';
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
