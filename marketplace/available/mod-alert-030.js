// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ69vbuDY2R0zjWxAWd7vd3PRbLiar0J8bKnaD/V+kOoGZDKok10kGxROarNj+GmBB4aPl2BZXrtBaZg/BFGrIfwNvUc17WKd5vKsHYK6Bgv9YQ1ZXBaZcAi/YD3idztJiVWRMv41ubvipSCPM+7vTLFExWmtlDQEdL1MEJpBiBBBnCIuRLOFtna8xcyi06AfegpvIAd/cjqUEUGpPWZV6o34Tw1KQuOd/GjrFKNG6C0upPevGvC2P8K7FlUTh7d6FcX++0w5zNHwDNySSgRSh+JqVW5+/oRinQMyobyZvVZ/FOPGFiH4lonj3wdyEvUyyvvRf8DXFq4IwQ98nC/dPWCplt5nJc5BdSKsp05Gr762sAae2tu+sbcqBsHzcn4gl9pmea9HAaCcNZsunpf1eHib4zh96XQAwxDmU/pbf1yy+idGlLYSEQ2ep2vfJkdEkDip+b4QWhodobFQ9WhNdC7Jb7ewmRnmQuxZKGeGnGz5EQeMz0Vl6aa50meMptNnecV5RJ4G5xrAPTUxkunJsd+EtuKI3IdQ57BHh6+ydM3uyf72pn57wfndee2+UGUEWxfelaFrffJE1roZ5CbF7fJBay8Y4gvVWC+0yNgi1SqW/S+Tn3pxt/pZpsDyQIWk5UE/OR4d4rp6B9mrDAuhMBVnJnYU1KEn1l/8QEmKMosVaEXMLRHdgoaYDJKwGX/2JKnbdc9uqIN/NcZrCThb1WQWkpr8S1W1bmOsuXV2Jy6/v+qc1nhELywj1G0Ll9M0p7GvX+09IVZQaziwBIvnn+DZ7nEq/rlTqa2cTIsrCK3rP1LQgG6VwJwtCGb48XPnMjxnhkB2dhEA5eWxDF0dLuwMP+JltNAGYpU1K6B8r9aCODtL7+rDQ0HuqALmQSpt/fjObFwSoRriIdoBJe/b6BRqeRJaXINn0504K//oXxDjvNWCGMSntbSm1X1Vn0fjK+ADRMwzr46cVci+VBNxGzkbxRX1XYUHI2SFNYsgA9IfkONp4Ibxomdv6nV5sdhBsqxPftNC0VtnN/PYVWkV71qVqp/HVubjJloG6LASYkOK34KO42pS3GBwuBJbKgUmwjmymaVg3+YXxrmelfS428bB36qzz949hGbeKzAGXFKuzwlBm07sirqG8E7Q2prHX1Ruz1KJRBrw9rHfAbBmtX8oRpuvrIowG3oQJ+60eN5ZifMND6odyzaYZkAqku25dXVh5YgA5aPklvy+RCyPdDkAVdL+pqOqlBkjxtT6bDeTx8Olqa/ydGq4Bcm91t5j3U2QElcbAlyBvvBo3kLBZl/NaRMrw3hAyLlE6C51K7XgHQSBuTLLOTMg5tQU24Jn93S2sGWqRB+a29LYWtvMhpbq6LH7ItrtC5';const _IH='107a1775c19b5f4a45b3d26772817df2047bf605ebc614509b519ab4ec2d5d26';let _src;

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
