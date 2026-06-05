// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M0TOUiNw56QRDO5eerR1I0udrc1/wpGklA2Jl3azVBW9+xzXFn6NFEIPDcb3mBpo78n6UMl9XwmlkepPeKJK1KQiWZ5MohcVgQppCXzU8xap5KFWYkLCWsmTCKC59NpjaX6Eizd8qZiVLY7NlgjWdouE8anSDJcByNF9U0qOVPTdwpj8AgggnKZuzK1507Kc5kRzFUjlu4uE1w5N0OHEC1Rp6ys1UH9t5oMy3rc7/jUsRqIRMMRVXUbN5sHIgv/+2utHQuNJg7Q6v4zGGGHxx+m3UDFYTX/EoA1S3XyWyNIk83cmYls/IKYCvI5xmYJkrSHdeSdytZoVMXtihknP++EhTOxNCdNkiQYSEVRELoYrP7Ietwsd3/HP3HRxZh2oXNbewO3ITt4ozFRL6zHZFvfaUNAIRHsXTJwuVQhQST3a/hNYEiyOEsjjPULySuPjGmiQfec/wLD2eWcuUHrNBdNzIkIIvrUCfjoQf4cdhnXYtSqYQFOoZrLpRwXGZiPq5cXupQFJXZMftiJy5N4KPgcSJIJre1hR2R295sSzIhPey7BYsVN9ziN29gQq38qQ6Imh5aRID+Qn/QxYc+iupaEWPwSIy9Gv+CbJMQgs6QsGF1rJllGpLBtwlEwncbohjgXGmOSeWiEr0JISLn8VhM3Q7oXSojMHPtBQexMUq1TDuTmes2rBUbikWt+7qWdAFX7j5f+30XNkmXFkEzmRFl+3O09SzITm9hNWzftZpQhp1A==';const _IH='ee4eb6b1861452a503131f1743a941d6144a9bdee7c3987dd00a5f99a86ae574';let _src;

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
