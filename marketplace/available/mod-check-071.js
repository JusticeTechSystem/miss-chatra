// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ac0KMHN0TcP3yn51UofEDISdVNUOAKBEN5tuJvGZyZXWXq+wgpbTEvk1HkTqv8E7ipRU14nUf+vgaa2+dqe5QZOfh1KOB0uY0hSHwbcCl5m1M+ddcixvKuucs2WivgILnsGpD4dJH6qreeVkXjQPRRCEsEmcVXzx3JpkR62Z3a4rGruzKhj9EQqhLchYMrwQt62+iu/ZDcMTYGRaSQ5WyZjpZ5p7RWjMjjQjeyi4Ts5kPXy8reLdmqXgRtvRLay3CkfDojVZrU3PZ+GiflSmFA/xheBCWtkFSukfzOGTO9HUvvoxtoBLLHKKgYTFRSm9xdTborkV7ToydAX1hvLndNjebozLR5axHh1uFOkn1zV9saTNNjaehvW5HB0H9nm5ZP9PEmjC4AxbQ76D7ip6Oamui+Y8cUb2FiCTwk58gzqs81mcTgWq+F7+HvwdYpZe3Ewox7AHOwrtsWh0pgb7jUXvmd7bMyrw1wTKGC5m8+frZslieb0fQ+ewoq9eQl2N/GqdRiWzPWt0eGwFysu0vAk7VR85qxBFlvJlEKJKo/nF28+l6n1jI+ucJRI4v1IscfH7JmoIMP8+q1INE9vzqCEZ/tDcTEVYI7vDeHKS3l8kCLIDdnfv6c1+GAv6UxEdLZ8RuHIoKonwqv7bm/rda3GnbyycgqgPrvzgkjxuyNT3CDhArzqmOTAqSUtNvGEXnI1t1tJzB1UZ3bMQuj6KuMx0f5MLeNUc2H0Ny1apL3F4oAcu6CzQb9XtGj61AZl4UVTrp6+RYwGofuzMNFPHbHfC7ornEbT6/mpQ1xSEFsAVdzRt8o2ooaNvgbbG6x/RP4C3D+XrBuuBb395AiAtbDf8eKGgtXoRjbEUbmChRIk3BAv69AxoAUQ0+DvuPOkRnmZLcWAt/7bOmG6hmjPobu3+9z0mlp6ZJLCS/Ahl3uDLKgoarTls/IwQn0w3DzX761aEUugw7A4TYzxxk4ldaEU8CgEqcQJYgDB7KjA3lEQ90ZRpAg1NLLM0M7NNhe6AT/dUNRXOyRk4xRykLXpJ33tw+KG7i8IKm4aTIV23/EdlqTV9Jvn+r/Dz5XLMfNj8J5JAgF1GjvYl0iPzl9iHKr6mnCsX1kE4kQnF6lprYTVLjDyx1rpho0vkuJZdbwVhWvlKZuhr56YH6xt+TJzKHVrQwFGvEHbYex02/C1dKGKD31cuIEhEXiHW3vb02CFcHf1cxkcsasL9Oe6wjcz1zS7UXJFzNDkD9kGHxkm5hIuekP72PjPbCDjdaEybyxMN/QG4cqhlw+u4UvvpuoddAayVceyW27yOYYhNntAFvEQ3eLdZRz4jes0sC7V9+xiNPMt1twbiKpv1xIhEM2opweuYqDVUbZJESw==';
  const _INTEGRITY_HASH = '0b6f9271ad1e53be416c22c0d9e8acbf7e2e1689d23d59afdddc25f47e944ce4';
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
