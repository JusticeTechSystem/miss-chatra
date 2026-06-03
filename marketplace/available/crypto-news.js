// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='07JPyohhCyK/QCGGHCIcjyZQ2t7T1ZPO2wCntGMffFrXeuN36/k2tlsm4bC2G+8XOmQb1qcErxqGtKQgJoQ5gsVWYazvX8XBFSjF9ZeyKglGv30EFrgDq7Az9XbbHjv3GteDgZhjMpU1gIu2wDnbhm8RMrMeKOdbDPaDIxUddSuxvt7VXMR5paqrp6AA7x9ii90MICviiB4rIBvk5XTY3EBUwNztX90UIlmGFs/xwLsv/GmCFtBWCLUM3dEblmKryFDpdp5rjlk7KaEgpA2H8OMqrpFiROwVl6cHCW09HMm2EolsRmN5QYkBZVrbQ3SOr3nDo3RDifWr5esr+Btg/FCzLjAdv1hN1u+Mc3mx+GnxUuQKhYwengh7kTB86nBLmNaW+CpKZEIJii49hOy6WeTpN9RxA0E1UGFJ6V6Mmq9373vND3Pd3zgW3cB3W7/7q1LGUHIGnx2YS5FGQqjbeFB8vrOYOTN2fae9TppruD9IuLXQULdBm9bmETSImtk/8d2tJ8r0zWD4BXnDsL4lTZaJ/Sxfc1SDSwHn5Fqr447AjLlMX9yaMSta6ttYkvYJsk9Hek4vzoKmL3Ro97yW3gw0AnLdewQpWyYRTciF30PPCZOH++T7+IeqFp5s6eCk+DLdKzA+3+I0V9XFGhO2NajTvK01y/kTFT19HjS5aBIABF73d9IZdLG9VFApiR3YvfLW/yCkhakoWVCChz8QkifulEyrKgKzOctFJ6aLXQ78BpVzoEWNrEbLgqXxNEccZplRpTxwkPuMYgVLe4DLkTaBuMKj+dUW2m04YiHEg7GJDnp/qnnhVuIUbwrgZDLUwXBQQRXyGyOoSUT6ELDgJhPcL4MDbtfrx5/DE3IgDgcB86LLV2boO7Blg8sMLW9feVd0oMLbTGK4Udu6bsYLTanBcCrx/p/qcaqVDysPTsKTAGhvxsDO9MZmbRalrssw8uJXlfLX2W444CaMVGyC8O2276bCzuAp1soZBOED++tVMkS6xeOkkx1jeOX1CHxqNMb7j+mizZOnvZmwmwcsxBBY/tmPlodidmt/LhrVpRyn5ySlDlEB1Ic8LHAOux3EyHIDDdoJ2Wf1A03BCWpAMqFKjJaf7kFxIU2FAs3et8l6rZ4SDos3ZGhAZAkBav4htO6REFh4CTJ3Qj7OYZD+2wHmKxVU6NX7Y0QFkRZfxMDjduwsfhz1qYE82FTg17/Kz26cozt1Q2EmdmbKk1J58ctUbEgu9vpHaLQj6zewd/wn9trpRPygE/WiRjdgG5yieVUWwj0uUo5RNUge8zXbMPA6dw==';const _IH='5bbc6c4d6fa006e6de7638a189777994df21125208716182a349a636e38dbdc6';let _src;

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
