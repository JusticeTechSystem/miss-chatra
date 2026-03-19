// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'klws7m6zMorOpRdH0Ynd2NdojWdduJaGp4Ltvfw80zqz0Oa2ShGp7FxdK/RrKSdarBn7ynM6pq6fkPE2KxBVjt9HjVWS38n76+p0tTAqd5I78HTiitUaKOZ9ux0o0ibMmvGRBpD0bIpBZfcNFj50ivdomQ4M+CCEieohbxsWklKwC/GK/1QmPsNDfZtcVqkmc8m1bquTcX35HmkjFHh3KZz45C95GL+kyiI+5a5inV2Odzip9CeeoyIBmLaV3h38j8+vjwXdyrfO4iQSaMJ57S5fRAXPIfA8mJyie0oJFyeXkiXYhLKvLRDTs26Se8hkSDW3Tw1CPE5zovHQKOZRTyCEvQjg8ADH5kP1U38igFYR8v0ibPlYLgTlpoFyIV3Dtg43rZO94tvljat0XYpI1GYR2WY35JF/hwKdhZlfxB0JzluPPVlmJaiYszBKEXoL0Gz7WyyumjXYjocivRvD7M1b4/1wgTITA3y7Rl50pRWPhjr1k8Cj0B393n0oloHWqYT2My3LqXEf6xF8D/sie6L9D7eAdipUvX+uHCOB04fuN1qXFQh8fnl/ihpASkzJWwpWVtLV9N1Xqi9+p5zldsd+rc3M4vTcJNYEzV2ARid+HNhdd5EjCQ2U5gzhAjbdZhrgBtDPuQbQr0gs0V2HxGufS6QojKpsxGJiDZsSEbPY9jdXX35c0iLXHy9tiwMcicALvJLCKhuH/gP2XA0B5eDBCLQp8HEIfXs1VfyWMcpEr+GeZ71/XrC/Fzml8yXU4RoiL6F+KcQN5DOuU+OO3rGy9O6JFoJs5wtr4ABhqA/FkmOnqQ79EPVJNvfjXMnP9DaKeUBzXfPEhwl24GseUhtFBhPio51bSsfwRQBSi8pVKTAVPmTVvAfb7L7zSI/u2+sDolGitYu5mOSJxMuM6Vs5ncvAlwyrkHnGFoq/hE4DcSpQoGOunyE4O8ClED/QRJ8kaZ1iAL/rGsiA6IcK1klEgrExKf3GCUxJ2w==';
  const _INTEGRITY_HASH = 'c83d66c99ea352eb7a77c2692dfb7fbcff8c5486626261e0dee16db7b44cb948';
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
