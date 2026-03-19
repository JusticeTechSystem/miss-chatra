// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7FnmdrRfHvpWGwRaGVHbEhVJDgx6zimakuuMYF+Z+wjeNTAT2ccsHZ3u+FqFGBE0O1iaA597PNDMt+Xq+OzfrwscMDcAZLGYn0mOeDTOHRqfmesYCUO5ENE2EBFLOd9Lv9I/zQYsZlpuWUdFAgq9g6CvV/OIjsJzaO1yHv8Z8E7zKuItQGTwjsiXpM6csfO6xmPNbuabO9Ls73CMX1kmJ92Q/svMmof6L4lbW7qXEF5xr0jN2rdGBQpccLEgrSJuOyh97/nvxwbQ3LFQSf6ummaNYfl5c1n0bPPXpr17FYYqBlZ8kSKAe/Iauh+wr3gFsEcuraVD1p2VSZHY/D5XSy1F675MHq8N8hEV9txqWMIXYF6RLb9ZCms7YNPdgz0HpTEzE3zWHjbGXRT9VKeE9dW3oxrMv1v6yEJJ1/wpYjVpT8pwe+/2rZ/Pe3OlgTMA3+KWQGCgSkFkyBpBi7qpa87Buh/EkeZIlBbS6c5oUcliwWh8ZOFPv382Z0Tdg7euxk6Au9zNczxLdiHYkG9LEonWohVTgEr1P+xf81DXUXmOjZ5fZXap69CUUObIiSLVs+RTzurGHRgjG9XP/NTwWxc8bNhAQupswFMLdzcL+YpK7B8mpMPgQhjRJSXLp4/SOQZC5BGAaNKmRJqdwBrWOznXN9r2buzo3nFcJKc7cKT8jmAO5BQJAGp9IYyQcpbXaMkfobUDovf2GitLweAV4Z1iDqwAAEu0FI3gvYEumJPFAULS6PjUdSvTxqvZz4eY8zrwtuqEpOYro9fMrppuX9WjODuuRWbv1mxJjMoiZsAPOszC7FpMX5r20kTB7AiqLACHvUTuKZmP4PCArX4qKQQflFSrms+hCvOO454vJsNoQk/dRvfhQ0ss7v7E7BI4oEFaWgZjl8OrOXINO7EILItag1ob/DSSRD8Oziv87J5kuamlFoSxHJ1uT+As20jNSAQtwohTzdrv7AT8IMD++pR3cg5RZNf0h0ff2zKdu6FFqtOXvv0vnD8hCuxSt289KY2KjVyvIYhUCMXpP1RhZmSGJ7DCtSneruNTKxL3JLX5dd80y4Dm678dgLZpdg13xQE2J+UFlHHMOiMezGW+xXs51emQ+C6LiI+tEPWD2DCxq3GdsJfIcXvO7Ox9XYqiqDOK0AHyI/GsjRJ7vY09Mfa6ol4Agp9qq0Fk4AF9SDi6WjiFJjfwWzi454UdEPNJ7CpYc3IZBa/skB3jBQz71DTtFUcC56udRfYX3zYY82M+rKtxqsA/QtA6bqA6mUgrm+IOs5pNNaL+PCsAPetWkZpNUpcI4dHkt9ILpGW1SR2EhvbhkzXUgqEU7vRIfuKYqDSuWqcroeF7hqi0zw63crSiaEWoYG1UJYz/PTuV/L8XzQWj49uNOQHXbhB67uREm/NyP3mNRcucRgItXlaoBSQaVlAM1r4JVbftNRjCHsarHp07N/tzNemuVrg74RtE+Gs/PKo7V7Wb3TC1qyvRq55nY4h8aN94Q9ZE+Oq3m2X4lUJCnJU2iMPqkXL6Oq9fO3J8Y98Wza/HkUuhNncw/WyhFXyx8mvjuSkgxAqx9jRdPN7QDicl9anQ/djeRbj71W/OlLhQh0Q+bhe9bquTGLp6feCZ6q8OpkZVcC8yj2zN450Y++nsavGzg7DwvNV/v406rG61Sr7D7iupklyYwLgvFgfyzuqUVKr4pAIm9qFtgQiQlv9ERqatYkq571UThsyBRlWNSQgzAx9CtqJECTTlhqJgYMjmuFSlYsQesPvJdX2wmXoOaeSap90hGCFLYOc6SrfhR2ss+2DMIyFXidwt6xbvDI4ms5LCmK7VJ1KRhvZG1ST20VRsgsxy75qhjfJFtRmoDbiQ5f6MHCHh';
  const _INTEGRITY_HASH = '9ec9ad5259634ce89b3d008482177fd1fd430779656bb40d1361bc6049658378';
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
