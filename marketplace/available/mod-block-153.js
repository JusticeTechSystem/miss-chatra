// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='haWb58pHTC2w2QZQCxkILSqOKYCKRmaHvAN0OZw5zHsw0gxGllJQY+cwXBFQTxc+/TaO+GVRiMg4JySok5cbJp43UcgJLKgtqQMIjR2gAaRGqSgPeak0ILgOm1SK/zWEzYFDdISVbhi/F6cv8Fvi6Dq+uJsjS/v0NOnoaE+yPwt1eyV20ML+ci3tK4aW7kIxGA4NYBMRSi2wlYQ3mCv9KX6DBJhORfBVdmZzoaoCYUpGTdkTKOsFJ7pfUBmnqzCVYoT13+GzypXw5Xh7NNyCAfpOQ3F3xpDqG37iT5wfIhzZVKMd+JHpBIkJFw4ooY9DZxSw2bAaN0PBojbP9OkA/Wzvkp0hkgPnRUaENhAvE2jdTUT3QHKxu3bQBXIvDKGgATgggLfNok9wKCxKXgc2dFC9vxn6YVi4UTZo+ySSVeRrI1a53pmyMfX816eMrXPgDJJR4ZnQ8LBsg9iTK0IpQSrCBbKLAtBMJ1XM91m14VagcsFX2k7btTttstds0DQXIIVZsCYRUdPl6ToV0CIgJSeJIt3BSbLyxs68DLgB0L445/Nh1fEARQabsO+zyXEAdVEuNzqqqEVRTpViKkIUSnAgbxE7IWAhcoUc7zdM0W+a3KfX3+nYyXoHgsKTZVy7pTplqN0kWr2kPiDLVmoXjvh0O7i1y4/xSiFkZ/zUHQeCuZ2+41vamHM/OIeRpv0LtXhxznd4PREvE39mJQARDrWsgssHSmYaBqYxE9VqJB1+KpC0Fl2zkpVaZvXvPmnwYIXJyf1uZywL5X5Y39BykEEEUiA/b8/T6ivKkoK6//ayAa3FZMtKn6/+4L+f3Q5Ynsf6wxu+Gs3klgZyaC/6x/FrE9VTjfGky0w3HKGJYKxpQJ1IfKYgLDTRT8F5YKLJvLn3Y83IrVq3afCxAVH9p8i+lYr7Yhi2deJ6UMzPDaU6J/oP8cUkC0un43SiizW+8qrbwztPwqH4biuncXhv8pt4hHL7yWbUrdi6eRzfCHpLugSWj8T3pglvoaG5grM+T2Tuk1dnBUgPbhelLJ6rbNjfBpIn5UAOqYhNDa4tEP0muVrG4f9YR0OGX7Od1R72Yi53rvyle/39+ok90SzJOoXUFNkB7PTb/jVhr/FLY6a7NTFnfI6gc8zFcopXXNcveJmmxxASLu9s5WTdzMOHaYz3F+UboTsdkE2hx9S9fHOpvKcO1wHG0T3nGjoSAAkmmeO9cQ7v38nA3GyO9P0YrNU07fDqSX49PsfLEvu15Mc/pwgfXy17eFuRvuKMdd2yeC32g+GoOAx+Srgp4uXdnKl3xX8WZtglOsU0Nrtp+uLU/mmp+JQJ2lHSrW16oiiYgGD/QcSqwyig9L6QcGyKaAMLtvlZy2dL5lh/b8LH';const _IH='fa83146dbded31946952f67aa83a0fce10d031e29b5bd38caf05493e583db6b1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
