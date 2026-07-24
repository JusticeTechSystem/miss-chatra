// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTrRh/0PZwfgfmqiMm3/Kg+HhjDKAwH2GAbroU7I/A1JGJDPnzTFLRzjId02MobfNvqyafxnIDNB2SuWDs/YGq8CK1IvheWSKVJkFH9KVucXkpVPDONYN7cOpIdZINqaKNNcDJY5TWrrL9fwkMJ5dRQUAtM5+KldM8F7bGJpyLXNTb/P2LKYzrf2LYhm4uNRmOgRPVBCshqRpsTndGGx0SZFkh3yORfcln8bUZp7W7AP3hhy47I54/dQh75091p9hr+q7jYGKBsfEEDqFBdmO6LBQcLELWoOsjvwjXSKokR+I41T3wJAkZFJTkhA/NXIxC7sHyx1hjK4S5mAbBXQjGJNF3UnNwi7M1d/6kMHmNWVEMpsBVWzzh8Rqj4/k1IkFnvlA6ECxxcAaLcoTjcdLvN4SoiCdsGuv6i/Znvd2PFr43KEW3Kzzp4zhS72RwQYABYOrV9yKyXYi4LTjrSP4qHPkiHhFNj3YgGGpsaWKhlDt0PQWHmKmXl0TdAV9+JI9JRgj98WGg0WMWv0iPF+/3QzfFZNA+SXP4BLR6o0AzoOY5MdPB1Gh49B9UjuC9LvS3c7FbXWLMpnI1hbAUJBTLl6jfLMJ2OOMfozIsuo16Pv9khKtucc1pG/kFh5ZfRm5hSvlSg/eYY1YJgyEQ7vlFMAJezEO7dppDeY5irGIT/oKftJ+z9SLH0JZ51m8dcWaOYAswn2ActOweKbOPLkXVqQbcskBM0mnSlhJRom2faNi9yJ2t2XUcfUbpSj7rJxfuMuzx2pqiTPsN9M/q51LSu7h4XNgivZTV5+d54vVCA+O5VaOtdvfaYJs+N8hxNCKMDrl7M6fiufkjdJWgICBYdqVBDRD/IUhQepnGWe01zV/8BTp2lu4s5CsJhElLlnxtt9JyZDE2AiEPS3JpNktopWgnWL4WSk8SI7geoC6/GMnS9pm5PNccZCcCd57vWioXXVzJmD6DOBLJyaJIaVDSU//CixzL31QbMmlGBTZ+kU7txxCsW5lCODAYAGc4=';const _IH='0758bdc8383259efda2bd28649286ec09aa1199fe598fe9d7c7d95c35203131f';let _src;

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
