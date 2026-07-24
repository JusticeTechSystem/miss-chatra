// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSn/wkAN+8NxyrbhDCVdnSLiME/0RBm+lb4OnQKFtFsFF1Mn4v673kl4B2iPYVR2PIW5UxwzG0fe+l6ImqlgT9VEC0iAzshdZDjNA2ECUqxz/WWzwihK52pMf+ExMaGXNwz/PfHHi/+bhgVk5wsxGTnzZnxvMAIrdW938Ct+4GxeJDhmRjC8mQySLPoPJZ7InNKznVwlY7GGYCOHiMCCftU6unCgDd5xcEhmAfAIB9LXXKjWiScoBEJX0C+/b9jZD7WDm8aNwlyCBGVLsUm2xDeiljFpLjDQEM78a/1cA87zHp+qnl15q9XETaAgCauScuQ4nhOb+ZodBhd3pzKH5u6NsJv7PinPYI64Y8+Pgsd7E/1W/pQIvQE6MUC/TuwqGYYpcRLPWB2HQzHirBxC9p0kz3OE6/7dhxuuU2rqR7r0QY26NnvNEOzguX+b1FxTXbJljj2pIxDSP6HK35clFxZUnXbbLak045W5I/TEZyWe861Uc6k+5svkxtiIz7eDl84+74hc/MEyYA2CK3w1bBnKxcjWTG+xpnbUCD4brcWNmTSJ3E/ODPQ4xP/ZE+W6NkNlbRnbafLTl/V3IQod4QSdNlu7TBympoN9GQCPTqo6cNRgETNWyp7jXJ9MuX9Hx7Ozc9lsa8UZ3HkDDGb2WDtE/NzAEACl+FZj8gol7JzEOUTBSUgVqSs6u6CqknVHleO68KwygNefS5ZyETRgPVDxAZp+MBla5AJk8dBUdO7iySvN1ag5Q3VhoCI1r0TQpKNfIez01azWhUHeED44aaYEM4zxngSdyeuv/aW0i5ia9cR9mRLt0XrhO4AtR/aziDL7RqFSJ2sN9Tsdjt+d5POdXzJdImRJese/1LBAx2Hz/Q8fBfiwaok48AiwB02hvt0HqB164B7Yarfq23/gs7OxAYJoAVWmhVpeYVW7FEQsC+F1120ljYOSF+nT6o3QKK5BYsJ4lLwjKIdJmkPqTKTG5/cmV1k5MgceqsrjAg/VswGmuxGtelVseNdgiDhPcdBsyGbLOwb0hzYh7qq39D150D4M5srJXlJlQnxPJGGUbTbe2+ZcKEPnGtXKJQwsPJ6nlzFgHHQsh3sOGtlAs5qMTy21cti5FS6EsA54HLmX8BQF1rxpNrDH1VZEQprlrZzEs3W3YtDEt5/sTY4+mrMLLtaXf4zRU+n1s7xra/JhiQ5yVTE74Vzy926KM5MQ0zgIXUcr6ER3U56FnrtAGp0KtGZr9doWG3IICQPhzunieYBBqAz6ZN4hTA39BkNzTPSxaPdI4wwTGUU3ty3w2qNEvoSkuJgHMlZTLFtPmXp+PjBZOUMvtArY9j6TVCodt2IysegT/j5yOS1isMUoOLe5Pt6XCjsjL10wDcV/pPR4Mp5vogEmU7DTEX2i7B7+MWsvE7hFGkjsRRbl0QYH6FVbREqw4CuzXB8J+6ajsK0wTTVg9OrNjf8KtpZ';const _IH='7bc7f4c78feb61b855b0e35b28195078bfc52ba7c53449567100cc676c38496c';let _src;

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
