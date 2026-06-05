// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f557D557lDYOg+iOhcQqUbsonDybaYQQn068l+Z2hs0M5Knp+O65AioWJoAcM4yhvN/XhHNBbTR3B2/WFDNHGIVuIp12+YwoUqlO/8G3RFbIDOwCGplD3+4I4pMa0wtLjHF4F8Wr2cNJT/bR9lbQAVRsg0J4Nn5cjmodY9fwPcT6jy5zt0BozFMwsp/TnKgesOg8AapM/S9UIduM6GzAwVBOyDY6yTnhp99PL2A8ItvcEGVxi2NQmEsUCC8Qug9elUqkqwOXpFdi6x6zpORPvPodYcJ1fqpE04liC9J3/FjNAqkRKJ+GKatykNA562gW0jYXyoXddfpbw5mOu8kNeEmH0a88UwhQDlAG1lGFrEOgXnn6pvjDbQ/MxWeYHauVf+FwcVmuleu5rgVO9GWThAwJQRq2H7zYV96vUMNPLmN+SVJbTpEt4nQsYcA6a3Ob4WeGSdi63bFrezwx+TO8iCFMB2aHeG9V1Pt2EV0j//Zw62sqc5NwmndhTUSxBPwqYEXoEkVCnsBmX/H0amCpPM0Be4bJckk9y/Y0ce6BY6yiaU4mtcoslcZn1v+rmmfRhEl10hfxu0lp3CBKv3yEzw3PLKeUg4x8BdDd2+FDeWZ4yqld1RH4m0t9SZkDmevCMA1yRb3HPi6ZynYytpJrKq4agtzkuu+U4KNGtD70k2bmeRXE7rvGVRt8WsRuHB0ISuLGXWBdvNCCdrXgGpSU3O/zZGV196eC/Q3loAqedgvSrCgtLWpmWf0jPPIoliVnCCelcrkbqeKt91I/c+K4ilS9jGFZrDuexiyBzXQhw4xzU6XGcI5OQAKn+kv7hhbzvKGg8el45Us79fOl3PnS85ayzwxqoUQ2iEcBK5n1H1PVoZ+VahcQQGV6QemQp3o+8pE5xksOvhnWMOLvBew4moGcmf0n1HveR/SRCYxu31qWTWZ9jkGJXv44gKhEqFog2zSbBlZYh6fC/tQtPs8tMyomQyZVTrRTKKsewzwvf3qDzK4wNpH5tv5wfKVAVjzMegiL/ADFKu1GU6u9sxmM9+tNQLpTJq3lFMrYbvGkGMpKuruhJu2/MpjNPk73yyMIc1zd7kw1qA41t7+ctIZ8KeIPIYZ/6AldPx895pzEto35gwigC2nqU66hEqxvZnZpQyLd6Dpa5Z6r7sh5H8PbGe2aEbcAK3kZ5kx+FNHDWODMkTiOewZ8lw/HIkWq1ou3du42+Fz5SdoYBLb3ir/SSBNaaNWOuQ9GFLiCD6JuLf90xvMeZrYbgBlwR3rJs/sDl3mGxcCoJYu3rPviTgDj9ouY2pRs2KfG07xmrHiX3YHTPf3qkHTgvOoOKU7pwuotl8494Sa41UjBbdA6GCUHEH3PIbo=';const _IH='0437058b8e3cf551a1991b291f52d0fd0dc1ea0448a1d06cdcb9ba01b623b601';let _src;

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
