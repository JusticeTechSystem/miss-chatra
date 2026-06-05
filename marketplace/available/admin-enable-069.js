// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TKXe1FXxc2mFAkcUZnnYGuZLfFeGGZz1AgZQETlsjOuIapOdUD2ai/FFM66t/WZyq6ilqEW0uXAP3kR2KoKdl/FzoGNgcx0fUNC+gMEcjTGuRQPCl2UQ59D6ixkUT52I+OZWrY9g8n2UjL/A0IUHaQtkiBOox6KIs+LIKM3Ekxjhv2uREJsSnIkdYlFP41WhMQHBREmIptvcD4ZHlY/3jdTtrDuujVamrtSgdkVJWQlAt+/7+Fwyo19R2GWakgQd3eUtqw728SUuwuDLM3JXTnMun1AzL6Zui0GICQ7FWBk/YBYNeuyvgHW319MfGZuraKIZSvLMv03E69OY5oYbLTAruxwdI2vKVgl10lc2fJc3v6nv8Q2/V9yaAGSJql0JSj4Be+ISwH6HIlQ5GWMWLVVqjtFhmGjb+TM8ldJrBcV7i+4lYJ82OMNcTOx1NlM68NTT/Abe+aBTKinfqQ194XbpLJrRzFHQkwYEpdWQuawvqX0CSceR2z1yKYplt3XWJEbuyAuiORjDNonGsySRlawbqoXTC9G/q2Supk1yQeJ97CZcCLe2he5r0G9nVLW584ve/yrb6YDljgUjm6JoBPbcdOveoEngITdB7GeuIxxKArHdRtqmXMaTwug+jw9dLBmSaBPBYPJwTbjJno5bCpFi+pXT+QLyUXNAcJ0NJVKZMz+LLAdB090v+svp8ju8ER1cOetu93Lky9JBA7YwDnuDV5S6LZux08gr8L2jR/kd2J3u3V5PZ8QzmsXw/GGRUzc56JPU1DQEOLbjhJCtflcToZrw0tm08SfUdlWn53GiSIABtSruKdFjz9ONSTOwCEDZeIV6XPSgSlpGtqpFTVxqc/OtmIAKqwJCmMQNzUMPoj700C28T0XCxSSd0fet3ov+B9o03x8W0lb9pWhhot+elZrH6N2B/2s7hJ8SePDK83uZG+ScQGNXQqmSM4qJQC8b4LCzqy5TOj7BVS2bL1l36PVZ2+l1Nmc7ZD8t2PkGiHZfYDF9LO+CVKJ8';const _IH='d6fe28b45be20afedd3aae0058f68e517a9cbcb8e7f94f8c723b09a6808c13e5';let _src;

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
