// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rlbFd0NkZPHhJgj/3pTPReKgwTzn30buYJgB6Fv1S99mBQYZxJ0MtolsTKK6CyiSzVvl93Uz5WvviRkRmM0IqbGb5sHYhcTonNzm1cuiWTUQkp6He9VA5mX5dHBrn+YpFOcRqv/JyrfJFBPfHM0TfXI9fiuxQA23dWjcN+x7UsRt7UP3izkP2qXnH/Mbv5d1KO4AJ+Y/Za8ShSWxdTJIkjvu13mD+FN58ARghHe11eZDU9fvFKocoBAz8uyo/Bq/mz90tFt0xwQJb0KM9955i8MOVY128OF1Jr8RskSO7/8wc3kg2xiPm+UytsDtaEaoobAReide0ZPKCZRMI1TAn5lGQre42RKrsY0qMaJ19r4W3a7uIAE+XRhZA0tjYayysWihnBjpEguj7o0nIhhTkdnfEdPYprA8jvXj6xU7A2/b3PGI/694c3DVISqq3Wptyl7SZRDajyFGZK2CABD2U3ikD8T1o8dplWYrFjxeQZHeMddg14x3VZejwSJ35ju39I42RrQwTvknkHMU0+/WH/0vTSyO005yhoUZIZRYmFPMu2BwDwu2bIr0qpCjj9pbfK8CN51g7+ZbXLuxvriUODT5azXfyPeGpbG3QBABLdRx51QKORMif7wh99RJ1D4nHCN7woP/xKr20/VY61/3Fk0CHqapWoBgeUvdo+eMhKd7q3Jru9rP022Ab/0pcdMrPdUziPULlt3P8MAkI3948mg13HVxeOzSscd8MDojWgHM5iOQ4b0=';const _IH='4f3b2eecd58841fd866b08dc7d309867a1e7f016516c061265fb9ce8888631a9';let _src;

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
