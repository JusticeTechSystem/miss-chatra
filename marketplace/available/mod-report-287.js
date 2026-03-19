// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'DyNR2Q7Oas8//oazqb9E8FMTRdEpCTTYBDSD12JhhsAnESlOFhfolUy55j9lJuIQFAPs1PZ92k48+gJTRy0MCq10D3hzsxjWglBJFbw6ElvCbGrLz2cMUF6HW5Un7mKiTYsna1z7SDHk5HoDfQ99p+YCwu8ZJAiyCXyXsQjOBzIhWhp9Ed+sz8VUL+5RvD/UFyeP2yjKelX2XUS/aKMtV1rjNkTB+998Zfu8v4UJi198W004kbFr2MpF2iYQcunZTaSve3wUL+JNhkYGHq3Znfnhv/N3iajRNw8d2+HE/cbBe2M2vLw7R1SBJjduIwXqeaohu3Nzm3ElKNVmh7O9DpXcBhwCfut1VwgAw9+whceyCP79lrUNWAi4IvwT6mHW9gDlZnYhMlRYlGL4RWdJAcswn/qptrI2hJ0PCvuzSVJqQepsaeIpyVgP875XGSR/JIM3GQxZ2Ht9zbq1yJfdH7bdmVig639DkKUVhLGqULQmpvH5vto3+7sLM6ryx6ESBO7IaPc69aFZAH3lw90vNd8cVzvqk5iQD03gyFSgz5SWyL+Wkkh4ikJBTljVYXGGCRxlQBJ1H7hla+z1d4omEb7V3owSL+Jx37n3RlKOeY6FuBJmA3GoSZh7S7TEedndoGzMwqnAO+yZhCfReXsr/T0/bQuzcb4GIVd+ZMRnFodadFtHRYZloZTdsJKQU4OVVVdGGFnABD4klzP88a7Yjfu93tHeGLsriZvVIrcpnyJ/gw12ezWtYCd4E1ebd3Nu9FrPUf4prkG6CXAgTcO5DBV886Xaoy1GkZEKev60Q5l8FA2J9FO9RRKMm9KLI7cslsVrre51vLpjjhguZAJsBkaJ+HsxAFmc4PREEubhG4taIuYXJn6GnIC1Bfu5Bdco2KSOG3EVl3KOEFj+xuCG8P6OoQRQzvC+P5n8f34pdjlAXXt4rx3IKS1SPwg9j4lgAAManOpo9sIYwFmiuuPScMmZlSwclmKlawp5DN0t8TQUGWfUvS09eW7gdLFfJIl3pqUjybqADSn9Zzn29WKUYqjhxw/AzIxJ0KNT2qBLtt9LbXEDLZz84t+ar5Of9CobaAF2TFIjzLWkwl+cozGabJ8rqWjJa9XJRsn4wcP78Lre5N1OPYyEcKEKv7l9TPhM+DAaGV/2Ryeridk/VVtluCN7+glCXhZhCWrTwKo3XoDJemBlg+nU2RCQ9ncYutw4mfGmIiUa6A0PjwUSgD4REkdALHsntVu5Ntppki7JDIE5HXtHdBuymHyWDALeE50ZpcsHI2WFAg3QMdHTd06/GEblGsFDgu+g5B8/retsXmrk0FIIRYKJt5J+4ryNDU4drqc9jQ3YU3Kgn8J9bcpdE0G6k4mH8ly/KPENTizCcUvzUZ30j397BA==';
  const _INTEGRITY_HASH = '862e708916337d222854f5dc20919a707e24a4f8301f12ac50dbb0f6e6a45556';
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
