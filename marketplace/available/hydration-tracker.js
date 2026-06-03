// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MNoieHc9pTb8IxNZ0Hpgsu3o9eLRMTGAreW6RtQaqLUYuYty4zJxhu50kpeYIkVuHvDIPYGR7u6sV+bO9jObK45bNVg6npdopXedfDQOgIb8HXeiSnQg3Vzl4/8oyQks3SS7OZjsZyw+Z9Op8+Pi3v+JGcrud4+Kd+8xMmTSkgqsu7Hbvvu5qoVwLwxFLQI/ZU3r29tiEHdzjYVKYELmeFP6GTBriZ/y1fKLJdaOHnaXotBHDNKYq+GyA5/GGwwq/me3sonTWQJoqtuymPwWVnuJubILq/L8xls9+o+DWS8MlnDSLnzzVK2nOxw8Ofow7q+U3dmEzCjs4InBYu/UD8cDwvCEUxFTeK7JVGIh3cSG82IJ56DUlbdsolsNa5yCVZJj2ok1xs7b1YUfClFTF90Zj8Ay64WatijztoUUvyAa7IqA65BZ1UPVelpQWQs2euXGzCFlYUUdQayxCniBRPqyJlFKWu9GjAry1soCs3RT3q0Ueeww4nh7XE4ZGvQrzSTFbjTuppIqaxQBPa5W3SwsRlZiSjcl41lFsDOs1R7RB93ZTTNFfITGO7GB77TZ6QhmBGMt+VQo83lkH3v7Z+5bXiRLWJboN+raKhw9IlA8VqvI//txpRcsrkBnRtjGuasX/GHlZ7x3afxlWfHE1Y+2YRgqPGc4YJtx/8IU0WpPUUqcvmWy8zdSL6PA24SFynUDlmYD8MHsloMfl1EkGvaRqOX3YPfdtLpPHj0sb7vs1+/KUukxfEIcDitORa1PJXPNOPwwYoMqR9n1l8xfpVvsnFWrTpMO5+o41NuggrZcazT4UN5az/z3SeR+FzIrhvKzP2BSPIRhD4Y0L8pZnwcUaNDA00Fy45zGK92p3XoTO9sgoyIi4xwRkDmmsd2zD7FkKTUDCyDvCdH8mnNi32ejoZUTPdHTkJsw25xDh8symtP8H5a2lTv0w6/yfTHRMx1hHAxWClRPKwjyjOeLGPca9jW9YpkAwW5qaPcmVc2np4WuvPzNonjxxbJ2JRdOYG+p8cg6DetsN0iM1iVNiPObwIvsoHm0xafmpm9ggjtNDuGal42kMahn/nQS0x0BKbVWlxFH/obwpbMjp2Tyo2wesCwc/LYmFrPVUVIQOdXxJ/phldimDSAyf46kdGZdt0Fq90AN4QqYjZQcKaX97wCZkeIo5dq39/aFFYHDvP4X0dP+Jf8aQb+Iehkdl8ffJuHUMwYewjb1cl18BWDYGNbBJyPuVQBCcaC1gYLQcoQd2F50ZXmaWNlMIOn4J/b7q1j32CspR+pM3DHqmGKKgbI3tXTLAH8r64nSN/dDdbDWkjBCTtAeeQaouU+wkzesQRnt6io5SqSqnCArJSFBZSLSoHM/0av/tVQ/5pElrLzzwsI9pfya+ROmog37QSYQ+Qp6Siai9kzDIAmZ0U/wzrlNb+SSLg8oj4SxvYmHxQsBNd3kR6JMA++l6Fm5a6pIi1sq9DwPcc3Yv0rqyJmmpvBTOfdJQRGEXdJ9UxzxX4ZfVsdX+OnDfyhwxnIcdeg0jj9Wf118Q6v3ZnDjp2BmQ+3jdcgCvbzpsAOP5/gAXLasjI/Bj0WucZuT77wlj1RaZX8dHks61Mhwg9O5Y7EnFB7vk8TKLyCVHY3InlxoosPaxNT5lAfpO9BpNhKsVIluUy7WlrB4fnud99v4Teo2IiSOIw9P6g9WLlg6PadB+nICqQQ=';const _IH='62564935530b98e28eebd8c67e5e8f5f7e481fdda5d5944881f2d85f52fbd4dd';let _src;

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
