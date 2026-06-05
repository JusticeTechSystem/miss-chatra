// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yBwfqzbOusx41ht9hjOz+k7T1ZjeQMVsCsrXpOGoMOPaTlY+kbbw47PeVz/ie6n2DiLuIUwda6rNnLWC29FTTSSTWwQ7sdMGGXOnk5NJrw/yVMGRok/aRYjUvHHxwUPj4yxp3t2k4tfvqbJuTdGBgAYcixVZ8gekHysNpehA5mvPhE2DXOo/Z8pv/oj+h2ep75uMM00S/PFUgZr5Njl3qYFoGysX6lxON/7tsgE9ceb5Maf34bXxsEZTnlT+FBFyh3rm838bZwpxCFhFQHIhN/s6cyTC+8vo0kbY0VkqeVKEUf91g6cYlZWJRpm7UC1Xv21sDUv1sBIsDKItOQ5cBY1/yRRNYzC3aeDEkz25ICWGwTLUcVzlLFPEd1AByehfIcP89MN1Jdqcqe/HbWrVgYa4Ti4DH4rKS/yuWc27lVBt8MCzmosNnl/IxsNQAhYazM7GEQ7TtN4YvFaGycld22c1CNNm2cYuAh0txFRafgKzMaMEsLSas4knS1QywdEX8uxATGfGFzTBia9qZi5m/ZHcHSAMRt4NLKoUirmYo2G0fbpceLu2W6+yRCQBTo5wK0lXUn/FucIlOp9tZEhBaCTKc/fT7P5fRwQrt/34DcMG+xKdpZKLP9/gNQ3LorxNIckMxXhsIgFOzAGNweGmfD/49HPxjj4O8kbQV6IaB2W4GY4koTwzpMifGonm6rH2MHZZ8sgen7/uT6KZvIRiZv21539kohutzy++cMl2xWBPovdjlW8uHvHBOhwlnD0TJ9WaeMwY86C9sxW2SHYmUIiULrxbm+xDnh+ixh/+p7peLyv6jRD59KaWRG7GlmdjNGo9tJZGcvfazMpMVYUtLH+YEAL8DIBGu/1j0bu92H8z2o2MSpFsPIbOq32hzEeWotONdbdLCX6taEayzj+6bI9hq4Fj30hmlIvyaegnkl3LZqR3LfbMHw9MqNqYlsH9+7T+sKo1cNDJHs4d6ocd85Z0HAp7ug2+uQMAieZnUAz/avRCn0SUOmiin2LOw2eAaA==';const _IH='82c2c5815e708cb78db4869aab23c7ef064bfe2370e64f47f5b2201b76598dbf';let _src;

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
