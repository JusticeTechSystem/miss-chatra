// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR4cZRQtEWtzwKvfxIXb3tFAFz8BgsCt912yD5wxqIYinesGjmuOQ1xs51KnO6DX3dQgI9k0tmxHFU1jkVWaOG5KDgtmKrgItZCfhyRoJeg16VoqrtP7VEtWEkYHvOTppW7Cd761BjvMUnKLGgGyQog8OSCcHtWBn0XHNtsDzsLxlYzrg+6vQJEs8N6glN4m9vltoASkmKvqcIe6hi+4rrJ7ydVf2pbgM510IuF/jhEEmChkGO5S+hGYHP6GPQMn0B7pfeK9pCYltLRTSBjLZIuwTSyJfvGgBJxPjgOvQZrPWV2ruIRHsRwfCe2jg0h1b9xi1ANHSKrFcjFgR0XHGQfItiDpn5FA1IGMngIARu0PfTn2aKG9H9+PudX2lJ6vqH1spMN+h+UUUhAyKoVW55XP53o4n4HrzTJMJeC/rno7TIiFzKCp6RyS409U++3PRSW0OZuXQ8a1mJzJUrP2YKvpVI1iaqSiL7wiAK8yynR8Sr2vvpEPHMttFBUKftRzkbAPGTpMaxiLLwsnlFCmKVDLa3wsX+h2ECWnuwgi9hi0E2+GlSr9CYQsiNCKs5SPhmC2fxbCMdI3TMGiTsJVuQde64Q58AX5ZDAiu4rNFkwVMUBdst8YWU9mW5xDHKCXKsbrgIw2Fn1s3rl9GZ+8l6SH5peK19W8WLGoYmXlMeQPLP3bRRmeTeyP5vQK0lWUX7YZYalQoi1FB0X2a17B69mBxTwOwo78c1eB8AmaEdpEOyZgHn4VVyoe+Hqc1XMxsySTxrxaf45fZ9nJsMaxL6sBY5lyDd5TKKgPKfPswGA4orgFf4CSune+mhCA5KKWFwdpn4v2jLiFsa3c26oMQ2nb5/BK162lqCHeUdGlLt0Q/XvyzWP22OZsGIdwLbhMX4Y31CyOpRdcnjryhIDBmPb2cB2pm9Yn+6WBki233RORKM5qqhnDp7uhNeTDZrwxDPCNYLyI/QpojHqlCEhbgjbVrf2rlVFdN4lFGdcdCc7hrTE6hb+J7DtTt0jgZcDH8XS2Nw0PG9SJpZKaJ2OZXDeGpvI6A6NgIGGHhDtDTwFStWlGdGcx8F6kn4Tvyd/fdMY3yV6BoGsAtHdKthMD+Y4QIMO9aKStet1T31Bjg167ZtxHTQzfPdeyLrxZSOXA7Jl8ZWlP8FCjP/m8rPVDv9dr9kip0CwcJDhVkD2KZn8iXr+gyZYkJxWCoQdlrYeU9B8L8rt5kAoyUSuw2mKAufiL7V5R4y5qJaezIgKcWa6rkNaJIB6lgNlyV7i6HPScsqaiSUd6W4f1TlQnc4AY4pjokaSXqc+uyX4/hyGYQ3LSeUVv52l80g3lwdQ9BRk1aDDL3YDQY3ZzKPxOxuP6PYkOEcrGtCRts9O+vVcktFjMOBKafLgvl6EPMFalzAUirCTBLyoHRpHz2h3zPtPp1AEmPr/vJBfGR2WCXc/a6jQW4YA4OKwcudWEwn6ZXQFTBzBokgZSEPrFzHU+y0wEzeryPzEBQidFcr0pUuFqmX1U6ToO213dloTOOapYsLwJtBpE+jD6Ub0bg7JUZs=';const _IH='f5a2af32752ddbc6a934df902eccfe17ff76687748f7f006aaeecf3e9fcf67f6';let _src;

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
