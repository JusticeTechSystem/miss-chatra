// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SEGilzhVd2Z/WXdGoY+JkSPFxS3zAv1GTcc2azQeC5+0YzExNk8MyV5yvBgM8oh7uRkQvavCG6EqkRFZ9Vf56IVZeZbJ3CV/CTU/En7QmjIRd6/+RywfWHOKqXoQqCeaW2jVmvS0oneNhZYX8YSjo1dMV3WjIRBucLHP+aW4B2xog5LawGnLYofaC4Gu0U8GK7UWIHyxvnwMGD1G7OB88VgPqEWoKh/RdELkv7tNwJILwtu/I9xk6S8QyvnnJgZyEyvCuIQY64FSGOJrETDurwSnBft1Ej+l9awWsKgva69J90mjEMlghQMV5scHLkXQLxSP3+rRwr0K3yg5l6nW8Aln3KzSdp8lOappkp0i2eh/zgEjAROa7c/FmxEHp0qSeDNtkrSGeT6X4xINseRhNWfZHwfqgaxviCKKX5JyRuhqtY3cQl9GqY36RRZzJ+nSgGZQZQ75rEBxHOH0kqyOBHcx7Kd6j7eMGdcEdFZ2h89GTf96twjmB5Be5nvIPxghR+ADWWkC5vXHoOY7pIvQpnNzmyh+zzrbKt/l8s3Xvq/zTzskLF68SuqFVrGnfLKgfJpMpj4LjQvJj3HbdkLHDnuw9GoGWWN0Oem25XIUVBmxyhW85qwCOPmOTYEoNWS2NtGXTd6muh/R8K9ufBnZwWX++cQ87cC4TjoltHrOUPfhHPStnqbcEDt65wv8GuCqtjIoe2NqPP/th98b/aCuVM2cGY0Q+SqXxaUjEbGocKQ3yTy6LiocAJ2pezMOqS+HTdypwvPVBc9s+blgCKHLoGkYU1h6kchJrO97y4W171krN0GpXEKgKAVuuZKMZM6wYMqX4idbgzolm9QDLGBKY4mRztRAEnkYMXsnfozvdjKv9SnzrFZBof/AdSs3ztcx4wj0KRIW8v/p4i/57KHHXVcz0bhTX3BYoBXV66UAzdTdDHg1Y4kiwYkVc7wRWX0efx4bbnqfrBowWZ5cXupLWza2GhGAPwHgq0hMxG9ZJsVzZxIeyBi+AbwHUBwKLUJHP/v+z/GpMuu3hXCILkzlKCS1Rmd4PWcJ2Kg+g1tGjliZ+l3sluEqTnk/XVW1n2QbmMj50+56OA/ymKZEQ/YTRkb5he8ojCCV/jrku3qAzHF/odB9m6WvDbMiHz4wf3yj7wqjoFlCR+cDSXbMftdC+8hzWNN50f5LOgKjNSUAuD352t6ddiP7lScp0IjJMLxZnXHT8/p5XLWwWyMeVqwWWImTk/pAQwGSYH8jiwya7QklbowuCOzeOAgImeeScwXIMbk1BrGWGNoTnPEAs2Ips3xE55WTfGQEY4ZPwVa7KMSSE3HO53TVGxObg7nG7OjoWddaXl5CXhaxerZBxOGQPJixFQRjwRahVyme6DdK/UAEatw=';const _IH='7fb52f3b0d3d4fd03460368f98a442ad3b30939d85f7975a220a9fa0a92b8c60';let _src;

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
