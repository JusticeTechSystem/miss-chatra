// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XQmbFe9c+KTQerTl2caeZ91JEHVQ89iiFLLqG3WfvqIy/pAbvvqNnrH5XzlWF7K7cgHaVL4lAFaPBQwRFv9m71WdA2UmLyNm2lsgu9RMIZ2Xf+xYEQ6F/C7k464fT7JLxiTo0DG9dhzuWFkIQoyEnfwtgIuh+r+UUgf69a3g1RCkD796WE5mKyxRC9YFkn5S/r6NTmxdRc9NmzuBglLvLhfqzPk73XVKMxNgP4o4q2/TPDdEbZ4/4pqWurcI2blWxXzivNb4VaZZcMxLSdSM1RnaCC7QDRv7uVHMrL2Vhucuajj2E4ofjXFObw758MdTIUom/9q5R/i8uDrJ4DNly4sOV9iI0Njh46Mmv+Jq5ilLsY+LxI7MP7FKpDGAQyDWji9iJQ/UAsF8aZ9tSXB2rsAkg1q59RMbjOD5UKXwPMsYhMfX9YERUdWZJIGBJndiRh8IwVaT+FRxeEkGk9HrTPw2Usc49ycOByoPbWIgKT17I5QqlK8h/VkQfiADVER5ZGvPs3YsN5n01+mJgDYVQcLXTzF8aWsYg1MX1eK4PfiytOBierGJ+9c8GoaMDxFxtEdvFuQCrky40aIwcL/CsNLSe0xXCfshi0sxFRYOuo0STRO3UO4mr2sqSFdq9se8XYQ+rOn7pVDQPl4RopUfVdSLcXbhqRnsxzNSJ4bbSA2yOuXbPnvcnpQ+6pIA/J41YP7BU4IJ8oh99mu3ErIrPD2zxr70yiTe';const _IH='ddb617562bb2230a8125e753d8181e891b4caf3ecc06a8277ad5e59dec954b10';let _src;

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
