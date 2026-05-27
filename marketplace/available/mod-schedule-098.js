// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7f6LLagUofRw2YeEf0n0x8bkmlmvApjPceqTit1vs+cmNGPqBS9JyBihgGJPWhoKji+ZOnJ8ChpWjn/9niKAUAFiaHrkNqA3NUMxLXgDw5ppaG8uP4gzz9fvgHheloR0kVl7RdoE7Q6p84zUMVOSRbftYghbymP1Is6HReoBl/fAcS5CvsPMmi8qN7y0vvavV7M/5aU3QMHgwsLTIJLO+viZ4p2+CUanVvqaFpDVxC9qaHnet4zgOdYv32EY5V0Gjrq5UQgNEV1SZ0gcQbX82npn7AQK9q4i9yYtSM6grc2Lh7ST7p8LnnXIDmmhEHh4MJhX4tW82Orp+2h6qSrSl/VfCP58nI6kzilSUNd3XbC5qT/9vA3aRde9/U9FY2AwU69Tu0RmPOnqzSSkvJ9sfA0Z5Q1OEZSwTrSC0yGXJdr/5UHrGSmzHxxBevclDa6Z9woeZeZcO8qdPOBF94MF7hm4JBJ/j+PcCL0jRHgQ9ltl01Kw1avNXJe5e2luUGV2KA3eo4+DcGhGKy9ExEih1vN+kMul70oDDrDZ5oa0szB6+GlbyNxAH9uiTToppbe/CS1je32rejb4fMFuqivwXGU8HdEqRQey42dwIt34nWqykNyGrdqTuj62dSsOkkJULhuRTRhP3Y9JMOM5TWs5s4DRHq4Rsx/m36JMLXl7QzL/kRN4hq2tybMb9evV064fa8PSJxzW55sXrc29vqiYfE7KWd6IOLzbxcFQY4CiY7LIWYHuVaCiQ5NgbjHoQECKPwfEvV7CbQ/WYBplK7sRLXpEyTuQS1iv0VrRcT+MFZHvx27qWo4fFJg+6f0DsTGsu1fVjq8DoNq2DTznucKrlVVNoG29OorEmkw8Ckq8tOlQ2otgXdoEAYPnab/w8StKN9N51bTX/Wj1MIreycwo4tQi7l7D5IK2pGl8FqYrDD20AnjSylSzurjI6wqGWn9Ty7y9YXb6LSQmuPiawkQyMxXXrub3Sn5vLua2r/J7MyYX6aDhV2sXuGBFVKrZohP5Y1GGrGLawgIatz3ABqllAzrsXTBKoi90h0f4ECp3SgBbC6e+Ag2NL0le4k62ReJmsoXLq/GmeyVlX6oaCSiXTDAV8HNjETAwj/7bCGF39zYQFHsbmKM7r/SNcOVUBuSTOOzX5dHX7XQ0bAf1kKi12MubHqaFo8vPPxsR+Y3GscTA6Fz/GOHcw2KUd1ErxLdQo7bZ9jwJ14PMH7JDst4IUzQZGuzx7MjT5MXoq6UDh/rNdpJ4lPwpDwxyVh0ZLnLIfKyLPjtiX5FD1w58F0OjcMjstKwoALdRBKE5WIQmGas/sNYw89ZY6lQarLSdnSeroCRzkiouhGcFj7JzE2oJNAVw6XZ2pPWBDw2/P41jD05w2Val5kekt8lgYwxANdk60pUVcPjCJg==';const _IH='1efc2936004d4dec563547c2a0a13935f0938545d4436e666ef7199e350aa7ea';let _src;

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
