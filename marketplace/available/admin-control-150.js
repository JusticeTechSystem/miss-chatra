// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g4WZFbOQmyMsEIPeLMEXGfoC+NHjpj97WpgPF9RBcFq06OhsgulzZiwJdmVHA37RESHjZnfy1jztIfzje5yjiXzeptsMdgFUKNG+kxUJcPwcmJS0qUFdKjnRAOF596BBMi5Lf1R6o6k/cutYmZg3NvFxi5WZixuxOuNrUpwFn9eOuQcmegwx+zfE+8/rM5sWDB1WWU60BI24yS7vl48b3IrIsJuhluGHVD5rNnRyAq820H5NdEDqTGLHBpBSGRR9UncM8svsPyXT8W9Kt8oFP7R05mqDaJPPCAF9JzFOw8KsE2SfJqTU0/4MTD3Xp7Xcqy9gA1h9hHfXR4RskRxXDLAIMQmdpZxW6WL4wNcZRDrVd5sy3OCQqZqJ6twlROGQ2Z1TiTAZieiw4NfS3+eRsAnyf6xhKYFBDpMpAY4uppD9Fiw3VTXuKUT1rTzrD3H9H7e1SC4tcoDSDWEmeo3U7FKuY5SVsQBheRZ/ZWxxFdGecvUF2xT0q0dClOj96iwF+u3F1KREhBrPuyi+tkKT0Q9OXP1QUY85Qyj2KNGo/K6LB2c88VMlEywqOcONdhcK9LybsYIIhWC1wkLhgqM24PEBDyITPkIR09nPNT20e/u3cABIeggK9qspIjKuXoQjL4XfB+jgCkYFB5L9a2SpAkrd/gxsylnk+t6IekDdaiE8+e4VSXtyWWh8MoPdk56ml2LFTakhYyM6vhw3726B0dEE9vmmoTvhIAmveAnTZXJHqcDzGyv+7s0gE+7RXTGJu5dYhg64H3Mtms1VH5bU/tpsri7zB078O7vd2/eaCKnB/aHurocUPrG3yq5USMsEEKShTeRBt9NBIbn5wNam5lcv5NiLc98koCrs4MQLtR55k319hQ9ymlOGLmnudcAAHD6rZN5Uafr4Aeu68N5Tus/p4+ctA32fBpeTGmw0uWlfoUML6mdj8WCDmpmk9FACr+XRzGvQXNnu4Au4ZuhSps1dh/LaRiGt/L0XpZ2cM5r0Mb5qASJ/eOae3NyzRr4olJuJl1tbtm0=';const _IH='e80bfd15907e82f4c7006838d38e793850082da4e628014205fe1006691997d9';let _src;

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
