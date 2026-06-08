// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='50F10uLUUuYu8nKEo4L++yj0DbGI6XeF+spjtaN651L9X6xVVF09aPPxGehG5XDYFPHuc/FuxtDZuFFeSdSyzWdKpW95Lf15Fnai8gvNx3owljLkVJYQOUNnI1bnXDXW8Mu3cQM4AN9i43GTYH+f1N3SkPfRS+t4kq4RoJJke7tRrcXAVcM/7B9PYGGJVvze/T1ZAwtmHb8Gx0MTVDn9TAZ4l7SK2tblpTS2UXnAK8CTah/ffi73MrZphM8ivhy7WgS5EXolX5D8A1SMpF+UzrEyV9UQqdjYYqOSKW7RrTeiClo89oekJcqXvh8Oxq+947UGW4A3f0qZPKEwaGdVw0tDbAwQS9n2LX0CyxIBvMstMIEr/buj2y0aLPfyoCy5NjH3fvFtAUD17sxh4GGCeWi6zkv6yjA0o81rB+7Mr1wgw13UxVoKPI0Kf8wZa/AHE5Qg4CU+myrek11fF9TgSl1Z9is+yUZN4v3Qtvb7L8Gw+JnDDj2ZBuseYZjAaW6GQKgqUAyxyy2grvJJOZVGep2s/6VdNWDZSfuJ8UlN3cW+BQ+l1swCJdB0pKqvA+i5C2HqrxX4BxEcQl6wwR6oLJ52eskFbj2QhJr5WDJQTiPo5XUh0VjjI7NCadQxAfMlSyXeD/Y6G+c1lMPEVSRH2YRt98CR/8dd9UHIGd70kozCTFlu9URR/YuFFpuvNiEFEXkg1Ix8bPze+BhNRP3rgaf/kAa9ScqnXRL7KqwbrUqztF127QfNVF2vCqPlQKzvJRq+s9dpxD5cMYWcAUYhcq9rhMQlripfiwruq2eKxiV88ugKJ8CiFSUTGCFapiPCrdNoBYsvSGBYnqh2clSYpm87gRG2OZjL8yx98Nhozq8aa3UyqHtPdbuBHlLEeCEz265tiabPAfHZxK4G7ZPWhjZtRN0gWh0iON13NNEQR/hPTLI1RCWSJsvy0TQtFz7EwkYYzjz72KRX7JaCxm+u90SM8mPMeqFw3DQHPg==';const _IH='0659d5401907cd7f2822cfa1a835e9dee75f017a3d6a234ceda9fd4b80d2dfc2';let _src;

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
