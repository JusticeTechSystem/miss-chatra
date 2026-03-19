// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/nHxk/hCpOfPzPcxaxGAiPHJIzDHQIfbDgmf67XIF7cA3RQho5jpPBwyf19o183f7oeaVbN9pJ19w+ngIYbzEy3B6RR0ANkBRtij9yxOvopHD/VuOh3CiNA4u330c8cmzIu5CZ4XOLXGI6u8sZESIHg14l/xQrKIu6KZ0KuFgXXQBd7sXSbwzKoGOh9jm6KfgPn6zP6n/JiwLu4yfCfvimiCOnO1t5a54NpN8S5vKNaihqbzrYodILhXN9klA4gFL4nhlz8l3tikPmCYerTWlIIoX+MvDBOvNFU92AB618xDVoE818qqwuLnBxGuEZFAX/+dqgd+cnEj6gIUyd1NZuVP56ug9OxoZdAWEZ/tiIQfgmVTWKLvy+YrgOaS5DnA0F5mHHjRzaujZnAP3Wi6f7+cLbTlvBkMEGvJGytG8m/H9O6gmA1BIgj2HkmfawSCHtsv2kZkuL321bGWHrdpyp8OitGce8Nu8h5SFgL8I8Qvt2mOyoKROeXfmiGt8NSt16BKx54Uw1g5WxYiUmZ5Vzh3Y9PnZsHMmfLNazXhVEhQn9FwSnI04/Fs2jDtLqPlGkE+s9DSNrBJo7Dv4JJVAYq8Q8AJEKgtZmndpLKkYBQl17ETRMfQguqT0riRd6KYOD3mWrfIHpWMBbi0pNcK3nTdcaO5NjHEFUcHAAjqiTxTBmfByM6DrBVOELQiq+lHd/1t6q6Xq87MDphQfQaUybhnDDSQ8+M0J2GuzmV5jmF2GCoj0AE42tJy6MqijwRAuufjET/Nm8CzjtpGWgjsUlS4WzEnhUh7GtMt8z83dN7zWE4p9xgVGYA6fjq5OwRWSUN3mc51zH7RziJQcycFeaMCL89f8m3VddlTaZuyyLfMfPDWpWZqJO4RdCzpn8FEqJ77LxFfZeF/Y9vRwicdpky8t+iAQaDeNjHsBo+HMG75dE/ct8o/V78ChZFgHuPqdBQZTNcqUSRKp2iqdKaY6Q2qzr+zMm+ujZZL5UKALVfBzJUp9ry9fSuF';
  const _INTEGRITY_HASH = 'dec88805494e2e9323111995d33f4231b011f6e584f52520d90d62ca6cab5fd3';
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
