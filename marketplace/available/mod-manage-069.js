// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RFm/qM+ntQR5SQt1yAHgshZkT7ycKLGOYT+vW2MjwSOTDPbNgJUZ6GYfrbIilayfspeMvB/KLPWJSBjsspGyQalxgyaNxifobwe2GNUWfC3WsvE/l2jfGyAjRc0MiVFEDoZQxaVPxZzM0ZtsuXi95r35b7CWcaPFRmVDfGR2RGhawJkkhb3ShoeMZ28psnzPZalnwzO4gp81quNKHNiKVCdHtF2hMfa8g5fFy9+FFsUxFho7lJvicqIK8NVVsW6bER4eJnNHM8546m9nvZBgk4XjhSFPqpo9fWYRr7++S4dzN6W9wDXQznEdHuH8GpRFsvPaD6mZXpF1WYIDPBJHTSarLMVXopJ348y4vdSo6aGSxE8Ppxl2Uz6ab6p9PLKEsRBuqBThKXkfxbFsMs1eY1uMDA44USq17hs+loj2Xn4QqgsfjJxoSOh83A1AL4lqC9380Z9zOF3DZx0nWLOTgYL7F/JRoXcnwtUgMiW7Euyl37DtFCbJMxaMHRt7Kz2g4P9tjyjKXt04P2HQX0h5wT297e0YY2mCRIQxQUj1RMh6wSodvXJRt0Fv0zbnCwZMEYIkUSXlCsrcffpX2uf61NXHLW3jg0PO86g+zSrU8/e7Pfz9/oh389bRfyf6+63rC0w8YCQ8zC7vLx3Huql5pNOMzSxIFazcCRRCJbu8edktSKoHcub635Vw1D7O6z/FZ4+K53+ii7zLdw3B0Ic7zCtJsFrddiOqlnliUbtk3LFP30zXFRS+zrr818fhJJGHRi7fobO7a92uhFMzMbxHzSo7gPn5FOQx7SwCyfkVUUhQIVwa+TqyiA4msJIIxS+Y3f9isIi/BvgPEMd8wLlFipqSNUJfE6eqGJh9hfNEekvMjojRA5nfR0t6KOg8zWDr9PpkAIoj4WedspmE/F74e4lxbqn/VHNg7eeMWO2GzNy0Xm70b43VcUNVHTSR6rhjLvcan4ZbRBa6fxhzEUDPZ5PQj67bjJkZEkJNeGhRs5ehcQ5FSgx2wuyZlgzH/ZBS89qMOBQDEwgsqKBkQp7qUNZMoBFZMco9rT7gMdrhxGmlJ33MSwD+psAPGmGZt8x+csMo1wAqS6Sl7ZBNextVOHlj55+8OAcYLBZ2DX0Ox48LkSCkdhDDpssKY4ajuwDgoL9ILMhg1I/i9aayLGn4HRcwnEbHkUeR0o7LXyWsRlnCfrMvOqm/rB5SXfo/bCIKwvqLKaSPBDJ4CKrl45TLFvN03fTyXj2djh7e4vchoXCJOngQutuEs9cFUF+/G3PiCdvh2WDukD8tSQM6WH1AfjhtCfx18/L2sHsDTEpKrsKuYXK9g04BdhgJIxLGX9j44jMnmdGM5TVKPzaRpyCrwqHZ2M94DUykuC+xAvS0oDwhsU0=';const _IH='996ec76e907f4eded1e733897b5bccb0b57c2533473a87265c84c33eecf85215';let _src;

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
