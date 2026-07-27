// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSyxovUh3crMIlT6ET5/CV3VxofRDlYZ4wUZ/09/Z7FDrqgGkWDZrAYiC/YzwWhODS8SaeouUw5dMcp0Ag5IYNcTOvHEqcuICKGamZezO376lJdqL44fX+CLyr65nLUFnRkdVabI/xGjvhYL63eUSQDkqKVJQ0b5h8vdSyu8LWUSGm6JJ5hoTYA9iKM5lme42D9zEtxhIjGKOWwYzFN46oH1wqC43jlauNFNyyOjB9RE6fLHCYF63sPJoN1mztgGI6IOUwMNh6p+cB5GCYItxNVyqOrjyKBx8xkZGKJM/DxfbuerbPk8CLO1oOvF0iUbIXUVDy3wwqeK94jx/7Wta6Y5au9odFesMhF7SHkMUtI24ixJj+JA3h+6AWmNSl4UwNjsgXvu71/3xOcouFBkPepDniKOHF2Gvg07GBWQibPZd43iwLN++Z51SlqST9cCs0BmL/U9Fi+GNSv8wc4It3QOOb2VTJM8RlRPi4r2YvbEcOqRXiSUtEHaBC2q9+vB45/Fgvj53dIUqGe4cfPYy6CUwnvWWHj959YDaunrRBqKTCPLRJY+dmM6X7IgCXXw6m9Q6IsQviYpA3fIIdVG3ypRsVTr8y3ZkmXyHhM3qDM6cwSiNWjgMFG31qnbzRQAgdPpbb/n4Z83yQNkPkFzZtW7GwVua3LasiBUdIIDwO0qOpOIy8H93QIGoFmSaKPql9glGvCX6NZwNzZyG1Rvl4Z9X671bKYradz3rcbE2KxNFOy3oTCnEm8UfzTpFHK7MYj1EDKptrxVbqGqjUdxcWul8vBOXqUSCthAeKeAuU5Ao12bfL4RT8G3MGtBcEQUhd57afCSE/itnmSsY9qQ4I7X8IR0GEVoUrZOjDgMufFtnUtndoD1Y5ppr3I57a4F/iot0NXYjyL85bnfhMbmXQNw8IsF4aNNaXjFgq0jztYaIp+435dfhOgrfRGPQUyORqb+KFGsOX6lxtoiotWDLjkOEppWKM1iZ31xMZvwIZ/e7tjdOnHw2rQodoHkITmbJPN';const _IH='a33b4588c2aa75beb56be7f9b714332b8251aeb674fe7a8ce6c3ed8c7cda4b4b';let _src;

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
