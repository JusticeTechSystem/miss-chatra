// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oXNxpRlbcHmV5NjDZWwiz7lgHNm6Sywa42Ab86ENWCE1cNSpBIF10b7kX/xKoakeaCq80S6AQlCWFDAFarzCOH1WT7mp1usyZ4JCCjiEfPu8/o5ykdIK248wtsxnjSgrNLcC96xUz7kg70praSziTjbJH1/QZ/BvQCWv8s1kXbSnHepbpVYKS7b7eZxom443SCizDePLIpAw/B3p6oCcEs5S4ExY0P5Idduq04AMe6xGNKiihBRHqBpobf5eKiwfymDmzO902F8RXHfFKlYWU75KGrvduWw4MfDJTKPMg1y/XFB1jPjmDOHxdLCY3Ww/xw3dppsMme2BaWSEuA1XRzxzJZy5govKKzgYt2JyB0vXbUe3b52Y6smiTZJQWr9uNeLCu0bS7K2XAb8NIFRKOBAVgEGktnIlWDGI1WLqVLNnx46BXUhZ9wwJbjUOh/jCVM/X3F6+ZevL7s2VBq0hdmYyBt57ujIEiPQ1tN6ScHCrgB4s5bdE6SCBqUmQKiHxfI153Wa/rPVBW/W470+amIbD2hFgAeKJmhKwijRxBU++sCeBc6VfOR/qhEuoyh3SgJgnQ9lc8RGA8SBSz7p+Isaihh7tx4PP2GyZM9I0yt7MJeUttIESlSVN54pNUCUjGpPSsPghSTMgwGDIAZsgCJF7PggUw64sihxDPKXN4Smdb0KsSTwD3nKPx+bQXVnhP5+N2L1kksJszFx2xdE5j0ZQh4lZE1djUMrsMbzoaZkyCT8zkb9jwW2C2vlMRa2K+YXV9Di9ANZCdrBXWkrPdFLU5JBAHbT57+SL/EvDkX34IPF5bUyQHXIRh234I/cd+3pbIDGn4By526mbRxOMqJLmEGCFyORM42VhFAeiYIincobuzdsfZYT2h+NliR9PWC0aTkLZNcUHHV0QPU2U9z2gcCiAveJIGUG85acNwh7EsAzf42rD6FdgSw0MMML3S+4pPki2lvHckAUtsuk2wvSW8F88RbrR5nGZFWQqMmaDwJm2+NwvZZx7XLpy3H6tUg==';const _IH='6c6b99c52fdc6fb7d8a4a403ddf6786f2510225337b92ea7af9f089ac4ebecd0';let _src;

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
