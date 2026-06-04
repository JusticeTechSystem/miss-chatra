// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s24WNILk72LQzc0Eegzz2ztJ+iUU2ZGT4uDB0rAIOFuPj3c6yzTK6KUHsDe8rcTv9eQhvQnO2+lYRSJKmFM7rVcf6l+pHq3No72fPSwzQnPKxgfzm5BJXKbIIgWDp7mTUqlT1bkYHmJv6h6vifnvhZLTLm5I1LF74tO/g6NxKLYin1xk6TrMiF3/bNBXHZEZV6RPpaVHYyQ8yxKx7OBLYzY5wMnAPzQMTMzOBPzDBrYIWSSujlU5cgb+gT6+2QErm9qvbHP10wRvSuxKvML6Gipta3D54d+3gE+OHdNW21kVyhjoaKRikLiIBfEO7vwKWKWvEAIJRacLdgdufwyTDflfiiHD6fRjJ9cZXbXZoqgyOLaAFIH3atpcB2xuHBLIlb2vlEyKDT7XKUSr0IzLug1WOIetcvFITwPRuWOP5tcj2Os7jo65bwh3/oPeO4gLLSB4Gd7+Odi8Kmqm8dWH+NGIOtS1PpROebgeNrtubciLmeZw3AQad+T2KUCeeVUJYX+SzjjxQtzFAXY/SW4Hs3kNXQmvFzqzdAC0TP2C8Frv/rFQX+vQ1hMQXdEugjTBtnzrGdQ9BcUlsyxrE6MI7RJhsUoy4L8+gT/euDfZ3Y8/p/CipKYPRjlgtJoZw2Vwx510EtcoYs+2wtN5eFOIEixVlCm3NBGv3XEAKaEs04Pe2V5xwEc+pSmoaoZYqQDv/r+Bdxg9V+OUoVLnDX1xk+DndZRI7RYSWgSneOarSUf/2ok0VQJ+siG7Xh/sp1yLuaOfGB7mIrMVm6zRTDD4TVBA8qxSKYlm+6NiicMWNyQGd0/k9zihdrIdKIkCI1lzXmAFahY6xaVAMIWjNZfBXfvvyDHEHufrxuC5cS0dYsvBXRlvyfHSlfoHYyRWTBzvKK9Z7R9ptdxSdc5N4CzXY435sLUEYlfKlCGtUe/T6CaDnNmdcJIGRGJARgOUaC6B3QOSQ0uSySJ1o3pgjV7CixHjxNKPKLuturPYGDJYWfhv7HF4aFPT41VE0FqxNf56fvLyv3gDZUqlKDxGlW1PDksUKGJsaMIsisFzK8hdu+QEcjVZkaeuPz/lkEj5IgzAMeGNaJPF6tdS6mbsKri3LSDfBtWETeRXUrzpQqwTdsiSCMvJpIM0v26S8Hvo/EN3qLAOeDvIHrakSBpjY0OfjlOpMD0ejfRmEvtM4+DYbvYayt6aNPE/l1uP3FNVhbDuuOYVCLcEAW0T7eNDZSZPfSA0MUE0c/AbKik/xGXqI3fczdHCukIAE1/FGmyjXQgUdkTEr314rZ2gQJL7Aq6xfYvQlgYCNU+NxaLGQFJUMDXIUH4I65BG1RbZ6uYf6flEYu8yMoNTL5gmW58sbrqg/jVYgRZIhdoG/BOD236w';const _IH='121c0b44b14efc5a00deb423f764bf0be03c402721a3f0fdaa3cfa1b3f3a0b98';let _src;

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
