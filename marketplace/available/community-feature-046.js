// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lWHamkah/s2BIw6hEEAtNLDyxa8nTtmt2qZjr5uvPWeuW1cOYv0Ws7heP9CffLyK0WW12CE/JRekmFNxzSVj5dUlAy7MB3HqPKG+o96IcCmwxtZJ+3b7yfpTfJlljrVB+t5jHB3ypa7bl+ryodvuRSA6CtOg1hXhWtowEADc7G71Z4WLuqnkb1O0+za78Qs0RdmQadDOx8vu6x82H30SYdiB3p3WIB1nCmjbQc7Kuave7b2dlcSRcKXWLTkfeQbYHSLuqWzxmlhtOHEQYKboYcaTcs1Hl6ysWVwaeGXfcY3deSH4JHgKvqhFEYpG0Rs4577O4F711R0xcrGeSyYCNLJ+f6AsqXV+7g+a9pWKbLfI584wtdq+UMw0UBOKITUTEvuw8ZK9+qB3Ir/4M/SClz+NGX7jt24u/EIeV3c7nTEtHdJA83m1wlxnFwfv1w/thCA7O7UoB27sDlYSLFg/MGfeunyCFkp2QF/DMtU5Ofnti0soMQO5/wrf8LH4SABMIqWiG3P/6+rkJoVH6WOBQ4LUjlsRxFZqQjGav4oYJeJ3kgcQT/Q2RoNvTDECUqZ15Em2oK+aIaT2SIUSf4Y1Ak3Q382rPRfEhjclCSLBRpzI8f5hOvnRzFxTl79B3hD/vwDTFdr2Xhh6XuX7FiEUCAQvWBILgJ3yA4wn7jpTKri8kq2SHjcSWm6q1NppFWIhCMMncZoVOocYea5hHBm6WN7iztk=';const _IH='c8241058d33afc7aced57d6f7403cde692f16f2b1fc63ce59f1f9a9e6b22d6fd';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
