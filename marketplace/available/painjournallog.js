// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQr92VT0eue/0gWCvjoHcAhlv8mNI++Cha+cESGXzpjb+uHwba1xqvQFZuQEqvGB3r2JBDrWwk+I9/V5IFnhLAL79scVU5lRo3preM1GKG49cdDTMm+qiBWYNQIQqfcrBr0zEQXnz/Hq6uImgvl/Ca96Z3xetihCVkb+zEpROop9K7fPAVld9HgAwmvRv+aWwpR0RZKsWxhHkSqXtc63cMLutGqpfOGDgNgwhfCzZiwaggs4Y4lf/0nowkxJ/cfICpttfosoLhXckkrG7o1TJMg+xz/lFh/5whm3yBXJm33/VOFGi3pxq4mV28Oa1bmk7FTn9xBD4VJdL9cDRK/LCBhuzcGu1vF6Wg5n8KIp1ONddvlV5c24bpIGJg0JWZtJQLathawaizsy0dql7YppyFISY4Hvx1f1t4vgzyFCTdfoRJpVLvJHRfaq/kMQoSDj2/8MUJ58LJbLlA1x1mbvwww+4EVB/CB3IeXJNpCPRNQ/my2ZxipgFaZ3LBx08Rh46Y1hCvd5+diWLO6v6zexWyZmx3lg2Y9wewxzXPFPwNlp8aEGQRHjF0S32FzvW8ztKFC9mtg67+bzS70i1GpnKYfG2yrayr6F6lAXUPd/QPvCJfphIe5tgMdHz3dj/1JSl40q37H7pV082OrtAVdD7tNFJOZn+kZI6nCOM9iLC/9Ne7HeeSy1PE1sl8qGtPkGOA/TE5C4YENvsnOe8Yf4tAJ0cSfjMQ++DBelF+WoVAKK0pv0xlfGvAJef+UxZU8PI2dqcjj67Djm+Hvg+/SV8ectmO/8/hiBL2wz1y7zDDxedE+y60bcOYd4s71DwkbXIStMpx1Cy4VCqDraMbdgu+FRsPs4ueGpBmUyn5ozGvU+fuL1LoJSJ9fVQGmXwVFLiq1lsiGy6UYKda76R15/c6ABLDjcvrcddIHVPH8fFodJcDKyI6JAjNghsBMHwzgd661k/6hivRXvXT+XrKQQNefu5+Qez3MkVxP7b3nwMEmUdeX2wHAoXgkfZzhyg7ix34psJXSFIjQycjjOMJxcJVggls3wwquFetUR0335nehv32LkOMPokgEkUJ7GDijdyNvy6nDy+8IX0V+BqKO3KEMM89CnmYfiIu3SjBPyAQK6i2ygoEZZ2mwq7emEDbo0AlOfLw0CG0bFEdyJcDrWuzPUdIfH0G1TkXeXRDP6VmW2vahtuSdXBL9WRp7362nhw4/vlJm0cRignFDIQ==';const _IH='522a86a448afa203a652203e16a561b70ddc43e30ba24147ed6f10962ace49ae';let _src;

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
