// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'DcLlR9uPRrxYGTAGLuHXX3TxSZQTY39MCodWkKq2erVwVwWmXXItmnmV2dStyZXNG9GA0TjM1UPPBLpRPKEHZOn3NRx+WW+IcgED43wgfZlb87tw2aZlopmIy6h5QfuMUqayKQwHOLfey70W+Mh7+/3gyW5K6+IcMhIHziF2kiVV8GlOprjrMxIzz3zVabRdq6Ffb2fN0c3ozfY80TH/TaCuXpgcdDWDtmnUlosO+7qUDewiPEy4+o/4fgkQL4Ddn8Zjk/K3d9lt6RdhivGD3frgyIHuFmTy77DU0i1IuJbiQmMzIAS9qKJKLf398NrZW34grlRDlAZ95tQ3XiOfH1ZV3ewUGsrsuLqVrIMFgMsRcBIh5xd6UFHj9xl/O7vspYudcuCcGxuRQZ5xs/eAXANF/eFVWzMCK98rCWhbEwbRGqxYxaGZLqkGR35ACz3qlQKFf12qJmmGyoXtLqc34AayrexLu/jBtx7Y0zITVoPN/0uosHV56RPs/FhBsgSBL6EvO7xI0qNyRXy+Vwd0zKCCmlhMGxT275LWIB7Q85HGT98NrRqk/OsS68wZWeF273p/3o7XTGOc/TZ5UAIV7umd23j7IWM0tr015BRayuoAuPevzJi7cx/vi433Y0mQVLyu6QXg5492n6HQg5rz8ojFhdBbyKwFJBSL/s+NjMUmANXwQdxYKjUigJrldVI8rOV7nSKkIAjr0NqTkBiNNAFtA+kXS9UQnUrLKAHG3VrnhJ354qSETk8KetbyF4HgEKibeDHpol5gDoF7t81QgXQR6C5V6vFAK1+a3lVxDh22Lxz3rIrd9LzDy6qxkhklonDL4Ipqq/bT3bH/2OdPrMil+SDFX+FYmjzulhw2NEQlZjyHjPJanAizBJjqZWVmFWUyASB4EEXhJUWaNjGUhjS7MeaZEMtnuaFJ49EaJXyxSo4QW8wcreVpFdw8zj/UJdg6EkeiRy90tnOjq8fXWKn1LHzfeJ1GHhMJRnXsrZsMVGXGKjixY/NkLJmjcUD5TYS/cuX22QU0w2NKAHyN19OM4mrVxw6O9eq/0FqHxu9RGqIp1uJiJ6nzxkFVvT2RJsSAdd7ScuXd1fevnH+KNlDPJRMxKIHFEJcC9gg8P79zEdLNZTMF6NuWxNvOvr5gnYfY5V9JV1sSulfm/eMKZaszv9aUEfZ0JAibRIlBZ4bacxdDyB5AuL6ENt39H92bxkSLHabVQr/Yby9DwT6SVYWvPxh6vpz9RYpeunSCO3djGj3AKAtSJ9P6id2r2FUl1QehZDr8Pox3sAVuI0Bjb4C4Ez64GnH4BALalbHFHaMp5DDClrjavKop1BHRTWG5EP8XUrvpWxCmRIDBk8RtOzrRMuRetONvwSZ7PrCAdm6VURN+nWkOJNPELkA5ONjR/QyMGwRx5p7dFCbq/Y2l5UhsWvB47zZd32tzSth05N06Lsu0ZE5kAjP8m+I6m1QVZLBLFLqai8R/2q4kRWoLgx4I/a+IMpFL2nD8hinwROD6vKc05GGNuC4KL0ySlmv6OKZ9b9qtjs9CGgxjeOlTuk+J45d4rzNEqazBcI3O2g1Op+r6gwrpH1dD0wDovepRHNU8C/cd9MHNvAZ4O4T0pQvKDvJ588I45IPkXZAwg3EauJ4mF35+bJywoO7Hztr6EDH+TciK0RwRRts+H+CqhTj4Qoewb4oH5z6STxxc5n/cgYQA4NYV55FT8h6ghcrvitv3Qv2maVXb/EyH0Q2MHPEzoGGF0e0gswAWNiUtfAZ27Imax3mGeVkMsnDCmUCtzGAJfbYA39om+jsG4fnfDyAwpm2PXI/psGcoh+/YeNl+VWpsQk8jsbnTQyMeIQKcAwqhG7+kawyCKmWIwugjKVgMdN3APkDwZc21LeDNNCzz/zAj59rK2YzHrpIXmTCkSAwtHpopVTWP9s9lP7YlqxLBqeBG8iHxLu/uHAI=';
  const _INTEGRITY_HASH = 'df1d57839d8dae8a7130055541d679c971d18a9f6f8861f08bee40b5faa3bc40';
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
