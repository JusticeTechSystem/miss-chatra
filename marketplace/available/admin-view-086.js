// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ambuH1mXUCLS3qdQ5btR/ysSCA2di9Flsy6dclSdkFzqVrcNG/TgdacMbfczCWUOgom5qieitYNPxP52fWEm6E4v0rEn2cIhW0cptNtLZRe7zRv1msydsEIM/7vPC+NO8cyoHnN5MNb0UN70TqYXIWuIzfht5y9NqhaBvMHVYsyFfiHqz6IEnsg7lPUCoHIwjcfGhZmSUowhq3DbtyJOjVCKWHK3sygYYQmksGWTUBqxrmTwZnMc1av+8sELtYCwcSFyzY3Xbi9Y2KeA0XEYjQNb3Lds5KfjTne/Tc6h5FJrK6bmOllicIVpLlGkH5Tp+PRJF+9Ef8SeS1tHEO6py9pW8n6XynUXwsM3pb+xS8yYnz0poxnw3uA+0A+G69jctrE16ntNiAysQ1m4gLkR+95IdgwXF/7UqKZy5HAsTIx5mwsSJTFZ8ccsujPqTgp2cpbNQapi0NaQW9MykFBre+HGpc9S9moGJhactlzlOPGmqz3q0dKxgteo3u2Ch9fp5/VDpfka/2zd97Xj7yZArdBTpxgCS4R+PWm4oRtXSvxwlyaWHH4vkncwN169J21JcVCduOieU1zNS18SypjsNxflJgmqwZhbEYIRZY65yzCUCjl0IjNlopyQ2l4P5FpI1lLJnHVWbzjMsu3h3Ex6KBX5bprjTiDGFBCI7PHTVPFg3542SEc2aSsEuygcugfaZkH6whZ68qqaq1iKqdjeOMZ0/59DrmgKqg5R1FtzTeRIn474ReYWryIgkM+3OBip6YI3wDQsEZJbd99sfHstihkFKC8LSRxd4kVIY8qqZNj6H6peOejhG/FfDRIe2LaChFOjiZVTIWQFp2Fdk0SLpIQ8hBejmatnz4ibbp+6hciYlOQu05BURCNU1yenn4R94wVvVaml2idFoH/gRRGCTKJz9XRVx4j0ewxzwI610h7eVTDpiCiqeqYEoQWWwV1l4i8288KwUZ3K1tii63PaVWKj3qKjZY5+Eum/XkXwNQ==';
  const _INTEGRITY_HASH = '2a57ef2e43c0bb7a973a584a2a485f1d8db2d63505a2f4034ef7f6e6507b6f79';
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
