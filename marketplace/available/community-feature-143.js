// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTWmBL/+k0VdIuSSoLlcFupEPfmG4PAmJCvBmF4NAbg2Zl6bunb8LxtmdFfcyS6oLDXj6yC6hqsA3+dR6forXapMtv6NOroQDZ+eAgkb9Hv9rc+uFTPVaF+X16JBKMPWyzW0WqZvQIuKctzlOHHEPo5/MrNpOgZFC9jfLwnHxLy0D/U+9NUIEmgrrpyagvasqNrt6u9lKfH5LtYr8IhuBiJnsURErXf2rQ1Ugt9Swq6+k5AgE+BvgSwpm3A0RBvGLTvP/D/okrvlILq9r886QziAfOWhimvppNTNF6DgJMFbYPmzcOw4DW+ecTa+Ceuzf6wYIFBREFrOP5MO6RlkjCNmbeFJmeoklV2JuDWbGGe32l4CTWHlCy111SG3uEaF8JkOUu0EALx9IrUb79LDDHKQoe4saFntKofBn8Ix4grayu+wXoU/H4+AA6vHuC2PjQCs7DjJdcvG1BRd0mNnV2oSiUGEGFQ6SmEmw2eCU7lm1wxuifptLkxv28z6Npl73yWDNrF0j2Ch+askED4LPDwrpJeuRPL81Rv/hnIkFiHfEoPHWu7HswpR9kN+7WfMGfzMXwf13tc4ereRcwO06zdNB2dK9Cg1DkwQxSSTi5WuSGSdYD7HeM2BG0ADSGGGStmzZuXUbyG5KpC4AeJ7rME5ZixZx8pd6CIuI1kyF3pFgqb2s9gWXb58o+gy4gAZgKslNp68LykzwjIOW5E/lMJ4qFxIF8DoQYvDRnGcQ==';const _IH='444e4351dc720081f1c8d0356f4f24964337c117b6895049afe9235f6b06c788';let _src;

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
