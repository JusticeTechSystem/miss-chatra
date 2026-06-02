// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4XJeQZVJEWsiaffN8x3ZZ+lKORgj1jK/2l+/uwixx8l/6pfkUQUd7N/ZkVZTZoMtTRpMKH1EjYPJqwRVlROlWLORfnxGdmRrHdgE2ZWyQe+T2LH2FdGHgFB+HVhIQwE5x4FKGDdLLaJFehQytkk4d+zh2LDvjM59bju8iO1m99vcPyKXdF6167mCFzWLZrp9CoFyupGITDIEyAV3Z0gCT5FOPMud3jJE0xAwxsisZMoiDeM65l8G+SR9w0Nm1F1PwJHdz2B6bVh18TVffijRcOLUOwe5264pi0KNryEfTML4W/Z+nAcXewN1iwY/+Ap7aU7hjVdepHYj5kIivJo0TA9baN5EsmpAS2m2XJUikDvcnKFN+Z8CMBUERFSO+APLMKow/UmoKxPd/JQhltVIZPWntTdNhNDqJymwtyheQOFyDM+awyGlo94fxJlnlvDasNGQufQt9zq+wNiMqHofPcNymfZXHMbR9+ya0Qup2dALEOn2xybCbBFBxleHiaQQRwoWPu4IfmRQom16zilKnFfknQm4GNrmO5RJuEklvL8+V29pz0b2m8taodw/tsl0O1rjB2pGI6yCcXwkp+OWG3m/OT7IEwkTUwxXdC6clIGWjBph63Ud6pboKJimMCFFmVQ8twKwMllMiOmv1VFbCw+7di5lzch93Ir4xVuq67x6yxTD4QUo0uLr3mjbs4DBphkBvP3oZ94FUP5uisjLjclIcBpKw3xRFCroOzEAUuutFWAvmPmOHeMtKgRSX0nbRmEYRO36f5udFloJ3mXQrOXfgRzApr5tm4KbcQ00zdd3AeJK1135euSMG4dWyibWFfsgNe40fa7BYuFJPBMKHOiKPi9EVPFiRoeZJ3MaH6R6p74ZcT/T2u8+nnLCT7q83/c4UiwDbYbHVJAjX2bc656YaqktL0je12Tdpp6hDViLOginTXprblQhvLC02UdypeLh/W6A2a8hfM3uy6RJMI6EitmNwED6wkUV34y/cXMDtX4/4/cCc6PY6t7VactIvc+Ef+gfefHf5cmwnveD9U332U7RWSZ8OS4SVzuH';const _IH='23271da13b820c921ec11c8d5a9b9daf425de1048d7a989a3c811506c2367167';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
