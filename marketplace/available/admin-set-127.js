// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTEbHFR1F46xYv0wZljGFZgh3PIYUztl4At+07gHEv9PFLekJaDLHCq1qtpG6IR19sgLqMG5wzSPtDy+WTR3Si2YDDVKlC1U+82OkXvMevP4D1D0qU8L3k9iL+YTJchnsLm81JD+SUREtXgdhfNY65RCbkOss2trjW/XX2/YG9/2EsOqQcjB9N7oVzAdCr9ngV7kzXCqBSoE0dlACvJhy+QTC6NUWmUvioC+g1hPLgZuoZwk0YSmRSLAwUQJ5G5NZbRCVRq5fMDBaYqyjhKho4W88UQpo9dPrchomsnNr3Gt3lPo5VLtUW9F1q+dsggLDMgaOTKjfexBgMCCbMegCOdaNT/qFcYqu7Sm/7NtFOfx4DmSXWHDIwejsRid0IxwynCNTtrxu9Xq5ziw42Ba6DLdjAJ5Nw+59g7F3ju1fojilSFRV4/KYl1L+UCQFbBc3GDF1ZODFJ69ZgQNFNj7uTBWIHSNaWQy20B9DxUbRMjnGic+MoHmKmU9uiBjByM6A8AfUjHQlHXo1pHY2pw8RN4uLZo1mQWakE8mrOwxwwRPNnqC2eZeopGU2Zo2EYp10Sv6BIauc6i40lTTREQ7t/wAHnV4Kt3RcStkxvnKq9amXihC9LvqKwaazY/RdLwtLvf+n9QhLcnUj/QHQmdqps4kM7fcKvqwcP+346VTp47MaOoP0D7b9/spVdIlCWWA4iZGOpjPq6icu1+JNJTEXaK6Sbsi17EAHN0vDchkcouWMu3j94mHBtVOPYELRsdzn+oXsTjXbQT0x0GFAwnTqmrXU/Xs/psquYfWJ3purn52nMfARc0WlwHX/e5Ts3blaIyZ8fju/l0bgLpJyUzBP8JsCX97dCPZC6yNyJjC2kgrcF9FnITNijice6NaZd1KU4qMhESMFjJsjuehOgFl/pK7Q1NAnE/GsKe+S9INTWlcLGMDcuqeba7cJQqF/w2Uy8deXWwfuPBbp3V34QOBngbGoXt9SktgAxpRIws';const _IH='06f196c12ba75e55446588b447adaac6f1e68b369d4d9becbbc77dfc1edb540b';let _src;

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
