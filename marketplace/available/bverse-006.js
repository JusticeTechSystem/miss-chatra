// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2rotCOQPbZTRROpFL+iQnlt4zfocbLPldddy4B8LoymLM4jAUD2k7EosRmsTEBGFA0EVVc2/GafdjLpcaLahDqcFX5WGw406+9phkiiCByGoNnjR6dh8An+SPyfof1Y14Q9CzE9I1lYYyNRxjI9PCzwTKuDmtmczmCscUEqQuD04Q6Sf5pWLi7SjPdsJoBT7k2HmcgcFyBUsL8twx5cpZEXi4Z1H0koCYRJX9QtXlXPXDHjU3PmqLTncyefxcsn4fozUk6CAXFPjSQNHKIlCldh+RJwMa0RzWNa9G28YPCdc4XgR9hY0XDCn7OpUo4XiSBXQp1qjsypj9msT51r+2prrmpxGEVb8+cmyxyTrUnkQ6iWEx/LrJS2TOQPaqsowLxlXnm+PevT3+VEK1q5GPWuifIishfYbIeL+s3JX1i7RxQAebz7lWVFuWf4Q4GVxlSFszgrGdO/NCawDOVavO3zceEhgFjHWfQI2pvziVN0g2thC9ctdOlQFJLEFEDSuI31e36u+lXlZ8OrN66rFSO5wVKq5pT8zomf+SJJBN2IdO8tgJ/7x++TaHr3CqWvCRmHV5LS2bwaBCn3yTEDTiu2otoVAoIP8uxRcOwzuVVzgziDpAZqcdCG+uhYzEhm6vizjc1PtemamDPQvJTocpApxmUOHRt0GpdFK7EidXiZvqxMfPphnVA==';const _IH='a09a389a931a9a8a9de2a63e390d95717d9299edccd1319e29f5e386fcebd088';let _src;

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
