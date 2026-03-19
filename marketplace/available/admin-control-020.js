// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'zb3PqMBTD8ssWadbWTswJTc8kyxMu10++bZ+Og3BSGOdwN0K0pL4X1/BXddqcm5IzvO/+4b9B9TQP+c0o1EqfnUiX4jkj0Z83iGPdaKav1/SfLiIGTe3vjoBZSZNsBxsyupRzoLkBxaxgHQpDxzOXBXl7oqOji/ER6tkEl9fGcFU3+h3rF6DbrGqWGvo8Uc4vUN2lLgcXWeIazWkP5Da+MDlerYyRCf/2vpxktmox0ADnu3hx1hOJdW+3mySp3uWc0sfcJp5Ngv2gF+gBpNKU/PiuGOpazfpNRloL98BKc1KZr/KE5rHwfibaTLmE4uwfK6kaAbueup6qTPINe7MfM/NLoC6sBuM7QtG3W0G5huaNLRccvh9txxtQuQq/qOL9XxK2uLqz+O7u6ASndeC34O04K0cC8FsYx8nPzLEFPAD9z4Kom1yprEeEqv4SUPHma42SiZtO4YQoZjstSCTZgERyw4ywJqVojC4dUl/ssFns19xsuIIybnib99BcWrTh1kJs6LRwJERVi/xoDXNuGvCvRXXJGLohe0F5L6E1NkKQtBnnrR2UBZSr+33dxN7A4VV8rHKIz6WvEiBpR7jXmDVdifNrkeZR0Yal1fapyXNTFiJzIIVUnH4+/Qdz04yI4qtzdCvqWoxUpdZMC5k/U9rgd97aY0d+7Km6wBF8sXgGBtga4yM4ruLMMUxtJx5JyZEvLwviQpVedoGYpH3RsKb385F/J21WMrg7r4JfZWU0d1nALnFgZevYik8FVj8xiReC5PQXlbZqant0YDTxVrEMOQhKTsNgZkLmP5l9gzTJIgyAVbq9NoGzCt4ZAZ460kLDWEO2g7YdTpW7/uKSCuuDE6JxOwKinxmPmpmjjJQZSFYp0eNmvuBcHqTRpod3NgCY8bN7gT5W1MptrLNeSTSIBE1L5sPxBeh/Rw+exQnUg7r3BL57mCt40x3zciUfRCklIpChRy8tz55yqVSE0/F1VHvt79gQNYRiEH6YAMFWfPFN8pY04et4EBMd3CEHpKJ9Q==';
  const _INTEGRITY_HASH = 'b4ac1bbd8241974db523ea973f2449916bbf555a0841b45232e142c49aa8a42f';
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
