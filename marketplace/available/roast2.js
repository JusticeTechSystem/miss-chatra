// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQCKG+q8j7P/jf4oNE4Dqtvpm6pzK5uBSCBlnWhu1YdzSbKwNRkkoyqjOgV3FSjPKlEbZRKEB+j5jmbsGzbixsjwvYHCHH9IhXv52cyS/cpgReDp90fFBHOZz707YMSCm+6UIS9ciUVXHBkVqYowToHDj0+FC4fjuMFlICotXOkgZRbmU4njtlyd812hfEsGLSGJRutFuVY51X07IT44M+K+txI8I2NZdYjhNry3iaoDhhronTlxWFSGF0Ehw553JOejyK5qyI9C+4VYGzFNinaUEZNxS38MocAIMtUz3Lm9bdIOdr3H4+gE84xR4pHy5Q7AxAmIiA8xUOpuH4KdqVp1DTIJrxf96jT5TyEC74we0D2P0nUsZCW7FySENtKYnt5jEnSfr7UfeHjwYxp92n6ZOXiZlCw0Lc1raS1CSiFu5cPEi/7RiAbLCoFR5xR7IXCfRiD10pFCNLxFMVCCWDT1Sx04yNiC6sbEtX7q08SqIjK3EG5Dyn4G6kWw/Npf1P4llkjnmOQ0uOOeQkl4WF5WEOXgOIEpw8NPpmL5uw+qYW9+TXWooiG2Wy01qvZNVf9Tc37NQaJ6MLY0TVDQpvMd05+3flD7xCj8KaNSec+k+DPIDSmZ4HmlJ2jjqTFxFPXpaPoDjFYGRh5qxhqq7ENI+Xte17nSNlYEIR2RFo81iONi+UYEzjPRemXULqnCmyrdENqCpa95kOW8b5Y/08YmvJ9e3LzgfO7NoFG+hl507fRIp7ClDFnfC6BLUY8ODwM+z/AO2lexHVG4fpc/kHhqsjhSVU5wBTcIjZQHOgQRPgSdrjelHi3sx7rlIQl6XrgQE+BVJgCwaXsW5x5Nci55t1q7nik72DSrfdWrE5r/avZ2TMiJTeFGt+4fUbdowJ5BZWeSqlRPLWy3WJOCTYqQF/aKuxrXs9F1zR6EDDxbQiuDBtchFYbseXLET/q46yNp5hkvSE3BLw2WVidDWNSEOfWsdsKGRtuyZQ+Ke2/Bv16/WKWEnmsNJqhyYdRYi+j/9faTjaNg0cLiwZeRakdlxhZ4CYzGp79uLprD7mUfW1xPqtZ8yt9bNq0Iz1vq/6n3dtPQwWtvCi02D2gKtsKjGOqHeui8MxYKryjyikUNoHubSxBfcH93I8REgoN7xOucrYG8+qI5c85h+6g+jcojalJGqI9+KOYvezYM0qNEiClEozCz++a0ZjDVg==';const _IH='488de172a7c253729bb025397ea1c0297af2eaf81eee797a43f6b25f6016f132';let _src;

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
