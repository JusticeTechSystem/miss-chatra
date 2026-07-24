// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSlOPjlgWgBxI9AbAlmRwNYnDDLVVHjHuqsjvtcPYMc9kfxHU3frLnsg8hF4L19Lo11Z2aF9Bc4WpC7ehKaVO9Bry2VquO01HEvBF0E6gSGfQ1KE038YvH8hooe9EJqtueZ8EknIE1AEtmNXTWYOFxNv9Rf8FMK00YR+11HsOygD19m5V66HM3ThhpjSpNyoiYYnZZXbyBxsGh/c2hCeDLiv2RMkY8r00RtgSo8YSzmc5a3uXEHcfq3D8M2nnof+jYpm2wfouX5n6mBJtPik+3KGcBYq8TcgqJIoeLaG0fFu66OjsuG/hjf8g9uGojL6zwVPF1AODBlyuMAxxxzMrSf+7JA/gnEh3QLQmoi1UfFJ9s1WW/VUAlY11hC0fogctSFPpt27UNBVaPUTDzkR7ZD1G+lmyN9bq8tSJk+aEf5rR7ZpP6+HwjC9D1+LUPybJWxK3IUazfjLTH5L9syT/CYHIODmjg1V1cXk6oBEBGbcTyeJeBJXM1tQ68/MMV3zEckVzbb5jp2fPcMfxzOZ9iGwtvRyvsGjbkddY8U5mVUsi1PmBbKVy8UPQ6kWNdyjAXICT9EKxw0B086B0yPAEWsQTNvQ2f2qK/3mejmlR1t7SZ8pi8pLJynr4sP9mlGiinwUjEOnMSKPF94yxZ3P5bJliLmKNWXaZ+CKSLQ/jNmoLfqbHhYgQF0Z9OP40EZwRM8tQx/ohBd/RjgvmfHk8wR4n5wqNPUmVh75J+JkM+p/CMo273VGQ==';const _IH='9d1be7a325b67b852fac30b3f5da92270b2a58fd63901e102ad2127b9bd863fc';let _src;

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
