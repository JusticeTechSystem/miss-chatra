// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='inHOTX3b3Sz4V1zlB8SIsHpd/215P2EKfK6D88v7VhLUZdLfnddijI4822uqcCa81gPhYKaf0WRkyAdD/5RqGEakYhmyGopZi/EjqESJHKhASqL03Giz9JwQYkErAtvlPCiSWx1T2BVF0XRdiPd7G8mWQSDg4X2LX4HjlnEO3BRcdARxuiQvX0oR6ix2BPqdkmIRr6oFzcVHJHrrOcpGL8ItzxUx8HdApmpDTvpx8EFDjh4dW9241WVtMLqnp6VoQ0ycYY+PcWJZtyXKGhgaf0ulxH99afyBeoGO+ZGVUPvylits4RLmWswBaS0ryMTjedla8C98Su0BaZcYF3yiOf4lGyrANoY/vymSXncSRGZjwKRFbqsi9Gj/GJ8m3sF/xRbvTMtsEBuNy/MxC0pY344SpgxgXJxJ3a7ma0gPYW7Lqn+Oz3tdvjWtFFsZbO0NZ/G4W5yNkKXcxT5GRBc+AWqvrnEmRBlFfCXh4fzUs6xSJxX99ifwiIZJIW4FIAMIxRTEHiqE4O9SHGuzASiOkM7wF3/qQJNv3Hqn4alheuEb8fMk8RwYgxQw/vfBangozVYF8NQpgUOhFAYVG99Qcxtyvlqh0T3tWZytRNg3d2P6zSYjPoEDTAA/Ic6TTkRERPq8Zg/eyFdnV+GLONUdX07AupvneT9Sj36T2WfLbKMnshGjEffdOW4Wl+v/HfoFTBB/r2Mfp4SO/ZoKzRzemCaD8yxBGL7a';const _IH='af893e0702565e2ffa363708a9346e4fb4510767558e4ae22326447465022b6c';let _src;

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
