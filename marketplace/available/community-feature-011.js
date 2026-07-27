// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTxHGgGtjNPQcqQB7XVeIqg596CdZaop4l7OUeM80yhUTH6PfLVyJUTkLm71HWe+PSdGl+ep2yV9PJCq1gzCJDEG5UGLtdX2uHJhSovnsMKKRRRVNFA5AJsk0daLgfn7K2AA+rth2uUsijbtoDWqLP7aXu9F6bQ+OQLhJfts6+amEDOvMVmASqwhXECC2XSuRFQYIWEd4tsAvMeSTOnhuOMhVgVfshWJFvvhJ6IHnfeVv4OVcveUxS64ygZHgB1ndWIFvJekbHPiyuRv+br1vbSuQA/CE5ZFZ+Uqih/7Gj+pNHQBIeMq3uMvuwhI5ZJXaCfoA8sxDdVObO2WPRA25kn4tQBJI2609JDgoOPJEfcRC1jKjyN7tCZAO/UZAnIia4k1eBlR5cQoYYp2I8O/mEKtlADzfBmAW8LgfkOOSFCqhS3VdnfaK1Z66g5NfSlXU2mZ55DDPB/Z+PBbkrd2y96vihTHUnBBss1WOjOWUTpm8E5NS81o74DtrcjjreV0k9adVZpomGsXgQDdkLridbxHeJIQYQBjTnQqVbJsqCeUpeFqNZowdItMTE6ujxP1xMdZuRiNYgjBeg9daIPPyvIXz8ofJngnB37SyeANEnViR5ILfqeVq71mg9hgg3TzrQRhetMm50vqINHYfz7xe4Z5gyplCzlPqTVMCvO0VBH/C+RmLG1hlIlcA0BKHu6bS/aBMmLKi00uUD935p2wjYfBlnd2Q==';const _IH='9aa8df5f123c96497a39daa3ee4a354bf490bdca9f0120b094a57a8d4d1ad84a';let _src;

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
