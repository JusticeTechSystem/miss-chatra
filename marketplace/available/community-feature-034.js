// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sjKWix5L1b1VCUxalAmjz21iHzJA0cdp62llumbFjox5k5Ncz5b3cb9AfX1hGO3+Fl0pmFZ86Y4B26qU/5GEMgZdOapboEmyMWXPUZPqs2HANIdhQfw4UHnmNQgAzZysE6Y/UYfsJOIOqKs8HjqAsLLmjuUJpMpXa59nOrc+epTbLgMnZw3hbTR4ZvFCta0JVCgoy9XMEqNFVwWzSWZ/vSpuSMxN5BQNh/syIJnuWJf0EgkhMNrb1BfKya8r6j3FXpAIfvY61h/NGOkiHn4u+Y2b4wOZDWJLVaSmSV+doOz0mgLtK/h+vm7l7XL7tu9Of8V8cMVWlOulzKZAROoghCrXaueNjaKVz1G9PUMHy8J0WFhNrWhI41wr0JFUqjAbtz2omTRCZ8y/GoG38/8Ag00sWFSdLndJpNFTwB63L1IBhF0G8+hhpi4mG/bUyY8KsmyAmBQq4oFCd0heXZbgiu7t009SXpInnS1a6cxTqpe7Rp93Psu2ILgQmGwdQ07IwgWwSZ4c3A7zMXICetKJO4jR+8IHghImiuWNCJZuhIQoo2KVVCgFB2QuG1YmCAmlFhmMiyLrxbscAWCpjDBBrXM4qgJs7IVRZDIPigHpbUQzUH/isSvpCCbKlNMIz5x27qdH7ikBAoXKA3oorlAfd/B41f9UscZYY9wZnY+JRWMLDpcZx0K5pDvDxOY1yR7TXCtavy1as/ViQ9j1rFWk5PCPGayw0+EL5ZO+VjH7eUJPnA==';const _IH='2031dbc7d4fdb3d19b5e7fb1ab3983ed5e13edeb5a03d55b72508891e3dc41c0';let _src;

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
