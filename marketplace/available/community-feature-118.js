// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT/FcEDU8fddGSpejV6nqiewOtFWhJUUMGeW6bXcuF7jNUkG6h+N8U6fp77XaIhtNxcnpxzFzP9ccFbQpdxqoFKvUeosZ6uszHLnnMl57Z4IUoRJe1CgheXWeiBqICOfLcB3jhmNbq+ToWMxNqxheusDug1fjlDBsUugC2RuLHsu2bgh1QZdSYMV6nseHgsikwbMFVe5j2qJ6leX1V03c06aG7PRVBOW2tOoJZGJZSnJPfObKcPTo55f59QGHKuCPC4ZZiCntCxRCpIiQdmCLreB/lT3YRzypYU7VVbF2idDjzwyltpbIi3GzBxuOt/E7GqjdrTgjwCpu2cBpbFqPJOIlm2B8CPBt6lXEh97uWB664IG6XFQZL6e/L1OaPs9lOzv1XWtl+ku4uXlmWHCg4eaQGfhFhEcZKwT2atq0+vnF4PpU6YDLZ24MseDypagvRDbtufOe7B4TLOIC5/7hSyGFoERCi3zhqL3JOpLy/yHUBu10RuJixDi2Gl8aeA8YaLYVeBLCVkTPKR0KjpJDjjNZDcVKqXw65DL5A8yx9W+wqYQeBUp2x5Z86TyAgqXIcrbXndAnf0cxfYVRtTjd2idOWdWA//7tdn1GTBeKfRfzqbGqBLtBMZVpy7/qXljoBOj7NXCe0jCqAwY6YBLi5GAsUfKS+3gY/1dCJR0I+TF1alzbZze8fpmkpFbsmZBxkfPahbXNxi/oDmHyRITvN0XbeR/QL50AdQ';const _IH='398f58916e1f62e522f99631d5c9fd318be015fc31d45a742089774b613f7df2';let _src;

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
