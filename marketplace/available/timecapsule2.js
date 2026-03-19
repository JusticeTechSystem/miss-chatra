// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PQuOv2RkqJ2P7+Z5ncn+bpoArfB2ZYa+fKTwoSxBjPoDkSddP5kEgnhJhfymzqJekmL4GS/9OarQ3LzPfH8pyUThPP2B6Nt/R5ln/9fI13muhOq4gitD0e/znMbGwYAb0UksE3rB6X91TB0E5FsL8xtD2vB0oYFZV4OYa16aaSJef6d9TNjSNa0AZflkiFHdhMec7ymGKL+iqGUoZwwhDQHTnaeFGZ7UqNXIiTS7zZZedmeRoYneErpMZCkcDL15zsRw6ezPHoWoom16VnLccmoi/MGbLeiSBHKykhNkA//SyeUSQ6/7qwi+m6b4O2ICYmmxrmuA48Zf8ABUewwJIg/Kv318yeD/R2I5HULHiDZkDqbZCE71ViRG8dPWorM5gHdeqXN2E+MAh0Y2y4yovh4M1JRtD1lj3XGAx9VJE5nuu7DzBe/gLP4XQt604aCDdBvgdqMh9H3GMNPyfNQ40oV8Ky7gSS0QO6UYmSKIxF1dAH0ST02Meezf7PfqsERJScSCN6x3BhkC9fJ8rEbT9qf21yFSkv0tmJUNSD5r5TxoB9IwaZOTxFNwPyDxu7iVC3ekXcxI2TVJRG0nHjM60w/lac+d8ZxbFx2PJU6FvyGlxcMTBSGJrdkB5zJH1WAAI6o4yBnYTnBKHuyo9H6meT/cSWP1wHGt+2icKTeflD8ewu4AjOek3AtQqEDc+hklPHo2rbRJS01qGqPgD65B6D5K12tXZrv3jIjZAsh9OGMrX/in+wsUCmbso2yA56VT/6T5sXMjqmX7npE6PujMRpc2+E8CckgbanW1GNU1FYajXjiv7wfeOBPbiRTeAKF6cDMCNZH3mte5rttMcO5wvnggQh3n8dlzYX9NjD8x66lR2Nw2H0y4VbcDVkNTrpUogZG2m7l6gUKfSk+GrG0aORpC+hIZ5Df9H0P6G655p93jxnfdqPOvg7gV4bgl3McnTo16xLQeSem8J+veXSef6Qwkyydrc4HmTAOBrhcmvxn7JqJuszbVbHGHkWLk/FLOoI/QOeyHHzSG96Z8mxOfCNQQJeXI3m+JG1UkCS8JiTVHAY3H3N4PqVwkaJmUSJL5ZrtFmOORNN0ceaxRSsgUUyQj+DKMktQrr2y57Sa2cTG+k2yfxDbGHWja73TsACgX/kexIZu0ROHt5YcAIT1+2Zt6TQ9MHWH8CcVgAjJh0PrPYbW8zWEL+30uf8LSYG5E/XKDZBt8RMyi';
  const _INTEGRITY_HASH = '885df52a54c2f597da5ef6aec21220ff30e6857ef2c3a49e72e0a486df7e6e0b';
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
