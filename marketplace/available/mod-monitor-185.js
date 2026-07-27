// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT1mhPb87oqw6EFiKTNw+cR6ZqaFknl9OodaZyjCtBwFRwvBaxNBJrXfJsPjHUrYdV2KkgYG8iKc6u9DNolQ/PG18BCPn0kBKLEhn7PEOCpPTXicEQZa4W58wK2z5WTtLQt5G32Ht2BvGskr3Leiu2ATKqPqd7efC3KipNPaADO2EfkmJSf0thhOYXtIKesbACCEODHyVVZ1rKN4UVODn971o2MRvQofP/s9nSxV+ipjF+K+Cd1L3VjssDtHZ/Un2EMhpsy6QcjWPyoM0i1/Kq+inFb7lrEBw5RrsEYBeASh60MkRNvhtL3s07k1y0AWVjEd7Pgw46ItcSfnW5HXgWNHUsldkY7C5FVRgKieH9VwjbC+zQV52z4etvamWDP2rbPPJSI6vmhmk6L73xNvMXQW7tmCSCsOkYZ0mZ+GujF+g2w8btpw/pZTre831PwUSopuGf89CwqqG8SomVfN4zDBJEJf4jXPDuRfRZMFdOQlp+88lFGzDegjIqAGA2NuSrbmzZuP7RsyIo7/fL6OlhbkSrKGOnr98YHlez0h+Z3lDHgOZUm1SlbsTmFcMv8Q7bBXgJUgpFrQKZghpBUAasKyooevFV5BIKA9tbTffUjqeSDcgcEZ3Qxtk7krPgC18hF06id+oqeVhG7uUr84rBcqfwtLUxVjgjQmwH1xcWYi9KK3fSbjy0zP/EuRXVohYvmTVmZ6NkH7oBvRllwGZTIcg21yLrk4D/t0EeiJMaERRh7s9r/Am5DAMq0JiZd5l19mlQVsRMdTKOKrKfobGjtToZDLabLbj3IKdVHkSII2f1NXkBg60Hq/HAbNRZlzotWl1ooGCRBBYV0il6kwdGsgM3fuV0e/GVbQ2apqxWl4tcnIuXw/xwrPuSLcXB+n6Yg7LBm3yd4NR/6uTNslIrtrT0FlPnPjiwtR140qBOEp7VTSouHO7EHLM3uAz3iS8BIBnnRR+k1xGRpmpOJUVxcNPurIaX4RwdDPxG9/BrrYaU6VT63lixWMjVU9tuFEWQhS6KghGcneNSU8qvVqjZ/yWwla96NwyrloGigQGs609uTrmZSOmzi4GLjQjsl7Zkl4gdA8k5ltsGMBoaw3/KiB6aJtiKhjRe96Tsn1aJ8pUI3VRb/tN3AsTh7oJIlPdt629To+cfOQ1JeRdLEcf0CLdIFZkyL6cZB1SlGb7Cnajm51KQQmHIr3WKFSFIERtyiSYV5tLIOgDpFP0XeHPeIkz7mhTnbXevVllbaycK9lWNGIe3r8yh/orbBjQ8+rB9iOqc1QkVIyMr6mNVtTDe58kjBVEcEn2S5jU/49xDhUiAoKxZ3I7tjagZPVEYR1/mEnw4dGb0Y6bMB9qbx2n/kTswNxOXsjTcmzzZvB6txxMplgUhsm5v8u7VDwFYt9JzkCg==';const _IH='2a45c113257989e1495f1348b0c6d7e218f0ee515e88e4c90fb68df09c363d63';let _src;

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
