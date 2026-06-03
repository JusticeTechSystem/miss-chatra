// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZNaMwAn1UaAEVue9s697xw3TyjYkmjFzOJzNGZyMTsHnoyNN8dQuwd1l+lysYyAXXRMZomHW8I/YkupGpRAGEojzYbqFykAd4bz6KYKalctqz2HOBurkzlfOZVOLmdmk+s8XQkWNaZCnuWVVRNp6RaRm/fngiAzKHIkaWOmSkdhA6W0lx04Vn3nY64X54hs0qa8rniDzngRHZNxDml/QUKCWNr3Vg0h2LkTHZ72CT+4E9GNSmjqWeV+78YpAoRd+sIkyiqm91BO3ewZICvA0tW4MNYA2L3TNJCRZnfyXDOUPeneDIHyt4k68GZWErN7PRupDODcy6Ls7fAt4kDFWpAGA9pOXtE0R15q+TpLGx3RCctPgVRCPYO3A7TYS9T0l0aLwtbiOP5+XsLCs0ovDaRBX+pd1AojkI1fqAgSDnmoFysQiFThexDSmJRv63B9Xl/ibEgqB+51raZBUDfgZVyYeOZN98ouJuyLtiaDg1I6NxF1Gpz3NUKdkQ/YFWwXPCOO8ZxGzSMM/2nb+Wgpj5b8E+6O6JiWBB7SORsca8c4DREaXSRURpHWuq0ny/ETRtMENl1UyrVM/s14NLTWI69kyGwrvy3Xl0mbgz1VZOV4YtXpmyBJAIsNFvUp0AmxMIGuR7pJfloxBofRXc6BWRci9ckyDkxZVkL9THamVXnk9HGUGJj6JDQakFiNoI8Xxlk8xNqd+nhuP6VeI620alZDSxyOwqtD6a/4USpIPSwq3u2p/qUVszDHU';const _IH='0fd4883f4d3812027889361d24c008870c6ef4e71f2f299b554ef0a16f4f51c6';let _src;

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
