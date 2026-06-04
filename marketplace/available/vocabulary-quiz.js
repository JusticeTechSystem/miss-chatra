// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cffywc2nAwHGbc2xZkl5faP2OxCqfzLqbHjX7iZhUayU1H/lfawP0LNySJjVmRbm34slivWzN7Rqg05/CDTFTs2b60DRiPSRN/Jla+wqePJzjM9f6/wfU2kYRfIZGgl7Uzw4xvucKpqa9UVcKqvWnbH5LgQwa7H0IxcEl5FAY+CondpGJZBY8VeHw+gtbgoCO9WehpaVb3MKPLH4Wz2qf4n35MonXAPMQnW/0BD2dYWhda/LWxW+zDSXZsQc48xwrUcEI+eAiubpprfmndY9wjVEz0CoTbaKawSNcaXpoihenDSSDFDxgzM5U1FRXMcsKtUgg1ojM1ucTUeWcl8DY/DhhUMaKK/8xCPU8bvNNlGZDhISno+/TW6BTVuMnZVW3ebHDsBWCVxhhCrdzwKSq+pnSsUIqN1A/V/led9ItUBpP9lsJrj0lyeBuoefO8w9U6CHPnuv9lDBfGsJ0xWmaMwLpFvQ0zOnoyY/DBcIB3VG8fM=';const _IH='d7eec6f77624971d07e3381ef72a2115035b5133fac61b8588c7900bb838c994';let _src;

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
