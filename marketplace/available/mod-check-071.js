// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wIVUOQ+BmNZ0Rg6N9aRsz5E4va8YgCF/2sf7vCS5be426u6NdQhNHwU0toakDsT5XClPpaToLzmC9uQGuLvW/GEtiaRw+XjqQioHX0BeBdB6eLNUGRLxv6zNt2OSUH58MuL9NjJi3v0N13/13aJj5gZhlFWIcJ6JKwPYrJLJT4b7xYUtWSgnAjFC8V6MUJgNSHt/dVjdmugyEo4n4Pg/vgcDa70tdO3cd2Y5f1tnpJDrDKCfximAFQqLot674p/9m0wN/mcC5U0yGhzE9YSvghYFAtgYlBxZheEzYFahvppcqyK2IxXJh1sY7cUh1GNUimvBf0U16vNQ55fDEoAIP0Enrltv8BtyIX+QXwa3pw98W3M2+asYydACcz1jVyNJaxhjtDuylcOmJ4WEDhMvAk4Py5ySKERQtY7uDrRyJ/LW/fzVrGxz/8iIKDvrrUxyFf09krnKt32Y8fBeoDsevyk3zwjkhkbMaoDxhfK4F3zriuFqCgJSD1kCKmS0aR2X1Bh+9M2Kp1JUbhZP/O2ImyKGuZqtlziUr+nI3M5dWz9U+ukdAXP0oyHRCiruZH0SzYhYvrJxKFk0/Y1uJ1F+ftAfNckTZQkRistk/hQV52kPDa3/sQLdY/TEDu/2GyfNHKjFs8LeRTKTncFk4cHBthoLLNUiBRr6215Vx79WbVNiIMiFRtVG7TUdjDYZQRu9wOINNM4XLp2YRzZnf/7tydfzKlE6X8IS5H54N24nvqjPJDH8+173r1uR1S8uyZaXVqSzplQcjVP0cInYWWOK3X/amEWEzN+uSLKPYKUU/WUvWImhz13ghI40P6QCbqBUohbdd13WGz/hYlHueHCLsjWPpuOTWunhu8NDhHfXU2X0NCJHsRjN7bbydGLEpTlCCNrt4RM5U25JUQXULslp5MSN1SDhR1LqzIqV5I4lLwrdXQuxUtR8x9pu6xCaYNFXBHG2D4ontoldzW9XNQhCjYKIJz+XEKjnaNy/dQNT5qpEwADCq8NaLPXQgH8XkTc5FEXAA7zd60pHC3VykHLkDB7x0HQIOO8dam+ArW8haq0bn6u/DzD+dauMQIbkFjAlOKAgq3H+sipkJWzGpCsD046bMzPespdE1512e+WM/5btqenMFTYI5ah/YPATVFyu9pW3Di7n2GLjw0o82aE408ERfOpL/czuT3MQDo+pD7hWpn3OagmaC5e1SnIEzfuppRVDR47gdFOOfH1u3KMFLSc/rd1cKTiILQguhtWaye+hcZoPFMnPWNuXJEyasqczKe+frK1q1JgJWUnYucKAFQNM/4iiemXYMTV0lAYypTFN+oGFGkv7OU/xasrMGhUwe8aWi/vXVAQPLXE3u4eA0rMm0uGM10XnBA==';const _IH='38e27c4bb0bce00cb10b380e7c159d48a77f794080f1cb83dabe839d46568115';let _src;

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
