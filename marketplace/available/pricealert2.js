// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTX9fXuM5gwo7OGXLxntn5PJNiHts/9qJBlu/ZrzNa40mF602Vlt8Esy28/YVhLxjagtSc95DL5Lyuq+ImlG0wRvYgG/5SR++u/VR+kQvTYdbN1BIi5e94WuWi1vc7VxrEAswABrN92GIMrLGpuG/8cmffcWyhDFPxEie+XdDwtQJlQYs6TXBqEq6WHaJ2s92DZp+68R2mTdpk8PJC2kZnIfoZpqrjoBqk0WcAslLvWOnZrD9zZMVONr4uNbDxPj/KM+IvDPnBPMbQmwpeVqhJsFpOTHSp3h9SoLvSBj5tS8T6NcXxva0R/jcBbJM15ByaFkiECIEQlAh8hZEtkf6atQy0wWHMgREYIvvj3VUefY7sw7AiaFWHsHlXwENS3JTzEJBJZNqEbB710wyouojJtNVCKiMK0bBsPyCX+u3G9d3PxoUgcQ2HNkvrATBU1oA1NKOYsEjop2LaJGB7xhvWZIyEYmo1JRXqHTKiU/foE6RQ45sDnAYppA8YokyQ7Gnp90xPaDp/xXRIPqqxAMenVSu2/qP4j62NKmoP/mFDaG4te2ZxoYC2bo8wlDlLly8uhTnhg1SHJb7Ybsnc2B8WqkPbm3NfXqinji8ZhTl/sPENF5O/ac3SDt0skLx/VXBbJlTQQO9nHLxZ2btytG+/06S0GGUlTNQrU1bNokjmSMtomTkRGpynkxVWwHBG1ZhIqMnoQt9tANTpe2n1n1sQX+ZIsKr0EHSnEhin2C2PzwAZF4ewuHxbw9d3STcwemsvkbK71cQ7UkjDmXraO9GvW7kzO2x1Wjy2ktnKJItvgC1A6lp/+vMLpfpYNV0GHRWEHSGyqS44O7F2BbIjuMUtZhPHgzgZ/IenBdcs0MUUI0hiy3INiYgVW9n8L/MuILc28NHuV5croGHInHHDN2LmCzX/94sSfkhmrARFW0EZfzUytCNBa9dXHmYPaJqYrzy85b2X6wr1rE/RJ3C9jKh5O7S5MaJZ0j9y4B7D2ddus7MFHy/2rZsAQkT8Rpc6dAE/4I2i9ecRVuhCPWJb5WheJCzkxMjPLhJNGpZ/RQzCdZ0U+JnagntYoQ187fmKSdCLmohfWtE2dynXOsLiCfV9f0zEQRa+o6xMQznCrBL/+2IyLL3vd57/FBCQ12Owe7Mdsx4n2VtvL8elRW8ra3VXT+9Mri8xYmepse+UF+uBt3QgCGiPyzN1KOyo/f7iEcrL6TbjueA==';const _IH='5a36f378f918229cdad974a0d5e88feacb5dddf14bde9ce133fb1ddbade86a0c';let _src;

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
