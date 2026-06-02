// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MlQjGTplxO0L5a0Vty1rxebsoHk5GDGV5wimlsjN8ra5cIAlBJKGb8XA+AtXQps5YrYEnjQj1EdUWK3eDHvpVW/s20m9XBVGuzA+X0e4MnbOh3Y2IVrh0EqEMZrPpW/u61pl7aWxE4nuXsDPVOhdLPDdebu1kuE93yn45tNXZmMQr5UXmlPeAWiKHuUflF+j2q7hkn3oJvg6z/tjpXPGBI9osp8AymwPleFGoVF2I1a7d5BAZsQdkXaWqOgBy6YYmV1HHnL1Od4a596KCQQj6cwg+hRnOzcfE6ggvSCy6SpMjoYQ16/4tWeLS7n/4pWrAOoUPHAb8FPQYoRUyOar82a9C2RvUtjHWVUE/tXjArmRoXoSvuWGyMjIVvCI3+XFeImXfDcLg08cyg67Xu/BrjZvd5fJl8XwaDSAoRSoyUXgwIyikkT6bYqTrzmMivD21QMnOxMNJjv4gwSdK8RqMnV6V87OYeVJJY0+h9Cr8QtzfWw=';const _IH='943bb8d3e530b6af6e6c80b71483d1d65f534bb060ed274c3b762ebf3a798c3b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
