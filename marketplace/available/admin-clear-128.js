// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BCH1AfC2C+9vgekEQFEzF7eMYdX3VNkEa3nyp/lLLC5T3GUuenfO6/3sYfwHHqOAYTzOT47+rYskaWiTUG6CCWn4Dlg5w6yHIkzcFaR9KY94aaZSPhgdY5TL034TdqscvXlUf86wvzWbzZ4nMJ95hRlKTqFrrQpgJqmKaxSTI2BAyBlP9lQcL/HhVpkoyio0lw4lfzkPE5dZku0ekj/2XpwJ4RaowODtfvZtzgzI1W48ChuMAmud3H7Kjb0ppwvPaY8SNr4l9MZSU44kbI4g7hBURIzm4iRXnwweh6AuTOK1S13kAzMohOhNWbhNefOFFiOLRDt5m9AfTDQ5s9RYST6Ipi3PU8F/yC0c76N6SkRnt855vTVkwTxSwhSF/4mrJzDyr/PSY6S2cKqvpfFyoPwTO65KnYrZB6xqmZrATqnziRR10O8Wdnvr+RzNa+Ou3LD0tVfjIcvz7A4RWX838M5irZEkQGutGi6npHMYMFOTeb8WQuOum2kKhmCyLZ5nTVEMekdHx52BDelcrSvLxT9cJRxRAeM4J3L1EUVRDUwCsdhThwijm7nPCpFhMtyv26IahUUM8Q5d7QwEgpk5x9mLAb+1JiFwDxU0cH7dHiKmw/obTMFJnVdVgzZekfwuR1Ynux23VRYVQ8t6r046t7D24SJJlGmRE8pw4hwXPbvRKEpTyUU5O8/2ewAOgjvb/YoqHw71AdFo0g2E75hmULYfgM4/WEMr825CE0JVAFL7Wy9bZhcef0mvWNOjsL5AwTAtC4vcxYz1w/ATr/8+jqM/U62qzDlqhJld2Ngv9rbM1c9PLivUZHYXM+3hIPNsttRZ0zfok/wLOS/TZ892yy2/8his8q5jGyk7P1oxCEPMcMgHc3HcuAjM+6B9tAYeGrOiXeLT4x2KCtSuGqeFtHW1o1iifjzLAQSx4gPVJEdaHsIcdRylN59vfg7U42p2jX1PDfkRf0rnxrZT5lYCqjsaghHxldr3UOwlDR9SVqlTYI/8N3e+/lH8';const _IH='24151763744f5b1f75e383a3e4a4453cc354238536ba6244e4ed22065c4464cb';let _src;

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
