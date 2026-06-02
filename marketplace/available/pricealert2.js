// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iG15uCUF8AesXp3cNDMiGBDhABano39n3HXUM8ozHFCILXjmZ2L7E+ZfUgScM67TAyiZcAjvYFN9Or2hWxz6+ypmfWb1SIE2Ptvb7S0WEpn6FuHWlLyXjI4QYjveUFbQVf7i326c27veKWfGEGHGudcAFrF1dgxr82YecL1tyf/Zhi7H+tV/F8Wj1XtBlRcNtOdeDOKSqxD16bYcmy3pJP9ZqkvH+HTz1dnOd7td9U7LTrmZNPUQI0yoOsTj86IE0Bkd8KqBOJ8xcf4KaY0uELWyMdjSkOIfx/wehEjBq6uJ+Z1bDUDmf0/7VweOAgItItCW9WziQ11J3wUW9rsq8G0LdA5nYaq4fLKNG8n8gIee/ZEbAfy8WjD52Z1eWA9WObKm8xCxR7DyBh0gInRLkAyLE7Y8a3Ka/BCFgMj7V45EmnhYDELTgFXsRNivj6bAkDPZbsoEjK+vdYNl/FkPUtdMGY0qgMHgDXyqVhpz/ZNziBjAOdPfTBH8bRxvcRihKCzo0Pz25PpcTBQcq/aiDSA7aSY09thMUGpOJOJ4wI3csuO73uNWjMi0VH+ZICHLisOx7lrDpUwZbFV46eS2WrdCVnZg2eHlmCQ2kWswUXkNO0XPU5MmTHjImgbgj6TY4Ok9J0jltVtNW4QOEs2V/aR225ZrQUWdcQznHAsa8y8Rd9h4D+ZJQ19Sm1U/Ef297pTmzRACwYK8iDfC/vy6ETU+GlDceO6b+HE3hSeCdgHztN0L6kUIbQdHtFSGHSEH3zMJnx8aRI1zeoQFHDTcNB0thyEDz6t9SK5z+iRvz/MBOy/0GaHoaJ1ZDDaCAtT3n+QZQMVBoMBoGxaRw+IhBNJpQyjbpKxGy4IRHK3HQZRrxK8CvKSPOGi6K48uHqG0NGuT4OBeYR1BceN1EfWcQfg5S9/AAmlxcfdKmalNlaIAzEgl8D9P4r+PUDFcd38uSX9jT4jQCuUSb/ASREmOinVAF/VR0Dc3mEez/3qquiLjLlV7NRyOBR+YZjETa+TRQdRNtMT5AkxrVYGLWknAu5gkZGpTaDR6nA9cw8CgVRdwHcVjvQMvMS2Mkz7ZrfrWnwuYhBtjprELrhFfu+AooYCOTiMfk+Dy+xDi3374onMav/RKZYNYW4xDjdib3yrPzAMe8B7SQd2lAURDzHVPW8Yd2ADD59PrVVg700dGFyLilYsvZmkfpL/2D9PEOJtQrqiIMBg=';const _IH='bd42c0e16b64e245b67feab4340ab5a0bdebd1ecb607365106ed15d156c35882';let _src;

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
