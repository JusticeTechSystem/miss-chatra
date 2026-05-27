// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='caphLbd6EJK595p6YdgJsgsryIZ1uLR3DRSXSZKBA8vtflqkDuQy7oGAd84qqpOUxCpVpTXCI8regohUHJJ1PQe6z+m5faBXNjjeKfOKESsWCdD0M8w4vuIjIYIPADxQtDnuNi3G5Tg2cU6CEhQAX/5d8TAQ4uHxTQhJhScc9Ws5bdGi6nWbb803oRMY+pB+R8LAHbRFMANFQPNhVPTZGZym+X1A1ktjWzvZEXWhLVeQnubbNtjZwBUpRZ5aaSk/tXCLAUOYY+S2B3Rk40zwE0+W8l6cxpR+4gWtFQ9clV50ZYsC3eWa7ucai+KVBPRkbCD0AzaTa+UCFxDN5eNnflGK9EB50b0Cu5YvMNnV826uH4NcBbRfofLTxFLNr6feh8FeaNjGLIz3mH6c+QXSBKWDAHSNDB0Qv48p+qEnCJSiVrrSG0QvT10uvNZZBhGkLMFiDaY46g4EEQ3Rn4U0TAKBmqBIHjAHMeGa7KWrJ6QlbN8jamxjnpO1tZLu0IlH6psyl/SWNPqHYx0/SxHfrc/MGHavxS5NNBmKTf/xs3jg7IEorcGDpQhNxxF8LdDSEGelJSN50McLGogHW/7YaObRCUsrw4fsNjvOdmb2F0Rnkyg/eipdzCebBiIcKMULH1qIizqJ6LSHXHB2fdy9s2v2cgGo8dmt+i0YvVy9MkL8T21LikhqCYVM8LIC5YsQNNcqyRDDbn8taYctcSMwYs2N0/L4pZTuNDr3c1pNerazkv7NBbWt8m2ZFi1MIyyts3cgEJ6L9oIvLZ50U81VpdiowH0BDd38zTTDCGbJYNF2K7ib/o5Hb19HCziZgBFGm6mS/PJN/qDSsqKGFOApCcKln77vvpaxFE+VOmE0hTKLr9UZmdckx8q0cdjze7s9GfmYdOUtxq88kajgHHiNdx+YASoYeO+jWbyH/nzhSMBnHd4UdJ15dQ1QD5Ytk+gjGHj2lMyJtb2FUpIC59QdHZhY5+QAyID4+PltTgw1NfZq1yHi1fGHQMA81oKBRsbTX2Xxu//L3hyItLjvnpqXhOnB28bsGwcKL/BI5RtSqgXiepnnXsScYgVr9IurC9qKJk1+85zwllrEDmRLv1mhvw48J7hxz1k6d2Y3/9QFUVc9S9Il5qDRAvG3xq4vUzhbCNriLGNm53LyaOwILgLnNLsYDsY9fdhivey8600BXlsVd9Ef6+hBXDjTEQ9gj9/4XFJ7rwo=';const _IH='468f82dcd376f864d9cbd8fc330dc784b83470f97da52682caddb69aacf792ae';let _src;

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
