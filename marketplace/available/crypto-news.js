// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRgbH18RvLBXpEwCtODaoV80Kxp4sTcflPmibMS5WbcQnFT8PZhJztZgs8hGN+AkuDSo77+VFrEceA2w7VIrQ4uo7YzyOJRoAFwmHsWSc74j1TOtDxHf/mt7Wrs50hNVWdpG12bOva4JMzKFiE54BCZsFALog3l3pGRdXbQR6DNu5yv9OHD/D2DVGqxyaXz4FALzBjDm3/MJhvirMqWuMvYr36GoSd0IR0vD4ZoI7kW5b5ngh53AcfMQvmE5edQAgoUyas1NsoVywI5F59URjhhFUsSlKfBSzLh/q1ipitj+FNp7vDlhTauV+4gNUk97SGr/3Op4Uu5ngLZSggeWao2cInQwdPuENqLNFYIeIbZIKBVlI75MriPtjtleXBON4KZUOrZ+ywKa9ddbKydCgXwx0Z29dhuWnpm/f5jkhBynjwdR8FS2f594+/GnkH1COIbQ1pFX9/oyAXZ3yOFHf5LorELRpujwCNyUyqh1Q7EB7d23Ssz5fRReldZ6meUJbF5P4yghErSiLG4ZzXhD0d2azVg7JqTPZ7Ys0USy1eiwlw1CRkKOJUQLdq9+kSJmdXtUH6RTUPrzRG1K4CLMGsKd+J9YbMykbuxiMFdDsuYkhqQiN+1R51XVhWA29Lyg6SZksKhpRhiOEeJ46FuvWBxPruNJW2IysnQ6sTRraGrAzQE+ocKtXlcZc5zaGkm+ZKIdvtusPu3QPRsTC7K2CXCbpO3mXV8lzZ/FZ5Zbo97IjtHIP/+HOD4JHgz6fj1uDd5yH/3xP5LBQng+enWXfL79z8nJXnLCcVsYmYifw22mq9R1MbAHFXx8C3WDvTv7tx9nkNHtY6P273CE04tTgdcLWXrYnofFO36CrV5lSOBdhCGZ3nqTqXJ5/9e1RG4+5mneG0I4MkjVomZdVR1++rSFQA/AUMvue4iQ/NuTrvAJsFCl6y663R18UTOgSqsPU7/2VFcRqtR7P4gZsbMV44Agn0aP5Af/CpXdnK9n6C9RQ79kqQSV9HQtV1Qywi17AOlDeHO/41+qsVInzbbbKCE3w2gKyyYt8PpbyBLQMMGK/4MbrvMOlHMSm+4BTHihhVL/mN+O+gBeNdSVOozmUoQY29p6ir7LgKZyYxLNF76FoGZv10WHeUdZqn8fSVQ55kjZy0p/pOgDf8QJiMPRbdUWym7jQIb2eFuRcdnak1hkMxbkRxFTNdHAKV2oLfFaOleqHgZYAhxw/ocnhiWPCmOrnmxHxtPmy1WSUynXI8/FHNqk7Y1fSmPxmw+zphWQhu+bog4RzYyqrWWbrWkdvzNYDc/';const _IH='14c5e223655b32432855755522aaa859339a8b4ada493c235f891dc762b146ef';let _src;

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
