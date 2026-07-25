// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTtU/PSAt3CuQIOOLDzuuBnTry8TmjEA0oS3ORVRW4qoD84nSiM7Xi7+aESorfcgyMRpa0Z5XtN0X1rVOa0ljfg2fq5ttg6V4qnuDIkQ3EqfsFFz65ZqIejw8Z7PEMmOqXO8F69nt7r5gSV4GFpkmiOe7tEWAH3qgOYhAjQztXRGrQkCoNQV/6QnNg+hdV0rtYfvGtpc1FZVaKNu8vbr41efjYOGCOsgze6QMY1hXwFnCZ9aw0Hx/3Fh70YyPqV8+6kL71l4IvkujmvM1YJDZ5pJSN7h3VDDfixQ1VcAKLWZtyly8beqhX4IDDuNjKfZWlxB2dN4CIBt40rNubGKfJLIrs+ELJLAA4xR1PIenEreYKLRVII9zaWTLl+eRQ2alL5eGxY7aJ603jdbaGiJJ1kd5jYEED7/oaCQUnA49NyYB1YJUTLckMvP1Kq5yk16ewGbFV40jDdVIT85L/EFYRDvxFjX9AD1/TtHoKsAP1m7B6rAh+ZZI1xsPhefYCJ6aCb+n7gQNOZ4zB6B5h6JegjlKVRpYh6T91Bpq/6EnuR4YpzKUt3G2p43o/sm9yKuTe671gXBBARISt6PjGvH/AzbrmlLFHCQjun1RJAnjoAswG+gJ/LpkfT0Qbwff+G6SwfM3+At95ZAbjH2crdfcbsKPYlrRsBP+bdTscGD7sR4Gw88j4NtpJcuzRXpn8zeYnTXI+pSWX2b/0JnCea/39YmQvMZdU2TfSaH9U1Ejq+5vVa2A==';const _IH='9295062fd145e3defd6d7e0135feea5ab2ac00a03fe8429ed7fa026039a08174';let _src;

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
