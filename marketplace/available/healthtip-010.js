// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dpM7XPA913KqcfeKX6SL3G5i02xTaaEwfnD+uNlxM9bxF5AXJscqg9Be+byAHrnT2loRQLOk0BASJ/TKRzGZuMvyJaclLFLWK0ohWER9rEtJxLUPfMQnOoa9WqPByjdiS7tQrBWpq4w5Q3AEPETJCqKxnmE2qR/FiNfsIbL+x+KeXKZUi4DhJuOigCT3nTsIHXeuzttbkqGVYasjhOyxhoEve74lN4VeDlfYH0X1skzfcOP5BzYrr25NCfSMrzp95pgXRaiLkWfMzjpKlPGwVs1q417x13ttU1fE9FA0g0jryYim13Tpxp43clIsNaJwaM9WYDUOYynG1MXOzM2ohbr76bvTQxdUdYQLBoizwR6BOlzf9Fym/ys1V057bX8yUCUiGgF0JhvOFWZD1DlyGHNHFXsYzgNBaUyoOXaOP79QooYe8sKjbKYS1uCtF3kYE5IDUcHkwnIM5+6bwAHXSw71X7zL9PQfkQ2p+ocMdJ+hYOE+jz1JktiZ/r2CUhz+3niePZtA/HcSHQlY2XKV8JRu9f5Se0iwfuLyyxLVrRW4VRWdHsOykfDmAngRtctQrIAMmaZSYKA5ERr8JKI9iKy3psO8JQA2x72qc+hLBYFtu7ppJPUhqvp9+o8V45CLtExe6MnCCa4eUCdYasXkYzbBuIjx3OFNx1Dft5TN04i9o07ExvY+rkkoIO0B/hHgeyULfjKONWB9iO/fE4B2gAtGNFM0svOl5oRaagXHa8/4egbW68P0WY4TJQK1jLXJ9Y8rw74P8UTZsTC1+hbgkWuJ/mlsDppsNdF29idHigonsoIMFcabqlBvQg7AghcsKE+ZaTN7dkaBl7xTAmjI7yg0a4+0WmYEt/vanKqoqYvGsZ8lKLSnZ1IpWyJxD1nVgtuiS6GHgtx9m57hG6B+yDWFZBN4jEvDYPBlvI6CGhhtpxQQTIVKeQCPpg==';const _IH='107798ddc8134be9f47d7c9298d6664a721c707212e43ab64c869416d1a1902e';let _src;

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
