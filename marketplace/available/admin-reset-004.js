// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lLkjghVMz8AwFnbWx+EM7xdVCOA2Zr7wjrL74tqBO5H8YcofTHSEqwNh/u4xrk5s5KuDY5m+y9bYRqnHKB7hqxi23NHT8oHpbAo7DPpSdv+2yTKAPoqrt4fYX02wWU+fXtHkV70YHriZos803VoL8PeJOPo2hJtb38anw9JSdM1CA03hrIIfwbN/mkgsXUyFwgDPnkWzkZv3vONjAQISGAByYTcK2oyKq5ErUX/GgNu67qM2CnwHwdyL1TDuzvrRPpoB6Q3TQyXz9BvefDnxhGrqvVx4+kPbx15bFlJOkRv/C3JhtE122k0pPJHAwgY/5IEv2DewHzAgFoU7BS7eyCqhisFH7u4/SJn+36i180esW8A8cU7Lz25LeIXEBqHRys+Nxiwcrs6YnjNUM5qfwKKmNHUHKlzmzzvgZ0+kRXaYn8pxdpL6tZwQxJl6RPlCLBHHgBgt0Fjw5/Mcl+XCeee/gsMD/Tn7eDKlVyyP4fLLjYDafi/c2BSE3Ngsis4VbZ+g+kb9KH3lYJUqqm5rJhBlpjxCSko4K2f8Eme2x8RL/40i88FJLJTIMEyNW8Wb1TB9sbJYxDiCz7wmibY1EWZu3u4r0XVk15efW5yGocSJWjfjxhZf5sdm08BDshziK64JzaBSwIMl9kkB68YPm/f/EtkcgnKBXOqTuuAnJ2hg7d6gJd7m47JT9G59PSwF7cmO0DR4PGuzO2SfvIEZo/oWAqXVW67icP6i3ts+GqQ2VAZfcLnjO7CJLVbtRV0Hb9RAQ8Th+E30nuKhJu6iBb3wJtaupupS/gKKC5fTmu1cPEr2BdyEfOE45YUfTrac8ovRocEopfk6vgbUaGgwmfBP1bnLpt5RQISDIvyy/YxdhTkRLaC2up+brzTBjXehMfOcvjWxOjhhPMuVWDxoAFn0rLDVj3ChopRGb1Ya28GHx7cLsYp4lwNB0z78IX39ZagcT0P1W5dHlAz9pInMicI8ocM5CYhlr8MKG9AatTai+w==';const _IH='39fcac0a8c3859c389f3d9b1e499bbec91513eb32e3d002340d725ad0a342d3f';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
