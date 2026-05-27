// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ion3CjIEKkL4luLurJio+uASJ0w+1wBST2sareA0qJieGavWJUQXv3F7Y21anP57LcBM1QmTnJBhCqKL8fPDjAQgwSGbyrQsDE6prDk74Hp0P+NhfxwN/4aRcDY+ccXv4d4RsDBaIEfGxg/FLXCbowOYq3IFv+TBnT1a95sQgAvCMkuElXrzLpfUJ57Ai5DIZ5wq8GK28S6XRlujF9wfxAo5BEW3oFnD3//f79acGjFlIczrrfxL0B9Bf/fp+GK8X50EbbBpU5EYvSHT36h+FH0H80b/17p72NN1708y+Q8mcXNJL+UCuFBFAbj36m/+VjPvhDSFiHu0F6yZceG78ffsslZMujncHrzcKXY1vll4zRrzl6JZbNqlx8X+YXfd+q2m+BPkh/lSXNcfgntS97fEOsRSFat8mFy3jstOaWL09bd95vOETJnx8dbuNgYhMmnbU3G3RlbNlopEM1Zb8+BevHhcXlYDOhUylusn8LCHTlNV+vH/IWkd7zfge4G8AdPv8YV6y476bPau8DMnEw8J4sm1p5pVPtcme5ELFwfNL0/zc1d2uO/yRPGmJGl214jcA9x+3/QnPieMIZXvG6BI7td+HQHc8a07ILvI4GZCVKUzCMG0j5FSRLLicOWHLNyV06Ko3KWwUE6gKpb2tiuUob8fxtFrsB2tHQpa7t1TuxwCXLhrgiveFzuTwV6zaydBCdhq2hZn2RZW3MEKwcg7KQBjDtPDHMTT7Rf52IkQqFuxPT6gnDJNUSnMVDAhTHmKxpQq3gKmdfm54SHv4MhaVDnM/CA+MqRe5J9/H7Y7YKR6ghvZrQln8sjMgPIoLWw8MJH3W1wLACy611vReoeopmlXVUt1IH1ZQzgxRBRx7h5eiJJv/BYOafbpNMwp9mLJVrGjzjrnsNals5aS4S7J0npSxzSpeWvVdj+ODpfWXfyFqP7dK6YFpofvkRB/vtwA7Qb/Bvt4ShiEqjMpUWGQewV8xluC1E+EvGikt7yY8rLWEi8InoYznOs1RB0lsUZSQnKeaDG3xmzW/3bmfFtyqJopSodr30PZOscdLzXHWIE8DabKzskNDkObs9vLkY1ed0ST2uRzapIlClPx1Q/VijmiqFWO2XCEqtSTeXVnOKjejFtjgAkGjBB2KCROcnxGLVqJIHxXQJloce87hKTxSKNUZ5YgvR25ExdUzwPj9TTASdHKwNnTqVlxDGY6qxbD8t3dO2GBIjJ0KObQyMrU0gFoGMYfXpeDlXQuOiwZ92wUDaNfmSk1DLd2gF2iSUcB/qbRbfYgBrSwibIj/TJYFwKmRTwTIkwtoF4+ShKvJhkvpDAAxIHiHi+tFxFEV57A5BEPVTxOJjB4xqiIHboLXAuNOsH3q86h3+KF';const _IH='a152f1d05fb64f9d0c6657990527d170d365aa1567e29618bfa60d20424ae4ef';let _src;

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
