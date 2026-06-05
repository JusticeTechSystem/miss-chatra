// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jcDK5NG6jYJ2aR/z1Scn2XpyI8ZUtBuiu1NzyOXkO2j98Ka6GewYIxx7r0ub/R4m/7xN/ahyrBFyJ0WehqyHA8XnVcsvC9CvuThvUK/X87rwWTJZr4qzbQo0YBD4S2TvdprF3UKLoO3jcrwuS8eFks5kO5a+oiuiWTgJ2RzEyh1ngOQuhMoHpXc2Yx5r1/UQr8llQzWz9LTPf7q1NX1bSplS0bqaUeqdtsO3fKti3AuDJGX7vCGdmrWJyrFsFwx72laxrEr9vMFB9tK/k3dVls0IlgCS/x0qbtbdVO7CHGszFcvo215Ur67czZF1BzzfeBicRarwpnf65Zx3gl2EXNnkiNtx9jzYJLBLD6A6OAzlv9x2GlxzxbXBgJymBnYhZoP3IwC7y9b5cj/rwHu325+D4Kx2Ky6+RPm2yqMcEpf6HrIpAwxhFwkMMExvXojuWJhgJ+OuzGJyV55Zn8UIN8+vvK6CfUQdMy0AWactHm4KB3nn0OrPY9y2cx8ClMx6K+ToorUMpnAx13V+PZvrQ1EFbaEpzdwgIPe2IZh79EV25WNwX0Nhr3MKyTfmycj63IFtivvsm7VdUAqRhIQavOIE4tA55gAfCuPutDUBBwFLkPQRePRsN76aUppHR/6vqujdHD+Fui6XEsp8FKvjz6XWWy+etkGYimRR6V6RS4Vmmx+S7H6F5M60Fb527NAozN4R77bRr9ieE962NY8XuO4rjgbE3O21Hh1G42F5pppdQiNP5uPLgneljRG+54neB4ZuAWlzC88jmKOH3sTfVbd+PaFBPg1qdJv/0H1r4/SaKsphFRr/qCKL8n/DpBlgsU61xzHlgNXtwV0FHCXGIFwzUXhZG6bvXg//Yqf/cdmZAwF0YF+qngSUPaa7rCdj0KdSM5+3p2K/K1ZL2DcozMfoacezjwH/Plj3SDOBAxPdGprEIKRk0W0ITr59lRJaSw+ppVwYnAYiS5UgwqqfMdc1IAU7x8ufLn7cZsWPCKQVRgiYuzOLrmLUawgBAS+SJJGO+rJrp7fbCtF/j5wMGqGAPK0+7+3B5pa8Ts+47OVNchtgdUGtl9GbcowCIpeMguDHNmGdMz3PszvkycJCoOhJTwZjzTQal7Vp1vmDzMJpMr6GfqDpsFog8b21KMvAJQfIKLvgDF/dAku3BQDNdNkDhaEQSn+/NN9dUJhdeLQBC34OLLsHOuv4XlPrB4gaAyX24DvnBpQyEfBJc6Ze1cMFR88bbwHzwJ5XAfG3U9eL8W8Cb2pWTGhcQygPHkPav3jQac2nY1uTmaNGlqpT0QzxMIaDl2eLfVknVAupRaHgMZFh4GyZkaFs4lBGApS7Hke0XBwIOAyajhqdDmH2SMxuBHu61pSi9WC87qUPX4rII0VjMTGytA==';const _IH='0141f77df990a5f8c2d27d1d1b88176a103126f354761a711473d37055b90a9e';let _src;

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
