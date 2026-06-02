// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mki+I8lE73wAy0g64MGF7CNS09gUEGp5hP6z3gVSmRtQUwm8XBmHIOUO2RKtH1MYpXARpmB6cxuzzS4j3QbxakuBEbeQyqGOIaBYwNsK9yYeclhJJ5Ppynnb+NxMu/k0aPTvMAwVGiSNncE2P1sbhmwsQ5YgEDIGB84G80VyzuRi/+M4BVNyIh+BIDl+5uM6zC0t20JX/5AY+AFwI0Fxl1cvl5kiUzFLoEtloznLrcMU/G4cPOiBMRB7vPSG2Cvp6EdcFh1x3d+h9jWUg9/pqOltITbWr13cntO9gaH9x64xuIeVVu5U+MEGP7jYknRvx0fZD3EjyDbR+O9ukvkpUsm1hYMTaGA2eDSZPRc9ExGSRCBJspXPlN6Z9gQJlTbzbon/+4tiR72jl/ErL993u9deEXrZlDp8v+0I3dtItfFiHe1Rn7QYG5oKFg9EJcwMCsn0lQ49ek46T9svM7j7PmHhIXD6IIXeBawdOP1QZLEvUKN87r3kIarM0jyXqb3rBolcXn59G4MEMl5uMWwEhkP4E/ZkYtwctED7cD46BhBvidHnYBMJ2Krm6ZJYIeDF89JkFTwt+GDHXvPS2RxaS73NWTN6aIXUbMC/6bnolaOHx4bp16Fs74C6DQxeCvcnr4LRFCU1uu4m6JezA/SFLEkxkMJHu5AH5st1dXtuJUNT4cio5b22suQeIw1WmOpLSzoWPn3VDuEWDXaR7e67Wj1ufkwXC02ZYRCRKl2Ylekz9rIKz0TSh0Xglk/2Gl6d+gGA7Or8dHG3zkuenl+K+IDhuqREG8JCj+WkqOKVRxGg+lF1DfJIpaqFg4Dk733J0++Qpfu6uQmUJyupkYvTRxnSPKvDTl2Lv2RkUlicI5W8Z1iVVfjyGsFMiN+kkt1eKHYaxSycZmX6ZyrASRaWqae9FS8KFj6tKhXYvOyif4AjI1hQTEkojG7HW7upnJx2H5rhi4l0wIOBOwxTBVMerxXHO9lhULluVHtYX+vVvjXKNLsRH6meoQYhVvVTHQRU+g==';const _IH='c5fd6eed282fc9c89bab6f5e234fc153fde519eecf0d64b4e7ea5dfe08ad97a5';let _src;

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
