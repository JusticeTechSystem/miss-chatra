// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Rbc4UGz1IIoFHMTsTYo4qcLYiD7QABkodhxd/qlqGFJX08P27OWe58zzFu9T/qs688Kx6VXlNr2baiHqlUa237sRfLXJaX4XKw9v0aET4F2I8IChcc1iulw79kGCym6MCvjiEathNv1PGtvgc0hbUH/gldZU/OjEkKls5/Iedk38rvUJKOc2SieIx2HQWh/AwFMYK3sVdTxxSbOneyDa9LMcVIxKDSz4d7orvt3Idb4VGX1NX7tGssF2lRDHLZvE3wXvlJsSCK8fAKJ/fuczWCBeoxZGQBP3PsJUWYojmK9AKMpjo3KvxCqSY2lGhxMcdyWQVODooUZryCFErJ2cD7nH9hoc7oGJHqDp+JJajDnWpI4pdZyHNJDHIQUazMNL1qLY8+g8A2prDs+I+by0lQQGeSBhtzW7JTA2eILV2wglQVJJCNrJKFLCqk7O2E4Wlfvt7lySuOB7md2zcpCGGZnrx0oKkF7AE/pLq//y9z15WnZsFkvfV2N//rPSqMK2lCVYz13DNJzsQAXNy6ZQPUNYlXjDX4pDPmcWYOcyWxwvolEIwJlo7SirauMkogJ2jH8aEkYIgI3iR+Ean0hCK3se/nPqlfXpuGh2qOAqwTTjn9d4k+fUHcQvBbOMjvJN1FsJWCppa9pOmFZL2aAwkI5OYp22B9Q0C1wPEN2RQf1QR4vVUrBU0lIquKJjMjN2qRFrsfzKVyeSU6WeCfaU/ibLa+NZwYCzesr73RGaY3V65eIMEqsf/jiIz+YwDOzOLgNbhVhJojmDdD8mlQLt1KsEt20Qqhp8mTmgsa/tUu8ELNxaVLe/p/6uwJMRqcjDvIzhOXa0z8JqvvyI4XfZlpbATBe8IozVTfBY6JgJPRBcQTL6OxihBIPNVqun+Y70nea8apDWTSrDzdJ4W7sLRZ/BSrAxcyVqV4TeOcLE+leJONkN+7GWteZOqboA3nf3u9EykmW7LHCJkbU0T5r/78cVHj/nz5J22K0BjXkCklwfa+agP76Tz45AEidtbM2jRyUnKvGe7AkaIKjVbAEs8bbM';const _IH='f52ec982e476cbafd261f0a981d26b58e8125cb83af6dd2e5ae1a61ea0c05919';let _src;

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
