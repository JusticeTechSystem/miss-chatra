// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRx7wW/MjS9iXhjj+OYe5dcQ1ln062Dk5DjfnkjsRQV/up95ymWMLF1/ZWaAEScfrvaQo13E78gkKkwNVMScqV5Sty5shIqyvmprIKeKaTjDGXlQpcOxha3BsC811uZdIkyXCcyXOKrbGiI7VyGYt2wQt1RO6FMWWzcGDFy2ZOqqkBkYQiQH7zU2XZ485oWpXPnol5GK7egmdIatLjYYbyBnML1aG3r6usk7HKb/iDNY7fWQ5DZtFNiEAwksfNfyYeBPcrDG37JhggQMHKRyvPA3pkxIEuP2Lu7wYyyELaHun2Tt/VH5lH3yumBvhfgCbMMErhdQC3LGgcUmtOLprik8l0vDAXAerQo8pssMxQZc6GkDB3mF8kBWIa2GXZ5Y/M+4kX/6eW49toGvL72sLbjFNaS7HbhmDMU2UDQ1Kr9qg/nD7SUg6QjQR1ip3JC2u4cmu0q/AL72OfV2zUl/ElxmyTt+Ho2wbfF0X02endqT7D1MpB4P4yhyiecr3mkuzImxqr4doe+9vjAR4YsMLuherr2HPebuCG12bHDbKXUfSOJ2IKAotxBsTzYURTc3sTYMp4+ehoZilPda2vdMjiv8A2LJgWiShFPhDwpATp7NVxU1g6aVoqpD2qeAxEczw4YVkpVp+Kap8454vyomuh/mo6H7YjOS7jDwU2KKb8Z0T53wRkHYYwgI7eesVYcHuXqq4YeW6gDW0YWXaXrzUZ/n7YHP5DF88sRQywT5bZFY/zwQI1nRSPtydIWVZzcz5Mc/rngx7j227ZiZ/ToZtQztHeyxcz9qVZ1lPdufZGSgWERmU4zGel7+bBg7XkBITOKsKbsybxfMvBu3lSPqC7oWQFnfprk0WaoVY4yYa6XgF0YfHGUivdDBPtX20/2PN8z0VddJNRfB8ytwbLade5J599h4VlSKC1L8EUCWul4mTRFDKWtWxgvoC9848DcSSKWLpAcl+Niky4qPVgqzQYsvu08VEgqBcpUGB/hbM8C6MMBqOei16X+Qa/Dr3YMsExEHifeF/06C4zPf/g5HGZuEefwRQnYqkJVOM3796aTL3KGCiW3JGGtCk0c+KgTn4tLiwSJHTUuv0l+yotiCcifkCo86KpdDyvllGcbBaF2/5C5uLZnxa3phWu85eV0aecwg4Ksk+zvPKyxCxBCiRf3ckvCo54Q4U65GUar2A7QI9A=';const _IH='dfe49585168c2097858668bbfabaa7d7397c5f93a386f45825b401c8693e230d';let _src;

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
