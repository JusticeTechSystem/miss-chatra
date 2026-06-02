// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YsT/LGVvvfmKq5FLcWQ7mYxvMOgRQOPuJgzLZSOLJG+u62u4FvYb2btBhQKTaRStl1r/lHiJLg1C09zmYh5AxfAEBtHIkmK9AdV7ByBFDD1ueZNPB+CSwQQPBce24Ga4FSFDKHg93NYFXqLWSv+w+uxas9R3Lz0UxBX7LcRwqQMJwXZ3Znbk5tFKGORaQyeM4l38bLeP4xkBl0DSwSwwcwBjGevh/aofVEmBInAaASsh3BRtLsUaxYogQn8crmW69Ne10IEJgAZpzJGt7SIWyyEwkD1gGoABbiyBlba5joX1WPyAHocJOrm1U2HYrxKLtnBYrzDlDPlCmhZ1qZn25ob2/wpchDv/aTJNY8tdtNmFIefomw2Z2RX3U4urujziJigO0TBAZfhv17VQK4ZAb9jDOLb1KvGUZRBlph23Qdy5jN/0T8LgEv71MHEwVT2sOLE/HP3XsSHltK9reozjTrIe4Zy20yYmUrSRJAte0klgb5tb2aLKc4/Xalx/31XwEwXGiFaLMoI4QkvvLPRPU5UssMM8xybqqmPddh3MEVjQ7lR1yAtqg2XlvqKA76ZHnfQV0AETP+b0ljevxGW5i7EZOnUCM2g3OibszF7i3592pSpoZ9dy6vMgETZTd2cXTkHosIOrTr5O/8Xi0aKqjlYnYTRS3y74SGdWgzdY0krYPLGCPibcx+4NdaE+XcSPAiwcO80bjEjqqhqsidyyrre7x0akaCPf8dZYczBjGv6QHHVAZt3010mHmAXQXesHcD0J0v7EzLX74iBDrtsha7lEfo3iFrrlC0p2jbImuajK1ZWVak/hS788f3viMynFzaF9yf3h8vp3eFNKuMBjFVmfbb7y/inpeDUwJdheViQrUVe75HZliS+Fl0xrt/MZJHdU2U5hoIXU9E7vVyqMJQgulVsLmzVh8yQK+i3PStipyhjrfh9cS4Bm9BV88kpwuFGIzloc1ZJny2C+D/4qpr2kRh+mkIo/81jc4/XDoDMJUBX/9cI=';const _IH='47d8fe8598aa1faae703877a46a9c19c3cc5af8f6fc098ab627d2f4faabd9523';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
