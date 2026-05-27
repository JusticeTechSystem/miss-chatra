// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IEVzu6NILsW4RG5H7AAazYUvyki8CX+ybUaFb4QtxamAU2xbSD0FAo33gclTrTXNeWugmyo7CVgvbblEAKxsHX2Vh5nFo/g49IF0NkYVQfdzraE7+ad1Sr48Xoq0TJMZeeE2X2IN2vul0mA2JxDiwhayo5BFGnvP/gBfMZkEUb+Sz5Nbjs+PDlGFi4cDtmBDtjNXdhZFTDM38ePCBOmrvLv+SOo8UeDDZ1j89O9XEEoxG/tLl95U8fyzTMuxCOBarWD7+FpwFM13J39KRc5bguYhzuHGP0AWxHcZiu5PPyTB3xd/L1xSUKKztgQnk/ty81BMZmcrUKkMSPW2eEVTIFmuHIJEGvW5mqODAI301G8DYuz6w8f3NeIXEriR9CLACzZNxZMoE+mSEgJyPnUiF6MeuTloc8Rkfr7FJPUPfHJAfbZ2RvecD0A1KrB6eoukg5WWdxPDe9rsbfzEScbFY2n9vbSmoIzpL6CokqurslytGKe5PndVxWJgqZedZbFhu+77ZCDP3gqK7pZ8+UVBfANhmax143stVet61+mAhgb/1ZcT5ieUBTahZNvVIAZuHEiOXNm2ZXjX8zcoyYb20l6WAUJ/276vGODZiO7zsQGsOi5px+juFBcHowYuWakYF6sv03YcUnAqzeh7QLgYcGCqdqdd1QfjQkFGhTeg5/+W3E8R5NkPPhG4s7bkvzivbNCp8YLG53cA/FnamGeMtGWUTu1+4WlfGQ==';const _IH='9be324b28972d3f27f924cc9e0604a196ed4b8c6a1656dfd7e6d70f0715a7e5a';let _src;

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
