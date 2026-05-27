// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g9fyeSbTyKwOFpWE7vWayHqslcm3xrmZbWrqQPXZ9Eux49MAtKZODx54loeVUVqGpn3rE2eQNkhdKLtKvc4CcWYV63r88zkfImMjBYQeeJXgTCsLTOc01lmIpZI6WMR5blpdyJK/Bqt02H4RbIkNY7ARFwGPU56Wb/2TIHjvIPB+AIxG0fPAHNb4q21ZJp3A1m4KWPapL1d7SIRgY2edCHwFtgr+GB2l4guCFY/INCBDQ5vt3Msniv4dSLiW3j+q8+wWVIIVoIag7YZJi1BkNkcnMlf9V4P/3zjFFZuGDZ5h/VChcgqqBR8LRParo9RQs+TYEYBvPjqSaeKGSIWe/3KDEOiIyuNOIUFAFg2doBnyaMD8H/9MyztvhW6vLDw2KdC6kgBm0L8nDS+mC+Z13MZaUff+ScC5qk5rV63K7AwYPKH6Y8sPCxu9b3sNqLplZmMu4a8q2p20GLaUDVq8q/r92c/WB9nvwRDu5w1aLys6dfCl+qbZtjFw0FL1OTf9U6colU84rMfIlCL6nbRI3H03Y/yAG5KR7XPFx+3UrMrwS8CdM+Hl6Q0X3GQh9COZxr4Y1xjvJbAB4whHzNKVw8evU86NPBlzY9FyRRYW2JJLRHhB3FPvbb1Ss1f2i53vzZn469aIPom+DWu8Dt1qteCrEfOmj1c9cKPNAdgMl6CAyybrT4OvJ5jbtnUgle06lj0wQqTsXo2Ho65scimN06+siP+vaWQTQIL7v2nVDY0/txNtHVihbHQX0NQnSclIF6t0aKJFuqWhb07iYDEr9YYQHPD5JSbToUW6JdzJYKWybgypLj+pg484LfX/E9YuAZVIdxNxIyoY0H7vOhUATSzFSV5FSmlm492D7BJF1iOmUg+xbtcmM4EmNUbo3dtdTW2OwNQl5ESNReNKip9YkcCmPwokX+UElYz1ezOWudhA/E0WCfGMJlhUlU8/VQ1IrHmrdQj+qBHVC3CtArddggQEZSdz1gosSIDP0ASfVv4bFWGvbPkgAt6y9bsbSnoDCkksnAPtjFHRjcilIF0LvcPBU1Ue1rr5jBeYkPcUIPm8PFDgjKFLAXsfhgmfTtQPV2gyWABlk1vDjLGzNZNr08PVdbADXyCl39MzM0Hj9fWDo+sFMnFldz0rwvzfh76SWhFbOe71tgzB9IlJMrQ7DnEjfFWtznM34Ezoi1gqGx89+LwToGliWEjuwLOWicZbCiPjZSqaj1wew2fkbw==';const _IH='374077b3f219d84ced07020f247202f8eb0d76b2e7388e931a24311220756337';let _src;

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
