// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0pPzMVpQZ5K3kt++W7hnjBs/l42HKBhLNsN2btPisyFuqIioqkbD9geAsL8onYVD2VfX9WvRvIXg+f8t2iOotOBGIV7w/yoEKyJhPM30nGA2T04WpGVY29CFYOXa81K5kY8R2XS/cs1kHI23AUc4xQcVPVPbyPA+VqsW1Xtz0F6FGnv8CY/ikQHXj/t3zYSL6suvRxMlbtGVJzwYG4qYEa76yC5zEwEwcAuRBJgrgMUxoMFrFrBMaSJXBYOTzt1dx7yUObVNpovT4GgrR3FYPLE9iDS4KNdSarNHCMHK63wmWUiqI7PWzmV+ugbhLFxCHWw0PAI8izcf+XCqnE4KcrE8ZXlsIdmtinlgza5AIeIpDSmI8Ner3+b06WNllb5HDcUnIPNFCC3fbI1IK40nc6JNJke9b5xhX3AqxmbmxMrmy/Rsa9ZNLxw+eoFCvFfRSJsLabt2QzbFXvlZDZFbJmxgiPdbQ8G8dzHet7CaUtqCpdmeHtbOBcqRjVaMMJyeHYtknZ8AHWsA4LznE3AXkrN/L/tj3jkeBKF0wmVmI5fpysxSN2pKLH4OlKV0rZjlSS3aynwKxQ37I0lv4R2qkhMbzwKTaeL7GMBD9K8zkNvBgsrL8aUV4gcdAuL/qugm6wme2JGBSpcXj9ZQ2PesKyPIcc+gytbNMFjU8NWMzw2YodYdwKsD1ZMl+O/CoP8u6JRD1K2BFidmBtYtO/nM2QD7NCk2aSGgMSBILYGH6YO8BXLXePRNS8DoKWwYXGGC7e9GsC91e8Xq7wH+RzX+ciV90r9YC9LRtlynQB9feuEzjdMpO34ITfoqro59Jql0J6TCXxCgEjvOu3YrAJjpq2Vsff+nCV5m3L4MXfsdlxb7fi4b+LRn7wbtstYS2HO54wERlRZlcSdEUZt3KM0OI+WRIVb3EtCl0rgR4x5nOdBOZpfepObi8Z+Jdzu2u76/PsPNqSDoUtRlvfUDOsS0wLDc3mx/32s7W3uCKtwpJF8f+LFaI0/7fPdeyeSqlMWgmmWXx4uR4hwNurIMQAlL/0UKEu5XfpZgrThDmJnZaCHbmtG1R4ZJ20Ez98MYGDVxnfLB5B/xj4Yt2wx0f3DgJ5YgKZA9HPIRbzX6ykpDNtI7RUArGeoY+znM6T4H80X6kBqqYWOFRiWib6uV+MvmgGszsvokYfz0zhqsfCMjD7DRmZcWkc569exm8NNy2d301FiF+I4qEhQ=';
  const _INTEGRITY_HASH = '2c4329f72395cfe04ebb70a8d0a508306780687c61696602fd8e6a5728b3439b';
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
