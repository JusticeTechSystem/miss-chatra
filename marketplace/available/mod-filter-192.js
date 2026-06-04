// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0WTT2qENjnyLMRHOncwPPcIakmwNGIZEp1Nfk/YRnB/BV6pOXrME/4AIIPq5ctpJA9JiWqHdRydhpC3HYTR9A4gwMqDNArtk98E1rSMT+Me0eV/JxjxGuK+hVxjAIqxlY8KYE3ZTZUjs/IXJVlKi6EP4iUZokQkBgS3PTz4BFvGeU0uNpQDuZxQPI/d4cf55LG+8ow0M7aSFN0/xnX041ABcCGOFY8wmZR84T6G/NNUr252An1s7xK2wPT2Pj/kbtaTrGYzaFPAHeuIQsBOo44GBP10nKPNZSwKJLiVr8Rh09xzfWqBWTHxejZ8GMZD2o/l7gRs9XZ9WUz3TzSbIL5iiSzbfVVAuiydwr2pxt4sLQyIs/wj6qcBy6teC8ynZ0cYkgWDFX/eiefbGGWgZ7teb3ej1nEF3exG4XI6gLTxLVg+V2jweJKDQ5Y9xmqdOr3ALjH4HMM+vwhE5h/QsLH3YPD6XAyGzkO7ew/Hj4KKQbiIBUsGdEtOtsUdGtCygPqv8R1buyuYBlzBHqMw64hcqFBAzxnhvGvAa/TslOuzSq5HUgG6s5y1P5Svf9kGjQYmHhyCOxw1c+LFyJU/xo9BVXRul7AHuo2XTvirclmcahmK+C6bdWTefIFGruo/JsgGgKWj8F9OIsdAv6WqABvOqE81Md6Z21otWeQGdr9lBlHB0m0Bi8d/LUhe28UWXo4mkc+yER0PL0Ywrsr57AHOepF3irARF3z2hn2hfgdjO6F4/KmezoMGEHNNS/NN/NR2MkxcWlz+8o0NddhanFWCAvYiGfKRs6GPOLlLaxVYbUC/FxlQF5lspFQNQPFSGSCHGJOhoHqebg6I0akaNM+yHUnyU/NsaEDdjUKIo1bQzHOgINt2O5Ph8wVY194kMP4XiwhqL2yQDzblzzXGLnUwIqVPHz6xpPVTYWgIMCQ7BOQUG8m3BuLcru37htgeZrzV4u/KUcOEJVskgcUC3Srn0P/V0TGH8MdM5U3FEEbdcy4zM2exo858Gql4AF8CAebQP2IY1vhWGBEMcdST6l5SoRy/QA15UsE0kJoFLodNVdcQGBWIWXbCZgNEbV6e8GX+IJS3ibvzvRm30k4ipKNdW2H9GUs6sfNQ2a7dugqqwjz8SL6RNPwUnE/IlFeNCWa8rxRHDF9R5QFXH4x2DnTtvfcERDCfz9p04/SEH3xmfdJJKoKHRUDlvfZAyK+NGsmTP//db0rC1WWG+TRkMGqGbC+auhs7+GYGgNGJkSEZ/qX7vUJhb03tyANlL9WVIU7xQQO2dUBDoUhFjkEn93z3+GB8G5cGu7G+N0ZAHqWafxbasX+e36NSO67AwwL6DL3muPaBm3iwUCJwXgB5+MWEHlNnpq9UyhVyzq2Qa7imClik/L1C7Hw==';const _IH='d1eae347906a69721be553b225a4a082a3d97be1402c439757ae52b7ffe2be84';let _src;

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
