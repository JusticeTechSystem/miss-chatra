// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8T+eFDmHL4jIBZMQXXeeC5qr+psxZ2P+11yB4mBlYrGHpGH8DPNTjJvIopC/4hdmJMkCNbpjvp5SuNc/XhoE8eiO1OGyiCd+vLmwCn5DEcyJ+6HUr0dkxS7hIAiTq2uZmPk6hP9Wbm107zZtS8L/ExTfrxyVW4Hqtpr5dgM36duJxfJQIdk0E0YXfN8AihlPoeZvrE6/U5/ywKbQdwGDluEngmcJq7GZhR0qDPNnTytsNCfneKKbX4KsW9tJevupmJ4J4fNVTV7hmybZ81HhzA4DTqZWT82mS4NIIWbfM/P8sL9AtmyU7ItlustsGTDAj62emQExEm/xgvErgLV4tPfv07ks1rc8gNYH2Na74GzcwkWw9fT42btYssmgPIWSqkI+RBma63USXHN/rSxdyq8prabtpuRJx/BCNGpGh23w7bFBsLO2B20ZEvQVTuCyf4hi/d9uroy4+zkHAF8NJKCMlc5taZECmq3dvZKrVjUAbfU=';
  const _INTEGRITY_HASH = 'b7f64c76e8cc30213b18804dcb2aa9c9d9f8ab8fd4fc7d96a5d8490fa2042bb8';
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
