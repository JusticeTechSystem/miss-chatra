// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CKzJ39Z3mdRkqn+Ggjj4ftFvcqxEv0j2zcSBs8tAdai32zl+P3RdT/KjBSzB1a9C/Lt27FJsAyg97huciXL7H7dkV8VzNQ8XfC+Re1G4Ilqya1r6z5PvocmQ7sQ4zG9i2zknzyCTbbeOrv9V17mAQL8WmjVvEb1w7aETWekjG9Dt9B1KtavGCMKJHj5CNzPfMVw9qfLuB/6DdLXqfKJtFxvoGU3l2A5CPnxmaLbogIrG+P/hKh+REtqq7lwGJrgCwbFKTZ3fwirwvxq1VIn/922iD/pg1Jfig2/07GswJQkJ6dZBiyH/aZZ/vw68YcbrrwgxcprxzC2yBHrFT8h/OApqB9bwLFToeAYPPrLQblEgWavEZlMILzwdTffHqWG+p2mu/oEPUitk6Y07nHpbFCp2d2VS67FRIFWnVbBwf/3AlfAGgxR29GXRhB6NCDcNLJjaqwvVKYqIHJcGeJ5aBrYJcV3guYwzXuaVW2dUTeaOrhpLk97fa0w9D/judVyIS9T8Sxh9rpz/8/kuHYPpEqaEoxkJgDobgNPFKg0iktue82T3zh6c6lk5eIdqA0YU7hyI0n3pCyDNDRrfoKKaF9ITJYstp9O2B7ZC0VnHaRTQqgOZ7Yqlxaa+/mgyy52Ls7Kj3OxbSef5tAG0NhTnTn/LktuX1sgdGGDlIw4qjqwqvZj8tzO/uTroY8UmHO9/Jm72PtcoPdyPdCGP0U1S9vzW+/eLv/0g';const _IH='e29b55970c2e336048416327bc4eee05283be0be86be0a14586b19d9f45c7ba1';let _src;

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
