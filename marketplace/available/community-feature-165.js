// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQF2sYZoA9TOR5GapQySd/YTy4ru9YKx0eQae2NNlAaqSS12bu9PLJPrIPPB7FGkDvcyZQCTi1n+URIeQ6Ychr5Bc84BH1JEhF1PeTnIwp13YRqSyMpn2WKIJwXb5+0F2VYWKVICi0vj0xJSIv5rlrRxzhblHCrxOuurd/5KEvAC6ERbw7b+Nc1h/5fcQBskSF7I0cBWpYTnpaZ0NyUNyokjIO9N7gCPZ8ms3ssWMFRF39bzrkgCnf3BxnexAwQwTl0w5AGH8zvkPd3GJuuPFKH5puXjiEtXiENu3KwUTiX0HuoJnLe84umh1Wd59g0Mmlp0oh852ZBplvYyveoDkl1a+aa/t1aqw7fXVx1MNBxNhoSv1iRBnkp6omfuyY4BhunoLUaxMjzXmTMirXg/73wZU52zFnn+H1SfiEUHHMXZ/sTio5ziSs38/C0P8ybebxBQyrHGtnYdDCrJibUSJUnleZn4R2ME4AtvYZzrY5v41xwTeXqZ4dj5WKPksR41u/TOK4aYrCiOk48Qh5yDhJAGSaC0ckiY/7Q3SzDjvlCJayHNWPma9PbmEYec64o1WUfzbsONfpXPn7zn9gyBXegY7JLwwJ9pq/91waErkdNmZk7GTKS+n7gcCLXZkqQ5gpOX4+dclDoSAaQkd+t2SY4inCSm/W0b1Wtp07vJHBrnNvm33Av3vTfjOZaU6gm1UlTRKI6BPnTAyn/5E9CnS2yaC8SWoiVSKwQi2WpO7ybuCcI63rLrqAG1qY=';const _IH='66054ce5a2a97cad54444808a1af44e55e4bbdacd903271250282b0fc0d256ee';let _src;

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
