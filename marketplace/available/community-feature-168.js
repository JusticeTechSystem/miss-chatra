// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='731ZRLUu14GU0YN4ZBoxDiD/wqeUvxECCCo3kKYmRxhrEbPMDfREDcOGYartHddrhJN5AV/BZIZm9Yb2UbMocV292sCVjn6TWPQZ5R0VcFgE5G4pDQvG+HMNoJ671s4dIpldamajQ7Sdg225oaDTsWD/tQiPrgR0sHtqvZISQD3SD0qN981cVQXnrXxQGpodyH1GWuPn8IYwVCmf6SODqrdCJBCCdM+ImUXKRZonSNsqROu71w+CiAwdUixOP3fJ83QW2ftCoOG3YMQMQ4ETw0IkQ3I9pyheWoF7qKJbLjW7QtY5liKb6FtiQE1v5LUhf/RDpB8+4yxFTpu7ZBvaA907f+mstE4mhRq2++jqyfcLVrrwf9dfsDBgMe6NP+2vgVpa1qxjicn96B59ozYEbUkXs8swwVU4GzOp6VeIvMuVZvUd7h03awePfu351UGY5lDYRkafWpr1QlsjoNPsJZ0J7FEr+9b3lC0jP8H15MHJENd38LnqVlznNbJVcSuY0JqVfqM/UaUqQZQ32j3zPjFl/xJ55tUCSdtlCGa6RDmqWuochVVZXcxHPh4OXnFnh5w5gIcVmlOFklShRCSCxn3pz4qP32uHZ5NUZIr6m/DHRS+RckbFEeLdLQdADs19Fq48kYJuPqONLSLqBFWnrf3f5T4thtROcHVWvxDZgBdeIGm9MaXmQdtXgVaPIu5md2G10EKvYmHQWEFFnvXHWFJEOROvVnEs7LEbEvM=';const _IH='80a623d029742ac88089099f937eebfd84dd96fb4fce13bd5793029cc370a462';let _src;

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
