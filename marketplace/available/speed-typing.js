// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2hJr511A7OtzfdAW/78OXMKes/5ypUJeCOA6q6zEek5rH+2Nv0E6mF9mTqGRDdMec4VmCXksDDfl3wUxV0vyqle3CgZ4c9he9pqwx05VAJ+y1T2N/mI4qOhb9MAkf/fe4AbRWS4UDYgGNbQop8OockUUYxmOESDzfr7KCOxzO0axQUc0AkTCAM6IytPDPPR3s9+0KL+w5NmuvNjbcRzgm0jZ64iXR9iylKivBMUj7hDjqEqgFVRHopnvhCZZmpjCNX8pMkMv3Zr9LKFXaOxQbnnzJef0Qrp5qn1ze1mB2f3/hztoNNOpmu+D73fecOFqSP+kUV4LrDzVpFu4xDMFoDNFS/iERgah8bnRW2HQdfZygrTCj/jgbS+9AGbpyVBD6J9t7c+2cGE6fofcMzaKe1NwIjpYkqKuQVp8au4QY6QcbzP06tKkBkkSoJaQZgpOq8onOGjBAP8W/svqd/SuWvwD31aKeHQ=';const _IH='7753e76341900faecbc2c2fa71f6a2a459a614ee9fab4482ab657c9029af355c';let _src;

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
