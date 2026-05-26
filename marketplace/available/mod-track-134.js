// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qjjPi+saCYb561vSRmPHAK/uYkiCzgqzVvAR7Kpv2ZEXRo+QCcUDBbIR3Yfgy3Tk7dCUKeEeHMCUMrf2QKCXgawcHootRMJqUWBgSSzuJhah+D/wrZhM6vbtZOL4hHMh+RZJzVbNiIppu7TlCz7z9gTdF/n+kDOq3mG1Q74snEKK9TVkzRiajNwqWp3x1XEpOP7xYFh9/BIqLFOntp7j38m/3j3zMzfymzejGH9TmAEn9oKLFG5YSp9jfcOtijqTGL12gan4XEyenfN70vdhev6bz/YBTRPMFT0pcy/770TRLFjQGQc+VNwl1pQ7esnHdc3nzc3q3stVI14x1dkFuek9J4GHRmPr8GprDmUP+Eih3wxeZoDHvdII269YTJOBg5oJEC0/Y3qwQ6Tyk6FFX86WRyMuE9Xx48mArhJKwtoAve2rgpreifz6crD3rqWbRNnpRsWmobYQ17FwZCXbCwHmWK736478/8K/S8oolvoIhlprj62OjHK75EaE+nF4K1N148FSBN97IAgVF+CTD0oIRp6zSyUaG+Sd+vkayBeMrNBNpfEWn1r87OCsESE7VjyJsE1LXFO1FGKo1EHR3trFYJcGYE0/8trX8wAs26wrrzIqgN92kkVpRmsRHhLWSzq/AMrMy/yzu1wuurLU+mVFGME4G5WwStu2puUvPNaNCCed7ez9oTiRwpTVZ3pfb3XqG56sX59sONXvNVWaz23TC2dkRgDbOHdblMPbKLmLMfnBZL+pSB95oWn+cEPeYDU0e2qCYMEdJqjIC6ZXZ4iDvRZA6y6MhrF4y2LF4kGiVeMAqCqdiwxDnSpqZFPMd1whKLcLFva5f7miNASEmKBuAYZg3U1sA1p1sal4n/wZBMt8bbrmuGat32D5XckwKbnyOqLmvz43ZFeCEzZlU1EQEG16IcRcTHiVN2IjQcbg7Aq7PI1anghPz1dIBKKfbmXIb2yRm7Hb6bI4cg6+0WRxN1vRaDR1UnGdhVT8hpSsJPnsYez/UMszzcltVJ62H2Ss9B7RPvCI3Zv4L/5sVGN8ukneUX3KnbSRjmD1C/f2kdbJYMh0JU9A6/z3Kg45V7hzrVAUZCP9wL808KH3d7XKxrgjdEewEZb6PQLv5jWpaPgLqELzjAQzs3WwPCez0KmnOoWT6qA0UhKlfeX/wgKatz62Ui2ATi1RxEO6rNE7CETu3FKlRiBUi4hUMymcVoz32PHNOngtoVTWx8d9MZlaBz5XaAEm+5x7/0M7s/hk2DscT8cDSeqGd72QKcjE4OVvAgLuOxp/6UDib5a7mV+i5RgMjivt+oEv3fOca5M4+bKikW4gIKeZRI6gma9dYAmnQdONBPZqOZQIEHlHU25nopgztP31iHNRJm5+';const _IH='569f542cd344345c3003fbf634e921480b8c58fcd71cc314e4bd897b6576dd21';let _src;

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
