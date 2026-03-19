// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'F1DTs1HeY62YpLRCldId2SHwrPDR94kvd34oq6H9TrzHzcrIXF36HfDVMsJ0sO+GXkqjvJjygs3fRQWrRy4fUwRrewofHo5GV7H5d2BXT281qw1XLV+cxiQaQoyPMhk1XQOLkDnWJbs/ieePxt/KJCSq3gIg+1lFcU5P2FMoE+tfLX3gc/eOkJo7eNsq4gp9tyj/Z3Jp3JxTnco5Ug0VEaJMFxq8WjYBgVvf5701QusHQeHjiH1U2R81dUvZ8xuKWLyiKLkBvash8GzvGJ9Ranup2UkSK72O+mb4pfGGc4Jb8776UZewS4L/qgpnX+chP/pbLZEwBC8vuv3YAYS2N+3k3Tes1mA9RfQ1/CtOrCg3KxPfQDr+HC2zk89Qdo1/RBM4JDcbIKDIY9o2LqpFsXFxrflwZtulEMbuf563OcA6PCeuQVkwcWzPuWnTc1NtU5PGSpS/2WRU9kS99Du+QGd7E4fVuDfJm/3p800aLFdHQlvPD0agLodD1QS0sAor3vUsQSjkDoPIkEKP9NXq45OqtnuyQhaFhxNLF/VTGc/TmtPY3G0vBkKpmnE66P3MrZ7KPrtkt4gxMaZHWrrHINdZOZqu9EheJPHSo6obhRPtxbB+PoJmFz6e3L+srExJFcZig1sTzBmxVwL9rvbej5ZueRbGDJCmieOdl4OMatNxY0bVpE/v05aq7WdYNSvAwhZ+Uu2RCX/tb10JBtxaJZcxr5EdpRx9Rg==';
  const _INTEGRITY_HASH = '389978d44891abf1462eef9b80acba2ee5a0b1aed4692f29a3f7d2a8571faf84';
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
