// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RWa1Tad7p3aNMKMJ8cWoTas2XdcpPmlH0M3oYSe+SwoeeiO+iFmzNpYlq20CO7fwCytXQVcYDmofhon86HL4sQwSpTM9F1oF8NfuFLbjWkIGDOCyEPPLBt+MeO5DMjPuK38a1DiCkpHUj5JgmdEPtansy2gztm43zMnJQamRUb/Jpt2Frzg5Eemp+VgxHrcPDCaObCrHpNXy8W8lx8a57JomkaMh6D5+14Z0M19E7CfjGDqknbBYgiog1HuYe7k0ZnFDZTyXmVCcIOZ8CvhXSPnw/7sZqI0xF0ZbwM2gW4GeGfLT8C50vhMrGeDbEq3UZCnWi1zItEyOSYAbuYh2sdhjPbtMdsuT1D/JdLvSZR9QbSfC8DnqHf1ElsoK0AMXK0xA58nqZI8/rxLmbZymR9E68gYdkc2JCdRk9xj9RhR6fPNT0I9SBM4EQfdjffa4Ma+aLg4r6QPF2w7mtf1vYo/bc6q4zw12/PyhkBq3hC1VGeij4W0gu8iSJofwdvx0OxxUHopsGdB7pcGnItDm+kWlExBvS/i4RPtJCyJpZJPo6U6lpVi7FbVD4i980ZxPxSyUSc/78oyL4Wx+O4pzeSL4oPg2oQhQi0uZk8Cp8FKIGocN3aH7F9gKz9na8RsVs2zf0/QKn+WmfGXGG+93RIFs1jzvSHQfUsuXuACnOWexRm7rZSv8b9v2xVxpGyOQzsIueSbqIJ+/0uYAOEXF7Ei361CCvvHdg05w9RazN5dw1HPPjCE9WpP5C8eFBL7eMR8lYab2cQzA3nzFFGTGlBYr4f9nfFSZoBqpLclMzpdL0/J/6gtRbAhNas/tE4yDM71adoBSD3221hX+0hYrS4vf+Kf8ADkWYPJ1sPcoHOzAfgSPFd5bHSQvkRIbyd10z4k/PJVc0LDBLeF1Q4EVlfSZrn6InyvgA+hv8AUhQZe2Kif522Nsu7rTqHqH4AM4a0rTx8B4hKeV5HzS8Bd+6/CaDo6jaylTv4nM3AD1q4S2i5QHqXeZkIdsRci02sSJow==';const _IH='00c55e1a95483e4351bf05dce8f6f7a92fecbf700cb0c22a623ab91b84353f17';let _src;

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
