// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 't6pSOd5N4IMPg6m4TT2gx85aUI2izNMMJuqXnXLhYAhk5kY8IaLu1TV6GX2THiX5oJt4kXZ//yo1JQbkdQffvcKL+leSRoDUxy0NlAetJOgTADOsutpugKz18o3tDzze360ThkLfh26v+lU/3HlhjpOj4lObfvntwJqNk27mOZbibMQx+ahc7WWRNXm/0S5cvUhlWLaeltU8WwxcrkR+9YWqZp9jWgDahw7bye+zW47InvHOmVQUNvkrCWIKFADz+zeE8IXOLu07UzNtAju1mc7F4O18fj/I3+OxwyCEVDMw6SDApQ5XWVIyN0zUHptsaM8uZMjeSK8fcwpISu8mM2WunVIGnv4XbrfGiRgJCysmNozJZ0IeJF/qf4DJxEyMnDHKqiJDGsvWTOFC93Y+n8Cz7SwjjyI2B7RkLht9U5cKoG891al5BvcLRPFK921QDNbdAoYfhmoxwohybFxtFxAGczbHqRM1YPRtjhahztpRcjkrClyAYUV7RHk5+jyCAULBDwDAxgacn69QGdshpLxrG6RXsY9YwbbmYLQnMqQ5DrL/SA2d/oWRFPWEniECagxoHk7h5KcC6h2WZLQpo3KbK3BMqa7gla/M5ZKvoJgvEtsf5j/ebgzuOuqcpS1bs+JnIjwQ2vJVYRF1zAw3bM2AmNsIyGdsvN6yFQB5bEQKLb3sODvOHybKBqymKCA8BL4pZFGX+qQe6IJVJwlPYe54K0UDaeXBOOxoFjhJHRqWuSLDu98h83d8OB/9zAGg/cTd6Y5AU5QU1k8uwQ+ieAE85KnL7aLM7NcaPhO0WZffmBsCdNNqkyK1k6y6M9Dk2MUIMDlAeq+aRobPo36CpTvnqRkvSORyV9ldpcIWhMXzC6xwd8NscGfuO7m7RBMgH5/v043fp0RhjBNnibOjHcThAQNSZXnZTtIPoUkw+Gj2OI6bCQUHHnSIzfvC6jPou4YZZgLKiPRuB91MY7IWB80CK7gmoiqnf2ok0AlUbqMWVHIRzbUasEIYynKvtJ3k3Ws759jooAsXVi09sEsi/B9efUs/HmFAGwyvsi1E50x84WZY/oZijetUQPrxpoOks0owGS1Si6qzXM07b+TatHLagsFhB9qub6UvAdfkk0pnOVvk1Cw2+SZbPpv8G0fimKUP/tZ4qlnu7r3MgP16TDTK/O8DDXwV1O4q7gzr5v2ZamrFTHmYijWJsxF3z9B+ZIMhvkGLYUrHWpOYiR2j1X6AJqzpLzoAkNIzpDWqkIfqagsYSHwDE2CSbCWMSiYv/h4wNwYtx/F+PEIyNTRqyhPbVgJqrmG/ZMu+lvUhYTJOZSJxJVkJ+x+hDnN/9Sz72UFascTxy8C6hKT4YfmKjl2tEBhr+bm+U9xa7RTxF82QXN9nvbh2/n6sHipjySsDQIsX9hbZjgZEcNPsUxu8QvzzIgh5YAjkUG23yokFh0VqPxHXfhV+qdUvMCjNkq5O6Of/ZFydYpxjgAgwWunyFwSP1o9z1rqup/K3naE=';
  const _INTEGRITY_HASH = '8b085a19964f629c24e5cb898c778ed8470eb121d1c8240f470b02674f6e6a16';
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
