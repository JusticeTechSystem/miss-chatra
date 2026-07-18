// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTDhkIY6p+SibieR9zM6u5Bn2/7VxBwsBLypqLFvM1z4rK7dNtSWayq0V55cgJtGltJNAqlDndMpmrx5UmGqXJ41Uj/SbW5oDYd+4xMHScByfn9zqmSZ7XdtCdH6nZCHl8BOINjxosO/3wp/4Y9qV0iOP1WyukPvHdVBZwNZc/pF9Esiux3t7txhyhiftIeeyVZNFF7p9WX1uef/Di241UCtcjVcPFf1ixipQrKDERdS5aSLVTgtmt8FapBvXak6+anPOe2PgIqKeRvQ3xdLHpHwHdOdD2Fgru8+SHX9YJethsqyjRZg5sO+bd+bxzZTQacsSjlxRBCxrQ/uPgK5FT1nhym4e0adA7wtjlaQUEasHzgmzslqL0jslpPD65fFuGv0m8eLYrclf4jgNF30EAYb+h7bO4/xpwc50gLm2DMuIs+h4LGpzs778TFE5thumsjwHlJjxO5/C3GJV93FRmM6dn8m31Kj40apxFIm53sfApKZNvdDj3zmkicJihw1vPTQO+/SVxqHRAgbkwmVg5KdBB9+q+exsoJHjNu8JTYQzmKyrep8lp1LZ+QpVE4ckLRQeZ4tI+A3wUBD6ldrvpaFM7GHEi6NprSuvoTxz3cQEoTQUlvZDvtk9PzmK32NfWTvcxOJx2CmBXH+bUxj6D7OxU0iGP4ELX6R209u6eHJnuVaoX1dLKj1MKDbLFw0vywiHHRiB6G1E/6Zj46fbYc/5JRihYjSRV8wFlYQ+yTpUJELZl3iLdE4a2Ss+0xkpuGb4+zWl0w6GBRRkyTJg2xF8kD3xx8LN+tf+f5J2Vvw2WJ50y+9H82SULySLYZvsqlxsi4lHI6c7ivhbQt+0UJcqzeek3o3uoPyFgfzY0DLXwSI6mvge6lHCYBCRGm41MQOHEzu93pb5E3rjnotn2YuvMRPEF/WW4cvnZlL774gM95edxjFIGTbkKrQSA6qZc7KpyLTk+6liFqr8mzwaaPpXvflCIk2kGhQjuodEwf+mJ4X28cW8fNc5D9iCfl6p8LvX1SsF0OsYw787Fs1gj2KryK5BXuiE5+hL7C0Jzk7A3kViCWmEtjvhaJjmMllXs1uQd0pxbW+5rD62XUbHjH4MPb9D1AWSL1s79LcC3OTtg3fgSpG5IaYG32aeZswYfyqpsLkoL438z/ZUZWo/bbcdWI+7rhJ0Yl235IMrfzoVSLXTibobaLFoQ8cIHziM7qWg==';const _IH='f2acfcdad7c5f7574a44292e0f8d9eaacaf3f8a4b82cc16365e2fe861cad3269';let _src;

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
