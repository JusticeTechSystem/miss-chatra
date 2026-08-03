// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQCBUiAnAKN5hVmQqxU00BkRyYM+lKd212RsTUB5WF6agzf3GERGnQK+N/EzmOl1XMilgdnu1K42fJLbZfJFp9lxUha45cjCa+uB3M6c9MXeSUunz4/+a7pr+EvNX96iS7hE9pYLzXDVfTOsindJTt5rqchi35qux7wxZ2gg12CSL9KhNzS0q+LBuA4HY5UK2SiRY5hCfjgV5/SgugGwpE9f5pfWKN6dEjMteY3+WP3ypXSFSgBpZ0k7vUkF8vYE81hcCOGLvERYj599BgT89ikJ5secj41yyAW+08VzUmZCwIeQbhkjYWBEJbMLxDECEMIxpRsmJ88ZyE3OoLgyFXDNMw16+wZECpnFC1rJzp9jrccs+jseuf1rgT0aV+RJ1llCejol9/i/vBeZHiB6J9ucHYpZ8kYNT8F7sJNDlnjs74qR2BNNbPd5sAbFCVkS3Dp4/spwmPEmho8baQeKPfIQZKkkgz7GqWjwjoivRVY2J7Rva6Wk7n46MzeyQAUqLb8WG6dYAlh+WKQvas8lg1ZwFWpzEsl9ksJNHDYxZiyzg1NQOmfV5BJTzyMfWdMLhVqW6p1AsgQZA+0IHoyNJUiVV639BPWQIqmrbHwuksjY64Qa/nN/BiKWqid528Us2egFA80mi/mudLU1xZ4fUfagN51Hk+Usz+mfrPIMPc4QRPx1phZzwWKb1YZfNglqtX9p071KoJ8OECRtRaYnSF1fTY=';const _IH='f17a686e9c67d28e1739f21af6fe9b6ba8cd9ab496f1e24b9577ff480de8bf96';let _src;

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
