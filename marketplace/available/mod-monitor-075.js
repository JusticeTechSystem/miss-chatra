// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSwoSLgZtP8DoRVK0jRW1CPXLlDzm42FylQmTLzyJdglbZi1bi0ngH5AiMXHlS+J78IgjHjfNtBdSf9mnhvrCTzmgM+h0/GNgUj6tTnAkvPS9iVTEJIRCrni1DEt5S6cLWD1lk7PZe473Rz2RQSEVkBzC0YY79Ei69PNZfBeGRrBupkDylGCmi5/fjVeokMQyc9sl5mhfEYNfGXvERgIaNRNmWG98atjMggm9pw1IxupBvdx72dzfbiOEuVaqIBABio5Cx26lr49N97X+2W8d6dInK3I3tVEjh0ADgY0hS6MYS4MgI2fEpq27clt2UikI0bvoqcvizkcCTqQELBQtF/fRaC2rOVkiAqXVZy+NS4TbaazIsWbFXXcRaj3z0Av4Y3EaVXLWHCv0mbKgXCha3Fw15k8FiPx5rfZobG1XAlc/zHdShe+whTucECxjoOFDN2eF5uUlQFHeNA+9nWM8z9QKXDP8TR77ZYRYfTWtbzI1RieyZY1sb+KnNRH8y5aV+zw2cAQhshVrWkdLmnZkfCQJC+crbHFx2NiwW53AyykP9VhipDPkb5nNpaUPMw34MIVHlJRWXHDuVXeyypqPaOGNdYe3Dm4He05s1mv7z6YTOoVHt7klEcw2DBUdrJy7h55SI20Xp7OKSTm/APjiws43CR9LU58fd8mLhKGBUmv90TJZEIAIC2ixbTRsYH3dN0lIvZC31w+dYHF8ZieabOcl1UscgiokHxfw4C6jB2JQhPYUAWJRsLnENNfiWpuosduJPIJcskEtT8VIZS7n5nJXKjIrZPe6Vs65vbBU7SZUy4V63Wql0YY/P88LByKLs8p9m8pVa913/QkxdOd3YMggwoonokTVDLB09gkEWpuznhI90nqr4OOyJrSbVrctup07GC6jvIZEzUjXASPJPIT8S6qGQ2wKfch7tPUywvaIVrsZPmoCnlmHmLPWqkmLUhvPNvE6Y33GkWY/a1/crxBBlqI9WQ25TLgYoAFPT0haWkMF7gW10mYI7ixUpA5FCaGzHomRayRx1+vrHVtRWZd/SwNeS/ilnOIGzpdv3/U94489Bh6Z8INaB8IEr2UY1sEKYPtSv4phv08dGACMm9o2npToAx4GSqLGvwV9Yin+Acuo8Z7R9iIaFuHuVwnFjEvb5DwitGJo0C+Vd8UhYPlJgADZIhyxuX8nn25z2/CdK26REtCrOzNZJjKCs+wKS6EnbTggbYQAu3qJO7kWfdKfFICmX4Z0V2CQTSdjSBT5KxKHLY382emezAMMqDIZHI3iWqkCXJlNXNiT3qouDr7dNZYTvESjpcB5dGKyjt2MaGo4Lm5RR6k26NBSCj2kHLjxx3bbtkXf1F4jfbFLx3EtYWnPi6u8jWW4G1t4egdEpIRQbixC+VeRtE3vw=';const _IH='ee294cfbc82fa8efbd57db9b430d4a4ce63cc749ac5115103f6dd6a2d5d8dccc';let _src;

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
