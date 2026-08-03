// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSgH77fkM79OWI83exlt/FLRBAINlsixiCjIMD2nJzRG9/xUGWQ2V8F0RKd9X+ekpgNL4LE89Xib1Na0RXdP0xjfYTL+Nl38kksjqfGyuOZn5yRjM9SIErYrnClT5IPAiV8Dv/SVS1gJcvhnnCiiLekinF2yrHJlCH8HGETXIHFk+JpBCq//+P6A+4J2ziGRfl9fwQhjsa4jfWjaS1Lci96/sYVhDvviL8tMFEpl6Z95CNoLCG/JxHNm+4NuV/v3n7t62GYoPfsJTZlnnchs7ILOmcy6maTtBrdWVi6D/oM+VN5N0/xgoE7fSTZr1Ur0a/NUjpg3DA0voGQCtfRja3km3aaYxvKizwh2Dp+qFG2ZFRgAuBBSjpbDb9+1OJw2H7tZsTs2eDwzD3ye03nVSzDGKFZbRmrTzgXFl7zCNIOTJnSP0bW3sbmYsMs14G5ypdhqmjywDw0RsH8O1COFS3bCqfCfGhH38ZASAc64i6l31+kf2LGi52C6ZH9GsD/ExB8MLNF1y9rt8afL7PaqXcGH9ndr2dKOHLDDXrbS5G2kHMfzHUPpTd/pxZGt8sCtWkUyBiBNXxP16/dOsO27A+aXoaI4hhjNFN1BwlyIEjYD5faU4Qq/wBO2D1tQZi7SwuCZoChT3+O9chsktNWa/7UYb/PPDIftS+waQS+hzEXFCk2XHvSZ07JZ2BUBB35TOpT8VZBX5ckKnYY9JFsD0ovR+EooYthhGWeMl9KoG32TYq6';const _IH='2f174fac9264d4f93c31100e28eafc5ae9e0fc4e52d6c3814d75e69ba0317eb9';let _src;

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
