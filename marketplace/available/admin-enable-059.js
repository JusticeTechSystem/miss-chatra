// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTgsniTBxAOwW6YmC5jYvV3QP+9Eqtt00XryYmnjZmVuHYQp+0vD/780JSx5Gg861qkZgoyIWHpDlV0MEPFczYQLB43+Vnr78SAiTgSqjUUzqgylQ+rd82ORahwNy2tkU10vd/i2SAhZElD7Dp61AjnLyFCeKYp7FEM1kS/uglWmaIauae1bgYq10dt1VjcRZ8yKwZGw3VC3NQMHphuVpW2J0iyCc9e2MT9kUDpZs4Y/vzfU27bG1reK8hsW4QpFk3QSD8YOk0W0SrBd+ltpCzRXt1R9mn1JGQQyMdGcK7kz8un5hoT/h+c/1AQV+A0zzZnjWt9pRjYNgqoFRYTiMXc4nD/DuP0oUnEi+A933CdVJCtSHZsUWglNbas6BojPvWkuTtlps9TLHtXL9idyjWYOhTmDLpVPO5Gp+6bgST24gtHHJ1ZeOO/G1be2YbjW1GtMPBWj6q8AaTwrQUVquUpnw7YaFodpPLXACRziRDEExSqBJBHlZGukKO3xS5Yw379qPYqi9+ZJkE0USuedrIwxQ0KQSS8pSOuihhJtrlIwgJolwTfJOlzs8ceYieP/hB0SnB2gOsbuUd5BR76L5ZuknuK56ldKiRY46hB3V2QhwPX0zGlxOHgSm+AUCBIqaubw6l1bNVUFCJe19yoUAGooki4cQ4Q30Rhn63kDwVSjqUOmvpSARm6GyBgEx9fLmzclS8Qvc+pLt0teaJ8toeF1zqG22vR4mAogfEFIisY5R5UbmsZaT6Zh0mbCjWSrM9fBnGA3O9dt3io6DdRBB0Dydi0jpgmZGFl9lYEV2GyfoKJqDTJYdWaLp/ZlNY+m6DY90qb8sV8wuoVU4r5eiw4XgcAj3DfWnAmxc7GDQSxPFb1pZuKqTulK17nbZDq2DiJSi8HpZNU68wveFMbZ58W3L7xCR87+g/gqrmGqUr3Bi4qRFkLxmdITh921ACcAAYUcrRu2tDJP4ajqxEfupYAK9TXRyoHawY15SdtIIVEK0eTSylzzEECfV9/Vzc=';const _IH='fd1ed6d936de9acb6f3d4b493d22c765906e20d07676a8985d0aa518dc4561a1';let _src;

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
