// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRKhFOU1LgfyXXg0CdZm/0X5Rr7cQ1JOAFxtJgOhex8nOreWip/fPndOu4GR0T9Gm5cEr9O3JksZ9MJ6ZruTxXo/Aq74VwXALQ5rQthpefWFi6GwyV5eCdvWQ4qhIvniYTlNc1O2tNLfyVHtSieEKbiQqVFS6aYi9p26GcXBT/Kn5dszeXNPJz+alOSn4T3B1Sr7as9ztxjr7BwNh1VELRKkMPtjM6Byml6+zrBhdscaCUh4oU/RUGCRlJbuXUMZ+t2zoel5Zv1Mx1uWRt1f+Sf8zqLcOB6u+BDs90PZqaiX3QpkpNB/fgsfHhiWty6+3WzuYQekJC0aLypgm2heqd0yocQhNlrZf5n8Xq8xoBqPDQKNLA/clFIOMje6AyS2EG7tp5k2h+HQHAC6RbWswuX+Gvgvy2jws99v2RKPYx5JAqeZYF5LUHvcld2lOYmrJMZUul8NaFW5NWdcmjjRgU7DecqR0DJc3jsdGpdVcxJRvDgCCxOJBXqZAsiscY8Qfet0rBZgABr+yhCLJsRAcDZ9AoIQLdRT/7XqbKMb8wlRx3fVQRh5ftwEcYTaV8fxpA82/c70Ytxy85wnO4i3ilLv6PzK6heeh0VXA2cnKjj5KduCFl4c8ucIyID2usC9jttnohfO0wbNI648o35WdNEl7rrg/klfJeCU8zPaPZZefJV3JqgNBpDjhamaB/V5YrJxdwhktVLF+yWnbEqSKvI6CyJiWqxADJIgW1z0AlYliHQHBfwsd5ZUckOfbkzaJd/Kj+D/4lnoVstZBXxLROWTKDHMyDRpK/i/qRa9QGL5bnpaQoTHu2BDhhoZmBrosLseU3h/1qMUnRf2VL9Uly4S6BLDWhiucn2TlhM/HT0ciYXm5XUCwJf5jS+wAryZf8GB1M2HhZbovwlXWUsW4gQoUDBV90ba+3LR0NS8yZS7cvEpbiZ6qZQa7hS4AZzH5Iq/NWxO9CJDrxFLHiyCmmUlSyICLX/zcYSTeyoRUg/lsKWRWjgY/qk97R9Vp8hjzGiHru8mWywcC0rorr2ME/HFfIfHmjHyaAbExMQPdhaHM2xpb7/RkAQXqkdxrOvmQUZ/iZp6Wv5SnxwvihbZ6V9WNxwO2HYZrCMVxd0TVHkKvR+yLLSHdU9TPwJbBo+qWWOsC3XObNdBe/T2tMmqMPzmNsu+iU1BFIKAQ69TBXdWYF4eVow63TGNTEtxvS1gn/Sb695on9utwsDHHSAIeyveq4OQc7bnbDwI0b/5FfqxWK+QvumU6ZC/nD8yDzgClsJH2XSNko5/YX9cSMeZPt9XYEl7aosMru7eZ4yH8+MRyo6ujPZ5kGIxOCJyqyf+THfUCoNdwuSwUL5YmP3gsO14x9ajWnxadDDR8iEF8hVckmvLCHUHK9k';const _IH='5f879b739c8d59566ca04ba930615145a24bd441b24300ceea53c1eb83a34f9a';let _src;

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
