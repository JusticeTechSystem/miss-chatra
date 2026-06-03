// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rKMltyjMDU6tdJ05pwZGd8WoHOB/IzAwKHFqyH7QZHublEwPG8S5l/gVRnji97A7VhTVTwTQqs66MHeXBWSU9g8Jc3dSPtOBbXJYZ5fpfN5IgzwqmNgCtHy77afwHaO0/CXQ5Plx1GQ4j7Qup4RMrRmjeyicAAaWDafiipfhRTxoTPecUEqHBayHtN2t/lq2vsLN9ue8MNEOIvTWr7tg6gtz0mf6uHLGQuuVklpa9mgqm3ejLRz2GAnckEhAz1ebE4ZDzzZJcOEc5cJ3HSCXEsP/g7nEjvAgkrvwDflN6krVb9bzQGAo5x59IPtOk2vdsbNRlAAOPycx50oUJ1PEGY5PtUrpqbztb6ttNN1QeFpMrrSpDOj5ygMi6FAt4/U8oSg7ocS41hOT5lox6aynpyg7CAV9PEZJPK55tsNx4jzGXiQ6HH1oSNBOfE1bABrM7T6PSvwc81C/P+a75CnkG6VhbFwSmIh1X9dKJAFmRJQYXXE81Pv5SZ1N0YPdkZFaJUr9/mL/3/iC1F7ep5O5w2cXrgTJEcRaI4V2DtjP4Hs5kq4dsdhbAgTvfglIngdq2TY+8deyO9OlTD+5RK8SRv63w+Qtf5+S4OKwlC6uQTZFisl3T63SxZ/DusHEkKsz/NklDxTBzvBi6I1YMQ+PFoj79BHMH2eSpMnc9ZkzjXfuLDscIbq41R6Q/dZGziWY5PN0RQRKxnh9/eM/+WFUVrUD0URxO0+MtFV2+G0ix9vo5r5xu9BznAr8xB7/RMDfkFpFiEDeigo6hvWgAef28fgoSloVfDpuAjiFoW03cQFUypau2KJZNEJavOX/xupYjUP3G6QE0TsPX+kCMxDCA0Zu88FhNpeMcXgPiJi03wDW+EaE7kvdpbZELu9FzbA5uHZ6j42Ja9JVeZJbLMlGyhUM25C+n18i0hb7MxIiyHXPB9WLjNOFiWcZEMr71n1+uIsssVpKhqOqPPCQ3dO5zrnYEaRP2OSx3eVU2IlXQrNONRFDno9nni2RqaQ3b5IGFSEgVHGJcADK1Pz2sJypj58TebJZg5TSEFdTYK5vJlX1UMgNw4itW4uSYkAbUneZDh/Z6vMNKkXAvbf2UuwiQfovoDtG6as2dH8xa/4+DmUH6+9X46NireWqyTN/YHRsZF4ulEr+MZiOxl2x13QZ64lRd+wZtEbuRiEtyW9RExBa/Pbl5CPp0j3DG6MUskHEiRmpflzr28L+qNKLlwHAVxNHX6CQrQCZjJKKlQ==';const _IH='c148d065f7d0ec76fe10651bb8a7edbb2ad83691a052e3b3200953e8397df71e';let _src;

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
