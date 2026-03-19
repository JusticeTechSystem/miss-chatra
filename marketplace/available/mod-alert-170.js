// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ZgIwlALLL1nEFiflMXKiYBIgnwfo3rm15cAI6QxGuj+8rSJ/1O12fc0ODKxHNIwjV1LNQ2ZtMAOiJhqp+iOiw+jPnPIAKZB/GA6uv76gyTHG6RzJmLDaGunKcX+h9fa8GwFh5AEleea4rab/SKFwowHQzv1LqU+fXYAeGXFM1Qmea38HhXhkdElKYT63GpQABt+n0OG18Lau7XHtJpwaFdoAdqu+5eFdgvY3gpO8mo3TH6Pay5m4PixSBPSK5VnSzp6wOyJRyyL2//hy86SyfWyeHFi72/h8qH8IpHEw+3Ci49Xuw+R82EZKWNzz4Lozk8nqBd8OF/dl9qvFJ5P2xzCfwkx+EY3Izw3ws4eA3gsynW5CT98es7iqawekC0fU4ZdXB1v59uZuQ7JbfqMmMMNLkSN4l0loHW7IktokYKDb1UT/bBDptxub6KPlYZt07ia2yNgMSH2Z1CuxJCJAPEVxxgm6u/zjt+dNaQvmPj+wlUQVjLwq/1jSCkr+P66ujifBxcovoEwctgmdvEx8IaO8rAIX/7GwD7rNcaf0qGn6FgQVPIxQKAVX2ZMdN4sIHAKS0UiX+eQE72N8jbdQucBJ973dvuWmsl55Vs2fQR5SW4F7qbEg/T8YC0qtiUQxfd2zVbYR21G1xOY33D2umQ9gZ8KgMqAGO9F3A/WZKQwQVAfW8fzQo1oFRWc24emiETC5CwfPRYMKbHkH0p6bp8sPqG51RGyhwDirhDiSe7xG0plMGR6zt1xv6vUBngFETGGV4EyV2KQ6iGpkVRtAvsVVOLFaepqp0K3WvBlVmC6+VV1X5Drt7hmzRgnX4rRawOvAiaFPURhibvxBE9ShR0lEkym7wus3NZXWKw4p7+2WT6WOPB7K2UxN480A078Ez1+qCR60iCV5wB+lgSZR4OLWSwGgP846gv2+aX3zOaQNEYUDTGKHfxkUyETcgpFlOFCZ04z097gtu2h6V20zL+b4DyVaDVmRCButPRhxqKjuv+WNv8wGdMr9XjS+hzL/uzgepDmZxXexjH3gi2v8fgUl3Qk7Z6McpWSapOxKLwICY0HzmRKTjw3eShYSyDGstLJHatspp36JS2Y9iSyAzDIkK+hb7JfL7LWOhvkEd+RNddW2XCTDQVN+UzCV3aksE9zyMV2MtvPLrEq+lDEMM/LRMfU6BDiz9Pky4IZ3b16r+8sM7SAaYHv3bQpN3xtELYjc23vwMXa5gxzhTeH7uwovAbj73zCVdNvIlbyTwgrW9tLBEOgIR+XI7+sF4hE+yVivy4jayNV+qqykM2oWIfocZwaBipbEWpkjB+wYrH4xWqJSQs4B8vqYCrTwyC8Qxli5wnS67X8IrZ2RY+M/gVgXjRkWOhM4dnOIufZp';
  const _INTEGRITY_HASH = '9cae154df90a53045c2e4a06506a2d1799c4e18231d66f0e9d4b7364faf39be9';
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
