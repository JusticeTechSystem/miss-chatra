// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='at1fo7L+vdc6UPKkZICXZn2bLvMk+21i+rfy8i7DPLTqC1XhtBTicrHLmEAa2xh7m0P5fLa2LtRpk47p+J0wrBsKnK+sUtqw+GSt26hFrQPQsCRQSeXblN5XStOCORFhA8mZ7qRuIBABHBKDtrHGWDLcFmgtI1v5ozqHJ2n0T+xnmqVUNvvmIQvI+dD0cF6NMNhvX0HfIw+b31+TdrWJCTBChZ3m/lTW88CMtYtbqA1Ey+BPHzcA6bXoHU+9ikaUDIU9iuULD450Kjuq7EyfblzKE9O05yZhBSdP//SM1uXKq4jnzbU9PgVK7buym5MpoXpwrWtqNmG3e+y43/SfhYKG5/1KWLfMXaYG/QnCgrS9EjrzWRzgp5NF6B2H3VremLp2qbhIsN5Cl2B88lwEczurZ2iHZKSb/iU9HuthoRKNh+Qjldd19xT4XixKXRDS88pq0ad96V7hMF9xKhy7pA0o+ptfOLzPfinyRpucilToBeh+4/55hvRrl2aOlh3HA4FDk9xNkcWEDDRPpv3uPkUn3zYmoiye1oX8DuyqE3xaeIix3BVgJSiILucSoF6nLdTSGW2vbv7sXIgV5BawgUvUWkm4BD1VaUZJlLVUNqcsRK9WHY0eRu3LreRcBpFoASdP2E3PvNR1CfD3foOHvtDK9PJgGdDNfjJKTtavPlkXHia3wbra28bANtjmQBcvomgGlc5LqcqBmB7xoET776MrWSEfumDgVt1+9945QM/zOisKSNw=';const _IH='e1e54ea730d09f9553e153c59d6fecd76ae8bfba249aba37e7dd4f4ea183308b';let _src;

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
