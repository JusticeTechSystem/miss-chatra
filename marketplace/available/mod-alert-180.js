// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cdYIVh4yYD+BFTkGwomQl9CZWtsOgFsXjNTOzYu4l8i39GHx23EeSCC7ueqxqOE31qgG7jswSKwWq36bgF/b3l5PHysG8PI9sXR+fbT2SXn/JDfcQqw/UgxkM8p/5ak3EoP4dK4b4tfN4C+gtnW0HHDTO2SSlcGuMZkIJJFGFfqPiyvzFKSDmBbyXUnVyXwvy0uzL/CDIdAqyKzhqtyAzfL8CyJBHuXyyMmgzBhBNvvTkcP9h1pdjFFEcGr5rFCME9qrdyNrtDcR5BWpx0ZzX9lxTCFsa6E6chumGczDVv6aBjtKkLVfsldXGzvd9iyJRdnKcNDmkw29xBbdIIDO2fzVgMclOLv0dpM+TCazvdZCoE0rCwuL24wWywL48A2C/umdUV70A65hkUj4aFzrKCriPsFwPkvQyi77eijNi3ALpj6kfIVYR2c5FC1gZ6Ak7Ri1YhBj7V5/ggyOW1XVZupyma00rGQRMq0wkZIrXqjKxdfZ0X6qXvJYBEPD8SPr/19TVVHmxGbdsLMKdq+0VZUx07M07AWoC4kqHTV+/vhBbpfb2JzLt4qD3F8+sRomQfxmxb3cVh6LFXeKAgZiV06ANHEcZ+bWh8VvTer1gpzYI1ixsuEPxHxGvLUC3295u/ckdedK0B9gdQVKvGhu+2tN9dPsuF5PbEHhOYgDPVEFnp0+u6eCWc1e6Mvq7goSF9YiNlkJL0iAfb8G12ZCWDGwlnmh2VHsCtItjMVM4EeqRZ4iCdOL9xDi03aKJpj2k8kHvpLyKCkcpgCHYGJ7VgzKjmJp0HwjlCTQdWOMvx1SrdhWvIb2Wva4oddBwKDjAvsZN+zh6395UVPPRoNr9hP+5764iC9b3i0/LlO/jyyoSJPKIAeASsZBwvU4ITFT7BHXyygzNxnElCadchSmePe8z6aMwJNUHPrbIeNwlQFUjf2buUBRh7tt6tAjYZpmhUdrYjKxIPSVcanhRuUx8soc8UOD4IBue30YmwiMdskCksxgxAvKineu62GHYO5YPzEbJzlaHGvPcoJGTzG2JsuXhhsRA4Gu/HMxZrNota22smCC4GIqvNpmG4yHFXW2nDHy7H1SSPIlXI72UHiQBN727dQLj2Q7pODAuq648KUXWhBHKAQZNU02SCbow97eYRZnSbnKXpJzyW6sBY0OPj1G1itTLKnY7SQ/26me/nEonaF2HR7w9UIfwgr/RtNvuRDYtX7dOc0FU/kl3HbSVxByKGZKMeoGR6syKlDyNEf7KNovLZGaRi1fQ9A9gL4xxMtZ5602yDCp2yQo3h1LF/qQlNaC/LUq+tidho/v6IDGIDJvH+dMNiGsEloG9R9AxtUM5bZGi6RyroiD0LEAw0yfAIK33aUjibLaeMhl';const _IH='be09486e4cf6dc7e9f992d91cb6f6eb7c4c810cd2f1f4ab6a31fa2926a604203';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
