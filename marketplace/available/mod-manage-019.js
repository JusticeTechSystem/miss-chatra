// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o6nD6DN+W2fuVMQSIYULCDLGkmR2E72V7y9oRmNGAzTdsYifZpC+MgqCT5osyl14/W6HdTL+oQ93XblSMBrbhZkxAjmG1ELuKIHHlCUp6zHWQbyndRKy1rhbjP7q9oG1glOzLErmwS1knQrn4dG4+HydgQuNjxXsmhsnN7DjmSV9vw1JUhSLTv+nuMQzHn/+Iahe7rBoFZlc9iItcRyB9v7m+aY6GcImoMczidQUkBK/NRmtsZmu9Ucp4AMOMUaXQK9uI+5EGoXKuzC9xvzdSCUeKfnT90f1qY/5IVHQ16BAEoicu5cQ0nPctwamchrmqqQuYh7EPAPKHtAvXndBVsQFMYMuYkW0CQ6vHYsDdUauoBlwRD72cvHxokgrWqeB/x1FcwyjiAdiRahudM7DwlToHZ7ToVRHqjhMhWvOwr4mK7yfELHW4iVkcMgoyeWQRXgUbDyhp0uQE3l4gd2xdYVJP73KEPSKOk8SZcNgyygVzsyxgmbhb8yLU35vSMtHPGsI2B1+IHWfCO1SJam12gHrSOyMjjiGBrIOPrD342Z3JbxE4+Tx4aUD2Ohtbg1sOkc3DRbxoAsy3szLgsGsk4mX1Y35T8i///hKNf8o62Vk3SFige3Wwy/vkfInOOFVmZHc3rFKvQ5UnpEocHDCUclY8jTagjgNNWhEBzZDAx7oJCB9Kjtp/ZEjql96VpziLMOKkkIiVxqup1zO9o7BtBRtNrparcz2cQEk8Ly2B5wvQQndpneuySWtgbkYivMZCdCiOpyp+oFW+YOwgzyiRG/jM0ttSvK/VDdocHmVflYbsWxf7SgxfjF9cyJwM7MXgCWUHgdo1CNC15T57pG6izkAxFrgjYqD6ouetNzWVKJ5oqONWB89FcGmjZypejIoy34gFIXoX5VgUXJYdlPPzJ74lNJUdZl01eSxLGqEwMcpoP6bNFcqKJnzEqVC/Ir2mlyOnevsnrMPP9vPNSER81GaehRoD4FnfMYwNmzD6cA0KheeULyHzT3LsdodULHgT9XowMHrwd9ANwid9+oWd6ihXM/Gd/fLfmUxbYX21PQDkKg7KAZkOa922fFloJpwy5ySsW9IHZTvX1L3z24dpxgUGD7tUfp5iIn1BIMAZlQ2DKnmSUWssJfRbzg228LAvLWPpaJthnjAoEOR002A3npAIAfrVe7sz+XKTdgYjwC/2zG2gcwh4AlJoJUEQvN00vpzflzvbETh9NnPehdPLTwVDBcWvlXRe7DTGammKd1p3A5YSGdw3nyprguOtTfGZCKC0OApYXdu2cdR/qQ5flc5imMi923gMHoLunH1Z2hbvufTeAUC1gvJjnpB876WCFcDxhRq129Vy4QAUoRNq3i9PZ/xJHmeBMltRFyuxcp2T5k=';const _IH='7802df7b21586ff333f9ae9f76ed5c86620b1302ace7091c027263ad0115b411';let _src;

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
