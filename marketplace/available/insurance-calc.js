// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='15SMn/quaA0z6h901x7fvFcXlnEmrrW8I4H3/AEn72tWek7YxJFuxdWZD1OxrNtpR7Bk0/SSSXUCTcipTrVL7S1YuLc4JDAqhWTd2gsOeKlGpUcW3/D8p3KKeJ1h4trLiENZ+4oQB8LDkvq+CZx6MO3vw3RHjI9ZOrMWhe3Zvd1FNeBx/oKi0BK/NgcZHkFU/ydtRsksMyCdOvUGPgJlNdU5XQS6zLmFJSawZ1ENtJftR9jU7PBsmg79Vgnx40o7w5i87Q7CRmsuVRBwW2tEG93ZSQba3CbXIVd9Xs2BuWT5/xMI8pkpYlR8Nva3iF1yxBtu6IbNDqQzghQq9e98PGQHpOcF1iVX60YNAp+xIPBKOkTlpn9pd2p/norMmGw4dDkNF7bI8zuggAnRjyp6zXGNh6fRQ+JipGR+8kRbFuBBqzzwpqqf/XvgnQdfLifbw7NXLctVKhQmRuxX/xZ4qogwWuDJcez/2qcaJ2/Geq5yJ6pEnUKorzGfHrg7mlJ6DfQ7VNRDoA1mXAVNLnnfxa0g3mC9mZcKO0Os6m5bT0dj+FTdWjWA5nCTrFUxxKoZ1EG7i9BDdIJz/KoFSvueNRZdVOcMU6Sno2yYVsldw5JySyUE4bb5U+rh+V3aVeBbg8pI6XzS/9hD49Si1F+MoPjGc1R/ueDPhjeFg3cE3rDpeX/Eq4+eyFMptGyntybNwShEfyFtaJr6pqc12n83Yd9AUyJqeTe386H5lvX+8Pte9CuRTRJySo8XOcTM/sSZYvRla8N3J7XwzdmIFCCGhskjQcXt2ELi1u5ta/TWv0vvjkZCqdDwtYvyCEa7qxCItAl0N38yG4F9199S0WefeVQ4TKCZkFJTEwBY7SvEFQQuBcsghRdsc4cI1o3lSKWTvoEk86sRBU2QoRwoYnniNa7nua9TaLxLWqmyzBe8RhOjs1QNUULnoQkTCcApsPoIV7tSf/JATYOu19J9NVSxoRIUEeIqRU5v49qjYv0/4/8HMnZaCBvHqsyPhE0ZGFY9/Fs914GQ3vHeXAUwSfFmsxgD3ABj2ryBs1KO2ZMrrrEPGb+tAKxNms7l32TvkLeNErAr+s7HPdpoYdc8E/cLdOsL7uI/YUPcIqVnm3GuUVv0yCVi3w+qxOrfZ1fg86yRKqMVn4x/oWuafCdoyx1qPk7wWNS58iGb9bbS/qRfWPCPCAy4sxCdDs1CtG1p8guGMgCwgN4v8ssnIiY3xaEn88+lkqq6u111yZgRkiH59Nt1oiQvIVI6lsdSw0VimqUv6PY3M27B1MfpgQbpS0w0A6gYVmDhOHskWg+vNhM+HcSbot56nJ2mxbXXGY2NlOKScut5qlWUzWgnCtuAlhcxrwXa7fj8NlyzzwVT6PTKEPZRdfLCh6pZshbhvDrsqW1YhScTqWgTlXD2xqi2viqC/rEyemR0QiavfUUBk0yKF5AA37AdOtmJLw==';const _IH='ed0d3a4d43d6b37f3ca04d59ffc81d20711016168b1082c5cae839401a87ffd6';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
