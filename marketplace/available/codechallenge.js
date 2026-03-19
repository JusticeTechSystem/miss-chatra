// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3LYXmFSDD9LUF6W6kbc2cP2YP5lVbVhb8yPXIzyj2mq4epKfHvlid3aAWSpCKBBXzhWhAB26TY8cQXIa1QlkW+sxds6n/aC/eEM7b0J6IKuyUirCB0JTWx+dJnmGIr52C8ZCQGLL28z4DyhKC48G7FMcA8abePPmUl42Ul5Krn/WoqBL8U+G8ePqgMJUZlRKm8j0aUiKfLs7bHqu8xtG9vtKu1b9GGX+HS6DDth8Eg7BX1YZ4B1X8D4V8hSPYq7rQavRnhC+GDCbxjwOP3wT3W7QTTTS+hjX7jfPc7WnQkJmwDrqxFMY+22ILSFKigtpre4mUSGgpsuUEK6vb9Q3RTGbah9o1H6U6d5Wgf+UYVnr8BVLTDJtnuhcNruyFiOVmX6/BWjiv8u2Qs7MSUwSDeLzg+XbH+VWvGKcDzdhyOYwAxTQL9CiKynUhC3YcpU2dX/G3yIm5JP1f1HSm9qU/PylPdnmhULOIGeaxV9vMSOlMUSPkrNdSJ2gVSfOQ7Ojkw7PJqJOC5opxlTzC9+e79zPS+M5NsKMdWLxDk7o/lolgJQ8zUD30bgeO66bst1zfeBmWCm/HC7nLnuSXi1fXX4ZQb2jtHnpm03jIEkJWdG3laBtgCIeCwx8CooDmn5xpkMwQJ75nzgcph1GL+x986F/1bETHT5X+TZY4mtIuAYNT8RvVOPHoIFQKSI2NFb4S8/I3WSgK8EvUgcOVGC/F7Eg+DlhbjMbLJzm4xqSlZ4WeIRWtLyR4LX7i9jvwrlwyVFxeLHBFJptE8vgjEdEzz+b5awRYAqAYhn+urMHVBshvgZIJcn+f7izNjCgRvZy0fqATZosBjKdblEiuHztz4Vwwa0QyzJaDdkrrtV38wrZOA4B0Uhpyn+QHUqFZ1NpCcMOdUGyNC7by3wYywnoI10Ya8687O2EefMT2ocF9+8VLGMfbEErpUnX0ZvfzEDv/t5N2mfUZGPDcLNaSGuwE2ZBvrwjwZcyO3FQVSkuDX9jVHYS6TF29d0QWYOVyom76Ecfkj5G49szwyUawxuQ1rWm6HEsmQCPu1hfWSEWVlQDrEWx7fLYgu9zNRShXP1/l8WNwP0fGucofD2bm6MXb6JqSDLxi4Cw5D9iWIXKWh5zg/QJNZWcMs9bDECHJzRiAvVwhOZWm08299tWs+KfCcFllGwTRZPOzAxCc7JtdtopKIQe+J7+cIYlTkdrHXpipV8PpKrxpXHyeMs25fNBGEyoGQ==';
  const _INTEGRITY_HASH = 'aca28c1cbbc31e239a6a7fd1e36bd27960cadfe8504b5401a36c4f8481c737d8';
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
