// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSpBF0dMxX8VhEQ5sBS4E7l8/Qu3xF2Bp4qOFtETpzmOwPt9Y85tW24biDKR/WYtIjW5Ej2NlOaJx2nJXQOU2fFve6T+5J3AbrDL0CAChuo0jkV9Lnp0nRsFECo8uyRjQcW1C1x9k4a37wQ9gKe/kQ1qLRYVS5TZIgGo9EF/jTkGc5K5i1ROQ/H+Bnr+bg+sKzDhuFhTajzryIwwkq0Gqv0fSi9Wnvydk/t7XJch8WKNhSKE8uwpMZdT5L6yIPtCmYsliYSabfr1Rq0J4hxZ+uFekeeCASI9dGlMDK6/4vcmU4w4wG/Jj5YWVcq/G0ul4hY2g8Coilo6OTsY77ZWZ90LB+Pu/q/9cCLIIJAMz9/CPFOgyVZh3hrCvJ0yGx1NY9SoBSj/8rynr1Hs9ccaE2sSuDf3Brgti2TN0mTElwjG17Bpo/AH7IZMIvRqlnyL57GCOxXQqO4Z3T8haBsh+Q/ck3kQ2/Mm7XAfnTmwVYDCkw17eKuQNm3Sbl1ofDMInY1q1bILkBIHPhxWAISJTKaWhXW2xuA999Lf7JO4V/UVoiP8vc6CresAWWDGjmwxqvgGNhL9bIGLQ5lakoQqQAsavunfFF4s8GNiFVRPRsvx1VSI9N3nUcrbyfuPO3BdL6K5fcUrcDOBSwWvojpvA9HvEfe+5GdqUh6UfLDoSMisIQ0VLSZaqP+BRvm4LrSxT71G1gdIS3jbvE+DjyrRL0pEr8sW9+9JCMAdh8ss8Mv9eHFLzvlsKTE8wM/SxhzJt2A4UBF1yZHltlUirP5ocmE9rB4u9NVT5p/RjJkGLz3fKNjE8r/yqVZ0vdnAVuuI3wH6gCvgo/fDYOi/nRILwoVc4VHCVh8m9LOHFGOr8VhQCypN1dDJVYtVypgEW0vNS+vhWV6zzHXfZavHlBLtpk11vwD+nipI7QnBN5qe+D10tHUAu9f6gd7AQ/4cjRYVG1BFDunZOTtwNmKN2hdz98PxcGwZ+HvNOojd96NeJMQ0TRbEu8PK3Alp3mjLEAN64AsFano';const _IH='621342be62320f55d2e814346d1205a70979ea43cf2a9965f6df05a3a2b3df22';let _src;

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
