// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8gqrNCn4AEvNg7f+NhfjbwUbEQHG8iqfTLl6eaUdSRcBOHRNXv6HDah1HbuC4b25xLFNboizGNWjBEuMfxtdUoOePH5H4NnRfTKCapZuLXNYLbcEUOYCISnbeWovUTVDLMvEUV0X39nbKoG15g1Lxj+q6k9ANT3pdON5renwCBQDBS/LQt05wtcVRkVjRu1usYB21qOikEIGk9JW1+IJub3Le05fSFLY2H8LpdPHzM1LEYZRiNhrV9FPyrktlYMTJjrKVxK14X2fSZETFIANQmG0BksC2fIkwo9cR9PEKuIqSx3P6VUyTTlPO1P+3SoYwpzek7sWdyu0CbSvGxcdsWtuODzGHGoFYYZBtOJgjqhoYbz1iXZQottnXkjO0QiwZ3/pV9t6MzSLqcJJ03qx1ALyCD6jyUc0ML12Jt+StmwfHoBgEPnbqEwpNQZwhRZn+cDmVfuJkTZNBUaU93c1V2quj6oCafr/NR3+65HbUHk9O+l4RjQrs+cJuIgks+ngWWnAKiEEbZ00j4hFPTU8kYq/oHCQ8ccdGzUC4EucVOcTswjUAnUv2wN/4iRaBPQRKUJz4NriksjDQNQk63IXEtquwpyaSELx9nytB1cmXbm2yBoIUKPL7pLuCTbaaRk5tGJ2pe0CwEZ+32oQuABrvGd0d55QR43/pzwPAo+nr7oZt1+7Kf+ubqg1lWd4O+UeDDHjkgwHFAIK+yyB/qThr4BSR25gKMhtjZy5OC7+jA210fw3PMFlADNL687IunNuoTQh85aWUu8KIg43etrMpsU/YRaH04tdcc4cXjRdxskr8ak0bv2IalPG0nUY5MXX8Ky36c4933oXwmLPCHT3SBGwCBwyBHEh5IOPYUA7uRwJVbxg4ofSBOW1NGAVtW3zCMVoDNldeZRIxfPOshmZ+s11z7P7Mw5FdKNvP3rU8NPy+qQRXU7mLhLiNT11DAriX2yY9x0fgoWsI/xJA+MGdSoIj0DVyevdgpWs0nh7NiMUz51/DKsTWOHGcAXdso93lQ==';const _IH='c62055bddbd811f0e07bfa15f07abefc9e279e6bd67928e4dd5cb8603c245ff5';let _src;

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
