// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l6/O5zP9IZtVOLY2tn7wWy/LcFBuxXchPgWqBIg/SxpiWv1bI0446T2pg2dVAAPhqweSoQnxPRCuZTXraqMOA8PcXOCZaqifLn/W+5OCL5fBkBPvubFDL9wIo1dTdkeqaJDiBJA7KxlDZ+sktXDblIV8kSq2rc7SHbNklMBn6VdEyrDGw8VDNqnyVc6+AQpJmR9KWq8jKAomI/EdGVDVNlPgOmIWEgAuj4fLvdeFvMqJ5Ka4DK8dH1s3Quda9sHwWevrvWE0MsVbvF1CrTVnl4+8bR7Hdo6RH9rc23/uPL0gHp1lsSXINraWGBFBraASFPbmBP3HB8WRvHaSjKmdcUvR5afn26AyQC3aGakTLni6DyMmEmvPrJZ8m+lyBPksgWeNZrMzrz4JJWWY8/7ZwT8G5XrwM/BkZra50wJ5JKDz5ORoVz+HH8L0t7S47VHtnVR2hpOL4QhhiGJLgc2iQutDj6zNGJm2R5cVGUWRmMVvLvQHYgOPyJWtps5TzOuqfhZ0I127trO7cUkQ1gHHl2Sb6OR+R8UEqtX7koqEx5h/p/4Kap44sYdCTrjT/aNAjub+7py9p6XECtiTnc3Rd+fQ5lTql3GIxSKdgrO42c95Z+ilR4dfFvs2y3QIsHlQK55eimffWc+hgQw1pMBc6lwbvEUmxpGcy2PYKem0o7c2QEkHCyR4cfVlDqugeDel3lwf8QfWedOr7/E8R4fYTpxO5zQWOP7PXgRHv6bA3FIijzGB3F8g98NtYfl9oJxFOvGDa+F+KHR2sdGMYkPNKAi9D3vSb9R8k2P+NQZLOKPxbtbOE3mnRowzGkwai1ai3bvdwrPzWsMIw0M1xpp0fiGHiLAEmXvNfxz1AxHuL3gZyhmtympGFEYhY/pydqbbWubExaV2jkbDXUbhVaQ0aUxiiaPRYF6GhhbK7B2U/8N86826Qve6orzIYXxeqh9DcjWQVj/g52rfvltFifM1BN/UruDWdkmArdPTnexibTtLvRpiYDPT0+pilgR3emqQCZ0IvZ5TTwIxiSGRkUV0WbKErjSCwqLTYSbbL5kLvuhm/yWriCXmORk8BXIpPjQMFdCJ4i0dkoda44OAfa/xoqaKj7ZqedNNljtSm6uhNQzeTZsVUk9vL1gOD366sC0gKxFFI229Co9D4X4oJIKpN07HG0HsUlrbA0QirRNVjzSjF3Dk0NH0i920amMNvccBfcY1JsepT++5DQkc1zVCI2WPsxVKH+9R/aycvONySQdEJcupu9YRK5oFEJu9ZOcE48WqughR2YtcqdZq3H2pYkkeI0Ehb5YO0rkJ1mC5dQFdLphtS837DOpAZOGwc70kPr8TAfE/epXHI+AzVX/1dPiZPsOMYa231tbuGpeh3653EhY=';const _IH='2a16da38c594453cc49f093d5c72b17dea9c19f3b66dd4e724a99c2bcf52940c';let _src;

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
