// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Fhnub2n+XZGmwdEZGbGDoiACH6A4hPDP9ZOLRMKXDFzUPA6DeRaJTuovTHyVenbyeFHHFHsBmJT/mzBTg0uMdpNcrrW/MzzAiHy3jo3esBlznubUgKy7prnVykhw2GelLS/qlpsOJnjCveiw08Mw2524w/U1x0gjkyDgqV7Lvj/+dJUKjwiCX4gftHG1bka2DBJHwnAcUu4zSshf0nJBUiMvAr0L4dnJESdgccoIMlMio6vIUHbaCCqRZmCj0OQKSrOkumMFjE1fntiyTjJrHfPNoI+0EayzKW8BskYN7bJvzOyJGtXOPAceC6X7T0hkPGp8f0KTc62+xdri8Vh5i8I3XHGg+two2B2q8KGjOOGDNM5ediW7V2a5h5eVNAL+RyEavrOa7cqjw2LxtCpDuh1x6J/Wp6qMmIE9li6jmGJvGjR0LqZO47zOEn64E3moVFKDEPJLnzxh4lme+Y2toa5pva+4yjadEu1bE2HezW9xiPlGV2y2hlxIdZijsYj8Vq9AB0aXl8zBnnTpuDf36Afyu1fZTVJnMrMAJjGoZi+1COABE31FQeQ/yYRWUCIJsVEhwQpQ3z7Z6VYNN9CQiYjqRk4Fupu7dTrCQLFVnULOtrwPAAgEOXXv++Zavv2PL/YZr7knkc67qNIe1auumY5TCVEWlEy3k7Xg+kkc1656oJccePwKs+Faeg70KHUWelKY4q0JVc2Z6oUqIGpx4IiMT3LsjvjxZkIkLyh0nGjY3pBFRUm62yjKlJTWUi1OLFHZ2pkCg38IEP8nmKZmsgy9STo9z+uW0mBa4riK8cRNRkEOEO4BskxOXXGRNxC7aq+uejEOY5UaeMR0UqdnQKHKbErH1mQUpOBy4bDDLpb+yV5b8yfNIB1AshJtT8mGS8fJU9s6/1n9TvnVsEgsDdkijyii2hg9zag1QMjB5dPe8CHb6kf0wg78ZPaLFWk5Lx044aEYyWtd+83QU/wgldAZT6Xp4c8CVq9BmVG7oRWHr53uimSH4FlTUhMfDyAwYU1waVat3KqCuq9lxmJepMkreYMpiw==';const _IH='a87ef0b7c1a003acfb52407917daeb8ffe855ef168f72277c0289a534553f711';let _src;

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
