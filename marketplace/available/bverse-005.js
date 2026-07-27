// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQHYEhgpBTwqfgXqoTwlzM+oSYzYlUEHSg3aAoWmHFtgrTGXmvbKWU3vKsowsRrP1HVxltV3065nzw/xvuHlki4NwtoIDzStfe3aBx5pOKuUOi26oXwQpZgWlXiVVPvJ77EAKr7sYYPItVZ/9yiQn/5KcLZSUGFwoeYXJvLCS46PO7jd7CN08gbvrw3YiCFimSuidn731H6yHSGrabO5RlViMmkNWN3qSsErSNSa6ex+XZXDu0NJkllYaz85aZiChZgT3yPZPrd9o8lHHqKcZU09aTcE2DlqLcWFO1heleWFu4Y5cwp1euxrZhGWwZaZ5EizauLYA+VM9MdtDO6oxCv12OrF5Xow3h2aGFDDgJ5tVATVVVJ/I29XnOgTGmd3FUX9g/WVnkNuvJIz/7ZOfQKDyod2rloykGMDXRs8/eHjxlR+LV6IC6j5gkfEd1uIVvhFGtNiMsYSOPnv775k7sYcaDPcht1OGvnI24TaUDwj71Du8TcdRCQjhX19fWR4lwCDjOasYN6WY5YGdi+WvVwHpbhXlAkd+FUbzGYsGav9CiTVBcmuTbFCsdGXwyTk8n6Ss1gu1kGyohZTPSeEhh0PpjhuIn5ECfrFcgAQ1IA4Tl8efDjRPjJV9DBh7KoHfCTNV+IQl5jftcjcmt/zP/riBdmmx/fcLYNCs58eoPqOCdaFENe/V6vp+9fXwjPQu8=';const _IH='3f41578cfd694eb37c49cb090154cd7eada70e628eff04c70616cef9bcf8dbb1';let _src;

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
