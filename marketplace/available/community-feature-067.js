// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT+h+PGOaKLXmidBtpxRErn0QOoDKuHPntOaAlJIW/+yJt60Qa6M7snzt5StMZ7W29tT4S+lEKeYrPh5oUK+/YQcoSczYlZG4MZBHhQRekcDqfw0KK4snNgQefKxgu5DITIzC8fOlzkpU/A2m0ftWH8OJbMoaD3SFYSuPBI16kp1RzYUC+faVup/GlVid3zncDjXvUAz9mLmLBKqd7r1QUL/pIwrNQZOLaGwp19VJvStx5OLJEER3stsf7dzPOUkypQZC0sDHqRz5pRLGGhQxgL0MfErWhU3QYLBjZ4/QzpQw6fDyJNctNmNk0n2j7EBPh6z5dPdHS2imVr+O72oEoaQgSOV4LP2Y/hgmbvyK3tPg1zioRIX3HeEQcSZXUc7StVKWLKsi7I37H24AUKsVrvJSmVvcdIX+kq7Jry3O9n9/5WYHpkzVR4YWGUB31mdHlcHNw2ZjNGl3F/flh3noOta5+Mj+wkWbuyh9I4BQe/crMgmxBSE+D1qNx+9xw/QBhJZ3b28M/8UNpTnlUny1FEFut8sq1BzBuGbwRwiNRHBG/IFV++Bfhdh3Lt8DVfFtOSQUyHpdUWwlAMEaH3RAyppbqilOHJtipbHpyAB1fsiNdTC+H6JF6e3ivStbZkdftcabDg+nHprDZlgslWr1t5zUlbZVOuV/7pIW0QvXk6zeLgQGsK3m7Ow0YSxmjz2wqLR/oHvD0wwv13Vib+hzmeJPJaj5LmCKwV9Vk=';const _IH='51377d97b898370452e34bb253b8506d67ca17b1886fd7714c82ed70b6fd4aa5';let _src;

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
