// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uf1dSQcj0qXaLvzBCRfaAB2D3Lxo9fLSoQa5+Z+sOGsO6grL04VxMKeel8Wz3vBC0kikbaPIbZDCTFRPHniAfg3/m4sf/jBDqGgTsCSx0BcavpNENogIRSCs6WnReMn50EoLmKFoWeIeL0kxPSi2MiufgtLCq64+oMjUrD4Puq7a5r3C/4O5TcD4etx7JLz9TImVjH5SFp8lyL586McvJb3apvazshepEzEk2mZ9fNIp+VYMc+HygQtoKNzuDbms7cXC3pzG+1AMCxgmLOZ/peYLOdBovWHPdas29fXpX8oSmA+p6SiRqcIXH7uUV433kH9NaTdmYFIBm81kvdvQuak6Jk8WVDXF/O6JdjwvTUmWrxgt22DMjF4SJyr9Ux3pbhFLT4hf9nHtK6gk2FHs45fcXQ8oBaZms9RBwePbNk/9ULvDkxa1Gd3WTLIcXasF9z0XN87sg2AOWlxQ+YBNlvykxr+TNI1Mz08DrLi41WAvs8A5/tLeTYx16x3JrMkH1H2dvtXlSgUGY9LthbFxQ32adG8s68PUbVhaNETJsvsqPfisnTxsOxBxIkXbsDzm1SY/qjt5HMq2t0Gcxs4KXzswOcGXsmMxMLg2USj8hj9ocBuUc3YkmSl9cygEGGxKfkiVjFB9LNEEouJvVrlUPcyb2kb611ldMOULk3HpPpgNFVpySDn2OnPeQ59RGdBf9jRcc/quv4J4zuixxlzbgmZ78eLBVLywmCfpAtkTbIiacpoiReMjNrAPqMTJuwmQIxi6My6Y6fF9u4oWbFtgeyyY6hh1mqENMCtXRMzUdCahdxSbdiABa7b2AYX5k6f8Ofm4VjvUuA/mcXGu0zYuJ6elBYLTR9/QJM3jxU9oQHCeC0aTIvLNuZ3lXPvoGDYeh8Ogmv6dOLjLpyu4halJE5ReawkT3wHT4IdUhwuKHkLEOkysyEJtBsjwxIalWubJrzMAJbFitlXf13Af0X08utRSGjpdU9BrdnONlo2XI8DGhkbOQfklRq6fwx+5qIj5Z8N3YfpoMXanwNFThZVaN5yTT3hbFhDyvYHPmeXsQ0XfxfTklCNjjEsrKT5ze8RTU+fx9+i6k4DVFQ7eib85F9YayA46RHUA60tehZO/fPxky2sX4B7CX4G6LTMjh8DjmZCTyujBrFwDkcuXkVRnpeQk/lSM1TId8OZF3rACcBumT2dAPvHQyKhzTKhmR26wPMWGjGasGegtJCYClY+3dCsWx7EQCsA7wboO65MbhV5dDFjW9KF0C5CddPQjTeJoTljezgEhQgBpghxcDTt4dHzb/p6rI61J4k+aI8a7Vvh1VXTVErjeZwG0BsAOdNlW9QheW67FfJgXPpR0COMpoYhi8XQPbwU227wsBsDEYV/0Pjs=';const _IH='4e09598e395fe9d7991a1b6d100d390edd67bf9753c9e286a16cc62af51842af';let _src;

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
