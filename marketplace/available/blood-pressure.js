// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSGP/05xHoskdWh4CShIcjny1ZgF9+KTZT+189LifAqjCNKiOHHU22KH25lOdwCsvbY8mCIlj5S513Q1Wi2A8HJoJ8Gx8hG+cD2G06GeFuzZuGAkjGHTvuupx+R/iMUPybLVq1guUNFDnT6+3M1AGLDIOZs6mzgm0DOtroGC8ZaxvB6+p7Zoidp0xPqewR+ch5gfVRwE3EX3sgJJQCzkvQLCKdsncP0WLcyGOYvmuvIiBlofFqsLw+RBqcjk2zlMqdDOOuxi2JIjeYHoEqFlH/ZNKPts0B+KEaMUylZIXnHxjpVLwNs/OdcDDwQjlubIBqSCqjL7WUkS38aSR81rsRFA6SKo3IvaaCMr+guPzYFUZm3EaPjtqPXtUf7FhofkZn6fl+Z85aN4hpfMTvuqoiT8SmIghXzxsXL5K5Qz/kkon2Cq3u7FlWXzRpmZt0980OGUUMSnlIhYkcLJ5Q2YOlsgdtF5/opzsQuZCRIV2FZBZaEcUs5YGbxkdxdCJFHFjgolXQ7pUzrL9H4sIdECd29JcW/whBk2olUYw54r8vq2RrTksTKMXzZgPoNmygyJIImLsCpXet8NpS8Lmshy/SY80mMX0Gw5hjCbAI0pznXkr+JhrrGFxItB4qHwGiuYdlKoLe8cMSRHYbSjGEEncEU2dScBS8abSig2EUFHWEbBZqGytwUPGJJhyf02AxaxIMip9MaVaHD3m0So5s7OFor9f3ZgM/ilBC3VE64f74EhaUZIPOszcIqrORP59xkAot4bhzuckzrABzZfzwIyvz5J8ZCqNNyML/KQ+Z+3woT7VwoaPrW/Gbja92eagSkAO3JQ1HY43xOIR38d4pj1dMcxrvLgjWUjd58UxUWSgRwGdSI97/o7F2PxJ+wxtkNYJRgM0AKN3Rh4mmRoFXhfHOKQPgiexg2Jk58w4ZdzDBiTXOq7/eGZ9Lcblr7CB3dle9Xwwt/eFma24RJbCgwgGenzHR9vFykkSI1I99LROCbQLu192vnS9dphCjfkGAd/OTaLpyK3BI38CgGc2VcZ5yMtZ3a4cysadRq0bXCGaM4WwipFr830MkD/P/WF3dwlMgDb5L2sF0GhCstcz0WAvZ230G3XQ6WZY3AtW4cNtkayCDlXEncVpcba5czfYeNVmvAQzQ8lRfyLhPFvyoXEFIkeC0+yv9qvyTK8q49L+JXt2qD7PSbitWUEyNt8aD/dwpRZTm0LinDrUIlKjZvyHAGTWozMbqEWuMsokE6ShlDAFe/DjU8MYpvLrTqVVGwukR9mBh97HJCVXkOxa5CHrcB4G4z27NRc+lk7F2pIcpQXpAEp+mMyzrRpvfNK0xjsMWxugfvEQe6FG6C1EmdKLAzMf2Cd2uvXz6uwTLGrYHXwsTpYmjmMy166FrI5Q0EwqijSCmWar1EipICs82PCwgJY/2iJdUcqzyrZdM3mb8CxDq/OeVvm9r/ypYeQeCnvoS2/gvSBCpJGSNAgAwRAi0WMaNCv1Sw0jcdb0go8IbF1mvrXxrSVHCWrcQfkddPxC4/Cmvp3to8MRDp21zROb+nhDYxo2a8gnfkihyOvWsuqRibbC5da8SbEsDNQVDN';const _IH='f8f6e7a84ae200aa14742364f8c20811248c13bade7ac31cca83b04a6e8e417b';let _src;

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
