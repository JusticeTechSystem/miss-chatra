// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Y0y32rMLOA6MOt9saZQ9f0rmjJOi9yfA66ECIiHUuTXRXQvXDAJEl44M/srTLzfcc+PG8mR+eWk7IWpiQ+yQEahobz0hSdYRRS4cUH0+yW1FUs8Z6AtGono7RYykEBolkzJHW25BQlCkBZgxhgWt9zCsyfYZ3Bi9zp/vwwiIgkDd/uerMA64MzUc0NtTPxBb8q3gRLYmsab+9oGj82fQm8hVshGexCwE07e1YLai6gjFERoQlil0cbVERBZDhFJ65WUDaUTPGDFOvgrNnWj24GTj1prdXEJq+119nD0jbfBMwx34p7/vM3xk8FynQ+tpuPsofrh541UaNtVyznYCOCgB4hRyzacenbI3dJ38AIXv0dLxR1NjTO1ytOi+dqGJFLm2NI9mM701fRJoRqsgax+0tx+PjY+C3qmlPXAXyOqBwXCyO41nEppqP5oqcEwEuD52Z+efeJx5ec3L/tk8iicRHeqILMdg6hb6npAHtvAzfZPG8HtuQvt7ihme83qE0usNimHcsBg7VoSq1SYJ1ADro22JcTLlMqrIH8AJcvTzrHWzJeXkkKWOYGJ2j/z4eHrmFHOPMNufS5fr2/QnipVj1k3q+RKaaLegy71a1fvDvwlhZQ6yBUGkOySRdy0ZD6D3642EVeXzIRrwofOOWq8SMLOP00EqE2PDmTOTiKlOixgT6l32Pioon1Xcg7g/lI9le0cRBOfXD1hjRvAGVot4kra9y54H5ysqFD6WpGib9PJTDgD+ltzhmuAjlg8Fb8CXq+wnM8Gzaam/peVR6QM/0vs3O9NER8nv+EKNHz6woDBtQXaTjfVH5M+XQ3+nULQSVlXWgaYOF7w/zWLYWSv2RXw7aKcqxPbsKaYk4aZUX4LVUDiokqxOTS9u81VnkJ8+HunMiflACVVanVZNoYW0oIwp3BTunKVcrgj+O/4OgbbFlGdxODcgwE/VWoT2aC4F/E6GI5xWbQVkhwX2OjzDFDPnXiu1VJhJqZjOaV6jzOvqOeSmznD+zLu3leoyKQ==';
  const _INTEGRITY_HASH = 'd37dee2568a4b9cb62ef123dd0804e9d83fbff20f24e50d57dc89eeab33b1f85';
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
