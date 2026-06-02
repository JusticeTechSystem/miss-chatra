// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='txqmjHGpgojalTKMRcrzm5GmamAUUk5GgtojTFJU9kfBdyKzIo9VG4TRrASOxPxwDZQ6/j2YxmZlB0V3slApg8f40j6939B9nSPtTQO1b2DDrXDFYOIcCueXueA8dBJK7WUgv+g7nA0kclDvoInz/1n6QQ6/F1PpXy3lNdKmw42ydQTn7kF/0VfESaBl2NQ0mIEAXuSMOQoftzEMZ/qWVwLpU6ePKhj8GhDH621vPKYs0SkUziZV8vBgUf0XZqxYBsdwuw1fMbYWSDGuwmAdiXGLRstq/d8VdHHom5HyfiuOStEW289HtV21MS8bmUhCAeg/wmNPbLBSZjF/f9pxdJkj8SQwBnETL9LcWSQBc2oKaaqZDXNZ5dqMPha+Uw3jMJUpr+U/AhrPW/luekmF51d8/+cvtpXuWACeh1HqvR1fl3U0RYZX0BuP7g4TFpfBGyj7YJl6t9dsF5RGgBnIqu/IWYuoOq0d+iAfpBfTqIFWsOoLhESMwdot3pdRcPrBvLVgcIY8Pb0O+enTagJ/dVnijUXEuE04PSlLILG2LSjoKwNTaO3PPkFFuHSl55kY+lFydPppuD9VE7JlKeOES04A9zy65ElfXNTWJOP8dDoZjjGH3MaXFTQfGO14349uXaTcjEviUZIvtpfUnSnt9rV5S3vWlYA99MVQhvDKfUIe3q/Fz/SQqCD3NEyoPCBvxopo/NeeGWKtIqOMKkYaixDfA2COuSBJI6glYruioU+takJa1sYmoX10y7PF6B+EDrDjwxnv3y4swSLI2rHMx9k9JVSp65zXHN8y8IFoyjaMPP1r6/jG0fwEk5sF2p/T9l5shRTanHYHdV9c309HKpsAyb2GUY5PthsLoR9Vgq091komZiVzhdlxnLxrisVCth+2KHO6SNgUWdIFKHGqtmoE7KUHX9JBzg/pJKPkXzldAhoDqO4mRPAQYSrQT+iogmXTUOEfq/J+X6NWH1KhwzWAXmdBbtHzlGR0YudNIA==';const _IH='b8b11be245d094ee5d93e1bf5791bea5557dbd01cbc39cf81184e7e96081c6c1';let _src;

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
