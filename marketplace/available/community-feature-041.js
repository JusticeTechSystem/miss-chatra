// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='799yg+K1RKxgGPpV+eY+CL7GRJ9CU/EeYCa74+dH2Y7C5Wh2d3uhnQGwy4/DuvEazKrcXNFqVVFdxiX1n2swFRYhOAfKf5VdyVtHHkx1gqhw5HUBsplKvTK7ktWDTiJAGc4ib72JYvwgS+92QJI9As5ehC1xj86fZu5gZrORjLhX8Oku02hroJr44KQE3yEFiqqIpSlcRAuHWXzbpHv8Abk0CMYttu2Sd3RdP6Qdya7KFX51erpKpF7A1zWlZe02NACbY3/YtxeGbngsSo3ydmrYNTH0Lx6kLIKjIA1tu1xcXkrEn2SA82vcFLcStlQpCssXLyEe1kJtnhMDt6DeROfSWmcUWFJvCxOS4vCJZkTQl23vnXoc+goocykN1DJPPHcs1LlsRwX7KALd7fS0cAIrLp6sioEvwaI0BOQ1meamPqDOvLsHu9Xta+01EYWgv3SogbM2kXESAI3QRAguNeWiqFJl9xp2kx0QmScvNjKm4lm2t3QJpcbh1DlRRskJDKY4fTyya+mKmJr3vZnwhJMXBxGKit2E0dBFPBe6Uk+Z+N3bOn/Fc6RgvAM2FTrtREj0V/36Z/7Tn7meWS8feIpEJAhO/UA9mh347cRUuWIH5KW8R+JwxznIc6QdLWLSF0egCw0ABSt0K8nkx++6PCi1EJ7p1hkRuGdSMYhNzXuBEDRK+44G/J0ItRB6ceceocChKBFQNVoPxgoPsTNsZ/9CxIs=';const _IH='37629d6e51666854295ba0f3e343b715896f3123eccc8416c6431f8544dca142';let _src;

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
