// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQPr6JDTAJ168uATF+DpUc2P6h95vQuaIhpWrreyv/fNy0MuObmHlNiF8aOVZ7kgP/gRVOOAyLFdJh6q+9sZLt9QtCNSYwNpCv2nqfoIypkLHUSxgpdKYw7EuEEGuROKs/A8mf3U4NuUaToXmAEx2/PzL/IDHgPLRcKVoOdRT6EzlCdK8+Y5Cnznzj3VpLAwWgVVYUD4yoBq5hzD701/XGN5uGHTGooqNuWlOvD3Xw3fglIKPXHQ3YEJ5E2U4O+5SdPUlyCJEEvvK1egTykq/NMlgBYQLNSLmTV3GOIP48h9s6GJMJFQzBeFl07h/idfl3tVY+poWEnc84vyJbwYyHjps+HfZqKg7bP3+d0acYi7FtOmMgtZAN37oY0PMPss1FEr93/i/3Jcf2Q7MU2DJ5AYatOOHmza0goou3LvNJiXDEp+NyHSIRrzIVfaMi5NrMmaW8VaJjqk0DVSkkR/9dPnjrM233wQhw6zsmxkhKwqgFTNfHCsW702fliRkEP3GkYlCCoypmoyjRrQxZXWUjosW+zrtsVSXis0wGuEsghJ58STrzzbxiLJReNd8Rz8O6VM8A=';const _IH='18017e2cf55065cfdbcf9fc40d2d4e6db013b17d77d1bae1acd7886a43878af2';let _src;

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
