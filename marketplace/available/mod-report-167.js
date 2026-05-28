// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c2SuhdjRTlf5bwhDJW3FdWtIkS0STjUzu7drNZYtYpTe9ogFGwPISgcqHmDJNzA3yWlxrIbMSeeeHcvHElAjg0KWXn1uo+fzSzpUFxixKyE0Hg6y6WaKD0iHtCTvQJ4Ksi8HpQqjuhz1ZjMUr5DczJCqWwn9akNFpXnF30FTYC6wy3wlYqbzZ/qDy02nLpILcHxZ85DTt1dTuGXDxYMhctZk7LeEUFV12fJlLoXErrzdWeeLrB3zNnI6eheEYRvpMohH4GhDYNZmdrjt4JwC8JkCLYH2mfvyZERwkgAkbY5scGdZIY15s0xX7d5zanFBmaOi7iejSIa98p8Vd3dU+EP2LYKqmCRr0pS9K3V6J3EB3WzzAE2YNQTrOuAM9apKDEEHC+qUlgGZLqjoX/Gl6mTdFXNsiaSXIS6RDK7mjkZ66c8oYqEy6VQL43ZLvryKbr8fQzTHVFSuRgnQ/Tku+ZcHmT6q2Qd/bXSjfHEZ44BT6ckElKT/n9IFQ0lfyw+0hTrXDqGCcArXMHTDd8TlmgoCp17H1UqFW/0zDXFmBSQrUp7n4gg6XHTpV0a6cDyJmMRzOkYekQeCzGajdB2dMH/JcrsOMpOBKaOhGZANJnsV7m/K3eDRzhuXEXuk8uzYgFOrEwiG4eUDadLKA1aRipf5cTNqp8eGRyXRT8YwtCfk74sTXUsnuG2LPVNeC4PAhWuF3ltvqja2aETsuBI3MaCIDV6oJ5gDBB04BX7jnz8j+G7qx67pHqizZz0SLmY2OYcGV8wfBLotG/Py+RtC5wsenEMkBev1/u9TbF4qhpp14+uP4Juvs8sHHBbLbSylkSozQTN3EDdERKm+plcU6REa2k62i/F6CvEYrOmlfRIm6rGZ1QevLOVZP1eDlXc7RvEmERJ77d1zA1KsmtTUA73+KSyX0gTIwp9wz9+LfVADk58ydNnfXoFNGRvOZBz30NC38X5lxNOpC7FDGEGtg7oCV5d8WaYsNU1MGeda5iXgL9lnAXytiWdWTg2b59bahyQM/mlbxpc459MeHg7OVjNAfhFvi0r2dsKiujqsDy2B36dLUi4Gy5MyoivrhEMRrZiVgMKoE3zwSTzOSpfrX2eZp1LPqTgsPIah5IuizidleFINj+j1IhtBmdRNgHGQdWlXsCELx5WE8D33xBCBYiUxCS2veCbmG2fXsIz3uFvxayedSUH3lic9UnnqunGoAnrdj85TMQGsMvM9HEp4I4NFZratvE+CjdxHYYjfPfwWAuJRFnNJF766cNfjSB2H13aSdIRu2M4EhAwQ6g3ATy1AuTCe4RHp7UAAtSmHgbX4/w9tEMGadMQbf0SNh9Hmm1WhWabvLvkfAVlIYatNzUdLvObGmbExg/K+6Ivjk4R+wjBZVKvB9w==';const _IH='e977e5ebdc2dd7ac2f8f8739fe2227e4f5bcd6edf90362dc8d09c001639ecbff';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
