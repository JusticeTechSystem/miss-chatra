// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'jBq942qNYIuljTPnK6rAJP7/qsoARq49serqcf1t+k8BohtYARvKEMQ3bF619X9/m7mToLiSBYhfZSzypFbTVO1rIPDo+Zmsb4bI/va2yN/Qv7KDLe46jweq7tRxX0G/rWdTpf3EXhKkCZ0RHyNKu+0wNSAGAWyhfbk8jNukgwNL2aMGcy2J6tnUSFTBaLP/eruveDqk23Hj4krZRwU2YVKKWc9MgobRPKyu90KKu1URBElfs8hSBL4Xx+gRYLqEUOkuV+bE2sxEAxtoZYwZ6X8J7OcIqkO6xN8Le1PMCl+luLkQHcnxBpV7Q45RaleRRadMmI0OS+02fj2phcUwRIOU7ZiUL2L1XpIuMe4Mzr3tHawI6UKTwovL5PPKphFDwOSqU+OZWPWRaLSwp9GTr1URPuszeITdpon7XWnFhJ4ocONIGrmeVFSxtJFbQjMOzbv4Fq/oNAkRC9TMOM40BrMUJF15IE7wRxsn5Wn9XzR0MzH4QDv/onz77Sr2xJCnwFSu+nhMYnwHt6U92a4KF3wsuM6cRQEhbYYPMjPKm3O2+8sF3aeArsOEWYbirMncvQEqXBucGt74ju+lZUm9mxHTnEfu9wJHtR/gJSDJqs3QF0xU4OSLt2MG4Xl6ZTlfzjkzKSqM8EIV/gQ+46ADiJFfPE8EShA6DG8jsF/fqlkiSqijAe7TCHuAPXUyGwXdGwO6SE9nKz0KPhW4Elnissquja/i20DZQTbP81dV/pj/ghylriE3Qy7kKC20Ll9tgLDDN6IUzJfHs8imHuOzG9pWcAZ1bpkRXZ+TSXqUoSRrGJhBw8xc9V7wJj0y2UOWwpHH/zG9xjmI2BFbTq+mzJvIPzLvEoWoT6/XORuhCvl3vlDiShwm+THLUy8U2w3Vf6SglHG23/Mk1toBD31p6Srvxu6FCVmVZWEyG+nGSBZvCYfx7VeY/+FUu7q0LRymX/UVQxYzMuz978KqWqVhtlcehVoPgNDskuVpOTYrZC3yuwsIM9tLV1ac3JnYpK9O2MM4wQkqjwKDSb9XqkYlAj9nHB7TKZUz04bZLu8CocdZRKb08M9LbpKT05HoQlKyPtKENWvmXmyHZzw/K7o6FYsGQSrf49enyGaPF2jWztvf1byhp0LDSnCRqeV/cbLtG8l9jVreJYP0WPSVX33mRRlGmXVBCr76bcxQhKpQCSPKLYqmqnmo3GTn5OIxbb/x8GrgYVCvNG1DquxKJdPfTYxBo4mkdXhe0acHgfmYBr/cbjC8l9xUZxdV3EF5JaJNsx19uLDBZoqsMED5u06z6udMrGq3wi6CRTPtd3evoeyFhZCdXi0rpIp58L3pycRCmMk5H2afRqA6Zie69/JSR6AQernZ2ft+pBxF84W8xX8LP4EdtE2cernPOqEkFuYH45Bwt2xBQDzazB19X+TNmrgPX+YXRNLQhf8uAajcDqgJVfLqrLUkn0c4zPnrwTM9DJDorNdo47IK7oWKQepvcCnq9dAdN4G8';
  const _INTEGRITY_HASH = '610575627812d87e3c336578410a55afd692aed8471287f61c33df7d85ba5128';
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
