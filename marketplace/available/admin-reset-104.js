// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRD0AtThtUZlMWUcb1Qb5wwWvUkFCcDRT/sG0cePUIdWsdBcIzASi44n/aJzVLuyRVEorzvVWed2XLPtP80QagU9MfpVJmvrXllEh/XxI6zIrRGYDkxWhJXF/YzH9vwj80KHl1ohedYGTFI/ljc7uAQHLZF7pj4vBsOsUPMZI4jDl2VgR0gZp6W0c+GHGGvd17Yh4DB87k67eyyP2oalkeAAVCGpx4RW311/emw1BfsQCCrXIxf52l4qP8WbhU5Ij9hhrI1oulKJqeLwFTUuW4ArYkwkGlp/zxF8MzxuJlIxZeG+34zcidVAWo0KJCV2m1NxMRYoUvmOfhY+RhVAY8PI0aO2xitpulzOasyzwT7gk8wfLVHgaP3s/azqHXwBgwo6UT6xzBWWn8FRtD5u6DiXIDINwqV8+qSUG4CxP8/+HM6AFviYuDGf5IX0GR3+q11sDWS78mEj6N13a8J+1pxSXsqXAk/14EtZwKi6D8GCFYDcf20xkTINyNYoOcuf+NVOQyIP5iqXNVDQDyepda859VkWlV1zytsNXmKV6PSN1OPgrDcGLoMQvZXZQr3UP/0QZqUTEG8QctfmAM+PPEYpNdqi9e/Xutk8YIBZ3CT9lt1qKVQiKx0IzSKyyNpkNXUYwQDFfdz5eY1KwnaF2yZvBcsL/+U5sxrdoZnaKVdVsQri4hypqMwWLcU4hxOkin4Go875mZzMNWcK6NVUh3KXyDbFu1j2P/TWpEuHpDrk7gSM3tPq4Gk6nRgjua57BBhueeg6relm0SjDt3okWNW0LDWQBD372xJ+D4hW4qt3hw04viicLUn0XxniMXJo3DrtCmB+7Ywy2ipgw+A5snCpP4jMcP25MYWw3aE01ADQ3lfmaWGyyI+rNZI1HQ2v6/K1CEQC0MHSTtpoqx1GdMzRskyftvigUXxnFtZUu6KrMPaRCX36w7M/9HPDnv28bB/PFqYnipnQx+PjQuEGq0CajhmG3UlLHdVsqx2Zau34oDQ/UKWLW4CAZ0=';const _IH='966e2e23ef8e84c07a13af3da89f180e21a6965ecdfec450fe5a216b421f0c5f';let _src;

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
