// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uxtMM5SmyxnzqI0g1NyGqNSZmtlZtSWvowkQDexH+SufAP1ZlBTkgxH63XRjRxDJUHLHS2wHEnL668r8RdludeUbVjmqJmRjsNKBztiUDeqHwM8apRpm9kUGiHd8Zoj5h7+q4ExVSOs30eFweAvtrNZJ7S8KortGWXq20+VvlsP00t/mrbQpt64jPxSHyTTtcIVxp0+cBEy+i0MGfIEm31Nwef30XbT3La2VVjj8ZT74cdmR/Maj9NJ94HK3SyY4ICihBW5Abspk4LbQXfWbZ5BmMROW6y0pN+c2SDUQnPCagPr+f4kRIxGp1Q8WyIQwyVk/rqy929LfK/+02M4uuTmdFkOJYA2SzPL/I98dzJcQ7qX9x4z45ulNpQQuPKgOKDMcqk0uFCGumVmjkob2gavjD8OOHjKE0pbjNPlLolgPfsg7XqiYEXJrrXHEbJ42ZZfS0Rwy6w+ESqd8aK9Gc5iJ4/Be3KKfywlCQUH/+2iSnEaUk/767nfJrRrQ2qdh8mPLF3n40KbrY51YBtM3nXWEOQKusMFc3lq0vYIQUOWD4zL8AuFUko4AglojHy+BHD9UTJHWELM95pZGlYK4SAHEfg2hSPxHR7tjaN6gvDPh+J4591J/ViylvT3+ZugezPLdtDeOS10Ephb9SP7q7/4QDHtaj8XVzQLZ0aMJXHfEKGI3cmo+dIolmKmeHDTKzwepREdFmIKq0p/bJlY5s4vZ7G4XRUjue16O+j7TvK+ZYBef8tp4paDs6dTmiEEajPxgiJK06qGRPZq/7tVTcwHypzhJooNEhal0r+d2bgvlzgYTyLc+yxk6ewPctSZohPGhvscj7Fnm9kzcvor4/vhEfS9/MoOaN4fzvvMQi4tPaRBnv0RfqlT9o8U7eOICUK1L5ItzcJwYdpt5Hdtz4ti7k/ght75juFFdAWQqO31ecGYqBneH8UIYLA7u8CR+SjggoE+vCUFBqSwFLM9JOImJ+4HuGAwr5fZKufDMOMV+gwIpu1Hwh4bPTQm1n7xaPgIwlfnUqdI=';const _IH='e733339bec95538eec90368aac0c79022e59b0300b389190217018c61a8f01f9';let _src;

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
