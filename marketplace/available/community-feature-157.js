// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ6A5wqMtxKlDV7XfjEXFJRDIXTPkwT1RPZctB0NEElaHAGVY8Eez1/ra80pznoapQ7dKSPr6hbnYRA/oA6hq64a1V9e+0rOXe0uU2vV3oqbcbsZHBs+MpjnRnjFNLlrJmfSeA1by1EqUhoO2TVxNrCHP6uV3IL1USqXUGjShZoF33cfzIB+HVuqBEZymOJiSsoyKd3NFYch2rG49St66rSeEa8uDA6PTGz5fadA7N0d3HdXX/wIsOgIZPEipAeI0ugIwtKapIUNZBsUbRAXg5lNCeEZlbVIQMgGEvCv7O3iBU9YcVBZKXY0rIwh8U7OlCxhC/y0+hFM+rgBppxwaaH2TArvDGJ240BtwqSlAhmsudB+CtApl311t6K/sQxbzp6lq60EEZeSNv8sLCgUrt9L0VSA++LXRT7YPcSPke6LmrwlRRDfIAocUqk7hbacHZNuHEVVNWsYSGpuCfE+df0FKh1i6BoYjgtVRoo3uB1ZPQZkw1y2c0Z1Fy71ELgR/X0XgNU6c/PrzPi4Vjl2zu30OZ63h7WPrB6wN9tbYbluNj7Nh4KZD1cuvn5Xr1TRx7jq747GkPQ6QP1PD1itbfXy2qTJwDcetrER8xRwA3Rb93vhJ/K99gTEvYgLhdErRhPtkKZYPLWlFpDOAG82P1TpfbCuPScR+7buDu5DQk/EJjYjrCQX86E+AN6hafB1Coj6cfpZNWMieKy6C2lPjQIMvK+4gQjFYXdig/W1MEakrv9Aw==';const _IH='6feb6eab3ff7ea7d5beb9404ea562e59aa12f6465adc74a13f98fee8452f35f8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
