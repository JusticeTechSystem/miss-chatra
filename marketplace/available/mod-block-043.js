// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'IVRplZ+24HLRVuXR2vsX42lOguGzKx27yuh1BRlrHDvQSORpgb1XiwVHf0YtNu79M5EXzGZeeWjyDCWqzP6QhfeU0GfRXzOiSX/Byr2pks3FhhR+FSxl8brmZf5OJz7KawnfutsZ3H9sHN0Lc0dMLMGDBxQtci+hdGYCauFBQXSdXfgUbqekIUYbaQXNbVLd953MqSsYW0M40rAv8UJYJ1hsgkRrADhvY1SiXx1DKwp6H2P+5IbplAS33FsDBAqrlYjNUtTKw8LK6+GfHeoHv2tKZOvqd92vg9kWx44yETCriAWVr0comjBsRkooHP7ITXcpRdFQSEi2B1KTZw+PF3ED9zavtKeAQW9/vB2bVn+BsvlYZaND8RMfB/bw9L7A5kZvJc8Pmzc4EumxEvZbOcB/4gR7dXyUSzvN4w5r95kXW45534BxhD9Mhzwjt+id7iGoDHMDNb6HnIR+kJIQDyUt7eB7k2YO2f11X8CPHM757+fzqveoKPTBtY/yBryR9OG5nlHjljHxIJs897OUKEXo2+yiEsFPdJ6IR97fSSYA4DjnM0qTAqu63wYIb3KaLPzvcfPLF1yVdv1kHOMBmK4WiYI4y8T4sZMHsFloNYjj0HDliKLq1RabOdCItWB31pPBgJlZRIsGRs039j/2xcsyl9xxdZg0uGhyvceBwaQLUX9tWaa7Ifypbl+W/inHZvFNOaZMN6zryo3/XAHILOw1H+3aObiFfUZcV8SM5WiebBH0fJcJLBw4xpPwnVzBM68hzveYgW3TWDOyg2LQuzSj3uYNoiYZl0FnebtkhoL0JE2Dggi9JrZLlsBPBJzIjhBfhorQx4KQzKu3BusODYkkAVDhvKxpTrBkWtOfDS5QTk8DMoQ2nvy4Jr9A9HcRKsl66m+ATAUSXJMk7dhnB0zoAWD14fl5v8LMjfCUq/OD4VPVf5kOiNtmrs1A1Oe5YdaQM+dEn/1al+om5kTP9Vb0f5ZDcEr9IRr41MdkUoZyLo8ZukFUwExOeyrF6q3JfIN+cndtcRMQMqP9VAlFLbJUB+mZkRzL++QV1l0hcejJlqCQkVC8klX3IGqvBYQ6CF1nFaCPrmBfTVfuIT37kUGQFRmvK00TfRJ3m1RxXUawmn5DwSSD59B97E4p0dNga5j5wvmhKabib24zuNOxxI0qJ5bbOSMTdnOHgNFwsAshGvXqIB6p9gFVImpdIZHgOVlux/mURWP84Ybuekq8FGg+Yn8TSgTYiE1d8RmJyhHBLRzXfsqEYTbFK4Ft2rIok0DhzGjzL6h5rnpmfjDdyjzB0/+KcbFa+3hZwTPXu90YEqOItDDeqJ2SqLv3Y/MJEa/6OW6BYVdVY8e914Ii3B8qKYfL5uXwPA==';
  const _INTEGRITY_HASH = '04f4e532fbe01085cd599708b88480bb2eeb0a002c04e34862a70bcb6c9c94e1';
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
