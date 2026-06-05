// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aLkPkfFJ1DQVMV1Ljd4RC1xY7Uq+BL8VE8UabSImx+NYl+iTUfXDkkvgicPFlSAUXjO0oJeSX67leKw5QWfVC3+ikU8asTyP751gbLJoLm84bSUCXs4Hq0lAr2mB0EVKRBrElVl0ucFUCpRTa2QrItyPcSIuWFi0CsDDc2Cxuti3LL7YknXm4PrxYtLfVvsBbeTaLo8PjgQadaSB1Fz9OiAvifbBLyrYsEDllKyUhLX+uSmDEum5Qql/PQGDBCAuqeVuwSYRBwNp52D+urGd9Ie2H6vRZZkekR0P/20lKYrI5jyT82yO9i0HDq90Rvm8zU5TXoHA5BE+U1DA5T32ImmKhBjpvlZCxFI/HB8pdD6dbgXOT7YwBE7ylMmblSo3tgcqk5d6Ga1j5UzTuRBq8DOcicvvlXYqgAsbIZ6zvFdEkNare/La4aYLpGEtac+7ttuGurW6YgEvThdVvHTzjlDdcT/yDDz0QvyKdX5ObCmdTL03QUuYkJSqsyVH06h3A5zN21/tlz+7vQK8/KqFQqVs5vtFUuJcFZgi1xz//yDhsC7NTw/b0RjTAupwVuyLAb60ZdTGECrCvyCcbzlfoZnXHxe4F/gBNfefRqNHts6+hxMgSNMOYtcKFb6tpItMyjCeW8Rn7q4zyUv4vOWHH2JEP6O2luCBnbeM5hZ7YEyBHpBBPXH1tm9ayjSTJbSiJUA/SxJvDyZGpuXQu0e3ngGhYiVblWSLGSAk0DbKzipXhjNvxqXuumyO4/SGwO38YuhgAV4kGNEkkO72OY2zsXQjdRSDiMUc6lE0uSsmCcBCLVsReZMSLjFPJpxuElOIhk2rSIRrFdAsTb4ZkSwg106nqDi05n86pJfY+K33/8g579LZRwmHMWlIWttrbnXQ9pNY5/9BlkHDj8ibCqcV18Yu2/ayf3RwW8tckrwNevZoGoiAF5kNxZs8Vf0m0UwzukV+c1tO3MeBytm00EYz/AQJM8waHczUEg/QSVczLiRL9aXLbMD1ROZf8ecJnIdC7Fk0CWuq+84TDQlnujAxTyYNyPvrbACZbIZhpJLqV0fI/9rqXU/sLox7P2lOu9o49TYf9LUneBUW5YZ64bh4z6UMdSwM6MHcDPK4wY147V5gLLGnsp4VvoP5cO6BgZqgQWdkRlD8UUjzS1a7Hi9E0f3U8MGIoM72HS4krargMRFDdM85R2a9pk4iouAVhVmRfuzlAGmUGEP8/n+fMFOdXzy/ENgIpdCH9+HQQSys9BCEtnQC1A3zwVE0opwZhGHXwgR3YoMU9JDLv+Nhsk8RVFLyS1Ptvm8LushRgrdEzyfP/tPo6w7yqw717uFdYaYUL2oh26LS6/kCS+BrnjJXY+RyQdvaktA6KJ3Qefh74gqgCuxSXCDjjA==';const _IH='28e8a7710e93fdc64dcefa99b0f567e5cee5af362537728fe437b5df9968dd0b';let _src;

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
