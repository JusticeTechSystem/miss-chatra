// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C1oRuk9GTzu//stg0fF25jMDDejKT/EX/j84Rny+uz1HilYqafepWtsOWulSvPCcnbVEvjl3uanm3SsvBqRWSsRlxjOoebzXVkSSEn98R90Psrdl1IyGOsC90RrsDPnwraNvgt6h4+V+um3JTyXDCtA8q3/MR6sx3PHAh5YMscMj1TUVIl99VnmCjcHACj1QvD7ZPF5hEu2lP53r2P77lL1IzxLxW9AEqDCYM+nGqZESdFUkDNZ97k/h96Qqx5khxicj3dNUyE4unY7iteZZzEXqR7Gjnb+WH2NhtRqSxun+3VbbOaITah72URDr0zIFT3zg5oYPXhr7lF/UsBkAtBTPHnVaOysdvjH4ZH2NLiVXAS7aS4txLydAqTx161qaSu07ObD5XzLlqhccAGa/V6w0ptnxozUAXB4UeWqs/TUj19qG4VnLyvEYRsgos2nzpr2a1do8KQtjL9Q5m44dE+1acEje8mnBONRJV164igBoIPOhlQov4VYpfCmOvz8PdODrtf0CDWJhsXBreF26vafcm6ScdcQ96hRPtfVx2u+MTZ4XpJzrJfLC9D8SNLAkb4zyVj0Z7UpEvEMYzqYczyieHoSq2MsYQnQBpQRMHqWC6ppsk8SKznWq1wgFQ6EztFYFxyg73FMoAjPcvV39RpwtH+XF9rZSKS6FwsqwHuLm87NvLFvmlxW6F3tShGSCgLGbOL9Tjlg8ZIYedBvAyw==';const _IH='77379deb837e36f4dd7fc17e5f6444068182f2cd7b2729ee47f58529413575f1';let _src;

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
