// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQVBJToDJYHa+yVE9R2qXLASz0XojmEjZAZVmFW8cVm+/ehaJCJKOCC96qIad3wYIOWVZDptrlriM3kjNqt83EHwDT3/yN6nl7Rp7RJGYzjDmABX/9vCTfLl8BAxfEX3xG+9zVYB9qlgu0N5cCf5fSp24t9NplSbi1avDy8vYXIotBNuT3YW3iDyJ/DxrYgaxT2Lf9sVlbrF5YDSakspe/S4hHoxk3i5hKWO80WYHZyYBU+LtbJdiD0UpRxTra/KaiAvkL8PVlCkbV1wYaSLCq5sQPqDhrUzyTAq6RVnbshyMJUvfu5fe2TZPpfnLxPo3j4a7d6+XpR50+k3G3SKfjW/JxWdeV/2pzHatwMU4pK1Iy1wxr2Mze5VBKoclbYcMH/r8nXqkkkXnK9WM8HBXPy3NNtH4OqHs8rwYZG5Y98mWqKF4r+KOmYsQKyJCvM/8oaBS91LODOy2iqoorGJPEqMekRmxSS4gakBkWt8cx5vZ7dl9l8vx4EWPZwxG20t1SdjicMsMYWixBfZaXH61J87WYpLjCAN0sjkM9Pp5bp/QUqbkA4Ka+gYJ5NFNWv+xnLbl3s07bnfKd9rLucwokpxC5U5ct22+Je8Ous5keQY3ECCNdiufROlqANWG3qhgy9RFVTl9sQsTFArEnwUar80MToUav6TiXfJtU6vdsTF3fln27xDKXLp/lfd6wC1ybJqnAGfNBcdxC07ouqRkzZiC4kiGaolQHzNripxalO9JjS0Tu6i/5dlSrCdXMLyzk2GLu8kvx/ZZ67Gh19TSmYAr8fmgb2PveK6zXIAkAiG/V7O1BvElwkQljcbkalvI+EtO//qM0V2Xjr4FUR3EjIyfn7jkpCUTJyxQRGUpjypGl/j5Aqjs5FbV2MEq3lR9gLYPotRLpL2pVHIemSuda/JVG9oG5yBgV+pG2c3spt+7zXHXYRXWV+ZjgJgDWgdsLaJa23yR7wTKirgs/27NsDcXU103xMMI6g9gZOPy9/mhGQeO6H6aK2Fcl5jhoJ6SNH+Jv/guLqw0K2diThC0OcOmSJh5aK';const _IH='52ecedc719f98731995dc1aab3f087974be38c27056ff794d1f2e79455f1daf8';let _src;

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
