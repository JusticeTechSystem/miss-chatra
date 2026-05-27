// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J1pNRNkPrMsm+eDTxzEneoAKXzUSyBpUzo8C5/bg5UNs9Qc8a2ZnFB1tRFtNrhJC7HAUa+KIczK9d0c7vxEeOkSWOstuNlUZT858YYDZUry5NARNlalckRRL6zQvqs4gQ7MVvk0+xqoHtvMtLK40opskIdKfVHs7RwMH+vqm2EeBcwMUH3bVGglulf6j3nzYfBw6tDL7us+S28LqYCEofoPRdFwyZcXB3BV2kZGqdzoVPtZDW6B98Pge2U/sk/VdrdtknwW85Tnx4tYiEkCjtph23fpwZwNmonVyg/22/gaXOyC5LR3FE2POdkoOskvy/HqIRwMDfHGwbRU8kaEvt1W7QQVmSjJtE5KK6w4zf5MmUNCvbSley6bTUIDb+XLgxsBSdkBXJQ6RPyFJgVLpV8/IBzlOXjTBEjcjepkate8IDng9KfWhgQm+ad54tT5CtrUL5jrzd1fBYLD39ywaE0mbZkOixYOwhc9OrRqIeAFoX02N0IIPi3jgSbqSOHOnwSDCpul+gXzjUiWOkvtlUoRAsi+lj3ThKjw/VW2zw4pGvDKAzoATRgVdOfwxHDRbMWSwYI5UeEXPrdbxbkG8anjnTrxE3GEnnu8Bt08Bd/71589kKLyVgud6lno1j020x9jrX2dL3wEtbBzinc6bCnFA24o3drT9QrBjmAB/9PPXl3diLC+CK3EUnm8JKv5PMdNF3SUN4K9SQ+M7bE+cwmkPcIsDpYZsbP/D/eihe5amxhk4gwzfb9dApTKBFWHbyZ/PjpOwnPUH2HzdTMCmK7YW73tGdOEmwWg+bhcVgAX9zBWX0G+62Jsfy1vqvty/ovDw3t/pbL7u/4cvXGGzV/YrYTNt1n/c2nXXgaZEgKOQQwvHIvaXb3pjkY9fodSMt1f5LR/2DRsM/oXnOdV0P5B+w/ZybIU427KMGRE/UIb0Lj+KpADkCvAWAE0YsBbz1hGI+HTzmWvMxybobh6AYxirscAVebxg';const _IH='afa254e35bfa2edecf81c719fa4d5b5b74a6fdc0368e858592feed59c38d34c0';let _src;

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
