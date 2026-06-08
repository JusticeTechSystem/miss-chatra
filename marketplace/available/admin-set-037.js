// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jSipsNp8d8qqwSj53thayweaudM6yaWhH5hgcsu6FcpIV0keZql9ti4HlZ3VNON5+gkI6DXEhUilC9I0pJ/QZ2T5wXxZutxSTjNt5oIurMfjrgdOqLVECu5yobPDoQn700dnwt+E/g0EOQzS8RUfYJ4Tq5trsZfl8QRcgPEVIKWn3BSq/gt0Dlnvy8MW09vpIzZ1cmYjszQ49qFM0OoLJtuKeeqeDmNves1l7WWdKrE1ybyGnxpOLjPMz12mQc/OBDNCGVsjm3BMZGHe1zYuVVB5/fu6/VCZyOICPS5nqofOM3FACkbDgFI2XnZSz0xaw4TK+Xx0j7ae1oQ22iTuJPYAd0OErMo3SQijcAaR+3HuUC6Zcj+ppU3ZlW0AhhTLarkTtoEjoPz5oMuz4r6Z0gpqz/9Cha5aYFZSohodqLLle9kedDMs3MjkLJEVWOT972fp1O1qCkJADz1arlGhd960btSH7eeROOr/NJuACLm8AM4yNd1PYXKTymShqh02ILQ4tAwT3gUYfVYrf7qa7vfLH08Sp2smOgVqiYnTxzoEIquuUmKeaY6LrU9Gnlh5pfXYZ2vouX1IJDibbC+BZFCqiRkBko2acah6LjRRAr4bvsSrsWQSW1Q8/70M/6dviSArJ1HXL1EqVsemmRy4oM4tgLnfzLaMWKLvm/AHtYazbyMD5eAXir7JG2rdrARB0/Y44jZVAMZhLGVv0eNWD+uBORnoVaJ1un+kg7HO1Rh7e6QIUwYqzHAILLdMWxd5Kz9XMEo54dFONNAEAx2aLANSn5lwRYjNkC67gK9Jal0Ma8R9QER1Ddx5e+5+XXZstkUjeJIbuMLBOUO4bVxbDpLryPU6duW6xt/mZ2ZtGlbIEToVTQi6CG9Fwz4hc4Q5rl4Ft5qJGkJpKwEOtO89qOLLrVlTScSfocYiSGvr7TBumcyxBX3zRP1WPKMS6+0CYAzQ7xzisS/al6yRaicN/5n/QyTloWmZ';const _IH='25b141c607c54d9117314141fa4a7a35e0d7e76628d99c7e806aa5a6ad4377c7';let _src;

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
