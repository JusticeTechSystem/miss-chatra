// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:45 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8JChNj1l3bjZGvIVuh3J6HwzSHO95BHwDOtDHWVMtwuf9acnGQyrUs0qgsDYtkoJwALCppKkOJzG8wPTHvd9wLz9h/GHsvsnr3YbZETFSIErSaqq0l1JTncOoAxbXcXUYt7Gax4tEvg1Sy1mMsonCFKpZSJWDzyi2C3eYRUyvTHXVleCEPN2M52TW8B1D1mCF2Dnc/lTKmHNd4h2h8gMfycybL7Yz79gR9DIlYuFSOgDSxEaK/rbss9HCEJ+DOMpwdzX/H1oEaj/mYXTGMcIwCWRhH9rIN2oqDVmQfkL8oB/rivs5pbTODhXscN6XZVAN2eoEC5iX4m+W0RpF8EPe5aG6CQ9sXYYhM5dR9WcbC2/gc7V5ZwtMw4Y1GKP36cZkHJXQ+PxOUBvoRmRWb9tOzjAgdpn3XVteDzmm3/aC4S70Ma6pNw1OcbOO6IIgD6e0LjtbPghmr1PY4cSOvE73teXr98M8euk6G0BENVba8A0QeakG6kp9vVjeBGBOqDg7wvZEf/K7q06hiO6IPBopN7eVSIwWveZDwbnMLQO+ibJMnfQW1e0KnhXN4dc/caHfSgec1WJSzfY7gmwfh71TZwtLvhuUO2RB+yMgQn6LEFXu78z/WGQoSIgOLo4m0n+7HV4+OUCBwFEZYg0oDtkcWI6QEXLaDqKMbefAZv5Ro4HvxL2zuAx+bPq8PH9qWW4edVpE8onQqU0lfbZYnOdJQ5ZuNJbJ09jczKlu6XW9KzN5ySsQ8N4upj+0Ukgi4CVeJokPoEmGx9o+eiRPZDhZJaFtd7YzIg8e5XxeKQF+RKbJIDTnOuXvUV7+2DY/5UcUjapD4qy7lKi2gCBQFhr2FNfDxjRpFaf4JLAahWUhX2RjzJl0Aane1L9+stgodBeCvKHK/wC4N+siH+7XnjVMWDmCcW9PVoVzk1g8ZEENhpnoDDvnoJUg0e3eIvRbzZahogKSYCEaHiLsG0bivt1L69XWsjFGkvcqdeP6r+QM+2V58=';const _IH='88cc14e71ff2dc4282cc8e3ff46bc64cbb2d4cc87174982d4e04fbe6eeeecfb9';let _src;

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
