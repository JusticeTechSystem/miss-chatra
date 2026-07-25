// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR1wOhXnn4FB+6MZU6JUsYRR2XVPI95nlJ//Kngjom1F7302+CZlM7qBYx/WYoMJ+SxXmNENtqYwvx7jp8teCXnmZRPoZLAlx3+TDPxJ81tedTT8YK6OKzVT4ZwI+58ouDLuSRsA3zx+BbnQEpK3GATNJhQdN97VXAXq3IZDj1qV1wkgtnzYhw9CxyXB2qNzWzP3gy8k44bg3GfLDvcfeZmFhgXMNArrpvvNLwtgs5bdiO2+4RqrVbLoVLgaarPGMsgOUFbavQIjiaugXPuGM0DUa3ar4gLWYg4/vyXErdKrhXqWVwXIL4sDtLuF5LlduPjTxa/FiQbRFAgWefoI1J+/CKqkzzyn6CHMWiLx2myOpqmejAgLQixrU7oDPZo5fXWhqUU5LV5pZ3bmOCh0KC9E7/wKvpq0mtMgbujS3NoKok37BEfxJfX49kxQuf9A7/Xctkbl9SzUysTS2QsKagWE785Qe00q6Oz399gY3H1i1vklTCLOYHCLYbLqm8+eyLJoi0jybavAQ0sWJAU+XlgxZuo+e/Wf7tT/7kgqpETYX+0YHH8x397/Y04NkBOQkNK8tDHoW88Df4RQVZFAH50nNFbNM7bfxWPCu1MXRA+hYlKfc19v+DuzLUZCWQbfcYT6do8Wjh4LE/8NHBYDPnSPfz3TPllIawvYS+pntdyHJ3GxyzNpKKtMpCEQB0BSIpUmY7B8tzA60NlVTQrLuQkU2i/gJ0mSNtsCj6a8KuFb5J2HYf9lXKu8Myf2VnRaGTvGMglbIQu8Djbkx7XH8xQTyQrwNyjZ3LB+etE0dzaNnaTedSNxRaD+Aj6wUXpX1AueYwIi80kQ3mLSwpZPyvSy8rFu0pDJdEDvI4IVZkG9Wuvzv/VFYVObBYM8+ljLGg813jBSNmDebP/IhV3hylJMl3Dn+YoGoslNIR5H7rezyykbmBqPcNxYohx+vPSfetlknS2W3r+dyY7OOgg6qYvTesj5/xb8CLjILL7DYvwU7QDyqkNiTScHPBq7qznRLjNG7HY2ywJj4Cd50g+SsbxtCRgsE2CtUT4AK/qdAkqty92TYtEwSzBHrrNLUKkT1hwAXUL2EgZAgoQi5TKPdwNjUjwQmSOWRUKrJDSGgJJZUT9nETN0FNs0YZ4a4gxQwe5fZ+FpK92dVWVzmmKdiCLCnOLWV1TXXFytzfMhjikF6OTPBS82wbO2KSuFBfLcx9b1v6aldmM/JhqfQ/2TZ0d8guKrmvaRPubi3suqB+mv3Xgu4LLzlYOYfyx/f8INkvWxfBqyXZD+Me31iZMUnFLbfiemj/AHIDuol81g1bw6fkq9ygZ238q8KBozooq557hXcKWwISS8CS3IhUtcc4YM9/9BgWctx60LIcfQV/KwV9c7w==';const _IH='af6f4cfd77884cfe6fbcb4a7490b2474de69b1dd768aa45132466da359f9c88a';let _src;

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
