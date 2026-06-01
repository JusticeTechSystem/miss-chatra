// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:26 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5pkkyrfJBYZo7/jUKzHj83F830vqRZtFFopPGvASCETe9xwXh3+OlQ4/S4EFo/2H7gGfgXULcElstbOKDB5+vmhQJIDdIYFwsdm9x2z4f2uzsptiguHI/+f04NocHsHiyPEdVmMIkESaLI5e1AsA5ey+rhWNtKLP01Jt5c+bQSVuFg1jGz4hRwQ4mwRnW37fsBVE6CiRfXST2wcSiMq3fqDdKEJbPChhsUIAy6Wuf3edRFVQ0zkImT470Cto5zqQchT2lPiFxGX3Nr8aDDp4rtOikHg0Aje7Sts+4luZNq0KEibN6l/nglNnV+CcDH1wTWodOgQvKNlqP5qiH+N2pyVi6wF1B5dYziHpuFG3sOJI58k/r5EcE2eYdWzh9/eDgAJGObB7MAsox544LuzHpejHGpEHSyb95a7vHRoe6A9d8Fsgc7fYDlTnHhxKzWumqbLlB6rgOkwr0L0WZCxjSNE0KBwCQO9l4f3NTt08hxYDSk50TqRT7V7DKIf8aoqd8gbCr9cJc7t4ogJ19RSuQCI02g9hoFHlwOsutk/qpqBCmKIMMg76Pj6XFG7fMfONRa0XPsR65UVxpBEkTR1YXLPh2yQ5fZju2Ji6zSFZA05VPDYCm9nkv5/cgcuuKDUDNVQyaEtac3F+RDB6BIghoANdyb7e+vvh1yevN5yf1aEz3gGc6jTRqIkbGKL2VQnxIf80OWfcgnxo7rOoXCsYNHE2wn3qgSidTKwzdefcXAcOxPuVC7HfSHFsGnP095Obfh5UNv3PFAWzge2YA/u74LMP6BHT4ndsHIC1xw9tXqY3ggfhIwowb90UEdI6/E+5Qd/7w0+AB1iZ8CWaHIAz1O6y1vhM7bMvd3YxhBp9hqFYnk0ok/Z+8/K+j2w2s5kYTvakJH7ivZp3HZU1swbtyRv65k6seEWP3YEqMbr06p+YIL8xn9e3+adBWyTsNow1KP/RQDDqNu04BgNpsVgatrtrzjlKaDM5J2MsBWYRv3beaOyhcJSgxkcThaPGGm9gntp4ec=';const _IH='6d3d94010d0b23d0084210cb15e76a403276e5e54ba35cc18d3d1c73de3e9c47';let _src;

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
