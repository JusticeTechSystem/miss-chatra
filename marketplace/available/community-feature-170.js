// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NyWoBE38E5MFyCNNUXaADYuz+8m4GugzLURcnVSDyikTJ1ync4Te2Fe1rugPu9UteohrGiiLY29LUzV8ISP2BGv+241tgp2pPmod84yxQlaDFnAW+zYr+ZsfICeBBy4l78euaMDqlrIAJVp22Dv+tVpoIiOjX2+JOnAzwcdN43OSkLcrA602dPJJUcoKkBA5s7ixSo8aAEVaIhVjvyP2wmTnOMPHsgFW/sFHL1tKy29hclWrlQSYLCrGJTnUwaE6zNtpISoV2s9XTBjVDJw0Djm6HKVhE5xo/zvmS4bVpsvMGnrOEHGVscPCjd7ekCcIwNISGwWFwL4/PlSwaIrwNv53v/Iufp+7xp74uahV/qLZB3q0WbTdp8VNX32avLpoHJvgmvXVvmSqWvBu+ywlzBiq3poRuHrv1KqA1Vx4xWlIpffL498UVwGCcTI3NgR4TJ/vvqdd66WbtyycGIIF3NMhmnduz5poEbIeZf+cyWFNr4XAbhF55OHquI8oFoLceHXh2r1xm+ATKT2LibbKJW2Fppi+nUIeWRF/566jox0sf/y7FGq/vhncClft9Bm66v0yGziK6mYxtq6BJba7kB55crGDzcYM/176TogQpa1/k9XuDADs/TpRCHeiQLe6Aty/52SqXsfCZyM80XLD8bXjM+Pjc4FBAFYeE2djj22lcn5WvvDzgwXgd+E0TQaezw9kJ7DBkbZof7lrmePUU1KYNtXwr+cPvREhXCps+EfWFUaFiR7F9zDH';
  const _INTEGRITY_HASH = '9982784c467622de77fc2385dc364b998011001f84c808e4ba20d7d230ddef68';
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
