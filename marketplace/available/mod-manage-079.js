// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h2D6ejW3canvIgqdlx6feCTKKR6/0OGt1MD9GAjcpc74fKUdy1CxH5ORKBTa1SDe4iGA1co0eNYPKyKmdxs7XomSGJ1dkwoDjNcDzB0Gxhj+lCNFt7O3N80gv7rSVbUXyCWY6R256OrE9SA6ptGZZxjpmhXTdS2q3qBqqyo2+v524GV9QDnb38JtNr+RVDEjc5U3ExGMWcCBqfoR7ULApR36DkXaKGdCsecB2E3REmSUOv91CRoWOlG8pLLm8xWED/gqv2X0+QKwIvw1ScWvu89+AWLWdmVizKbZUpv266lu8b4alc7sXweA/H4D+56dMhi6OBI0m0mJ8TnfZqLkjRKd7aTG5ihjrYXDW0kUd+IVnjC4z6Xecf4m/guUyhdsRxSATTZI1IrkKPk7FRNDx2YvlqKiZ0iBWqEAidDHgLDQ7fCyZqZahIfqkxlSLMoa4QxV0LdjZ3VEEkjxn9ngwYxQtg8/PS5BaHFvS7Gkf4lYi+FWHZMuIOFAqu7Zt5Cwg6pGs8V/+AdlJyF3fHI/f0nSCKGw9H5XO7PrWaZQqa2PlA6GKIzn1Vyuy+33lVhBxP/O0JlZi3fGCYMd768i30oGC/VkLXd2zZd135upF4Y1B99VcM+xYYsJjdxC1wTompVoFgu4JPuqmM67G4gErWRHfua2I79JJgtTzOn6OtDMKNQLk9eDZr3YpWmEMJq/6JyvcGAic4AgdqAlqk2kDKxVEyLUcV5LrO76d33sEfDI4nUeZpb7DHhOMVcqFPhu12fFtC9YI39gp4UnIWBrkcFyNToLmvy4kkdg1Wcf4G+xu/3i54iNNe1q6774fA17AluwfMshLBJ+eTsnMFBmPMnd0ZDlqywgZAraeThc/wDcUg4C2ECKm8Li91emXk6llschsDl3rbLaJk4HaWEY8B1WofTz1nGCwpDzxYytyS+Gmgf5oF25w9fjDknyXIoM9jX8SBLkTOyyx67kSU70TYHvyWS78MP4hUSSN7ED69RrNGBoTTBbRor9V7Ogc4u5DnI8gyrLig4kOOcEqvQltoVntKCOiPYcwLP2pVe/m9HAv2fG+e8TAgIbHO16fcsbR9c4tZYUjQ0gHS8YXnyiFXm+N10DjefJ46H4PUWc2oh1RF2CTx3ypP/W2i2YyrYwrgkCC5kmXJxSgY6ylb08kJRFY6331w6mVPgPPPbOzhMpDx0oYMg+3f8lvXaqBrFn0VPZ6+nhjgNKjwbjuqh1VPuvaMj1Ut23OFgW9J/EUrTJvWEi/vaDDuLdwTW4TND1xAK8jjKH8JreV2B96BtFNeiVnecoDL6fxxzzTzUShGO8M667P6dfcwhEV8Qwt3KVWbk0Zf6Nks76XzgKyOhZ9K6EBhSVq32BVATyfSG0+2eYSL4=';const _IH='612e39c1bf47b1f05c7fd6894d0c39989717032ae9572257182ffb2667cbb765';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
