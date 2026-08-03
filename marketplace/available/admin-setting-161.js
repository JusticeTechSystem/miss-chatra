// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRO+7GpRj07G9f+l8hdN16NhXNiVBAZ/EpEf02urIsOElDPklm/9OmHqqLxoAc+Jvj8OXWmnujORjNTBNDcQOHprc23jPjgkHrtJZBZNAjhEAhC7GosWaMrs4k58/EGrhifXhOpwYWPEz+T4O30HAO+eOnXb11u0XttfBplByl68I89oC3Lu3BBOoMsmw1bK4deqIQjntYuhDFCE4USS9vjM0zaqgfik57IPpJBXtVqUH1+WILp0XsVVNfesh2OkyLHHioWyXDtfiN+cUDBP4D14WE8Aqz9A1XOGBpozNzceh7+MEgYcHflemHwHfCtBG7NOve2B+bi54Twl6rzaqbFUca+YartAF5VBB4FFG9/1UzWdEnGPPpED1uQCl+CHlZSUYi4jYQYb3N7weiy+VK0WZ07eL9+A0R3TbhFa8wuajh3QHJThQTUvf2ue00CeGMoscKinedtxiofBcp8E3RFJCDhPoP6RWo1rZk+pcbvRmDVOEGaL6vNeOt5IUp7Trd6A1z0E8WZWOXqyfTgbb2UXqBrZVHd7rOnZR9h38QFdZiun899lqLyZFBsH11ZoDQClvtZKi9qiQon7ND5YOXAyp5F11xcmeTJGI4Xuq/oVUPcpHQVmVi2lQIvBLtDDXcggCFtGkn5kETYSYmwp38tdTjiaGcz5jYjK2tSIJyPxNR3J1LiAUN0WptBKZTjGrIloApUkk/8zxEr1AbDtVG4USUCshO+JQaDeYV1oFcSacwpTrfe7mfSyDwD0gbRg7O0+IRMVsa82x4SKmAUn4dvEb3SLs+AXTHeWD8V86pK9NDf04QaW58UyeEFLxUCYoh3ZXcn87Gw/R4sP64fqr66Z17EMIetRlnHz1L2uBP9EGzT6Hs7B3PJPNzo8yAtp23go1uPjNysNjdMr17s47XP1BW2uMyPULVjLZI86DpRTxA5S/ZZf8Na99FpYug+Otdy9GkuJcfqQLV+mOV+bevwYPlmzAnuf2LTCPxYrVS6OaVkEgRxQG14TdMM83TmzYYW+rKCre0=';const _IH='19a6563fbf93ce4200144a00444fb0e2a46b917f70f5267c1056c6126abd1785';let _src;

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
