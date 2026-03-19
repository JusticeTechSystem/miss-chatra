// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'h7va415fbYDrD5J7zO9X/Do8CCebWiMPrjiCzExxdno0ih7csj+JJeb4h1guDoCfRSkyQqmwja2HcIxUwjA/aOpEhGWHSOCF8UpD8drvsVUzjUKOFr/3r+KFbiajE8LNWXucq4CtQ8cBEv/DgO69BUzQFTFTKzFQKhEHBLS2/LjDDNNLFj8HkDBzodR6ooKAC7gZ8aHoH8pnggVUoxpNEaUMXlKMNtGw8YT2xKx3mNV2rdvoH52/FjZzytnvmsddw4LrHx52JlJhPao4wOfEHj6L2Szm1Kw5J7koFKkG5/xJ2MHa8ENAmoxJ0YQLn/th2WwvIyjvpi+KXqpf+ix1xLgKJWSuFENgOGynJN5YBR4aVRCzDOUOEnteP2oxaT6W3MQAHDvtiiB8eERmwM1ObrKHjrPvsRy/zhx6X3ZBzJXcoay77kHH3s6z7x++ZlWaFect4mugG/geCW+D9CFgwMG+hXEdpvx7qMiSKdgirrpPMtrcj/+QimidEIoLTiMoPimZaeIB620sx57mdmK/L2g0ruPcuiyhtOgxVeMrNUOv9egHEGY8l+4G0+G3R5yR9X8qCPRCtQquoJiepm0Y0brNOnFRsShRQr+tkQzJXs2t5062mjoG2pL2gJSAnpmjjCexho/2rVxITS9UU4w/Ne7Ak795zL5XEHqtX8VHG0MK8Obb3slXKR3yEMNWL9S4';
  const _INTEGRITY_HASH = 'a93d9e5d2740d829676f5d504706cfcb69dd68c25827b06c1cdc894c07e34812';
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
