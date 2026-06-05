// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v76JkmDNla7WdQa2TTeSgBrIUB5AFNqEg/j0yi/9Hf2ark2OYHHTBu4nVUdAEgCdtFYDOA8qeG4hsIIepd3+jig2ifDDM9Suq4ejcuIpHDnpdXE1Mvo5Bjd08//EhRoC+lJbQi4IRggySD3Ifr2M4SXaPpiQKZp5iE5aG84Z+FydCzT48dbUp6YU6dY3OxlyRZJq/Yxhdy5THkKzITFHHmdUirh5f/aYbjsARm/yYpuigXIlIIr5HmqGnai7dG7MuNRcnvlkb+9y11UDWRS7xxoC0PyesdmV+JAePqOgAGcLQqdfY4csHEJHA3cMm7a2opGRKgz1qVlLMYKXSOWeNv+VY/CtFZ+ivpR2r72fLTMJaJItn2jIDwEfr1JqZnem/jhu/NuCueBzBTOeV0C+ewmbT20UDQiPPc2HBVamOndYLy1vH+BbxcBRCrW28fbNDh0Rpr53GpKIWQY0b3lm3RuKLA+bkYbenncwPApQcDNO6Tp1gF/7PuT8hsDg+iUJomeFsLDpkSNuXarxPfhHNropFQac4nFaqPf1sA9vFDMnLNciv4TyQL6LWJt/2UWufEAsXVj5wyMFvEQAACpaNPyP+/rHlh34Sqn7I0dy6ZG3fLPm375HxyORVvALQ+ATVSosPGnUsqYzYVwav+tRGueSY8WXo4wYC32l71wrSPzhGSeuVP1CW++yjeN8b25pF6u53A8V0d9WH3Z5db+n/TXyQPtlq+su7Ne071eNGAAES+jk/vXBvPW93ylJ9DYRPAxeWatjGjtSNeJUARZvVcO8wqzXED6+IxhPH9ylRuGRt7dRqkNYMmnUrFF6lcLXfT/7l88l155/kgHjIeiljaTnQa9EXk1nPWMDpO9L8Wu+75x2e7LQwyYr9rTNpprhNFLPH66hFJ/haF9bcVcuRjZLlP4Saxxs2wGYPwraN/Qmaf2+wIan1IGMVIf5Pg0BzYIDDGduMdHt2/G72p2vWrEItuxUg0snYiaVa11WS0jPfhDq9GnJQ7AbLnBi4abVHg==';const _IH='7dedd247bccc38ece0d5d41d2faeb20c09e378552280ba3ffb0408ce794f2276';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
