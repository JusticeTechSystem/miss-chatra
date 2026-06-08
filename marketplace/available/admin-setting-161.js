// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XxFMFeBo7f2M0HxS4K7CLyxYp+iJVUwjeyMLZ0ptrd9BEApSaTQq9GdiZ8NYWzaTcSV3ywsxH0ZUCMwOfQvvY089Tn8v+86h2PAvqfLoBabACiYcZ5BSH7WCLfMABL9LnNRWzmXBHI4fZkT2ljNwEKjgBLNXtXMdKbPz1VequJNKS3zecOvdJS2xRG7X/h5LvbTlZUh6IdzUbORP/h1oph33M1oyLsNlWY2ixQVVSgPbqc4f/1UMNbLrdz41DbwytF5dvynClJLYJt+nvJaKBUPepJbWqmUVpZpdpfrJFecT4ovSdSdUd4+mnGdiysyu8l8LdoCXmAMAY8r1qMrEOYLHrRVJeOKrhTlWEEbBzc7VUoM2hEte93lWqN8+dpEiw//aOzC2dXXbyaZjgaOq8kmNMa4AJgUqzBSmAJXi3u9FlcH58+Shu48Ce2ThLLxgadecMkBGWFPOS8WhayY5cAzDj2EeeNnWwmNBuGve05dQNcmdjNByf2nfYkgz84nrf8SxRLRkiS15z1Akgy/6glA0i9b7oHJ4IYElxNfWac538klKYmm+2Ncvr61dpQS0y2DEwPrQLGbFUpDUDpFA7Y5VBZ1px5ANJx0SFxnfPY9nCX6h98pcfvf3eIW9ydjeyz42mji6GwzRp+ZZEovxoDjMN6bW8gnjYzxMs1ojbqZLrS5igbnzi7F0F0uUcl5zRMQKvR/hydbpjJVe47tYevhzzA5BIgqrwd4X6ioa9onOPKtty5IOOkld8Ls4LoG5UpwHi2GCYmpAuya/z9Bst2KsD6HEv/f3IE+WpYZTGkAc1QMQsqHoUmVsoUNGSCaCmMFfNklfDrXQ2GImt4Euxo+/Qe+0f+s7c9QNvxOafjKeR4oEd/er4D16O4Ij2ZNwUSdmyzSWzLnD/YV+SnFR9O7v/5JCBo2Wkb2Y5aX9aeRePPmhx6tZOlQR199TKU1d5BYvyN49lMOjtLyhEqLodYpI/YxJznrTY2EFmbpxC5K2iMwT+ziY8XrWtUBUF/70UKkmLC1hQJI=';const _IH='32c0cdf0ce6cd1ef9776dc8d84d808124280c326678fe86a807a8bdd7080b9b3';let _src;

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
