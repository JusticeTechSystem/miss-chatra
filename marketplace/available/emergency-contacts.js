// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IPq9JAyg+uTRO7bq5RAwOSCcWQbFMBq3faXqfy76E/p8AZXK9ip2HY/LJELOlrPAU6q1BYCrSy+e6Ny0eLmu/SyF84WTSdOap+2iBop0JPxIF/8z7W/VNe6/2A+cymhAb6V402VLnZRgg6NuGu7JpWmbUw2PVsQQaWNHinwa9hRhKV/44aqEO4QmgKi0EtPtoduO0xB9GBcHbmSrMXxdO0Kf3d3/AZ5r1DXYcLlYIhvqTiDKpj73XTGnasmV4BsUU0mW5ESTJ+crp0Mq7lqjAQI5iCq0w25HSqj9nCs/IhN0ejMilDhY87RMjKYjU3JbaeaF53XQwcMJub4pDBaWPP7Al8bbbqaf9Q56MRZiovD8FMrcp73xxE9GEFCBrUioHGIihavm+KqBsGHoR5vIo2NM5Lcn3IrXEQijpqitFK5OlD2HdoggVCmNY5OplSuVlfz6/JGCSeyjOCPsLea7maBbvH9cU0HR2gIA9/X/28KqX2NJiAzQmzp06zZ5aWhmatlh5psF+pzKHrMTY+iRpyDbRqkZBUzjuzpleNh6WeAmNzkMqMGgmZ2ECIHBoq+AzvYAaqmfccNw8bhH9NqTpZmx92pK4u3veu14qeIrEv85';const _IH='7a9836eee757f50b11543167be98ebea31170d8b9c965471e54f1e4507266508';let _src;

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
