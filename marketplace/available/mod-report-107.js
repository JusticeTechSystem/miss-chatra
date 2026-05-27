// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0vjXQbvtRcbfLwltNvh1v3fvA0/F77aM/yW6agUpbswA9yzEFG9fExP8tx6R//xn8OB2quxOjQSYBHUuM0Bqhj9k0R4wbQHKQZgNGsvNr/tuVgNpLJ4sFC5VP3+zuPTOmLmIUlukcyRPAz0buOsGf6UPtlQGrlcaJmS/P0eksLI5ISc57XSc28sOKLZrl+P/bQD7f7CPxPU1s7+VqA8kN9sAYFzGD++AuAxOzVSP2yOXWinqoh/McCi/Su/oDmpVlAL5KkDY4sVzAxp3ceoyuJQoZrQdJc0oIylJS3AJMsaV584/kPVhCwA+k+zqdw/uupvAQx4DVaoht6XYojwaWJi7SL4Sk8d2mfRC2mEbPT7TiQsqPP7GVQTVsXrdUm7sLpopNBoCBURPscYErpDuHeiMqauYXGE5PzSVXVvJAzkt5mnbzTXX33w6NuXR/VdBsXu4gwBKwl3GZ+yhIt2LSqeHb1HJDvIJ56UIZ/4ZdniAoNVLGW0cUXFnZVfxWC6RzFFc9w6hSGNu+r34qKXEJO6Gbv0fEUswzHiXxSqreS0VpjemfyEhriIsRFL8XX4fWEDxXb3o3X4mGYQ7e6OUPM9O9JgeMP7sbHbuUU0tCcgKgbhEIRBtZkvJE7Ae5rX/zqv0/3cEKM0gvaZy+5YikNZ9apqgi1JphBHPECwLWaUc+1J+gjpYj2hjMO+Bb7/m8roaGIim4rYUvTuJz2LSgWpmqeWgTywNjdzqN7M3HieBNRztnWUWu/913MlQanWdzSWPGnm9U1OByVlPQDCIxPVIUQC8T05Dbg2gCpMgAtPHdmz1cUKgTxUtZwEm3u46ihniShyb9qDkhP9jSHnx7MYyHIslvunzz9c4oGufg4VurjT1KUsFxtGhgta2ubgJdareLymypYAQ2uYcAIg4MvNyxZmTIAypUF04QGHcftLjOUnobf0yVs5yqDiSmh2IOH1DaJrnvTiEBqHMYQgBMrF5vCeEgdSFLJRxMiatcDsEvjr4uZFA03UMyEOIHpueejeM5yzaQZBFzbcHBsayefBkb7N/ZjG6bGffhe5a6itTJlEotW5ErvV1CeWh/uQjo3e5gNBzGYtz4YRP+b6zZ+sP22dEFhBgED7NEsXr8tk+nJ2xONwiC/gbhTF7hX3YwIO4H21bvYy6zPZDSIG/kY4YM7sec9lvsclMMd8B9+KbborSLokus4HMv/Z6s245GPtb7Nuam4a/hciuPIh9eskMg6qfYaCw86qp3dI1RTyXKJJkYj2MQcxlN1fg7abrM4giZVZQuz/i9AyCxgj6OIedgpeI0Pmmzk+dP2LKBobzqLpFDWXEffs+pARYjW/FdK6bBbdaXBrKybcEKrMIjc4nEe/kpvOO02cQqiBQVTGzuhHSmNi4DQ==';const _IH='8740be003cd827b893df83efe86c861bac93f63dc8ec6bca17425942427aac18';let _src;

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
