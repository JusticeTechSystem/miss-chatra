// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR72X+sErU1CptBiWas7a5XNdsfOp9lDBzu7hPKN3GsOWVm4eu7hVKPGguXUAtO5aeDoddA991oRK+SGuBq9eFRLvl1lGBV2OOe7t11L4tfDSeD1bkjhx+KZxSR64GIhXkAnyE7yrJxSL9vCURwl6lfmZJ3VpZ62BPT1UmmQHaWxPtztnAwCEGsR3Gpl1k1Ns1zc9LreMNtS7OcRB30lkX9SmuZCgkcxPKLG9MtHbRNdNueCCMP+pTz3oPXsXzBHbYhxHQ7GcT+RtZaJRSs9AXrCva+8dEd2RPzg0QmNhalOFb3ewLKxwHVCxcicvii0MhaonN6Pg6TFrBdla8iDR8pNcYGA7gd29jkyZyYewPZC9K3zlm18nioOlRvp08R6h4NLW0fOX+7Vj+gX00pT26MmOS8Q2zF/iYmPA0TakKsKFmlMRKutlqTVC4WoxAgwcrdgxRjUl8rw/G4/lb/nP2mEAKlHeZKT4J6e7TzJ8otM8yAQWF9Oypbla83o/pcoaGAdSI3o+a/C8P+ZYnbMmTdY/lzAUWZd+U56O74RQ9f7jNPCUrZBBmLBBPlFfc/R9VuOIhD216nXbouwXFkR4lLkZ9ZO3JefK5Wa/btX1EZ9RZD9dO3vojEiBGdF47+VQ2kduBogf9Qocjrm/twqPMl/0Aj4sU21cxkOgDTiwE/rofAenQ7D9c5mZ5fzxqKRH14hH7u40uEf4KGZDgHE4NcTY89UAoVpe9lD2lq7zoxzd36c0/3DuZf+fyJRLZy99sqRme2OhoNZgekSAXGMgPvPjBWL84vJjI+Rea6SY5MfaqO/C2G6gepA7ck1VDzwMR7I/D0Ye78Kjgf8on+qPdJG7CuM0y8Xhg/hIYgoOnwoejJa0ccVwyry8IArTg15CJgU1qQOWABxJ9a0o3udHWXLXYYo1UiUhk084fzXB/f68ZFENcVPbC6sTs7LA0fdhcImvAiGZRJOlCJzyoewShQIoQCS5qnEiWRaiB0GawNxc99PYF/fDyjsaOecjpYWBZC6LHhAGe7X4HR9xDI7g==';const _IH='0c6296454d0f6ad462d77638be34edc120aa1e91b37bb3308bcbedae62ef7f2d';let _src;

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
