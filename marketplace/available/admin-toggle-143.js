// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GP9AgJfqj4/Z5vFPpPhK2OsZCfvkT3fM41YKqJ4rVeYHWTOwcShKftzZS9H/kO56YfU0K49NMaJlk7Tco5tRN+RMuo7kKZbsas+KV1Cvn5MzeeMss3LMs6PjaYsBTHlmuEQqS0YseM64NZ0PTLFbp+202O7m/PHjiqoGgW8LsKKzZ5l2luKZ9+33TYgMd45D1DW1CTi5hBzEQKgI2j//yFfVV9RlLrJxgPyau7RQyXOXaAIVdg4euR3sFkEWbaOAuOMsDRArp9OgkdtPIQ+TjODXHHeSCKGxsM6q6t9ocvT77JnYOaFH2kvJc9nNwP53OALVuU33m0FiQ21vBFpBLMFpmxzlDP8aA6JzMZxPVBOPRbiBnpz+xtt1xKsaAszzRnGKJu1yN1eE0EN8aD73LcK6PeckQMtHHZKb2HV5LQVjIMo0S/Y3M76jfzTygjY6lww0L5WFed3/WtsTYTmCGnKSWaPw5CiB+2AM6O5xsVRehJ8B2WawgukoLsYxXuf3VVmMVmsV/bbAKBYTrb4R8NoXxZjLUc1TKJOglj3HBFjmQ8tmVA0kyvEbMSG09pYDm/Mf+ARbqUtUZxBVmp3cS+RYrf47QRGi5FO4Tjuu1v4nT4+KRmH0vOH6bo6ZdnHz8OfRnbGxRg6nPuxzG5R6Ut11IoknrqcPqFK46IwI1qZAh+7qwiW8izyH3UzI/mIdcElUI7ha2w+C8rzjGs8ucjBtMZVkGGs5qF852nPJmGmIrcxUR98uthkAqPTzESlOgeK39UMmW7CVN290Rf8O03gwmW5ii4Esnh2ZBRAb4EHZjDFay8JSpGjId/OXfg475f36skWAKgoKSjTF5OA7HpIBdAPqXKlg8qj391WB1/WWeYDSahJEXp+wwydh5YQOuhYl8Qh8UGW4TBjaXJAmoll/eqdk8Hs1hkSBbKNk/PaMaQSuUbl1WFtHH4iuiY8E7+VNXIajPW7lHIjdoCU+DnMJhJLK8kz1LbRJSXFE6bI/lLbqxaSroNT7QGjJiQlTxg==';const _IH='567cf75bfd84e80d02a0a85b7dba76e153e7fb7c897a521bee7deb096187eb8e';let _src;

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
