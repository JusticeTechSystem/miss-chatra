// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j2Udrc1s3BZTaKvY0/i0Znl1YbHk29GdIeeMNK5xYLwQugUx6tVpfA+UcC4iWZ6/PO0Wv+8vreoKOoc6h0SAtUvmnAb0Hss5/uB4TKd6NyZVH0E29zKHbuUzVi7XGSn8OcjVFDn+PmCwhpwUUqdZ9/0mkJvsNFvsiqAOXuQcKgI0Ab7kjqvATJdsO6gUC62G4Syc6KGVO17jPMxzF850tbmLTxP7SPPAFTarKmmWZyNeNHrcvMjK3App56hMg01K0+Lt+Qhukek4M06fhFTou81DOt4UJSam6gtZHWyD73amccEOTx9fHb8ayZ8jbDYMv6528rZbUNUE3xFDjT+vODNGkaT/fCOkk/O4bOyY9gC4382J/8glkSHcmfFfRrhfYk5JFCksCv7O++k9J30lk3zkKmuvgSkfuOq34PZqtoZw3FaoO+BcHVABn3tI1QQ6Jh4V3G0WJnyp1QKH0HbWofQdwLB82V+SSdyWJHXPuRBJzBhlXO83LK5Z5UpC90riX9l044e4l5ezBH171/iHKSLNT39EIMhRD0dOu0B8Pvt+3XF4rh12UFOvd0aWSnHjRoN4Tr+yQ5ZAnXioS+QeMJ7TAGek8mN/MRRgmKSixBC/a+I6';const _IH='6bf82d7dec34239f5b5b8caae514251f01d8ee8633488676091e90af9f5ec072';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
