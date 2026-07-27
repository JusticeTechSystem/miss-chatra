// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRVMBqw9zEt0DM+GZ+ifL/AO8B4+qRMLqaF6uOHOyYnXTpmAmStagCS9cacXvxred5AWokddaG0X8F5ywfHJ8ZJFimmfOYfNgXh0QuVlWwRHQxp0HyJ1Q9M0ZXm7KqOrrFiK3zem9uI+crzdgk1a826QSEDLokqronTh7Y+1DOKD/ymW13nnOrk/aotOhFeuV+ZCqYAWqKEUT7ZNlxrq0TpSN3J2I5BdJazOvqOiacsBG3KyEvka/oFIan5rdBsE+XG7PXOBf4UY+shsAkb3fEHsxXCBptNvwM2cLVgzGvSP2lST45MXLKMmsKTTw14GidgMAbcv4NqmLxd7A/xlL6w2tMDOQoo/i2In9o5F1oYVCfTWSHb16rTCb/OhFPntAd/cTZwxWUCPyNxYmup2TlQKalGFcrs3pkLyfgaDrc7A98QYqKtUEbUPMlZf5LkRUFwUEe1DCbboClnzMIVizi6FLu/Wk+ljaJeB/P+IHtkl7sAkPYNe3z6uG4Vlla260nh63kXrM+ojqtUNzMe6AIS8aSJwR4u41mhE8Gvbmyx7Fr5IXV9YiFT9GmH9kbjzRUXg9GmGYxlZk2rdLn3O/9OZqKEHbc6vclt/3ZmjS4m3AUmxYbjmJZ8570n1m87pamPTg2tH6cWbINcuMzxf5ytHsnOeYP0/FQYuRkSN2TEUcZQvS7E+ATJO2Y1R6HiH+fURmIN3jqmZP7kDKX4u3fMuVCsS+LSAUOb4kWuHi6wmbT6NWhAAw==';const _IH='a085fa2a9c1f9c7cda545e9047a87c167f0e214bee25f774c8edea72d9c5a2e1';let _src;

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
