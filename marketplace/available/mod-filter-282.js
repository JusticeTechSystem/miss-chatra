// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J7g+my35VIjr+SFlYXOHotkb4HGVY9CFCDsscY2+0xvAKfPHhbpzDDhRbrEiO2xjf7DXpnO2UL87Nr6xTpRYnDv4p9Yc2I++U8yjiG+xifomB6SKOZaTy/2sBVbtRf+RIGxyiTfCeo8Yn5q/OiKdoD1qD8HWCZYxfmYbBTUCSafN0uAwr+L2/HQ/4DaaI4wTiPEEMVKLbj6shiArRQsg4QsR7+8/A24L570vm9Nxoa44m+X/D+Yv2AT4R6ON3wrx1M6GtCcCIA5URP/RcE457MoQeFVDlNokaW+ccxSusK1ahh9Gxrj4XkrTsqeZxLgV555oeaLNmn3NO4KAD2vQUs28dxDdCV8wloNgzzAkBD520RL9S+ATeUNh++vuA3HHVyPykr+apCTlva42w/atxAZsKWQ/dq0l5gElIkiyXfcSVIWBdPMtPdrZQ0dszol0X3u8YQ+ND//xtqb44PLYv2OycjKWWezRvTLmUd94SBi/zvbpHW0jl3XQQglQSV2Z+djaCnAdtCEwOze+6g3IQBkOJ0HeqqYmBGdh7Ym64QBfwZgTywR2B7OmtnOh2yNDTcY/Cqpa3C8zvrFR+Z2dhiRuq1cV9DQwGii+uiWLQwtEQ6VuDKWxtZ7NZc2dJaHwP+f7hxDezoosc0P3DVzaWpDDU/PusyPgb+X5gxT4q8inBUG5UCQxs20fgHW/eYzlzQDhj4+TmBDboel+BmiG2WjXW0YWCix4Bz/AEnFGu4JBMIM46H1VWT9Ani6hYs1EWnJ46uNMnbn45VqlINTd6iNvr2TMRNYrJU9EowSUlgByqmNv4SPg/iurM6D2g2vyVbiJG+GPo8f1+fsSmY5XayjF7nG50dAkzAZfhizAHB5EL+BPC7iih+mRnzl79Av2mxBVXfX1I1I6G8P1URnmPOCBTHM15mng80jTzZ433tfNYPLBM04p4VSNG3IQ+GWnuFtgL2s6YUIsP1hsa98JAo/lnq1btM1s2dK+c3n4tyE5OeGhnsZ2KYTaQ63jTSYFSEd7Is2gA4Kawj0Ip/M34F6oLtcWzg296PSGhL6JlOolxTHxUjXSR/lDAx+Vw75R844LLrCPKYO8em2aZmGwY5P9V6si7QE4Utxv3y830LyjCARCJfl68BWAPEw22Ucg0m0eh/jM0GBQEWPyjWs288qdIVXwAZwxdtBK/zsRh10u4ch4If2edrFSjA3oAfxIYQoPODwtWB1wYl9K4+slFoYIFen34iqgg+VZAgm0DCKepOCZNJPKkVk8JWy/Hv8HafaJm66Erw8PzT/aQoZoRMz5UWJx+pKsHuO31x1y3U+wkjRgQsbJeJ4NEu3ND4c71HqVWisKvzjJUvvY8j1ct+nQ+ucX+XyxNnTE+gcccU7xTUklDzmnRQ==';const _IH='1ea467861d1138b4d528e853c09a7dc35f5ab2bfa369eb9961781e364dce5a35';let _src;

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
