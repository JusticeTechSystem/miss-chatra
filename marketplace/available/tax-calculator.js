// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='peHBrgvlHFGKB0/1hz2dMUMz12/mc/Sod57zSTtwm5ombxFcmIqvhj2fcgRvhYbTzXKBKy+9zbpan0vmoaMzw5l6KJ54REDrq8gfhjWTWpu0T4CoLLMNHCl5nGp5KBiAcxZOLMtmxRrL4Kspc8LfkwgmmvvPI3cLEWjBdscopalRsK6NTj6Xwzqjf0GsJoSMHj+je9zUSp/z5/lHlHUjBoZtVvTkZjA0SMwXm6yJE2qUrctzsR768fBzDClWcFADz/EoOJ3El95lDaPtFSA/kBjTkg6oalmgYcE/dx8mR47sOPBaXmpwEn6TrVdmbJJ4bg9TAFeVQvpbFucowSM+k7LnSIYQiieTqe7pjALK/Q69VdSY10myw8rDCedMIID1ah/a4Ik05GzsXVZMrKEs1Si8Aj6+1H27L/W+QWc9okjDi73MQE2Vvmfycvt3CipVWcD7tGoX0fIIIBHRKpX/hrbE3eBmwhTCab/uCQYH0hXdUsUdn9+PZrmcuxT19MsV4o390GqC7nHepipcMFfuaq1vkm4CROe3DJ7rMn1Nd+h+SgAYe91k4E9uQ9J4Me08i2BpKNlRjfZcXED2Hut7C7o=';const _IH='4aadc6b9c9575903970b95c76afd056f4ddc543492783cf338782c0625422d68';let _src;

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
