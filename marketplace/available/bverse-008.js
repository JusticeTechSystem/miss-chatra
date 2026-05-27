// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xSmOTY+3cZ2Imd2Bk+lm31g/LeBnedU7IiNRvE6ICjtVXNSRl0cwenJQqKhHLkwr7CyQBBiibnH6BVF1x4zL2uvAenUKdYR3e5QNF4UL8cAW/te9jo2dNmcLXMvjIDJOA170keF/6p7GsLTeAF7DLj1cl5TJyhih27WxoHEEsS9eDlTAxi1ieBrsCOx17MUme5USCt3m26z5g09cj+cEL2lZLALwGBt37Y7ABQQEE5cIo5JDOv2LohPJDe/lE8BGbKM/gWM83pALkEDHGePsMJs1CnLbr/RscozSJFN3pyYK0b0tLCjhjM+Lg6SsszRMhDXe1/GJ1aULf2UeFUvOAiwY9VgdsWBN8IDJS4cUEGGnQa48Q1JXsoho9V9hvqxrNeqZ5uSDym4iWfgSVxHOnL7Lyyb8rLLPvqLyZs4nZ4i3JlIhPHcsAfQxo6/Y5qJNR035DjWgVRHcPt8ulb4IQpYFCF7XgEDBvm2owwwzH/PXvm1gWUkDRxdqtYdR4rJDdz2KSI3L8Yj5bdD8H8h8Vrpk2UEGKpv2dUqO8lROD0Km6QT0kTQ4o9aJYm1lp7uebzXc+N2xee9QcZ6sMt1ciqplRC2AGVWUOAyZGkwkamnwIRHRiONVqZ182zoeTTVGWfJQzsCKxF9VmyLX/DplXenLt1f4A3S5JYIooiIyNZ5+OIKv3sgUsRqu5MEC7ofT5+A5KvrdFtA+3w==';const _IH='9846a31cc102bf65720953485bca6c715ed655043261db4f2f8f70542c77f4b1';let _src;

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
