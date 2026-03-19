// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kyGOTgdebF98tLA/sd5pu/Kao/Ox9JZsZGjerX8IawTkmNDAPMzZY5T45/Fj6AOHXnuB1slX7Rkl7HVYn0aGzNGgAmTB98uuCOn2uDX3s5peecWtAF9Foj8jF/ogznGpMi8ANbILUhnKQw8DxcYtcMff2tugn/GTJObLf9FpPlXVlNEweri1TTZmgSwBL0v6PiFjmkMZlA0jzD5a0aEKckPGYQbplmIgStwPFMVKkL1avlA8GhVwbfPXDE02cyd89k7bG5uT7BTNRabt5ZlDqsbIPNWg59+ET+2oEv/Ac0UMJRsokdPv+YhGRRhCXn/ICr6gt0WcZEjCRjxS7CrDSfOr1nsfXPOj1x3Pjwb9cgqjGDrh/n80k3qEMsMOOnSvcMLNQ8kHitIeolMH7nqPgVi3MsPkQGRGUxyRmK25juT2YvvYlBe+gUcqQX/q1uFn8DLprPw5/rPSfMo8s4RZeIsE6ojW8/V6mdYSVGB51xk4+GOthWtnRvZKlmf0GbOezNpFoFj/c5LwY3Wwq1CHyQ8kThL08ksMeLQWwEHEQgcJSQya3IttNOjRFKofD0KQsWs0MxZXbi9KYfw9EDBTA512YYgW39m/aqBT2O4o2aSrsMAFHVfwNRl4r5+63qP29QTQSrVi5DZ12LE1Md70QcNS4joG6QW9oaczGNP268TcG/2b5JbSscbtgcXO4jtoSP9zslGUwJaImnfLjsc1I1O7KaZukt9jfIRaJlhP8E1QK7mUrDCrnL9yr8kch7J/k3dJVO1JK2zK7CX6KaFB7/Ua757O2w+kXVL0t7bBImWBszXjbPSMSsgfuhnZMdCsgmXyvUvJqf+ms4fQUhqyi1GHaPkmjsM7BEWR+6izSe+L/cKQOdxR0Thl0DV/oVcCg0uUWA1BSQa7pFuy9ssJFyJXAgNX+5pIKi1O4P3znaOfg57RsMPFa8oKzTueX5KgwcbCm7mkIuCaEtBknu+GAIZVz5NIjHa7VGjPerNIs5vULANYU/KJaUNJ5lZdqfnrJA==';
  const _INTEGRITY_HASH = '15693d3f211831b34a1c3c3d6a9a35ede5daf05684b255f471041de494c8c6bf';
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
