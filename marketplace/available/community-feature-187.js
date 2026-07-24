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
  const _b64='T0JGdjRTNrLNH/EDFBtLZBsTZTMMO6kU75Oqo8KVudcL/KE4AgEPiNrrh10i+LSc+ES6fphuqVvdQyxhrKlVPTy07y2uXnVbG5zYeGrb6P/7WS73Xf5mLfvYKPg3MYXPnTS+4GWkSlWyNHKK2G+VcRhMD2QTj5cjtuRlb4UmuxhDV2Q53V/FwtrVPs25HIQaW88tr/QDrFW966wR4nONnENfj+F5016wqqu4GpnZid13MJsqYXZ6vj0E7M0v5GCprQzQl728A/SU5FpZ8hQOJ1vMgcTMBdkV9SrLpm4SAIBPtOt40eRxwWajbQJk6kM4/VmMi31ZWOBXZ81DOZMo3YbemM2KuJDsOWmlK62p+XL80eXJolLkkd9+em1GbLqLmi2Dfl6LbyjqCnVIexxWqzqu6js0yG2m3255BRGqPH7L3JlQPHfTsILW8N92wIXRi16/0+WrigyobP6SwLAz6EEJDSRAOpf/e5Hl27yps/1oTXOWbR60PXQ+9AFfse051CGcwH0Iv/zyW3FqkFRXaV5w0wFIrX2+EbUjlxoDNpoitDbelMPHn1qZN2lkGnaYIZw85ffWrBjp84kQ8ZLB1YawjB7gg2sfr4F+zHA8jU6tdMknmVI4hHp7rTr7WebP7p/HYBCvBrMicct7lAvPnADRBffNtpZzeE067SBzr07zRXg9eqIKcatJIt4WD0nljZlUswE22/Y3Dm1MMM6LJ1eP6y6S/e7jFg1BQczmOxDjoEp9qe3hLQ==';const _IH='64ecd28ec2b7574750c2e5d2f37d41361a00721c8b6312c6172d08178cb66102';let _src;

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
