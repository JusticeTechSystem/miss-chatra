// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DrzcLecNgK+6o5oVc/BUCepGlPW9CyMIQReaWvSPXJCdMfBAO8xCTbSya+5vHfjuE4Ek4Fh852orU2Olo+O78VNQPVptge+klHaSuvBS1yp5TKvXb0Y/OD/yYK7gb5zqS3h9XbBXq5dx6795/8X9fGCTwMOjVv5ADHYoRhDna3hsZ6c76mh5qIILnw1nrBNeAuDRO4w8h5qlP1OlpzmMqKTllOW0MsQODqkblnle/izzn77nYCEhrcPMI0sF85Brgf10y84HTTIIOqSwzx/bWPyb+oIRoCBxHkarEx3SDZ8x6xaGH/jjVZ+vGJB6Elt0F03HF5d2C8MePHBMSYbJTnIy2hnO7JrLTSrJyCarZOZ6w0Br+rex5EFzPykxgHcbQWmCWjrWM76OlYNPsEtUKF0da677Pn+nWrFuuTe/S08Pj3OHs3stMVqsXk9wyK78FWvJtNy1zClMSukLzP3vzOh+K+PlZMIl0SkBaOInZmdRUsjO7kskZs8pNQmCWERb2usgVPbBz+CeDz/YMQXOUR7t1Zyj9/d64BOPOg840Y0qJWPoJCXUzzsdBVQK6K0m/hyAoA8N+xWfr+BB3K7OXDi2DZDbRmnOiE0LuIDZxnl4J2vv0dc/MApGz6ebxDx+6q7EyXgANrSKvn5lAd0l27qtnca+ricG57Pk8buMEbIL7a4yV1dYAVI/FAIgPcUWu85mbeMEr8yD/es/0o/5Db56wxi6n5a05w==';const _IH='c5d1d72b20bc9758632b7e101b76f5aeeb7b034ce7bbbbdb99f65a6cf1fbdcf2';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
