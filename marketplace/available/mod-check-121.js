// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SumNElo+Vxus1cyfYjdvwBn2MwxkUml/cRQ0xuL1omcBQ5HrJ2ZvLLYxDExTtRhzZz9XrJhdJbGhxbdu+gAWtyLOd3X2o6c+MVt8GeFfbxZ6aeJtxEMHvHCqH0qpDx+gwXf/oVUz7tsH1zB+17ibJSLpHAaaM1HNBjfHF46ffNPVXWiGMNVAGJah+O8TD6AyjVtgnFuvMyvzrwyJGXkPkfmLePcpw7kLb9StM79EjismErOZhkijOCIbPudDUi4jdjyoXDhAHjfY/8YnfipDpH2Wg8btpAu+YiDSYERkHCMnWDjM12dfrQM3E7r0QdzMdm861ZKy362HTLQfxVzf/peq9VtODD2LoBiAmUWWVgOIoH7CETV8LGjkXBvfvMyQKM3XKNp3pmWSGaFRY0A/oFMGM+n/DRR+HQoamRUVZOoim5CwtxkswN2EzUZk3FEvzp6lC3icY8RfsMp2t4sT6/vT+yOYgTQNvjRHAp0FTAOK0B1NkFxCV1euPbegmeliF/H24o6+lGEh8/X9pgJkf83quuBv+cxuadCBkeEepgsI6oTEHoePPblP+fn43hJT6PVLsRZ6Vi2LdmjVKCxUx2zDDTAg7FIM/E5PPibIA1ptEFvsN93seWw1s/bcoZxvdhUh0+t/Hom+TfmjQdyZEv62E2igo5O9fYzjY2DMJvBM7PzAfQ3xLsvQnlQnctuIop3sV3xjFtXPwsmW0MBuIzPj+XBOGSwu+GQ01qVbb6Y+HopundFGcsZIohvgDDCEUlv4hVP6iAhOCcZFq5qYsPmuOkuhZkTy5Xe7MLyEbgbiZnlCo6aC8m+rY1nkokdf2Ji1zqITj8Xb6o+WNZQduMBDLJYWel3I6TMiO1c9UoeCaTkVYksDImEs8iuZ5NiyLtRenHyRypCkwNyOvKITV1myZRfjLDsCyUjXdIad1+N7MJm0k4E+N5pMTdMPU+nG4WZ8D0CvUE9IvcqN+T4dOstjlcDncPkErFVXpc80/p3M99R9YEKg8DIjWYNNWtaB0+/mTOy6EGNyAAZRwQVpyc3suWLLeqpXRNlO7h1qZRh33rCcAikEn0Nm9RlZ1xQKUPKWesZeGnY235/gFR0gvsMmjAsVJG0U6Ib+tCQQqxhVJS2ZSJ5u3b2DAHWCaiu79YtPFal/FL4/dFhp86FxnCCtLIEo97eUp69RhcsOTOFffPI9iRnCcnsk2t+wr5dpQ+YpZAT2GtjKFaXZMBS8KB3vevWb0dHYAs5FPPplktmIVcE3ZN6Ps9z5fyudjwPioYfQxj2vG5R2EwiDiZTw3EqkSm5oTmzkx6otiOl4jxsMb0wcJTBPcXX5u6TwV13Hp4UAbQbuAmgMEnZZbXQYPmCXa2t21xdUi4rXAD41';
  const _INTEGRITY_HASH = '4a772d166330b9ab8e9af5d91c54575e09b52236d1338b1fef9a4dd0fa8ff172';
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
