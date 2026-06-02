// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FofX2Xmq+xWE7Ts6Tzi7YVKXV6bDlw6XX9puoVuY6nJA0to2e/l5EFQIzjt45fHptBXIXDDCyJQFAI5MJinYcpoH5/CC2X7McBwJajG/pr6R2YangcvMLXg4V0v5wwBomODwMwEmWW9/5kcyu63FIXwLI5l/Fgr4oHSw9nuhRkhtul9vIEO6uBZpA8NTvtBQWMxR5NGqjYMgAiQ+aNzwAqID6JdUBNjb2XCIQH0Pk1dXlZuCul0K544D03Rowjw6pikmoLSpFRq9iv8KE9p+DJnwFMF3+Jkl8gGSzdNCy/YLCiJ3AvblatZ5CEDIOERV1HOfZa2jIsIPd73HxhdPgsRw07e/XMqA/xO84gGRBili0M7Uk1/fVzoURZvX6hPlhZwKrzEfbprT071V/W0U/+tywzA1is+VpxBrxLEfBbs6TI7U73Md3EAzy+HUut2Zad4CMZqROfuKt3ySmgVHuc6veZg+e7wpmoSKzjaKQADLuTXgpgXZmHWtUgb5WlzjcRa+H7+6nPyukLgo0yfjjz6Qe9qSHum5A0QhbAQWu1ZS2zCMmxE3Q+SfmPHyjIm8+8PuQeCdANuoHKOmRGnEhRoAPuhyX2hn2wqBiaAot9gWB+feK/TdzVph/ne0a36qJTsUmwG67WU9CtKGrbLkzxB7RWdv1KRC0Tz895BuBfJzPqA2fqSmjWjzjjmc3+1vekW8FCFDTgeJpaizASi6qLB8J+gvDmGpzcXUrB8ehLllKvkrlT4mxtxKZKp0fQcVxfeN/ME4lnu8vwleLhtHeWHJfS1ZDRWrJZ/HrHmNj5ahvVc+Bla2pxJ/BdlN6OGr1iBzah7QTLHyUTi9fGS6oWIAL6rJI5Zygc4mi/CIkGA/UTKMQnX93QbRm79aqQdsqs6SmARiT+iW/wU3i1PTMsFjYkQTRSfnw0JEzBYTkPNIkpwAs6dN3+jFRWg=';const _IH='a41c45d339ff243b301f7e9feba0e7ebd33b96e888e0066c8d30bd7e957d8e87';let _src;

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
