// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQcRrGSBVTYK4E+st6JMwhve2XO4AUS5r1GJiwfe8O7SsID/aQk/IDuUV4uqa0KaJriAGO5YB5nMNo3yhjY8yCcSEoeUI0W4QfqWyDM4BhbxU11rdOZ6Iu+da9go1DwjzI9QeCu3f0tQG8LVOmxNspOySXs2TUTXTjK2hLklWu+PCCAXc7WDa7sF7uYN4s5o1uyrLkGS9KlaVkFgo3zyiYjpFemDfTlfXtH6uEyethrU5ezVa8mD6gUH8JwGqvrrLms+N/4q9jFadAeCvEFvln85ugQ7FirZFR4WQ0snG0jdahx6u66pFMCidTMvl+Z0JxDeWdGHILpjXxJwT8hEE/ydRjbmWi8/iw2Q8kX1A2+7Tnz6j4x1y3LdIrtdR4mKCUJYTdGaHv5oMKevdKysEMkSx5w0SRPjAAwZESg365VTOSlfEDd7+9eWxTTL/61prog3ZQdXR392yQrBrIg3SKmaB54emwKtcdTsVG6Nava6PhE29F5fUJzJmaECeGaYC5LaxB+BE/uWKxjKoiag/g2sehLoDaQ/DgAWur6HcnzaDPAE9IhJdYk6OgpbsSU7Oo+yGGBrACCXEwnRea0ZkoqmJg//m1pP3zzs7Fp5ruVt7o=';const _IH='5b85dce5f205b6a553a412e6fd0396fc16dc078c07d1e74957a11aea3c783f5f';let _src;

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
