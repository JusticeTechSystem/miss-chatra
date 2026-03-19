// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'phriJmV3UO7ZfztRFB88Xzabj0ufXXp8/AYUHbBgKFsaBLZHJt1to7M+LFCZyxORd7BaFp+dBDbOFp/STmbvFrxNYzI+PvwpPESUBsLlYDnosCe2PtSh/jALZ3LnTItp3iENU6NPYeaoT1Uel+Xn56nUrBGQb3caS41cKXrPdqvWTubYRIrpS/loPoo6C5oI1Dg/Oi5CncuJROvjR98N54fXvL9bEFSq/fzPgULXr6YJ/DUEqP5pniN6QSpCrZJnmHun03zsr8fLvJ0JIyoNPwoVj7F7VZVX9jkYLzYalaYmHvzegFROMpCPgk0G5E0FoYdkfVjJoybiRyvxa9iR1bC6cJqA1B0yfWWmjO1PY4jcQ7dOsOP4NqZJY5yqBPASJh5x0tYftGtP+3xlOFwfgHZkSar+JCxl6lI+YCvLkuOfLFt07xx0Owkl6uZMtlTqNZnSqIhsfKSNMuFUby7/VO7RQfvMjVgBFb8skOk/+FJ72home329V2BBAih+qFOd5MpljMpiXyN0lKDCgTjpJS8Xqt5MjuNQ3qCQ31LxoIKPlK3tHqFTzMdWjRmqpwPSM6VjDG7GwYgL9yS2bRGlzRwMhCsrDewPdeYlMhnvhPFu7DcpxQC8oYjwHJfCgt8PRUg1ul94yACXvBHXvUraPhv3RqIuVDjXYudv8L39+0JLQAXx2ypGUPejeRvL5Jup/f5bFa6i6heRQQp1uMeAK+HWghH6M9MRKROUTeWBq6fTDDUTuuoA0ncfQ1Ubynqfh+NxVVS6sAjaVp0GMLltlzPFpH/BGGB+rSpco7IWOBK6WIjo9F6elSyxk+uursdBOv7BNNfROaDum2rc/M9yX5pvCm6cim5o9uTQIKATpsb9bvbZ47PnGVMptE021HeIL1dYJbKSFJqWOmkRDs12VlNE/BmnX1tGAWsYNuerIr8e1VsPUUnUm15S1I1bg3u4jpVe8GGq8rMPoZ/6Sy2Bke6FBU1f8YKncbbSWBkPR3vNqWeZJII7WyfJ1CWwySlZSFPlbJQRUOh/1ubIIBNMV6d77l4frdsUok9TlzZdobhbvOIO/Ojx8cU1pCL6bKUtkrneBo1DwwbMD/u8lExlOG/7gBsrs7ClYebgnw3k5SVPMSx8E2DpAbg277dZ/k/WHYlY1YOUy8x6hkzixW79TCn1JvqZvuf7hHnF5wmxIHljN/eteQ5yZQ8FpHrAtzMzIcZWAkXGje9VtXnqX9gOH3DK8QBP2/DLekWQeSRc4aVGVgfaxgK8YHgSxSzDm3d7klc0UvfnzP/Ab4YAzVUFCkdaZ30gE8gENH2h7Q1Kd5dvy2MitlQ3gsI63SAKWSAEEEFjFpd/QSgXPlsG7UfwYqifFkZ2ybz2FHR1jH6MFg/LamTMf/bfLg==';
  const _INTEGRITY_HASH = 'e5169ebe5a55b7bcd2b8bb8396aea10fcf52d7eada6835ceda2cb5bcf5030eb8';
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
