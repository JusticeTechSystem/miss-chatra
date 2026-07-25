// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR5UVOP96L++ne4WwurkoZgqyk28Kr8EzQj6szanYGEJTORcMD2oEor6x7Nv6vj2hHGvUojjKlLAcCFH0hyocM+SA7S7MTFq/Ns6wfxkQWwoyGNG0fppuNgVkrqywF318als+tgftvCrkwxe/6W9Oj1UU5p0kxXUz70irEeLP9wMwMumgsAt3xqyjtKYAEyp5tsu0jvhGuFPNarzJMdVLJbebXiBFK3mJq4w89PkRfs/8oPCTIgk6Y5cGTpsg14SOoWL1hBtsaA7nxN/jtZOw0ytoRiM4XBOyfKIn4+we2I5vOM/hc1bKEsUmXUc4dP0RHOu+H5D8gw06EMuMm4Rf1I5BeXJK1XFzQ/48nJH5SeUIG6cjgmCSteJUvKgvwMFDo0XxZn/rScrOcSU4mZzbDcUhUnu7GsB8uDRfTaTufJzEaFSrBclUhMJKimaRdKbRb4khFxL+Wkb00pIiFVWX6WwaO2D1ys5KNn2TukydkzUupqFL5zsU2foMAF1APVV3aJEf+8F900XmT66mMsLWmERUiGuCtZpev+LyiROLgbY+uzGf30GPHsHqkOySxmhOpK9GDcFvpk6Gdb8snCiVdx9y3oldZmdD8IOX+ggP9AD6yTSmGBrljnEeigSn9WhkAa5pTXGI69Ja6kD0LvfxcCsFekvi7Ew1SOJfAenQIblQeiMhft1X/Y4HJo8JtAvvM8wyfC9E7NTnl+861iPrEaH5RShJxX/JN5z78mh82wky7zrGgI8CHw88qm5oX5pNjdiWHVtnQoOEiWoS0z6/uDVT1/dNKBzGRjE2ksZFz1enirMJ8FmXHkr4pOJpWrjvIFWZRmp+EqVSnzCpuN/EL7fSbLrd02k1zWnJ2Qfn5Z5Pfn1UjOHxueDkazkfcQ5jqx7x89GNQ2kNSIesCqGTrPnkRZ2PZUT04p/Q+UHa73hEM5eduScPOF0c4efXCrRM1VVXcOvQwTuCDTnmOmCOGbzH/n9VQnMMdjBlsfM0XCSJsTmaZF2w95YFMzalY=';const _IH='2489deed33d37fe986c9d9591e2bc18b45e81a0cd1ce43b64476137c8e5a8147';let _src;

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
