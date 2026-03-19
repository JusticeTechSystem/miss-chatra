// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9kpIRW2BLIwIFWl7grIpbZiG3A7fRjz1Mj7vhsMWV6YrKh3LcKpzPEBeawAMfV1Y/wmp228kadQh8C5Ph56VzN52BG+COMSvh+Iro6dS7+02c5XNZu3pVuFqF6+epMCSqxCZImrmt71KXLL4IZ4fEJYyYkLOXgKCwhZhZE5IVU1XmwPJ9AwyRNEK2ydhRITq83ifh2NBB0F0rco/0BQIGy/jMcZJazq0sOCCE95BDfeXo6i/eV+dG7ZF5Qx92vxGarseW57BEFqe3HCHL2DO55SJXbYr+Mk9lzk6J0riRJCHFdZfcGeqJdDA9N4pkbjVk6Y6O3b/IT+9MfJd+It6/fBX01fAabZXHZPa/F17+iILTnZ6beWXLPcivcUEm8azVK+Y27XjtrqWF/yo521edXo4bZxGyTUtIOoC4eVtby8ultlMLJCWudeW9SaLC19ll9l/EzC903DKoH74m93/yhomnabV1UPz8qHj271vduj/8654IZIIbpzRAeboMTNB8QXjtqkjlX9TwU8hUiyvmGHI2zhYu4oIp8g4NMHQCcDdBjJwYPQbYXI/3HlQ/x781fiIbhyT9I8v4GureGuiOQ7s8U6wsGwZtq4kb9kqMEZ7C2/Z60NqbweYXMuF4t5kPXIXm/zYNhD1077ZVmFi5lRvEtNKjdp0yPRjy3rjzLrhwGwLEkj6OGtgZpTHUFnP5G4LiicwtgpIBkuiReKPj70W8lu++RG+Bv6Nr9Q4yOH7A6NsiYc1TOTp9ql0kBQCDNe3u/E847KQ062PGz13+HcJzv+thovdQSYsIFct5Il4D4KEZoZeW5bQXXgxjoOjvjFNO5nKr8X78i3glxyq1VAdjWaFd6VbfSN3jl7J/8S8pWNG158Ml7dkI48+O2jMIa5DMlMoeugD8FUqUIjuqyTAt4s/BjlZXU6WQj7kzV2+QxU84lyAFNAy+hcFwyeiRC5+zlXGpvt9VM6in3zVtmhnJFQycMrsrb/OEQ==';
  const _INTEGRITY_HASH = 'a3981467ba13300591611e257205112462aa25f631a27bc706168416d6fec319';
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
