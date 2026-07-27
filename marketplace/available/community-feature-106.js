// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQym6Ime8MlvjEGXem27+krapvezc5XmsrcuVdI/ztnXN5IJcj5t29AeSua5OpGIliVh37YxDdmyx5QcC4vAorcXWeFiTYAsNbmBbgObhTIoavpIs4rI3obQxdddguWC9JqMdqaee1k/LPILrrWhpxjZwOTRxE0NUjf+Q1aLma+shVBpiuORquVAV938sIcSn5OJiFDZ6FTlfRaCcmUHzBXSbr8V+3kQGeVE48Wba5M7FckBqNgoOvuugBKf60A0ghBCf4MqleWyYMIJ1hRCjOdpfkEYbxx1uXNZ5gTFCoQrTdnuOHfkzCVZLAf6aFIWAisuWVMaBl6Bwc7EYGsvoc5lmKL5H04DzaX9n4AYS/S47MB+qJR3yEkOmZRKNJWgV8JzrVVI8j9hbKNlmtQFrvO9hogIyLa+0OyGv3TRfYQIHkREBttbi8/eSbYqwe6LTnYCIMzbvLbY7gFNVx9fxaAInYcbDF40l6IUlcXMyJIKRCM1jKFgVXgdNYA+4STXVCih9Au11XEfng9ilUf6HaJOdtb54HBpuGVm/08aMvTJwcWIUpKFAlv9Cvr5sNJ9/C35Xb0PWSs9UKIdTV9uUjgDufChsVtFYmEDprL8ns8ZuAG2vm7fuDBYfIQIMWutnjhyX7tVIEJnpCjRpYS72EeBer16fM9fD0syA3WQhTb8MCRZrrWn7rh70vPL4u86C48U9AGvQRsXIF1zjsklTZjZQoHd1iepz4=';const _IH='cdc95540c7a36734f1b50cbf3bf0e227a2a4ae59057d11c590ef75837f1b3c4d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
