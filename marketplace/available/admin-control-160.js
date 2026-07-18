// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTBzwkLXUo7fJ1ixDbWFKWPemBgXtP754ejR0pIFOYq0BvTG1GFQ3gJo+Gsy7SaIWsVpB32HaaYJIGMow4U0eiXBQKfOjtueqLLmps9KKhhGgdlr06SfKGgpuoHOejfTuxBqZj6djE48Krylxe+vf/x/PTq2tAkLfvYscmRoYZqaLBIJ92ARTu4TBk4F8CFNxXubFrnZz8Uvz6LgRGXu1n1uruPpIHuOOUxJ9eBkgNaDkAgSdzVhnluVx+RwJiVoai8UhzDUM2/Q1vryl7hqq12yqhH7G2iIs5NXtouN0piEVYyyA0eLnbhyauzys7YHmQgJiVl8x1jywOhU0CYggjVqcavj2f6Y+HhdWAwJww2Lj4G1JU2SOgeWAsgMnxcljCojmh1Li2S5/6ev7FPNuWePLzxHX6mkHkzMsx0F2L10onr/OAoRacm9755kZa+0H7Z4VZaOJBYVUsHLQBdIgw+fZcoDILOlcdBqyVSZsuL1M2lFgMWRW+1/GMX9EZ7kp2QCEYs4ZoYM1JThQCypBbP5QGJ51K+4zY8O/XNfL3n4G5KdwfLUu+51fiK7Dd989cvGylXtn3dlmEyqxVLPKMKwfqZIuR5MUbzie5mvMtzgKKubmIEArrTAtfpJjwiEy6ldXxRiBk47ucb0xCqMoBsLa1knupynmT/l2yG5vsseSIOgXE7dXFGbBDIewEUDdMYah881A/R2HbnS5Zr4rjolhVFe78ag3ij4scG5D67t3vg3+ECdFm7s1R7Cc5rmO0NbfExsFk0cjebk6376WMVzB6Dmi1nxqfBeIg7h6W4EroESpjcS3VFVf01QwMEeCCyUlowhBCH50AjncLAxlOAb53Rx+cnM7KGyhcCZjv/7kN853pcjVbcJaVNW86KNK+z3ft3R4/ihYOLd9t5KyetZtJ7IiSsg2TIivK+PpB2AYLzBh3o/68QQtUdMcUSrMj/uij2MOdoGwaCz3NRXWZU1IuyUSq+ZJpTfiBcrzCwLuYVGWQ85qvwn2PvOUHU/cVeliShpwJZ/A==';const _IH='cdad190e9884415cb20e8655afee273c119dc94622d04b1a173842c3a036d0d2';let _src;

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
