// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRcU79msQ9iHjKtVoacADFQA+9oqN/9F3w/rpQXO7S7oALDBq9PJM1T/Ae+v1SR1HJjmlaLEc8owK3NK/cnUKGw3+JDSGy1hMHILwfcWDWVcviTN9mZ06xZRlYX97wSt/BCZaZ7Wsldco7pr31n6i6c0nz0znSSaJ7MlbzZ6JN5wfi6Z6AZYSLzho6ifCVvAbopQ5Us1icCA2zlolg1y2Xdbdu4q2FFJHhofdr4WWxjRP+SEDHZks36fRyfPHlKT8QDPKgSg4ZXl8iiHc/OFIE6rUpGCJoJYf+zBhBeLT/1PIXNUJ2IwHWcJP3Hkaa+3P129AJXIwJ5MyLDwBDKqOTm9znn1o6u6PE9zRvuYZAE10MucAyau07SmUkZe81B4IN8QshkiHHrTLHKjUugLyjV5rbpdGagjzgujvHGqHjP67TRsyIWtBffstLq5Y5Ti8L6UX1Nx2euBu1wcjAnvNHKrlGUz+1nF7MtFGNUL69QdW50Ib48+dt5QTYalJG2M47Lx2bROzqbWDwZkB2XvG1WWUiGBPvfkRBCIdONgBt8g6CyZ1rR7czjvVjoACCCkQlz6C7xfF+vRPzgsH2BJzWXTaKu/7L3psC+YWrUgdeUFIJ4CIuDwWil0BwvOFO1wmcq2FM9jnBa4bqvpIy6dJ2Z/2IB+hyCje+C0VLZS+bfvp1VuApQvJBL838FNG7HQhGycwsy/WtCESdMJH3GG6d76+AuKk3yxRYd6cF0jcYASVgvsg==';const _IH='952532ccd16f14b95f80ef0dc2595abd806f0417c59e1514d251a5d7290c73ba';let _src;

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
