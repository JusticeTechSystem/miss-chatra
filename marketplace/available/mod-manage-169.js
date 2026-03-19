// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5ulEe5Lz6US9zVQ5vzlW2RAEcy5iAnuVsTOsKl1Ovz+jYdnWGNF9iFCY4PgLMOcyq32kLxXRhTt6OEEiK1yXckU9C2RQ6bOuPjbKsc9k9lNi5xDSfbxL0xYBBTLlEnIuo0Cqf0ytgT105Iv5n2Qr3oSXk7eP08jNAJ7Hh3e9wrXijIj+csQmvkPlxIkTYU31zB3XpHd3bxIZ4NbmUSDbi4YED/PzeODkcLYXvKFEMm/iWWy0TdgMzja+2mHyL10C16sil6xoYQ8Mkkm8YGLW4srE6kQo8SpV3SVjhP2uOfTe/TJrnxsudbm4An3IyGqh4YlJxzDW2VmjuT/m42ZZhQBdcvsFHMxB1U8WZ0xotii6/EcIYyaiVljzNni3llYiyYxcp/xS904p+syPnE9IaQ1JGzEXmyYnhg2P/Y2HUBaNwhn8A13VVBdBYXiq9Y2OIppFqtB6bvjXVKYg9QCkKgqYLlGyhnb8budxE8j0YLFLb8bOImrOrUvlRO1lfTZrtmERfQCIBnqVjhv4VERE/np7zaCKwszqvXkmce2GY020fbu/jbaBJ0ogJjvP1OYyLa26AdupLRX6HTTNbUqxDm7vb38PKuYFiagqgZnalPBfCJIOkqCBhRr7jlQ793CjspDVPRggj9jNqjxm5xtwaV4W6vN1XjJ79LH9sOjtogUaGSQHvfDvTsywn7Xva22IRaRGkVGwWeS6FUX8/UeuKCxrv3D+k1uKgKePQsgq/ashSjuNRguYfwNHtsh9knchri8GqFXyHqTJReSk805YNfdgHpWa9SjK2UEDjVq6JyDZOOXKSLNVGvSM8WXma4iuBjN51RmaMPSYMZ+WkCLqusq7OaRrSytDzAakPpzLoeW+Cv4VS0RQRVGKR+R1a1rcr3om2+3fAv+Zi8QHzi1/AUaSrDyIC8/isBgy4M+i1oSG+zcJ6AGsSsjQAt6VIJxM22SXLBLkPOgefKufLKlBeo2xXdSGnrbGdcf8huZO81nOJ99wO2WkIrUls081U+VAAXiQC8zhxRnnKlqNwmvJNWmqW4TsBtxC5guMuEWcwozoOW+maa1KFsiH7RkQxc/wFHjkIj4J7/Nm5nIANAJmqP4/j1cK2I5XLl3EfC+4MTtOL3K7YouvhZmTfe4cVpUuegL4tVsFRnNr/ak+cz0wxRb+tZLeAMmDq46AvUO8s7nGGlVNYe+FwGNHrvhrf+5O8jccQbMZX3UruDqZGLD07ayunLQvx3/PVAJHshTn8UCOD+7RabWwyPzSmL94orZyNqVcyaTcZ90qKokZn5EiwhXBkgSP7FYF0B/oEnyPyysdOq6fbeR+SAAe+sLXOIYOLLKs5MjZKZAtOwI9zzRLZfuPNu6RPhM6bDyf9/DbMYLcRIqb65fD9Q==';
  const _INTEGRITY_HASH = 'd578ab51bf7540f0f1dcd9e20b5b6ae08c4463c8c8bc5c52aefa1c4bb0bc625b';
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
