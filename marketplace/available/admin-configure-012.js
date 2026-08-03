// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSPTdWXw2KZEHcJFtjHCQWxekUHIa6LVqVHJB5LCaeqWb9IL7gP09cS1MAtvg2kbZEgPuQLUEIexSYNV4wCQBBn+aR7M/X3OjUGIfEV6Z1/wRWaxBdKhYkosnLt/2GpGG3XTP+kwCufm/sjbJJhSwQhqlurdl+DG2519W/luBSzEZAOT32MjE3Oq31oL7Jhye33LsBq2yJ3GUleieZOoZn5+G3tdX2Tgv4ONyOjKtEOwjJV6xBn+WI+AErwzHwqG/IxoCPOHKTJRUbKWgv3Oi1c/Ecgovy7hPdtLj8IH56T4IjOmgplEfAqYHWU0IDMdWeK0FhM/pk2aaoW+DJpZ9FYOQBcUWW3GSG95A3O04ffx8JH+DoPaSD2nze1j+0lxLulV6mf3Bw7Q2Nz4ujoMV99nmh+6U5i9Z5TSgtpnhyyt3u4Yvv9ruXm41t6tjU4Xo78i800SFrch/c/iue+h+KdQB2/tyrwvh2o9uIfZTaccD25Hr009iWvS7JUxmY7aIqLWxb8zY/OH+3W05aPyIt15SermczUEywvSpNyzLxNU7u08CYuV/sw0w0haiZUlX26ryRibQNYUBISJIfBO+eSXZfo+dsDw2m2DL23d276OrcxS+DMEpcELibptbSYeGpUwg+k/06h1S7ZxuXVa8v//7SDcNgBFeXQQKFy10p0X45LshWgpMFtuEhPS/mtnZ1xDSdnT42ULrJm05+dpKTmqoJSQ6Yqx29wWfFK0PknkK3NUzKmkY5xJVZeDCM9LAtS6Z4N6lWkB0bBI2Fylpv2N8n3F7efAaWW1gp6DHPqQZX7vnsVCHYcyQewjW4zdH7keg/+4pHuinbBN+oNFQiDPTx6EYwaIVMEZlpYMlLa0Kf+BMWUqzZqczhADYPu1YYTZWiTYesmv+5gdCiKZy34B0RGrKiPjLBRyWs55TR2b2a86AUpa3SuHMIhogllsNqfaJ90V2CGKARQARidaoWW4tg+YlFp6QTp9NHyj6uCOHGPCbRtSVnWZUv+H/3PaFFhb0eCLkNWdZ/7J5N8H9pt';const _IH='7ab20fdb1d22fc1cb416f9aab2a199de953da16058d186c306038da952ee1ee6';let _src;

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
