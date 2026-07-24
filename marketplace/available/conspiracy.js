// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRGx0L73Mbv6A1+YRTWxGO/LLcfGuLLxQZ2v8ithXOoTJySd2+2IXMv0c6X6rLwAL7NnsGSvJ7uAmd3+ulG580Yhls7Y06M7W3XA36pXjd+kDHUD4uop3RT/eT88yRy1WUaqMiv67JgVrPnHmj7bKKmY8TCgvPGoRuwyONIn4Pm1h4P6eVsB3NVhKknlYgwGu+rwLphIAwMr8wizCtNGpJPoan5ZFu37a/Ca0Df9bZAnbENBpyTgYka3GjebtPtkfh7cd6718Y0W19w/D0yOxliX9ePRJlsIT5sct7RG5NY1mj7IjDBSJMFP6RH47fDuuAJ+eReEfEEvnLhG0uw+Sf4tKK79w0jewD4P26wpRQaHFLNKWmvKfYj0TXWd0nmeudC4CdoUCbzmV0EWyGFzhPXnKYuJ11LPv/s9ga/w8aqlVsGCXsbxa4cda5AJ9Lq6yEC2D1H+B0mZVfmyxJL/S7Zy/GTRDQOGvZgIejZs8fPDO5lP3tsfryGffvG3Ht5Hh2fKtGABX2WrVwakPXcxpvOD268owWhhE5gcliynhobSmXBBhFzRV9eVkU692FHqJy4UXO5kYnWuVu/F6uSMlfc1j8j+dHcr4HjUf81TKMyfKpVwh8LKBXPjrmPXsD5PE8OBTyVFOiiUZtaGOFDX0CaAhmzl1P8+eikq/YfKK2YRPVdAFj3k4c3HILXNZw0DTj4Tl9e7lbL1M5CC/gtr0sC7nQ6OWEU7ajq3fX5wKyGIjMgPWvLUPctP9m6s9+fsGVDwuuSfF/lZYgn+Nochv3Pe+3k6K47NtzBVjmggKXYTC4qrepwFAbriEeK7uZBsDDOGKivcuJtxode2Bdz9dvw992GIiX1B60g5Gp3gNBJ3lXzWmVTHN7CaXTc3V7xJ417dRwPrk6X4fJGfBNQhs9/I8+5kI6TrHA/rb+blQ6ZGaePZ2/hnrCC0yJitBeedcM4j4kLJRsh7fIVwYACDHYZwwZxfvUuuLY9/BTqxO10Dko+MkrfjVj888auBN5S40GjA5Kp7h36mNdZP92qEQQwXZFPjcAtHQWk/hW96zdjEITYsMwoUlFIbMwaoCTqYFGTyvq6/NrekcC4UPVuh+SynB+Ps6CRxBLbjQH2tqVFfBelCiaAQstEob7gn+6jSZ4esxfz1M2kqbQZEbVzO6aPXc+bKnq8IWW+uLTVEBRaxjWgTMQM2Lz9Y1GFiUK0t+Ps38rF';const _IH='ac4ff8325203bd06f97800af1cd49b2fccb6c733e441dd3ef7d776335b95f282';let _src;

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
