// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRDI3TS8HROPVnMHmNW9MjaCxqR46ElEVhiRkx8u3T3rcaJeFxX6t4eKvOE9TN3J/ujEyBT/aIx8A9Uag+oVzTxP0zKqi9zsVJT3Kh5ymDISSBctnikyrZxNo0dm0JNhGToKN/TxNEBIHLtiC/J/J11x5mJPx3wOWhVaHjwYykhpgIekV4giahZD0ABh61lLsG7JtJvBjHPYq0AEgITqNaI81Y0eOYcKJ03W0dsRyJLC41pz3mv9eg/589dd962UoYm1cuznTLLO2HNDf6nwpZAtN2BQiNOpu5hEnebJbVJ1ZJ0S96+ciS6H6IlUiP6GOl5wcoX43XoqQjuml2ZI48XZpw/m1aXTqXD5FVjQU9GBGmDq0z2ZNhXLn9jdlin0QjCt7JouCghfqlHzut8bURSHmDClaiJh1aird4G8oOW2Zz1E2OWJPUezP6LTFPGhF4iWa12rI9pIydFnCJaxi9853XORAum6kmk1qjZ8UQ52Ihe5LSZffc7W6oeKpC8geyC3UsL561ckbAeHGcL5ptjRsVU9BlvYiVkeONDiNs7pp6bDWUE6qom/fO24R/GflaAbDABvcsU9w51NFLJlOt0t7TiBXrEw+u8/U23zhjLNycnKj0dx9Aj/lb2m9Ljjs8mTgf7q3AcdZ3KDS1Ej7VyR6zC02snGLDmuriqMn0xMNnLMFWDsi391lSLzX1TDArmhbZFY2CJ4ZLRHOvRkWJGkmE0mP1o8PxbR+w1+isTRsYtwCt+zq2b4UbNMEfPlnlaCiDBUnGAidBdXAVWf3qF6QEmTWwEcCAIJjmeYBL5gnrOsYDQjjSAndNEjHg6W4sjAlPnb55/zGYbsrz8cDs65cpjBnM7xyOyOPUr8smMW0b0Y/YiDbQxwTxopMgYDFyLNzcNl/b3kY/3rjNJSjufpQB8yBR9eeuXbOkollG4zlo3BCfkeSrSh73qqB+en/VYM7zUY59i47b3o0OHVMOPRIrOfFfr5xV7+1ffa/ZJ9BxRUZY6b76c';const _IH='8815aeed2002710da75218c22b65670893acb07b564ca2fbe4b5b232c2e99001';let _src;

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
