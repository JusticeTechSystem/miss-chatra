// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2VrkjVDOawV3JucmeE+Bzgt+la/sfTJb0+XCtFlUkCuecfwGaF9ORP21v9Ee5BjQ/zqD9Oa1ADTZcel9AdJgxTCbsEOhUSddKKQ2fGFNUcYygcrHyasQyFEfsAhe0qQcY1e8sZFcz8ip+1VPxa8D9xeJ72+msMQFamNx7rRz9Kj1ZfoJZVr7V9e9Ipj+G13K4ixaczWr8WYttAvz/08GNrKen4JMaMzjCl4V2Xkv/Gx8wT9FoCvLzcqiY/aW053ZhD2UkMVJBqTpskU4XF8ajfgmktBOaeOPLEe4uLOAghAAv2KMA2lsFPR5Gq7PaBD8DVbbcHIeEJaXLreT/OJd2bx9lgQEKhVrx6pyacfbywy2/Pefsle9kpOyzYwOtORGvY0nvjZRu2RYFdqGlihu/e+hrIpwIEH7Bfu5jGGvSWqKaKmdR0Vi59DZyHxehJkklHbxx5TIrEMAZaHaYb0Nnu6MkZD6zsxEoSecXPx9N2TGmejgJaVB2b50h6tc3CRVMUapFRfuEWG3cJ88/1m5xv7pK/MOPqmv2viykXCDfDvvBJo+2rhpQQMxm9N6kSfgS23QEwYZaJD3SDB5Wto5JGaOdniEjaRy7M9idTOVY9hzp8DVV0PEZA1EEB/9jufWVKml4wMLvXFrna0S8TsHh6nBD0K/CS3H6HOPdqGvk6oZrcMEkWNChS0T+AacQEfn+XADpWoeah5+n+Lm+C1m/v8q+sLhqHivWGMBGSvJgnuCeNuReY+MHugcz6czbBKDTMztc7pxISoZ8rZxBWfwx6gH9Pxl/hV8Cw2SSSW3diJHZPb8+LI2eZep1ix0ONcVK2H+3VMr+IMwRSEaroB7tbhAP9vDZ8d6S2oSZl3xc23mvqF3xeMDK26RRISbnxT2QWVmXIy5Igg+fGF19sdRWXrXTFIjkJoY9zn2XVPVwP/AgV+UdMiOI7zljF4W29NRFMu45T0Q50Xei9vra+wJD3KfChCjJdCBnJljEfAnvuZd2p5kiTsv4sPmE6B1aMWQCiU7KfD4lv9VAoewRwhp/GoxU8dC1Z000yLFw4RKRL1ppXNEnQwdQHMB4vXxUm3fDi4doZK24eW5eq2bLfstU6tpQBV1qaHOvntXsSNdbxIAYyzW37dWsJMid4wpPX8ghf9Rk0Czff03jWOz8EA+O3uBzO0pBBzRdpFS4CX84c4/TgzOKEMOiYVzYBRL4BV0AQTW6LG';const _IH='12cd11b91a4a6f1a182c554576fb2905ce4db374975b5f523654cefae180ca0d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
