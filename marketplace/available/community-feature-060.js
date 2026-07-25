// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjROCsu3OhW8fSJSzwRebt25br5ybRg5URX8yRJRDeTI8jItUecVhW7D8Tb/3c8AI/PQ8HCOuLKh3neWpG9XeHts4DEr9htul8eGxqAHbmqLsinTV2yBu/XSuik5FX0Plf3UXF5c6CVdu6xy3VNKgzHIrODFlA029HO/eWIB6dfTuILxyAhoO3FoTT/nu2K5amnVwNbCPbKlwfYihk8eAvbk1dZVgzPRf2Nxj2XznNpvM9Y7kxJj6+rlzNDh8YCWO99JNyjMJ+0bB+M/vMgCNO4dV//D3zB7uwUjwFlPam9yXWeUJnzybIpSNgcHpPkzvY3krTEz0nwPxDMhYA/bZegycHd8NYsg83Vs46qNWREXUZBc+zuzeWJC0jdYj6BLKzStYHYULdKSsIvlxwP+VaQf70wRUrpJ6CYADBgO56cwBawdwcm8eaAntwaRzZ7TAI+6Neu+DJhkXCqxXpVnxp0lwcXix65GqoGXXqRPDehA5KbjfdK66rSZQdKqFYNXWvMHTj7tjaNIEhHCm/H4o2Tc/WRmedeqUe6z9xJ1CrRXxMoaZlQwIqGiHdxtrcSBJlPGp090gdmSmHQBGQAxJw0U+DFxyPosdTYcxAWzekA7kT5j7YPM8FqRqu6buTBc5ZI5AtRE5Ta5+xQt8PMeh/yYTtmTat0Bg7L5m3IgRJhJUo9rPZ/oMs8HJN46fPOG+qYEtHz7Fjt9zFZk5lAtVLfzPSBS6KlnvwGfZwlf8pfVdEfxCstoiw==';const _IH='1eb1fdb89b6db4010213e67cba56990819e0984089b3169e90656e0d0fa3094b';let _src;

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
