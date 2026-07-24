// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQppmr/Zqd8IgQPqz42bH5P3n/fDzcgJY5AngruJVJ8AEtA9V3zh11dmQKJ9lK9Bje9k7swSuXdTNVL4y+2fGXteiP/whPOAlHd+PkOO28PIdTeb84AJ7Ge9FpqqFbjgnj3smp2Sl5J80AHxjLnQpDx1hn/2SJrOlUP7pR/Etmmi8T/od65ovCMsVrzxE1ZgsweQRBETfA05IItDUhHRxyldzdJx6uJxQjCuievzMk6GCIy+aRXk6fEuGyXKTm7FP4XbFxtvqC4/iiYJ/KjpXxjVv4O9EDGVcT/j6avBEyWmRZYwfQ0G3PTM1SiRJpOMTRyPDln8IaToKLaSEDQtXn20qWxIZGxIa5fOanbt7I+eW7V9N/1rZyT6h5oqOCRmJsOmHPygUheR8Abma3+3zFcWcEwSZfWj+lmIRMT6WRBp97/QZ1O0tsCvGS9ZEsMpt5y1o5bBs+DyqydtrQC7xnOJ4j7pTtRZRzj4EHmTAUGsvRC+bSSBt/X3mWqmhSj/9DQ0xGSN9Ay2QfduNbcu4d/n8zrGUOKFcR/xQA10zO9HowaErqOBNNtCdAxm44H8sDeDuABXAZH1EW036RIeCqf/ia2nHNq8zpJze9vesrR0KHMwwMVBVQx1j73iD/Y+LRzURUASxw+N4HOSrTqOIXbYG1v4oUUIO11Mgi0QpFhifHnsWsSjnK3U1goXEttEMPcuj8mpbygiVX3ghprkKfsBaYfUHTHhyW/FDuU3sBvP/28Dj/2blRGuRlE269Josf7gXwQ7UPG7yl56EvZi2rdVuPp6+RrxxOw/FjqkWfmdlr5utvqnqSzH+s7IG1OMCjisTQkx8agjRYShnKiCOHhGyzjUo+5c52Yqp+oM9cPiOOdipKlmbnLcIjE+sHabkWIaR2E12b7VpXccf57HvvphkAZGHhlSXKHXd+d3SJNN5Zhn0OmIOLr1KZYBg==';const _IH='ae665a26568d4e4a97636a32ba6cd85a2eb4a8e6283b081d7d717bc78a07ea93';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
