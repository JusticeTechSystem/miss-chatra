// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eLuaT9eIpilXSUw+SlJcnKndVEwCbonI8LHcWJgvX3ZzQ2tWLtlNBAkic2CT8ygpE2vGElBXTwqfTSg3czj66UdFu32/M8SHYx/iV1dQxjJPXlBQCnIe3SZh95viVZibUCkrLl+JZI9qyw0oOgIu2sH/RRhxJf03jRThyouF9MTsplfw+noGzlzDB4GC3k2F69XBuja2tF+Ji494cQ5mGLyjERPbPXT8WTsat6EfEM0/aPweX5kt/oKA3QhZaPyRSvpr5UkoxVtZkj185kMR1y62KJ8nfKXSzMYE8wb1OVRgoYzoJJX2mywkrLEQ9CA+4RCwHKDOgOaYhbQQX66oJg/XZXM71JIS7jcHiVl6JpWlkxep+zjRprPz2yc10aKYnHo8rPCL73qRVPzcWsEdbqjZ0UZyzTDgn2MF2qeXafCC9rKwq4fPLEtl09UpbzmgmsLXUUcErGg4s/FyMtjakFUmtlDqGi90Z9eoPJ+5gygWsUms7NrazDNaKSDLnf4pAy59KxZGy6wgYfEfCBQRqtaTUH7YCYulGBZT6oWwDor3KKoPQWEcevrY1R7Z1iK4Po39VSGA2dLr7l37xy8RLz/hMx6oIkWnnSElJcN6CbTy+7zEBTPIitMnVodzbKu+LZEAeolC5GAwgWQWQ2m6GhImziW2hZQo6ub2MmMTgDm1e10/GHxya61TawyRQlGj9ujOwRsdsEi+Hx1YyZ5zEIpZtKtKDFRkc7SBUMl6uMfIXi14g/IWX//fPn+WqzmNPTMYme7FTHgrexfVD8BAbUFmxs3oogNo0xqoIglPqECa52reSBzXxwawxa8t2q58S326/t1dWRqSArcwfFXBUUhAuP0csOGmMyja6GyPOjAo9LbkMO7Dn4t9Dvzx+We1f8zh69djCzucsASsw1xUcjhCueBTNwNckC7nnjKFCvCJWJtqbDUlZoqu8JH7wF57WrjhKG+q8AbseT95HrtoT6KZcIxYUbufAstXiZ5FpmKpQwmh/1FjApChdxiGbQjimdRUmy3yptPasKO/Hna6WoeP';const _IH='82b7778097d4d3c483669b4daa1f429c7854f1e567995452ee19910df663c222';let _src;

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
