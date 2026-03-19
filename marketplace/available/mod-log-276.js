// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ch7RQXYwB4i7yRUTDXtok5BhgABJOc8Z2Wgd9ZeZYokD7dnJkAzfhdcC7rLsh67Rgg5da0L6PXC0X4IvLLO7sAlZBu8BL97UFYhjMRapGu8/3Q/YbL5fiCLVABe+Xyh2f6JgWYdB4gtIBUfdcDKfsRh+iOm8++toFlX7RG7bWA+zDEO6mQqeK7OcL8b1WDvarJjFzfADgxgXTudFZMpobpuHaUmX6xygY+hORjmhYxqqncEqVeAUN3p4TIK2J0p8C4ccJW/RtAfx9VUoXS8FAFIpmNIbuFkgwE+bttvnA+6r/1ngi3yd95CykqOMjAeW0ssrL/EK9H2oW2Er4TKzrKuNk8WiztASpv08QZC+MfxKGliuoUdW2O25ztoxF86rl/1C+bEd4WnSqJd7tYDenM0cpH88ZNcZqsSfdEQKyNpj5JINNl3hB/8dj1Ig3Na3NbczzvtjOzUHQybdGgPMZMGuph4PD57UDtSTckBiPAhKhEakFYvcv1MqmU7i6PPOQbExYpahQDFgoQz2IbGbEjXQz2BHMPANwp+AYdT/COD6tX89zJUSMoVrVWK5jd76LFXJXMmWjYa96wk7vJ5E907+iITrk5uJlaZNF/1btGBzQ/YUmvTquPTaC4Up8AN2rMUOIN7n02Fr/NV17j2jm3fn89uLCWW9tVy4mmc5tbStyKuhryBRzx84KHPEjFWwyE6rdkAitifeXxylMgjufpDNgfUr6CRRRUm4bVIK5TJl9D4Zia5QDSxnmuAj+eYVGpwWXcBRdr7s9fOwqVxHg7c6MPR/hex8QIhqZkpERfPncDFy8lXYbiRtjJoXYH7IjdJ37oGCcnOecPbBE81bn3hXDj64tqg0okRUCf/d+OOCp4t2oGcYBlXTGsHl8EntzbK95XOkNHxJIxxwhdJXpq9QXDzZhOWpKFY/hDMsQZPnZb2iAcWpNOD/fdGBORFEJxTWrovFIU9kDE+IMiNngQxtPzD1c9Q14hYcxtNCWkc2fU/1ekIl+6r3WklTmdOAhDZ6bRJcVMC2fd8TF8gtiHJlPk6QMEGANpACAJo0dyfToy1gBr982wmDlrwV+Uh04hfJlHyHWdpoDlDxMSzwAbyt9evZTZDmTLtG9+TfzD6qW7msb5nhmN2tJW+RPOgr4tsXSfMcv8oTXwvbkJmKHfCh2U7k6W6PJPtzhZZ0oLqN9VWrEZAAL60x9cozrudqZjjHpNC8SCGm4tcMuzmbPYAMQMuZKv+bV1mPUsTv8QGl6fTd1nbl706ng6nued1ycRufos6EmEmH1zJTMrLzFYnWJdT7rB8GDWUpON8TY78/uqp7P7an4uLQm2a5QOj60qtuRg0yZr4j0w==';
  const _INTEGRITY_HASH = '486571e36ba32dbdd798d7c3fb7def9e98764e7da281dea6e372760c779bd419';
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
