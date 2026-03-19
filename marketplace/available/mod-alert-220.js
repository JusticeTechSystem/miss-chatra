// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'w22qsFp7toMa7r3pwKiKlD1b8ywCn27Rh9rdm/N9nUQ2/d35K9Pl15LKAPUyDfSMAkUqsBf0u+td2SKxj3vKD9Vdx6v9NMr2oieE2/TK48cmRe0TnwL4NIDcUo68/kZaTT2gKVe1Miypz6P00pPUidKh/5QpSWJ2EI3VO+i9yQ8W7q9OTiGfTjopphO9CBpfccgl8nNdiI9HZxvb8NtD7Vr4LiuKfeuEUsZNsimkJC9OU+cOK85J/b90d1qyMDCyTk9yeLC23Si08RQcQbo8UqDd0XI1kNW1e6URjEnMSU+kN+jDQIyPU+95mR25pJo92VuttabKsLvKvTjZAf9WSxTzhXMrlpktzVQOYpfsHb5JU5RgZg/eHTiCVHTM+mACQAV/DW60K2cFH75ocMEIp72d8EsSjRMJLGlxyC/KCgmGKlA7TNaCpCA9s3DMwV8gGexctRx3DhY69D1PCR3hXnYKU+5m3cBQhcsAuE9JYfO3Y42gGUQKwKW+F8w7nEKElXaCzpR3ECfTnOdubyfMgQLcCYvm79quwdPChL9e3cJ2Pzk/hUG+lp3k7E8f+iCvt7C1kfeLSSnUDuSv2Eiqn4YWnbQOAYXK9IanQJra0tnG22KvGGFzx9ZsK9//e71PYQOe8BnM3ME8lrWmbAYntiBlkErma9XuW9GLZvie+PkYt0Rob2OvkstjVvWrOfaNZyK09me82YmZ/l5QxnJU8wba4MrKVhvEhURxeACBiLLRuJhYbhJ5orzEexjokqrJcGsKmI+4o6w4p8L8/99mC6npK8pkqoxX1GNmr8bQoHy17KOBGOspv1u7OYp2tjHEmKi4LYNg0aU/Vy5ORkveCqlOqi2Eb/EcTstP+TmD+xkDjjidOuoVh+y+77936XWMPd1jPh7Tl9j/VHGi3AiqtRB+W+EyssnApbDgwbeJ5jmVC4NRcLwoHAJgCOyRspz884Zv/pbLHWx0DX6pOX5fcTAT/+r+J0513OWXKp+qWgHD+vXMgc0SZ8s3sxSlP0jWZ26J7Eklii77Bpadj8WXq8leM8VcUrUYuGXrzyAuiRygCPEuri4xIwAmj74+fNigR5zTGbkgXUBshcCXub/6S5tykitk+ZjkvrxoipOqy3xxvSDJUzlE68iFfaUpOOjL+P0ngG6SHVf8sW1fqCQSN0F2fA5yFx0VoTvPcnt0TvGicbrgl6O8EaVmQmsEbnNT4olHUdRZ+ekP+0AE0AM4FWyNCmnNWNtpc9DO+R0DY0+KaGdl+Ni3lCTQxYeMNG3G78JNtaLWurjAhtNYYKnS4AheBB8JxYpHO5B7/kDMDj1Ba3FPcStOf/gygJLib2hEfcyOZXeZxOnU7rWpXWHk7PwMxjYk+YaVMvFuoPaH';
  const _INTEGRITY_HASH = 'f2657e77449f9f2e39bd8c6dce1b59812a27ff0f99067f33015cd1875ad9d1df';
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
