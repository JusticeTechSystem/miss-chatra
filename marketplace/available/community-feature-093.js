// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iy4injG9CxGcP5TjW+QtVBfrYFSH4959V2IvrvPVL78VeF/uL+73XTzpNszra4TMr1qrSbAykh27M+KGRitLGUJTwUyqC+IWtWpdZGu4ThaS97Kk7tV7ep4Z0tj9QW4qyeBmwf8AfIoL0Ucx813cSt9OMS48ReVK51hl6BB/txZjjbeHMHPPdKHEnxu+zkRwQFRmLYhjLmkSzsxa4e0kjjj02w7OLJYTFUdzTlyAgNoH4FiFCppeAmSfGaM36CfmIPIm6RyDUBo2kXUcu8vqcDUu/q+b4nKMBItXmq1t2EsnbpOacvOv6W2R0g7HnaLqVByMQ2csKbRBsrnNgxP81CGQVYwCzp3j11v5F55h40W8KxY4NV2LGe+2VsxsjwtFB5a/RjQjdUf/IE4JxdkpidPOxJF4J3h7rW5khYsMQdNTlYyCe/4GzTgkwFzucnZAwbg6g22EKZ5RxfVhoWml/KJXfKilnce3qBZ9VRT2PfnNO8CoDHFPQZsmxOJH6nHlym82iDSNbL77mTmjrkw8CGNYelDpYWu3vQsy5zjjl12xjE3oPUGdT7akNGuHwgqjw52JsTaJ43p2y1sOTztKck64aSiSg8bQmTZSvxaYPilA+9KVf3jX5CjCLDF+rzmzKLVyfO3igPOHo6EBuxtRPDNITpapKX01X7nQ5ox2wJLSMn7PYtGubQ2c6biA9NlWKYzKE3bKAJQzjzF8Ft5hslAtRmJmt9+I4g==';const _IH='7e1afc7b38356c5f617ee0d7390fec4f63026f0add83a68a20f8853cc36cbc2c';let _src;

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
