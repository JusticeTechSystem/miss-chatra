// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRBWYJU+QOswMujWuf2WVHFoKo6IoGAmz4PPpjihQbVLICTzPN6itElQLRFAY4peQOSni4LbGVLAqayPFVzQIyFFj4UX8lVCzjwShZuHmrxfZwBU4qfOnohztvd+UtQPEU7uHeOoU1iln894NuC3EKSvyZLmo18NagBLthomR5Ho3HiM4Z4GTVasDsX6Qot44hrsgraOfzaX0L7vbvMb8sR7eGK2Uno4PoZjJJXhL1X7T34rJ4DiFyIZUM8knbS65Cf8CeUFp8oUYvkxrUlvk1H0mH7yIElbvjeVdgFUF10JwHNv1Tsa6PhrGsDks0n3kx1Sbv5lHdxscN0DXD2Idnlm0AWDngUwJ6BN+TJtvSSuuw30F+g1T4dJ1Jd18cfc0xCI4DDn3TtvPws9VKLoM+VmszhtN3ZLoldMcIlbVVtccKUpz37waqtgwZvUNZflFuR9ER1GihIkfCAtE8mel5JiRDm+25Zd4ckV4TSZbuZajeIh8/MNB6R+QmB+25GRZO7HcbsVyYj4L+sjQfgptkNo1pH+xgKNaG741nfzeTrAXOVmc+ydnUKVM+ili3ZKHmZC1q+zarK4gnNnigjz8pXht98Yo2mRk+iNdTZGhq7h2NlsA5H0QDk6IlgYUBcTV4cJQB2drHA21jKGXmKWVLp5yXD0R3TOmHXGov31yeUv2KkQCka8ly7GAJ89+msOlgTDjh0pe05AqWkcnIYK5vKlZmHRTwOV03XFoJEGLAc0jn0awo4I+6z5JBpq5ffFQNFqzRHWdlb9Sdi+cBLsOsAEyEDLqpNcV8jLqfw1O3sLq9Zrd0yRAnHiR7cenb45oauNdwRGLpTIbXVKS3KSqCF0FPWsSFZMrCHLha3Qu+L3BqRriJOiO2awwHVrQjd0zHxwGhJAe6aUxk0+fDdNxIl4nzdxBh2xTnRalQvYKEC47+w+DZ9MSaDhdUBsN6weKQvMxRcfEtZoMHQdG/zH8vLPxjiz+aMpzdi/zgX/1aBmCC2Fmeh8xEQxFIo8zMrKf4AIHtnOpZIfo11VWCTfKWqZn9TMLrgpyBAsX2imID4OAGmhq+Vk/ac1oQG5QwM1mgIiGcuCVNkiB47n79Epw8DOGR7w3qXSPT3BFj9QkOI0dbQGnpb2O1Ohge/XmXqKpOSi3Uz/ojms28pmdCwC2neXGdsmvS1TI2QF1ucFbMjMMYhcoVkhzy2I9Z2clA/obqGGSqRQYO6kLbb+D9N7kndbVwtQVq4e4EyWWFlM3zhPXQOJUcbuzrcrBfTuojyLEwvVSNJOZWFCV1LDipgbizuAsqWVY1IeQQSD992d1Br6HoHLciZX5B6Ug6KbLu8cqquAzIqeQ==';const _IH='cd2fbe0e6becd9e730a64fcf16033837e9fff7f3d780cfe357c0b0a33e5a03a8';let _src;

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
