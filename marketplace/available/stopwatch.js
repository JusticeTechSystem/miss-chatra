// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kmglmDnQxHp39Ha/+Y09Y7dPp40c7pVMk8yOkkV+0OlTHzeCgI76rfo3CJh3I8In+9hidVFuwoCeTuSgNR0scuv2aeBDjlPQ3i4quL1Fbq6abucrEkelr1xflAAbcJkNlN2vndqkVF45Drkr9m4R93l7mfCjVxhMe22LPtIsTITWDs1ShJdDo2AKAIkde8Hx4wBztHLqCA5w4is2rik9cS9X0rRCLlPVrNp/uqSBFhnh+DhAaW/Qy0WdtItp8oZHOfpp3iTxDQ7tr2GUtF/ERkEj3k6MTs2HeiSbEu+NR7wvure4YJDrXuoLZPmnVzfaTICbtWupThnWVtmpdBCsa7HUtHTefaHExT8cTDQUcTeyocgzLtqYutpBbeTPcTXdDEp5d3Ax6M15gwivAufXZEpV+NGclrbEPfJucTnS50MoFRjnabEkn3S8fLW6+ZTkaLmRxp+8UN2t0CkPs7QZ0ysv9hekp5M6eajJ6/+lQOd/eKrm7zhdlUSv5/w297yGR8h4cVhFiy0wcsXgvbenovtRqRidZ+fUPYlwre2v8fo0WE/R+il7hGOx3S5rQ+h/RmgjLV7M0Q==';const _IH='03cd7fdf3cefce2e5812f47474156b070d689269d2d8efe3c33b18ffe8ac880e';let _src;

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
