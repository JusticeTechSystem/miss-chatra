// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:11:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xtEiwN2glWjwDO6fLW1MVzBf+pp8NLlf3dsp/yXAyNCGw3nmveOqQieK++prciUQPcekY89ika/QZ2CYQVljnQSq3Y53QDWVtoaCBj4r09iLFZcY2avsPKY6nh9pB22sj+HTHrF4GzOkCjrr6GYb3PHg1wGGJvQGchycqioSafQKCWjpFQvfNotTaU2Fs1MnhFpouIK3QAX5GNlXyYNd/+6YnTydAyZm5kLhiUNcvp0o+C3R+cvi6GSNuVZtVuRebXQsMQ8Ee0kWb1C9UAy88cznzLOPz4691mw8vbN23wmOueFHVIt08ht7ayyg6/afXJ5QnFmxETJqUCpfRT/mCUSEA931BliGhUVLhaUf1dVt2O09NPvXMlt7UhyWeFin4NoVUSaE6o/1gpz6LiWOejBU2juDx9tst5LGY0bEEI9piqDykGEnjOOh7pUtm6giiqyiKCmmE0OJN6ZQw2r/SiFumuQCenO+rZcgfEjDpZRUriIrfxyPdMcBhPNuhnInqOEcmgeWLfb95BixIP3DikLUgykQDpvSX1Csw8FQo5Csz86fsNtRyk37KVMcLy1GyBpApp2Ho2Xx1TxMLSIxViKh/6xBusO6rUE4Y4PSiP0RtqK0Znw4KmpmXsQiw2/9WGpCuIFHiYWe+48FE0Zqn5COwd+rscl3AVrFX1rpPArmVL9mn9PDWK63EN+dtJ9x+pP3JRBIECj2X/sKq4S3';
  const _INTEGRITY_HASH = 'e061eba1c93f889503cc8eaa07a39c27810458bc5125c46f59a68f0f990dbd8f';
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
