// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:46 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8AP9du2E/fIIpDXeebkMM6CuWIrTw/p9CdzSkPOjliC6lBl0kTkrEsTraKzbVG9LXVb/2wDIIM0Ax/box8GoT/JFUcagan5gcSQ3lY4pcET242MsSC5S820pDS1nYEaHKAKQFC8FAn62V3mlIzEnnKmWgUVejEBGTa44+EmOoasZC4u9PKNBTEfxA70jOr+BRXw1syv3ytQiTdLPcQhbhVHtVtPc89e8D5JTpIdguob3u9Am1+H96d23Djt1hVfK4nCoGm+NWaudZLl9KZ4FzfZwZz9O1j6E+N/rXWUhGMknFP8eJd7z6aPmUE4VoRrueJyWJbXbzCsZHik043/u78ZXARlPp47R1wlaIQe6xbAZPkfdg2cgigCgqGRFowJMxNAOXOy8x53jGrqsM+laH2P/MfpgN95HUysMtvlPKzm/5B1/E8KqQ6leMhIPW/ZZpN2p5ZUGB7oxxTQwEWlNqsOnMb/W0kaRHEaxO7urIy8Qmg3wkSyTmn5Yc9YxdrB7ayX3/ohemms2ScZGJnR/gHmIVdYuc/MhOq/8YmZ5y/7fiYJ79VvJr6fR8hIgrXLaZy0L+8TNFuDieieyv3BgTMIAw/vnmXwxONCdgtKqh6guvYBcCMZ99FMGjAE0Aw4cKL+vwGCt95gUiBQaXG1PhPT7Y+FhFs24EWLUVXd232CJK1jXm6hI5621ceNin+wIo9b9CF8IFNw66zNX3BJnOavZrgLfu9/5VW7iNEA9+ecUkV1A1IMCErlQ/L/zmub5mIx2qrGG0Zu41+7Bwe9pUjSOaLSIJgq8XSVxa7YTidEOGfYJxCW0T6DGSbaXdtmtlijy1Tpkypp0IpQnpSc19jHL/qTGZHfyW1M54w0aqVliohbXumRM8++FVjGYQT4bNONtpHm0CQYoxR9/Y+Vmz9WEYgjSLeCIZPeWtq0bG0odYAB9Gbq8Juj3pwZcuawjg0F+2isMRVzPymEeHMCkkIsh9M6ci75/DhhMaxIu84pUsOQP+gj14Z0/PKnOSScvQxaVmNFCe1S5Q6fTdJ/MI/k86b/CXMWw3H4ZLe5zSDHoP1WHJ3VEoweJcVmkGK20Ht2KoTyRyXyFAXQTNF2dVSke/ld3UwhKMUuIPZpMsoHt0yz6iHhsAyGNJ8TtdGG3nqhoV8zOmoKY3GpTmc8ldTHp0YuD87Ab03bgbnKpykcbIWeIN1r1WBT0BEoTYZy9g132B69';const _IH='cd4afc30eb1d66a4f17738a3cd86a4a029249c6e44cd4b8d885cf2bd158400b4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
