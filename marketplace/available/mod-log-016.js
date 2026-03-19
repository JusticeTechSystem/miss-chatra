// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BVgzfMurqsGHQS1UqItTrc/Htz0083a5ql69PnZHjzfkXXiSRUfD+MTfg3Li+lt0RqGS3N2n+/W8UucOdPIlClz1eSr9Dbp4DuqYzcWWBnWua7N6f8qH5gI5iFFPfSIykn+5c++NrflQbpzGvPDGAbwABwI+Pn+R/MwUYX3cJMcTzz29hzb7Jo2Fu8U4JD7etdjUepW7qeUza2DbXnqESn4HsD/qQbDLdKbR+gxgR9y1TCHfCj7CnXhhMknlfHdy1Lk2lWV5w0UtXShSjnixrtpJJHIs7SBWM5PtHoJOgDelbDJUUuXpxh/dQwgE0MSvusapQ1GYef6la+JjBpdN9d2uKFKirUzSBxZwmoGtGSmsmqvK9KpvPrLwi2/7IDBRS0XYhkfUG8leGjhHiDqvai/Yc3eKy7QKt1HUxiOfHep9WU9y9Bndp3NwYtmzxdCE6UlPegZxXEJJbqirMziRxXUobjAA4k1yVTo6NKSE/IbZlYUCgbP0WCqzFbw+1ok6aShDyWx3X3etmCzwy+5GZQQhAAezeyA3Q2fgzv3CQcIeJygpjEuzVbyfwBcyxfj2dLa2u+A8BwXy7e70QFh/m8iujFob3XvDmPsgTRaow34QoxMxtq74l5BCnlpyre+sqKYJxrhr22npofeePRn3Af2InMucXR+U8hnAK//QSyf8rGWg8Js0EmuSgecSAjfZDZCLae70l5fEUH1Wc9/MOZdIi0AE84uJAZxgS7Hqhih9wm7ltRJlih3IEw/bpRkXXipB/bIrgq8CslriE9dqmyjRs1nL+6/ioD44zKnn08dkHamKL26+uSO9G9Mz85kWyXGW2MQSnMIt2O01/ZvlCXJfaFuWQzQJq0RhD8zbO1x0Iwl3NWGiB5S2T2WsEc2RdszfgzpYdMx/7g1ZX7UhdC8wa6p04hHGUvmdFv3EaDchvFtPHTmaH5F73SokC1fyD6bctziXL1f60T/l62UcYX5lq6MRg5zxfnUTo9kv2vCC8AQkqJEUJZIzxlZlEzHVmReZPNrV0z/KiEpBQ4BRCdyc8bOViX0HZ53jVTILhey1ZAwyE/xMStpNw6HCxbUzGaSOhAQ6IgFPCWwFsJWgSK0MIgvWmVt/W1h5FNNTdkqftM/JPaVxKlSPsSnX9loYPd4uQeR+LggJSaZysKGSvquHG0sfGQ17ddmzjqjvtjqaugaRVPZdfIcCDMzm6eCq/5LsZOpNx5qW4T8XyK+vslPy2ld47yBrAbjX/Vhm4yF5QY4BQ6DSeMtTy03pBXSSO07gjE9YHxlg6Qcg/ssbNVLbkqA0ZNRgGX1HkPEPRP7IcVcKg7ouKLj+UDbwwqG+l8YgHZU=';
  const _INTEGRITY_HASH = '49af9a93dc41e828f7902be847076925e8290b34f0d3d5c79161d8f961475fea';
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
