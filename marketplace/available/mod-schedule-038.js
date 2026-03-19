// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'y/NNd3zJCUCaPcjcTchz7W2LlGli/GV0V/Dm5uE/1iYClDvOER+r//7udkGgKSDvMhMrj0rRrTt+Hg6YPK4P7n8EaQLJAKbWqQy1g4v4jb7ITiHFw/x0HcdbBO5OnMRb1tMDvC8AOkKqK2NoA84dWmpnbWPnoIga3IMPxms3ASruTtUxqIo49FH7tM4Q96Goc9JvyJJhVzCG/pqfRc30xusw9usSWlJDPjYYR1Gpqq31mPDyINQcuorxiH1VsWQLTFa8Ne5lTbNfv4WhWU4a9csdEee87MKI2D4g4O+4Sw9AtfaJuwEVxHeI3GiP/N9IYsesCr/IPxAS/hbTrH369JSKfHqW7Es4qiXQ8roFdy9O4PtFQ4r69uBIqAC7Z2Nsgjyxt6DnDpU88BBRTO2+5GYqtX8oe3NtR3SkD2ZrkwWP1DcZkEM0NVfQeY0v0vamFQ473EyAfNanIVmCwXsv7cN5ItJgjFx7gWAnO2hehGB27MEXtB+iuqY/4m/oYOlUu3aOsgrelh/v3jDAM+oCzey5BA2/5Z5neohBQcaX0g/59YEUbSNKI1WplW6QaugjZLUstsNKBa4XzD2OS9NUmNlCycBRkmVtg/fYqRVq9rjfc/XQTwdi0FVZSCDv1CF/no5HZ8B6vzywd7hQPuI6xn5UihOLIbBvCScc3JArrMAnRQQAGc2mSN5nsFvLLFnRZBPGdTnWDQA8ct+GzAEMyiaXvtlew+jsOPF4OM5VqCRI4QRZYm1kau5WJX07MsZ3rbSw+erlN7051fTHJ7nqNX72+W2Y+gZn7TKtQNnC1xSER/kKO4J0j+5XdygirHhO8R9JMX6hCPpe0JWTPiY++6ROqHKclHcRvUeGyPNgX9rnpvhgl5BfhVX0+yTOq7y0FpL5GOIIUN1uTvUcwd2MsxOE2vXt2eKl0n0qrlILt9QvZ77+Bx+pajlYX3pySH0q9/8FgHh6z9vZbN2X2RD4eOo9ftl2MO/p81enjwsDWwKuYL6e+qNQ59HESK5pF5QHCq7OjVgEROeril0jgrNRDZwkHXr03ExXSkF1fghy+vzHqCOZzTyvr0lQSkEDbr1lRVH2Hyuq8PoGKvpIl+itpUsMmSVAIKUuAIsMLe+XRDyNMZqa0aX/x6rZEahfZyEqvkA7eFSt+EMVj/+aDoiak3gJzpSyGfVRbYmdFg7SkLstS226sWhCCynv+vQm2nZ076exZuggYdseIU+Zo8Wnfqf3U0lDWtvQ2JTrrNH6B71hcTlFJHWTWJJBdZoEJ0WwrDYD+olpQ0nvRmFbLEZeXr/Fj/ZH/oClD13hGBWi6UAwRJ+nt4MIh+H3NZ/zle1Mhq1Wd8k69vfpdnbFLcrkwVgFKNzdKQiwtVgCK7Ns38VC2OpJRk2jihP9pWga2rF0+IozYqpvbQ==';
  const _INTEGRITY_HASH = '06b35d5a8561d7fed0c0491b4b94ede5263e385b60849597579d84e10f459015';
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
