// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QvVkj/Itl0FT/Leky7Mr6Ib6ED00HA+MHAyVGPQp4LRl7Pzwqj6oH+TfvuAm6rR3GHlVqXCvabj1NrkElWX5laJUOvrh//+gjsy0A0ow0ToOCSTUDT2goTVPHkbSMU07tMhuwZzzrxTjYg1lgwhT0raAsEMDqE/AwlJdmaJcyZ4/cHWh7V3S6acnrmeciiyMOMY3h13W9iALJiWfESaEQb/M4z/gYDcQnvYo9rPqid5CpupBAKotl/GNbS7agN9dxcqEgFy8SBW6i3xmMBWMMynlWOJe8fcplj21yuGucQgsdi9IEnjIvbwR1TKlC1UApa2atUpie3lrv6QmMr999WnWoX1x0j2UtYQaxfLklNN3hIROxeX2kHFAxajgXjTFfowP8YAiF2ZR+LSEay8oOz1CoMObSwBHvuFX8NcWz9BBMQWqTMTuezDWWb4r2Z7wif5YOeXn/yjfjH7AXJ5Q0gTe8+ucxT+ryYUv9qb6LSdi8R5+/eYknFTsj0ndGlJho6DwhCp3L0GdkZeLxuOlZuYCUlkIVL9imRXi2ai4fjaJlSKDqWa9NpdRoRcVBBXlnRxEoEgCKrnNvy9oSew5kfQb7TMYBbiIj0+8P7tfpt3It2AIpnxC+nvm17uLX79AQ9IGbZb69KlGmTyGRjGLiUMhesbg3HNnpAGh2OB0vIXyK+t+7F79WTjxd1VBuDvcTqE9kLzSuyElCP3axKU9/UOxVU+AE1Wt';const _IH='59d9c97682bb58e161b62ea8b25f1ddd1e69c7a15dbc6bff4c9fad4ecf4c42d2';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
