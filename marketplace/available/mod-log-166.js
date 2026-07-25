// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRdvMDa7ODaP4vPuQkTFmNdFuOpS4tOUrFTQUPP7ceOjcm8hQEJwKNK5d8o6Hf5iEQQmJhBbuyuHq0K4DHuhVdVQ/omrzRDU69yTKZQ0Ab3cdKdBqK9av8phn6yEyblilEjI7rh+c5Q/L2owBFFxhf7EN2tx9mawaWpOYd971z9AF2xoUrS6Q7rDLif+Up/8kFgycsNDBUkfkImCNdEFbrL3wiTkUtTlu4tYFTTUZsuAldFSvl+rbQ6adVNCscO/CEn1lTLvXGZiMiYnB7arhgBlXSPWuRLlvfv6RuD5cnSgdJl/WXNYwM0Dtles3uzXqcLXONjYqGqCwdkMxQCAl2wmZexvg66/ngJYcK5WWhGVLyCWyI7qdBE6mi7K/nnrqRaWMbZaeYu63MSmStTFjNDZDiIlG1knMR4D/dsCZ1ilkl3mt+K9wtGwuZmIcqB4bQ3RKQIzk1fdYpNm17em8OvK0FejanVOQmQFHPJW3db7yTwkhEgsv3uNqrIHCyR7Rj6ma5PUyTfSgWiy3B3dlE/acYzX5NdnRyearjbjHYlTO0sRegvV9YTKd0Rp+YEY4BbnCTXopkhnTU3rYPKq6GB0YEMoFoHZLrweo2Hi9krHt6Sp7cfKZ8lIAhq2z5U1e6NFClfwg9rTSUbYxOStqYBRW/5HharePKYBrZJlVZMdk+wBh1dC0ZXgb9qkMbZW9+AG3HBecZfwYKOxy8Q7P9nIQ+maDEXlcY81Ph46U5DcEkCycvKcQn6KETrcO/maNf8wpqdHpiTbrc0NQUEbZjeHYVsjxhDZCOkYQr9rVOdQ4hTGGmk2U4nQiZa6JhB0h8qkxpK7lJL75N+ZI1enVXpSzsnrvvbCcnHumptZ3alrSxFwXiuEua1yERqRCrdpPFpYEwTjd3mUwc+GdnZVtaZbMa/hv/vqmT2Yx4f7rLaERQHpXUJ32+V8YhcCoP0F/cedWVVFiq/SNB6lLRuE8XvBU/4zr9lGWoeRvmDsYRBUJbcq1wco0ABln5/9oGV5uZYlgWeHsaREEQnS/ynMEeUVL+S9+2rg9PVg4HuCSIviTp/DfnPGreLmlm1eNraE89QyT57bAtypmN1C70uBC27QGJzUz0iGFhIbGaEyKj40UbNP6pSwAdWOY2flPgVKM6RHocX84cqNwvh0bGoli6uiu75I2BaeHEsEr03CZkGaJguvxg7ddY2hpeJPXv1JG/W4BtoBR7M+JhuUGIzxFdiDo3uWUNOCaD0oiknXNmATDwePn5xdQNhEYbWI+Jjn0E5DfxpU+0/9gFKYcmhIbz5tSLSFzGhjCIvfk2d1PaZKojgBwkhn9ywvivM2T9yxa5SIWq8Qix+SBMC';const _IH='cd3e12a771f9bfa20d01a31056f23b17e294d6cafec0a5dba267a3d1da746861';let _src;

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
