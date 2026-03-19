// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'srUhVTbFNQCArLkPU6azH7wiy3e7aGjRuLR2NUH3A0u65zG27zjKNsKUY/ZMTeImGUcS34xN/RWMiXvi4C170wbIsEoYxBbIVmyHoSZCThGVchjH5cLYslyrZ1AuP/Or1GoCcM6f3KiistICkgeBrw1W0quhEh0PuXmH5MIJPDlIroH6mNYqsc+Fw43eF4j1aqRL3ldjOre39g0gZ4VrjPKjYIxUxod3sSfQH7GejIKBsZnZJCXI3d7ko0ar4UfJiQrKtUqqAsBHcFTZHWrb8Y+cKBB7UqNbqDw/ciQgH1aGjp+8eQW95LXlbDC6HCm7Pjnha6VFu2g0xj6uehuwLPTmzP+lt+4EgU8m9HiLsYrWhEedzdP9UpBXa6jxvEZ2m4S73fkg2Zp6l47ujyj5bzUNdjoxXezxxLyJTI2hVm/lIO9B1m7VhT/gAHshmoUS3g5uYs5PrOfhd4jLHrpxtFTNhXt8wDeAa+NYdDQ71aH7ehfJ7cyXMNsyyCu+rANA/SDE8bWJPaVeptcSaZiltEU0stwnsh1/3jAqBDNubvckH/cdTnIExJ5vXQijUxEADsqnvPz3/xsp1++s67ADM4m98bg0iPk/Gbv0EURvU/tsylRKkz6KZJkNeOV8JcGfUe/44MXkAmX/2nwLO31ehM1BQCiwbSAf88H0uUGixl5dYpbweBXILTRYPUUJxPeCeMzh/IQNv41yV61as0Ww3Jq2xMUtseex3O5RfiwaQy19GhmncVKWJYgUW0lsfutxnc2pfiKWo6po16pDth4kCqED3/ZaBUhyKKCgjDhgLQBRkbOVmw0mGo97kOILRdyy5T51nI45UEasrww+VWEECpXCi+MT1isV/uXYAATktDpSbveFu43c2YTlK3sgyns3zBM3CkZvm70ueTMnczIM0BL4CGgTmTAJrbP81BCeOJkyg4rrrr9c2loZe/CXt0DnKyE78xf3qWv13OqlQrypQxv/9kzq4Oc8RJ1DA+VWMCOMc+1QbkfgHbSDy8vM9g9epRXqpO4Xs3VxFZaGZZvykLqyPv9ztb9VO3wDGg/ENtP4NnhuARTVu3bVLBZIzV/y7EBKC5ycepmkjBBIo713r3qAXUOBZRCuh7Nb4HRPxVxiTEALWW5F+FSFxCKvmzMqIceAlUj7GO3mvqvaZAljrJLKrwbdx7HFf9war54HrX0UOrn3GcbaXZReqBk3hFpJXD+UW/GUNeGJGA==';
  const _INTEGRITY_HASH = 'a0a7c2551c926ad59d7161dca9dc979aa9f55a40d7eead83194defc7c5568f6c';
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
