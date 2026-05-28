// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F3siuJYfMkP07Fe5lmnYQg4v0L+OfZ9ez3455ZMZzArxkesVEl2sNxNIILXGOVbEFwenQoTFXn1gck1Fcf9nXZgxWDgW00QMKE4gzSsxN/LrCQMmv7SQ2VbIHIfmJUWv+RMBiSt1K/2dHOgmEu+x8rxLnNlEU+33SukcRJwQW4zGKjsrZYidHY0bVEEKkOI4Q6CXTGHTB79+R3xZ8rFww1hfnuvPG4Imxh2hMvMzYpOxx50PmF8UpUCfmehftEaj6xc1X2Yp64nREbMItU8b5zDpLgj/YqukvS9mTsrEO4/bfTZKmn8PGcz/LFJ6oj2RBnRFSQyG9iyHqcdBtjA1SjOXSOn3RKekK2mO6mPTpkL5KQGAGzvSni6HuJ4EdaT+l/ySlmWQ2orFsCwFRtuQcLsBoB3o8U3Y1K0X0m8BD9XMMuhcr+f4KTR1AZoDLvnBRKICDsEW2AlqzT3dXKwxzkY5hnDUlKIR8mppi8UtWLHYZoaNSa76Dg8uOfXi14rCdUtdQNzlWkDitd8eiJmLfmTXzUj8eSIY84wrCWe7rnmNSeD2oua3V1d1UB5u3TaukSV9aJ8WxEzGUrgrMEh9rd6Xc6E/CASSZvX97+BjCxSKtlDs60lUn9yeFw87NK6wbVbej5Xyn3IFd7VWDYqrcRYe+4Lk5pNRM8il8X8R4+hBy/Z8XaZanKpaIkDVIV5JUfeBrzXTmaghbWjdrlHuggPtUuzV2mIlDKwL3Oo=';const _IH='5b538b33bb8244bd2136e6b346bc45411f707d7b247e54e73818f280990e2ea9';let _src;

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
