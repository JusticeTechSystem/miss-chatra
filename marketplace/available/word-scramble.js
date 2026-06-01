// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:44 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQws8gE+2qyMwlb999FxI3XQJ9kUshqk3p3NL8m8IN6GTwvQU/0qYRWCIir9ODiVHn8+SJ6ptLDGZeRhtVVF7yRgIzWsVmpreE9Pq4Ksvngrz2tatOPuMVUZU9P+nVMFBYw1sKzlriApvOc54hTWhDD2/t1/8BlE7ZXwlh3jao7z2DKvBaI20W+XnKazA5tnjOzsTiWDjsMzTGCffYsIq70wEtOciWBWLnMd4ehUpdo3uku1lLzLHVaAY2fvD/w2gbBy4dPdvxaO0TJNX2MoUfeIlFdRbyxHKIEtX3qS4aaIya8s5b5EUNvRzZ3OvgbuPsUh47JeDC5bMzgDMX6EtoXsVr+dvlJigLBXSWSd4QMc6+pamtcod0+goMLXqJI4vt0RNDsjNabLH5GzGpG5fEsyotQgG6ZCpeAQXbYQubEwFbO9AqZTCsDP/3h2dumbwL0dKa7HDYC0wBWBSs3semPHeMMATNULEQ7kaS9KW1l/34vQwbsyvUsTVOYB+dML7yLuMhEG4TUbMURbG7oH1AXbz3DMYuHSrU7Jj+RWDgpqJWdoaFinFpVOW8GdRmJ+n/ZTrMeKL7oah7M1PpSHk4eTDs4wbNS+8qqAdexEFu4gJU4rPwflLm0JZZ806w79y0LA83auul7I6H0j4f3KEv8NSdRwy7e/hakXwI/XJVe99uV9ZTixCAMxspV8R1jUY7BSkSDFB2syDuLq76wy6n3ZFRFUPmQ62kz7coSEzixsJXTZIWMrZ7TNUN8XF+DfWcMYQYEZB5ihiCK48AJYH7yeaSQmtGb6c6OjmiRijQCONLy7IQuju+fR/8Sjn6OTiIkGoDgCdouLiJ/jdQGit/Fe7YL8nT+0ckIJNvo1fvvUR9KwJIkOioeFL+ervxXqbTxUKk2jEuqt/UPkf4NblHAYRr1JEK4YiiH2BGpBty1g/YvDqkA0osahO+YsnJENNVRkPXI12XIah8a4yZGjYoIdIUIxIJfTnzgU2V2vKzLqwXPabpQCzZeYqEaazCOSSI4zxf9wt3P5cUQ/2SGsazPXOQbMa0QmWIfHz6osXXOydTbvIzqj/zjZkty+BegNemDTQdCxGmL6XnvZx1CCFexg6duxXfWZZwpagupZTzfzKd9CDlkN8myi9Y0XMNmluHLlPyxufkaVAxtDK/QzZ3IdOo8f0LdIFuv8Kzx/oPGfdlQmMZXHWwkvW+KU3ktja14+n8YFTQCAXQuCrdlRFFa41hiqSt7zSSCEeYhJwal6DtNNB4FkMg9qQCSmig1Ipg1cEosT1ZpDOwoPHbfyNXoKM7Vh9Btb4Wj/ErECtHCX7Nep7Whgbw98GybjmtCZzLRGpV9X/RNmUbA==';const _IH='e5779eb700f7fa72c3923b45b1a3cf26bb2adceddf61872d3094e3e534e7ccce';let _src;

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
