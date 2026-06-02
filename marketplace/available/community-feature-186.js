// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nYEUh0hjhA/CoBCQgQ3NC+EDuYP3rzfg1t1xW2NHRwSZ9toMJOL+LsC/UYCK1dTrMd8CXnDjyMrTC+5qXNWK4iMiSSoso4g49yBAPvizWKsyxX0LACm/33QNF7ANUBse5JPeOXFtmP7XLXJmz/a8f45+1tqbNLOqznxrw1ZFYx1/5OzTI+5UZze3dTgDMmrsDhmcouNUeMWaSy4a9rCUudys3CfZnlFPUJloLxweDF22ebRotMsu6ONc/YYER0+6/xRZyY0WV+oKyz1d9S+NIrgoWxNM3B1uPG76ZQS+tQAq/YX4rplFAWYwZjmry+T5Ge6rnHf1q6/G7+GTtmJe7RS1Y6hdTfoTEYHselxpbm5FRMTbWS/BH15eD1Y5L6RT+kWqnGH1roA2w1LWsypU0rkc6cvLhn23/VyHVS927FRj3B1Kya8yPXE1tLe+bB/qvzTz6wyPh7cwAsJTfDKXhx/B9KkVAtwbHbbBXk9WerLb34PwrLmHOFgDyQ/t++VgvdDMF+SaLpo/G3pAdaYFXTq+hWt3MXC4XvfNUCjSJ5XRqv9G8/m2bMcYO66wFUVdxZEdHzx7MdH9Onv9MfuQmHS9tAgEyjRI/mVMrtgRaFOnar1YYBiV9TxdxzN70rLIv87pS5DQoxudkLDIgTGjvy2nGKI/GC076+tLUi9lQgLWTTdv9pY6/m2UHBAKlxGaNZHQUBIMDo/VJ8b8W02lVU3mCvERhTeY';const _IH='9604e68cbe1b67c108442a2d6cbc4f17a0388cc723b51a38aec89ce3e45fbc83';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
