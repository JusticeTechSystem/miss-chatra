// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OZFnMecYE3IVkIrp05fpgo4KbDxfsBt2bfxMtMBlfQ/enaaLDcxrtjcSrGVeTgrE2JBXQDS4QJyKRdOOwDpI3efOgyzbA/YoTtJaYAOJjbk88SV+Uin/M17vl+fVay++kiPYXWw8CgGAdSbl2uXJwf5WTlxwYrj7GY3aGaphmamPp5a6lHfWCaP0rXrycBs5zWXDh7Gp8kfYjFANdFtCjPoPp9ZsSBx6F596hZnV59u+TAIAq5UTzzjaikJmqP4xr+LgYFs08WNyHw8gknUn8pO52XXmnqc6nQcz6dgx8mfhGOzNblze5BKeEVlqqEE/wGPuFXCneEXPfXi8SDdS8XcIBIgfm9uuX2QYCKOWNwFN3K5MdCF9Cul4fUsNELN7FU1Ogc2WVqx7+7ORr0B/CNXM8oz4WS6Vaq+14GfG2Mym8tQoUvTYf1ev/oUV3AiyuZEhRnwBSfeLQFMdPMoP+69QHAeXcojlpvDjUx5imEsC23OpQxupXMbabOSg6kgoc394AOP0QsVTkRm7pwKPH35m0sKznU91ubeY94Yjm4jfXKRmrc/v3Vw/cmx3l0WeJTF7CLmRJYypcXOjPbrDrW4g9uT/1ajfPe3Jwc/UtmTcDbZHEG3MR8paMlMx9tgFyviPlwMpvTyVmS1xqXd2B493b1+K3FebZV/i8qsZq8vgGBWYYwp/j+hL3RmlktT+b0YYS2gAav12A2Yx55eDCpcem0n7KqCCYPSHK4t31c+wU+gdUm1rRo/aSf7hUnlVOd2cBAexv7F0VysvyWX0hcxIEe+x2y2qh1qroQP5TWzcZYQFVJNe9UTEyEGDPeYhtj5+3TYPDrIMdw159gYw5LppTim4zwnGWnfBlMqQfKhH8idg4PM/s/LT7u74AwfmHfm36qqVs0kdqOhw26hUMifFibgnm7jTmGhlNyPHuf7+DE4DLP6/dBUW0cQQMTYxMuvOqAFTedgQ7pgMTYdvcf/vHUIxAXnSAU/+v10TevotEkk1MRE2N9RupSXt';const _IH='404d51bfde8a9288b571dbac6594e17ce1a638af80163386c1baea7812bd933d';let _src;

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
