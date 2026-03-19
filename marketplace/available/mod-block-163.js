// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'wcwdwKxxDyGyJn9gABweU0goDryHJN4W/JjIF8uMAR97ooLt35WjcRiNHvz2z/qLV5HvK0rF6/0aJZiKiP1RqIYZHdZCEk9o2LUMjrDcGcFeSYGPDNRzWmb333Ddd0/ILlIsVMStntKR2aba/3LGjfxAFA9l/pULZPSpCAZZD9SsGc2hLZSh2RA4vOQAmtYSjoaKOFGIhaKE1jFKtQiJmnqEMCYvDxlCXynaxGO9nyvTv7KgbDSf+Y2NHaXBDNruHPAelxv6Wr5gD0mFWA0UnkbrdUmNV9ZugHE4taQSEfEZBCAB1aIj1vMmrY+ObkHyvujgYfTuH0Z3+jucx653vtZI7blfO+HJIh0jPajfdk/w9IvpMBI0Xhu6lQY3lfLj6cAoOACXCmUth5Op03NcBEud4RicWt9nt7tKeoEs3Jh4y+siS3wl3mrFbjhEDkFCE4vsXWtWIsKYVFBVCFhCul6u1OXINrukr48eE2iZlFBCghsIZy95MquuQ/p02q5EVW/7S408WqXFXHubdWy5SRVCO3Xrp4EgJ5UlCLUtFdW2DEHtwB1g634hHDeTWYAlq3e1bFZDucSGHa/o3/twnezHh6wC6Emy/m3Sfea5uFFctcB6eXKRWVeD3EJz8cfa+r4EwLf+yk3KPZ2xIgUEzoR8O8nxLeMfDS9NCS63vree0z/tJMCI4SO6lliZiCMIcLZCL+/k1HQTiQHn73IN6ouREUwA1bCBERnUPJINT+jPa+1vRzmuLUY6GbKJn3g51WlHCF8jfAtM1FpzmNgMz8StR5wUPRplN3XW4B8cRMRyD9cQdxd01xVqakrrx1wzEubGYlHtg/EPe6HqInmgsbr1bfux+qAc7q2Xt7J+YrkYx0EI2NmCAQ0MFTAqbjmeasXsFV09togOTz42GVpkzzj2+WNH2w5ZEjhoeOOZZNSYQ7ke7/BFRtGhFYGjdRCJPvY/IVtiTdvj2CDJvjw3ZPxZFabX38krBVHBr0uuun08JQ5GOtLhxIrikLoiq9LCLm0DZa9ShyVcnBMN9iGJ5I3SxPDBMd4jjl/VU2BJqh6xgytjEVMaW/sDR2zhlZlSaj/snRMX/NFNSwoYAICZJKarOOS1OZaLfZWgv3FpVWO8dhaxinddEJ0Svgn48BZ4qI7PXQ5BCutcLlCNUraO1flM94LBIKHA6jwrz1/q3h/XRTgcKxsKTd6FRYuGRKH5FN4ghps0uDdcKkkpWTKFdhCUOm93vq4gSHZ7GaG4plZ0kIro2/gWBq69cB2G+Kp97HwRjhPiyWDx2X4fTcEnf+y65TddK5aJFN+DfN4jtFTD83yl78CY1DmxV6aAyzKjYjAPCkl0VuB9ZglLV5GVuBM2saPC/Lp6a6UmC+MY';
  const _INTEGRITY_HASH = 'a99ebe9f25ac2dfbc582c504497b31c83a895c428ff753c15265b5ca5d41d032';
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
