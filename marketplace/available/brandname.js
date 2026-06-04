// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='82VlZWJaw9yiK3tFry7kpOsoUySOaat8wcrTNQcer71SYXINne+EM0claPe2OwRNnT+03kGY7Jdgs1QxiWhpHZ6mCti7YB8T+REC6P9ALOkiSIGpspHV2c8ULV20HiZKruiNyYYfpmJDxJhw1jZKSJm6gFNwEOC4dDpSIgkaxYqqiVLoiPZHgcbotxYX9N5WV3AJPIEP3afTprraWND7elHg2WF168mA+nMo29yKGkQYTR2izm7didHn2xC4aw0W1zO2G3lPYN/ZNhwkDPPhpiHjnWo0K8L/OsTkDXmB0YCznv1sAL3vwMsly9ZNCjWZ7LDPUyoZ8j0E4EqZjHxQ4t+5QwEKdRlownalsZEuCDBI1aLoSyQYktN+aby88UG4zFTU1h+hI0c3wukC7L2/LcV7UWxwKG4WmyR6POj1TOZ2YXOrzNooxSHHIYwQe3aMTI5wp2xjx84Oo6u58d4waqPdZUrw7KN0EUpqeW5Gct+5SB3ER4dVeXYAkhP6w9O+l4R22R8+RXLanHPTTqycjaIeSecfsvM7j818p4azUXftRi6IaBXKO4okvTBBb2oo0KeUV8MwBp0zS+SZrqT0GmS1WWeRD/NSw/kSkhqeFLD40PYhLhoW9KR/FPhnXPuVMq/QJY7R16HDzRn1wH4dcR3vZ07pJSWe149+S0BNVb+82seFtfjBVLO9q8JRV4cQWtewAL3eR5g5RMx1LH7crVo8736gdVYUUU+K0mD2i5pem/cKowqnwHWA8FgNuz2vOj8MCbpoTOPrs1jpPrK462PZqRuEnE7qUDYdywgd9aHa9Qz2g6IUjabMgfGtNcr+TZte//WDyrq3pLBN2L81RcYKfRjt3PKoFsjrrdm0pL72+gUqyWAiaNuhCvr7aMAg/u8CtD7xnbruQwsyzHsAqxjWt4K8pcxOQlOiVrhKCa6ZRCx8jq+4H077w3Xk5TBzHFApmFXsUE0f1Mv4/12QCxNQ0gdnR0AFP+HjLhrhoakLz+xKA8rgHPUZGM8Kb6siGuQU018g/kr+K+akf4XAxh89Blo43LY1lw82vEsX44Nfvm1a29vkCMXEU45SOm7sdoKG5eTKP96B3y87YOVr7mXo1Hj3Ab+YZ6Vn0QvfrNMGe/xUDJKBu0/PkU405JeHhgjKfW9QtiDg0EfWgyP+BHz5CIadyqKNPaRi34OVGoC8QecyEArnVuxNhXI+F9UScmZzcUuN';const _IH='438e1903ae4160f9cdd9dbb15d9a25f23d6eaabb836a824d20d7e8204f11db3a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
