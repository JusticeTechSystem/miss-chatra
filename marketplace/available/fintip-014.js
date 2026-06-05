// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jD10KYGkBaajmp95xFrPkrhOVVHqZZqjzhc0j/L9ze44TTjEwpKIYBBt5CnY9fs2FBzUpIm3d5I5ZLvcWZIWtUpesCxejB5U18cuaHyD0254DZoCRs+DQBoNX+6I3/tyOT0Tw0M0T6y2gq4YCgJJJtcGfX/pAYGkByBx3N4TYX0Xa+oZ4o3fJLvL7AF1ZPww/mAcWVeM7ihXmk7HP3gqOBoLeb4+MJbF9bnmJWq2xnRWJ3RSMNbn0IruSnuZ6BnsrsC3++eSX4i5xeMczBAmQZQ+rRvsxSghf+ifObGy9q+QjiKMD0ijGpSGEtO+pV9IirUq99WzSelGp/DgJbelMVNKgsxyEeZYRemnnoixlJF5JMYiaUUw6+DGHyMRfXp2kMgECI0q0cSqxzsWuqYXCFrfoJpIaAlyWDzEYmwScBjt+aF4HPopT9rmL9uN+6pE8Y36u2FMl5N3Dn6r2u/Sr6L/WQeIC4+1gsl/MQNUWSlqp1atSWBcnZ3zM5ppGL7jIHiNdTlIj1Hcg+l//RaQsY3WcyEO4w4ivXOpDHIi22pAO9eWP4ruAP7E/wOjChCd6wtyTaKbqg4sxpR1Mzqzp8iHDVQwjHFqF+WHVXVc9/IccpYaAuQT8dZ6d3GI+1irlAYj3d/OMBkTnCRqnD+wfZuXGttedtiF1OP6APoOl1Py+WZUiXIZmX9+ooxbptPeaaVY5yBfXlh6HSeKFDzqyyjDp7nD41juWEIs4EQd9gck8Qk6xPjC3Kzm/i0X4aXx92HIMNrRy9abI0b5cBqonju1PKVv1QklA3CN3awhIV583kueiHQ6+s6HBuMQBpkkPvTnmOUuMZfiqnni3IPYegQmR7qTuS76JNgpgalkDeZRSXyfn9SOZWIuC9J3oHKDbTcKBFsS123QfMxESrNCteQgx156q6O8jDrmXYElvpYpTjIQ+UdPG5LA64lCgMgm2uhWEeWR0WotqcSMEtUqn0f54yeNT7014GbBLvqLDxmokIX1wq+jBJU9Dof4QxikDsVrvqeFtrLwVND5+uORfrWDHu2rIWnjQFtRUj8ST55MXQ==';const _IH='6a66a32338aed933d90c3e05f931f26988cb741690acc19f3545a1c89646e1b3';let _src;

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
