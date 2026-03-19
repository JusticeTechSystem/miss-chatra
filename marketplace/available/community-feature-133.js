// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gXJT4thwW9V066rNIK+lIs3MwRsnPS67HXOP+fZ7i8bdhnkFgw95w8bB6BOTlnS/Yvv58ytCAj3hSFRUoIIlyVABM9QPVGAbrlN8mxXVZ9uQa3wOWQDrGi+qo7SSiRy6R4BLhlhOyQlWqW+zg2AJMuR1+wl8oEqjnDDiTUxaFKH9BDjgDaVxF+aDqv6rLIsDHg+rWyogZKcNKY/Xv9RB51q4IPBv9gq954hk7cmRHgrOwc7mMtQpHAI0WUoYjitLFdqu214qqZypjmlbsGusnVexLq+xLa9ZtH58AjirIcw12x2LNdPcNvkXHcwYDR4vjz8YDwrPGNl3gLBoOSaCM9g0eomvvTOxCoMOCpVUS68b/UUv6IH4gcmpNSjHCqdC7WpGYyTfmMLxJJkDFgCKRDstQlpJkL9IQSP/yfLKsfPA8W6jsO6As92rNpOtwl9yxO9/LuMcvYfZBwAtWGbKmBsXo9GjSyd2xY8sslWSR0YU9C3bjjRCyVogJ+O4G9GPTqZk8qD6BW7uYWLC0xAgNapYiY3SMKti7yNKbEPE9uoNmAmFpzJIRhgCnTE0sI4btLC/yZTzfZmleo0idn9QkzUjbn+Zmt6izx0xDEYOPu/028tLuaX74BJkSb16tyig9zYfgKmKtXDhU3TToJMAlZmNnz+R/wNuMr965IdHfQgiRjivBQ7XRQNS+q2Wkk7LX0Kc+aOEmKanrEgZHEyGvrXgWWtxhhJBBvkfwLg=';
  const _INTEGRITY_HASH = '154d9ed7162b5100701c21bc6c45a8516ff93bf0eb7848c453eb63b4abc005b5';
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
