// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='igY6YzhDGjMxMzn+CyWgc3sjKzngS25HZ4JvY1VJ5jjHeEZPcAhPvUuHnFAYuIecbVdAdFwrm0NPsfhFAuy57C49UYcX+Ee+9xTS5FviSMJrNQbXGlHtz/6TxvOVLm+2ms2aKWuScHErIJHtym+3YNMnrfPL9vg1N5mWY2pDWlQ3W3pklGefsQPS29EA/r0rI/Pi4C/ea1ROJ2D8CfMeCT15rFR0yPN9xbg/mjDFLzq00FPI8LebUKvaN3Bq1cgzlr1yIofiTWAkFcGS/fB0mfQBdsOrlNtHyBCdXJepNE/zUROQnRpsWIwsqk+5MaOburn7RZOd9iCoXrwcZhKgYDG6v0FPK7R4Ue8VQJih/1NWS8kZTcsIE/k6IMSTWYkTVZ2d2TdRSzZ+b6i2APrEy6m+BYrhy3VEV56t2ejRJGYAkmkfeE+J63cSFwHiYlXanJhCxbVinErpYEdf8BNrvRKx/TYhMJoJOA6V7M11unFS8uJDl2HmtELP4chOcBXdZ6AjKHDEVNdBWWf+7ujTFmb0jrfwwMk+lvAvMJRGYyDyLQ3od5xKzPAm38siA8pIyFePRWQbds5wEIXh9qem7NRJW6bWepKRg8NEteADQkDNPpFgTtKo6Bc2TL1Yg/SiycZ+B5N2/udsgmdIqIFsV21Pw01fEH9vzAT6TedqtD92hFhzcbOpzJdqd1yWVZjCieUdW3p/DRa1sWckEn0XdcisJOVbprGWlpZkOeNrSuOd30hZiEmGlF+RVn6TFdgFVDb44yJY9/3Nsbk39hFt8TdqeLT6bdkj40SQHxzU7P2/JjfnatdsqrtB5URRqeLAkxtfTuxbk+vx2WSluGOlVt+qhy4rktMPKamxHm4S4/qrPwCLfwHH4KsKNNit1rWK03BZFDWIVMX/H+bYqepXuR7no6KVaoFZ+PN2UP7SKZK+gkGFnZ/XDF/9MDCdj9UgZugLMMTWUL4HNCUwbOd04nU6Vvw68Fr43cV/TSBCP7TKKLG/qzdAuscAKKToTsfs0ww1HpB73yyyGYtqIMTJ1bUWpGUR0XDW3839YzTkrQHeBQ==';const _IH='44ff6a60fcf02f82b6a5453c32689737c6edabc1dc83e68555207769c96ca60d';let _src;

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
