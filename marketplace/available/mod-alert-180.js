// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f+4HwjXURM6gNS5f1w/C8kBzLD58VcUFbdRcC3splz1KnBwosgUPPPe8GDSp6rF38dzau7GnSxdq53jFeJArnZg4n00CxOCcW+t7OaLEvEZKqvntzmmAilm6Ywyk4lWdbSjJyvG3v6dZp3gjSyoODMw/ycah0UOALIc1QVdB6WB6X7v8T/5zZdCWU3J1UYcDqr3GatajkiEI2T8Gav50m/LuM5/EKklo03KLFvJcV/DTr5RmFsyqZASFCKIotcO8bX9azY9Cqg89hzHgNUjTEq8V9UieRhSb4XROZed5okgYFfeNCiypNtaHdGJMYZ+EkaFqjcw0IkEbCU1AY5hi66ZXDK7bFO10iRYqVm7InrLawx+N/D8ImPfRguWi8brmQ2Kfbd5Od6bu1OaWHp7q+mLmy3AZIcUUbIfCfZ/ekGibr2Wyj8ctHH4Rp/piPvWUmyTFGJvLftA9cZR0CgfrX37bsDUbe9kbt0UnINS2ijPku7+S7Fwa1YHkGNf/x5M2mbLlIN+F7AmkjvX8pceMG72jm9D3PbXJQk7QstnwERgtIDmGHhrpHoeuhbsX62q0rTtWV+oM7dtTjMSZxb3BqkCHaSCuHUl+5gBDrwAts9cjkfJbKDPzlysosNGbuVXXNUStpfGjCJA6yb6jD7f7WNn5+WmD8muKzheQDaX5aD3aVJQq5FPHfyyRlga7f9Ncx0j9zJBPLK3nxY7uWrTb6RTxQOBTsL/KpbgcozVCO8QvRIIPY4VuSbTM3Iv7UshX/F44g0qZV/Yzp1mzBnS9IBKqddLe8mas+ep5RKceHAT/jOfZct5lVS0Gh5V0gWjA6cgPaUac3Du+luYEAyRIwYtN+DamxtcufwnEmaZFfy3flyC20GLWlSoeJCxGKVcA0Rn9hjwg1WbGKNS662P6xXyiGw+UICnhY4og0fAnHhC6lyaYsQELY8xs71ttBIpJSolh/JK5Z/xr/gL7hVYpEMWxMFeqXg2D+DHZYNFvqS1FP4x5KhNpMsv/uYlD+lI5/Zy78S/nGtg13TG8QM+rtFMJUudMWodumAl4FASvNx2Qi7EeAzfJmGu4bsyrS8jhV2ys+DqfNlxWcqznZ6okrOuet4A6O6wJ3g097aha4YnmGPb+EQm0sqnJOCv29LgE8moIhnd0EZC2n13RO/ENGAV628MvbEUWgWLh3hJZo0agjg5Z1dNyeouQRQpsb6rZsCa88nSdMTH3bLNYyR3Fh8HAJY+6BZF4DV2IRK0NrF9hAUKq4pWQ8cTZVIdQLWbIuzY1Sevx4xT4fP5mWF6L6UPbO8OLK+325cPOqlb0YvhkC/lHSR3VTKI2CulL/3DyP/f6oZyzA/ssRepKasDLrPL+izJtpJgmH6Olfx/S';const _IH='0995c40489dd599eb70d390bace4542151b3ded4adc6e3af17b09b1c41788db2';let _src;

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
