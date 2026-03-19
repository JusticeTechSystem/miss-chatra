// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sAcqoiR92eaRCZXFnNETaGoZS9uxL9hfNs9DROM581G3KtnZ1J/J6JVAwsbtwl60eeAfafUZ/x8WS3wL3s1+b2B+3YVMEUeaPDeu+e2AjR9LHTGQpM/Dtr6LAPz9tvHzrzCz0hou8B4yo3VQMcyjeCoDdWmUXH/fudLqKCvudP4NhMF7qljBxSQYDlOg7abKPZQqneMlbFjO/DwBMZ9MXD6VwHSJ72MzFUyQ5DPG2/s3X9PzT4DTWW4UVObFyzWb5F3FwYbTWkqT9h/bsqTAuSjwQjy6sqS+0fA6HiU6g6x1z1rSAzvw6+zEP7m6Irajffa0qTP/Pvk2WrtPmfuZcqHpwxN+mZonDtvm29q2UGpDjNGm7CKkbX02K/Crsa9YjSyyNi90kN6CeYp2s7SOrprZdWg5M4oR62YmIVhCTK2mBmrK1nugogP44McccvYWck887ATb8ms75aeQADaBlk1WUE0QUKHxwihM6usKwSdMBZXH51ql9n2rkO1KRKS4+5yLpxKyiApC8AB9K4hBkxm3HcOxb2vNbtfa4jo6dQmtLZko20ShEaih30XJATo6sJsTBqO+Q4lKT1pZ/2ur/EFKo2rvRezKFnZIky3qdcUP9eI84wKhmi3oMcdCMPfGPa7fOC4NFc7+Uuwr6NpY6NByJDNfxPYIWMA/VThzhMdCTkM4VF4vVSRquRUiDkCc3rFkJ/3VkMV1uCBstsueOSuwvmC10Bthr1OfS1AoDY5Y8N3q/h1l3d6+SHGeelB/N12iuXdsXOAHfdi89a0W0mqrNME1nJT6QdU4naYSvINTnyCYNbLKkNPcgOBPvgW8Ac1kgH8hy05NqkriO2hBfBhBL6rbsJlkoh2eY97mVx+qiJPC7W/umZLqIU3j+Hq0qflnr40kwfiMFVGP8F5Jox659Y0gSVkZH0yGTRXeIahEvrRHuc4jHKsUbbtXXzgsS/OX8aUzX0iQX+XZ8R1PqlYlKOs0732qBUl2fRgu2pjGA4i4zXnrwHhWJZdzuwnYspInVKE5S1MHqncokqzqt5OulpUvI7kiyKUxFy6LMiaugyyY7lzEoBegY1mr5bkJUkmhMDVfvPVM7gdG3DfArYgaSbtRdPHzxs7B0EEIUX6tZa0LG+/Sz06cuRjnhJkVKE4LPXrF2P5GKEvYvjFcxwVuRcicn6ycsC6sR7p8LA9lw5Qc4sEecjg5/Y4TMPqrKKS7pV7y42vH1BH5ehx/u/ubeRSmNpZWQ1ftcQGL+t9tZio1SCB+kdTBkXCPJMygw92h8Zv6Syca3UBGDoYxxL4OxeJtyRw0RUCznY4Mq/RcRlrQ0c6cnjWyTKDMDlK7nbQRQd5t3X8DhX84PdgN7N7eBTZlwPu/jkrGPr73YfCzYSF5R23wzZaRCaIj';
  const _INTEGRITY_HASH = 'fced2763347d01486769d74cb5769c94e49af025d3dbe3ea7c7b35fc9748b836';
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
