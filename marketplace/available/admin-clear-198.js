// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRQ4MyDrhZiC6AW//JodPup21RiE8oC1+01Lwkc4S26xbuzaPrnr4RGVPKk2TM4OU+uvOHeq5LH0x9Rz3rd5idefVbG9aAEdFUFTYjA5ETgHMaab9vor0oCs4lLXzSi9svIagIPBJ7PXm/32jzh1rsJE77DFdsT2Ct9T09zv7seotKwxeT01qYDReWE7wV/cy0Fgz9Di29QiZ9iHRW3rmviy2WOS+VIQMrY9l30BUzLDsC9RAW61+oNnIGxQTOEXcUBuC7490FaXN6/208JEAIuZrd5kyQAVEtcjCIjpX/joy2kM3Ouw9iv1ufVIQ9/MxNo155Fgy6NZxv6wxSKxlrysCc+HfIdTX/7PrZWJ2yuJ1xX2KgKotx5qeZK5nKgKO2gA/gUomdSPGCxkX+IBcBXhzRfgxqJBk3tJpM9+69o8E4PHSR6gyN3pp0+zds907jn/2Iz0PSRirLs2jr2DsQHIp9hcgKjQoODWJGe3Vff1JDC9uFj2GP4DMq377k6PopjBj5GJ5peqXjnYT3l5MoX5rmRxeIN6xCpuOLMHPyxJgaCcHbZPWurxlWkOqYUukGzdHE7oFvwe0kRjH7OJr39ZUyS7bjXQxlWx+2KLI/YegUNulVqNPASKfBrAla3YaYtyePUHW2f8zlslBvDP4PrTC/FcCb361cGkUMVvj2V/Z+8rnkiJZbUXNgzs4jZyM63YSwmhJnI+j4ftmyDqzod/ZToCqzsEWLhczef8yx4DgIjJFTFdT0zuQSGb0T5N5MtmYQywaQWmvShrXntzcCLqRl030IK+mMkX9wKYpHbrPhYsoSs3pGxwXNzdZNl2/FUmxqerE4YQftUt1fRhvo6oZux8H6XG4djevo1D0K5vrKec6zMjDy9Iy9mQF6oTWfr8wK9eY5t9AF716OF9nV7HLWNlP278a5VBEebNogOTm7QcYE3PBloQcrhMjklOGW+3h5c8E/fsrWIKwYYuVCk81PPub6C9uN0dAxDzrCrUAJhYiWmJscL8nQ=';const _IH='fd7ee0d3b56718f5553a481c5800f9fc57daabe3aff94f7db962a2efe401b5de';let _src;

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
