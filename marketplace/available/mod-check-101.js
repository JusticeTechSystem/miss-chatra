// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3WX+B2lxN94xsWP8GQiBZtlfq25kFZ/LhHGf7VmjKiXCwhhWAqqa7TNc41Alt4Z1v7n2KwxdVDL8hd14QqNSVnKp8Bz6QrUyJ1lGJClkYUdmcwHrQaAtMtSEyZFlZQXByIa5sVwHVh44ZQWId8nvbj/fK4EqEkeJccHkPVehSd3JXDqflPaU3LajgCMrJMNUncJVuYCGTE+Q1VpyRla52Pnybc7DV1bIF5AXXRBRjXq6JcfLtpjG3a+nF959tzaQDb3GeEienOQ7POidAk/ejLIACamqkUo0i1Ip4kwaFJXJ5+F1evxFFyYsvFAaGf4a+LdoJVy0omwKtY+htobPsyEhVa49iKjOOeXqH3lpiTIENU8j4KSpXeob6JcmlvYo+UB45T34iN71982WCwew2Uod3vQzUsLg7/kUAOdjO3yBk8Z79hyDSUD8nm6bzBSSo896QO0TawIOPYUPCh0JCnZZzvIc2fjLhfxILet+G1wpc7XAJKCgz4V2Xm33dMpyeX5L3TqH1UERWU76uRBFagkqcWSDkzQ4h/zMg6fqPtNgmmg+XZTlkkgoSyTukvpk62mHH1Suvh7N3DfxRchZRQ4Dc7Pc7djB2SUgwFOZTAXjhj6QYL+c03Tt2LMQ9bCE+fDJ6eqWM+8T/potzv/Ns2ocCF5IRoE/uRdEoxPLpDiyj8WK76vZMwA++yMPHllO5id6Zm+Hq3kZ1+sDKuPenPyBLB6XEXKzgxyPRhiuKr4mebGvw/l7uRTPmiEt3eTAjRcXXfxL8jjc4uJ4se+x/nZ1BWaJ6XmFMPvwsrxr5T0xJtZ7hfgpGfLMlLUDVyU0m7/Ej+3Z1+ytYecBAqDDR4qAXR8u1dKDqEz5FKTBSmsmtbaNtYeims0a66wggrrR0PCgN9Wz/EmKU08IqqODmYsCRCozi/XBlpYcWjS2woZSaMyh6STaIvkmtAZJfreRqhAj/B3AexeTOxZJXJ6f9d6XmVy8pf8rfrAs/UOIbg0B0QqCxF6Fyq9OWQLx8cCWqZhdPRupHEGjbOXNDAomZNV5AU+WYkY9NaUs0k3Djx/naVlJfvfOADvY3poDuw+0y5ybm6Tgt5zB4t2hqKVn7qiWrHZmylzHF4LOcwP3xDhctlXDOl31DEFh43tgyle7VphuxeJHl3q6AWA5YkNuqE1O8+ce1AnCNW2gfWgglGYjiN2aUwQHQHEv9tw7frjRUsSsM4b+Z662nqUNEVAoVkvysch6d+0JE7dT333rH5I4mUO9lLgL5tAxz26rHugAF++6EU9cWCUnWiM+Ui6GPGZT8nGOWRWotOEnsIT2CZ8Tx3/osiL7lisd6fQo1FS0gotoE+Syg9la/0zGrKiv3s1wP9+G76+eh3OArhFs';
  const _INTEGRITY_HASH = 'a724ac4b9af577f68c5fa45a63bd4dc396ef8a75bde9cdfd890521496117847f';
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
