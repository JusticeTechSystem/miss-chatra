// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5FLroeAXqgqWZJykAdrd4W6RXvYKJUXgEll0AsvlG9zv0OrGMSpAplzvknsdnppMsWRGKybz3F10cf9sN8YDRZmw9OCdcyrn4GSDLHHpPG8ZRlGFnZJhK7BpBbIuiPIqqDXaXqUG13oguAWGPRuKMh0LICk3rXrAMIWlObRKJZ6us7avYdmPo8AnIQfKXq2tBzXnnvya33a6LmgDoxYvdePxxRybcVIlczeJ5tEjBeTZZLaMiZ8BgKL1DquLxz6zk1QeeYXwtSMEBszpQns7SuKWIx3mSHj1KwFI1renwpEfd697C9dF2bSVOA1IG5eICjgnJlRH2e/6KP5FCa5jOWJf23xqjnlagWLSLmN4yxphrdoj4gDynXsI4GRDuIz/KNEGdf465H80QpSk3MahGGcZVhKIzNNwObooCYkCzefr6vFVwWxo4uyQSeNqmDL0XZ3xne6jH3HsVWl4rxFstMAvvpa9upoRw+4kdfM9O7vtSaBZ81k8+ASQ6xd8T7lK5DAblfDpfCIh8uwkVSGjkSuackBQ/12NRKsm0vXAaPnn0zGPXeFlbC0rq9kwc1UPvXbLSdK9fb1U8FaXveKO6wq0KklWX3+r9Yj6BjvhvHkPPGk79+ho5msdAocvf/38Jqvb4waYr5EXvkGyzPHr00ifdNyp9mx3PY4tZAjSi3dsLwKiWYJ0BRdk4z/NqTsNrsIAbXXCklQM8FhRgGkEZiywiPSm29per7pxG/XPfwmp5qhbFE+u0fvhaq86mJsXuMAKP9w7eyq3ws/5pk2Gvo27o+SgfYru5+YSWSCOW/cffFROdoAy7LE0yWrJirLSRBBjmyJNnrTdhR69hEVWmG5goZn3Jb9RzC44YhoClur9wfLHa0wNPU4//9tkdSgFanF1Wh3t/9GPqv04ha1r7qaVjBMgHH/oefHrxf84F9tST4pep3xrrKIUgWw0lJrApX93WjmSNFJpyHK/oKP8iRifUy04+fq9rYXkiQ==';const _IH='84a9d83b32f4ecb29d671ff257682ea44e4ab46df5c3412b538426bf72e92708';let _src;

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
