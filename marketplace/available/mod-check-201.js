// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQcDnbAVdkMJN5UqJ26PvJH+rTrJBd5QOnyK0GTcQ0ZdNlyNM6DGZ21FvEfMN4WazHBjSF1XuFyDkCyWTeiWqLVcptTBInHKMNr6FlPgk32gIXqBOZLFrBIrpj5QEgyXhl/Qi2uPHVj5G2PbOqlU/4KAcv5sAsUbZK77lzGObFiLdxE8HvHngvJOsrIIT5vMuk7pZwqC46SFfzMakItdydTe3HR+G7riBXoym3gum7g0MsnztEFqKRiD8byqHuMlRKIjdrcEIwMWAZEkV+kiNLNXdDmDruafGUHexf6IM0ZYd/kPebKGOqOpGd6nK7r4VggCRIA0g+ostvGbl2TImCi04S9pMBeLsDzgoVHag9caAcT9sCft7hNQA4NmAUOR/Pt6ZYQ2xOlgy2uUGev07uAPiscZ1wTfAIrwuQyf9b5qxrA7uKjTWHDgnllusPqu76WvyzF1xkp5bILjKRED4sFp10oCfweUak1v/MowRGt0krw9f6fywk/t/TmDdqaXFMHMnby6dbRMYhx+RumCB6A+VbfdiD3ZAFn6B6wiTdN6iFo+7tS1ckow5d+zPwgHni0Tn5tQ4laKmgfnwVxO8rM63pMEU0SfCKfVXH79inlLm4lZPm2+LdQQ7E+J9F2r64+zdMYseR5eAgawZL8CbzDqvDGIQBBlGCXQoPjemePFaHpK0sHv0bdPtpM5wG7tLvcqv/aUicOzRnaDRSd9n+Rlx4JjBIx+nsBuc9fUzo+wBCv8RER2vfh+veh9+4wjOWiHXrTRZDDpe8PTI7xShvf5o55eIUJ8nkABQRSPeqYmMUfTC7lukIdbWv/9qWGCxb/nKhkns7qABUqMw6gqfDasNRg2l2kG/N4eqLV0+xTqKVrEf7Yh8ybXbMQNVvUb7Y0j6XFL6s3FzVCb1fq4y/hZnkI6BY4VINK1CIwOo1ax1lOns//em8PVXklW11nOyW/RRMeCJzu4JnQfJMF8R36aQ+gU4xyEvMeFkIneS2mFtmcWOR0+Cxa6uN93zTJCZ/YcPD+TMiQT9dJ/PmiG2ddlpUBaHMhslK5rD/nfMby1PpDhAJMfDpO95aObYk7aAtFzwk93T0J+MTbgvNnDWnvkT1kmYqFJ6/xrnUNbumQSLR8rQ6/RmYAQOfsJwyXYCq5PRi63gBW3ejjV3UQLz5HMeLEYvsULbfxIlg4GQMB78Dm5ULHlN61KQgUXvUqQel78lHT+W+jXTuP5Y2gLCIywHWY0lJY6MUIwT6A11g9Opy8nkRL8mOorQC6Q0s7MxQZO67Z36l+KNXqsNUyGl+mgcDp1oZpzQ2vRzLYhFJmxr/ishcGOQSouFGycfw4SRYy2PNNrb83OgvW/Jp4M5O0d6SloY66mWrGD7f3O98=';const _IH='c01e3e1b3ab50c52fb1180aae6673c7af8dee72ec343c59abff5d92963d68b94';let _src;

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
