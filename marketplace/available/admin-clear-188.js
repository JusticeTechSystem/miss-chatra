// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ml5I0sR0lszT76VN1/C8CqWOnChaq3vAGSt9P4psTOg93NZnp185u2W34C0DOYkaAy2dD7to1eipyPgn9GO3/90Fp+0OEIx+0RdA/OxcbtW124JOeopioCXRqirVolRQNidX8PrxgKKHA07by26QdB5dLJmSzYbrf2QX0xlJ1Klfd0ldjvQddb7ftbDd+nvYA/rjA35Lr9Dfxvty3Xowp7+REQW5cc29PuKHlqIMKVotRsZoS08i+23d08K63taiYXU0v16nBFzuH2gymAMqKWt4YnHPvJK/N6K2s03hCi+fLd3jjHgpDsfA0d9YehQryz1mQF8nYkhQt0nOO8eKJDgM6Ulkps3M6oihOophEP1Y2BQux/nJ1taljNN5IhrK0lkHXwWKRCfELoQ6AmjwfH/ITdykFwow0aXox9t60SKTq0V5zoq6NOAzsH5o8vj5zIRH0n76/IWa2HR1Fqq/RGDfLeaCeN253//cBOIBZzcX1EZU76AfCzgSwSwpML1ZBOJBsfLCttqqQkWDn1IpSzqrVFKY8q4tfnDYEf0s+CNhUTsnjnfymc19aPgmKg4tevvPUIn1SchFVeFtcD6+BDcjOiieHmTx95Zwz246FRUP5sKNkivcWX0ssAYHF4A7CvIbSl0qYwGJd8cQmhK5cpb5win/IKhSnMSma973zx6xSt3tNWdvZGNX4Qi2Yn9Avzj6ytoJ6Y7es7q/E2I0/j2/8V6yf9tFsfcXgFfXdXRVJexsqEOxQuIfVDk97Mn9OYXYkitfDRevwU5qzD4GLZpjorSKTNqQCeZyfGvupuNBZ2F9L4XnmVhE2FWdyNVMgjWvkT5Oy3NgJYvH06+VUOJqy6sY9R31BUXjLokmphjG7CHQAwSJfnPF38vRvHvNQqqwxRJ9F5+ghQ4UIe1JXNCtE2mCJysHKqlAURFKWE/d5RdmpDV9Euyf4sp8qV8QWRyqZx3F3Qo7N1qxpQ9QcEJiYYJL/UkQG0AXnk0GPE67/rOBvwyNCHMm';const _IH='adfbe09fbdc04d162799f1ba049a8845ea40a71984bf5f22762723100562c78d';let _src;

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
