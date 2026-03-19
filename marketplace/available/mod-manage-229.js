// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SQgUr7gX71Ok0A6tlPJTn5rDcZhcVMOVdDj+eVdyTajxQ6WS/J5EEyA0Qx1f80uuKLDPO8ZysL9TY/AM+kcekTjGJvmR/lqCM3tkud4f15jDAqzhwZiuq9KiZ9yg2B3s8tCGs0R1LnEUuQD7ETlb/CUR0nM3SWUpApEAHbTk+7+FGTfjAW1UJrvmbCpTLwZ14aghZ4xUmEVjgCQKTNptAebzPYELF4KApGZwl7Li+nH7m5sVbdrBhbbN13BCZL8Vtyk564NzFw5izSXVIe5f8EZ4OeLy2bWFco1lNNX04pm3RX7/Q63gWauTBTtyQCOvcsTfTljVMBlZjoxUSSAsV8NDWn71dUfiUfCZihWHm8SkaHYI+il0JXakFAT48A7kAlI6myYEOFrEW2reULNS/jZmoZidBEYhydeJXWp/SOhkt4Trr/JGSDNONvtveqcPZXf8T53oZG7mg23gmVBIdgaNvwN0zs2U7BDfC74ozyFK//UvjTaUbs/sLn8ZmdreNzKknKTU3ScAxJUSFiv31xcp49zB8Ff9TzV8W+R2JqzRivJIlVvrPJWZ54DnuL0gISlbOWlFKCjHASpDIrIJl0yiKgsp2E/ktsW4zoQMRfj/SBC2QzqjJ6EGliuQkHZhzDl/E3Q6n5sRKBBKoLANH3hUgQX+uxQ2BaiiXeMrZ434Jcsy0QXTVAXDx6f1xE7J7JSFhtV0xrra+hn7e30FvDZsZUP7DbQvSvGvtIJJDKwHHCpjW4M3/vGd3ybY4JNcdERfTvSZnFEYN7ygOcS4SkgSeLfl+7ICofHUSNzfNRO9HOadSYgBxT4sM1GhkxKmXO45/1xgpTFhezjvuhcLoxi3uLueW+MDdwtY3FQrlgcjcXoLYbCGTUgs8vpT3m68zGyYNavPELFZDYR2nRtRqC+nN4HTC8BlKutEdJPkukOpvBK7sS10sRgj68lkozCrknoZgseIR8NBzVL8jbBhLdnxsLsa4hbwciE7/MHandxYrOPpzqQ02p7LlK5bvJbdCLxNH5GgkfViXhH7nZw0yzUxj3UD4ZobC62AnvhugeaZhcU3uLfuiuq0c+ITKR/L1z/j3LD0aQfFS46HDuYrvy731A8FYgJ0bHNfMypvb2rh4AnadI8Ftg53o5HpsuCxHqLNP824i7kzKOzZOBtEi23FkTNEZ0CHl2tf5rMV3Oq8cMVYKKXfgRmh0OG61uaPuEcsT25o0HtVryf707I7fWkh3fm3c8IzHMZ5XAtKV8vrGdLsCkUr/MAksrQ05ytLXVyug8IgHnm/BnGvhAkdBpspGvv/EGDAV+7z+YKPgOleGUq/rEYhxOmFL7I/eDnctWD2KNKP1wp1YNZMJRwy3sPLsa8yH/t2DLl0pDWQj1kDeLvcT8+cQw==';
  const _INTEGRITY_HASH = 'b9740641742884baea62ea1209a9897b677281380734e7bfd912af257432c69f';
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
