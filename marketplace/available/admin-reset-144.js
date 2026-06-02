// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+oZUDwcQ4oCgAsrInrTpG13tl93250XNOg8YBZOYI3ezIw6ABoD1LieE8oRzoh2BZgO9yu1INXR1NX7GivP3LAVoS9LPHfUl6YkH0SWm2z6F9XdPsm5vzFso0v09mriMs1S1dpmMWHXNYk5t+GK9P6m1e3xtod0DiksUsMEkSpa/AXUF+sM66MI7sTxSPaWc9ZjWqd0hOD5QYW2Y/QpFv9YnTDZRMMcbWzjStSEIiE7a9DwkcqAsEKIqThCjMpdf+DbsL1M8KqVaFuApklM1d63Ua1ywdkIgis7F0nspZx1/DwlXOqkWtTGD/tyEZaamzPC3dD+U97I07qfx1bQpzQqeSoZT3B+Tahg487FE/G6KzkVApk1JyknC5LW2BsUe5p/WyADwhDbSi1mlyg5yVx9Z0BVJiZkQvGnfnbfpMYv+gAaI48BlQ0YQjdrGI4eDWWp1blT1Z4yUgzppJFEgrdCJWu8leJ5U8HOuXtC+qvrJeTXmZ6ZzhOy4xCSKa2u//4/nacUDrZV/6jdjwEyLFhX9obVmTKgwC7v4ou281hHnBhEIuKQH1YCUvWCu/SR1e7VJ6owSE7X4s2sXrPoxKweZTtd82DQWCcLX115PYFycwqpN2kiukvqJgDNkQ+Rz8JKHf3p8SgmQsWHhFa/Ks2888C/z8ofYpdi3BmExu0rCWN7d3LsUhLaSvG/Ntt/8MwkxHHe/mBImSQhu0m+NmTPo+NumFB8iBtQOjPzYJIW9epv/ujiFH4DTu8d1/OvHyMwTHvpqvGnRqXQRlTBWilHXjk0jw1m0eyfJSB6u1W/N3Yk9KSrM3pgdlSqaPnSPGqt2nL+LStnUoJdydBOjoIZyni6AOU5D5EpfxmF/6moLmTtgCsSNFdW5v4Jg1DLYhMFp4RJaDO2bCuwkcyunSqwasZqibbRGmnIrYbZgo3VAMbwzZQt1sA4xyOuHuD8DJ8kqmzUql3dMuxBwq0Mke7GfxOPwLi7QU5BZkP57Y7+dmp+oXZO8uS5g';const _IH='e0fb34a666e3318dea4b26846520cbe71a3085b3d0384a54168d4ffb082296e7';let _src;

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
