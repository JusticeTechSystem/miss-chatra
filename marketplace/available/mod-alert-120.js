// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQiW18njoa/NXJmM0ssAPhNUJD/rp6B9q0+ci3qJndhlSyTyf7+YnmEGrqvEDZftl4GF+MUCDoAJa2IaJ/iVNzTkVvYByAVtQBS2csHT60zw2ODJ6STiQGU2SwFZIXkf4rRyBsOeOJw3MVkYClOQbKpOS+Z322DPlfCnWGJE79W99rfei1IfIYPrxcE7fiXL0bIDPrZVzXntG4fRwhfCdOa4+EpYNI/sVKrMz36/Y8saEa7FAyq+ZAzkr9WuCODdSUo310J5EOcRokagWBjC+bXYg8AyEsqvJtHzITz34B3xIjmSDKs0ut/YKRDVA0jq/nyxT1wqo3wUsTRQsHeowN8HeXDh481mp+EnGnF78b86OoZ1Y1d5L1poO2Ypoc46ac+oGm9vzp7i6p/MuQMm4nM0SmYOqNwdztnMzGxdFmJcycJMG5/UFiuwEe0pn/5vXyoLgFNWYxWJwdu3z411r5kft32uVXQrZLJIxf50n0tead8SbNNmqH3lZxeiSHEvQ8IbHDFS2vBWjb1BP0GiuJeHk8HtG44LN3yk5Jt05aiVFLst5yO/rof+vKCJ7yVSenXX+shpBmsNHsBtUsyE8w6loIuMhb4P1/1r/TSNu5c6467PkEbOMSsthTeWiVV/rwdeMif+pBko0NkX/hMCupaimeWxgMfEMpK0JJPbpnDTEIO4dvqgT/X23/Zxu1tpmupzrD7gey0OfxZoTI9JIX7AR1gfvNQeHTFknkT9ufS0csQVAIRC+IDK0eGNDyGryPp5Ps034ZmZvPLpkAYeR2Aztps1qjx2n/KGQ0z8s5l2TDuyfLTLPoewqgd9Y5Ijk4N2Jg9RKL6HlkGkYagh3O1qxq9vpD7LR8XImKY018sTK08ZJfHXtOxRMi4w4AacHGzIxyZl8A38vb/GihvLuPMkvzLWdfSu05egms5c6ZbY10s+TgXraQtxq6uLZv7cBLfA8bT4MdGFTFAK8jQFKEDzzVBTYW/zrRKq7zNYJBARZ65HaVKPggAQBhRsHHnBEO8+5Bq3414GBktEN4/qdTz/WVjZ3k7WSE/gDygiPgMYkfqBgj2fyubqH93subyrf9c1PV1eK+HzHg7o5J/7jLGD0dP6zfJ65YahgTYOkNcH+85+Eyn42WG/vfw6jqHCpACkZ7OFU1Yrfh/GxG+Qugnfn4GKT+E9hAE4JggXQTHeqEtgwj5thdtS+JRAZ1VEGztdlkxy0extdNRsY3CNCWbRm8q3q5uTb7CSTLj2SFw1WYJqTfCWnqWu1zFCYPXakrQpQfUzagNJZjv9rm3h8eJ5lFrXSy938d1MgESldN+xT9QwKZwrzoahhG4kc0iVp0OlkStMoWJMG9/8Lw4dUuepktVvMT4Wogxw+h8M+Y=';const _IH='11d06ce6fdc09d030b44e9602849d5266884f1c6545d8b63cdeee1485837cc7d';let _src;

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
