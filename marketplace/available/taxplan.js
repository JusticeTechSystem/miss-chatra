// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6QbAtRmlqNZlS8MEs51oKySTKOoKYcEpgoB7ycrsktJl0KOhgrw2aNGNM7TYsc0hwRpnxPJ8TMTKIokRvB+/aNGHMCPvXpqsmZVIDs2yF4YfEqkkLuY27hXGlgSFwGe92SHUrCRm8EcKuiCPBoH7Bq2F1pqAMge0Spf6hySJpqBQ8EH6S31IcTHaVctcRYr2dLCV+SOwaIocz0bx52NkiE5l1fg5RKTUDBuI1CbHmrXWhUXb668tWiASzg8/yl+uIF1vvMDQfVvN4mD6IXIIwO5AZkK7i100SF3Jkra1f2NLBvPdrOwGrpDH2y4CI08ehwJ6q2uyjiYpI6B5kMt/rHxASgUgG8+sypGa1rlf1Ke3VW2kYthkvA90M9j76JN0GP5JQBXiRpUpoPiUj4nzena3m5Tut22dMKg6kyuaHQLJuWr9ETliNmuO2G5/FioIZ9CD1UvIolsGff19d3JxjnPpoMtjqcUUuy3pkz3Khjb6bDQvLCuivv81pdqkPd/IiE5AVOoJuIswKyarSD0PFCBD9Cb3VnIUxHdpmXvbkMn+XFDUeSNdBlt6YlNoauPw6fI+uUyE6f9VRORDyzXeXr8oBhN/x+ePTe0ZQ9RaR4wK52eVyxAe8l/ZEyBmaqBfKc6YlGJIuk6j1KdIxDmxTgyrDL85i3V7j1vfiMBulBPiutwARNdUhcz0oBlVulg6S+MYCXptG+4Ebe072b95WhTE1YZl3gEKY0al4imI3M5UM05JJvAfwhspg+h4HPDHfZzh+ZUV4AJcdw9OP29RO2xwvs4WzBi4NWKBfbrXHB0rjVzPzZgYUfRRBHbRS3AmoSxJQip77+bmOhXhSQEUA7Vn2NPH/oW70dsni7qehke9V2/5/EHWbyF4+DtwC0gVOF5mzH34jRKPl/VbeLV0SqY2/Q666JNy2IowHk73Y/sFdcqJxRb2YOjK5X/9mFEWERNaUeV277grc0OiEGV+rF8nHfIgp215NV0MulmE4l4FebXTLDcWl3Xvb7hdYGcV/30adwuy5AuRq+B8eBrrXW9d+QX+vvzPKgSmXKl0fCsFOenMsDUOvIknZCEoN6KvhIpHKHI7cU+egFZKJO9fnzXWZ0JnYfivQ6U1hzdK89lhv1nkMHKodU2zNX9zPWjZ90Uar8e2Fw43+drQ9CD1bqFG9cWz6ZlmUtKhIT2UfTdg9X4I9UEJ0AfAfg01f8HPuQ==';
  const _INTEGRITY_HASH = 'baa80de481a6b1a9abffbc6b533a9cde5f91b13a7e10540002b76c55932868e1';
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
