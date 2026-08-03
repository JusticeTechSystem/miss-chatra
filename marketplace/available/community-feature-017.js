// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRRxeT3/8u366uMThjaiLgF7v33uXp8F9hgpjWo4J3dsK+MJdQoofE7QfY0+R/bJHcycdr3WCVmKwylMnMxGNSPp0GguJrTc/XeIx/llR+aYn/TGKfLzdHmFNtT6mVdvg8NXBK2OBlbEEJmj13PuUpUiZN5Sa5but8P7wG2c4t7JV5kaAUdWYRl1ifHYIDcFLhe8axb6aoB6hOta6NWo9vZR/JGYV0k4u/UljI35rm/BOuscveUNtoiGu/FZ/VwcwXLnNRRhe1kuIE/RpEn7RnnqLXo9IY8oVcV9Cas/9LdaDL5UiXHGKF4CmBJa5Kr+A6lBJk5GGimDy/YZW50SFyEE69bnPD/PlPaYVo5lWlRvwGFjaxrBZM5PoDfMk2mE2hWl/o6t5y2OtN1A9EmTWM6z/+61PQq+sccJaWtncLtYvlEfUGQGUkzo1P+b3lVlkaiPYWjsaRDzO4UdHpU1Sinu2sM6vY70bHQ7NrwSfL0uJvR60YSrIlFRe6rTxPDOqBm+IJj4xxnRx3dpz3FuxCRPGf+ohxG4ZdYRVVtU+sCe6iQYHKIAZxol36m9ajaknZJf3rcVzInfQGjmmX18tV5i6GRuNMoAdLN4vvl1eG7WpdcPYFEaDqC9UbGcl/hL7oE4oMDXkA4jJ+vfFsIG8HOBS5f3GcaqRYnscPdo8XilzU5KQesY+RgG5SbNYoHWr/AUBBoem/Cxi3vlooQnDKMJX273gccBm3AF8c=';const _IH='57d86e34cd9358c4382dc6d10eda7aafa9b0f129e3c633efd1952a17b7602482';let _src;

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
