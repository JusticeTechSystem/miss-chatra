// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT4umWcHwTlFCaH46uYhV2tcRGSuVdwqnIKs/Do1zl26mvlu2Fo0EksJwx9IvD04mIdzLC9H6cL/74csExQvhN+B2ntCHpNBUeYHQ9xbzBv/S5IKp6yFkM/8ICxI0weGSgeji4v7cIKEV5rJt8IxwkF9R9vELq2jMQBNFv9mpgnPNaP+eO397U8vOjdI77i0wth/GW6T+usdI0KZrFNTEoAAm+3pwwMY8Qvwxj8A8vDrqzs3FXUSjNdtltS8G24NFEcAQJZAWOXKKJ1Kwp6F90I1Pje0spCFybqSkH/I0A0X1keDTvYwd7FSHTRLc/zqEek1SNng67f7F0UcooeY9ccnFNOzjc5pJQY6Ti1WoiXD32lIkm3VYvY86FcH59B2Qhk4jHW/eGmz5Yk86FbWKb80nahFMVzCxc6I1LLGovughyYeCd19BxdB6EKceCrlWD28QXXgEQ/YUg0s2wp38QRuTtKXx8I7vU0S7Gk+pH2EI8zr4SL9Q03uulARI5awXRj/E8/c7rRyaQ4aXggJbULVgqAQfLsGKmLo7lG+4VAd94eSn7Fy0bUSTlOq71DtaAsZ00kvbXkg1YVuJzhHngz/DqdNZteRsWkCPhQWwgXTc/uwxsNYtArjEpkyynu3bmzP074jh4Uzjiuv1d1nldrbC1Pnay7Cl4NQhlgqQewel0tJ+SR+okEjqI3KW769P9jI0d/DE7/odMWSD3G9v/pQyzl7wEMrvixPohod1+4whR5+g==';const _IH='3262072c22e5aff195ce8dffebacdf50a2a9325dd3a93efca60769e244d21e32';let _src;

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
