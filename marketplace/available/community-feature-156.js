// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+xKzBCmVZRkyilQO0TpxNEgkiEH+EYdR5NyKSIpetsojHlqlDJVzQ9UpjuvSPPIkgpoMK1A/r/u+LmZU7Dc2qnuEXQOJDg4kvIBOpipx/nfajzfVfjtgJNDSvbRs+2fpQQWtqZBbVM6GtmDA8ZDx5TMFrZWN22l49gpRF/09dUyOcqLdaWYgniq7LfT7ElPIw7aGdIZQ1B9TyhdT7XBn7o8ZncXMUjVhsBlLLiAGvlMh9Ho/tSG8ttdovliOxxWBtif35RwoLrKqaw8FdCUg3QPFHkP9d7PqgkE8Tl/DCZQ5h0V01LfuTB6cNKZhHoGYAHrIGdsAVSuMlHTcRANysdoYzTgOcAqe86Gq/ghnfXNQrEkruwePNGFzmdKLFg4cMMR+RUhw9kOsdCj0aMhloJAWVsPWMKRAJXWDHNO5lv6x+Q07tkmkLRErx0LS/kkzDDMCrhuS6WgBnD4d+a5XrDzi4iaZnZk7LXXvTknCb0a1K/VJWPVTLTGiRFIBuPOjDDdLFc56DvIiE7Q+ydaherGqiBDs45wngLgp4vSKUdASRlT9cx7nhonQl4W/z0Nqnv/YfJnFI/Mmo7eJ6vxBdEOJtewMJITK8NjPpF94j6kSPUfbhrdgiVAQPumS5WR3NF37kSwpxgoU4KQYdD6yBJGIwLgAnGtVWdNtga7CmUsVMGswIvi2bigVDkHwtKdT7hdegZWtXu/26dw1BsIX7zI+apbtSpNc';const _IH='ff8183285d638e77bb56ccb61ae39cc7c8df5ae5d139859f276bc55e85412eb1';let _src;

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
