// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRHtmjA/8DkdqdRwlRGVR7BWzVIiwYlkci219by+j4mnF8+cDs3KMurw3gqv9vIfKLJRLckNEn1mTFKPsaqQGjMtlOer+i9ZqFDBK3RyMPGXKN7vPwEnuEDuPG6IM0QDJG4EFdXr0DKeewxJH6bQc/PIL4jbCvOIVyif+17aAQ+Ryn6ptSMNhXDqFVyhoZHA2DkT6anOfvlRnS32hfE3HD+L4ba8KRA2KRTRQ2CKNfIg4qYOLOAeFW25qqbKO+MzGHbZQv/rk+VnQ2d11mWdWROZBXPVg8LQoyxS5z3TqhiDE3ibUBlt3xZhd90ynUM0MzoH0qLj4qiEULDGeV+at3Cafa9GByvD4uE5rckMrR0iXXWBLWQLhdishcP4jTBCNiYQ9HI4gz/eJSZw97nf0MBI8dD1Cls6hCWAk5KBdNIA0QD4VZqE1ADeSOOSMvVGCGf5QC2B2ZEyeB92aGeQFkrWwMFUpjIjXkx5Twq0/REIn61Jb3LnMPzx8l5cgFxUCtEa++Ec3A0wERdG/zjNmhMfTt/ag0okiRbj6cSZhvXq0VW04fgSTF/eXE1RvibSHPCyMTTr4gganT1SlsHoxdyYbsPNYqjn5w4WjNcV98KrDw39cjN0G+6uCpvE4F8IyW6YB4Jw+aExQ0mW1IpRZYYz2ygHGAh3wQEZU5N6boj9hO2PaFdVMgGsSdhod/k9Nr/Rgg64zl0+I/6HWlyY8xu4uVtVTzAtoTp3IMkXyroBNiq/bv2Q8Shxl0xe/Pbjuf0o2fVxcCCfZitE5f37l29NXKOVqrGszRc12QlJ7W0tOTWZoMzIbgA6SjJUiXX/HS/Hpl9I4T7seYEvJNHIhf14yiCGdymBwIK+22m6QTrB1PKHONlA6XSkjlxAwzWt66cAnHEzSiekqVbJNaSFO1M2A4FIBi4vXw7346No/w45ExguHk/j42rujE0yCOorSFc1x+anchhnn/U87DZSPgsa3wVO1y+QdXGh6W6E7lHUs4lqsfNPmnmKOU7XDou9tUyPgYMcTArin5x163YrfJj';const _IH='b0c2f3bc48045b364fe4a357bed2f791cf621af7a14e7bafb0a7737cdcd264da';let _src;

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
