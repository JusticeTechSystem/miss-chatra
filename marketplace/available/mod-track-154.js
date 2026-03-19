// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WYApxIXH1obo0W+1Od5eNUOaEfMPEHdDpTOVvhviLsAaAfVlFD9rTBaa4oJWRnvfBQiERqlI/ATYI578a+jB7OulEuEHUv+j78PCVf7yOvmolDNBtTHkrQmsI7OF6l6TXBo/uUo3k6ukb+B47OM7IdV1dX2fl3cFPFT4wgh+qYDKLS4qHS9Kmoy+4jJKpRxG1CCrhzKn7VuNgiz5Ti1LMOFlZD8K8uEe8PPG+k2oGrpglrMIuDjPNAevJ9Znf6q2VPF/xkCyI2U4psfp7ecXfAb42wkGYkTM5jKTXsecKCudk7Z7ofldCy7+Kg7NJNVrijhpoYe/CvmB5oKq1/QNVdnPEjoDiHU2a+O0kx4bzVtKHEKOCvNlak+UnSKOE16JIXD1I85IY6eUzU/GpiY4TCDp6qKtUhvzomnRMLq15ryTWkYJVjH4YZLTERlkjPTjH5ts4JhAlL2luXCKB59Z+s38aVesz29KYrmF6rwP8RbYevLgR9u5i/lDo2hyOjRewg4yRqfAz7PU6qb8IND2zG5qSWfzMtEPwE4ZFwbIIj6k3OwXay52xPmS03QFZzD0sObn1J0MA0FY41bO/XWRPckguveUYV0XcooDL22zE6Hem5rtcL/nvy9vnoT2h9dfB4FS7BMko8YqEm9AdbLFN72W8WdI3ekwD1uhXZ5dXfGiamF+Qk/yDzBonYgWksKVqRPWRxhSeHMQD4uxZUGSnZT8f5z/gQAzGrS93gOfWWsoviIJoleX4wIsx6g7LWBLJU3A0uymzSu/ew3BnOeumG8Mv7dEhPkUfWqN9I0QA3q9u0vUDk449X2KWzk8TnoWd2N7i2Eq1L0+XAmjClARS0wNnVUlg7om5e/5lEUdtGiu2F2vQRxfqXDgDH8HW+znGVC4KfJbRK4XuraPiXBXl71zDnVNsGRw9GDIgAV3qT+nQxhjgT7AyvVsTBQZstLf38goIkdTZiJiXzM5E3ZPtH8iv3Dc1A46egZr0+Y7HhyUJ8E5t9IHmAC33V/tr6U1jG99WUjXtKxKlkL4ODDhPTVeaGGgR9wo1lP7IJvDhfcI7LBpNQE7q2kBV9qpEzwJB3fJfm+igdq44AbJXRU0cIkM4zCyFf5+qDzirPhWFIfiMJZ5ZR0KcqJCjmWRP0IBEVA7tq+4REcVjnfCCIHOg+yzozcLjPUh8rrGH4PgQiDHrbneAgz612uaS7OOjwFIfr+BK06d7T2hUanHIGw2A62el9709Lxynp2MV8h7hy23VMXBpxzrlO/XfQcd2pcQsk2hEKNizeOjpSJkmZ+SnpRdj9rDk2HS79VRdudCz6Vqsmcr+zTucDdetyWmSAZCCv6gbgLvEbl2eRoA+v6QAaebKnojylWpoPXCp/Wg';
  const _INTEGRITY_HASH = '0ce36912a8a8d926e06f50a0f064c7dcd20d5d62fa2e5efdaa6d0e97e9c8b186';
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
