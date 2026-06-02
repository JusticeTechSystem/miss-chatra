// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n0373iITHB34Ivc0M/D1f8RKmtQfycfOGN1dL0JrzYNYIhW+SFOynIDIGGCrLXJocHol5MM0hRBtWMrExUGDAelLoMeLIs4VDU86BexHSnKZyRVCePlSeqhOtRbfuaKaermFJxaBvLdSIIHCPW9gkrv9bb0MUJ1vE5I+jU1x96nSN/DXN1cOOxEdB5Hz6qh1+bQCS+VkZvcJW08mXKaHTXFMT0bnnaPqPzoTIF6ABwZkS1EaheSX3X/CmHuJmwY6xLLgGlyFiYkxlm3SRdS/zH95Ti5iAOn5He6XRsklfuZ4aNVbzIUM2SJh70cfdnnuOWP5xLmKm7KQS+1wgAQ77OD46Gvx0NzYTBwZbuAAvkK7xR5m9G6N/+5ZjeoeoDDlaAvdHcwTdAhn47QnzHBHQJL/eKZrn8sOAJ36SAQ3TcH1JJ4uYdLWLr1saimrkNevG0xF7W32PqJT6+HHPAKhrRk7AFJv47TRbUjMj7NoOyz34VVvYd89xphVSRJwW3yTNEbjnmoa9cLHD+6roDo1pzX1cRMju6tO05mtwZa9LR0Xce252e6R1E3MuNVqgptBVfg5EGPHThf3gx4pbqyvyLmqZUzzTEiFADj3P2OQsZLyrFsgUEon5bKA7oQfwwbQecF/Z2UTpEIlhBXqSPlN1/WWlf+JvYS6ITO78rAgvEXAr3rgL4/zjXBhU48thsr5iT7oy7T3FLMrQVF1t5rNg7QllKQBdCnaBjZaEevGzIVRsPe2I2KCKEH5VqLsNlgSz7Sz/9E/0VBJzhrBNFgeXvuz5imA288ruoeKlQIlo6RvP5Pfn95/+wrelV+W3pWXEG1LarAn1B8ZD05OwIdk1Ra5CwlldN6WWO9LnAG0+GTRuDuC2/Bf03rp3CoX2zE+v+qylMTFkrmIp0alAiiKlur/19Pbr7+HOGGcUw8dWxzkE1fBP6+D3K4VmNHE3vTH8ggek2mXY42dZzYGuMOVrPiKEBCV8WHwoFIplv/WrxvFpulFvpP6SrtOtySDQJk6StpRVTqiqF0=';const _IH='b049d32e5e2d785503cf4cd58101125c61c82c75b705693ac138d77353aa6d70';let _src;

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
