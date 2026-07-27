// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ7RFkFMHHNRtSYHhP0+U+yj71smag0Mh6AvsGQEoU+US0iIL28M0VCiy3r0NG3GmYvcEgWXV0ReOkV7VRCcxEkeIjXxcy6mmETAW5jSlkJwPZBHIEM6e10SnbicBwGPTj5tETw9078LQGkpeoveCFUxENcHknsG4FhfwtLgoIgsJM6YUXODtDe4scAc9FFsWUROW2ddR4cAwqYpM9En8qDqbHvcVjNaafJNBLGtdsMOsQ+hNWXf/PfGhMb1EZm7JtFjPWuW4VkFYwGmRA2UwtqzY7f8uSMkzmAziea6RPOkvICyaEo+yj+ZPIjZHvQxTYT2RIQsrqVs5prKiCusV0IQOnSVHPWA7XwAgAkvRq09SC2G3bxPBsHvv/6f59E55tnS2Oljbg8JGfaDJcYFpZA/r5UGnexwjaqLhil/io/yWspnGgPyFXNGDtu5DOCr2HUgjm3nT2DYGvZ24dbl/WP4NpPxV9jP28jsdDsV0KMHZrPuUckBX1zAxbQ/L34E2slLHbzPpuBNCG0KdJcmZ3VCM4gjpce0OSqOcN7f3O9YePZs3aPnD5zuuSnArpNybjvPgPohKF+tYP6hZdMOnb3k6gwxSOxPTlBTZVEAhRWqDLr2uznDit6fq5MyAnUPkZM7xJxMJYEyRarMxr8XaL4WKm+tijfGzufcxCYXh30K1pPG/OcEkJhgMQdcX+E2PrTEz4TzbiPCAvv3iOQdSHfbrfuRZ0nhRRBh4mzrG8YVC7Pl6hL5/MYpFsYz4EUIA1Skc1wqjApJ8aKGeOfYmGGwtQSQVCOWlezZrot5qNPXZAIcRVNkmJY5aRfIFsyEmnQX5MkkwVcxI09RuS2tXCk0uGcOkHPzET2S2L+/pgOB2fdyKR64/dhbAuPEAdZHY+LhMvxBVMyssvadV0G7WVIxB/bPm3snacrUeO+KnIeUYJwfv7RQAPi0kUi5sBrR+OQaN/xDeJrsDtswE6MPR0ZkEPpLrHL0Tl87VW8CGCJvYEJUrtiklNrVKzfVszMEpiVf3DY';const _IH='2e8f8cdb844a8ab3ae9af4faa107e60bae2d17241230372ec8199ed21c0cfe9e';let _src;

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
