// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQOOeVG0a750/BuoTwIKj4NG0ZWuTOgo0+Uc7BBVJPVmADy0PtwqedsDzUsLho/NdWOdkDxpUj7PURZ6+nDeZ2TJ9s327qtwj8oybhmN55yrM1+dQGAxmEc0Iwhio/kV+/JGcAni1WQpyxtK57Nwx9p4CBtQDcAKMyPs2kvtWCjWHE0Qq2VH2wSQtpQH+0xF1NqOoJ5auPJkYlhse/nyS1tGZAOPFZWN9ZINI+1afuuN1Kf148V5+woQVsBNn2mJJc7+pJtYahw1giT6Wp82jj9VRyOZiAT2Irai/r93K7gS/bmsnxPVVlYKvP8Q9p+Vj9JOTflt+8qifA1Xu5kxmdNdZNCvPE8SD0nFb/wKdbjynJbm7gpOhuNaiHPBQKPU5N9QuXuOoGfTcd5HzUOGmhriJCNo6SvCBnP4L/FW4MOTaXbCl9wJzHvOINb/SUvrG5wng8frfJCYz5HDNu1OkOMuoOf+HrTSC2DhcS7Zg/UT71GsZ5ItyjUYqQOs7MvQzzO5WdIYK/2R6gFQNb3J+McLq9zMiATbznH++VeB9ZLPxtPR1qHfWBzUhy5TYLWikqwV12mp3aj8XyDKZbk/l4qDHqgqS4vKn4dKlMIZVniGBXNtWM0QDIy+mc/jhtFhHJcHBSoHuMv4KZJNnhA4C9j1ZBJnYQNmjM6Y76TzZKuax3i590z9G/B7KfqbAykdRTL0Dntuiu2y1uTL/ezTSmAGiy+44agCI3D32wI9viRx0K5jbO4946o5cxpJAth9GcaVLiXPFLwfHoWpoBJIbpbLSfl/ycg7F9IADDEjuNKmxMl1yZ/tV0n7bOdtLVXP56ovHsBl3Z+tuf30+YyKzbKcyJ0doEzXgcUHut+PPWRPQWd8HoPiINUPIpVV7S+lKYKSt4HWf5vJ5X7Cm5IQ8URwp6FVHhYgrTqv8X6tZ7/Ss1mxDaI/slWQNX5T4pUZz1MemYqfD9DsV/d4SX56s1p3MaS61uMJASeaE9j/iqTiR5slxTu+DqZSpoHAytpzFOQcv7NBErGkFxL1ZuwSA==';const _IH='88e6b0d8a5dca44cb0579cd675577192b826aaa5467821ae3e8570a350da8d15';let _src;

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
