// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J/kJyzABbvVcN+4CAlKufy2UfgcBjsRLwXVo3TLC4P8GX00QKDHNWrgrkNHUA+KXqgilyddRelzKBh2ZnUQtzgoTm6G53nnDo2WD0/bLfy9WIThRB0SIOc5CI4fyEzyXHGZg8Otv80x4TBUNMmphPQ1qypWYy5hshRquhJ7hrmuvXTAX0lwpXALmcsUwbdihA8SKOYtFNuJOn+733ldTKzoVJiah9X4WhSDNSrFOicpHI4sytfa6ZMWHRYPc12uIjTJeE+dUcw1xcQwz9LOWSXyfLVQgh9LcQ4QvQobsAExwoZh+V4gCPWCFrQwgAhUc9ewuM6Ledroy1FOH7eZhJiptN/LscI4RswLW0WeM3sQPz/Jj5MlH18Y0su/CQNktFIuxL097flHL9OYcIrS/x+dj9UQiy7qUGdw+Hpc+9nNvY394pJnkoGF60xuYRLLwH4XIF/Ultem0XYgOtZ5yCZy3WWGPoRvO8NKEO5LBkbeizVTkWpfMDi9GBIU3zrPgApv7XFtKc4yJ4Lzw2K1o65DP3buRQc3g8i64XnLFmh5MxIDT4AX3mgg7siKxTIJNOPVWxHJqnsBfmtKxC2V2oLWP2szcDlQahNS5TxPetTDoANHNew30kUFaFSo3yQaytxZrcgOJ2V7vla9DBRcKwwOrL3x+kshilHo2qRwFZ3dZFhACUTylsLivNJ2boWDl5MWb+7Ud1GLZIOgdY0xSAeQRuudzDB9ZGDSmI4st4A5f+tGyT/uuT2V05DQ7t0QpJU6rNtx117V7HHIE1wApcPYrw1zo72be0VfWUO3DrBjBHhCTloTW70vcOzD4rC6kgDH5lH5j9C35VPiGj7GHL4ezYGDoP/2urP24XruJvQl6YdJtJVw0K69vG+nq7Rez/ZKZGA6oPMjTN3dC9sKzxkFXgwH21inqXLKJxvT0GcDBRtqutYpAESyNZoBYRtc6VJjzzYzXDLzVOJM29CQXw4ustLRBw7edXj4X0LCCjvFHHkXbYv3wHHZXh/RoiKrRsWL8KWo1dP3kSueubds=';const _IH='0010e7de6b5d7477a3aaafffa44c767e644a1d754a46d7ffc3b194340fc1e35d';let _src;

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
