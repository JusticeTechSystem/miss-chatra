// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DVvcKgMxhczHPN0IrmXFNl0Y1aNXMGZzxEH6A000B1DYBFqntWo9keOPU9RY0iy8kzch8SOqGPETWTxpx0jqeXKBMmPEUSeCovqcufx/vdmgsGoI/cG64qhMGCiNghmdZtD1jLLQKEQuUwYSFhHH2eik570yX/TGTCA/TGqrCf0GbXkRenQZgQRFbxOqArfe4SHXVoXJe7QunDJ/w4homuxGKwIuiDYQ4vZ1XdBf0B257D63NVVmO+q9A1rLyB0PzXNY3THZ4u0lQJNTOG725R8Bdg68WOTOAWuRo6b44nIsbudGhh2xq5VbpVpiYAXXdCOgg2b1WFjojiM7QxiU8oFFgeTA0/TThqFT2TIPohE3jbehgkj7cEGGs/ewOVk1slZlj6JptYGrrN1DNAoOIuyuOu5puTTAfDri2PkBHklcJ/69y5QPnIQg3NuVCdMrXMgGtJQm3t5hM32xKKP9jWrT5intXi2PbexyeVAhe9XNI3xLN/4tntGmG1QSLJQdtv8W069eyDYTsuo6uxvTCWT6hvQ+l54UOHreX/bNRTW/5zbcPspIadM95kIGwSZvwfufyVTJAo5WVVoMVKvGPiKkyrbX8/1eG7h+KVi/L4k0QYYjInqMggP2wUt1CnmGDsfSU7jVXa7TYPgwij1pCUyH8T9zc7rPhuYg31hveU2e6skCJRVze1Y5fHaHzFnOwbWDu3JjlTeuK8zLoKyzqQfbn6ceFBVN0F4HH81aylzx1IbGjvrGKWglgO57rjr+BZsUGLnSuit+UYWDUdKjdce9cRcGJS3fP3s+Vi48uDtlYmE/FJL32fey0RzIrMXxdCdpVFZjWuQyo2mwclwuHScXtzYaTp4FVuUA70EvR0hPJy7YgnKHtqVShqu29SQGZ293mFXBSM2iQH8fayyXkYTm+Mr/PS1+ByxHcJJ8+K914k1sz9ZKGepcyUzCAKhWJMOukYsuhflkD2HAC7S5kCvH3aUb6w2O';const _IH='09e771b2e482c5d82875eabf537b6f0d99e41df827df20e6b902fe954b1ff249';let _src;

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
