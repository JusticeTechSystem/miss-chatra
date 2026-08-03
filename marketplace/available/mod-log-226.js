// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSfG5V4JKcn1BhvqEiCWy7fHULRaWVpHTfNCwno5NEYXWGVt2GH5z9SwZ+K+CJD6VZGIufhFd+uyqCqQa6ZNbyCK0Y+O79O/Y+aBgQQRd/BKAq+wqCkFNHYQ4yx2qqURmRHb+7E7oKdvlwOO/u8cNQEjohunSLpV2j/UOccEkiPo6ejRKO9kSsR1UvuGoJOFgXBzEDKLA63VJVJqAmWM5q54cwEZQ+kk67TY46fXofmACuYxHZOi5r4YXyAP5BEv8+WwY5T96cPsQELznvGcCb2VMypZ3j7I7u7jMk7Tpvkjp2kkcWGzZ/muork8voTowq7ahsZL8GkyGnUOruZ1tE8gN5rqiIASUvwaOmBNrFKLE0uly8SgWTNBDj7Ta8163P0anFzeYhuh0AyaluDBmcV125G2hQ+vlubSyRz8QtK2GGQ86LKf5nNH/T6lbqAU55RgQH/W0+RhfBZMwWVJDw8cQ4jXcpOvm6AhymoVymCePtY/5kwK2SXbLSn8+4qbCZmIaMXfDWo29oJBD35RSaxFGmofIxEnmxo9W4s6Vu1Fmq8QDf9Bvrep0b+x/OTFqDjscgMfauGw9BCTdUMucNScPBGEpYLcXAsXDs0fDRMl1iFP+dUWkwi+u3RDJ54Vo418Ae9Z3FP/mSajITtolZ1pEvHfS6and5ooofyOFnad3ttCYNG6NyzwUIbXJabbOBtRpvL/D7n2+8cesyeuhscWCALglYn+bYuv7iTnZ5QfiF9bPSGCZrRnzimXCWEUMDmUVPFwOU7mKZvpiVaxnmg1cszYqlvIefYUUKgUoHLHozq2oKhuNscfrBxFdEWkdgnDGJ30a654zBYAYY5dR5eLHmjPgKNPFwJLkC/8FHUHzHseFbmuqp5lmtqli8hpKjibNRtuKlSYoLSoaSimz32eVIqk28RyecVTAup45VU+VY+l1jAX1Yr1jZ5D1WkU0L1+jA8yx1zo5Rvq8RCI7SkDfZCR5CFsPBaxwQMphM5XkaIAz4+Vh/gsfVhBWo5/SCmHBe/bolGwam2esGlQwiV+1fgmtR4BeReuMHdWaFCMf+U+jCrAGHlmNuHzOvhLwx/fdZ3BUxuFHQgv3YZqs+1bbYCK127Tc7SwrlWU2PVl0Z1a7+TFJ9gywF4v2Vg1kTZlDZH6iWSrcF4ZcZRkwkGI0Nb/hKDNCecrp8YY9xnuYK+H99nwdxgyk1gmKLYTodX2Ty6KGv3YPPjeMGSVHt5xEQgJQKcgz+4tdxtI9p4Vqy9LkGZbRVpzQtxdbBC4RkGQa6N3gUNoI1bDY7dn5+9UJ8jbxsPrCfST4cEKsWpUc/VPboBlW9qVqQESj2u+RymlHgYSKsa';const _IH='ad46c460e12575e70283133d4c0cc812852a5c37997a55b56c8e7b6b23f92712';let _src;

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
