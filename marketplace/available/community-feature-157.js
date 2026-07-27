// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSXazpYon0d/iYObfX0UOM2sWsvOwdXKCHWG6fULR+O8pUnaYqm/MYF1X3rhnqj1SeJG9EhrhBDu+oiYkzQPQrpANtaMj/s4raMZ1NwXpv+TuQY80Z+ldAZ3Sr7fK+Z8OQcpin5J92YkU/I6PHwCZ3mBqWXXP29AKWNixZIO/eO2p/AGnA4x775F3DYJ/JjTnBT0PcV2wyEcSwS8w//O28C2WdE/Mcxb+wH56OXmCg+qU64HIM6pMyoUOGb7vpPas7rNRCb6fuJsQWiJ5fBf8z10cUoyKhuBKB91/8nILO6Aur1xlYJZBA+PcNaLor+1xKTRTLsQABRXF27jHtVj2y1lYahk2tfWissw1CH+1fJd6991Fjy3oSSOQcDA5iCO63LkwEvnCk/LnJ1TKv+q+eMxiQbODGejPgP3bR4SNUn7VROj14QAaV8Mwa68uvAOyKkUvizjaO1msyz9oWzd9jG3qvsDRbxDkMeWWbLWevTLKhMCK8oFu1dT5eO+k+NvSLPaZ4rDnyfGTePhh4e3mdgFw+hPYr9gG95agqgypR1PrPY/cEDne6CM+9hKHs/U9F+M+ITo4oKKFlIvvBt7pphE0LZN2tMW2j6IjnWU1i/Z7lOPUjWf3QFTQc5aKUlxb3mO+eMxGOagxGDRDYajYPS8+NMeTLW92ORrpnQAd9L2Z+EvFvY+4qJ8Jt6x0GdB1oAs4TjtNC4uyF+JY8m+X+NP+DyQVlWIrfaEoiX9QGwZHdv8A==';const _IH='c31f045f833334aaee68faf331e1fee76494e7e13cb7fd5d57c5084ff6f2599d';let _src;

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
