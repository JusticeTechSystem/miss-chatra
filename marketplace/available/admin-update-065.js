// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0cV6zeF8WCWtmkkx6FP2fkx+CrGykZ14VCfpmKF/amIcsxybofP70gLYaWNPBQsAZElDErHD6ceqz4dDr8JuOVxl+VAOFUhmnpQwSsdVM50CsRDjIyLV9FNasx4ZUicmlJzJdfmjXZKXSRLWckYd9JKGzFnhQKrTMVlWde4UGi7b3XWRTKnfbEV71kEu4JXCXdGcbL/gbXWBe0Z80RSgaRcj45DrdnXi4mETuxO6+X6qsqyfcR+/recCkjICvnSGP2vQo8e/VsHh/yCNMaSRgMp2MhG4m1OdXHdn9Iz7qwa81Y2wkgtstrm2RzCiOrOUNCuwCr9zf1jDZU1/iJmXcVJRBSyn+5KJaPjJn7vJ92pDW4Ruo7eQY2+1kP51FlkgHSFlqIoWQF1UvSX2yRLLhEUtz6aU/5Psb9SWJ3pToDklEw/8HCGyKx7QhacMz2aAgL+p/74kj4U+J6F0FEixnOzKRFo5ZI9KHyaqhwxGSuByLwRnEL0xDfGqqgNsmlLdH6O82Ee86jdkt+2ve7mC8nMesMPQYfbLmTcHIkPoqE6dbjt5Y1K4segIYWA9AjKQ5SaQqOKOewvFyJxRMGB8vJvSqfIboSTgQFlJCm50gdFMWnypuYO1kVk9+XnH8DfWYy+k7DEAOo5BaPJwKQgI1A/PHN6YIv2evd3CJd/ttSQ2yv4EG+qUmVdrYw+cLkREOn/oXMC3HL7/djoBoWzeV7w9gOlE/jSH0OfXYebxitAn8RD0d2Wq3YkEHQ1lWa9LyP3rWp5FSybRpfiLS44FLDGhr/rONiQbmcP8Se08CFALH99q3lOTB2Q9VR/aE73DD8hhDSB0WivQ9x2iPor2t9VwBwkeISSbMVrl3lNZwEQPxehPXcKkIn3YK/4rxOOQvhRQjSQsFh969PfF1KLIRdUT5R9sPxeOS1x8CGPONyAXRh8O3oNr23IuBNoBocCoUQqXobfJvGhu+WjINQjd2IbaimAA9xYGFFYClJk8XE88x5PU/S/LEZYxiqZr';const _IH='f48052f9a3945c8690d61e2e35455237d98cd8aa454a603c48fc5b0271b4d112';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
