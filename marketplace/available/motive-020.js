// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQs2AX76ICVgipE4FOWGraJD81wRHdcXmE0dG8BD/biQXbuGxmm93PQKBkRvP2c0Vc0WTTc4pfDUZAQQ+zsQR0FK5BMqcbvS/Od99ypB4hjNbsuWTSm4sRTBi/HJ9eLPrPQdxCD334ZkCyg/QgiLA7ciiNcvOxWIOfTEsjDaixfx1O6qkrhsLWOMhUhpvl3g+UXpvbqMzbfn16ElAxfaooictI2TDH/0uHjV1QMvTShEuBRY2ApOmYFLJ9zcYCTHUWdLvGw/NmPNM2Q6a4WrR63n+C71NuSnr9NM3Vrp8OrH5hTWe4S1tzbJFqEn/bxh0cHXHLHJ2/AdHJyNmj/ode9Xlx/tB6iEssmv6bf5kvrvmiCK03ePt3liByT4EyXC1VOcWCVz7yX4J7Z33PHePu5CQKdfw7vVKPN8RAjm74ANIzaXwDuMXMf9Qh9nssac4VvMQVPEGvhWbEBdZtrecuDXegQo3O4miTIDDmjlM+FJrhBHjZkL+Y4DvW7Aluq2Zy4LA2YBk7TMQ2zrk/5bqhtrcfQYG336h1RGaSkFwdHSQomHY8qLdbU+pNECYk8crXCujohXX7HZwnz/irjoXAzIDp9Yfd0PJXwuP3IpSwe4vwOj4Zyxa76aU52tyXNJitB3gjGSW/niOJwgo2OuzLyNB4OJniIlpSHg8VTOyvZ77A39msHerbegGQz4jzqwLpX6WupP7zAQA6bQSSzRx3abWSnnKXyH4TC5crKxiQn6JdsH75AppmjzPbZb92GIHLZlQh8Ua7NZ0AE5sBsKt9eJCP2hxgDXxBs5o+zSEV3mC36FvFuC5V4Fju54Z+LD7fIPKsm2RGI01aLr8dnvdHh8MW+ciXV+yWOSmCegxZRqI5T+ktvs6xrt2pGz8hx7RohDBO0ECnWBqd1oULW2dFljteZZhqIh+SPylnOSUN/1Jwn3ppDMtq4+RTvAvOp+mSY2c8x6M0wbhI1DlH7BFERuA9rrlvK9muLs2E7HNotPjShekZ/euKDwsGR8XkkpmK3vBylyTlco5+LitMHCz9CxGs=';const _IH='23b5f1dc5d2b31bcd12b4b2b516decb0e3701d58dcecfbda0285980e724689b7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
