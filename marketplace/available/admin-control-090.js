// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iGPNQ+uvZmk+O6KRVMfgzpM9MZq+qiS8bYcBPBUVbAvAQ9lcxGoe91+yQtOLYY3U4YaPqcbvHQO6yDyhUmmgUZSZIRuE8/EhPA8VxA4eRknLbrMiZgOTcyZAwKu9qOV+mC/Vfk3e2IPtkmcYCXbD8K9owoS2Ee7TGMl3ojF0hu29tcgRi6VYmIc1T5TFF+A8Ofih8aCJ2MXW0IUd4xVcUi7cI6C2I1FExg2qszAUQMLHWRSimdCejt4fDnrjKGZsBJoTgakXuGkgq3Ak74RtQSLFA+GiCH3zC4Dr7dVkhIOJZR1KI2+MO22aQoDDpI5pyyYfThi9OrdcUY7rksX3QyRpQ1Jhh9PF88duHYjTW334pKmsR3EyHRExl7ga/fuqPa1LMoRzq3TMPqw25vChjEKWMfT6qGQGvDmgFExIrgsmTTZh/y7bS1ZRcQ9QrH6Foz7To3+rid4c4NQRg0oErjwxWBBDH3cWkTNgyiE/t+f/gGmZ0OlQnOYeBxLjyk1PM8SO4r0vCht3fwHVl8mr2SFBtCEEgtHJZZ0xAWCdEpYn7BeVPgLVyQB0GQkbeAxVTy5GQlix0gSNB0/lNVQujVtDn+3ll2BkGucjNtZndt1DfYmsgBAgg/RQDjiGPwV1f6xhb1Tw1HWUgLd/GJhtCOdJpsg4+LBB4efGr/OzfM848dPgJUd3bUtpdzWvyigqg89W3+ymMJBwlMniC4Yg301luNDXeq16MjMoUFmBEq6oSvWF3fhBsH/PkX13P+sEjnnnWYQVkUXmZAZgIsYq0kALuKkKbh+JJeXEMsYZeS/wOoSL3fbciN0O5/20nADnmp57ERy/GNDSjsIVg6t2MTnJVGFWXhbXtEic0/UPVjvC1LFVSdOMTx+r2JAAOZhXCC+F0GaV5640/Vxi6Ie26UU33EPHBu6z+6PXwLDSV6gmX46NfZufSCO/aByZg5gHO3iFY3x3TBzDMSkNzG0rtiLm+d2MdHOf/530YOPu1Ccr2TEfhF4QFQ/6DPbaIo/6Y9inww==';const _IH='0e7c43d7b2263a124af071ef6f064a40b0f23e9f1862f065412babb9be858e73';let _src;

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
