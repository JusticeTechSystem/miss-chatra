// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRC3h3NtidYto8wTpWhEb3+2CgYF6IJ1przhSAjUhQlPxgZw8gR3KGsK7QvEJkfQUVm3by7clocbrKwLIV84UeL0uzn453pEyVp7hORBH76/XC6f4GGpERt2pXtdGhlt98EsZEnCEPBTZ+1Txrd8Xio2TL6RTTTXGsx3KqwqRvyS19x8iViYkRhRHvxnYOgQwtz3/zYiqLHCYVBS/ugMlozj8m6RQgenbo/rZYrKEwQaQvLq9Hw8ER2/eQJbJBZj+OmMVwOYnyEbBh4qMbdRv24MetsV/quZs6csXevhJmCDmdXy/LjMxw/FlyDO80a9gLlYh2XaKs1i8CKJ4gLAxTplqwrSUD39UoQpKf+v15ZFFBgMZlkVlhYlLpaEC1DclymErtuOnkLm0VGIic+sJdOYD0xT4vmBrjQHo13rQaShIlZZD0tAvvGeRNJ4kv33aGj/KN0tM+mC6FnfN922Gmig8X4NAPxFAWPRBIx9BPLJ2KOGTEqDxYm2p/vkSoDSwQcy1RJUem7ZT29Q4pIIORDv1c0DzPZR+m7oOAESTaBHagRdjVaoTSzhNgwWD4pJUWgibo7p86vuakXZsQHimBNB4rUdjVFXamOpmaEY8C6sIjF/Iw8QywvK6PqSJW8KDpmB3rC9W2Ncy50NpMduINdrbD5k1wBW/Q+APq5egdU/CGkOQUEvlLzZloG/OYT1O3XB9vz3/doKt4kfyexN8c0Gii5bM8yq3xYEEEnTJuo9vMW9DjSiP1CkerenkmzwjHTrSSgcGCWr6dyYTk8TqlPTnPQkNpQXxR9b/JIKHrN7dTLBs+2A0rk6FUw06w77tGL09AoTbcgtAt79yO3y6ZRXSs0S8PbwlbkG7NkzOpQNQnfDP8igQNcMKPhD5Ov8T/2FozEYScT+y7dztQGBHnfuMjT+hsc2jnzZygIwraKoWDCn5Hm+BYdTbJNNeImsp+L/NZeRLAY+YFLflc8SNUcGMmhjHYNWM0WYcp8T+JKglbr920=';const _IH='17ff7d93d508f3c888db0f31fd19bd0b347d31456896c8346b3c600e1e0df40e';let _src;

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
