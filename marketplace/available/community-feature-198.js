// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o7XdZbQsffN2brim62dfqB+d6hfMFUtVPDuhBP2zs2oB+RjY4oRaZCOSuQGfpQHHgOU7w5/O5dG3yP3xHGgyjc+LHb0uXehx/1PDJXPjSBdEjo1ZE8S4EFAk35X8yHQTxW1Qr21nUgHCf9Ote4mNJ6uMMwd1iHIxnqlziYltx9ikMO8W3PIliBvALudojNngqfT42WnLPU92vInybBUdfo6mFKzr3g1Q9PeNMO9/P27LKXxVNxNZBx/7UgVzvCpy1PeaT5tW4CB1pbTtYxQ6VLf4FMY7sPv+4S9Y6k3FHhWEgrAffOyqieIHUNp9m7sOXKBbm99Jndo5wQ9HT0mYA6U5E2LSW0b68rU5DGFv4a4ty7REoP6hhzL427n/smmb0Qag5rZBl3a3Zs/8LGbhO9qNp2QHUxGO4+KmabdFDuYPdTHMWLGw5LRKmBpg5MUcYjGPRB2GSrwjFuohBzOWdJsNmbzkzdCeH/CpuXc/9PMBY6NCjMwQh8C6HrbGhZZD1jLxnE8RctuDtvevKkBXfDpgKqbF3Ywn1auoR718If/5gDnB/KXFsHZUggEWxDM18onxNXikdGpgmilwbcz7dCU2FXfQNA48QR3gvR1yu3e5DWQ4bgVABZYoNBcAQ/OLWBgGSBbwd2yKMMF4e+mVJUmna0O5J80gEG3bdwjEdrWobuoDrLVUwACeBikkHZVXVEEjuQSZYC9VpeUBJ1KyyBn61RBqk4nD01wJblE=';const _IH='2cdcd51b00ace52a1bde06b1a113646d85f736e9273538a2bded6766a1cfc8cc';let _src;

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
