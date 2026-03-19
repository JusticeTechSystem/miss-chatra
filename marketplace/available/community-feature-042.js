// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'amn3R4fa+584R+cDm6/tLMGxqSlP/MCH42qoVFLq9YDqa5Tpl6nSC6WMZetpITIM/pulCZ3aHIFuEDAyxoBsCLxD5od14hbz5g7Mp96Kvo19lKYUSucnFwashQyGt5T/13EyBzg+Rwj3jSLEd93fYcJMnMEHkFSf6e6b5YdngtJ5SufRp/Wl4Kk976up6by/f1nPI/VadMQ9iCrbW7CV8tsJOFD97OoicKnmoVP+8VU9DODVmmrwUk8qPzkuZMU75UXSDfYm7uE8W4HbNbc1m8EAIYL5LULTjs4yZ4PGDB7a4o+JEJRURWkThnrUXHT8ouRRIks85idtMHy/uxpeM8WOiEJj0hnPf4Keo2L7DVx/olubDN4AwycCEAjDyj9YPW+rOdTem59S2gRGdwwFD9JljxpC1S/lCCy6rvzy02JzEW0MJA8o2awRcA+19yh62i7ZUJ5CacbXBTS6zPuux1iNYfkyMyU4GQ+Ndi9o/VHR8PAIWmh0fPTMaB5NXWq62ubhnXWZtM/e3lkQfnffQmEBLZg4qKJcyPfutULKraxoJ/p4uSYeqvWOzRKeUNzV6NGZcfkjktvZPF9WhW9qCtI9GwW30bKJZY8K+LqU6WBOiqjFYROExhLitE7Z8HOgxwG9S59vPFh0vB7WXehEk5l0YaiuzAGvls9qJ1/bJnNnbvM7lFy2sjHVCy2WMBFSffD2Yu4FEpDfNiKx80T80Zj+dW4n/iXpWbGYF1bh4A==';
  const _INTEGRITY_HASH = '658b9dd1b92b11400616ba97845a981d014a8d048f485298c269cd38b4f414f7';
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
