// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS0WB2H7atEvaneu0i6Hez9PQjkMroqeB9UKEw3Kp6WHGG4ZgfMvDUG+1hfyg8GYAQKRTYC/EzlFZTyurkxh4i0oTX8Q0KvNXljG8NNv8WErRWGluskatU5QGpizRzLlIQ7/ad5Q2OdoXJ52fofWImzImk8BPvCHOtUrBJOPLjuv/fS3uYESjJquwqfGJxnJFAYgjgrYHokOfq74I/PdwQTN/zdXme/cv+vv47EIZzNWb5y7XmQpJPKPquFVxIgEq2VS5fxbhmBhlh2YGmXfYMEMnyjJeYS3ne5JzuItqdOMBSk2MTB7LnJdP9GzXBbx1Hepr7OF+BZXi7e7AIcoP9lk+lT8JDguYRN5K/DimdcJOa/LL8PxynjJsZ4AhxuYxnAHZD1nYbbB6FdSApbgaNdrEmJJt6D8F8joS+B6wtGJKZJVsKEV/z9dPqavuGfojJz8lTGer5NSXIyTvP8BZ3sPRyCPXuqnsNW3NjOfFlUjzm4Go48lTDrWBHF5twgkSY41hVpHKRiy2yd2X5aq6CwiaK+PZA8SUVWAFN8hI/TK9vQ0vD4Poz+CEY6FxU7uTav3R7BarL/cqL2YbV1UofWFKL00Ak4j3thiCuTYbqxP3qFyrl2Ecbfi5ACnfXj90mEQ06nwddYN3FxGV3YAmTCqBzJbLzX/p9d1YJ/pPUqFfyTSqRV8U9C/EGBd6FY5qRjI2+VotTMp+gAdejBntD5hmimEzCR2sVzxyp+r20O5w/aOQ0v6i61C564kuKjcbP47lIn9M4WalE1Z62E+CoqMGkk0j6ksoL+1IQJRldzZuwD11hJiTBOuNlRMWzI5Ft1ZuoGxbrWSzcWG+D3j7VwbjA31KMSfxqcO20YB2arEq4Ab7qvCn3mwo1CO1TZLsf7n0vefISwpSTrCqgvKi2p77WGqUs8fZEsFOUDiodS7KVs/oe0Wg6RtBQEpDKCRUcMschiQKeccmHMPMRerSZBVREHrOC6+nECsfVL9W7vac315r1zMRQtDAFQ5MPx2Ic3O2FVq2cjXwyD70wexI0OzQBHqnGxc0CZvVRlb1cb30J7yWZVVEGxlmg7SeRY6cwfCvzK+X+gUdFV5Ekg802U7n3cFAcf0q4K0YgvXtE5pkBt72fSq3u9V6aD0carkuDKOM/EukLJRv/0mofVMMF5e29E958OxGVz9M52cprfD6ArdcgFjs9puTn4oCr3UdC+TK8D7gQshkF1bqPB/bbvpGAUq8EIzvmndOsRXVITz67Wc0CzUoJAOPjk0aIO/sJ/nswKRgD1uglJxsL+tWj5au0bUqiLG7g00WoSSuerG19f2otrHnREZZk8Bij8ZsAmiGcuu3IVK104sVXu7XHOKn8sRmMF5KrC';const _IH='09e8894e9771cf88baac3bc04a27f7ef97f9bfafc1fb8930e1374908de40f2ce';let _src;

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
