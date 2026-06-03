// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='odJW8o7Q0YEL5j3e8BROZx3CtdZeevZxGT3726yWLEqIsxLul6sKpgIOOLKRCbJ/yNbAoah1y5qd/P71yRQIDhpu9vfmA7x6npb/3KN0CNWXg7atZ0bXi4eGyOGGzE9sNTOyaTZOSewiNBaw8Psmk7GAatIIgyf0aLEtzonfj12C272kY5RQLZCEzpKiJ/R4ZyJ+2pVb3NjiyX4G1pk9w5QvmimBd2ybNh4OC2URAE5tax1VxhSDraWtmX5y756mz70FZBuu+mOgrvdWTy42QJl0osW61XaNCUyF7/znHubfnIohXeyuB62rsAHIrksI7dA6Kx/oOyiT78SqlRQ/J8rCXr6R2nlABKhTJEMKO1HQus4sULGu2RXf/1jNBqSqbw3l0hqvrZerd93bzIRQvFEh621IZcXmNMkDQ45nC60sfLEHcnBRLoS10THPZt9B/rttrNL1m6i++lJMRocougCU2yZBMFtXmDRX2QD/arvLppcrPuHJ984sfB5XlgEgSmIQK+9zYGotG7gp/VqQE7dN/SAM1t+CcTr3E1Y1Usqd/TdwgF6+Vk9JNv26YBsoRweC1iIe90UgKnPoT271MUWuN4jYmfUV5qF2c/JLgniC7Jq4ykeaIqzc6hC/vGHSTgi924IhVerhAcXzzSQBiq8RN+ujMK0FBeBrF/iXJGSc6CRbQS9Dz7/62F1AOijefeVCfdFcdXEKsnZjcqYzg+Ci+5zrDeroFE3G1DWLsK8r5eELcu5R5pU6AJiA10wpcAxbbJnylwVrOz5hcDQOaAUZCBDx6dB3XvAui8upYQOdzCVhXBpw8UW1/uEkOVOQxD2UD/hCRqjByjnV+BNqomsTqabFPkep/Jjvohg9i7JdpNMtKShvb96wx5rRXsfDFOjgQDJtaPdLCFK+DJKzWOCXD/9p1KwWSV26T2rr/G64O7O1d1xvV4mcReDu7c5Qle3e+wq7/Adk4Ir55vMrJHZxPqVLRHyLZIAy0ezt3AcyfNYXq/gO2u6HmkQwIoOTDitohNOHuQdkMqYtgnXdKVNxiOuf6k4lthtWvUMwI05yquR8mF8hdNipMfcUmeyxX0tEhj4RLCUMou4FW8uysCs1s3E8aGMtfS6aRQUXji53gpzf7DD/iViEhNI/HOXkEvFw510p+j4SdqfcoaDsew3BSQfmo/gq8zf5EFIygVoHc/Avvm69zQaoTIunP5JP1Lsjbyar0gQcTBos';const _IH='03e8b69afba74750927e4520de87e8dabcabf62a052425be8b5aa36b924ea9ef';let _src;

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
