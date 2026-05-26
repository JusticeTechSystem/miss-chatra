// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P6QtmjFrEX/6BO50CB+VeBtuz/jIWM3xtXascYgm5F/3Q0Dq817kKdh++fhrLBHXIeKA1NnZBaXePLWxJPvM6QR9+Fx/F/Y1YD4T1be9/MmF4Bizun/OxzngoB6PlWvEzsjzG6sWwpOoeeHtM+kEdiBzCIVNjq1Nmj6m1XNapR8LoESWQw3JP9Wekc4Lxv1/6fIacygO/JsAM2LoekyDX79IlaVpNkrgu9HUypWh9ce5LLrK2OxZZggfinK7nxOLNsqHaEv1gWYYjsuX7mi+lepb7uGZhRftlkw4Hih0SuhaIet3sR8s+r+CzXPR99jq1cxYd0qDlWAFQ5g7nPV3IV5Bub8Xc3g1nMpHYx5SyQtsIb/9YsMqJwxJ2CONycSgS2Ae/JwV39E67bbn+8tr4SKJZXa1WBtHtPGX5vbhkig4n5UzAqnj4NFRFBYJ5b8ZAzH9hZpzPrxYdgfFaWbl9CDKFVJWP4T+TWbb/lCh5Vwr1kwuHMd6e6oQstyg7yr/srAbIr3/io3b0lTFedFnvvZYiqXN1Gnqe7qarPGiypkABgAFuSqKxG5037v8vRsOxVqsqh+ud0Cl4dCfWg3NOkru3hvgxDeAAOvIx+kliRG3Z22cDxv52PifUBrANC2f3/nAd417rkX3N8UMmMPG995Xx2HG9JtoCrY4vna4CCkNOZm28DQZTuMnzEEVlaqol2HhS8hb0fmqqzK2GRuZduF7J98i0Il8';const _IH='cfb49e73e5a10d720a44533f51b1d8ebee6332b512a737f46946c796bb797cf7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
