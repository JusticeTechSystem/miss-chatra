// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SIcmbeqfudfw7B0sf3aOpyDYVCL8BkhrRrG4H/RrNPahOjbvdjGDek5ngEku4PWsuaXbq5VoyIXk/BeATurzbXnlcXrNL53VsTM75tmjouczDC5xxPxJ4gNRDXVmgihQ7FU4xOaXNaBT/h0j/VTT+P6A28Hb0WSAKryFgUVYk5Y+axNolqJ/pniqJongRbP/sX1e8VDzItGG9rra4l9mwDShg8dGInjKF1OX+g+gE2UQ/4JwaGeElXmhZFpe3lill7ebDDlXAVTXc/Mn3KKT8GJjTAcsNaI3A25oWGukZ4bHXrO+zaBACnbfUDHato4UgGgaX4MhlLu7ERHCokMkZSEmfpQEqYzTG1XU6XrSdc4x+Hwmx4L6tWWQWHmiDw7RGcFORqBBHhiY55C5Ye0uYR5D3Qo9+OTAV4gr8m1VzGFtkZL28zd/epMK8rFwqJ2Wz0hhnKS8JNXdBl+I48zH0g6QSt4Kgw+exXcRM8Wg7uTrkeEYvDpMtYjso6y0TGkjl2QEuiMKOvpEZPA6i8E2TqoIxPYGMwtKeCcDcYqctA4VMBdrpxQwKOVs0Dr7NKcb9qPF8lqtakfO711iZUsG7/QeHq04QoJqtfsutPprGOeIoVOwZ3EVRatNEmv6H9zjezFIWDBVgDRV98rr1tCCaluPpQriCe/rTEYVhfNmslk+pjClwZT4gWa9VW2k54y/ZLTgpMTeeJQxgCdHCW/HGI9R44jhmSTwSXFcbHeuQdewO1W83NjyJ8yPjQi1OoacBC3a8Jarr29eHIBisp49Qy4rQzyrMx/uWwZZ54Ym/Cym5JGUETHk2aNOb8/PYFzlGYbZgs8UorCkYCp5J5h9GlZDU5/IEr0hQpn/rhWeB4Tkm1rs2AmEpORzoCtg3DmUaYAME+c09p62XviwgxGW9cUEYiGsBcvPHdh15SCmE1HepEbk/ZTdEwTLwygKNFmPCnST2yT27UNGDEAWB6C6QId6fWZ3JFnOMYhygBYxuEvHayUj8McgsTwsPTscJM4mVmaXj5i7f+gBERrAXAdwVuDYBxnMB3eRq5PYQv9gPbqxDJJflk+ZOlcyah5o+T1USbskiLsUeQU1E7s=';const _IH='e83f58bd74ea1777966eed8314fd7d62129553097adaac722da537f4a5dc8000';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
