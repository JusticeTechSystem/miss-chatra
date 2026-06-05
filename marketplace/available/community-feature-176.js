// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HPqQfBZynNEQ4d8hesqTeyGwBo2dp6igQbwCbnGe6+Y5lutn5EZnbrzUnnnjABDaB5MNbpLwegRgfCh5TM1CzdN8BLFYj0skx9ofINXxx+bFpKH5gx/qh3Xs49gpJjQoRsguyG8Lm52E0TrNmt5VbTJuJ3iqv0KVJsKM7zbEQUxm3zeD2ncCBzadNELRYXVtTq3t/+4ycDb/dId2PDgBcz1i0xeXv5XlWMzmNZv/t0zSq3W7XYapv24NNtTDQeyA1CsWc1fshsehj1IAciDJMPhY5OpRV3e7sr4QTXqLF1Q3szsfOyvlkGfvtpFOj7xS0IPkv26eb7Tk8rtq/qKGO7GzgdZhTJwBYUlcFs7Gy57D9ALy/Yw71zspBfuGLdU0feDkEetr+ox82p+1Pyj60fgwzT2Z9n7nplJVZt27f1YG7e5pZh0Kr4ueIA6g2i5tcloEChqVFxuF2fVtNcgOK4QjtMsHJqAP+V2palJ+xqrwa4yi0DeFV6QYW7CDTyIthJht3xfvyCSUpwA9eFUkQo7T1iJaEbSFWaVvt6Hs3YK4bZGCtmDZBrh+GSCGLgrMJzExu3GVlDknpvqPEn1VbrkKijABJLoKwaRDqcVr11usOuImSJ5KBusDayYmRT+Bk664JbTjjF+J5blrIMgDS6jzxdlaUUsLXtrqFuoPe3xrzTXuhFJEad9AIvtm6qNJJiBwf0VDDZW1v+cAY+JAbed8wjcZrifr';const _IH='89dc91917274f53be1b058253c70cee56c37ee7f93bd6149f14eab0c20353898';let _src;

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
