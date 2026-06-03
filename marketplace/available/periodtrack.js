// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k3mfpdUX0X1n/FBm2TLyf/rTtWWdWSKDWZyght+IaqYzWwDrOW0JDxn0e4uLH0KFmPOX/FyFkjd7IyHPZiY3sw1Tvr7zZczlaNZsV2qYfJMwqQDjj22Y7zQ3do+bCYHEh7pqaTP4jDZiW5Fw/WPG89PnU2yswZ7qtCp+h9Z1s52aMC8yMjtOcqNt2xqA8lOTIF6WFcUmHnvckelzyXPRElzYBbNkHz1U0UoILIJCNZx969B/Gfme4yMX4fm+RM/sUX1MGfyX8aEov3qb0u/ZT4cdKRtTT4b3zRWBHER8vFSyOH0UJ31GyeCU6wGppnQSpcaauPkTbLwvpX7BeQMVNnNaUKO7YsKsW9kVsJRrwa9cGMdeMejcicXI12UbuckXroLj4c6JSIpfxb5bFDBy8gk18FpBG2zemhorGD1+EJvV6SVTqfgBijJk+fC1RR9wRCsuuiz1PQ4QEyvtXQFBoS1AEx3SfUNPSReYyTK7pX/zuE6PyCxHtC29fV33RNA4H8z0t1WrmtbiI6kaRWsBI599WMPMpiW8SXipI+2frcJLxbtm1rzOSBPs/KoYy483MjjjJMMTiN+mvX3v07FBhaHUNToSljuTqONH7RXgZAZtezDOBzIFmfOc5d64XOdy/h6lrrAAtu0d9GeqHuFRDAF0cCo+YbLI9aVT6hwp7st1jM4+K777k3+ps39KoZWEAq+MAgGcdwsjU1sgNV7YfDOom7UuXC6wNodrJtntsgZCH7nm2WCjFrlXwJDWpUs+cqEJQnbOaohx1TrIJSwGyqvJrvL2y8bxUqPpAtyfgNV8Uc0L7vonV3UM22V0UsFQSqrmOREPgv3MIZin0QtC3oDRzDU4I7a1NYbaji7spRsqdDZaLQM2HahJSyw71Iyx3fGkNVeWV/yeM2XBqRaUT/0J1/N4qij91lyVNNtCisyMlUVz9z10VCvCDU466S9jlVyjez1aT4f16HUE3RAAsXg4j5+iOmXe2EFwiSpd899q1H1Ubp1edNywv2jbYi0a0uFcGVYqWTRVSIYqVwDGid9upWj6cNmn/xM1zYYWnJuvOSEzzxwBScWO09zzbCIHq2q85Nk8IaqklgxBPGRfLFsPBABOBS54JZ6iOpLOFBuk182WHN9MEfl0a3kM3S63IIFXTFW3WJG1WRAnNMCH/rLuyGGfh1CF68B8mKUHnWeXGMJVjZBdnBtSrADCM7Tc5ldGcSA=';const _IH='4a5a56ab77db6812875a95852ecd9e4d67cddf514025e274883918d8e7077749';let _src;

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
