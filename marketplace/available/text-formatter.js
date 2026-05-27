// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i0+EUgMmr2I92gUFbBEzIRpjl18j7lGJ7ZQvuPh4edgeFxuJVt1fGF8wgmRuegrO9U1H7eDP+MGmzsB/etzywxhSDNVxhUDXEUE89MvNoZdlNYOLQew3r1n9FW3KYopZXdJjUvON3a697L32E5EomBhxaa/ksi7tg3RI7flYqsCn6pSmoa0Aua9mikgONbB4TP7b0WYs7+NK8BNodcYOfYfu2a3vPTKrHICG4h6DIT9lfAMCmh8DhHKdwqVGaUwtxkgPAxuYrme3KTgGFNkzt0aAkShjN5vyfDtPE23Lni7VZDFVo7iTfHAlDXdcrkMuNAiqOpA7vr7Ji5cbM2Y3C6h4vrvX9Ki44Gr0GPBOKRmzdg3viJbfPieFzvGrTQin2KSgwJtQ+eGOylNCNyhP1MmeISGWH4RvdJeBVzKrvplEdv3HOFnRoPnToQ0ve6anyaSZjEmcejyWbwk1tkkBXJBNsnFEeA37gtuTfy7Lfi/LDD6Wqe9rmbZfQdnTGg6ElLi4T8QSuG9btf7nKAfUXLT6O3sH+QW3njpzYqLSAhleW+qxdWEGrdZJRCNwZ2dQtCTQ97L3SalpNkZ9mbqWqRpqegVW9mR0Y689B4jYyEHytD9mqBm8A0zBxTDggtLviRRtt/DVvx00DgkfVmZCXSBKllr8cxwhWFgUvBh099GpJzf3GCjYO39d4QdXpur0gBvBasskOA0K5OqG970C0lDRJs3ztquucCMIW6QEU9dpt/cNFv6Jxji24WojXeiW6jhwcH9O83bdZGoSl4l2cvnkkGg79wDQPEJkBym97VSpxspBulHYCIHsJmvDc2XWkMs8aZXPQiLTclE1FmOKIH6G6uzj+t57wSGCmhmeQBxj7I8PXPDOVIE2bA93lYqNk96V901sNeTN+G2Oxbb4Gjcmm659hRhla0WKqAHReYM+BUI867aHDdXVsB5S+Cx1INuvn9ehaV+lGIy4oClQNaCz9Hp/AEZs4vI4EUM8kXnCHU8z8Lf5oY5eTT+tdWIa0mzHrBzUuQKDv3jfN0/vwaL7fTDavzxHyk4gg268ZfFSXMtAEVgNu+PX1W7dx6CXR5aoqc8cZNaQeWOf2wQZmM5yQxNJTB1vyID3wV4SYs7USFL85LGastKz2d4QwuOBIY1U/ka5nn8wwMBp5+Hk+OWWK6C4OeF+chufPI4E/5JhhHJmmcUVnZQdiDJLD1aY1SQbngbiwYe5icRcyxTG5MQ75U5gv7LHYuHXxRMuddcg6OzcaGsypbIGQp9rKHYTXpkO/u7b5X1kr718Lvjw3nhMBvNKl6X87lBCQSvFL1drBoLcgq8xEdoUd1wtZnOrmBLRePdnBjdfssrMACrHn3fPLUB/w5LdWYFYTp49bpQs17QqscJU6PzH3sLKwu6kwtmeORzOftfQWWqGqXiMtTgAxYv9rCWX2J3o54P5IVXfR2luI9ljoyh8wEIBqdsZBLX88XccSbRG1WC2n3R/46sGVK7kx6Wsxsr+H64uLhO5CnQscCAIUhg52NUdS2GsNbMG6qwGMNauC4BONWK9aKq7rtcTKPNEJPsVV76rm/vdAGNb7xdccKrot9mnZN4vH44OU1MdeMRRkJJjb5tzhJw8OYFrxql8AYjmCIkuwqzGqQn1atJ68bNjOiVzVV019UFehsRL';const _IH='1269dc5fa86e112fe95ebad8045c698d4c6663cba13f44c12da3d470bf30faaf';let _src;

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
