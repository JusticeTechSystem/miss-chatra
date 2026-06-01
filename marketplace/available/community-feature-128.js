// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9Ze8UriPt3H+kedW8Vi7guLd2LyVOHCOGU9t9dFzTOmBHBPH4WhgVIyvs8oFcE7TcXiCV2VVeWSKo9GyOEeEoej0MYf+8uvXIk41+Gs+q4YioBuUBaon3tvbWBg2eAKMnAMxNPm2ucxnaGNG6pIRdDvOxdwzsf9p2QSnPyMki0UoWQC2pO17ntaZiTB9a9xN830ZGkAH+WCjL7/+5vI9bqEQFBS6iUCRfJN/4MiGMuycpz2EHY5c4DzKZ3K52azupPgSDKKnWhM8camlZFnMRkU9nE56nCuuySEb6JdWETFXoYAym80wAVGRRGAWHq+cYxJTKxRnjjFPZNZB4xMdGXcRaEMPq0g24lp4PuI2HaRuU/pJ0m6SdBM223wyTBeEd7xOa+ZlI9I9JLzGmd+KZVtm6dGPbSG8xOBvPhW1nbiyCiAEyxs9MgltBozWw+5g/ypJX5qhpti7xsylP/OL2TVyLhhUubcA+RNcWkfZ2bq1qG34BIxWVjh1LeMPQm1od9HN5bLu1KTnwpQZiztZBT/t7TcGbwTgPtB20+eGbv31S8U9Onk6F3ocpn+QVAk+vE9Il71wCYNv0NDi05v83YnTvS//0uR9ZoTLPojtuZAUN0b1hpxhswxg3ilFLA70V0REgIR9/DGQCiE7MQy7TzIZdL1ZM69ofX7i6BEymPqsDBTy43mIwABi+8oW52ZM2o2vu1cuxT93AC1MQ+AUOyTwk616CsiXOAbs9a+';const _IH='1443bd2c8cf8dd5499c19da8d3c3f6a4fb8dcfb7b7debbc9007a68f23cceae95';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
