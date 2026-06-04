// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nP7eg30OfpSym2YtxcNdIYF6YewuteQ0IldH343irtQkCob41J1oZcU27vOW8uNX6JrT4el+UwpiU1ogg6XDjVhEYuq75DWuPiX/zlKx+uapVXwMy+H7/ewvyanH65bSghfGNe1XTkKZgkeE8vmZ6nbMbCd4cTumJCIcN9MSITe36Q/In5n6lyBgmq32ltgkx3dauDqXEYFJ3TL0UKhJ/cGpWLHL5DxQP0HbtOB7yPWKGU8pg5sRGoWacmAau8zZ4yiu8GFOUPbjzptvvs49qTmQUDINPITXCuaLGuBOguVLMfzMMDbpkKD68NA+oINBblWTdJc4yOpVOtzPBb9IRyg+y/TO/PwSufGEQR9Qn2iT+n2EJ/gPmTzIfd9HHQ/t2yk5SKK3npRMWBjHPnygGfZkCIBF6FSLRYGvIZ6SBzq9FbTCzxB2p8fiGzdler053i8bEkk0+W9Y5mQUnIxmnJjP+7Ee1ChaGWfECUNAUtGn74iAezLquZYDhWBB+Lw5putsVQunoqsN9LuEEiPOwLuaRLC9iazb14Asjz1G+ci7/zMet2Ce32Dkr47SWTC1WLn9QmZZ6EBMLmgejBB2OAwrA7l8d1tdGCkVHRDdQ7c6PHZ8wk4SOQ10mB/rMz1Gxq6qek0cWReCLJyGRwZDi3tWjf502xKlFo/feb4Pj87kZDzhTq4posxuLq3qx3RoX41ERsUXMyzdChDWPEt9vZ6YM9OS3wlInlRVJvO4Bp8IZlM=';const _IH='fd8a884e170671d4384620634152c7468728dc030b7851b215fe4a7590e4a8ab';let _src;

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
