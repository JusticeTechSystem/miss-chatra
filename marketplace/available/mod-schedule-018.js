// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Wt47vfeB1Sbfs7ScvJ1pGQ3gNsyc8xB6Chdh6NFdqi+wtpWGq+BR7IK5EsV5M9n/Q/4t+DJaYSprbYUhRqcPKFLyjmzDIhRvEua8knVQ0Os4Z+2dUnDgSZ5e1Wm23oKyclS5dWj36UNybQ/LMkcuLPc9slUf4ZkrU6ILsEP+aBFjlf2G7ZzkFLx12SLOlw9T6KN5ihzDBpLP2ngSGbA65E9G/1HxEoof7vSAZChcRGXBdbAHwXVvgl+fYfak7AvmTywz7jz9xr80b6J2HkulrU394t1cjgmHQWm5L2CIt0YxPj3QesGe/MsJmjDy+X8x8uNP2pMLOLG8ICmiL+x0tmdJv96dAg9KEu3BhDTdDMvp/bPGaCvbFcOvyaymojYvYpH/nan6lzxxJg7z+cetlhkm/ZYc9Oa2HGWDvgYDUh7Cutfami1N7kTGWMC38JOzP2Z9D1xarSR8Bztz4COR/87qLGiX97gHhOQENds7iHJ5LdZgrxxCJ3kNFSdhP4bmYO7noVibtuN29zC4iiCEfRBHT/Qpm7emHhrXTr6ebXmG1Dyqz+fp0qw2pF5AUubkGnaGnDc5yDwem/yDwPOrR8qKvzyhB99TD8ir/mNkySqjXYWvhgflkhT+QWXYMxW8DI5UODUcTKsZx28AesHXW7q9Sf0k4XBKI3YmDj+LQHTaFjjjcF6QsHxC5Of2Ai/FAvvb4cfxCbvMXIwil6EOabWzzPGNeZBj3VqklN7/2WKxo/lAhHGGVYtiHfjMzNSM+JvLb4VR+BnJ7qxuCZcjGa0OFWGnkiiWRFEdNi3SkJLsd9wDbCDqroiy4EMePTzgHO7+3G8fuJQVErbd05NRjO5kYnLSQlCKUePYkQjA7Spuc345jAuBWQTJEfpIq4cyNUJn++BgcbcGGAiQLyF59Xan3syzfsmXL25kGTyuVu/8Cz4MoZXdoBuJBfs91En0FrMvmRwZhtaIXpEVBJBChFPRrjwlEMIHfDkxWB4kVyWbPxc+SfQfIo/4LbWiixZAMvJcF48vtp6LHja8Q4O+K7Q1iHisqDGVFX5gvePCLXIYSFjRoACeGydeRZP1tUPtamZFMrISHay1IN6EqvmDUhLBbo39/NLMue5F6PuQFpGXKqPOLM2wXSzRqgLRsYY7UYPjU8xII9lVGjzjIcCSeGhuhaEoFxHsQqU+f4bE7eDt7A78v5oSM7S3VtBmXuSenAtn2AzfgYxG935zAdSmCS6sMcHRrgXl3HjzMsOzQXVezJ6HRvXYB9LMA1V1sMGgLS+RfYQHSq1yPuos2ZkPUXxANsty8sJ1mvhbfoN6CfBvGryC36qNCL5suIINi7Ui34KHHWbuVBKKfc6r4r+DcD1IlLP8M/1qheEKzYWBLXPmrN96JJWCpcpgbJN3s0ZJsKjoO3tQAA==';
  const _INTEGRITY_HASH = 'bb052383942a15bc91d0d637030d6879a3bd54700f1349777e2a04d302279223';
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
