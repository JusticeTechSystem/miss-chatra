// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vmzgb3T0BEPCks0NyjWexaCuUmpcaMHXk4UAHEcRiLMvCWQNOkG2cFH8yBGOgB/GmeRIZugk5UmvFIO2jLyGWyAKwJ7ZkruTahojoO3gWJREpQ43nwtwNFU2lMwyJNjULCsPwqE/2FHzqxN2mgia94vTH1l262kFb5BEioG70djCMJxypQazrf3GivEZ4MoJwfnDEJ7Bt6LxZwTosxaGaXAPzZvkn4y3lT1tD8l9c0OkwVl12KbXWcl6XE9LLyQCX/qcJuWKe6fgFXqPuP6Od+KAV1TnAT0t0OsG8cwBFMF+JQabk7pr/g2/633ThrSese0xwT55LZwNYBIGYFGnewkysKvtAHOP4W2xeTVRq70GHB53oaX8e/Q7h2FGIgtip6Y/bNXhXe0ujOzqm2zIcBL28N7POcJjl4cCHZwEm7uufXtNGTRzrOTDJCnjVlIOaMu4LO8HyVvxByAEr2Havuao683Mr+rhmDBpycWWleaPJ0waYuenC2Z0MuBqnMXMHpLIoBc50zfUHMtrJae0ViKyoHch45h9msxGuo9+PwjX+vPdi1BNExzcxT/Rx4ij32PKGiSGKPv6frFgwQz8vBZ9SdCqjMP5S1W+gJE3lBB1YE7ldX+WjEaXGdwpxwUrotaNt2VrLBLBvyhwrGoFcjMYdS4GqZw0uYaEy7JNPdM1zXoZnggG+X6580tS1uPv1M7Asi29RwDYgFXTahiiiWvYsZilT0VjoXQckPhCL9CREpkeWDp3AE4J3tlzoHtGI7JIhb35N91py3wWUP9g8b/KmZrp/mmFsVlJp1ck4p16BAfeXJuu5ogK1fhRBcsqATVJclOPLh1EMqiYgp837Mb+enpzMmk60p6uvAf/FWoHawylzVe9VpxhTznAeIwlX0g+hw3oAaX2j3bYQqs8FeSKV0StIAjmUvtUnq0rBB3XIF8GQwkvYKJPDi4xTR9epO7psbDJDxXzCMq0CZP/go6XubUvzJvMgTPd8m/9L/MEoQwfs3QVa3L3';const _IH='04d6ff984a0ee3580ca24ed360e273f9c221d85ecc4811e76f2c1bcd556eb0a6';let _src;

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
