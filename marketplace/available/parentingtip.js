// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2D9h6juPJguI1nY1t70hA7g5Tla2S3eV6fY31i987T4MU768Cg0CXGYyMRPtyDfZ6+98DE2XHev+Lr2vIlqHm7cGOqCOXWGGD6Fx8Q6Y+yhMVn72JP3tsgfi2kDlHUzeNxWWsodlGjqVjh06fufTdbVoI8jLoflC9LGwJ4iXeQYD4syMO/ztfqG4+atzbLLxcFE7+Cs0zap1kZFAlDQf/ZOyVUBhBpBKx4siydd6+kpuPh5O18Cf7JDvErcK0s0j09XgTp+ZPsj3Udck3nn+QlNdm1wrifjTOKS55CDFs1PkQiBlKsaz7Uhnfc6EoHjauvVKhth2BtoHWNmYn3SLJaAdr35NMXk4fMy+tQl4Z+HGeJwUNjLykDZSl0evEaeejQC172E9583Nrto/Z4cbE9ZA7GCG1SDYVAvA/fpiQd7L94gc+G8vMN+xZR/+htHAMhlOPoA3jmNf1iAPr0YaDm7cDt2WYfcNYKJZfdERFT825D5+6ZkOQV2KltSQQuBlG6QZ6ByT4c85vE+QE0q+x7iQlPVM9q0YkWr0zvxneh9nE5Mc2ZZakZpd2I4Gxl6Sj4AfeyJ0tOHlu3wQt+JRixzp9FmDjRSNBhHd9uPWoWNTy4LvKwp1IqaSZz4JfdGH4O0IV44wHiEFDgfCsAWhfBsMSeUuyTLsRWXesrqM3S89Y2NvezqqZ4pZTESddZuvm920xanCl69l6bjGZKdb79N1UJhmmEMr1gy7qsYp/tS6FBJQ3bb61QMsgihxsdbjnzvOZc5mJugEIZ2y7/s0qPM4+dlcDbKU2mIoLA3BB1FGN/gTp8h0Ia5Zps2u1GWBBtb/qIY0+RBgI0quT0ikzWEB4KuQRaXVzTJ50M8wmUzZ3T7uyCy821tc2gkuujjF3j9MSPH2MNHpeV6lBghCV036enCyfNEQKqLENgeapXZqlTkQ4gA3FaMdVM2m20/Ee3bAdPe1Y5Apo1TKtSLeDOIwej+u2PD4d0vLXBj9ou4Oj6SWLeC306x1t6j4HQm0Wmb2g/dfa5irfujmPCrvv6zbOu2dEF1/VtQp79NoRgJ5eiDOm1mWpTEO88q99YEINfPFmkyDvQTEi38G4mRynHbTE4Vhh3mIvRQmDY4Ge8VKjFAcQ88wb8GCLUgJe0e+Ob4UckhGtvP12HHwq4YxHR9Axe05MGNxKH63Rj5DMV0OMRatuzLgy0U0HpTcfgnJaSDip0Yi8Q==';const _IH='0d4d60fac59241abd2251524463f42bc951c95d6732cb00a7e2e2218b6c4497a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
