// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'czrC70lBC0Wq/oOr+zW0b2UVHn+1hsI43ABCp131H6qG8YkhuiN1ndLcj7cslDJcCIm8zSRxHThpNxuRUMYMfjMlnnWT+jI5N3mAwewHre4VSGglaTenx73B5LTI2L1RKDtmdxPX/hqlQ6nEeyIUDbFt1xHC8IhyOH2slPSTN2ko9Z7d+yJZ0nM3Mw5ieB8oHcvYPCoSwbCFlf0Sx0rY0Wb3jIeKSSJH3MMRzEY6zXuviL918PN3tG233dOWLVlX1fBNcDwB1Uxz1UXJKWqQcHiY92iemWC7Lwy9Qy0vk/PTccmwz32RPKF6xGXBWaWgE1tRX7DurzeciFwDXLlG32PyMSsmNisIuEPQig+1f2dz4zBkEPI3WMylWFqy+YOXZsXqZE/ybFUAFCEcs8/kT8paQ84MhqVFXfiDcbBtBi3FHdgRP9i+xjHgQR/GlErCu9qlmE6AfrkRBM5GhHwtDb5Iv9P9HOJP+MO6De9i5J+Z1FcJxEzK30OfQgAbZILoAcmdVhQAkjtLd7jQAAdsXj6t/zHg5aFKUQN2zr8TyI/8cLC57hcjMVBcAllDjhk2VnkN1huxnUSrYpW2vFsREjbrNKRnlznGQ1jwcCyuhK60nrvwjDNRhb5wDTr/o/MG1dot5WAciG6VZxaskqi6hyE2JICLOVXbBQtg94sWmJa2t7Pr32aR7HXpcnqeRIN9IAgPJN4eomMv8tVLTokfNA9yuE1XuullvQpDuHs70e4qFtnVjf9SaBnrxzKzk47+axmVoGTYxZsvYuNiaydc0A++RjSDTcKvAs2eb0zjrXzhtixSPaEA8Zq1IN4PQs26mDZ5GfzqM/v2gzxEvjGT9WlWU/nSC4ddbS/Kcjltm4mr1KkgTvZQrOeKajVyv54Cx+KeUNadOMnDiO7IdicJAUCqIJtSE7D0o4dAXNXkAr4l31SoUyWR32+y/C7BtwBI8iHT3n5ut7hx5sQ22TP3iJQJrdwufS8Sya/fj+8QapLHtRk+muLHaEccuFwwNp2J4qLO1tH7axwtE/tRecvQjJawk0Ickg==';
  const _INTEGRITY_HASH = 'fb6a1651aee21e1058a59a7cd4d8ae69aaf6a925730c00de8e94dfa3584461e6';
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
