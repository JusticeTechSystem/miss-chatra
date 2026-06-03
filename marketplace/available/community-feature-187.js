// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/YdcHB1VJlf3scwX+UW4TNTcBsHoPnPyAG+JWckzEOpGzutLfjAjs7KOp+jevNnMGeaJejdBJYt4BY9QdqaIi1HrKPDlzsNhES9K5K7CyDac7G/v4mvYirzyNkkCZnq0SxXGlEih2xXu0HqRieIwDRzhFRMl+5Gr5ie4j9Q9bdlLnId35TCt4WKmWZYW7NYn1p2d/2BUtLP6KnDHliMeMge39UkYMhmZjDQ1AZ4utrCFvNk55I569EP4LBgWn9NQ3mPMXrdnqn85VcRDzbU2r0kJ4ym/pYgKe7DYPCtU2p77Zyg1aOKfeggmO23MogpPKvcEaUiL9Ca+kcFEprey0BP9zq3L4ncFzO+gX2dVSBo6Zzkq+Hs8RVMdG3cOSky9WGOyGX8x6WcwNtAFUzW/fOxeEZllzS5MKmtNnPVeXMOqffEAcYNvA47q5a4udBy3ltK1fDqwdtbvDX1rraySKo73PSGUlWlgeCQniTcfj59NAGwvNyirVxGzABkbmyk62PwoBkLrkIJOHjyczkksZiJAZx5chQ6K4Ip2H7Ss+K//q1ZrLcki1xReOm+mwu6GgZ8uO9ytVbl8Zzd6XSWR4RRXM1DR8NYkrKkPhNOzAFVYfC2MNiSXIHzw9IwC2F0+PkL4yJTPgTyxpAIoIH3iv4jo+nGKgrPWWtUYReZY9U5NQF7pNo5wWRuSubXVeNMlkfcsh/rPZDoUKTu1MmKqzclZ9FLVwC10i0Ztu0fusWV8yYk=';const _IH='19122cb0e265e3b971a8273e67774f5e8709c6758fc4b70ec851cfbe4d3ba14a';let _src;

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
