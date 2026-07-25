// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSITzP8iYOmqeHLPacZ80Ibmn0CK3+mWSPjH8slTon8MOp9A4Q22dT7NVFNHasr2NrUhAr3sKXPaeGyj+3UwzgnMHtZEbaV+bkH8NzcBqiyT1vacUohl8V+sCu7Ze21yM1/4lWvM9/QZqMWu+N4VK/wHTZuRhux0EKguPZ8U4pQ9bXhazJ4WaciH/wooGDYTJ0E1gfhxi+eiFr8Dnw9u2KJKTpEgUx4zDdew63kvunekkPeENtDIrPsIlXR0+cHrm4D95Kfd4EfDrH4WYoJKswifEIjptRJaL2vQmn+M7xhO+Z0YyAzN5HWiCw+AE5bFThaYPdykZl52A+/iAmLGIBIlSoe0jxCDn/pUOTFy8cLWRgHhTj0l1v2pKDMiUzSm4ScTTUTSEz3+u4JQf69YggpRqim1hpfhud8oLUpZJwad+HUXZBZxcohwaiiTOPgPqcDsGQ/WeQE2jD29nz5bjVggOMm0V9+6LQhvH0sSaFkuQtOvg2J3RbysjHoOv4lGQbzAuOOvkifOWDYC12dDDm739JCj/ZvW9zmLev82ztms7Krjqoz4eO98C7nk3x9Hjtkg4nxkX7JGYvQwf9HgNScMRwkkg334+BuFq67WEjvL3/Ycx52Ule+7hpgD8NAv2fFB8mHWrtQ/LtBcNsrWFA=';const _IH='557a4de3f88947c570fcb6c4351d3aeb6ce393a8ec06ae009105548b0c74d69f';let _src;

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
