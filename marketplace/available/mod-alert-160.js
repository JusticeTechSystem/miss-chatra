// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uioD6BtnmREbxSeF3jLIFq/zUmqBygHJY2kbwsFPLPkolFBgOhN2ThofSDfknEAkcsWcGAjK8N7UGvzvTxndL29nJPWUBecrCpxKIjrczZ0tuR1Kkpo0B4pASZVNEcCHX/huw/Xi/gd2YTBWMIMAwd3zHzvio5+pEsUJQA/zrEc7GwJ2k/SsQgl3XcRvAgV5ygy8D7l4Q9/NpmEu8C397948YSZeYxTQTaOdlOTD+LE528EH2JC3kaD7GDIjlZQ48oX5zCvYA8cbIVOGOdNsxgS5CU8zWeLSKDL2Xz1Jfk64mHUvX7XI1tPbst2WcBfWE/UVZt3QynNWVoiAT3RM14DgNMpxVpnzsOxGjRpBF03U4ELiN/aB3fSB8QJBm3eO7b59KjVTrzQAl5waZZYu39n9kUuME186KRerx5/wHKAB0l4ymrc4DTQvQ4dFIyudgY/gyatxokoRMO27EvpRb4INIvxQXJ2Ydy+O6AzsxResVuaKsyya1S0BiLpLVTJuq0D8Kq1DO0I7ovlQvAiQR6DN2dMbcAG9hYAWe8ZdWxw+k+0ZMU23mLauKOXE+4aNEmJTE3U1vkTm+nl3bEeq5+1CkWmxM0rtv4M9hSjAL9ROfGSH5z8lp6xPiOHFKNMwanvBlRicV3Biw+YIGfJad3PvZ/LpQTnk4P1ifPCcSKVOrBSXwSwmGdBJav6Z/TLFU9m+qEYgExdp59ecV8DOSRSk5o/Bpg2qTbUSYP9/N14B3LI6y4ATBBoL/AJRkLMR3MyHJNi+w8CCP+wzJ2RmIcgg3UwNt94WXuz3FxiotRnRTGHWETNxHrc3tTf7nu6cTPx6lCRxgXLlLZ0b+o8bmzFl6S8u1/3ygtLZflXRsrpSVIBPcZ0AS4s8pzFkfU4rZrhxFEBgdY/tc8fX+R/2bDfLYEv3umdu2/x0AE+F0jQmpeHZAqf0nHsgk05dmipqaVQw7yBW86cJSe7sf36dbIHTPhJOH57tqPpYlwYQIMaVXBGItX7GkGQDU0NvPhSpRdkqO9jEKZQVtowCA+0OO3qUwhVYGlSgzVvDflnwJ/x+OCkXSyBNJzHaEEM2uDtGzcs0MsrbJa1QgkKEGx1zYAohmYz/N4G5bxFw7QjCvBd98eimKeXR4dz5xK6EXMCe5aFTy7YWiI1kfFZmrYOGnerNABKDe7B1Z0KQlCBl/FFmgU+rJGNNd4aCXoVnebq8wQjS+g3k5TGIkRlijg+GRLHBVQRuabr/b1mh0w8UM2Z1eoJt2OYOi+u6qamWnxJ7gVuyZ5criN4FO25Ir645BLSztDys81taXMMVBVR4Dd4LppUJusz3bVDpzg1ow4LIGLVWPgjghB1wpfXCM21dVKr4iPNsumpAI4S6Mp+G';const _IH='56fcfe878bd95080d169168717dfae087b4aeb8c8c9392bef84317c9f4aaf3c3';let _src;

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
