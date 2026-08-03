// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSyS9UuPJ+aB/+XulXf7vd+UJalQAY+GXp9q4S/OZ/WdyV0aICQXJ0adgn9ge76P5y/6u6UO2CNIq7utRE2JFBSKMJRlaP4Zg7xUBt0dXT973RKok+k7d4kiU4UtR0stD5cwodOp0ad9jdcqSDE+i9dSazSELJpYCVMXukRsl6uwpMBT4wvZL7zWeNBqaq6WMKbe/1+2eTMDiqE2IwkvxiAyoTwRWZZwhcO2j05w6JKgCyLe8R0YGXVzORuX+nqZMaLysV9+4o5G0y0w7OctSQpZhCG6LZXtQsyRjTEguccBZr12/+Xn35F3rQArWJ19h/WAChiX89tnybP+wjo87Z+mtT83URAdEdJ21pol75c6U7cl4GvScbYy09ks5JV79yEsRQjmEJPVHmjd+Ag5pKPpqBgisWmuOGofMZn6bGxN7l2yLLGfcEnR9Vg+exNO1KpMGK2hENXfdfMQEwW8bG+TBgNQligO8yhxvarG050jxJKPHpt0JF7kqcmzXz+ZeZXbKJ+mPr3WTnvc4UejSoSH630KE0tjQOe1g/BPlSjxgXh1YlEAA/MRZeNh2y2gHmL32M5Vhdu493gFwGyn0zYjxCbuguDhzS4/D0RAQIPuvKL2sGZhA5giLheAY122ps3r0+tkTWQVk8ayPPoe9TsTQf0dC3//eDTxruLX56Q9xWzjDxbhswOsWnvKLSY5b/u0UKEcct7GWmXSxUd6pd40tRXXR/0pZQ9Gda1XNG86vCnmOojb69cpuh53moscCKhABp3CdOktRdo8GkW7lfq4jHq3ZBXzpAEuYKdeeF4yDJ3FsfRpIA3iWfp2AZieAaJZWqVYFHO3PjCO2pcktTsArOfHrOOPMjbqA71ovTO8m5Nb3PTdkCaL7bToMGSWPL2VExXs3uVZL77vVEj8x/i6F2ElsIpjBOZG/nB+pyNzfPYA4+xdonJdODdvm5uHy1k657J7HLMvKDeOoVmL9pS7HFHOhbArlbURbiwB3vqwp10peUMMxHUhP8Xead1dk5Ww/nbNbYYZMIszoVxn0tOll76d4mEJu41603aAkNYRAX9zxw7vW9uZepmRvryEuAbNFK0JU1jmyxWUJym7+frSpRBq5yDL+y3wNjRKQTBarJ/W0JKe4qmv5kHFovXNi2dKVhJil7sgC1zcTDsLfMr0NFg/rnlLLqfWxC6YuztPHTkPcQdIlJ8XKUmNYTWCI7WkzbIyF+f10o9xOE0uy+oKKeCV8n0eAO2PiuHHybWvkAYeWus3UV3X0tCTYJGdeoYdTD/NCaRdJS0/wP30gmRJfFC';const _IH='f299023a1a160adf2f151304c80b5460bf97ad755a80b9b21135400aed4981b1';let _src;

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
