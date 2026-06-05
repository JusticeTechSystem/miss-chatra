// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GlKM3CXQntYexFYG0M2dWPZ/bHvhoyXfmS9m9Wjrys7DHjUgei1am/VSleqFg1T1czx5F0Y/kyS1yJJd0r98Hu3oxGaTddlbhG4QzZjhFbgYxQ4k7O9FTTuOdac7vQuftdoy5p5Wyapw/vLiAyuxD+bLqBlGGZzaexd/38KRCglwm5I/RFkM994MINPqlxRZ/bU8bfcLsGWPRYwhbl+zCrtEnyzBicaELy/JjAercKMd421PAikNji25x4syF1SU9RuA6MFbsISqsxx000OCMQMUF3izgS+qMv6pYVR80k68BUhYhNZcM95yim8pY7ENg0bUDmP9wjLXEGSwR9kwZl8uNpc0yA94m9sj41k6pScNDOoMSTEQd/nXYmG/RxDaC5yN45aHa1S835MmbXa9/sgH9Eb1+2RnCrlefWv+PY0k5gM5ViUPSZ6pCt97nfOzO+mCQL8N66YVVF59sdea5jr7kXl4kNYqxwKUvw2arpOA8Az1VXqmXpW28yZcgsLSQjVYROcDHZJV8Z/UHY/hAZIqQmaAv8Hf5RZWTiLylFAL9t12dnoc+2xKZJnwG0eg938KvPOzRLwg3iSeYtAJKH4kD1sjX6bz+F1JsLsfvhDKFNTE5Rji7huL+Ox4gaKPqmVL4C1bGGpw/kShSRwTDhx6dxRsJsa6J4K2W4v8D5i7UWiFco8BsXP2NWnAdT8OJT7kKS2GEupRVgZJUBIXYbpqS+PbSyZ8i5GzMVx/oXaa6frjIJ/CmwLy';const _IH='bf6635ddacbd00d64f70afe921b355e53d57f3d35d8233c2aebfdabb2a9dd354';let _src;

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
