// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRmeog5pkpXRoCqeBx7b7ecQFPFyDAvK4xxqkVxerM2eL8/+99IFJu8SUg1aRY0HLPlKiZkxHgfTsk5UghQbSDWYAdX/XBfz/qMAxgfUhSlYD8BPIn6U8d8amZgv3SjDdlW2w0yajzkIGbpT0G2UM4EDiGlYDJXNVsEOUicUWwX3KacjJ33QsLplT6/wg5LdBjYaa0NxiVgHRVwwGDp94IQZhyMIMDhDSfQ6wBKxxmX8ojDbMd6L0rQCQ/hX/cokD66c8ztd7b4ezfDCzFVG4/fLYLwLiBK2hk814Zxlmic6rwHxLvr+q9/nKB2tu/YX1sQdO3/6+HcOsaliBlBs3sUrSmk7YaPEIy1BtZQgD2AjCY7p9KVDhM+6dGc1YJUmkVPrD/xPHnus3mvTFEJJjXpQvsjtnHItUnc3KJUKMwBAGAvV6fCRcDvOGBvy/11WDgVSIft9OS0L4/ZuzFSKzLYogrxCBx69TSZOxUPIhlxXMIXUSwkh1sDBP4asNc27ZglFWSGQkq1DcG0L+BmisWVVoEA0XoR8fTwIAXV7hjrm7sgOjtm57qkRVTC+24P7Q8umh0ss0VZ1SMxpPpQcaSEcsDQ/MjDn2MSqr3T+HymZJ5OnZK1onXplPuh2jK0lxLrvD83xRP/ftAIzy9IRQ0i9y1ZBbnXDPx7mf22/C/kkSrkCCBSPLK+JSt9KNlsi77CBW7BlAI9+bZDtoScJoVE2lcrk/1lGWecLDIlRdmwUhjtIhCk7k5KjTBLA+MXHTNbtIji1CwvOxcQe2sPoKHFthCoDGE7V0ewAnqz5RH6wDsBuYUapmeQHcY0tQy5UpBC6Zg4w1aUfR47I/H3wMgCX8civWAFk/xXFiC/5xYLy/mNeTK14advC4zXxdhgv3o4S50DZweFKNO6EVgnWhKYlbYzb+5sAUOrkFggX8alC0GdeDLr6K834EGRkynpxEhxrVD4IazVYTHT76tNH+MhQXMx0Q1nKUx8W1sAcZd4+Gz0Rs0ThRJctOjVRqFX+R3pP4V7ixHkfjaNdJ4eK7fvlJSbsWLCm6tHWo2vlkzTI3xmqXiXI7QEBH2iYiJTg5svSq7oUv2pkXWu+V7DlsXPOJdCCUzB8dVnolS87l/S4cfO1lG5ewPBS7m8GiVWJ72tOQwy5lb/+LAoxhvAVPwBn80iF0iVrpEdvg1obDkgztvLaEteGFu6D3ZRzZmaca7NW6Rc/SmBTq62QxTu2Po0HcjOM7yHGM0kcFLKiXBXLYlYcwq3oflF57o6RWCbr+V4Kko5HUVQyckmr9IvutKyPDkeESIdwoeamkMuPJj5WAdILQ3+8OiL50FL7iZ6quqp/vyCcjbF7mk7zZdORN5VQmwz4OUqlNkuBJv/cpsufnJK3jCS0O/P';const _IH='01599d343df6629ef2f8804d692b821e9cf1154971d450b77d087b27c99d86bd';let _src;

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
