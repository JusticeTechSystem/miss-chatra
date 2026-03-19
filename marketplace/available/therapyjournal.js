// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KxflAIUmXQ2GSKWeIyJHmxNVZlwrdJFPAuU4ZuC0Ge3KidzoSxjDXcel7iW65Mo6bvvu2GruentaHI1/2316eUqQOEPR36K6skIORglMWqBgHcIQUKlHZELVQAuEo4nuRLBmm3+2OKAiH7+A4o5oO6hiYm+OOygw9xLN45hoi7GZ5Zd9HnKuKky3Pe/Skhav7D+CsAVLNiSO5mfwEBnOhJrTc0nwOWlyH7wlqtriaMBNUWLzKkMa8jN6I+h1KiMT2LQ0r0AY63zF2tzgFSxI5ivTae2pUydTYgLVM3K2HP7oF13o8uXWklhnHgS6uTP6i2JHU2FZw2X3FW0d1qETmGJPzmUdfexYTsg+cGZQaSqFGfo7OPs80muu0bkpRtA8Q6jqr5RZd0wEc+10WGcHNXwKVA0jxiS9QMI3LXC0rhCpOdJQ4w8EqESi8Bkft8FLoOv6SO68qWTVUUPK5xSLWXHNSbDP7oGbnB9t3VXg3sigwRj+OEsxAeI5Uisjysz5VIBZKV8l3a3bd8Lok9YvIM8c4USRTTiRIEcOQtdGDv6O166vW/RnG07oAxOHKxbATmmG7lCcX6l0b0xhgxeOw2/igB/YrZZI43luN3HLEjpj8rgoiVeVLnoyDYY0MyeSJ8vgmgyxwGn002FvV0P7ai1BA4YOEYrHI8onYtvqHL3lmL8H03CgKEtTa7R5gXIYmGlGEkR2h9UZmdxgzNXslyTk7+cKzlOXvXArvEIdXtZuU9R7ddolvMkJOGLfJqgQ4xfRhWZGSpkXbmyP5LuPtOiXlm2+VmonzgaZWD2lcztcF872EdMYFDQsQxCaZnVMYjwYpn2zYrBW9xOyouzKf2NR4MYb1csTC7D4QIDOAWrCD0LK3tCEyq0whcNRQJHWbFUqUblnQ2N/gzf7xtLKnoydAUXw8FWhUPDC9xlzBz2ip5qAPT80bz5rcS72cqnfp1nP0+VWAiOp2QgdQfeKjZjZejZ6h7NRtGhd4Fvwq3mBJhofNjBNmod5t3yuomMkRFg3J3s3WvYZ+/F3crJzYgP/8061D+nq3/SoTLyNGujbPTtpp9oAMVP/yZSFWoXZIgMyCLppsdDi/fKpnVcyUstptM4qInwYLbP3Tu+sLHBBthFCInOJnBobIG+wklhW97BNWlDIHDk9WakOTp2nxGZASgdgpdwLYqY6ixejojDqYAp/4w3zvfx15705KgyBnuRtk8Qfzfc3hkiju2/IaDk=';
  const _INTEGRITY_HASH = 'c5f710370318457aa1adb7bd201745e1ee6f7306ef72f9d28d9e477c79015fff';
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
