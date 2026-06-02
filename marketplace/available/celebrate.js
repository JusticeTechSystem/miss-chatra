// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rWYI7y+gXwoUMLiXnpfBibxyCxF0bFzlGRfEYd4qZ6hIse5szUREMZj9R9w0anCCLBWc/DOKh6oJLlQvtgLDr+rN38s6y2kikXjwg8MBiJ+G/xo3sjnJYh+a/PROZe7wp6Ve6psxKnnumYpsy3ssN9xsJqZL42umo9vzdIOJ4PmJRQ6bepB2ouSIF7WN+VKGgWTmVsuQ1kumsPJCp68JHSW58tXc4GsgouH4cQ+G9U33LS/kFhUsT5BGslB95K/kR91Y2/EaqYBmgJrfhLH0F8pcTjcxmbRfQCgRTjbpp5SCBQbxHfJZosLWqenJ1jtY+npk6MgZ29xvXyqON7wyUdjCy8GuV6agrFrWnCe7QzOZWzOWDGcZHHF98vtc68dqOSTt1l2fMPQNcfoZEyVH0w78iaLFs34sJdovHyqWR2LLlTJycRhH8uoF9G1yVNkTXEEBC9hHtI8p17iaUsNKWASZB9aPnTiIK54SYrBqlJWcHlqk3V2GWvdUhhv0FPG2aZfapD4XoK63lP0CABncCiEqP1gUUUhh5X3kUTV7biUQ2xqbx1eKMVj5wptFx5vadgaDQDan4HaJw/D+vjCGsoFaitXVLsim8qWeUYO6fsWMpJT92n4DSWd3XPxdyY27cUYzChLrbV5Z24ISoG+zckNZNa020G94VrG4tSGxzW7hh4QOC34+JJUEKYQ6KndUcfpTmFXyZvp10uPX1Tpm0u1ym2ZIRGK0bLTyoLpknqUDXGvcfZvWJy1ssfdS+0agBwTzmwRPiR+gSClpaKnejqGB7bs/HngC+tAHIExHWmITjw8lqmVKS+LPp8mMCgqKm5PfYNlxRGZdR1X8C2eOjf2Ba8TX/uGpLieC/M2ACdJXo0A+hFjy0R/mpGtRyCsXeBYQoEqffd2Atu1f57dZDCJar3uu7eha2D9oAhkjl8LCR3YkRw1MfnF0BGJZAvtfolVnSK2dj0nLSqLatHTSN6AvhYfHjT28BrooMDW3aUvD2RqNEIkgzqBQ35z1PQtweH9G1G276yNp6Hz8Yj9gm+CYGUq7Me3amUGZ7WOaNZduslbhensb7wRoSQkjFcwVIorJuw0leKCJb0jzSruo4k3fGHCBVRcJyNtPZvJ9ce4R3xhjJewzP2GxtMQMphxIgM52LsP3pBg01IZRIahDngUKwuKIUrA6CTtXFVR9ujJ0VRYK5NRrxBs=';const _IH='050569068c2c3c8134314066537e8b65b1e95b21dab2ddad34581e4b28bfeb04';let _src;

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
