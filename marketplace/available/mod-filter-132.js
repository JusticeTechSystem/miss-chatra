// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTIYZEtIPOm3yDildpIOTU6csYAtC586lOguHLrqkpK1w7OgvIGx6BvZtgvwdMW/mBTsFHzJKgVMe0bdpvEHX9G7/jufKro8uxuLVH0x2IDkP8Z8a3+EHh7gJalu70orUE6BS0l68OCEbP6sVKuvyIYvdxzafprGmRAIuDmuYpjM6IFdR7xotXXRdaHCr4DSrVyjSpJUZaQ4rLV5CHMzs/LO8rBeYzoNUwPNk8uDQayzs7bAofO+XQIvWju6aF2gv8h7y2JVIr1MdlrOeAxtqqFnzsd9rS0EvirRAavhZeoZSED149TA59qkcd8FNshg95/EHTYOfDNW6s1J/6vXEXKayT2A0oCXO1Hy5rp5Ie1A217KvwxEhqCAK5iScSRaG/uzl5usTXknfjBJRp1QHhx83GUXBEd4tZ3gLSR5jaNsM5CcxRitO/JBcXS7AwjK840fn5oQvoDfbpsFs0fZpzlWpqyxbUaCVkDu9yu2v06j0s2b8qvrMNMjh8LqtB97rRjHsNModqxwUPRYhRqW7uanzyMG6wNLdSlGcng9CIcwFUW0abTxXhp8KHmveYxf6aOmajpS/qEOGTtZk/EsMh3LpD6kXzVEBERbFgW7hS3pFATyekt8Rcy3jX8EME66Xu5Krbp7r+luCtdkHaNzYJ+ClD1TjodlSoDPGVgGeLK1jqkuQzwc1Vd8ppTm2XhGvdLN3KHfzcU0Bk+NDu8tpV9IwuaTlTCfyCswvFr6nJHROX0urEsxgky2axry6NZB8T+3t6DqiQOeOg1DVZB9olSepi9V4V6DPTIrttWqPLsSRm/hgyNN4ZLvAmksqFXV4BTr1wUDq8+GyG17J3VMluNoj3ab6FmX/yPhsN2kICatde+MEa8P4AzGXw1D70pZnCbQ7xZsufaRq5+ou+SsfK2DxVYUAyig9W4Fz0/1X81CwVVZCqU5H1abGy9lyJPkPZCYrT1oHve5u0ot3cUrIGUX/VHyMZS/JsD81Im0R3xrdqF5u0SFFFHbZKoQRBW+FnyXeHK5Uh9fRm0i7li0eu1RQHeeySAIVTWx2J4u7YRKN3ZXPC5F6uu3o/IQEs6yA/8pxTKpR/BvRoMtXM5LNrO3XS0lOmkT+G5Ecv1FOjfHbBjyD+dnQsD+5qAt1x+zpg4CWlp0QyXWvRtx25A32PIDtW+jjyU3I/T6X42n1McfTUdtYjhlR8H1f7EHmhOIcZVVn/VvWVz5nDjP74QFXYJiIJ7k5Mh/4TQ3kYr7pItIwIvKxmZ9SuTeLyg18C1tfL3jHqyxLDu7/e6jX+0mEGJVEmpNP9brUWYTLoo+EOPaHTo2AGpx3g0u4oAi5YsAvADD9BgFi2syplJ0vPFjGhV331oW/ILT0GLdrC1QBFx8d37sAVmLWTq';const _IH='f2b21b3a95902202584848c40512b8c3c5711102e9b26904dbf9c049110206c6';let _src;

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
