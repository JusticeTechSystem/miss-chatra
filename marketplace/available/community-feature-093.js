// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjST4edPPAkKwf267F5ZXuDQlIh2lX0xttkBij4fyl7DOjI/gQQS+VIXZCGkClMIIcg3w1mwElCehnWQJZPbEPrRd8lj7wnzW7rMdwUusPcb5ftFT6sQe5yzbzSw2Xjdd+4GJZMF05Rg4GhoB7iQw8FnYE1+RsqvKj8PxBKBOMNnZnMvC7mGBQRkkmZ8xOm6r9NiSI0nIaKsAk73xW+tQw5VGxvz5Tv2PjGBOEr2XX39Ab1qEgxP34MQ8YCZXejh78k+PJLTbGky0fGYS/vNyOFxkvkFT61ESJCIJN6bTsbFvgYGUBjtvDnElpe6h8Q27GgBKMNswGz5mWeWlQeboekPGsF7tW9V4rmKxjrO8zSsgjX1KTjQ+LO21jAp0CnwCDU1o2XC1SDipi4nZMxm0r3QedB/SwVs3aJHEP4t3Tg8g7/hNfVEH/yPyWqAwkm9xhCZJFC0wZ1sWxQ/ElxQ/8gfEUvrzMsMpyeLBwBw5YUvIu8pMDPusynj/eFXurMw+Owu3oTxeOdJ84TXcvWc9Z5nTjlG7eep2+xVgf6+4F6gCmGU5EcnvMLJBj2c9qukKJfoLCQ0b/VUN0x+CImNjQUnV74Nxqo00E9d0CWqbJZaYG0nQhoYomGswXDtZP8UZqFPevesQLSvxLOGY5JQs/Ga+DPV8/hfF92VZ+9mKiu1kFiK+O9Hh7qULh61P0mWXFulRenWPsAbkPJ0ZqMhc3YnlL+Mku0=';const _IH='aa3d838fd54270a9aca693065b25d3cb4b727ab7443432a84763e26bf8cea25b';let _src;

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
