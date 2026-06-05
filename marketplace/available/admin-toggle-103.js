// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BTyuLgZmb+Vs6Mitw2/X/ogHniCe9olZrOUzWjMTUwtr1yN8z4VxoVk0FldJ37MNfXAawBtK1EEAkbdpMEV4zuY6zh1eVtbCkS788f2s76Bewx38reTqEjXyjh+FvKDtz9kCkgahult5RKVyjeVX8TaU7/FuRIapCx1QNIYpuNQPlJbOZFzd+QU2cjTl+d6hLOuzTK35ywptlnsUYo3emmFg5kNT13mpxQZ7841V9DvxYC6GTMlL94upOwcBhMTuk9uYxwKtpIqlQ1c8CkCuxpvmJFhc1fii5LMH+r76fOQaIPnUiunRao1O9tSMMpI/zsPRZ1QmMkq9E9CtpqYPpCEcKFYqPCw/7LbEfAIKJ7tf7Fr81f7egNr5z59GAhlzhAv+Dna54pSGttQWaP5TzJueq8OAX2OrY4WNE6fzZwg6NRAHIXy9SfpcsiZgdwg8D7uSZ3drsgFTypzzCtiBwFEReD4/eK/0nqmln5fVUEIsCjyvNFcZ3/CVaBkk3WtJQ8rsZ+2DI47vCr1DyuAUfJwY+Z0kTEHg3hznVSG7DVW/sMSubgzMPWf3J2Jnagc9uMP02No1QC6DQ+9R4pfoQMDRGdu4bu59OfZIXdyQonZDUOd459MROAgNm/Lykjs/vrjRbBDrJR+N9m08lpdJtL+7IQNCDjjBnosdtRTBT3ase7xKbePSWm5E4a6GVsARB/tn/BnYyn7/gYHFa7N6fKcxLXYCuKXD6QdxbkM9cCwd3o0KZPW/ZhxQcOvadoVhKNwfTU6jO2i+alPKJkIzow3dJjAHdej6eclWIibCTt42MntE+bj+F44A+irajizaT2qDJXn7fra4tR3lKNE8TnWunMIYfQZLov4wE1uumjcLf5h4qAk5bbmH4wGZK+NK5+FQWcJ4QD8X9mW2weioBng50TmLU9tk7dwvFauHBFIzZEBsUJK74JEWtqoYcT8YHMmNEL0TuOFhvsr+xyeVxMxCOCa/R/6S8EVu2lOQmpMTg3w2Eiau+PvVjGjPaIiwQw==';const _IH='2462d836cc6b08ebac9c9c76c54c3b5a5588c50f76b98990a1aa44b77d1f7e3e';let _src;

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
