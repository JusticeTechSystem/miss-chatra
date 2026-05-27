// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='doqW3iE3tOi6WqAtjr3UF8p1UEvaQALq9JtYAsrpH3VKkXsw+nliaxnBi29Ek8eEz+DLjGJcOTCl5PXbA+bMSicpdBjsL2cpFOBksSSR2QHLiRRnbtQ8tuifl8FKi9MGA5YbFDD2AhzDeqHMix8pZ+qI1Mcz8dgtvwki3L/KsZyzJps71lTzPp4ARTKNgogpkmplt7bKQCthfo50QjkaWcWghaQCReNzJwaevpk9695i/g7dHcw4ZrL32AZ8NOWi5JxjC7DP3SvwxaQnEcLPmazHL+sNMEd31wxVs45AvVnkdc9kXUFik+VPN666SagyeC93UYqLrt7lWkATUfoKy8Kh57pXvwUtks9DQDP17K062KzSbUcpSAiIr05cXljq3rjCgDFib6rml9I5bqaNo2SML2nBAvp04LK/FcjoQsXPq6B6wOL0IXUJPxxKME7qXWjMDG7RyI7J5a0zMMeptI+cf9kipjpePemZ0n4zSy5zCI4Hs3jCOqe8AGD8zIsGESSnUADR6aq4aVn5QQnktdO06xrh67GmxHetpm3A86pcN2YWWkxB0aGxtxPbJ0AwGkhgN/nVjLbXQvDvvy8gZlIXRsV3RujUoRddoLjmWOZWkFEuQDim/iX3rlyR5zVtpehZ7jf4cMiRqG4XYP+4udu9/8lFN9xMjXnHbhMk+w7X+r90CorGlkABqfhcsUeBN4kpIliZRmwejA/0w2/QvGTtn4wIzde0qkW+Mj6hvSe26uGURY6Ey5NVMCJe4sJ9upM5HSx+deYaz22J0OQiDtHpysbXkb36psl9A1OBwX9y0pycmBZZboyBiUFsLCrAOvH6GN5SKgQ+xcTfY6/LvNfjo7hZuzBKR5ogJ3WacqoRChzFSy8hMMvraHYf+AjHGaWW0Lu8s981IILdEn7KMPmsUPlMx1dG7hTUzUeEnDwT50JxY6svs8L/v5LEvAoYXRs0QgbF4bpY+PFFhCMAuWEAGzjdqj6yX0cFZH7XN3EdlIeUr3YhEOrvRY39j4kia94xmNHVdjw=';const _IH='637571985eb73b2468d1260a1a406b54c4d0f30903bb58ef445ed1d9bd86731c';let _src;

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
