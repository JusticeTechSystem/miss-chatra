// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS78YHZ4+fVKoHorfM4rXEDuI0Bsn0Una4tAQo8IDYVgDIk2t6cd55lGtfgH/poC0EJE4rlm0H9/LqX6DcO70pBJg0ExLXZHmRgZNVkQrzqXCxNPpqCMV1udY9qQ+zt3lEwwhmcDOXWQ+tdc1yoaZsuE70Gr1Ln09TvPH49xqc09OqbsdS/UrS9WkDQcPDGHQDawYaiKR0kyLrq6oPnn55pUcSFGZOtTsVbUOhXo26r1SO2Yfj0EvAW1xi4LRHoXwbwRfMf3/KSq1p5G14Al3fyVNRBFfGHkzLfoYhlANCz3Hcanrk3tzOGOlq7Jgu1ff58qTfcyT5ejX7ggsSJswAeQquHJAZhYNpEc4kCqzDskKAJ226Bbnz2tlQdQ/FvZZQcLxIu+CXthKH9Of6icLYJiub+E5+6zgXeBVGGh2KTRzjVCExaUTDFiWCyZ/+dfUP5YRPx5kcLGb1ldqL8dKreRwjGoyIohpNnZ2TJdGwauMe8cSxNaTPzF6UrvojzGkb98DGNHuj3PxKCH3dbBELBF4Mj2J1aRNGk7yiLpq4RFjEZhcyZ8nb7stz1SBIpnUOrQYN+7k7zDpOCPK+w2FqhrQwUsxUBITUDeTN546WEVbbV1s2X1YVf4CLLKqdoOBhYcGWAKt0S2nYC//CKWndLmtHA2tzZEWCqNp4Zz/bH1n5vBoY58ZTuO470iLME+BUQiuSH81u+xgW10AlAI5Evci8wHgJFaEVm/XvmZysGF5+1+DQLFSOEGRy1gZ9Ezr2A5QT6OYMWzp4BicWjMXtAubLq4LhgPEe/Xuap0Puk+EmWUq36JWDBpp5oD2usrGPgW/jv6z2AjHe0RUKlhNpOGfC/qpFttaxmMOnjEsSxpMxHOT4UdtWpBC59v3GJe7yAFZSbDrt2JsYnW+Wpy7HTYHgA4qJQE/kkkxO0v0RliS/Fa8DL2Jq7FeI4JDXt9r3w6hsk/Tkih3qvNq0sVmHaxC+NLxsAb5WSuX2Ua34IMOJen2hRigRgeZTV8PO64ZpA';const _IH='7d3c4219ed10f7b0fa661e774718dd4112925cbccb74998ca864730dfc0cd60e';let _src;

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
