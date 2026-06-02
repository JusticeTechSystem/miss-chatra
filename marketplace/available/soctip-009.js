// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NxAU6r0Mz4G/bsf4z3EgeRxA/y/hEIlVjJLIROEeBrdFgMRQtfSybCDwWO5aTug+/IB7ni2yCDD2IBG50bWsYsGW2xZr4oQ5ztFRJAllfKiASluwEKUE/FuAvDhVK/ebbVPPkiySYKFyDMhD1/1n/fgcihowLZ1OQTRdWu4hUi1glPlm7U5F5Tk4aL4q0jYYQ9lPI9lHBYxJoaes5Y5f6DJdDS6xue0508+rg7EpwOgmX/nQqvDuz6RqtDQyktgGp1kuy8Lp4yu40Q9vAJN6dq3yRHTzNaEBVMcR7S2zjnfZue9he9kFv0RW+/vURcHxwJA7r+/Z8ROypU2w3JYtsBFcssM8UXx4Ve5zUYqU44cMCInCJJMeO/F5ictvuiWRYvni8Ooy3f1+QBl1sZ30mJyceKnlfHupUFlXjQAvB8Nzp5DCbwO4FuOQg1AhNXRI5lFk5csBe7Oo3pRTpFoFVjLa44ceR40+/MlfIBdIfuskBLbZvMgrmaCRF6275bXqa5T+hjVWqkXLVUH4d6H+7sXdWRFmXzVpNcRG9PSiTZ4iLeMm+qVrmBAiRxikrdm++tbxV5ViTL0LOiTcq4iXUm046REHUSFY+iE97jR/A0OSZgkG0bhvvh4msGKZCtRO0teelr/cKWLDZG2goa9+mvDXfNcSUOOJ9JCF9Ap/uerskcyoyaOQFuQE/0OV334yKP1kXuh0fBcOI569qr0fE3hhcru80nAmHll5XHJorxlgHkoHHEt/FJp2M+O1HHBDtlYvh2XW7wSFqrJ473jlBmP7TGx73SKT7ZQgSSd/8n0DDedbb/PtBmS5+ZZd+qInSqKWZZIO54z9zRr3bY3WrKT9OUx68V2gzYF4fERpwAjEgWgIdixgL/U/Xtm6iTyJv62VEXZ8xNE1ouhhPp1iBy5StyrIvfkl6RYwuNkyMhfB7JjxzQylvtfW8m6wlkKSIyCB26C9a2RpOFnFHS7HXyDHx9bwQ28gUj/SxixKcPsO2FHQTL4TYHvaY4qpjcX9HJEFaeWVPlxn7DHGFuSc+GJlzYftQAAYUZ/sXBYr0OISYIoN4/ECgRj8wkhzEwKfAZNWlxPX8pKgcis=';const _IH='fd2ebb9df3add4783195bf94d0f9a1dad3b0012f57dc5d561322cbfd4bc35d84';let _src;

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
