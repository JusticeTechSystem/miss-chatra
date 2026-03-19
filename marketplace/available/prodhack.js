// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Pfxs1daBvTDj/XfxFPlfe1zxfNMrf1meRjgqN/n8G9Zmrqo3nYwjWBwIVywvh/SqgSNmU6eDe7s2xU8rqJSChAHv/ovE9uxSSs12ISQ5Uby9/ll5JM4RZRKnfhT2jgKaXfaByHF4gyEaBYLoyDWYl5rIzY7CFpxPP0DGCrie00ej6moBr7gKzuwtoRlGzKL2DOFmsfpg+GOpNI3UtwLOsfUyO/WsHW6DTUoj5fUcbwrff7CPk5kHdYq3BrerDiE78owBJxi6Ky0Gt05Wz8QKek8QvZxzuxNl7XBXuu2BFwwa9PqPUuBhA4c628aNP2WcDzLHhSZ2kZ6kA3+5WvG2mX2wdD3lAWNaeAQICkRLsyj3wETYpTgK8UFm8ss46YxuehFCzjHlSG8TCxriA6v9D/q7aYACmHvsTD1wRK5DAmchnQf80ZWw6lzmXgdm36P6OYF4aDclRfmZqY+mtspUkHNZQj9oTr9J34Jim08fz7IKp86oyUm6quH93IewueK4MZg1YM6coWTLtYpMLJidRdl8kRu3YgEIsw/HU0l5H1HGZRiI/1sAFtRbnPyvcpdXXA90+Hiux2mDgZ5Uo9UaY+TtVkPsJXL7fRllarGw5Mup2GFvfl4w6VbyEzAfTUGBCEr47PyTY6dnJBArgrnlbgWfQyjtUa/2PidHrp65MoSxx8xhOTTtmXgdRTi/aXHJG3re2rTUhXX3Q1qgQAXBMdZC02kqWW2vzwNk8EtqeitMAzB3a2GHenNX7CVNC5QqNEE6A4J5vyA45ZUsD18vJZORB/VyMjZXYVE+mO/vwM6TZAvZsSJTNqZ702wK2epgRX11Zk5RH8eWFH6LGGOugJGgYcO0PM4BmB9a2X4gkw2pWYJniiN5i1W4uKCG/8zHxRfYx3ejZSs6j21wHXiDpnFcudx1c6koARM9hvJvnJIlNeHr+cjKboexJW+YMbybqig8G+imUP3AuYNkIZKy+b5WBVommK+SAejvirWWr4gLz0132FZKkre+ZmysD+RxbpG0C0XAwxkW0x7mfFvY3aeTpfWxa0/jfY3Sf4WJpx97Deo2AcTq0ADZkipRUxInbL6jUTyjXWfoo8OviKZrrHK2q4Al6u1eOxrofp5tbHFnPwzSXaaHAnlaAXScbNl77VQlO0/lMsMFhnQCIJWFoeqG79iWMvagXbURsEQ3iP/7/slRqHKumSkLnKDFodTnIXcAPT0=';
  const _INTEGRITY_HASH = '0e09d344acccd95e276a9e847b8f184db27facfe1c0cdcf66ec73cdf58771fda';
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
