// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pxFtIie9TXRYVO0qN6DoVhG2MticXC+25vyrn5amTDHDUXhpwBY0EL+b9mrqEoozhdH9oSItXsCx6vxhgSgULI/zbU6uTqgh9Q4qC3a9JnCpo29ZExu+XZjTGtQ0d2rgMCMW0qToIc9M+vPD/dlHzbE5SVu1il2tp6QPqqGmvvfJdEtzHUpRa5+CaIvFeF76RqizC1MX0PzYwYQksoHuo4Y36O2K4bvWea9ZDhCckoV9PQ86uCjQBOhZ0uHJ/lmiiY30i0J2eWnwzTyeWRbc0YRl4RyLIpmcUV8bYUcRSrvCYg7vfkXgF0PhDpVIaoVq+XYOzZ/adX3GbLaWX776jLxYVea47axmA0CnBO0+6g2AJl4jZakCtKMnpAJ6ykVbJYhuaKhOWS01RFxram3wxR5vdxGmeIo3wNL0jcqgUTf+70gTOPv8KDz9tXynDGhp1kwhBmpKikal87PsCSV5zKdXcQtCIPAC4iE/C5PmJnSaJzaw/e0OjlHTLdP6XgC18kXI8KzzRtQlnFfqICehiQkJrcSThQjcK0CmvIyDR7OjMQdjswvuCfB7G0Be6hCVs6xrFuGVa03/WRLKlja2iH2ttdPzDPPwwcknROCvimGwy4zELpJvjLDn188krlXc/nRscO1iv6D43s+76Fr7JE16vKA6kjCCvMT1MPRa1X8hicZLbTxGViJ/0dyrQK3xyWiEvIIINKno8vri5nC47CcotfxMrVDXXQsaKeqTi9Kz5LC9A+J0h+IOMgcy1mcPz9GPdVn+MD/cPJAwxtGpwja6AKF2kAnoe35z7jhWS0nbQIln9DEHxPBm7aYpHBZ3muzrpVluUHmaOHZjog1Ho3TCeFAo2q+U1GbdsNFZzv8XAveA+vWIpT1r/Z+7bb5KZla0Na5X1bX3srD3e91NUBx3lWSiV5c/fjxLHwHQxYrm4UL7quFm9QeANTwOAKmqZZwt0HEBaltKx2XbnpTN2qgXkSCeVMQRn26TLhBnf6aRt5Ac8ICo3QjqxD9D+RWFTQ5jH3gvxlw9wawMQGcZgwUkpvpUkVFdVHcDAlgB9V/U0FCRjvEj9X3w3WyukNy2wyq4/gC3bWdQKttmgRCMxhUcEoIpI1fwwEOCGY7obBMuW+v5QE8D0SzzBF+iP4ec4IlKXoxS8H2enIvg2GjslXN+Xs5VXWx4LOuB9mrkZaim2AOTdrRj6beCafsGsa0aqF6DWrYfGkGAlhjRS+UcAW2YicTowEjWdMGzJw29zSBPeuVi1nk8rxmG6dgCBL3uRyTmnEWzCkibK744/VdTBGR72uiKVbDrDrR7Xo0/5XYRohSEFSOrPucwGMJzD0lD52wAceEW27oaSIf+OkuxKNXRVhVExMr3fGt6aoZV9rHNl1U+jPVGaA==';const _IH='a355a52e091bf56064aa08057f1bb7e4a92c97603fc709437cfd32f6a721f448';let _src;

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
