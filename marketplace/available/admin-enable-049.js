// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DKPq8Zrq3BOGltP0G7moXcbhPMXGC/n0jFNXnX8Z8Un0YqIibAr2Fi9rhl0ATHorNMeIP9Aaw+IBfwt38wiGuL2+4HCW+MwvThJ8h73m6MwdihR9oDjreHEEaeBlUBGt2EGknSKmahGq7Lr1pvZ+zi+RZwrectgca928aLHwRLpnbFvgMRIDVLOUkdCgPGe6CenbnNXKxPZm5ECAb/8PFrhhdSR7IXGQbiMW2+f1SGnwjtHRlrlW8miMI3Y1nVyxiufj3bOUEmk12bBehfBCTyO4KRsPrdeemnB+GkAB/Nqh/8f3HaUyQeqXL8r/qsHr1aMCQfE1Uct1U0EJJ4UeWx/EQ6TllWPKEjQl9FyVlpo8bCsUkFXBlCS8XTyDXAQSDyNXahBczt4urW+PNaCnKdI/Bex2ZSMnN8rXlxu+8bxnu69kODPDvYbUQ772JYZZ529jiGwnWcVGHGOm2uNssb635Uzu/JP2yxqnPy2f/ZNid6yg7NR/z0NcK/6I+hK3zLB1s3S6Eq7fGoxpYkmEICLFdq5cDvGcR2IzEyfOn9mMMWMMmlSBFH0FoXfGTf5g9JQQqHiNuZJ8oA7spWqTZG4dczgUrhLU/1SjVPshjBlXmKUU/atoXjCJUYWrOX/sSL4Xosyg9Lq9egv0jkcRp1GlQPJL5N+TIS9jp/0IAmYOY8v7ZUqoSILBxw10HjY9Lrr7vFB7WfQ4hqTidnOhBYKzhq2FIZD70hj6J1fyEdqWAuD66jYP8eCVpdsACucO+pMpsdlKB/cP6SNWPfelioE4WOW3HZRI3j+UbEbxnLoL84EeWF/AGXG+6OU+CHYoAYFlllZxc7NWaHrWPe+SM+8ux7+AzqfpHePz1zbOoVKzeMBjQoGQIMk1fC1V/+fVUmBv7hhKgBD0Un3OhneyduS8y2tGbujwlcxLnvknI+2K3c1DYYDir8RU/kuxXo4CZyx+c3KGPVZrDPxVJvh5oKndVZHR9aUhstmd9HFR6gqNxs+HRNw2+4RodrrO';const _IH='3341a7dd600523110d59cbcdbe746dbd8c3b196f1f3549eb368bf2aef697734b';let _src;

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
