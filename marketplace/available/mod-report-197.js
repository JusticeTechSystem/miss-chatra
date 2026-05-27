// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yDRx7oUmDfDeyvQUc9WH+pWZVPBFL5rpBX9ODgoVgIBlU30ndevbhhWCYA3DPJoYZpAgbuShS4aaVD4NPRGRb0oUx13KBL11lo+u3B/+eE8ISXlC/I4lKD4Bt/7VJdEM4h+Ffa0SUX0Zss4B4W834dZXGm+yTDd7vqV+IAtsOutLkKGA8oE9wqRvD/IdfHAEFmODe664q59ceSly6FIVTB7ZSrZwgL7j5KSj5r+C6ybCB7Gt7ujRm/PbFymwXFmL9wlvuQQMP5/zNQiji8zfdipB/bn1YSHWLT0n7G9AZxc0XQM6kzHBDpRztdn3YcTBewtmPmg3PF1amg4KrnmsgVUmbwnDLxLwgeeMsQNdJDF5E5MPogZ4Hx3frg1ZGMcHeHngASzHGOENLNHCKMbguKnfzwjQ60XTsK/5kFg/Fvp0vxeO8XdtfpKFHOKwJZrKov2J//NFsjl030/lZquKr0vsodq79/FWlqxA6kUaLCpr4QNDugr/Q9dj6+vpfSsGV8mhBBxBJXLidI4ZgtOhEihqeaF/a7kwGv8UQiQsEohTPzcKwcCwXJvPFFO7kC7wGr5gAZn3bJG7FhYU+UmL9Ovv3x4zd0ni/Wn7eC0GpVTUf2RjZDFrm0qYWs7/yT+EdUo7E4i0psGPOhGAum6mvrldI4WOV3OrLl2mxbH9qCOQ7azjxR/daLhTiXEy/h0n4RB6JoYwUER4X6ER54ETpKhyFTIXzUDKrBduQgEbP/nXMfxTt1LlZZHnBQSCLPZo96Rhf4zzT9cV9XS4gcuxtcIJkJ6BZ0ybL4k4EmRVVXMD5rXuNU34I29yyAzkrGWmd95ncsCs16gaDASQ/I37q94tHBzu+E3g9hy9GrrcZHxj0xJDTLgjZmis8QW9ZofAFN4BdAK3CiPBcSw0qO6S6WkPsDoqbERNuPJ23Ln6Z0hlUdMYxp0QEkqrm+SwBfGr5NPRr8cMgGNQ6/0b/fhIJSIFDvYm347fANbC2lhOi/bfhPsLlwUpXW5b85Lu9Q3v9iCzoiUnkywiBJ9h4n9m1gZainB9WoauYcKH6nDFIsqJFYKlWcn+n/gofRfsfb78s0+NOu0oGjXK8nRNgzhngDLP9eXE1ygxXxVoaulys1mFSd6qoka5zNhufFTi7ZBNQdOxDQG23PoXJYUolf6En1PqLthJIs5Lk/T4m/XhXC2kExl5HRqz7B5PUJB/q7qg4FTFLzhdvp2q+i8zxtHwujKOnEeT/B8E/FMTvUVVd9hQw9YpQ3ZVmEl6+zu4jq3ABnmQF8lPNOAtRjbbhkm7Viz80muoamtNeS7MsMFKGBEf5YbQWku/XO3IZqDMsC+IfHIuz2azbJBNh+ZRvkuycZe9jqwot+og15NlovW2pLwKg6BeR+ba5w==';const _IH='95d54aa05e1b0446633e8838444ec9f2ce39c7c40d14bf26ae7c0335df43ec55';let _src;

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
