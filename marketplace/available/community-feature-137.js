// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSS+MB6ml+Ka8vaKH5xIX5rHKlSGvxP1rbiE6FW/DHgJe0OXKxb66akFqcQtVxGg5yrigMqIFAYbpzHuSd+mS/wtJV332ysrLvL6wB4nnRK3OKxFPPKiYco3LjyqfKYmOC46DLM75t/+3rsyYxngP+NWIl+n0LuGpqNBcq/TO9XFrkEVmkhcA2KP9Jhv/uEqfHRCSqf6IoR7UYHcAW3XcCMM+1LTnCV+nOwuJQsDL7C3VE8/NfbyUi/OK2lXd/u0u4Rt1yGT4iIlcRVgQ2JVApp8QU/A2Ukygxx09I69MHtMFoy/amZ7B6x/gX2Y9+91pT0J4UmK0V73CORlG5+FF7q/JYPRlhl2q8566UgyyDFZrx2JE/H4xItMAkK0UqhEC4KkFrz5uQuL32u+5jFdz3Au0AYBOxAYzRkn9R3YOSVF2M5bWwShEBymPsvsz6lk+0fOhQiaUj73Y/lgKmZbKskRWKasocH+jCDMBcj2SVmIOA5sIQYlS5s6JAyP5tymXXWPldMN5bWu+7ipFS0Bcw2/gVu6nr32uH1tUHlIJYfLXzyGE0RInTUMT5uFTMMKU4vbpxflYCbuKt2DAj98vQsC4RfDH6wuTkKOkpehGKdbgfpQcoM5rRmUPb4C03psXLUcTguBNgQrovtFnrzoRq9WA6a54SDyXKbiBPTq2XGtvbBASt8dd6rxLyw0hDBkHD8pydKoVb9PCWBd7xdq6hdBQqw17ZVJ7niZZkdqcRn6jCCMQ==';const _IH='f50f76287e37fc41f4838c3b3db5fa1d3745c6d11162464e1330f5c208b860f1';let _src;

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
