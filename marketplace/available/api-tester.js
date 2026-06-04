// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1iRLahPNYlhp80n+oW25VtoimeT5N7wTfQi8dnuAEUeg92TBPIs+7ojFJUjLHUMSBfWYjBwOTfXiASqvmuZIZrqYXjBwvDJDQykEZX6PdujgPyg6LQcefPPi9sDfnou/XnmzXzFrxcHE28YGEkWoT5piyt8oaIwghsaiwRYsnJyro4DOFr+7MtuyYs1m/k+6WekvkBa/1n0j1l/4p8u0dVgdflU313HIm1p4pkxP7LWt9mVIffAT3BEHiqQK/NM01M/ySzmhDRzkvqtFnolLyjF/wQXSxQHYgF0GO0HoFgw0Y6YFVmUFE6VXGhKbglscJrtgen/cltJNykSX7ieZNm585p0PuMCArvfxEnOuyxV2vXgy+fuKfOr4tRtBMqdNV7YnHAAJYx6lpE5kzTipvp5R1iJIqVWAuYN8/n5o4L8ouIXEEKA07+Yblh+3ag5EXXQFuTFNZp82fB+VC4+Sjr1H2vlOSEkpIqCSlYftgkB0IFw1aDPboVxg30S1NJqPnY8F9Ub6AbiotNWTlHXxLQyloxwZXWLCmSw8LdWg670k0gojksOprE6EhU1l2MOrCxBCmxk+5lie3ifQSUsGDxY+kbd4o+GTIdzeSX10X7DVXOaIf15F+k0Zbf/eLYw9i+9vW2DNJoXF+6aq5LOaG39caVL3bDwoylLWq8Nd6xyoRtd+p1p0ekoxYsp3vjrcqzBZqDjWHW6a/lMXov2kho0HQUZZ43Tg4mtJ4Bq3SWl7jioKHkBWUO1bZaM7X4Ps/gf428EXVZ79SYJ9s3lQIgsxL4GFDmeQnMn1Mxmu4OTCFOXvpGcoaYwutMgufD1xsQfd4Rw0WsSNwofCKmk3CepPllhs+o1rID71M3o+WFdQVOgS5USJvD9bjVTIusk6+u4WAV7sbGQniCbwAS798eGVO/fKpHMPe+eOfFgWLLUnuc4bbWTtJuKqlh0q6gghQxC4usd8pjTx0r8J6xf2tCz/bWN5CQUxg5tAZe5EM8QytHNoWTWTHjS1YJ1Cd2QlGZ4reX4i5AH3NdJFVTzDA5Nm8qONvCvAFkDvevOIH5u/dV4/hfbaOZzk9Ko1St/f4buy91JT3Uhsj4WA2h87vKEwZQws5mPDXcQ3Qd/OI/9u9OeGZSToEQbiCm8ON0AhdlJVPaeSj/CL/MmWQl0BWN6QAVncPJbHnwfh3KHahWqj07gNwvefzzToZEntmeesNBgKm2Jb9WPZYlVJYI+gbPkEd+ENx+8ffjhBrC4RpzyF/hqFv9jVgJjZiCBOBpAS9+ofjACcSSSwctcqP/lNxspqsp0cv1OlOQhUBZ3ZDaA3jNqfYwYRy7dNU4m1PRKodB70rsAmVkCt8TY5k675qqruW2UJLNgPABrCDfGd4QMRKkxXq7/ojl8BBqOTzwoK3yGfUfL8iMCzjlfweZi6aoxYtHD7W2qXLi24H/KhSbMzJAoGhF2qb6aqpH/TjxVM//WhCyFhdVwgEL886dFJeHjPBaTVNzKKxJnHbcpBD7Pdgs9+ly0mMK1BLxFS2V00vFZSOnDKaIT3JR2Y/3arY11w4emrJg==';const _IH='407ac6ffdf072aec87bd60a9745ba67df52a1f6d6e27963bd57a0d684fe85f65';let _src;

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
