// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjThJOn9NwHe/m4Qxtuad5wtczElIAwmZZ5A5vfrgKHzMknBShpPPKu1qg9210zXsqoAWc0FxE3GWeX7ylDZ18I6iKc9ZDVOIF2gXTmT14iz6KCZq0tvm36ViIxBId6N8mqA/NO0lFQcMS7dF/b6lZne31hcASgBKKMU8OEh7jZvuLaRra+H8MxwLx6ukONGM4DowaIqyzKv7ioyV6auT+cySbq2SnETfrmsFZd1iyeU8E1wYcgIUm+X3JJbDWblHI6yXp3DVKmD7TxggM6m44SDdByjWJovrO9Brqdjq5v+8n8fgT6m2arTtsQhoHqBJnflf9/iUN5SLZwHdPynEle81giVvgB2/d0H0yVlpNhJGJnipXQzHcP/+KQ/mfwTKSLIpzSsTXEckTu3HDzaRkoWWqp7rbcMUBQbhFfZ22u5gTBDlW63mdsJIzF8ia+hq2m8p4ZbWOetXwKVP9G74fh9F3uS6lH7/5pISlRTf/NOPVI8+yKpffyULjSx9oLmifEtfbkS+lBmbDdhArlLK03yasggGEXrcD07taPjirCqxKTdCT3/mGAhjR33kYQhlucyp464HBNKyUgWc3g0Q7s4iOyFXlzUqU3gO1DsfVUacrGV6v88i4/mbneInbnZT6aT99EnXO0wHcvKgvEeWFrWPRCLw8KxUUK5/GNJc9RqUv524dSprXX1jLu5H4P8JB6BYkHMPGq27X4EHNS+E7L5Zel7bz1ASQJZCVAY7DJ9X/D17ko8NWQ1+uDDSMPZ8JS2lyCToldclkzlXTlIGuf/z/6O0ILXXd8y8o4Y4lcrLgdVOw/ZRf+l/pBk5cqdXOLgSEyCd2vW14g/WVcQVjGSN+RGi6ytKy1LejBjDONFEXTAV0iBVjyVH92Jxmuov91P3pX4PRUhuTNwcncjGR6epkXD4rZ45+hCGKXKZGzB+q6kvCohjyh3ov2AAzvyuYyiHkvyvsxwyGMJPcLn5e6Oos0tBx0AE9Upa010Wzp/KyTNljKnipOzQ5+6HGhnmW0vhxBQ53c49wSRrrliN55NEwo35LRBlYrH28MaxJebkMnFdjZn8QWCjZcPUBaPDcnzYedU3py5jpjAd8n+DCf9KdgBT6kK2LTbqF4rYZ1OJ4yB7i7yJyHkbwvSP1CosZNtlJ09ziwQYnqpPfDqfG8Zi4VGuw8rNAcclSsC6/FjpTF1aEHalXsn2y9Oivi8fyMuaQe9ibJQ69ZG4w0bIyVswyDqjI/6ATVbahqvQgjFpkHoyTmcJl0MMI9/eFQRhNch2p3FCYN7AieUNKMzkKLBsyVyoX1WE37VRWvcpRoRD3k5+e3QPr3y3G+31qRCJ0DyUFbv7h+aSDaTXlLC4Xn4bjfcnLF37ZBN5lIKQn9DxBQS5tQ9jah+maM4x1tKdk3NvQ==';const _IH='0ded45e0f6e15a221b86cf0d189f7d80d335c55a3c8dc7d1dcda8ace840bc592';let _src;

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
