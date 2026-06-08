// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vBhkrEHXg9fAs2CY480vkoHDJ073YCk5zSJhNwRsVwht9v9Bnfcyoq4nTEVjXe8IUouMmGJlFAAbKkjOoZtgVa0Q+gwgd3dxGKXa4FVmXSqlNV5bvK6aS/nIgCPz1TEHNtSzZpiOimPs7SOfB0ktwAqb9R8tC9vfsxsD+HndTy/89ZAMyqkOWFYImuRbAa19YZVDey6qPWKvKD1YeaWrNnw1Bv43rykz8YsjtgpMwRhQJtQof1wnOwc3Ghplr6fjLBcu0owOj0OD2fOGseJTOGU7IFlRY1o6TTVBUkTfZEI6TZ7KHfRc0ZC3o2cLyNfQgZ4fV1p68LEkghYS9OGK0jDAk74dgzGqbYa7OiKzasV3i7R9la9Swosch18e+nhI5J+ddcFPh6NoKIFeJWOqEnwZ0qhOzCulpMe+IjKhsZNeoB/T/SUWIkjs60cUCfuQ1KhHo4x1MWukqszJuBJsUdbvnLuzFeLFAfIPwoN24o9BQ9nHoNnZgMYWLlIfnYna2NwVAhWtTmBk5x4iBj3pmcY2Bozoa0p8hOz3B1MD6L3z+GGmyK8mdpcz+USLM4XZBNs2iAUoPo3nAT7bfKgliCFQj+MdlRuFvHxjFRmOtdSMu0HxJus/dmLwACcA0zNFrQhYVn1cJrU6K5IPLxPU4BvI7A8hHHo+dSRuY1ZsaV8Tu1sCE76Le9ZQO5okAQkQlqXoNiAvfU/Ra6tOwaWVRWB/vFWAzT51HYiUezK6lt2vPlIYzZVbkLGSFio/ViiZb0qR5vtn+mdJoGWtl0JJkqovQFpKBYM+5dUq4k7ixWcTPGQ8Ly6SD1q0HWmZKfBWbFBSc1d8yP5BuP3xiIFgmy5g18BEd+8drzU9YErFflQ+yLZgR6YrNYN4rmOV/kW/zg1im8aHwlbGyvWnCZOpCB3hME0xPCGjcpsTXppnZHbgGDa9vv2p0wj6LvucVIGTRqKNdxty6PRSuLkJLQIvus5uzPjYnpy2SjdNUFA2Yn4q1gK6L+GWvmETBaRknbbXeBYKqFqP6mYBgROnmu2NHVdtPebU36vGLu09QqjHH0cUV8+xa12ZaENcWdL6UllGPiy6vTepi1xNR5wDiSVzOQ3EAiR5l5n/vzkrLbB5gznPvYhxVRDzObKh7DhZrFOFe7Gvorvgz39dB3nAVpaUdOls7sQa2L3FgbOqmip2Ydi7RwFh8eYUYnsix/aV5tw1O/q0OkEBbeFgdlYWlUV57OO2Rf/aomjlp5o1cGCuxDjefw5N62yC2S0Bch7oiLClxnr6GncWqUWVcKjaTKll7vJ9ibQQLBIeO4JemESS3gqjHwMD99AD8rdU4PaxtxmHgZGeTl0oiEbgledRlHqFhocLcx2pEkINgUObZa1b8u7qQApxhhL2hv+GL+8qWDSwS77S3SYdzZGH0pBdobapqDOH50wCB5ViMwbtbd9zcBBSQl9cWulOKSNtyAg05cQIzLjSH1IrWDDDN4ZMOQNpRRRIV+0oKR0qy5+RdfU3RpHboIkiDGmIKVb0N9i4i0ekRaJcL2txa23XUkscoQRq4ki/WdCIqyytPf9Bo/KlerwAU2yS1SJbtFEliR26ZU4wPoeRV5AbmSo1XrMsfrHuVfwEoVYMZuutzsGmtWgIOaYxw4TS1UkigYjboYT7qj/HpY1svhEa';const _IH='4e643119ca6383c66943dc7abf0db73256c1201df4d92531b952ed1d371d704b';let _src;

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
