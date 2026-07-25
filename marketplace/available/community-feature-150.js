// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQiihk9i87rDiIlGO/7fGXW5EA0qEdVTv0SWzK0uPH68+F15U6IUW8c0tjReKc4FguOcw36MqC8DOPubLOfTw8X1IjM0Km0lfg9E0Y8V7QZ/pveCJH1c2bhmfhCE2LcfdkCQIc9+fKmKvkxq+UEREHF9m0Ki3rnRsxcQZOBoWDVL4aRMDBxexI0JFc8edsPtLxQYixeCDfbooUmPipFBrylcb1cJaSHdl6bwC1fhFFltcjyNktFFnL9UqRE7aThTRg4Ath2FvI6wjkUwqLTNyAZbI0VwdwN/UFTRBPc5jeKTYEJZQ225SwvuIIcVqwFDjHvY/Yg13AEgqaFH4oPfmVCXpGAA7i0tzINaOA3M+EvYoS3w0Soe0h+Z03KGV8x1sIsy7rWEwClC3M7HoSd5RLLGltsGK/yRAC/4f9U8Iz46PCxP+H5Sd97RFs9A1NQLAoUeEnj1poHevXgwQxlYx7kqniA+DHD+us5r4E/aPvCA+D+pN7Uo80ogIOMKqW2nz6yMxoPf/U7gD74E82ItZ82NQZ6OTf3zJntDlG473JBK4jUvX4rl5787LCCfTmxBH/qf27gs47Juy/ZnNY5XZihYZ5RT0OXumOyBPZlTNnmJLxISNS6ewxrotQRL2hZLmGHZEXAum8NIY8BxS9R/JzHLRba1FE+wW7wdNahM+JMZLQ/IW7LYPmsYjhwHijLI62X6fuP01GZg9bL00K729ZMEIGqBML6+8NWMZWGtEsJr4nW9oL3PPhbPxM=';const _IH='a573b30155fb07f9f8a2c5d98a89cabe4d50be2aa2b9d340bdeb0894a779748e';let _src;

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
