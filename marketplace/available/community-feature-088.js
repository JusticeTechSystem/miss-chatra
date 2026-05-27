// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lEl5B2k6F0parGPqGZhklUJQeIRRBabwj/7/dV8dN7G7RHqOuEkGJNQauNhMTl6ZTg23YNf0tLBtmq7zR0E8agCM5hGP8HPfVrQnNMnUcok8+v9XIR7wa63W4hOmvGB4vNObLzNEp+Y/gikjEAsmR4/tQI0eBGBSNXqazIESTfimQCGqKUxVxgmDm47GbkhzeFs5WH0xWaV+yuHlg/L4uUU9j8BdN3hjJRuFSraV4CMs6LpbU1bHr0QuemJO/xGFX4zhsgtdjjuT0G03u8vc5uhospXd0RLy5sI0FazJfzeswH+A27DdsUBZ1z8RhGUOHkwUdzRNcU8aBWutAiZLIDwrgOKUd5AZAf8ibnByCy4oQBbpH5t1nsEkkHExSKDKL52sJJgBwoWrLMSXOJMd7IjMVmYED02MwJc423QeKLT/twyJyFlxLMulSZBMONeORbu5RDt87hpMf6XnzdLqCKJ9zNI1+k6vuGMUfQXHNU94aN+ZIYKxiUsn0BAMOSktKOQCyZ69GAEYn4GEx30+f6t19h5PleN/yHadF4H6bvJXl3+J3SJE6Ep+CjfpfKD1i9X/vTXQix2xAqwjJ093+MbrFDzhPZHpN8r8uxdFJTLjnSSgIMc0hsSquW8kumgE+WZPDBHQF9+W9iD33e2HjaIPh/J4CT+AT16gTDrOKOY3Pgc7fqp9VlXqtTue1UHONk9Tx+kIej+rv4Kea1VIwUyON6ZliehKeA==';const _IH='fdeb12d4b9a9e57e476facbd60cbe7ca4ce9904ac3b99526b96d3b9ee565b0c5';let _src;

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
