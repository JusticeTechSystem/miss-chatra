// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9K9bBMoPPpOdl2xxV1E2zEYzsrxBKiMzLorKH6fd5s6Vp1UOB6o3iZffirQXF/Jdplz+6RzkcXgymZFjuZfmgqIC/Blh/VHQSAgTX/HeXB8+JK0etF2QgjR7BA4u/HQoJRu7mDyKoGW79wQLYOnPmep6vdQGAyx9pSYc/iQttSvUKaYH8ydsWtbkiT6Ba7DtD02QLDGN0CTQXT2Ke+/hoM/IsiGyosSguqoOybLx+S9023AAv5L6sg25xfHHyKgyxm8u3hmV8xc77yk6EdKBlJBe8CpneejFTwvB7O+QvR3f0BiUtmW0kMFJvjGC5bZYGBZn5Je2Q5XWvAucJ2RkpmFLUvs6EGf+MmT6JGrm/7kU4rhRh2Q1PkGYE0lSuhSBhCoU5hKuLbOOnO1X/A4xiK/2kVEQpC/qDwSsCnujqQkAorp7EKMEb0DTQv5T2Od20GurR5eQ2viHinUUxqoYM3O7LG03KzsJAmW9AN7suwQe6Xuv7qJrhRuFSMJ5L+wArSa5BGerNilWNFD3CW9XSlRHl2uK6x2krdb65fFPafmpO2HXnVGN0P8j6E5pYURmOBNpLzcR/TyWnPBKe+qjECxYJucyMssucLi8c5urK+P+t/dL9gK/k+b4KPHDBHBsIQeoEKQ9zJWcWYC9kLrHaOgZ4Qfe53rytKJTogRkxlQjjC0m/WReeLhSL0SmEdw36oPuZMNJ7hRl8TuDaRE+zqK02lQA2g1gdr/lnBqEARbUYHmTT3ZTWbMryjw9CJvom3NEgiAVB5BNaeEuFv7ZuMzRnRJejdouqcY8Yx6R4p+W8nL0NHSPE20vb13wZa6rxu1vpHmNn2pGJ6b1eqc/RrbTbaJKMHAGnYU6hRtuheu8/pIYGe1NYJ2MtGA3yCzhCmxwRtTkB5UEhdnc74Id+6zHVU6V1lezHSkdJhmCdOgxLbiIFe/+RPWMRGUheggzsOKbIRYMe6V0pKDtRJ8lj3VJTgf86IMz3G0PRQ==';const _IH='19da60711a64f77a8c168cc9f5edaac995641cddded1d27c3d2a6c4c10039c74';let _src;

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
