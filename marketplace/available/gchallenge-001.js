// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='McHO+HvRhHKYq8w043V3nEkx7biaJbeQ47Ziv4PSpU49YSNrHVdfmuINQ6HJS8vikd7GZuPCjAypedx3NFv8pvgCIrHgqtr0Y/4th4i9K2onUibX4j5XEDDPGq7Ad++iGhpVe7wG0GCAbpMuIEaZSdwN4m8Lvhbdh/Rn9bFmzec57R1NR/1iI6ejIzN2lguQID1zQzuz+ojI+Sdym8BMnilAvyCVzw2V0UeFkDcBCt2M44z10EzcmTaS+FujmiWBMJJZh1yh1TIgNxm2g2tR1wkbso6qosETfUrMvonkQ5KXFTy8DlPdlSLqBsX+NI+WujtMpiPduLh58dyI2RbAOfDgXhK5oYXhY13YHQ+OkSdwDF8pGMqfxnMI7WLkBFVR6gVHXaV58QHS9vbWHIEURPOpRg5wQoDq1lzEqLTiZQTI+mVsZcePLqT2u8lxBr6xFs3yvbgwM7dcDnpN5TUH5m0Ur8FSRCC2c96DRrgxWQQXFaELTJsBp7eRc2UGOvRBlXbLFPzJhcaBx5+nKaH9ZE6YytUUMHrFaCcbifFVPKWls45jt2cUVAJlMt8Yh/QfYJM+vj4wtuoO/GK3xUUHHKEsA5ZQm9Z0APfCjzwKH0pbTy6mA6xr6bFzNmXpjO+5ApQvn9b2ZiGHS4s=';const _IH='a06933b42d16bd64a68dd4a18d5804241a4c3d63e0412cbf504a6a8e9b1b61c1';let _src;

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
