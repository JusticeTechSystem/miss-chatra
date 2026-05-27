// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eK8TvAJy8L+nML2UfPZbasIR0fr8TmZ3V33h47+NvAkYls/rcLjbsdLeTCIStPRSZLfQ8s1GhTG8QdhBVWwguBQpbBph3jtQYH1/pcWD32X5WU66zvliAL+OkRNhikihLzvvqBc8pAmq1fvHuAXDOeFt8+CDu4JgnFNERj25wcgAN2DFcZccdnwLGLduHfQR5Q8kWksNY1mTEBdmvTkz8adaBKpBdKTefeGhu8onmv/ljAgn70dNJY6x8CV5uFyMiA/4fXOxrTp1cjj8MnCsm5mpew56vmhtb2bTAYSCx4K0TC3XAgA0KSY7s9HZtaCff5W4hg6/LVJEEgrfsZGAGUdrSb0qS0iaPC20/8uf5xcytX+c1AiFH5JZfYisN6MRR8MPsWvTeKb/ZI1iVkQtq8qXPlw2ZgeEi/pPUTY4hXUNtfwqpowumxOdH7iV0UdE9d5tVvFBQB7KsEk0PzXx5AXUmBeu1vgAMuXN5hfX+HH7t0Sd7iaf7xvp8I+KuZ+tLK/30qngqADvw3C67VsojsmsYjOixUOna1FxadhE4nSGYKHV2/di+l3+SvnAsR07m6le/3k7KNL5JyNSRG5uHcYbOY7oultEwUTn9TrfVkl/q+HU5s6QuoyGTgRDDrCdef78Eh4Sg/hgtnp2J/nZvPDnZvXxPbx5qMuZ582ZIfH7Rsich9YQuGKg5ij/U3fLLMGcbUwaJD+Q9jtWPdTMIjWEdf4FxqKRB8Wi06+5alfJLj7j0rPXeGPV+NzLN0sHzLMKeZSoJFi/xbhHEbVLLRB+HZwe7McJsXhR0tYpj5HVPgF5V+jDCUuJzFS3Rlz/vLxUELK3ImdBn7izY70hJvJc2NvAl4L3s3s6dMgpHaleogjRGodN2PwvUp+0YE5/wDT2iG/yU5/Lhf+gzSfm2BrNdXualVUwIMikeU90ctyr/jWA2Z4UJML2YAvVL2sPXJ2qq+RyXQJGlkwtuPqMpqTilnOL7LS/MLEA5XcpJ2v6WTPyEylWAIsiE0Ewf3cQ3SlF+ISkHhfRpg9owr/xPi3TzgqTYduGnRu9GpXBNRK7++KNBhAJkMzFrNiTqOKQ0ephM0doCUCl48gtIK/kgrISbmx5bwqyC3tENYpE+F/yeR16KJ3ilLWLjlIqnoBRr1WmnecwHHI4x2HzB9J/Y9TCtYP3ohCybCaNLitYukrGdfCw/Sw0kLYZfPfXl3zq5PuWJM1zDg==';const _IH='1d0757df20942c9ef16d76784c82c24ad2725a0bfa01cbb854848bdbb9aa8707';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
