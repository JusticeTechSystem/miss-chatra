// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L3eMMmn9dI6GxD1+9Y5wAqM0ZKbcU9skDpdoqiT2nSG6dv2UDJlpU/zY8gR/DgSkZBMWEv8frmiqyFF+gV8ssPkCWOaWF93Nd9M4pOXRoMutcAYTlyP4UB3NhTKMQmjErEIH+WF3mUo81xRInlB9c92wm/Cz9U75E12pfJwaxRqNV/borV3C1TkW8ze8/ZyOa43f+6nef6j0L9Q+PfLJQ60pMms9Er200dXzu/UTMVK4rTBN0inmTB7xoz3oGyenyEoxj3rDsGGs2XiTtpgt7YwvOt8O/pi5UXk8FMyUFQDUld+IuJQ347QYw3AwYSj8EeRpZDRAF3WiIYZZpd+O7nB+leIZS3wp/JzuN1ctHgnet4kWpZ9hnhSnk408E+C0BkZd2bCQL4QdjO+KAhMxr/On2vQr3qvp2cGtl3F53HwJErzScMoIRFoLtXRiXpEpBv3y5GOHR2oaEHn0lQwx7oELTGnWGWe5b1VlOdKNxx/UQWLmBzxL55k4aN5+Ec4YMS0spOl4l4g7R4kasvey002rAmNfnBkQJ2E/82BrC7Sqsf0fUbGDZaItuTJiH3HCT1VOP5AEmNOh/m3bAL9RwhlV+sXd0jeN4iV2uYS74jJzM+DptblYy1dP5baPDB6QtdpaKw+Scrjm2EKij6piVfv1XSOom+ovANBGLLCLQyLg8zhdklFf7FnQYkNnhUK7VRZ9HjRUw3GhGO0k8zlYqUj4gV8JOaQVxYphv13ZOKowN7A=';const _IH='395d4d3d5cb359cf9860b7c575f28caf9f92286ad983ae65f5fc9a93e1fea6ba';let _src;

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
