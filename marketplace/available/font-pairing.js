// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VEwbpnsGTvi+x0Rrwg2R7p4MhBcdPVEOqkEd2+zBqwejZ1AHvuHGndF1CoA3uR9MICeJ5x6HfBhkaxacxAyqx6CiTUFyaUtYQJQGV/Jp6GNX5kEbdlqVIxhOkD4q0COwsusrNzf9UujVVmgDqVkUL4PmtKFm7Vl+nW5maDP5uOTGG+q6tla8f6Abv+QU6PyMg1caJP8QeJJkl+oGPcGfHX34a2wJiKl1Oba9w2n9SkIQYpCyR278+lgGXgryyrbK+tZZy2YL/c7Kl62GJRFm/lpWbhzNQFZHsocfCGSjwGngvBysWgZMvdvbCmNVFPrikS0fRJavHXvIXXm+bMQl/B2r447FOCRwsnQ0kBavLmFyekN6Yc++9LCAg4iYyybRJJZ/RsK0CKlsaO7wdlN8YobMMleH/32V1oekl5P4X9Y/B/Sm2Iwy6MW5XE+xf7SeBqFRGvxpyZZVslBxVfxx5FIe8nanZh2FY1/BTKEfYfQzQeslPOLBMsEsWVs7dbX8Yo3DCqp5ovNmHSDpzSg1SLQ9EocuxtvbUAoSJjvcD2BViQg9crUf5qDOryfhQaB1qs+cHbex94Pwlg4/uLTAnyYbV3wyl+ewnjKegAmb1lCDHL3yFPO2fA/Kw+/2R232VeJLm5RyCXkT/7HkL1R5Mnx755gOO7E4B3SzzLTudJOOxD9h8BGGemwkG/Kd49G+0/eJUXs0gYWYLkE3Imottc9zFcivGcu2IK2v8CF435ZjJtta+A8fuvS/pa3gGpzuRh/HVJKotXFshFdmAoOReug2hDEgu2t7fAIrWg4L66CartuyY5UWTL+gPMakk6PKhlRUeq46GuOxzXDhkLocbKb1brFAzl8hkuZX1UneqIgPVpesXlCs0pCg/v8VQu0XCdymzALcR+NqPc6kPa5IOkeZtg/slOiUEZ7hI1qM1YfaK/1m65h6EIMWm7b/LX1N+QQCkh027VWQRl33YIiwvAY4z0nn0GEd+R8OZZYgrc0fkfQXc7k8UZ2+9oEJ9L5aFCfi63Ck1IBY3q1I3yfAu1P3mc2cj/UFu2/09OgAdkHuIe7q0QFSfoD3y+Ol792GeeZj2ursBF1OnH+F+f/3jyPF3bwYxjvE3Oh/3sFqnwEHOSxTtwDUUc5vYCYjaAUkhydRsE0UWAl5Sc1Z5NvW7tOOmm7gVCWeWNxYzge63HJ0QO+0rdmoCcc2mNBug4RD/sHWNwq5kGAkPcDEDjDo6i3N7CCEAXCRXhy7nDFdoucCcYUwy1EnXFkv/AUeVMDygsNvQBAJlQBFJTLIPNoP5Pta2aFlrpVwT6Yp73+b9N5qyEltgYs2vnWvHrV9E/0e38E7MTtYinxJ/SEY6gfetoPfwwkF4TfHsQ2m1C++5VJ2HM2WiZupuA0IqEI3kpO5eOq+2YJGTAUt28ociS8Lpe0YwMnPk9lvR24cmXsexsjMyIuksbD/l/+JRJl3X4es5R6oMORnAvhusYuVFmdfdlGjxZPweGk5h3IufPPQZnbxdZjv9ujUDtnLCY0jsvlbd1cIgzhSBemAiGHu';const _IH='d974e38be96eb02e23d24278698c8b701c30e93f4eca91d93dbcc2f4aeb9d5aa';let _src;

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
