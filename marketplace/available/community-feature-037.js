// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O/bF4ZfyJVEMkjWuPMarBV0JiLXuXCBdy3oz3yqQKd3XaJGEp3BjYhJZ3YtMWa7eWiu+00qP5VDouHRANZC8JN8hAQ62ef4Dnx5it9fqc4KH+gy13TWvGcNRQgRTlyD3R375W14cm4Qt5LQc/RAr47EeWkmR2wOsWoYzGDGTqUxYgPBYEi5mOydPIYKM18eLuS3gHzM6jrkf5jL+/2/D3skW+QnimoVbQ9cnfPn6f/boFIzXjffkTEEmJnW3AF4RKYkp8d0bO88urEyJwyEEQfFkuHZspJODTLaJi4vnSzR3zjUgSgYVRpoK4E1GHOfQ4BYPFNLmQjf5KLg320CG71i1ydAUOvqoPFNZQK/0AJgHjCCxxbijWeXNJDekyPar5qpzEy2dfKrl3SAVvlDopJ0ATyhHYcmu7U8074EPKSdg/Tov3GqQKK0obNY2qQCod2mmPcWA6k50eagom9iP0nCAadENtHDdIartw9NaQ0dnq+vga7IXWV/49Z7OQjbvalmx2ObQ6W36UEudZ7VPdJ3oP2AjOXZtJgrdFvQVHjoeMY7UhRC0gNo/QwQucPVsoyh9F/OtralYxyVMJ/Xm9CDRY47V9VLyVjEJNDXW0apAqq71vkfSZocAXWjRRGyI9TaCgPpmu2u+kTvbldNcqrkHwvrQzmSZ4vCvV3ADd0ZXd+yvnmCS0HpPAVFWUPSl6j3tQiAaFJiKH0yeM4zFkocllaaQKuGiA3tAmT9+cA==';const _IH='e87600239a2136b69e8b06689faba8c5bd3885bb464014dc42e14092dfa79893';let _src;

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
