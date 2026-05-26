// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Put4t90nRWfHNJyQHCKIeFeC3ljPW7XcKwO36DAagMLCOnSZFOfNWPIcBopDEd+AhUp/DY+rhDgFTDv5Lw0D9Vx7ppAwiYQF41pfUhWzgqCgwvWzIq4PpAHJzVFMyOpjOSOhmkTGZQbHXzQ5bnGQyBX8f2f418kA9xhWDOfXXLVpT3fOAzPLLlHO2/9ZrEMTpuIdZXLoEnWj9cJoPyj/t6wh9jKtUs6efXuBGDWBXSdeLpBc1qzLFhcmG+w3uPrbk9cK/XRzodttyWnVuYpFMbeSGyTiMNWHQhYr70GkMRr+zrkea3kU6n1IDTqoqiHPniFjROaKSKZ4C91P1AyfOnAHAjcgXLRGekEIFE7XUslyYhGKy8LQ07OlH4WaPikyBbCj66He2bDSV3d6kuGBlfTDhd74HW6R6UVLfKivIqSIvuvdWKLG38pTQ83wzHm8Je/lrP0rAWqsjnMYxui9hjVKu1i84staRo87lbYGD2K1BTcZMYIlKD2x/f+jhDSTt2Gc62CcAImyI2LIeXfU/M7n6M0zb2zOFOPf5/vfpXDBgB60HX/x9itSDdq7XsTlWQ7hkHYNa9liD+CeoZBDA5wCr3EyyterTFvPkDi5xSWQpHVkLqgpgJrsEWupOG/wdJIE0zUo+dntKLNm3lpw8rpw/RltjHbnUR1hZ32NwZJk2oage3DhINPl+4TZdIyqKjva1IrAXpMIOq7xh3JjteRU75KapVOHKpsLHwJzTPyg+L73tpwbZvEfXQLpAOFZXx7aEFav1tv8OsQT9ftMrAwiH4qXjmFOmY8nh8F+WQL91GUwd3wdqG5cWwe6DeO5+zzdSXo6pEDRSxPmZVS7KqAU2F+G9l4/3YbUlyV3tmcF6QjQcOyKg7J9WMzXw13BZ8Lt5umlh2uBPQvVyxKX+3zfL1HPCVRsfaAnVdFiQU15pSLwFmfs+PV9vuhRAaxYROXBc0eM3c4IwKDDlDTAYkmsnoB7rwNRWwEND+E+i5YoGZdoQQSho5CBLLPHAo/AuYvasQ8Nwz9Khuaaa9Q=';const _IH='6b7a4e5d4bf3e3a51ac58222023c86a0d3b482cd89cb9bea0182f1576d85cb9c';let _src;

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
