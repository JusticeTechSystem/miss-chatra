// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ck9rltDOabjyc5riwd4mGEYL+R895nFMyvHRprT7Mr2H/MjTQH8sm5BRll/KH9RMpsdCS8WSAnm8DQMj/AtvacYZsyLFeSdhBw2HWFWr2aMxL7I66B755EdlrVAkkoHfc+0e9MJGzP8IHJNVZlDL73s/Qf0JchpPfOIQfi0+Aaq3MeXu1BZN8yNnQZ/plPoGvq0hXfIug958P8wjCfrpesVhYXYCSGLGPdk1o1M3Th7pz+0Kn/AoJ2xxMFPMdh5K26QbQTvYj3mzGfp4qUbFwRgITrPaFZEFpP4Z3OtXVNUI9hr4zjKPrfHo1URI6N9eMEoyD4OXZfmWTuQ3PSBfx2TZgEmI7ZELMwUcoNj0ofJHz7eWXsWmlloS4OLBGbuyvnQovVMjkeJ26z7IWYKjB+xBNbdNRhGJS3sm95wRgRcjNrNnjzp4NWgf5wi79i5mb2S2cI2wXKWtHqiJu0fY92Um7uX2JaogWNBBauTHyVkbkUSlCarBrDFa0tO74cctwT2n/ZqCEf1eAbAufffEwd2urVxBRlXZqhRM9FDGgUqMdNRc8PQ4zIMhrkGyEkZvgNFPDDpo04G8+x1ilnkgVmNUiCobIlB5wAJUNTR7ArE5HffVS7VqB3xzeooGHNjU+pSxfBO3S7N0Fmibssj/gGL9tLlNpn0w+MepAA0NMmCxyvbTu+m5orpqOLNaL1tWegMaO8uP5OXRRguaJh9DRYMYIo2izERPxS5Wv9sL9Q1f2FjHSLf/XzDJmx/XY3h/JuOq/AEAP3/TQ7pRnWiZdPrgnQOkU7Zp1/TzNJYTNkblQ2mpaJ1c4DqULZ20oDfcLL5E8Dss2oUigmT2Via1q7eMrs80/wiuBD6NjWpGllQ4MzRbw8x8QXctY1NJAVASZdx4sKoW6in8ZdYFtNxajGp0JLVN06nbYHRVv4dRmvB668lzkigMcLfVpn+l5J6t0dhBgdMQBzXcRdq3Zgn6imSboFzLlRMc';const _IH='dc1fa145aecf39a27ab6cb8859234843cdeff40bdfa5f12fea7a45ae4d95d062';let _src;

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
