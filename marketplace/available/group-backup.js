// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AhMd1qwfNvW6ICAgdAXY7j7T9Si2q7S7zzO3UsbLegfnv4NAapzYtuMIg3rAo974SGBUJHxe48iT3s4NnTKwUWwyNOEIoZUdx7gxItjZrOgLpPl+5zSn27hoJLks4PmLl943gtz4iL1N30Kv9ehwRiDPFxBramZFxFYvcXqzmKSEfF/qGaQknU0fLT6urRRrczIiqlykoeO/xOhrUGRKlJewHmK9oZFDKybkk0e/s4RwHOqkLFSN0qZVUPFUWXECK3V5qD/JKEj4hu2eCo8M/edC19iotS1JDjDXVfmq0dvH5Pj2mq+bSuUOKiirPczMUWxh8PcOnY0DWK5mUOdmiyuN2yPAw8GogNDsHQw8JDq5aQ8kTe3DMgP01gkmXA6f+q+1gnGNsx4pLWfhRuID/xrGxPpc8rAQG9C3+SJV09oO8t2VMgbUNkcvqbvyjfCNtm0FxXpzaEMAGZwdjEWj+GMmV9LDCUGd+OjxlpHbg7aRasEBxBgF9Nx1oAH3cBT2eXdcdaER469751fih7fueivi72gelnOZQxRh2InEjt67u3NGFL3c5KtUZiywSEq6gjh8vHRvuCjMGpwP5Q7sqcqLzlX1ynnTgXjC5djJ3nWApKJIQI9QIAzSqCuh74ZptORvREo8NEM1IsBj084tpfXh0hazabuRn3uwQC4/3172QqTK8oZZrgMct8/ZwB1cZkgrXH+SY0qhxX76xMbTWEdjL2VdyP6Xr+m5txsvANM7KD5Edu3fxqpmdqWwC/uBgzLxI6xSpCSMgnsZT9tpEYFoAsJj3v3TpOnnkq0nh1qYK08axa+2QbBfpZ7d3LDGZ5M04eqSbWl5JC0V7CRahgWi83+tjmFQBokh/5tJg1hyaf1P5N3oCvvG13/NFw3ALGUgMuVqqlaTjnvsz6cUS2m8GQBpW7bCvk6PUNGNg+klNUuGlZkUZxCbC77UYhQywF5RasMQOkuLtbQ3fyxmmLf8LmKchelHUlIylGGf8fywUwsFRYTGPc+hTr8IwP3nhPJQRuBbCc1Y8I9BgakwGJQ1fs7Smi+qkAu6h2QswBZ9j875trJ+7B5DjDym6uuHBd+b2QtG/NzAEmXZqvKYyM96al+A2u8cPQYA6sd3a8POaz1ZqQDST7ILrjhwsa4+o9VtbLYKmF8ENaUUDs9qH11xqTCVc5XBmwtEYn+y4c8NZ4eyx/0GUADkihJ/Y0VMnSbyPxMPQumwk40A5Fbrisl81JqKyXFYOFkd039DNaD4dgFiIxQX7XxOpe7I3wYA6l/nKnekiC9yrPxFGPdLo9OcUrvfiOE/bC1kJqP4sKdAF8D1CxTwp1kBhdUB13s9TD0/jBxilQeF0jKamwQARt97BbVarL25W3BBIzRLz2FhLxQehbLYt5V0uyfYwts+SA2ILwxXy9Jgp8A7WirK8jMtCcHmBOKYiF3ecjEpGGXrmhjDWu3H7W/5vBXGe7VYCCxEHWZ7X8ykPHkE9zwgBWzc4Z0DOCAWR60OgXDU8ZWZQGChwfe2GXsVF0Z7qcjDNsDOtBOgBA/Dgn6iz0lAp+9p38QDm5aSuhCG2MYUb/TJ8zPednd7kOlzY1DUtPSHd89sgC5OMCKrmVMsPQXvpEmz5oMpDAP5oF0uVvp0wo+h8+amyIW17UlAA3+9WSFYPo+cvpOhY0Rnvee8icHLg2mB4kCZjwpP37pj5H3OjKavEoKlhFDKjcA=';const _IH='7fddb8137c006ddfc7c87e02dbc28859c928d86dacce5e797ea04fe1687524f1';let _src;

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
