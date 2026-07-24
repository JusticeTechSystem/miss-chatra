// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS6CFdlY084ekNwibkLbiHWw2SCK8z/ft9NctXxq1bB1W18Ro6SqCPQu9yuesSq/qxVoJSs0Q1p+573H+Hcu3Cc6eWG3voHZ0nV0ykmsHDPxgBorRq8scWhand1/LYTgcRtR9S82js/AnuiO2e65mEaLjX2kZvGSjQI4vf/dwPz0OtcUKatYoOwzbi0joy2Fg9c1NY20x7edgBQb4Dz3SYH/TTBLIXiP8w0oO1Acj8eczUrx35pphkyJETaj3050P+7NaInu8cH8tC7uAJDrO01zKfy6BRC7WuXyJQaCen8e/7T08DN3lqQtfhsHMHLN2Z+CNVfo7gdUQawvTYHOpz4Sp3H9jIdbvNPGImC0/TTlTngCyU9GSDAMlHgx8pWleCxsQWuXmtrywtcqUtlwh+4/Bd9cZUfsCwZBGANZ75l0Y7M82z1UsPl4bQRnEqoNSQngtT78pTrENQ73R+6m2Sgq2x8FNmfXPjEXkDRPDPpFQke8NccW7FceRLBkjYHg17PEXWyOn8/1mYdHCERKBNvmNZzL4aqaes+NX0USCk6lu+lLvDrLg+kVG5eB2+muG8eISiTv/DTq3zeSd1KlABnKI4KV22aW5wFsMcFTCZTnv1mPrusjbEwHtNgmIBSdeBFHPGN+N5BikfwZolSIKyuapVUB73sh4E1y63chu7oSZS+peOYA+jVZPiiuK4lFI7bPgHYIGtuOhZ5OkwArJG0V0SIFZDodAK6wuzizy4IQyGyzZY4oQ2kzEAZ4bjFHSQjb+GnePf6Loag1Dih4+uNhEH1niaafuODk5CwxvdW/ik9YlnuMrDDR49caSNmL36ewUaWsNmAZJVbn3NrMnupBFEvwqqy9id2WLqQ7GUYjiGdQiDw/zr7u5Je++MadeXcNC0iRWaKK4YXeNRetenZSetffwAVJg3R9qapGcNbYla41zo42r/9XHut6xGGoCVdghMPDSjXf/z8G88OCUj0DvNolDb0QWnK/7GQFV+BPT2GxYreMA==';const _IH='a8af1592fce22213f47b45b76e7374df63eed2fdfd0d694694210249271d7bbd';let _src;

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
