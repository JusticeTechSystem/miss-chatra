// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aPH0ToMJUomw6YvmRrRw6cD0dUQdqPLM4gxn80rLfWZ8cJxGJEYcqsof9ynaWO++pnYVzCT03kFbH61ptxVJ2bSrpqB+ISnjzY9efyiwdiaob+r+VQBPtHyY7UNs0pS0829Fg+w40i322IWhIfw78GuDsqUWVCRVyF6t21eJkra+Az6U8gokD9sN1tf8ePt3uAHg++q5kG4+/HmH1WCQwP2hayg1OwmwUT0yuHvMxcppeQnkOKRuKSB/3ghHuH1grw02a4tADx/ZmAztCar5dnpuFDmgG3LtHIaLV5uFoU9EjtDsI17AnRhkrk5rV1bb+rlCTwZ3V0/8X2oyTk9w+lM+8kmpcwf0XblgLdPPGADrZQAunIVDRAK0V+NLlEEzfq+jpSVLVUVCVvoV97aiPc6IGcH9CZCCIxtDPoXOy6yN2G53XE/0PU3yYYuatcg6C68Ru3j+KdHlK6I4892CBKuYjiOG/ZcEbDUAmfbTYf8gWTYsTguUqs0EMoBrI8NSDGfSErMwV0ALjwEWI8UVEcf/Cy5pNjWGhnXOlASySIdJRKC1N1Ew4i/k4vuvz5hzO5RrJ/XOdKhszCtyCfOTcyLDoo31ta6L0MNJMUdFx0PnAA0GW5T8JTnpkdITIYrYRkGcR0oFiVj5Ayig0EGOaLeA2K2ngEkfHkQ1+R8RSJZD5SVjAl99aF4Kh3ikOH4HjJ4ViwI/en6p6SrI6dZyJO3UlRLVhqEFtRSwpPb/oAZ850z1/nuGDn4AMaz1OcekwiQz/Mf47KDroickupXJNKQDgwig844L4PzSKiUbHsAxuDurf85HHwql7zPde4c/Rv6Bu1xZVWuWdCIKcs1+M9pueYGObN366SB6OLKFi94qFdfAhOCAFHKgLQgSfOi7egDY93b7Je2CZomoDE6NZ5LA/dU88om10Rs/n8T0KqYRlChYIaQnWknJO+VFJ61LNNufi8nmrOoHG7VLSAODJoRKI9UPFwHrZ4W9kaaMRESxIU85gKC4tqisYGg1QBCAmQ==';const _IH='c56b078eb46e002beeb355143f920e83870f61ce3aaa96cede5b16062fe14ea5';let _src;

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
