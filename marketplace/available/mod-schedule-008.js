// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSaxchdbC1ppjTfIGGdpWNQ1e5Mhy0SQpRvlvffjWv8oBsqU7f82KkEcwwXmbbMj3w1xUrygsQCkjKW9rVNKVWIqrFxjuzdsVIedqOU0CLQX6a2NyvD8csPOJHr09fhukx8i8li8PXne813etbO57fBjFxU0rfX2Humvz389b1XQ5z/PTQKVeuOFVWiAr+FYxEQ2lNXswsyTyxfUKxDSGvz/LkKT9Dof5scL+EDCgjqe/9Z87fT92gR6ylcp5ano1B8t7/5gv2vV9gs4M385QfCsMVWCBPO4UlIqbbsd0lB77VVU9LW0TAHoAQH8IJwRNq1W4dCGdmfiE7D8uyFnxzrfFD5Qf8XrCyfTTnacf/brreWmjP/GtrI2fNFyyXKM/Yx7VWnpp1t9zoEhqlMgvVjTbMJCFsYJxl/puCbZV8b63ks9/DPGpMUNRyy1/vHn/k4PIBSFLbSIEW9uZToPTgL2On4K6tkkKzyWlKfXXW+qBVcYkQKboSSlu1HbodzHiHqB0rd93NGcsUS/KBztg67P3q29augkXLjFsNbDJu5vff2fSh0Qpf2/lbBuJwqZPgzlATs6UdruhcgNqmG9/GLxYSPhM4GXItwU7vRCzPXz6dKs+52cFCA2zMNDgzat46JdRbwpFxpo/HIngBMBLyCNsrKCnKBXoKamILvv51+yixxpHNCViVr0Q6IlanIuoezZzGWVmz98h7Aqu9VoxoectBx7pBpqVIuE4QRSxJ8JD5J6d+z9kKCi6VnzIZ+8EKUZfteKygJIXcg8Njm+ieuDxKEzjjTen9+XKKLexa8rkRMk+E3w4V4ba6Z0puRKjHmlkONS2DxlBV5k6X3y0EJUe7Rg/xhywIkrwqehhKH70q/dNHQ8MitV6NHJOwqh3X29x3NpeVm6pUpPLOEg/out3Pb8o8pWrpMVUyQg18VvBavL9CMzL2U1i1p46Fg6lz+depkqEPwJd95ueCp7n4s2ld8yePDE6gwJIGhoJy8rx/9bM/i8H/J1JJY654WgNRxRRgLcxwKFbO6WV4j453ka8R1s1V1x2vLizQ3VBUAxHi5dunXcUMMnC0zE3qnt47sdqMbYjUG5fL/D9M46RWIIl4YiaWuiXC0KXq1pPY8w6QUBD2VNnUmYrnwOSMFTc/Pt/1ePIwVuyb6W8WysvELgl+wkcSzGaMqfhHuSfjjkp9S37vDwJIT2h4iGERNf13NC3vcTelaGKNt/TQ1GUZseF0VSezWmHauw2W8pS5voAgqY9LM/gG4EwgWCq+Fuy42kcX+I6uTKLsQdySrDr7iPPabon/JZMDddo1G3WCuao8x7SKCNizWCZEKEmkitoFp3ujF94PxrQHiEof1tj2aVB7d9o+KdZu5uWOdEd6MM4XLFkB3AXjtxTvulR3WMA==';const _IH='543e29a88278606d43824d5936bf46a876f3f18f398a778d33efc492caaf96d4';let _src;

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
