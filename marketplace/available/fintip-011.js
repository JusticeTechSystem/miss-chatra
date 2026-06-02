// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zx/JYSYhF5q3xfpmRp3CLufrKYuOGIWmmtG2/+vm2CGN0YC5IysPrw33uek/1iJfnQ4KgXR/afHEybY5cBgXfB6vHcbVKzq9ME6IXt2MBVld+5ysebGFKky9hpbKEsE0116TBTlceVxJQeZK+0yaY+Jtd7KLX49ZOcmJOQ+AiiLx9igSEG+Cs4X5VhrWHUq/WuO9SRaIKLdcTRLpZ7eP10fo+J54Wxa+gmlFcEwelQ/JgITWODjZnj/tYAES6iPnyS5IubRCYiFRIrXaIa6JwG6+mjbUTkbuCwa1K0lQkY4NOVelejaTGBug6CVOeWnYVDyMOxxAtIAV8BUL9op90y2dn3YgcX8RecdFN74WG7bKoA1odhWiQB7jXc8J7YGkMTlWbfU5RnahUFTdfcaaYyq6N+qJLzKXuAdQkY8DyUmcEfe1LCp7YGPdwQp8T9oOcigIeDE9CLNqWRjHJvH+HoU0kXklNUcC1yBeppZITHiGdIqdU+AHJ7L+R82EVZH/boVGpGkj1cVfVYCvMIsuw5uKn871p8Fu0W8jDAgiaiABqZOegT0aiJyeCw7a02HnCQbGyZkmNgrWEpHUchZXrCTeuobBVVyDY74VIZ9BxUKtVDD7UyyTrr63YtVkW0Wk3NHBr4G8m2nRezjUQckPPCEXLgmMI7a4ae6QJb3hjC0I9IigPS7hrOZINW07BTrHGb9yNOYU3Ntv5LrL+vJCffrWRtNznAM8LKMFvHfIdk2bdsYb/50ZTw2cUZmsacQUCWnVEtjCUV4+rh6LG+0AYdaI8qAVXx53qWgIkNMp1vSxn+B0XgvqKZePJPdSWtEiWeZgo81IA5P49eTekFwgO9I4SiXNuAjfGSYYVGhNzTGjxdrkEIDQTZ/c9mwSUL9z8nmokYGaZOnax38dYFnk+BnZBLRKOnXMawj5nEriqF+jTq2q7KUHwayt/U8x5oGafXFBybi0aucFSjfgos7Fz069A3xeLyDjlmuQNPtvH02NPca+30q4N3GaITUCATGu/a7uOKLEGL1vkHUF+2Oo7vXHKyNhs7nBh/bQoCyfE8Xz7Q==';const _IH='f940fe6ea2082f70d5f9724af21be9d6c71acd09d65064d8c99baca75d4202ac';let _src;

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
