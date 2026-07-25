// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTVHChfF/5GLfPeTWV+YeYXv5U4VzDp5HGTnHEWEe0f64Va+BBlvMtkSwQEfbD4ArC5hiJmVO5AKC8SwrcWY+zEE/gPWIPGTcn3L/US/ve0Vt2Cy9SynF99MeEK45Hqgs5aEujcteVUeJo/cc/y+c1L5cfxNby6AZoiKOuJKuwKdJtn0Xq6U8V7nGjijTLs0gWIOiGgKPw1YGxBezTiZn04MBUJGL6s71z0YEXY0AEVE9+lkZ/CLQ2F610GlyZ7+vatBUe+ibiVrYsZEAvD8uJBPEtjYfDHXkXA1wCmb9YO59jV51akaFSfQzBcJTja/fTmNP6S8BAbufV8Ceqc9B5yvl2ArqF1mV1nf+E9BTDgq6ufY3GWhS8u6dbUGrLgb8w4dnwO+604SWI1iVK/5M3mzZzzRQAxHebT2QatZkNbvcFEn77QR9N/8+VjjWZaORaJOvo27kQS3F6DE7Io2iwkNGfO/VUtp+PJ85tVhR3goVEqaw018uggrhPTBI6qzxHDnOqTo3E5aRpwHhnoi+Fj+euN+CyyCQQ235xgFQSQq71Swpj/G6rEfdLmEi70bgEPuXUHOxlShcFqcG6XrpAi4cCn0KHUuAaaJfgucw4fJVS34+Ho7tfU40QFrQtmvu6J8dvL89IUs/LG9HT2c6HC+uZe8YAt+toTYLHiZyhWZf2TAP1vXYKHr0t3NPUbPHsmZl4VO9M2+pBGHRtwPBfSqjRtbRPnJjs=';const _IH='b4023e47a769e47d19a0ac900e06ea885051e0fdeedbe49e890c2e3c4aabc2f5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
