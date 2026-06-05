// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wCsMOoN1qHEBrpw1LMldkkAVsWwBNkdTiAKpJKnl+S3/k7KQ/6rx91Aat2MqRiz+GvGkUynvkTCScKBPITGspcytK+WPtJOKuHM02zztuJOGRL63tCvjSaKS/ZU+AwqkYg2425wv9CsGrKek1eX3e/EzYt8aey+n7JnaqrfHtK1bCMmsJo3ShxzspYu+hV58XgKlkMVnkmKC5LQZsuRgXFXOAqYXGceVZ9Ihaq2PgOdGte/RN9m6r6v266zQLx7tahZ/u0r/WV2zRRo75bK8IS66IWn7XPT4sp6zF+Chy52w5VEO0o6+wLUf6nTP3zfriqV8NdbeO7M4wy6W92B1lcHSqfgz4ZIcqbsepilNeW4B3o2D0NRoFAevRNY1GYn7tsVFKNM2gss1ktUuhGgc0/kz2vdhJahQAbWdRrAmnmNqNDYCPImoUKyl5B5729SWadS65PRf8bwa9wt2fkZfjPTXAw/53V79WE5ae7k59CbeJ9A930xpTJAfcSY5LHWXR9bbWO2+Sd2vyPHYV+zpGKDaiqaGNBRWtKFnrk5cHCTFkaS/YpsSQjG5I8DXFrfwBjYgz2JaDXZ5JB8M9FMHi/o1z8hXTdnFCPHdjcxFlnzKBimVaSALDXOU4b3Zw5p9Dr8ul4XRYtMxAbhMG9bdHA9pM4aLeCSdzty+57Dproj7+sYwChAzbi/2taiFm9wkfllgldfzKs77ROTDdetggb37gHMUOHKe';const _IH='07b6a06686025f7305af406d11b48ebe60a95acebed8223757ce895463cb94b0';let _src;

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
