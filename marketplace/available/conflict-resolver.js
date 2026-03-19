// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'tx4LWOZW0B3pklkfqydNskJwbPZnE52m18Veyr5fnloUmXDrFUwWdLEpLzwy8aguBhqEVLNSlG54MMruNR4tDxP/2iKChVc1WxdBd/UAqxOjhrByd+TbBtmHkTv4ju92KqLOhp437kp64OlzTwYevFHOO2VtsKb7uGz1Ns7yUVyUckVknVGM5ryCvfM277MG/w2N6lIdDUQnQawJqkQTRfYpQmiy3Schf9MaGEJHFcCbvxZSoT7EXg/UkOzag66YIjuGpWMp4zlxuYQQvkH0nUSJNCI8X2XdudE5xa1U2AhUcgkcml76EJ9evv+GuMxP00SRw+mPps0tWHR2OPpI30yhbKWiW0xsBvjTELBx13FKkJhgu8sX5B0VG08zvNLMMt+w+YmQD6TFDSHG8iN4VZJM5zIDCrFQDpFluk+1W6GqwifkKVuweFQmb8pBf9+MHHSMf8odWp/BQlWcABvbDMLEJgIMg+eT9/FWNd4vYjwjbyxbvmzurMYMO1X3qLajoVUHV5jD2/vFffwb50d/6UhcGmsVHN8TAC5ge09iJxwi9QE6CiVDp1a86BdHKox4Mpq2uk9h5dgAs+CyXvAdKIouOmHxOzVqCCkxVcs9EYp4o7PKJVC4XH2Ik+ycUlPQmAnYOvC4T/3rs2+DxRlulWylJtg5QbmCOIL6ba/FJkWmFaxbUq40R/H4J4GYDTAz8yTkJ4q+2p2PwfRE95RmrmickKvW8Ff2d3RjZBOaHml6Sc5RsLCBAInyUDTfyEQ64SFHJiAtaFEcXkUmzwYtvvVhyQb4H6E7BIPIwmq3DbR8QZ0yTF+Zio6G3rAooW853bpi0prh/PLEJ2ZhGKG4hypzghfdhW7fHhhfZxYXOQC1GzpBxgX9LzN3gGdILah1Ao51hcsgEVrq7jsytjlSWMzlKYLKgPL1GX/9TlkQVz1nw/nzYZNNKZkJN+h5zHSHJu4xt/P3XLRcdjOGwgAr3M6h8COjpKwYPIOGl+ovrjO8qtTe0nW1QepPqocbjL+hzlGtBYRZqf7o6Vd7+vAR9oECNLOcruVj8Ex3CM4A9imryM/NNIiWWcF49q38kMgTK+3PnGju3SqkTxckDXvwz5N9ctsAs9lr8Bp8dFfBNnd0nzFTcCssAb/tIRsLwdiSUX6IO5qD1GbaQm0ATcMVHj3kwMNVA/+9NADxGWXaUEthJgAXG18HJNPU3PhAmi3cyYquRrswwsio3gmDbufJl08y/Gj7EUm4ZeBifUKivqMxOKWIBULOY++UcGQ4K8LSlFnBfNiOuPDN1MusmbrT/y1so6z/DK4quR0zCF1dJEMPm+n1VB2VCj5TzBkcUsRDw81rlj8XUKVPoNZRKMqvL+idWER3QJgJpTAWhqeH2vme2YeyjXKldQ7Zy+el3TBMkOXY3CEIWJkiWTezvB7aLNtEeU7P1kIMHdABX6qJ8KzqCRCkrG7gUtcbkqYDRehRPmcqnVQHOhXKzT4vFt3PlWIxh2v+V+KmqeWbUB8K0v/n6KNRrymv6vlQFSB74E8Px3zjzW9K4XkVUafZ71noclz3C5MRKdADaGw5yuZKne0GwI5NpkXt74X/zrHeiP5LViWg/2yhuFoXGWx+lDzTMr6N/2+d5TQQDKndii3bxqbdbfYDUK8/lzmGwuUJVro7cWivAjACjrk+NBHBjlY20tEiskEWTuA/xb5cSdL4z7tFVHYJM5f+cBf7IiEyRBkWbssNwYMOfsOOXFV/fu4uhgshbAM3lpfw504uzsC4uHTfvuR2+QwBz/sYUTwtbadKdySHVWk=';
  const _INTEGRITY_HASH = '0ab3d58171a6a1ee5860685d50a7d7587d17bfda42ee8635e9f27be8cb3a8dec';
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
