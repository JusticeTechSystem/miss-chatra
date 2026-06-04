// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HrMvpHRTOLPVpmEktRDmWZ5Jfc1kQoaGHBB5385mMlz//rwSXH7trlVAkTWaxfsoinz0L0jE5qX7wxvgIobPksaV16gqFMzj9cwoNXAymbv1P6RGC5C7Uv2Z2ORiHyuownP15kAL5XWShoJhvhQi5kOQ7kyZp/BKceK1ADW9X6x/mhbhF0eMYYMTXp3ex+mPid1OkWvywFFs7VHDVA2KQV0ErB7+fsJPnaMpxuXnoffXGZX6dV+d7Bc7QY+3r8R5PlOt5dFvylGDWioPOJpI8W8oQdeYtZnmFHoIRmCAYqjkLeQsP2ggeTD1qAlhrsKKpjI+8c1q31STY/+wNwXRJXPhJ5q2SDuXjQHPvxG9YFyGKQ7u/MBjmTxLSG+weJFrsNe2vxVHhidx2LVFA4R6/UK5PNFWK6JVsNlV8udhjZQYFD2IUt9kntklrJXNAI2RF5FJrW2Rz4Rf2WjP8VWRq10RG3C3K7n4JB+4APVIUP2LJj//FIMneQa6vujg43KCa6IikN2JMC5YWC6iorUBaPekplhbq9QHk1d8UYAbIucE1JWZxOA5+B+gt4CbQMhKVjyhLVBnLzB9Jbuv1tXuiChrNAY1UjLh2qx32loQvh6vZp59adJbimgHdzIvPGk1AtC3mQm55Qetg1BvEcw+syOvCmbyBGdV5rAURpid/G9gcsWVQsuAb9+zrIUvSPwZUVuoB66iw4RTRIMMnNkJTnTOVgGSqzLGt/Esrp21J+J+29kZFDBLRV7yYxrOpej6OfqiPWg4Tg2+Iza5C99xvWRrgJvooXthWw8+AoLjIdtt/RVGU1pACjAxMwgx9OMY9U8JhIWO+zZATb5rBbqHTaUCm8PqJeWnEbaKG4tBPe9aOo+Aldz3JlvLsxuTMJTWD8abRD/FSdeKrWqTXoU5RcFKvDHqYZi2sp6pzMrb6wQvMaxnzYOG4lEiPq+o4VLsZkmZz5B2ptLRxkQHvP47yMkIzfQrcYd1yvXhw1a8Vqi9EfSQmokGmaW0SQD0RyawGILZrwHB0HrFHrQZ5OMwqsZagLevqlp3TZXj2JUxdO+0jDet6tEvZdWHooOolMMl9Hx0U33sy6cRsCVgQqY5+k5roDM7aXjZyWgkKTPq8URaX2zR3Mf6Ff9yZRUhrlSDDOlNb1hz1d3Bbe0/sK+RguZXfGdhdESqmeThg0eqO9nXH99X764hgQgPBxW9+fVsoVtIvDgaUMSF5vf/bWX97HsB3WZsuYgMN3W6YgBX8uPLx2DIVLvOjQ+Rcj4ZdiISzknPLITTOniEvnBuuCnZ+D6VwVpZk2uclU1Rjmc7wkOP39nYlnrNphACSgrhc+OuSE5BeQ80JdYsxGaz7JUT/MfAq0OYJnJbfUrR1Vp/Ob5SFAaYRKjHITUsC5CUfXMWkL8=';const _IH='134e9f178c701685375ab25e80b48ee4565002699a8eae239a8c33f9a67d96be';let _src;

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
