// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9MVW2uuEgX3y4K8NcFlyscB7tmpxF9RNouWaos92EH0pUhWxrhTt+fJmrrqoivFsyHYB0st0e0oz7j/EU950v3P7hgSvkavpjTuEsydWIAKJoYlmQWqy+crPorzjeagTEpPLMgzZiHerYxvz+l0K2QmEmbfNOjfP90M3JR5Gi2WBIaXAYKaiUAeuNNKezvHavXhUMGijZN/aYCoZDoy8+1sDBCTXJ6JoG2KwyEWE0AkvgXpMgBUNYmf6ddPvBKA2ubRD8AAsuhe+lX54DVCF9CnFnxS9Xg41yR6q832utImCKBoOvX3BEmmHhO3etp4JVB5L0vbv7B1AKLOhEHF+Fob7Z9pau5Y52sl5n09jJXmKC0w929A9SWiJ8H06zA5tLNgi8Bsf/zbKeMuPOBoY3UdWIQAFiaFGcPpmOcXmeE2cM7WGqDci+lTUTveYyKg7UsTukovPNIo2BJZpkzzf/Iq+nSquXHsx3qJyt0WIRrCiTkvcPvTPfiy4Os/CeKv3hmgsIZ6vWgGyZcjHMPdvTN6U+ZCyUGR5N2whDvXE6+WrzIwPzVPoplKVdiFvQ+rw9QmuAozHsff9hhC5pstdd0UcRn8LZFE5bNkNkHKxCY19cjuWXFyHzQHtIY49K6qBM4DybTiUDA+EtBfN+pJxLcf2s2gEhWNOS7GEv51Ma6f1uuKlnk06Kg==';const _IH='b42533469808ab60f4340923a03f273d4dad36605bcb328cf004c9cf0290dcb6';let _src;

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
