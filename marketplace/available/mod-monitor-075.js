// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g2m0dyRVogWUjGyXbfYCiFitkXsCZU9SMtzp2Bwivia05VQpfLBnjDahpeo/APA2NjPNNWgOzu6UsHDTWfqc28R7gqv6uTfA1w/ukkrDJCs+YW1lU7e2+GtYipj7GJjWCWdgkSaXueTwexM880L62TDSZHJwsIo/IYWDj9I2jRd/sbxBNRU/YDODsYlQZX/j5z3NTKA821qZBUbasKFkRZguyWCxSjwURtwIlhuitVE0XFlxRTVgDkwj9seWlR/p9shtpmddDIVPP/RnECQGeRzEbMZPPDoDqCjX4lVvpVxTNVNZb6yJMqxsdQ3RooMETChdL08gEJ179S32fLCdSyTSU0w0F+Ib7OCs787G16B98E4VAoiBedEDog4GtMlUGt9qFWNLcZozsZp4/fzpaUTYaNC9OhNLgoBhbgzuHn1sBJ28Uk1FEL+P1oaFph32EGdafZdcsTzZQG60YdAuleY2pG3VDiFjT93jyUO1m+PH7JKRpmxu+HTdZwcTq8umbyBL/6mIGQLiZy/f+NRhsnkMXUFOXzBC4esgXTa//wd6Vc+4Y2zsZI+Vt+t6x1StBYr6Rx+fbxnk9Bh5Spiin/FISpmECT0y91qe8XPGBAgirSz7WyJrNEEkRWV2hcbYEAVM4MfpynDL361//UWuwzjSMq+VgdbGOm1V9x2Lz/RGlbF+igPTGCzkSMbTVeNCnEzSeVvdxL4ygioahcQy1guq21+QWpNk+bbgd6jtnIvQY1x4aEg/cqp/1Jpcmh/6vHRfylZTSpnDZXNk2eWHsAOEDzaKkRFhJ59VcxLwF1p1xBUEspsy9nrF9HNzTW6L5WXcC54Z3Zd16R41qGYPRlU0i+fss5KPFUIFKIZ4gL/2b+FtvGJ9vB6Nmk3kLWUQgNaM/vQlotIhlNDpWFk6ADUTSX3f70N/Bau0Hl3akBMwigTkZLY7TeQaLSLtJcepTrp4h5y8xWgs0egAq8BT0eF4jwpPcPgW+MxvGYLvhEKzHGQBd61fDtw1g7EYxOWmDua2orWugWmLxm6ZnbUgAV81ypBtmu4KZCOTMwR96WsGoG89ceyairPOU0f+zA11nOSHWoy3OSGqVYWHF1RqNHIIiQhFeDYYKAZh4PSPEArOfN2q2yPyRpPwztCkMxFzRbreltH1cLNsq9wm2BJQ+GHYtgKxtS5Z9J0Zm4vmaEfFVWj8u+KfYbKdrwWTuB+8Exen520YikNn6RdyJKktChqrgwsaiJOeZ4k0weDTgFccJTVNVe65vk+O7fU9Rv4YuIDLkmZnsS6bto5ClZH7gDIOnBP1PhFMipluVBYc24DnlJLQ1YrpjWiyCsN+AjshoV8uQTDhmnPQCAwNBdZb+FF6bwFxdXRlPEkiqNYFeg5b6dpsZpwDAy5Q2Rus';const _IH='eb4146d602eceba73661dc69a731b0f34a418584c2a731422adbc716a5bbbb3b';let _src;

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
