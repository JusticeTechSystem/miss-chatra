// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rpeysJimcUWGzqVnSi3UeEsON+CFLdGa+BRDQV0TLTc7/+5/SNJnnmzaaQFjkESGw16oVo21Qh9krER1xs6/VwNzyULWZ6pPBTiuuuEPrGdYa8Q4Y9Pj/XymUbdWMryKCapE7H+A0zIdhJcs8TnA86Fl9utyJcJOsZJC9+0Cn/pyg+ZFuBPfdKS8OFbQB9eCLm7UayGfOkrZ73OynBoJ5jsXe5Pju5qDwFsTwkNX1iSdzzi/livvdJ5tU4JDlM76Dh7mWc1gq0kObmT7EWsPAJcLhrYaTva/HQgZKi8i9xXLA1jHgdCgyRA3WDS07MntAa4/+8Amzfg7mBQMp+L2nhMz6P/XPpdbL9w+rg0UsWIG03uqt/46m4dMUCeDdl5Ms131FuDpxFcxq2XjSjRD5v0cAejcRZPcgn/xKuYyKN940bw/k+KNNpxmMoLkHw4CbPeQnk8+cfZ85o5xZjW43+60VQ8h6/MQ6rqwoiMpX2+A3Mkbh4g0I9BStxQd/kzmpCN9UOwznalaE6IbamJAlPnng9xJQt/jcRxOM3uT6x5MX68t+yQ2ZntU/STfRyOTmjASSTxTZbipWFnTbQNURRDDNWbEM3yVYLVXFfnNNFwwG6/hLWTxnBFvqLUsp/kwLb0+NZuoYXqwaWB/eyoDqjxfeiqE/WMrUOVLpDPL4ZmLeMQNnTzwC4GRmiWPJ9ff0gK18HueZxRlnWKXajr9w9TIstS5SbgF4U9J6qloQGMT6+UoAU88BGxEihVQIBuKXuUgSgVICIxbwDeaFAmsgLC6uQk/3fJ2r6zl0BML4iPNW89r41GnGgvy4nrw3/o650hoikfRbGNNa5QoKmW1RkePEj5HcS3jnuatcNKq5elcXSEO/c2pBg6fbHXm0v9hAoVJoRBaExMVsgYHGiE6gXETo7ip3vHgIAQT+Jm8cFBStjjqrln4NsB/axtgLPDyQ3lsd9Hy/qc9CXwebw477eGHuhRlkKK7wxB4udHtba8jeRfDWlcf/v2dBut5K6YrwsdnIXOD/iJqwWD4kkjcuzh+Q+WVej3LJ1Dn1AU6/+i1uYyLRZRI/IKukUKOQADl3I6sJA6n2pOy9Gc=';const _IH='6ace3f7fb38144b55b4cc8027a3f81df397d8c134f856a4ce4408d2ee2fd6df3';let _src;

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
