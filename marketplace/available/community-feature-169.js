// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QocjcsZfgXSrCIIIH2E9oqHigkUuzcF1ffCAL0mIbttLaWXrhQxWrMhr2j8piqtA6XofxkRamsHp4Sld0w19rd99qgW6nf9m5UyZFd4xbOODKULhR+DuebaxFkUFXxG5f8Dt3hSdoJeg4B40SxBzgo3sx0MiU5KyUyVK0dKrY9MZuN+7JxPrArk8KHAxNUOyEnwh/m63DPihvHIjwWLz15OmuzfFqwtK10fhwGpL8qegAI2ADapW/O6iIraWdTLDC3/HbcSvFASzVkgywYMlmXR+uMVIppNhvslxn4Cj6/jQf3iQz7SBwyHj9mftAkgtZ8JFLMiwL0DrkopJ8Nq4EdTVpIL/OkS7vBPwD7oY0ZdXH7XFngL/CiuV9gjOX+53XXoybe+OrOhSzL6XFDLe3ET5vLwhBdD1uqKIyBNy3968fj8lwZ47Yp0ZFQnEKWpbhHQY3bycPW9K8ZU6V3+q5HVM1eQKIBxSl3iHd+4IGA9wn4Xy4c+u+BLI6W3dDWSiKLIBYxhWKX/g16aL5l9myOzEI4C+VyiLsURLOcsZi00r8lZDsyVhmBiGS8DjhhyqIq1m7PynpfrZmxramExj9UdmgATUFJOxlYwhV+pEJyarR9/8PTE0VZL1CdRdltKqUhvH29rPjy5eKsTTy5XoF+3ToYObnrYhfZZuc1397zPLhTbGrSao0+wO7jYuZk/8UC3z/VivC1GM+oxTIXuoOPBtwx56nhJL3GVidiHfRZ18Pnfy+e0=';const _IH='8a82254328df18b3d61073a8b187eb3f7ad7f5e8444653a6a8d7de8cbe0b9614';let _src;

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
