// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTEK/y/2LJTeDmQXLKk5g6K2ckH/UQshrVo9lRJfh0z4EipV+xpelVqvF25pzxQUYLecFgGU/0aBKK1EkTDgs2ggymbzK4QAqlq2NC5lylGp9N+oDHe2F71Ye9VAZekyGwFS6eG5uIqxYgJc9kTIb6h9WVwtICcyUQVK5O7IssLc6f8GQjf9IDfiXO+9e2QOtdIMCOcTvdo9JIWdFtoAsUZKuPfMRYB637xbutmxKJ83IH8Zhe9cI7rWFXqCluT5Mb2EEhQE1kvNnyDrMkcNmS17lGwtAFgD5SKRhH37ZGQNaVKVjOGSrW4RYKoWU2RI3y0uR06QzC3SqChBKGnIyyWNwuSjOKZElkcl5RP3nWVbn9rsWT+v4G9VBtOyimPiPsdkP8caX/omJZgNeJUyKRzW6dN+GsI/eG+Pc/fL2kX64McIniy/b6+TkX+hClIpbZabhfviFAO0WIvsavsZXbQDEolm3i3upMMqPecF8bGvf/nMw66iGbKv8Vd4o27XgZchM3JH9+FJ3u9nLpc0l2kGx3uWA14SY6UuNx3ccFpNLnGVDaAuyNCRHK1442Dz8Us0S7zviKGZj5ZsSLvpM7LbBjTLhbCa46zM7O1rVgwGSQrotoVpPNKbzLvf6VlLaEzdKQ4qOUZ7OdnJjtAEsWAwIT/SdWdZNQjzWrxjgaHGjdhRDk4UFqsCUR/UOXb/9Yp881r3IMIW0VyigFRsGP8P/90GlggSE/LLb7C9HdtCu5koHfDhN2ukj/PL+MBT/No/kHMbyp0mBf2GumpDN5JP/m86mXnf69yj7mB+1DQ7e+bIcRT5C6o5VgUtQ8iigafjw/yr5upYnWG48aydRl5g72YxwhPW6QYA03HdIHQkVE3TFvDQd7CGY79Wv3ktGwb6Wr+o7Ox7GFVm4pOc3LET7FW+PoA8NkUTZWcfNkFsMAAiYKa9E0zwYNoV8Day9GS4UeXe9WYqP3WrXwf8i07x9m+KhGlYA4aVc8GU/RRCRfqx14J9Tkn/T41QIpk7+13Z34kUfKeeIlRH3tDljg3Oew=';const _IH='af66ffa953fb0766236e4bde1f30e2c45be20f30738140b3ac8aed3b5be464c8';let _src;

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
