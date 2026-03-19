// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'i6n8TCKOVZYIT8K9+IEkkLSsiRd0h7kthU+WCn8I4YJK6QZaz+EY6H9munH2yHDvun//963Lj3IaW5UsPu1mQrnvRkS/na90ZtWwvlbzRqIy2BrCI2LEmxnvCZzqQUnzt7/t3LrJXoKDLm5rH5g0EZMBdQZxGAXKEbgkGxmYeZZNo4fAvrdRPCb0MTD9vxPodESCNHq9cUCviIL50b+u8gRpU8Qnir6bZVXZXK4fXzAy1RyNylrwxoeSFeRofQH4FlDT5laX3aOjcPHRmdXT0b4vjURO4FH46yKn8tCHEYYeMcf7KUBy2Vor7te4fuyRtfD3CGCuOuljTPjGg2H7zOKAXN92sfVcpeFStznSTJXirkSAekPDkrLpuwPh4g7MBK1/7Opql0okxTJsruzo69jwjsTI0pJ9nUf/p+G2OYgV4tzrka+yHOaeoWCyNqJQl1H3Lz5sr1v5WoSHPlUGqdQj16iqadmVnJEyxOCHlUBF3C4pHoTr6G7c+k2xCMeaFHonLnf3vBF5SbF1ebxQfrK4NF8Egrw0gfWVNKmtGKOLwSDEXmx5w+/iY5WnlG0vYmAZ6NCkQjrZSh4c9ryu5vzfrgFN2Mc9xvCvfhiPYC4cfuvCIt0sDwLeCUOqFs+XB8wwt2a1ZCGKTbDpEGuCZWATvfIt/rpVSMWi1iZDvVgkuU+XOuCvg+PjuLgXXAPX6MtVl8TBNqBzsDJJl7jc8w==';
  const _INTEGRITY_HASH = 'e94730e916ec79f954a943a29600f4df74c1006b21a1ef1f41bd3c7981103da7';
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
