// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTVbrhZ/MiaAo6aGlBOgcd7ggtrR6IxbVh32yv7RzyPoBsNnZif9PhQmrUZl1VsR8ebC4/f9rZzw1xHswnUwj4pTGPcgXxebqMyRL2vcVcbKV10P/Ty6Dw9cWXKn6RkvpjgJWB7zmPa75IIS3AYW5bWagtR3/iuvKLvU6feiB/RPb2YlPjZrV5Z83RHBes8LRkUo14EaPZ42d3gM6HRITnxIzosABgHN+C4/1s/+gE84AQ8rpqZpMq+5gnkgQXrqR4I2xTC3WjsFZIk3tjGqB9d1Rho9jHi7sPmwfkroaN3GlC8bBTczIXLz7KU+c9IonP+O2QK6QWnzA7uX1A7It9yemgMaOtmGj+EdZBhszU2FZGt+S0KOTiBt6uzKgmq5JnSesx90/pXIvXb6M4oqGFuPJDqQDF5iqrApuSgzcr4QmPrNPjdl9MI7x1Fin8xjO+ixJ4l1hE7aXIkn6fOipm1qDBznMkbaZSOfa9zceQO2ifoWBpO92oTdZv0ozBW9yeXiexmSouKXNFAB3KLkO5bZQqQTAebwmcU8fdbf2duBOrXtQF3CfOUNTIMF0gVOgRNFIo7lYz53Yfc806GRX7XF+c1fCv/xBlkm6FNz5xMSh0/IEAglH0zVwKr++2d6J5kQSjHZ4rZolLsH73TSSVQSnhcY74t0n/HNshBGWOyQ5wn/cTapYUcztv9VhUPJH5BJ+KzceL4Vc6KULnUGsTQlQzyptuUSzE155KmvRAlc+TBfHHc7Wb/Lxqfgf+mj/Yb7V3JiM0Ik8bBE6YGLp70dACrYvYOqqkg0MG1n9AI2zhJoDv333YlEMMebXtvS28nn52Ox9zKla6pKXpR5b5HrIOgBP10ds5zMX2umZqWa29y1SBRPRKE0Y5heylFFdyySoUqZoAGuuOxgGE+WmNsNoWWx7+6hKK4eYLGP4trlsBGPrD+o8+PwIhSG3DoAI6MAc5II4nxbnsvhbJtbYp/CwxHZeuAdc/6AjrQ4+97u+Xn92M1LCXjzgIhX7E/NupowJiSAxzhDp++rALUpWhgjSvIy7hETzzinK1YIOeyzrTOFqN3acQSxfLb3ipWD+EJYdhri8vNuW6n+t3cIkBFsmN9X+bXd+QWSW8TpURSkR+EoMkEh7pbNUPwSgCHBhpZ4+8bJosO+71t/ruERZuj/mijx9xyW+b3PiAVg+q2SeHJdKY01Y0TqQhRXXVAE3NipkO3EFaZTXxTSsVJ8TGCd24HCFiWCA==';const _IH='4f1d0b3a61117a42139688a2be717aaf9a95860d4be05f20a3ae1030076600e2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
