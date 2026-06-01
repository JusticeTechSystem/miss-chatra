// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:56 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ88g5vFks2iH4QAmQtXmRmCeF2DlQpv97lBL7FF7JlHVDMa6huTvI0UJyZae9AxxfcTYY+uixMngKgQOIDc1cRigV2VR4qe2lnCyXC55YsSZ/CaQyenkP14eee62RGFeP2+4a9BIk5XoHYMEYRtOj44zUGnRE4SitU9cGz1nKba7vtnh6kVm36/O+maXCpH+EcQabe03WFbayyaDkQhGk8LsJNVjLx8IVde9ZA+UmVxJBD2VKDWEH+OZDE7jUSdEXdS92dMwWap9IAUHNhc9rqKXW7uPFY9JvRceRgVf6wIDUXtLkIGEu/56+Bt98Y4j4O2WGGcG2F3wLm+olK8O5vlvzewua4WX1Aho+i7fSuGonTJEZIA6RmizMLPZhOTXlAif2TMfogDcONxuvGiVK3IKa/ZuSJbjYqCVk+THPsWNVHIh5CpOHdAnIeosAjkIwlSz6Gcc+UpQaY8XQQhPTA78WAZw8bldWkJlvxm82iAzHA6z7OOmmto6TdMou0GC1ZxhsftuIHo91kpSRk1/n+GfqGrRTHcDZ/sRS8WlRKr7tKCtwqXwwyH22zTnynTEZsx8oplI5N+iSTeduAbKTd9WZBmNh8YjgzjPVFIv7W6oGa1gM4XPjE1gjg9M1BTx7rZDcEwkQq2nlbEs9YN3ki/C9GkMGSTWYseSbRwgMN7Zylulk/LUovy5dkbxYYAjDNukmYs+14T8wd0P9NT5MlbjVj2wB425aw28A4OXVzwFM8ttwkGR8yZZLA==';const _IH='f3302e26a7bd1c00364f254f06d70669f4147c86b8f9109d3b927c53d98c804e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
