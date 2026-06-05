// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2EzPfqOHFxK1uJLznbdVt5NUgl/pGfDhTKRJFXjglc0CRv6MFuem/3mWpJxem6h1mdWm7ZkErTnNDTDMPyGRyJMlrZnlhPdEqWSWx4zac+XmbShr+9YOic4MF9YU3NeI5RwIztMIaYeDOOEfTuGIkbgb9a6lipEpOI0IZB9ccOCv8QGbXJdnmmBejLDoO+CHhpPVcnTZbG+FCcNU9xe3li3BhbcQLQbDfQy6jEMj8bF0IslVxDiFqJ4q4BPmbdUcfAfPerf3sA3mzXu8cj6kiYERD2U1dDbaVbRSlVfxgcdieOvqDbZ2tm5AWhzts8ch/Yk0T+191DS0KkeueDV5ZqHW+Q3xYfWhrhk+hcq9jTdV3GN1e69QhZ2RYvegWonVBc12AYiKVEwLFyNQzC120eA10KzecJeFXZ4lndiw0OjiymzGCC0sIzs08J8xHjU/ytssTYyf66Z7wTika7cNxThTbrcT5Rx0x6E3vknoEytAeYnEG/cvP2YymvX8hs/Fi4S3CTELekIFuEYsYEI6+onflmslPWp8j/IMTs/it99TigghvwwzO5WuyFUMtBGx6sT/QNAQvUiKnfXUk4fQYpVOP5ecQlE3djk8XpU6E2rUpfEoo+i85YLEht3MHaFEgCAKJsl0Lr5esce5BfayuWosSSzKcoHv92L7vjGYhaGc+zgd5vgdR/bubQ2eVNRgys9AyGHGPGkyS5HbEFb2jScv3uLYNjkv5naBJI2mNHEdfn9ArM+7GbonvrJ+UYemoUFlhek3mMiBKkl6bayafiO5N5EKhNpOSLMlKX9fcikDk1DelypPpGz6Zqqjp87oQ025VAeB/uP8APBirbo6ZmBx/DUnpc7LdLaMPnZ540jLNh6GeDxdpuyPXrUJNo3JLVmbAnYBsWOQU46RMeUafqTznnwABktLCxdbqwmLBbGp1OAffAUL622uIhkbytX/WtYITyIWDpAFEKUkZ6u/403tH67oJHcqja+z7MOgZOJgQ6wb8ewh0pXyblbCPG4F6rTSvnFpFN7vXlwTpNFHJvIHRQxkattB+LWBRkrjQaSZ+6GZ1Ah9UqTC43YH29Xn6JP3eAPIeIOsjGsSj62Oazd1lkFlZzKDS2fCe/Klq8syPt5KSx7DwF+AqwjH8iy/mvPyapjAI+ncJd7lqficZhyu9TKTz5I0aJyCZpaNLJEzUPEjuQnawuR8iYqjuUm+xzCzR0e75BvFH3NhM7ANDRYz6wPXnIV+hK5Ld+GD8mHd1Ndenozc6l1pBab8/p3BrbBdfVaOdcp7+/AWg/8SrvGV2VEEFOfgxntGczHXfPGNWktlELUnfhg3yfKKtGpK2ih/vOZLe1um40edBNbCzEKt82Rlkuk7COed23rP';const _IH='1f7c0aa9c0f03f2c5406279d16666867113f282e9b470739a59b335d104eb4fd';let _src;

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
