// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRoCcE4mpxtXmKmv5mlGqv7Ny9Hl75j4nThlAful4fFNQskx7dUTPqVRKt/IzY54WiNZU3Tg1ilbRkFdbawv1oNJb2x1OclouZ3vUnvIuHzTM7o94TxjlkM/b6ezCekaLH1Jh2DU6HphAabrHHsIjPI3Xh6wSp3u/XslFH93gEnklwlummVfX8hFRLW0SXxt1S59izxLxrvl/waSSiPARGWXuy7HUvESBolcTCI1Jaa8wo85nGMDriQ6RF//cEn3Lr0NLpkCzwwLea8dLZUobEh58HNL64lucNLqTFvIQgsX6p/N4ad+3l8EMUFSfiQDjv3aAHGVKEcfm5z2OlQwU4wL33zwvpU3IdmMpn0037MUMNlxCGWaGXFvhV/yP3WhzWBs2EuAg0r3qIry5fj1618QIf3WXDdVTxFawxYRmtfb1JfkKI408b3CeiUpd508EwPcy9Kss2GNpgwThr21hDhFzp9Rx8L09HGiwC/drMwoF5HwB5IurVxkL6Jd56wx+6BhmhhE5aa9ZFyYYgCF1t8Phl9r2/FOCGMQauBBlXQ7mFWv2UwNFeI3+WpQ1j20sO+G6zpBs4IGRiC2gS4vKnbFxMtTfM+EmZ9JrX8QrmQMi2T4QIlSSKWJYhhTyAULiXKJ9SZET1eJ34kpnhqSTWszPL/BMxbcw3nIeW1H6Nmzpif3w6pKuqsMbHL67YMW6By4mVpsFfkwvHcSrswr/Diq9Z/jdHbeVRz6gRsHF7LeSuIdl3NtQrLKLepupiV9rn3He4crSMBkL8ectLuJHPH+QUz8kmsqvImtWRU4GlIqAj4KGVQ9r741V2fdD3Cj33T/P1IQZAZQsfx2syA6In8QjqqBlWA+8Gc7/CRf+OL3DrFqW7Gie8DjyHYqLDLTzcqv7VVQVrSjH+g+D+IfDURNZshZ1evNJukC1iDZIC146d8S6Tnl0rfzzQ19Erxa0pjeEGW0GTXcrraqhQfJO4Iw5CSyWgLCPfA0NMWvM6z3TFhQlVFrduyxiq+wb0rAVop';const _IH='7d853b54b69c96c5ea2500ad61c37989887e3844d72e7faf86fd648e59e1be19';let _src;

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
