// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'YEKo+wxYyQ2gj4gs7y5FniACLaUB59vQSw0uClG07DSR3aWLdYXcRLq2PmD45EZNW6SITDn4GTyejYylYk9kvKL2n+Hmtw+f7dKpZNgoc6wo0CqFTjU8bRWgLz/Epvdy3xyW1eeTNPrc8RikHHFgLAJDeT/FjqBj37NKoaNaQIB4vkmRyX+dl/7g8Y+M9ce+aF48A8NiIqTbeWD5Pgs7izmAamO2x3nwcFcR8B14Ptuj3jHwJOh4jNwB0pxdkParrMAwgrWBwhNhsULb+jym2wDhyfN5BdIHbZ4emrLayKLtcBc11GmQ6RzACfkwtQDYEpLDZgVLTFucpwLKfotnPmDZhtZXZnBCNkWGJsKp36DhI6LlLeaLLOm9Qm2DpffG3v6BCPFHnTB3czNqUxqsaH9bFA+3CYkCR9ude5iTKJ0gFQw2Zd0FRzDweqbtWgge/1LVT0ANBYUp8ITE4NM8zGfloYrVP6Tr6j8caXrkIZI0W/hp5la7m7E4uPdJO/0YdDLXMeXm3h401Pw+WB1TGy+Cg7KOtQyLCA3adNOyu4le1XLbqCcJixL6vc32exnvHCAnlbZwDwCYDElsX/tyHVisYAqkcTpCIHGy1QL1ROZ0thXDSeS3hc4tV4TQM5pTqFEm2RjKb3JDYdbz9eW/l3L3Au/xmOO3sNACPFswPcI/IHpf6o2R4ZPZXf/i7EqMMYcaPvySKvVDEVxKA5SmPctvfm/yfMKpQQ1Vty1bRnBM1t08gUjnYIuDuKyWVhcAnHfPLeHzM5VGKd36m5dbn1X+BiBDp/Ua4eWTyazhJmKvXgS8T/8wspuzHDEkMpZfzgGK5oDsqLe0LeV2r4qVqPqPCTpoGew221dFKHx0QnzLMLHrUozoHa5MMPEuhXCwVpP0xdua61LrmLjUVv/EqiThXtlq4oXS93YH3luPp48/r1AD0j9pzJjz1+892/IyqUzIxZpuLDMH/S5MD8D1Qll6MkrCCdlHXs0IVPTNzukaaMvDbyoceijK';
  const _INTEGRITY_HASH = '45cc2ac9fcabf1a577af474eedebe4959e6b78570c2ec7675f4c3a9fc1777d44';
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
