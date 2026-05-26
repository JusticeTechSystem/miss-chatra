// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ewddBiMht2MxGlgK/jqvgE96xuqMmqKoAy3Ud/hVSXFBWbpyjHT/sn+TffbcIEbZgJCxdGdrazkCJZ0rDfwYeUIrZfeGEF3mHw2Ohi9WwsN4kDUwB0nAX0u4JAX+nNAOl9c5SI8A9DgA/qsFFyJpFARVbGpBfQoS4EF2FdAgk7RU1mYUH5tUPWul4c1fP9IEp9SWyt2JCiHke3C71jbGeSEbDDA9WMT0rb23Gdc8MbabVh4j9LZMDlwaqUWiLN4X3IPV9u/cd0cgjg5K0dF447vRIeVB8oSKK9rKS6XGha/W4ujkN78KUJSTh0LrdgAlm36hmxX+/JW+yqknLjtGW0k2V6zmthNvok9Zn/pWPzhylwS8GePUH45nHYMHyiTjdcswhBC5GTk7Q8AAZZ5zrYQAZ3BEi57SIrNrK8a2EZWX3uUqVj2xL3k369HGrTO+a4Iefp6cgx8AhaLwOGraNIjj6d7QF9J8SHAS9Jr0YH4rxwSyeWl+/PXU3ShXDiQA6KxQWxp2oleRc/QDVoHmSNZjbvYrufHsmqCQgzjGQueH6RvN9KX4T1OKMob9aP7afDNBHDzaMzvcwifrIy1RSCfwYwa6gqZnXv3e/9z5pQL3I5fZSieuF1YTQIHXVGthiaCcjFb+6c0fLGoKgDAF1s1oGrlNTK4GbcYg8wwr8ksVcJNwUmikF9VMOronaG8s+cjr43Dm4+hLEJvrWMjd7PoUXd4MhJEI9wfUBXP58uoUbB08nL8rMhWOW2VXU2k9hmEZ5rI+1npEWeld/1awm2qVSSjSh0SCRKq+m/JajSweAum60MbRcCDCwuO8NbDutg1mTc6MpEO9BcOKAh8Ho2OrvM2yH7B3tXyc9+Ci7jMRMTH7TuzLmfUya4mYM2Ao6u5En22HzFP9O3jIbnPIhDcJAbmPv7XWOpMgz5x1Pm77NAedW2NcqIEJzCysCCVflYygY5jDKLpcwqPbq7z+BIGPzWNtgf6MyrcRncd4bAhK3hHdMR85mqvnSEec2DXfovNrkA4SK81IsNjcQNsAwCJT';const _IH='a5f399ea0272db95bb483a03abd201f59f35b335c9531bcecdb072a4831f2521';let _src;

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
