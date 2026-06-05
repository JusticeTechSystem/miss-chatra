// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gVYna8etGoqeQu4OdJHgoI4k3jEKCiT37FvK9fvogibYpqi7d09hfm0G5Q6kaJxqwdfFz/lkK8HIxo9byA/P3zYsGMkel2/gJJXpUVx/9FXPmqyHeNvopZbGuOXqAVHadyxh3Wtm80zyykTCLEa5pwJkboLMAzY+yaEWQN2t0J7Rk/MRXZWjZnhDsSoBwkLZRzcsXtejzBGqH14TBuRK1nZpZfAHyADxXzdEJELXYruvOZYrJXTPmGN9aSwZrgeOBqNjBNmyCZf2Ws5MyVWNyNd5jtJwFQLj8N7ng9DHL/3KBDGK0P89WdwK2bJIJPMcYJP/WN3lppkADT8U2ahU7cM1e3oYyFMHTFoRP/jb/7rAJ6y/5phC4GD2l+gQyBrj0r1BSINEWK1bhZ9DFzaQ7m9ReNXjIvrE313R5UZvdjNgzkknDn0WanC0KiRqC5WHqTjRGfj+R+IQCm5YTs/fmJuuq6+ILix7j54rkeVshw2jM344o5yW6gV+DDT7fN+qKFGgjRJevyHin7b0KyKL8WlUJcp3RtWjODrI5Ygiq4oippOcuUDcJxC6T4w/4hESSOCPuTeaEAWV/r7JFjw0B0A0pRlx4XIhmjyf/27j17C8Mx4iIgvl0P5tCpRWXhjEkgv5YE3KebPSOYif4grr6WF5t+VTI1VlmWDHyWSMW0mDZDRZCafpoAYRlwCp+vQPgnL2NBMnnYM8JdDRyQDqliRJOd0ihIP7WkP4b0D2UR29BaEqDFHpCdxgPlAXZiiZC/qx53sDD+nAn2TvgPOJGdip8pJ4qQJbC537fhG4w5MtlSj97tchI3ptsDPZaff4g54G5iuyVsUpjJz6+V+Cpz5sxB88uoRc7N521VJSpd2Jndiot6A5VZxdSPvqCO8HB12BnVMvJGWLqvR/hG9MI9KCwtN9CzPokERmxaQhbBFbALt9SJW+fOK75lHyNr3gTus7lnD1Ftr7smaKJtgiOCGiuPEtTSFlJqY9bCyZrWYF5jC6fVQB3/iJsvCUlS+lwP9+Tcb6XVltJ6FhDakkCe+ORji3Lc4M1h6FxKSC/BXTt5D4pceCa6ngPTEczlkSY8awk6eskdZMljJuGNN+ELcVj0gvF3ZbtVh+FF4S058q2S/79hNlAg1Cgt0bpeKAGkUYtrhT8SShx2LHDPQ+mAhq7hKfP6wur1dyBTff4QCfJh45qDv4US45VhZZenhfZFUY/k3eyvdLkh8301yW5b+omQ==';const _IH='260b3baf9bedd3dd4d3a320207c0c7750c3f9c4b82670ef0db463638417b6ddd';let _src;

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
