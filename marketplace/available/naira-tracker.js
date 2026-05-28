// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8v5epnrX/WY+ktVCBaMjtYpOza1WtqykDBdE+MNjST/k5PMujQvotnCRXb7ks4rD1BgUGOmK/yDjZ7S3Nefv0edCBKBc3/hAXPlBNWXX0YX6gjksvP/dMsVb28NBELa1tzd2i+hwUOGdzJrIvVw2Wde1UVYRjdjY9LWVg1j52wdlP6N0FwRSvMgbGC6vWQGbrl01B83a2+OjkySITec8Lwidhz3+K+FS5NvjOMWAZmzEM9VNiPLZgMYaRD+tP6G2V0TeQxfy4THXSoCwd9o9KnPGxmTQc0irMxVCPZCMEH/xporWzsyC1KY+7ejy527kdZUNOd7eMRrwa3E7XcO3LflqNRSDgUvtDt3IYbuxOmozvTF/G03FRgPGj8oQ/01psouKeeVoVQbJHQKN4gFgdba6K2PuXgnUSRCfNxElmMy4XMv7trkNjqfKXs8ok9oxN2bpkNZ4/KkGS6Mkr/N9z4dq+OWig2zzYgHsTFNgCyAekZVzlxkUPUiPIj3NAQn57wudnCa9wDfSxBHN8PWzO91THNK8vnfAKqi2klFEld1Zi6e+2JDI5pNY72/I/ioX7qEHoQAcRL7HCA==';const _IH='1bdbede4b9c790bfa27ff0855300ba735c98daecbad366ce3c7a1d02ff324f54';let _src;

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
