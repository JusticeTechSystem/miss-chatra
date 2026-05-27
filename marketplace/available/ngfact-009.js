// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EbqTeyyTwQ4OrS3csh66QsFGOlyhgF91aCQICLgqQOwrqkDa45kkBXjQGCQH263VM+76MG4/D2rc8AlrQC9P6O4qkco07plSC/6tpq3jTBUt1ytAzaTi+8fkcpQVs5MFd/eP4SokVMQ0OKX5LhX7Y77SP5dJiS5Q198ngxLDo+yCJkRnSEc/EA0vDQP6prDFg/RU23C1Dtm49AgXK5MmlFB9RAAGT1XTsJqsXZ5ezr5mRQ0jnLcxY1dpcpUQhAjwy+4lvFUOJwbJHaTTu2FyL0rdHzZkhbPvjA+Vkn3BFbbbB9zPcJpGx9BSQgFdrhHzS8VqexSvj0FEaIozQTBPJtjkCMfyzw1MwPu07g6rSD6cLn53wy0w+nr6MmES5NruB3oI8w7U244y3ZlcvsmjZyHM0YNl+z9JXa6aR/oOJf2XDcuT4JL/S79ZFaPJI/gcWQIKM7m25jla8C9jwgAoA3o9sVMGZngvnJTuvnCn6GxBjjFo+g9Qz0ZkY8Etiwe0Sn9Y8Vk+AEupBn4NAs8aeDnkCM/BSE2eB45huwl/Z2VhxLKtysmgegAy8g9SmuPWobjAfT4Yoj+dZTogVbQgy1dcUpaN37sJ7caoR8jJsthzsrO2gNQdbj0eSCyr5a/B6surNohsQAsBrHi5Jgjn3GBxCSWepVGI7BF5GYKQ/cMwP9ubOtr9NGBquqoggFfZuRj0uOgks5pmvhc=';const _IH='1a06b7803db18d6afc006928f59d74972049e150da55a65266803ea8533cf1f4';let _src;

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
