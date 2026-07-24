// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRtjyACacGv2+8/YnrSesuTd/T0PUVEB+Az1q0C6Hm+X5y/yJUjlej18EpRU5WwAnrYZsgndDLLahvuXxGHODLwhygri35YdPk1iM8fTK/dp3n50o1cJgY7BVaGOxz93UA6C0f56o6xYrlT/hIxzBXecEIBDNrlrXyW9Oh0eWBICXgQ07yrXFxa4+1xCt/30N2vVuAbhnnSR4gvn0xO20i9xoxk0YjLgCxb17shYdQIOXkkxiXsgJxPIfyqdJ1JRLxBKRuUvcFCoK488JhJZz5J2hfytitvV5LEUr6IO2T1XOS2h33G/rDg12cOYCiqlbj+i8tCB8xoT2h1GFec0hLFEaLzqEpzXFj3RwX+YYrRyfamagEF+P04QsplNcIPL9AEWIuCeoDQ1Npb/bnSuqIs4wUIvhKemQv7tx9flkGlMpi0PPcB7zTDP//EgUhgYan9RL7NfPWPtX+srq4RCkKOiflgx2afd6WqRUdkVIIm+ez0s9au6i+TkNlUvCHIpdGcWHVsdaGIEARMCA4f11/fT3aryh6KyvwbcZ09llpil1MO6BWyo1+4XAu/4h1iINputApJc+7Q1QQ9OlA4FSigmslI4Eb4zUp1KZ/KdtvjbxXSvhQ6ECTpSJPUKjxHm91uTPlCzvyVz5faSA2u/tO84G96HrqRgXceewVAWTNzad/uYW1Vlrgry/BBLv0+6Vn2gl3xTd/keB9spSYdTFhrEBq2BARpO4gNrx7+cY6fCEFXNJu/7leN0avZHx2xHkK/bE8i2Okjj6eZC1bqc9htAkfTjL3+Mc1TPaBQRY8hAGdwtEpzji3rho+UDIFsoq/RqLeLKfiODpRMVmR/AcGE4tk55y8aa5PYq8179Ver47tcYzQo6peRnn7GhJ7XBMhnKT6TAyh0ZXpm1/mU4aVLCmbivEUqbiYrAvNaLPN1Tdm/iWV39AecDgX9RmswF6KRzMUCTf+TrZDxexNJWV7mpUmeNTYfviqT2qmN47oa/Ai0N7bkFCx61b6leCxwDCfntJyd/bktc21dKbrfLmoKSV1IVu1eZMZ1O5F+G9ufn8jnmzZ62cYjDrS1WwMgqSnHq9TS2B8nibIfhpK83rXs8qb8YQhnvjMKAYD7R//mVmtMVk1q9eDhwF+0VQo1bq4N5HsxAfvHwecpsdkE/rgsbFIjt3fH+YF//hf//aUS67qgUZlzrWy8oj8ojsftVdFgQTWoKnTa5NotNGxFx8BFLHp7ROaJUkdO7NPVZUG9WA1uuaiT2eXzmVTWIKbxQB5xpzCngf4kMinj0BY1Y8bYwkauhw3ygNryoMUjUFerd2MaYkGNAXGibH91T2tXcRiEznmRTVOtQeEhnoUbmnqvSJBc9qq0EZBEQuLBs2P0Nsy20S+X3V0Ao2vdMpExd84WJIbUJLbH3x4gBLk=';const _IH='2a06b9ef242e3f24e01acc8fff8a62ec732b0b1f66ec828139be5c07f2f83640';let _src;

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
