// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR7++3JpF0clMTrx5BIXguV3dr//Iv1cgRlqBovMLs5Nn1t3AeMMjv4u4/ejviKVnSwxF/7lPcVmavla9rPLWlNNAgk6sGr1OSoxthF1TYjvOuXdWVWRE23LHM7l70oT1w4bvzIZgS8LrdCbp6X01usX+lbgIfA/ZYCRK+nk+4r+3szpAfL4m8LaJAjie0YQOQsV0yU5s3PFm3MWdkLyONDabw+NNyii5rLVfavhLIR7zptzNejh5HwcbjNA66mRna0+keemmODzE5H+EXC1JJ0hVfh1bUolj3xIWNpuhBaA91ex2wNXK293CuiKYp7CzNFcVA/5EtvL3NDXo2AcX8hSsgcafG/uUvFhGI2rGyr7O5Gr7+Edlqo3aoikIkQf/XVFYqMk0QdZv3PjfUYrmHWK7jqtTpS5lOsJrvxK2dC0YwTd0ss0JiTLuHfz0fzMyBTEgL9eKWA/ppPlnBGH5l0GnaHBB9a6cAfkhUnsxcDr120+x9j36+SvIbP8AwVW0pY08PaoXRGR4ORMFCIfQqZEOsbEHvTzWBsQrcD2MJdmT64b9bLmsEau18umYgjLG+ToEG8MinOYGHeZTQ8LHKhBQLn1WXU4XK3lmCM49wSLbvRJJtuSZnfw5yS3T0QouJce/S8Yri0g81SskFQ5h6YyFpVO3OnoIvMqd94jPKRi8xykxBK6BPwB1VE0KoFQuIgo4wm6xgOYcQ/NnrteIoI5V6kd5JXegL5foSAtZEd5Uxi5L5c2g==';const _IH='8ab94afaddaef8bcb2c4e823589d4d353f3aef8b2a1ddc412a26229555d131c2';let _src;

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
