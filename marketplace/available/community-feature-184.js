// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSRosb/1b5B3mLukHdNhbuOWP1+OeCajUWxns/7qhh2nhR6KQXHSUgtAJ2FTBKhmEopDHw6MGSJ8sZS4xRU0+zK7oFD+V3hwlTxeJGTrCy8+RLJ3Gv9ZJFwjtM9J1ozrtp6H4zi4DurSmwb3k4nhcoha1HOBJcG0drpTaNJUvvenkAftDD+H59PGav4YEXOefTFJOM+tTm2J+PsmJQAQT3Lv9CVkGBjMLJXVFhmRq/YaEdOv14g6KWgAmaHuaSzT4BHNGAk0PxFROq1qWFWIoIFpWv463rMJ61Mw2puAzLjZbuQaKzEaVf6Xt4Ip2TUg/7I2wEO9JYmnr+FqTM2DDg/6lsxhGW9hAePr4VlLwfvzqYVX0x1g2M532c7UV9eUI3PpZFPzIG+BNXRGTFEp1Jk9UR+ghGrIOQPi4ZT2zY8Ztyifhg4l7dx/THrqryEWpjzrITsI4UGPRg04Muce0fTitMwQHcagnkmXl+VaTRB7n5RLNKuMnQHCH0IozPQX+WrklfARuh2qKGuDezOcOTW7r3vKm7Kqa95gjhgZR9d1d/lwD8BTQ/tKNw91eKtQ6hoe5omLnNOwSyl93xPeaDcLEneYdtZ2Ie6CmUcoBG8DY/lODST10rd+29IWvcjVtbpWh/NH8yEI1ZalNNV6n5k/BYyi1E6IlTCuvAF2cYmYD8QNTYZGDIxl3P69N3S9bBMT+oM9+uEjqTkCnQVGa8CdlOOtk0MWeNNslg7s+JEXVg8aNgoCw==';const _IH='b84f42b206eb3d65f8f48fe2f8da439102257a013c467899f5508097892cdf92';let _src;

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
