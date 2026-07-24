// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQXKqVQIvTkskKIVuf4olVInCI7QBXCMhpDcr9G2r4TpQaP+Xyqn0XwmwBjbQ8+7wmJJS4o5eYbvo5ESw67fpyaGsXvvHeLbkzsoauUWz59h9IuGzEdCm+ylaPNf5tYZEf7zoRfXVbnUGNBOp++/t0Z3WTOuQUI9JM4jR5UEGPYewSh15j1KzZIxn0RJT5gS1TeHgUtiBxayqWTBdRlw0u9miHpnbym+fV4FaQOC2GDeQ5h8tT+Q0123j9BVaEVqoTXfb5OBmdvwMU0Ec3QdJ8mdu8Dp2mUpFmD/rtgbw0fbOXs/jhZS/h2n1tUsAqVwjJeow6gd+ehmajVnt3aoMQucuKTOchyyfOMTrI+E43ArLxILmr1FZSAhy9I8t6E/uhjk7XAd9zxT2U7Rc9xFqdHoonFqduCaFBnt8fcYaw5ZSbrVnDgWWtJWz1/1GsoUtEJ4n75zCaUcB0yckp01Gf5MMJOdGJEs+y5c0xtH5jjZYu+hapZOUzGmk2rmt3p5jwGrVtkxyz1/VJQ3PR3v0kP0wi3GZGdpbMXjyxNrMJZUcgeU4l6l0McfbB4FzbDHzQ53X9XmxW1vK/KfCPXhv47OMMc0/OAk6Ko7zcomJX6V0vt095n7D6/Q++z7Sz+au46cg9P4M9/H+uuigVUv77dLMPa6zXebY3YUu7mM0Qpt0u2wU2AN0G7/nb1+arO57q7L1wHEKMlHRtp7pbQfZIq05HqFtzXI1Fwqb74Z1lDyVf7lT2quA==';const _IH='f8bd9f009e7c8e6ccf2a52f161812b6a846dc7ef5dacd6ca742b6aa9a1113e5a';let _src;

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
