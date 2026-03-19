// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'w+2BCE0Pa570aAZU0maOiFwt5fgewjvZrIKb9rhPcxWLd0+GGtzR8fwPEdtLUE+ufmYOWZz+VwHyWHlTdID+0OoShrSv2+oXdDeZoatodzoz6xAlm6qBDu4CnMmHHUWeM3YHHmNGazgss8k/DG08LN+pofriFBsp9oen+nB5QqREf9Xmmhq5pGnrIRfVMbbNLdda4BUqNFn0B6DGKumJP9WvBdMxv/hDyYBls+9LVrIB06FGJXIDFK7Nsh1NmKLdsEu4CTFI4NS1lnGb5UEEuygeg+QRk3apiNxOHwpq2igKDuN7Y3kdIt4wTLnvDOlBWmPX9rRpaz7LVPeouNwnOattdfRzc0h2TDEOY69zUP50852DhicF53d78j0S0pKfgYtqGZBzANf3WCb/hLy6Hyj1sOUKpDpFG/70l9tiXALv/1SYOiVY6d6qOC91Wpl9jlQ99HSQqT0TAl0vF0C+LL2LmbV8e4za9N4Fr6eKRU+sMgCHJajp+7edAhx8p9hYEWEPmY4r70+IiO8T/tXD71q2+OoPuRF/T6QVbt3jshznlgIIJcMUsX+Os/aZRYvGnz1ItS/nK8RBTBSo69KRAScU5cm8rqTH3TSPL2fw+ogx6FQ4fCj0Fb4BwED5uZfX4LqC150C/TDWVZLmFC0io6c55bWK2RAir8QFuF6+sVypKFkB4XqU+mENaK5NRjzYsW7dBzc4lPdElBaDGym4muQUBmWvoTha5hLMopH0fIiM1h2Y4zIeBs7QP2TBi3WyfOyUppyjKcAtp2Vyf1yRCGeCbpLg+R+qkyU2nIIoHXBD7ZWS1TSKh/CZRDXw1RRleTVXLw5puiydske1dLxLXsOym8bU3nhTCFs+ONCObmyPN7hRXz0CZdxTbNILxebbxrQcaTIuXlMhp1Fgy0S7XW9bvdjx/qkmOwJaxwQYZjbOshar70algOWALPPFLQx+VbnwJ6ccbqi3jhkz5GuOxkGfG4m9rYk4PUTOeMLqHtAyvp5qPhGcrq6fQCuYyrHRUoDj9iTcmhmG3tYM+cwJohennwUaC8Gz12kwC/kHm9HK4FYWZw/mhAvV+3dA8vnG15AfSebBLi3cWbIODWVqf1XoznLSCCvCZ53+JVuJHie1yaXDbmS+1s9fJd6+ZC1Gx8Sb9dg13hc3l6pMU8ocUHBbQX8ARH5cKBBHj6H13JdQ7u5RLCMD9bVTXVFxT1zLwK5B';
  const _INTEGRITY_HASH = '4d8aae07227d9ab7c3e1a23cc4454f935bb464406d3240bb7bd0aec37ec1dbdb';
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
