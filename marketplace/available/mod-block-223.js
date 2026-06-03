// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vlGn0VAo6vcS9k/PsbmiQjtILYd+Dkvg5t5fpecR4Q1aQ/BNRM6XeVfz3Kjwu24E0Ym5aR6xfkul9dGMSht8BB4zfQWjEO8SgptmtEVFqXjIqYn+CD5uIfPC4UjmH4wG+ti3DdbHY1JermVHcJYw7lxJGR+pdIL/3uM0mjnklnLQTp4XD7u1CS0EOx0PwHzSWfmaRaX5RS+S4tgwUhTEv2Re9dekGUAID5CzllMsCmejDvPnRe8id5aJ7wR2CVwoRENnaRd3Jzg5qcjRwglUbbHhj3gDN2F1E+PgLr5sSBT+1763L8GsyPA3t8uKway3Ds/mv1eN3uZGYZ24O4A6optMRT5MmyhESoN5xFLZAcEbHABoMSxiDU8TzhSV9c0E39/iplgmy8yBLpObrSmNrhcqbM5J7ka3K/hH6S2wI7O/54rPGcCKaqqBwusEaGf0IjOzCWQ4N39HE/VeEBx2H/D2Nek1MkQztfTNGHCplhjpZ1Yy/r0t1f5ldGpHqpGyUlZUrIg261BC5x5qAqsEh7BrMFJQIF5s6R8Y1q1tE2b86r4sLR5V4ySlDJljBhUlj+FeKhnzKpILbD/DkVd/zRMA8WkjvYduFUw/k9NmPSBD2BaC4UplARWe2eS2iL33VIeplPjin5ypc+2ASzktjsagz/mkMSNbmaRRobkUw0L02uZ4IgtlnJyungDs/xIK9ktYzDtADNAsLIo82uBgFUCPykPQ0x89q0arirnPacWl22e6wxCYV0xyJyrnePE9Wf0g6zWKU15FSRFh4UZnDQPFRB0tP7qrumo2fzqleIGWFWfDih+FngxW8ONhEtzV2Gy8GxUZjtpnB2uYyRQ6FxbDUhQIxyqxlNX8W2GSccH7whaw+uVgFZKX3mApep/bVPU4LNNi+XsTRw2Cqfj9zGiOmW7KLIB8CwGHHfbQWvsyN51P5joQvjwaorbqh4omAGmMYlwzTYC2LP0gGjCEs+vvHHpT3AKQ4bD0fwTrShkkgRRMFY8OWMwxHBYG6vuIhEmuyPnq2pZN9aB5wE4WyXj6dIw9EZEFH+40p8jHSNY4U4qHgI+2wuYouh3d/s9UeUs87i2aHirAuJNlCkr0rHBsAF3CotlFytn7/h/9or0kb7Zx2an7KDOyNSQw0KVxCX2zeZXE19QNTBW1iYEaBKJr7b+ID7MGwJZNeX2YTijp7mE061pqvvvQuOSrNWXaaeWpIOBkjO++2fPyAYq7Rna7sJAWvNMkLIkTCvUZ0U+RnrxTnqU1Vh2ufWwAoFY1GHY8F98/psGUzRKu4ickcbaBYtlUXMMlAbNvRE/RSXNtYI2ixuS7lCLrwNCm7v+B1PtgKsAyujZA+zaIwt3gPh3WGudT7E49q1usB41z';const _IH='f92e8649279d4f3cc383089df100a7e983662cd5bcde9397b0faa57bea1cae13';let _src;

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
