// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uhB03zq4XcS9jrKdQ8fAROyldHZWJ/UYoSFnXXyN7wsndU6XW5PlwX/7WpJcvNGBoM61spfxnQUgFG999QuKqGn/zN+0F32Xl0nWm5R2MuuEZhPX4CyFDMkq1mmRjVa+KANoappDnWzMKgE2hmW4ZGuuOmz7igSLiWcyRlOu8aC8/if4a1rO2JFBh2j6iJEwURonpS4/Rd4uCMeyK+qnIvqcuFCiYTP+0GdTEHeYqdLFaUhwI3PmR16CJJ7OZSlCEAL9u/9+4yHk5MYm072oH+puzHrx1ZeNF5SC3tOm39H/Puni6N/vznaPs5gIrifgRZso//4F7264z+P1Le9h6Ofyn624mOXRHhUnnHKw52r5OzY1Ie1e+7XcbqMj0sra3sl536sVqlv63aLEPAdO1l+w9/hHB3NK38VCgvRTULBhYCQORiRUXyG1u8b1Tem91DwceoXaZEaNnNAKy0qa1hiTtKO5RV+Bh/TbQxuZX/QWHEDydvtGAQedFcCXAtAY/aDJvXLAA2Pe6BWeqM5NeqsEzQFqOMqdQOAMdoFdMwtqQPgT5vWFRcuAWvliWxssRAQImRjtDsnWuBvYvEZTlqsFLNjIaOchpvmuGl6i0bP1lAunk9yyLjnSlq7Ig2RLFKFs+TrNRtiOYBg5mfvWfFYox7b2uyjYtb5S3axgOdhuMAwrKIMkBoRYe6GRqPb1gfrLO2T9pCGuVE740Rhw5fdlcbvo';const _IH='e02cf3f4c0f71b7d1f6ef97acdfc6783dbc1601c05cb610a8c4ac67ad3a69d27';let _src;

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
