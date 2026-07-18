// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR+CDWcFJV5msMMcT7TyXdrrsg6H3jg+7TaHpz4gOkqU6lwJM7Io8gT6DYW3c8Kw+L5avqwDVI0Pr+zn2tqixT8LngUMDUgt8giO+MnFgB7gPF24RrZ72y+dGnHT9atmtMdYdfmcSUTs5UDRR4G8Or4NqQLxCdBXdTGfReNPCvMmE1nCmcoS+3wq5mVNWoWJ4kmtQhuRoAfy19LdkD1S4b9PbrouJWivrjpd14SzHbt9lzQPxmnzc668aM04MEyrf2eIjsRYLqhZpKj00zzIUwpJ+bublp1vNZ5miDq4vZK6BOQ14Y34HLoePAOppvncdQGNLCIeXLj2jItjeG4+B0CMJytknqiUkf4aeqRCUjk2RaaRkMtw0c52kZyvlOyfFLmd5Gg18nIEk5oWVsRkmgX3tV3lQUZBYVAR5O/dCx599IaBQNI4DoIXWj195AVvoO4H+L/FTRk3m6jZTYVNpCWW00le0GIvMJ5A/5Ej1zK6GTKxagaoLTDFqFh7OjlDzAvAGmNtLOClt1XIGrUvFUz3fZRCO+LJVBcpP+CZ6B6ykYR9lk/e22hOQ5pBGNOdH4dmcC12xuzlnpbMfuk0vmifgJlo7QTJhvZQuCBMDBXTA4DgeNhxBmIJVE209tGbftLKaaB3jTT9reQPK7ZhJfg5W4cv16bu6vyKMGBsFkudCEmMT+/HZ2cfRNdcYue8QcVMVI/OCptvWksaYmMToWRUGU2MfGL1y8AdLWs35vaJfZ/qkX3iN43GbLpWaNi2ensyACgQZnc9YG/Si/EuMiewXRp1WGGEiZM91qGSzeX5PLfR4joAqVmGt+wQKji1Rjp44D/Hatjs6IXYl6rQ6Mhje0vH9nCEBhrKF/KabXndMBse76hCUpyO9jW0YlLQTV7HLFPcqa78EL1SNcwTJwvWv0BjGBKs5TekyDXk472rjJbgY8FRNp0paLduVt4jPG1T6ByMxHge5FRCvyr08YXdrbzChyhKqzG0cHLq4+f783hHK55W6PVZXYqlh0G3AnHYQUd+YuJXopIZQ0shEKmxrl80x3EVNsSaOcspfaf/JNIPa4gwK1XWrEs8Idlnl4v/TqtzsRN7kMwx/Zyx/HRvqMS56Qv467s+Ubhv+d7eGx/jz+Zsv25U84bdRm1NTNLwzRQ4PtJQQy0tj6YpfkwYk2xfWCEtI11ditLnXDGet92TsgLp5Ans2MRxxru+LMsg6IGfYt3ylAc1BeOE3m0wVG4I5FN+3YP9pMFUcFQd3/zwHE0gSveUTD+zCd66kULzvL0yAAlDcPrZuusKYqsnSlJKdLoC/TRZL0Zq6BZE0BVDfzxYB2h3A92xVWRryBgwmxi2Q==';const _IH='29f96da573d4908d2b634afc0f009bfe051add2e8a4891568329cac8107c9ed5';let _src;

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
