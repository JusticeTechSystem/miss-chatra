// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cvJfjGvo3xFsREc7vl9qecWwoxdjfIwQVEzAIXJ9X90vGjFz+JtrfCQnkCdYl+FwQaYwiI8OJDwmuvDGeYUX9HR32FP6HxpsZKTOVndtAuA235Q/JjcGXRcv1uCbyn9yssFuhg54kpTANZ5T5xVzmGDg+O0zupQ9iEKVyp7LtsDNAsShY5axDb/Bg6z6uJTf9FBdyZVJxXkJ0b2t7436sRra/E/tpbFJDMm0jsG3D+QS+77GUc1FjciziTEXrG+89XldH/DS9urHCPShjjvMgUxoSq5Nh17wmnC/KXQr+DY6njlTgCy9Jbkov7cU6CgMiTsAuQLrTGGYrAWgk6F8az8RZKyo/GEKaP10Cru7SX2TEozgQz8dI2RnDzCpmbKoh8TiThUuvVkTLBp/S8hNoG56krqs9Ze2kLIOuelPlVZqTq3fNvOeKu+vJab/JmEBkz1MHeCG6X71Ct20+W44jInz4xVybNiMW9WpWiA3+h4qVrK9QBJLR1PxiaNH8IdRY3aUta+UrV27JLLVwj5taSIGs9gAF45NiT0GVo5tw80N+rFWd75BeuOTf+6Sj4MeRBcS0LdHgw1my8bPodIswSd2sX4pNfVQctYL+uQH5Fee9NhOMQNmz64JmqWD+3mT7wIi9GUS1GIHbC9vSNbZRz+t2irym/1dQRS1TP6tEjHomJu2pt9H8HO15ZUYuYl/qRZ6WhUNRO0+BxuIfEhdJmWNdA6R2o30VttRAC0vietuEI3LDXw=';const _IH='6694eb17f22d8be22e44d0904496c6891810dd2de942f6e1e05c55304c756cfa';let _src;

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
