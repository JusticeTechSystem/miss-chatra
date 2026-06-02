// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hiB5QNDfiTZhOWx+lJMiY1S4vFlVhkUIf8aOoQkUBDxlV6+naZE7iEAhQD+X8bbLR2sYNBvERioQRcUTefgfasZx6bJVPMU8Lh6o9dj2HvOtJ14ZbWIuFWM2Of1uy7pZl96XI/mESfCX8At7g3k1mPlxrp8dRwL9TEkHVOPkH1W5lVCFKQGIZH77uLzushemQsoyyFgyWamdpgiJOnytKtONP3+/VhAf0ifBYgwEjpwx4u0+JRw5giRsxuLaQVyz5Ifkpao8NkAv3lut86S840RSUjYKwEuNzlktT/ZBVsw7TKnl7AYcR7+gnzJrA8WJfh6ut+hbf9R73MSWKguYOEaIRmWWl1h8saMV20sK9rodl6ECiHqBvtck7E9+cYZ8eXVz2qQMtsa1hL3b6GeU0PZYu3AIfglJ7d9rJ8Im/Wq2lt+bPr3Wz+q9xLOrQF/LNFjQMlJIw143tBiyVWjYFfzYV2hqYT6VwZ3rPL8FLXUNbiO1IZq+p2Cw/j0Y+haokoUZ0iJW5vg8q5tr9yj3DU8e+PXgmgOYbuhdo7+R23lMjGwumKZtps5fL+Nb6CqrkTFE+s4vXEHLGv2AkdtqkuGU2tU4JfL2v1Vb6Tpg1QSmUb3a6ueTJGjdDagyDxuZPWJAzeaHOEK75DRnNGIms/4fWL7677VAUjBnSgbuEXh7t7OpHiaA69TO547wUNBknOlSvg+9ITPG1Quse0kWMwZ7m3YNscnrXg074apVEenLgiM5wsI=';const _IH='40afecc99c92c99e3d8cc810c04f754da6d276e43d5837267fabe37118e363c0';let _src;

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
