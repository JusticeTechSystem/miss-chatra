// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'fRwppQHzHKQS8nHkSLOJ4NxhfF/Y5YqxglGE2cF99JzpW6nL/VlHQFDAWgh45FlzKdsRpaNREByDaKehwaSBnM1Inc2t+r+5QkxlJuiFZYO1PQk5g0iEOIfeJstu57m8iPw3lYZp+YX84qHMiw5uQggIu0YjQ4UFT2J+v0e29BH6tlS2OrSmyq5BOUQ2kcbj4X5fOT98mIDRSQp4PhdQ4B1ZrRpCGDfWzyq363NDZLY+J0w0LzsiT8DWs3ZTlPEaIWxf305PFJRsr+cDUhLi0txaMAL2prCino6D1oGjHAmxVflbOUn9vwYOzAWORicpDNNA4fXXA7W2qwqbyXtFvjv2GYz6iDD2sZNOObJvUNnxzKiTcBRHOrI9i+yfggJt6090fW0IMY7+7t+g2oyEM8M4UqD33emdZoaBE+d6uGCVCrBV3nwxmWPzDYaI3y17Bqie93ESzr+KYlHBMntRymViPXOhPSjVKgpg2FqvgJBnnFKJBaFUknkk7DljRogHibXC1C82BWpAbSRN9ykb0hw3s4OmsYLgNkl8S09rGc3oei6XtfD69uqhp7AzOqMI4nlIgChCWbDuP7KXvFjv/n4DOiW01HEzL3RDjh97NJJruB19ZatcYyPeC4kebaERyijIDaexNk4eriEu0/w7S/nYcJmf0MHZcYOLdpiyc+gpUTrRcIu0rv2VMTL/dJFMNNWyRllJmJCo6le1SlwYUK2Wl4m+EHoROPBvn+z1Ee9I2mElcF4d5QOTJ8oLXCPZSghKm20gj9r6QWYvUFboTnXNNUpAf+ieCnFTIYxLI7yA7Ge1tlBh3/q0Hn2Rmhe69PH70MQhnFmzRcA72jH3/VJfC/vmLmTRNdgum9YCX1EgNk6gI/LPQSESUrUKreIgbmmiGRkHBaUriO0hp1N0SradoShQ19e2AT6m8CIqmqDouuyDXqOSM3k1j8TnpJuxz2i6wh+Te0AJZk47bbDJww2KKdWV/r7tpLx16wHEH5GNwY+0j0Q1ZBvPwydyJ+OD4yCy/INqpAqCcPkcQ7A9TPrnAzErPJLHC0O3JcoKVchzx2IDzF81r2HDXfw5uREBEda2vcqxTrUPa9SpbLQ4kzB7THn6LECqhWyFOwjl29Z1s+2XvwXPLXuPtNMOEFahpUaeb/xtyoln87vz/RL5iFYXZF29R3Cre9u6poOOo4gWBA/ggBmQcpJCnQ33nbD4QAtO4g==';
  const _INTEGRITY_HASH = '6ed028a7646a638b6f667f29591eabdff246ed1e29bf5655c9d8f59fd493fa6c';
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
