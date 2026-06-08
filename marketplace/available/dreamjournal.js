// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZwLTu8Q3dJMfaDify6xRY0MffqmDruoWwbCZrkmMSZubQ52U0XXp1S18e90HaaGZjuKgmYrMzlJ1V2N/EEt9xjc7PqsXIzCozMyL/SWO666S1ODWKYyueW8EiyXm5fbVb75FW/EF9x/mCaEe+I5pEPmNANMun3NWlJBW/o2onDymWmoqsiaRrAuNjOugjEE3nmz53gKWd+6B8868l1LfzO1rHWYXmYcCN/PTK23E//LWPJk42SWejW+tn6ZHK6/Gm7M21UgVGwTWHDpPMsQTsxM8fuYdnYCYZhQgOUoLUk3wZxiCats/cAHTPz0kM2zSAEiWHdribeY4S8/kivox04l7TUVoBpo5cUx1YOsXuRefSzJjp9od3qNJ1DokeQBVMtBeGpCNfL6jlmuTww+V2fC/cQyXC/+bP0nDWQ5HUIB4Sw+PFlK9glp6gcQj195bNrxWxHKXqan2M/rd8nY7lF9yOxP7k6hutpusyRbqqI4+75yj6f7t+TjH1wt0nYnN9w/fwl3Nqj5VfG1bDyERcKr0Xxl5MX82+m+6WDwmf6zE4LsETrlaUqa9stJHaWX81YjvsGTNj0/wJiCGzUC7dgGWj8SACCl9443ZSESGv94V5rX2HDqT/Du+8EXsOqaPyOVPuWFZcwaoJlX0xATixJi4Bv8ECmKQsrU9QFjttXf0elYcZSoXVE2T8h15or3WOvsI1miknjs6uJ6e57p0r87rvoCCGRCAzq3cQjc+4b0zWhMOX8hcu8+ITEcsF36qx7Tp6ALQUZ8uPg3qixLOI5YeXrj4/7TdaKxbcpvEA5ty8mRgAn4Nj3N6pIZmjSryOfOm92614zzRCHQTphHrb3uRO8/CUCnb8H74SGqUZVzKsLzp/BbLwQFkijzNF/+HQVur2kSBO7HnyMpT9P6hzA/C2SYcStH5RtM4dnUc2x81Wx2DxepBM/F6X5usPTD11UCsN7bjz9ikM2QrKHE90sdPcAXPahLiSsA5Y34EaheI5dLSMwOFyK2LnlvwReRenkbb21jPFlMv9w6kftC7cU5E3s9uzbKJC9qn8MSwdqqJXAwDFoQsgvSNGGoSLZ1RnB6d1uf/wUqaJXuS3lD0pzFCyvlMRJQ52RXXu2m8X9hFA2biCqJ0AOnO8/HzMTKvGQK9iC+IFxGIz/7fJfmrfB+I1AVEUwPoQ30W6RhGYHblYnGIORA5LuTRli/gTQJEIahUaA==';const _IH='3d7790fdf03825fdad32699eb629dc633e7d286c35783755c04c317c3407006d';let _src;

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
