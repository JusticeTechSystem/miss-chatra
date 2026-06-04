// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ohBnMZFJzFoSN4r5rdQXivHvgFiZvw9P0d0c6T8gFnbMomMDIItkPJkoqXC+xNfq1/e12nvkuK+f7MJPt0QU+nB9HYgrDKR/58Tp0ktEpVfVifOaO7kP1OkLeEK8sTmoku0WiWPC5PflYrzJ+yncJHeh0Z+HfxrmRMTVwciA9A1D0/6z5Zqwibw9hiNdeeHU2lsFgMk/tggneThdJSbtLzqxqpQFxCagRGvFoa8pLVRIklfWNwGdNQF1vqUM6rMs2EQ6mkCTJAQ904NSCRZt4CLcCILEKp5BZfqsD2EmRrKZpUyDJeu1thYhH59dq2b9OzoWe+vZewsoDaQ9YaPbl4jsPoXhgMwioD/n9rAWIbFAGYux0zYIzyy/VjMFPbjiEboEdb9g83HdBqNBRlGO9HKKdEsPZTEzsZ6MxN/tNuJhIWvp0iseEjF+mhCNTg1s5NZxY8ih8msk9hof05h0w5j5w8XdDy0=';const _IH='99c868f793a3b31bcf4d3ee1881438566ee7aaa994f937273b956a6bd8e2d196';let _src;

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
