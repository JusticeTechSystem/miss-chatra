// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NytO/m3UFVueqsUA5E7aNQTr9fDqjuVPNeRh9nnzVE35BuMUqVMcNrScIv0uF2/J5vNKEykaH67QhQZypnAKN3rp7J4GA+bh81FYynsJQdCj/SYplMKkIdb/F/34iwMq8YvQvTgTJrV6vzJNxUP85inXN1KisqkNqQb/Ivc9a6Jxvo4aAGhReacsU0iiQBglPGchcxZ6DtkztADrW6pbrjTYQesrZ5BodDrKvH99hoCbBBK/35ae4JnX8xxZ5rjsXQ3lOpnGjmv6ADWN8yM4pgd5Y2OKnLFwEmxXZHKCkKb15RNjQNQipIzQTvqeHyCK5okAGrlI4qjvbKEND4fn6oYXEMmoIh0l7Z7Uisat3LX6qXhaIhps4hWbvr3vxySNc7rGnApbf8TDPTNiV6cy8vafqB0vTbtrta/Pa0qEkT//cStRn78kijsDG0FkR97gmsxLnmI7yaOHlCuu13jSLFLNbsfCyxcYEjOXF9b3YUU3ORJ+5iLtUIHoaDMB0Yi4da+zkPoc+xlvas84as7DEXhJni1SqYmDB6Ov95uoIKP6MkQCHd2RSm1pdfq6L28vK0kaOGN3hFjRYkjUC9kWCG343cGAzZ6UbRMKXIa0m1eRI52YqyJRoR8kNpratwFktAfnmJCQKKQOS5Ki5hKabYUBvdWYfNk3mHViYS738K/w8UlmYGQ388/xGiwuqKRmdVuZKFz63sf8k7+jhle6e2t+5znUNa4op0a7lrdPhwnZfohmndVC8usXO/8pjXPFcUaUnIdB9rp1KV0jFG5N2RXMY9XCy6F0VvaiEPmbJykl/3Tvm87WPJ2pXFEyqMa84SffSKfh1oD7Ex9YTL2sccOz/Qk79u6NEca6Ov8vW4ZFQlF0OMmrlATO38YMPqRZy70hd2p+oYlAirlagw+TeSiQOdPc7fV/3DRKL/yMQkQ54qrzhlRg8ZTPQ5RMlX9zIcpComAD7wKHYfmJbKZTYvVOlp2EzHDmrJR0NJsXN4kH6bshKXOgGpX+JheU69dpSxxJ2qOo6uOqJDMdSjmvZWgi';
  const _INTEGRITY_HASH = '8a6929c8258a050b69b2e16bcc8c9f691451372b4e64b9463c1a2693adae0aba';
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
