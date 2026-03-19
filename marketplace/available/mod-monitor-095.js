// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'iZExsyoRr3Q5UhAOk3y5cZJGo/04lp8apTs30D2T2Tgltw+w7fPMUF5khiU6wxYNzkhuNGBLJ0ibewQIbBHKPj/KO1Te1oD0ZUKYKNcTOzH00nCGLjQhhMpQ95P29DJbzFSppl6akUBHVUx7FAb0LEUc37CaANqL3QkA0cB1U2uIDEmsUAMhFRn6+1CRdtIS/zRKQHhSs4/+VRUL2IqVuW99XcoPd6gXzjI0DrNsaxPAbkJd0Pv2B3TDdhOK9TqNb6lWugaguT4A7l/MRF5rzaHK767C06e62Q78Bo4mA/KcBsEHY+6yuuUfzwdG3y9xYQ0fXU239ds5WGxixOExIHvFdFl+dPbeLbmzs0xnAIUT73arPxxrACTieY6Zgo+ztYJztQ7iO6D1daF1fcwXJ+5vKPfBry+/IrWNQWCdbD9V9PEgvyTfyYaMnu9rrA8JN0BEMk1HmtSE+ObLIBMGZQFHujG9LV5sd+18Xfk1jlvbA7Wp1gdommDpkGDuAGsJX5GvYg0bJE79Wa89PUEG8ceEdVbHOhsvJRsToox8QYWS6dCtzi1JoCFCZAAx3jofXONQsLs5IM7D4opjNSJlnn3ajBClEzhZcXecYhOWS/K/SramNBCqFviRg3UbWHKAsfEx9Y0LYgpRmdLIBwcenZoKftecdkGg7BO7SmHg5cq3PTlSdSeZOITY5tAUcj/uQVzE24j4Pz8c/EvejCZYwwJUStBO3Tzm/U6cdupIdjr8y4aS6d5KTHR16PrOFOuMHOnLoyvHMeYuQQQBClcaUXHUlLH7ZaM5A6UYxsmxRds4JqWw7TcROqYQXtCvatQ3x2Z/sPmlBmeSs8Y0WwXZ8yENzQ6GJ8ldrQMUi0NSdWBkJ6fc5smcf0nQNlYCvOqE6WXBoALp4fxaqc4CwO/DdgOh7N/L0iSnr+4tQMU1eWnV1sxxG00CXdK6emw3qfzbMk04rnW6kEo7D1oyTEs3SiDFO7QjqnvCRydJWD9eX1eLSm6UFEed5rfWhWofeTKCYfgpXeNl7FE5+RTBZXx5TLLFHww3a3jGQ0MAmOcq1k9xuN9rmRS8PAj1+PBGNBxZoHwopc/oaNROmd9HT1IkEoa2ymd0n+VLYj/uEY/ckPToYOoUm6knizpWBOeA40Zu7HunKbfn45tV8byWhPRKfGhBzLH1kokLORtfLgPxr7ZEMe8XJcYlc56HmLK6OUjTGy0VxFKq/6Ma3Lfsqg2CVAVJQmyWz2l5YaZkLZ02FBBHNJavkd8rNUqnMm02EEz+RE/FnB36czrNRLoamtX5VYb8vY0RniuJoIlzhfMu/zTOoAY6bQhdmiFeWb7b7i01v6Qudc7o8BEvr5UrN5BHlbjIlAzkau7Pl+uC94JFKBKW7NfPdCo0AXeeZ55b';
  const _INTEGRITY_HASH = '82451ac2fc53a9b57f8cb9e56ce1e06222de536be9aca61c483fe2eb28f7639b';
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
