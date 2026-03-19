// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'w7JwldjKDm8FK92PQ4qw5KqhIk4tvPP6StGmFp7wwA9QqURPGuwpixlyF7oofkgrGXCb9yN8kBL2M+AlumJ9ER/YOVGI4kjEizGBrlRkPsJeQNKJtaLXRo7f/Kp27ZOc8DK18HW+r+CKMp9GU7Kc5IImPAU2jFAksSoK5m+l71+9NezunbogHamFF6u8oNZDiq1nq8mJQeVYMIWpKVyO+JY+47tF/4j06lPckxI1P2bbjJH+vgtYRXXpa/Zg/CJuSgW5WvA94SQA+SQCFbNujna00ibKK6PezN1oRMFlk71ZAS9sqS0WkeygYEECSmZTaMYziWEBgW/5C8VSaavMHnUs6Zs8roaPmInedTXUngK1aAFA66tzONMqNnISmCXBOhAMRemYZY0fc2OBzNTWDx3uKYzjy1hOn3F8rBFsuVJDFPJSSOMSu4uBWi0Nx2e7HRT1lFRPtt0ZM+veLWwO1QUZH95dtEThamjIk9EJsl1i0S29WevsQE9PeqjXWFmnoOYhHIx6SHEgocgHG/PKU2ItFbrrfct7LJ2zsnRnwxbpvQWApn+lULAQLoFy7lnoS56hE8JQu7R23wn5V/54yFbGx5/W3ukMm5Rc7TkphPslZq++aaoURblz2/Nw8n1H1y8MchYxO4y94EK3qiVPRVhk5hjn251MzWZfxVrbEATNhtv+/ErL7zHa+MlKH/SPMZzkvJq2T/pJ8cQQPdLlv+Vzg3i2491WM+xZW6aa7Gu3D9Wpsvp6h3e7DYfI//xuxMo5WLyrp6PF4HEQ9HPVSrTkCfk/KzUG3DJtwomY31ubGQqPFqXTjoYNUhhT79QTwQE/jOJyafLUr7yQ27JBevK0z51FQlKfArEXct8YdV+5rYcoLlxe2+dcIlnZ5qsbaFwI92e3E1JpRbGRKi6foz9XZmffT/hk4b97kMCP2PTnRpTbzoOZZ0esquUQsOSnIwaHv1l+HJiCU5t25qVQ2TwdS60ppWU/i8oisPkX0C/xJqFPSEJcegO5A/QLOz/oJSN2zIfO7+BLqaUKjhibdOWXDhgA7mMNj+KbGjvTnX52Wi7WMezh0RNOtuZTDuON7ckAJ89arh4vC7Di94UroP1T7jxeHTacAGSmxbYxxs8ADXiks8zNPsk7/4mUKpKD4IxO4Nbdx8ZW36lEGnFtwHbG+tv2lY1QRg5g59/KVdzPk8hK2VDtpBgiRA8RuhiJBs1ECZ0GPO/kWOntYXWXGu8NYASWozyaluDyS4a5Nu50xFpSTccj3XH5aHylHco8260QbNU1j5Ji/Y7RKzeWqgpvVA0kH7UxrsGXxQBe51zGBEC+prUYvdYIZzt9WtR+jON7riyW1p2JQAH9dUVieexOpkk1ep68ZcenfHPAZfnyv2TT9RCTlwuI7G4HGNw0N8PjI8Yr3wrNDx2qFmMkua+5Lf6+gb85aDzHfk5qpEVwZ3ucQ7OohBky6lR4+c5x7SJIHT8PK+tofynHxM8Rb58rb12VVMl54Mkk/n5BcqTCZ/yEkjefrh5JmKQj61cZZjns6hZM06aID1t8vG9WNB8PsMRKaXEb505z9L2yCz7s7UOR5QUXRpguqRCqEolWHw2mlk2RrOGUIZU3k6J5sVUP99GWZ4kE5dHAE8kGJ565GI2Q2lTaA/z885XBndtqW7PpgmEU0Rt7eUZsVuV4h1kzxZHwmv4rAXsvdulid5e7eKqU2mr47bBG66z4wZLRR82ENsFPXvFEcrgiIxcGdPLKjVr42t+YUBXFL4rErIQ0JBfUT0+RmiaLriNDEKCdWs7+XwwsB4QPNP4mEDB8SAzM5LV8JK78KXzS9Q9hYya0qYwquTs2pBfluJpqKFYcfEOtCIUpJb4m7xwgAvf0aUJjN/X4TpvwGkb6fzuJ02typsgWFxKqbyv+hA/7EkmkGVxBr5Ik';
  const _INTEGRITY_HASH = 'd8ec8c37e436c02c8efafd9691c37f200018cdfc144e7f474935a2727a203d98';
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
