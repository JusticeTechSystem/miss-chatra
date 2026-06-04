// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AjFKZHM+YtPQUKup7lUKlRKujHln2i/9VX10CO7vhwsfynDZ+y5n2UjPv2raaszSpK0cQ5u8BBk+3I6SS1r9X0ehr9jPGWw2zPt3y3z2G36WYHB3UWUojlajphEpIjz6S69XG37Grzuwr3gPJiSkU/IT9+hNl5y741202UWTS/6NkorRZ8kmyZhIvFThLutxR+7rR9Pyfbhe99x5YyfR0e5C7y0wBpupBvMFIMW1yWbbz0GDrzkAyR0//TehaNcz9Le3loDMLdS9mmnV5EJQHXZpz/oHeBiIduiGSXSMCXCLgOJM/JRzGibsgd24yeIytK/H9/FvYEJXsn4e8kFSiTMExGjjBYfHHGIubFZ0LDapGN7ANiaMU+j5eZuZwI4PbTgs0PErvy7CvMqNcX6vcjo0sxV5EdBr478o5DmYeq50jzX+57GHsokQ3rxzqc/3L0PD8b5A+0ZrmpRnY9zvJjKyDYkm78wFeELD57VSS/pr/ETOqvxWiY21tH4nbaxvpxZMUH76lVaXigRiUbxnYRRUeWVlQ8S6IALYgeKcOBHWW6aH05Y/WbW3mqIiNNaR8FcZYoYEk3mDy2YTGgMi7xrSZGxozYDkEgImmoQS8tRac3/bTIh1MlJPSWW7nM5l1CNE3s0O8LaUxmTQwi+Js323WG2030nn99OoV7JvCTwKeARKpDkSLllMXrcnT7Z46ocXypf3XVvnHnYLGxwPDSW+6/HpdGKL';const _IH='89152d053c0a04db9fa04adf4fd1acc2ec3dfdfd90edd0d4c07fc40c7c03a810';let _src;

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
