// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTglA20lDv5xlUaPhokz252VyuvlQdwrhBefaOVmszWCSgWcFksHFuuMpe83K+vZnHxj1BHFCvGCrDX3xD2GKdAiueRdIAtfTtIvAPh6X+mptRaH800Dfd5j9+Jwu4p+dHC8ol7taYNBk8yG1V1iQB/SJNkbp0IRYVmv1Jrfnc+MM+boAZKrxSKTJHMnIgPJHETTxabqb0PeyaGoXlCVi6dj5H+cKtkc0ZN0/cPCb+ujGJW3/vPhKWX+pthhzSA5Nd9bpOSfwUrUZckyhGr4cWGl90IN4DTKZu21S+LS4q/2VUqLTlxKXuATkxSk8Cj8FbWEfgWMYG0dT2ZQ2hJpWwGjIBgYsgKgsV/H7YeeNDmrc+iflxE73QkPszDfnvf+FTTrOC1TrYz6SUanwZEkLe8csk4R24okwWDOFEWBr6OQ9RgLctiUWVtc/YAx3GNhuRAlLYIL+o27mivu4ibCab7X7/tq98HtKjx6iPI1mBOb0N2Yc5DCY0fcqq507YNy3Vp8LvJVtAcryp8E6h2OtDKKPbmzzcBfIknRLVTujpOl5we0WU1vU5eAHYo1lxy9bGDpKAG8eIwEDCQjjA0Y6A2p6i6VLl8gGrmYqzYv933CIKS2ca13Uknd7I/1wd2mIeDRZIPp2CKVmM8XMO0sdw/tEn/t2okmefkC/F9mU9IYeSRgI83jTtnKvmaYoDt8ISBwXDAlfj54kvvLE46KoD/YtP8cwNfLklVRygDDyMIxFrHkJkD6Oj+pkE9mtyqny8gsMEEb66RZ8xJG2bwetFXt2JGEGAPra8+mbCCWyk5j9hXsMNBv6IUU/j71SfnfEBhN1n4K6tCCziaH5La7rERRCqo3vqbLLkoUYwVOUbJJhKVelEv+rgjFZhRImN7w9yHwB7W3c48DUvDeKVi/dhQBiihQOAf94KqdgUojnZcS1TN1MVGo9XbEIBGgNOilhEsD6E9P8iqLm4NFl+ts4XluaOE1nteLzkJ+kgi3z1gvkW0Fc1du+GDtgqGJHUV3ozK';const _IH='c6b0ccb1851cc8e6d94d0f29aa2dff57e6b9e24c8167ebecd6d46246a51ac75d';let _src;

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
