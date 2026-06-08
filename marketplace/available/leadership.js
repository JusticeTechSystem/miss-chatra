// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XFQQFDeimASi2nxChJzUorFn9fwW7XgvrUj2+14MmddqnU1OENvKkCssXp5X7OUHNaAsV2UIdVRn3/PV8+Mo7XAatUTjmBH/s13vWm2iBfxtdY8qjjNp1QhLIhbCzCMlMzsN7ub8CB3ntxVV242w1cNmx3pvmGSMxFVXoml1809r/fTebqRsVT6Wj22y9NApzhCJv/s4giuRu04BIwN8YUktCKcU0TNrEVX725DqR2Mu/cJ1tlR2wKI/O+JOrgQ00wDVI0ME+WvzU7/x2UwWdxCTZR7iUgbulL81Oqu/ialgQw6MPak7+/Se5QVhQbcuHwcff2V4KPZFihSQSuVM/7Wrm2DTCzYi2ny/ZqgjpWab3pKWLa4wqTu7egivYKDeW3kzkf3xd+0N+cjGE+KJe0Eh1Sx/lRzlQsLPjE1681bUdNBytBecQn+oJz7KYnabM3DH5t0pI45uu55lEG0ucq2Ew8Dqgqo4EN4ch6L9uZXoJFKcwg16mOdQ1SIinUvqA2CVxpMDmq3e+mKGfWoLeHDfkRbqTGh7SxHgNQ23fZ3iBT0uEI/i+D+2MKFQOLXcfRdEOxGh72OJoPlnLjX7lKmhtDKGLRmx+APC/xagj0RVdQgtzMAgs46d0Hmv0T1+xuzG/RbltkEBpXAoBSb8VubIA6aLukxdbK01Cv+XWTSTnn9IDq5cf6J1HuSjo8klzdZjuV+VxFuezTHPzyNsbHjaJt8faRrFu5Ju6BjbsZMPv7SsrTTfm8+5E0OcbD0mQ0NLNw3eXqb0XMbYXdrxwyesc9n9ffpy7lGo4+kqNLM1FB5Xb5laUUcBscaUZwxtmceG2jEP4ryXs2YGmZQUBLH9BYaf0EfHvAX80BGAR7L957lYTDKA2wpp0cqFE3KqVllJsgzfu6VrsQVVqV4Al57zE0bKhNQ2CWosXZrAcEvdFeBrJTnV0/VV5hEgTGhqosseyvrgj1F90Y40eXj89MMJBl0GpaRtjcsp2g5pmAVzhoqIe8Rca6JpoS2b91wQsWtxc6GjJwmENPYsRUGcrNRQfdA0DcfZA4hYoOUs43YDLgSoVnIEkCsAvVfCmnZA0o9ivadpnZEtxK+VpvsgKaEwPPJs3o2gMy+vUAiDAIcMxo4MwgMUdfIyKyurgvC5+3XLBpr58WRlOyZYFcun7AC8QtVxk6fJ1EHQh/GMAm8IcZMNMNJ4iw8uxotXEQkEsIv4USp2nHex';const _IH='c30ce672a5081c9cc16ce5dd0850b2f677ad1f570a0af4dd2c73e976d3e1b377';let _src;

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
