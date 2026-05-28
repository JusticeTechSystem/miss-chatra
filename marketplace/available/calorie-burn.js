// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='we2kVvc3h3PCyxkMorgNOvUOrkD+RU+iAjGkRM+LpTN7uQCD5QI+iTeuiuUR0VhUy60v8JhWAPleYIScUn0wklDd+PbsUC2GQI2QgsdliWCoS/qlTa0uwfPUDQ79beiPuYiU9r+Dgk8+p2c4sO+8866LIG/CP6D2fqM8evpeLxZDq2iUnadY8bQz4TDqPB3995VQZFcjx87ljaBBxoGJhUeKR41N+xDA85LCEsfEjahb2vejdVqWel9SoODTxTYF2Z+C6N56ZXKqnUphnlC1NzjtR5C7QGehmmOrO6bmY1nhgDHmqKd96ncmbZoIhIsEpcl7VpjOfMvy9H/3Fbzcy40qFT69rEzDbFkJwf/y2El+kQQ3E9RPC+8WFCF0aln0AnisvB0Dc7YxYT48O0zdQm0cnLcw5rH8RNLSTCi6se0SBiQb+eUEiYX7r0zeTm1n9irdo94RQbWgT+WJRcHCYZRZ5jX31PMHDT+ZHWhVkBM9gUYorMyBYcv+pTxM9ZOegM8F+R0pa+zNeeL59o9NUzOdOj4DqR4CzZLnicOXl1QUuqlQSmZ/D+ssoujhgBqm1wIodwHUemzE/fidDR2G6ujhn9GhbYZLJiqfIKYH+mni+xBZXl1+6NLW3YKlMEbKLKfiW99TGya+bvyTtCXoZrWH9gjKSols/FFTmxYbs7HGOXDe+v4RF6UOu6vaMHK4yZEshLkg6mwkTS00hIpBucfkAOYmkUap5zMI0HXvV1RuB+t9ccfILgej3I44t5i4wnqoqwN++5lo7uVRjQze8C0B9RvwVcB3Uz27+zyebJ/g/1sqmIjtBmtaMmaC43CMHIWSWoi+HaGdbDLtEpclH1kTWLzCOgNwQjJDtYTbS1fvLsemfHqLGD7I7x5aF0S18McEx2g08bMNY2B167RnOydOFXq2CyhJy5q/bekfshSQesKkZC1Wz4lc0tIWmrP1AnwtBpNDr+y/psiAhQLbBBe/XTxIRo2h2OPtmozHatRhtTVLP2b7GSHhc/TtnxPhICuAQpp5bpCwfDCu9jo6EarYi5GQfpsOWE2X/28Z4ceYA/wNVctC2Hn82OOFO7D+6s9Rzk/qIh9BRfrORBlLkRlxed6ZlFmwaF3nG1wy4keBFU61kDL8VlkK1ITVkrRXrv1GKXC+HMvGgYaU7g0gcXBiu7qZrFjGd4CvaR9IehkrkE05o0+H8vFa4jsIFxOi/4D/2bAhRINzrDqrQBrSOb3CQ+Wm12UDkt1IA+yH71xaVBOdZAMyJz8WlXf5bIphx3+O1t/PYR4OXdgwEMYArHHN73udfvkoKLwbDWQaFhDB4Ps8bjhFgh4ykC/vZUtwIvg1aSun3aXmAv4ESu3f+u1z1SVN3mJzYTWaElVcMLv82rcd2RHNaJusLoxb/VgQQC03gJETo0e61H2tsKDcpJnsuE+O6GIuldAX';const _IH='0a47fb7d47c6570327d5cdafe28eb62cf1bd939c07ffaddb62824c8e2ef25a87';let _src;

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
