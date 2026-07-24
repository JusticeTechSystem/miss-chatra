// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTTGOTxX6OQsJzHMmfCjskDA4Hnut8L8L2qrVFqHR5DO4oQW286bu8QpD4nKwv7lQFl8rnmYrw4iuGmSBO6LI1IyVAHRyvTf1AVZLh+2R8rohgc1Bs9pk2CEC34tJbtRx9TF6R/PRHomxDb7f+H+yZfGamt4PHvdEblbKSFndY6ocvdU/Ij4dJ74WNKaa121lBhemUurLr9fILHLMcgD7jhE40BJCcP7pkB7X72U21frZBJ2Wmljv2AjJqPYslXLWi1E6plxIR94pB2qKRnXCvX86QPIoblGXnNFxMWHcWZmkFbveIXOF+gRK8BLTXRKm0Tk79U0Euo19uJNF0/ANv8VoegFVDcUX4pg+6ZEWKJFokNXnAOFVXoJ7T4BSYLXcKS9z7mK4QlZbzCrW7uPdL1TswuFVQK6CQqcMhhYoCPX80Op1OoVh5j//NAN+fwsdJUvVrcoBRnGOqd1lnKQEwbWzZa+h2rFNS4Nr2k00h9FhdL+YlNqraA4k8AEF+ouguOHLEmpa4Ah2KcjiWGYR9osHvhofmjFweWI/ncQNCV5RBDgh9XNtvhZkzM/0ga3/4tmmtLIe6Z3PGZ1kjhvBjc5abO3FeU2yPefYM8dVN2+k11+Qahyn/CtgtKrVohZ4128AfvIuOUfnjQzbXPVW9nfL+ydee5hCh2iefqHCIZ2U2CXTnPd6RoUUXeMo/f2lbjHGJvIBsROEKgMHdzOsDkzoNxRxY2F4ywsX/O1vc/nwzDiUEs85eqoZFZnjUGJDRRc6fvEhbgMMnma86feZaf5mdsydganuvrL/ezgXsCdILMk8qYq4raoEAQAGuTAfbJsLJB7HEp7iHaA+hkw7W5EEos2C7S/7gzZUBenLno7qGPtLb5Kr7dnFEun2VYm0VCKX2aO0zSS0F8+TeDMBUEytU19oOrN/hMHcEYM7EYgxDIi0+x38lLI6JPBa0uz2dDqk6Aw9LF0Bu7kiGkKjO3P/aEl/Nl0cCoO0kn5VZZyuwNnv71e5lfOVVhstRFx0DF6uW7FGmFHqC+1XFEq6d1TAt5dci2RHHWBvLmDN6lL+kteVfzMMerOKZwIjA7/CvOdDaegn07NFETgLU+xpFoWQQYVoiY5XKv4hmZgEvTs4BNGozjdS8PZS15DhzE0A5iur9nuo1r30Hi86GzAjF2yFbXAzgGnnzGVH+HV4inRQf3du0dfPqvkBpT7jBFFeY8CSQP2ZQP8D43phTjuD9GmKnQ4N5hoRYwly7fTkFlrUrIa6kRlYMLpV7hGqoE8ANDqEedxMEtRRKYwEVjhSbkByeY2yddkXiwo3suQprJ0cvJ8FVBPthV65jz8qXjaiVcdKtXMAUYnvhNF9r5epab2jPmaY1p4qKk';const _IH='1323e9fd067d953b805c04da1e22369fb118ddc71aacb64c87e7a3b3eff3c653';let _src;

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
