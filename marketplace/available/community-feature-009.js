// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'k/GPDzjifWLK4CQkWjOloaK2rb79MzGgUwYxlx98ldbWj7r2RgECfcfjbJNJjQ844B3qlJpMPeBYzOnccEZYVj+h4Qtt/WWUvIzamvuTxdm+3e+BzLJ4TLf4hTLHsIfOuha2TgGK4hmAytzBsRAkqNkwt0Nl/smwhV62SQmDGgAKNM4j4+pjUUFqIDnpbGkIniWlE6weUNS4Lh/t9cTfKLXLDie7HgIRVoVvaRFIQIR5c99SF1Guk5xJBd/Z/xTPG+v+VAcUGNqCRwI966D1vrEL0xqp1LGJ9lGpRDwXnr+rUQp1LudOMF/knUtcxho21ZVEYcni8xLrNR300p73z+YvQ3WzEyccvtBp+cAkcPpf1Z2pTn3AsXQpa0FEUvRCN6KMsL2qRcQWX9a2XjsNBdEIxcJnLCSQgfPr46otqwg5zguAvAv+BG0PpLETZhuUeTaoZHUH+FkaOBzYLoEEDBMDI2e4poAWKfh7WdNdKxdXCzFHcPgpjN0I/h2Gi5m+pw2kwlUSqd6H3T0UfZB8vk4HZoQ44ajh6bLThyDgfvoehUz5edX93Pn027juTXXqHZ8HMO27VgiIfAxdTCh6qGEACZX0gOnxeOn658ddF89NBZJOxGo2RMcKu0GYx7TIdkEoOLSwHEm7g0IZvyBIhVYDXaMmvJMsI0bBJ6RNBno74ozovfkrKh2PpgnJCFiZSUYhmy6d1WndwnKQ/7EGa4dWix7IoZdGDLfsZrhmbA==';
  const _INTEGRITY_HASH = 'aa262c24effe7a112345ac4060b99db5fb18abc3b12fe202407ec62dfb8ea93b';
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
