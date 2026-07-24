// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ7PtnFe/OfRWLQdv9nZPMtt2v25SfRUOClu5IFcqz9dRAg5JYVEW5E8zgzbG4R1TxaWPBCdqOt3UEHiy7CZoCHeKpeUQuJh4lLSyrj/qGUCAXGtG6fdqu6czvWiofi67iH2rUXfh133VGCs7FrLjm+loT1r/drqcZv0PDFskdRrwwtU1RliiHsMkNqQm5P1CIlMYnBinHUifiQKO9F+K7EznAHtCtwEDWBuJXONqeCb1LiP1P87m+SqiUijTegFkD4ruOopqKnkc06l8eAQJlxLRd7l3rcbDRybj2ilkO/P1jgeJkaSCcCDDKNR87SolAbJE0e1oyx119FRlaxfIhoTX4RUqJq5dLK77nveUXkEPBA1+6X/02gSemoBHfEGxqb7Od0XPJ2mK4QFYUkBx+pN6Fmw+pUSTUwgvxEyGOeHfUP+styihpGyIF8ckDTb/0/DqrXeMMFE7Voye2Qf0BTuVgVIX/uK8vOtBPeGlIB+O+bdqIftjjNLxdK7h/AgGqpq1aJT5tHqdd9v/BXOwZIVJnR6y+TZIKHDC9/csFv4pPtJ+xlkYaNk5YtjmiloJg2fgfyRGolmd94roSJroahEogx6cgc8c9/aGFRqtp3eeuvSrc7iy28NktUtvI0Bo19BwAH1Bw2ZC2jaSJP5y1gkZ1h6DD/nsn2UG6fo2mSUV++4M6tqbwj79O4HXXHXfPIGJXt5eAafCdK2unKACtmrOjA+Pg6bykJV0IX54d6zAAYE33TVKVh/cHJutF8uGXYfXYOFKKNuUWRPbvkya9Nzd139sh28RsKHhSgzrvm2ppH1d2BQT2SfbUCZ7wyn5neEpwihWGbtMyKHIHgLky2AJR8AM7JyMBo4BeKpK+nSw6y9xZs3IB5Zc7Twh87fOFao8HwR3XlVxvQGzE1sPED5Dw9kuBsdqInI7BnQxwr+ToIlU0yZh61EfMdLo2Eq8HpWKmmOk32K9aTOyZYAuQxeF/ruga9rZOpYSCnTUEAtLXDtgB5SggLU1Md+dZRY7n61sp4lLCT+gl4nKnqDmzNIn+SfCqJdTWVLWzDswRG0v/2Wx5GC49BOKR7PULm/wFn0RXb0R1rAkYGqd0LDTM0cOQngsI8DL5SP5qaFDkXqCdO79S2s0I/R2+C/JeZOoqicuvGiIemO9NDwdMDPmAZydP1fj6oABZMkVn73pjKiT4RRL6mx/n4ZLRSDzYoetGZc9M=';const _IH='10048293b5e54db6032d3d2cd133076525ae4ab01bdac12d71222f0f0ca39347';let _src;

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
