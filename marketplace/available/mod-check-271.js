// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTZUH8wQv42FWpkndQB8L9z6q9baEIBFELYDYfUMB54Y78n5J6elTEAXo99BSdqwT1YqYHP8u+7clxgNOL+vjhLAGSt//PgmfICv3XcrXZy0kAQern9x/ikyL0OquxqFLV32l64ae707qTmAFMhXVEk/Qkyspob76aByrZlvVjLlVGWlI0S7lDrjX87SLlnS/gwCmLHpV4hljhO8paW2BaUBinuGtnvSc8SjZhs8qVb5aLra428t0yFHFp5sbDT+29sPy23B4LkwXj/G53D/FhqXA0yYyDgmgkXI+gFMpIVWMP8ViV+2UIE7lwPmP3IA+R+IlrxWxvwQ4FEVGG2qMO4U8/5szzuxJvGMgHX02/WVaU1iRnOLDQZ4vyUFMgti4AmIbGXLFI1iv7hHBvubovXPTQ++hePs+ltje23gGARNiKKv19wdeJn/hegym9D6IR+B8YB2FW79EdPtkSkFC+XsTB7E56AsSUmvbo7K08THosydxfuNea11JHej4qKVcBqlem6fXMQQDclyR+Hpv4Th576m/09bd1SSJVMH74c9WgAttUQ8yw9yq1hqlvisSLkCTZSwyhAAMdpOLxDJoTaj5+vWBNRZ243WFwiKCXUF74blJShCFmKO9HRqjLVmX6QolgX/y0EZj6mFrkFHRACOgX6Fg4AG+cSMked7OCwNWaF0d1uzXj/U6/+cioBlRzxN87AUjp00HLRSnNMIaMhmRU3pempKjsEluoKLAASTTDtRDlWW8xz1A+lZTTaAdw3Efycv3wt6x7ac7r9HTAg6MJBRifgdFfjAM4SPJixcICwaQbOUC1opFvGS0B4vp2EckRmcCoeem39gdweZVNom0Y3kcjmWEgzpzH7J6cIB/DmyODaIq9GeJ9wzx5nQekO3Z36GbcfMd25aPKbY2nSUKNxeExgifRWglHO1LNpLYjapmLW7srRBP7zaMkqr+wBGD1npx/djgqGZM+B7490kW8DVMG+q41CFIgGCTyXW56aF4Cqy8R7JmhLDUQlObzKu4jxETE13QDYb+dLRmXcFFsjbuN2OQ/7rINr+iBcEgvJBVI1y6LFPrLccyy58PMxf6+EqyPRHJtn1WfgA/P0DjuclT5SYg4veFMAMk0GD+6I+hHnac+zQi7a08tY6wCbf9ofCRXsOUPPsphd3mIclWLcwGUb9URvQlCyDu0cMx1cA8YBV7DuQ6aAbGuZav8NKKt+QPndm7PX5/64V2VbrIm1dOHAoznNo/GRztA/lY9XU0jUx3Qic8/KZA+JB2LEZ/8lHNgfWf8KMQAJR6rGHvn7RKpdp4ZFMGs7/8tU1t4lyv/BSk8QCRZU+f66YKLEOIWX1uTb6Co7P4FXvlDO2qIH8IaCru4MfMRHVmg=';const _IH='c1dccd43471105ad65443a946a7698367ed5c280571bd9837b143ccbe0e11159';let _src;

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
