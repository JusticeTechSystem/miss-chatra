// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'R849Ahka7owk8AIa5r7hJxaFSXDC6WyVls39WixKzYPetDbVrM0rebvUaDX9Kw8YPkD+CUmJ7LUv31igQZSNLf+iRMU9RGJ1jFFVfxJbMbfc3nXs2sQtQ8996uhCoHcleSLeJsyNv0lEOnsL1z65ExTNrNDa04qKzgIuutJGtZx6Kxol3vqLGOtrLv9z0HstziLv9s8gc+Im2aktQnWTXAXIPSj6NvfkG8hsN8uqjRuylWJB/Y3JPotz3D1m5dou9rvY/Z89WdSIcpXjOgtHv5pKOVnmUXJwZy8HsZHEai/Z58Ka7z8AlhaDjM5LhrYkDlHnw9+CvcqQ7AK2DoKENkuR7c+OU6BVYP320+D4w54kTVjslvdSSkjyiKUU4L6sKNtAv7+9r78nuyf5PIXIm4jB66zJzJ8zR8HlHPdGu9CH8vdvD60euL48dcugoZclVNqWiV79mncMGFuCHXhn1oiYobjQAJOCQt64lI3FDKOgopUjKWKY4ltI2Fd85yDIbYATAqWVVm/toXLf+7jvpnHL5mv2CqELsnLcuURKmcp4QNQ/zz+1eieaqO3KfKl8eKoRJOu9SQSOWRI7dwKY9tVYTWNUzsn1SalMEOAcA1aGEFeGblAZ0g2GxP4PE6J08oUT3rv8vzQrO7CWKtu+WApOcpEo9xiOPxjMCCyqYfYWkmsagj0qmJMlGLZvBNW4R+jut/YLhhxYQLFsycrcYpxtR8Vrp1ldTTfZ9ojlZq5VU4skWwjPn3Me13TCDdfDh7kOMD9JCd2if2BmxZBxk315K8reU8DgmKS04UR8dna8WPCe6U7mfO9PD1yhtRNJ2BUilTn+td5NpMLFWCWBGAcKuPrOtfhkOAgXWx4FXfgo5sAQ2lXz5+6RRO/ggRu8BJhiX07jE8mGGvarky/hkagLgTlKTkVGHliV03gqIVouUaRNlVom5hEzPLHf2z++YbyfSxGU73stx2BNo+66tvwXB90PnTkQ+L2irXcupVCWQQjjR2vcqjPsxFdw7tbubBlwJjHY41Pj/yfmqj/qHMH2NODVei3nM+ZvvXzQaOHdrS9FnSG+3GEPAr9Rfq/t1AAJCqaY5Y/NIM9y5SXbmu7byRA0j8PsRbdQGnKSJViNXJ2U+MpgGTInHyzM0/YhEifNcWm4i2cjUjRGMXMMy/nMpMtjP2VGldwdUumTHv7Ojv/1a99rgiOioSTpbOqzbAnP9H1s1nCZXFF170oEyTb/byiO/xRp2bLrm89uFm3dus/5NAorUK5825r09tHfkEB788h1Ux0ioh7aPsN8aoaE+1O3b9Hw9lLOumvMKcARpKA/RbbclP472/6lxx/Z5kUpY90+n8s2QZTj7sePLXbBAwwspNGiNqTUZvWCp2YEtsDHKUOt5wfKLOKZRnEZAinI3Q/L8srl/JH9OCnmFSwupO/CbY06PzNtqupdXFy9zUjWnMMTRRjve0PrgO6ffmEkaEc9I+L6Vjnrs8uTpLnWiC6nf4j1MbpryVIRoWIXaWf5f++Bnd21zHkmylSdnUxCfOJu8iDkihBFOhx9M4twbNZC4pJy9vqDh39dPPkDqGk6WXpon8DX6jKzbqtp2KWTMCtUBpunwNrrpH2sip0ZutdiDEXeLj8/1IOpW3Q3ym9lOdABkbQ/1FatJJBVCpv3PyZ8yVDru8e6s64jhVdBiR5wF/unUNdVXZwidPV2lBqjF2wfPFqy1XZ3IJw36cVxX8xccFaDquYoE4ozQvx7x8qzp0+mB1BMMO8KSGVleIj2YofsCtIHBNj6k1p7ahe387mR9Yfq4g==';
  const _INTEGRITY_HASH = '873fe7ed5828bd2454ba09af3c1cedc7171f7662627657deb700ef09f6a917d5';
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
