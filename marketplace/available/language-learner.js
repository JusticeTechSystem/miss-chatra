// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTSg95A4PaqOdGj8PBTrNFeQVSshpH62tSCIwTDKxNgTAsJHsGfm/tuqsWZyXVc+Gy0KX9SJPsiNpm1PAHoGJG3SjYffIcOgp/h8Kz4VQaVrk3lGC7zN8KLRO3DhvMU+A7ozFTvq/tP0fO6GU0O4dN9SC87JpYGO2rXUcAoamRixnfCaMdlfs8aJTRChe5Y1X75wDrLAWCqxsejXRKrXRCz0C46veHaY6ithNJLAN1PQklO/pBmSHtXRhflOiqVyQy+aJ43OR2XVUD5elFOP5JiPtSeJroepPrrY/iAmRiGhnl8f4xvwwICPnO2V2FVl+FA8Zldearrk8SREQTMla18XEJ4AQ0c9OPilMbWavztIFbsB6xpdrtAVqlp9EtoHCgs+RB75lGWY+OV/O4Pyj8wXpE18tjbOYxAOttIEz3pT4NeXbsLmg7n2UN9bFJWq8Zt/TGir4meJS4/7Mh6Ut6LAzEf8dV3DoMXjTcbnZVOx4KbVzlLpEVpujK0rl7AU0vlSBZEP6HLX+0j6FTX/FKII62RqvgtL0psKO4l2ntCZMJUVXuYDNLbvAwiXHQlVwc/AILyRx/XxU18Z2sJm6px44JX8Kqw64CJSHUvvkQexyquTnc=';const _IH='c08a7f8c81738da62d246666a498e20afbc03ad1e74309af7a9a89156781d815';let _src;

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
