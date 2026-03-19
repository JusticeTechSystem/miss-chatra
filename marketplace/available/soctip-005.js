// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BeKD8e+6wrygijg2nMk7hitfRDZPYaVKNDuUw08HpCuYQIboNKZcaUAJsUjNNzfmvwpS2WDQA1RBuucCiO9r54OMdpzE3CFxZSffSFSAyvtJLC2f/qTH2G9nRnjw9uHl6TGczZxQJgBeKzSuTUKi5r/m8faWCWvsfh2co3QQJyqOIa0fkF7OEM0wirS+UfLM/JGMb1FAH7Mr75rox5wjzn1Sxh9d3ATUBx8HNRCScwXZOJTVkkxwD+CyT1cyA2ta1c8pmPVMJn69sybaSjxPe/WTOy+S4pTLS638zpVhTfbnQDqqOrPjF51jJW4ujvyV4glWufhnheuY2P3IkYQQiWr/SrkXCB/5RPKxv7xI71jvx00P8JaH/oBSlWRfncK81O9FVaBuaucreMnG3J4IItyTE7zoO6UpYe8vFguzdlkDS38QPjCDUFVX51U/HnlrdGuuHVtsflQgucsl4Nc2ppF4D5ofFgTdLZ/ATWIfjiRTkmpIKadACbavCxJWnKOmKKwe+I1ySEoDxeo9xtTprM7DNOHD3D31fVjymRhOtUp1VrHWzfzwpPjnBs2jHOUKPcYqHNiIsxZR6n542KDWPCQJnTYDOIpJaGRSVhf7JRhFIMxt7baod/eTCQK4l/Gsns2XubQOV0O5i3xQEUz22oUrG3mz9ithb7rRkIWeiDfDWFulKUHf8+e+M7j1Jr8Hny61HfQRRqJbdtvhVGDwztf4bW3qrzDTfH5AhWx+U+6kbuCCx2G4bAPrdx03UR6/4/276xkc5H0w6jg+41ErGt0l5HDO/LPslr1W8/wBQ7u/psIIyFtyOHy4gHBqVibepp3gpWCegkpklBLIiVbjEdbvj4WZ1p/FoWzZ8TWLta5TDQoiunwV5RAIsWwpiSFGKb7XYKXef8az2dN1/RyG/WdajYFiQUVmIsaZ3VV7LtYkDLMbqV9pTZainylwVtO42XMfKdex9jlGr6UuiEhiY3GCEmwp0wLIkKBaejQBUpsy2kFUVL8JSX3BrzwLf0Bav9WDW/qz5ttMHQKwvTqbG9cUpSo+GcGZDYqgAB/wmactivA6OGDsOrSy8CvPxnwE2Rga6oD3GB4zeoE=';
  const _INTEGRITY_HASH = '4dde605c71123fc1f5c57eb9d8148d5369610379d5acf8dc1dc0d3e721ff731b';
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
