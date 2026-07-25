// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSy2vbzooqZGGzAqm1TbAuXNWf3xJfSVS7H/S4HB83PhbpUpZoXPT7R9vNvi2HoMs/5EuIJLFxytV9iutaawiKVDegunKBmQS+2S2i/jGgdhgo2GloTCsBQ/fGAQ6xtx8Bw33DM6R8m69qQuu+x378aFzUSH0PUNfPrZizQNLYijh1AEABYkvhkRHEC3l9P9IzFBnwghIXeRV9H1EPvIXE+yKAVBFV11mA/cn7Xz9aOnKqVbwDvoIMZ2mOEY4vNXPdt0UnXQ3j0k067gtVHM5ZOnFc0J2UsC5c3NXlvbjN67amOvmGzKS/hp1mahguBS/+VllZotTC2jfugMZhjpkgSUavqiZ6H0bXVJU2yWsA+Sr8hxGeyCGr7XmmGFCGXSvMQxV5LBSMAJDyA/6ZIQDn4I7Za3yqFs2u601eSHBwLVinBpHH9LZ7Wth1OGIlmNWIJv9Vxp3JWXNakGfruDZXPkaNV0NZrveq+ZWDBW12lMhnXpCSBJDdFErCwa/dX/HPs6x39qHwM9tcQp4rqsycPZ/0hG8CpEmblcXpkbn1cPamMD1X3IwOg196v1aWdotEKFMGh1WtYyn/8eXeu5Q/U+hFMGT8i3udpqLweSQxormb9zmw38/Mp6UwaBqOZ7T3jpRUnojMrX5zsHE0FIbIG0gIdN6XIxcQ3r6ahJe3SZniK9u8oS5ke4DfQ+Iq+wAlOHS/QRYF/Fk7zXtL1hcBefQZ4D4FSmJ3M13boBgi9uPoWK17eosLyoPyM0A9aPPQ9HPbKbbzfbDeuoYI2/3CBJnW4uS+D5zfnQVth/ORWhl0DJHAMJY2DO8GWzr1pV7/Yjw7qfesq5Sq2qHRMCuUcEwup5zZbrU9L0nmtvNphAEmIBWgrzi3Hq/ba2kSSajehnSZpeYxMMc8ygB71W+2/ZPA/AMWdo3slkG4WBU5jBvXwpVrR+3LD2iw/YAzHRxrceYaBONlXb2TNcQmf2rCoQBk9FRmFqVHZYXOV';const _IH='2d4d45b6801633697c89a022abb1635a612658d3eeab04e90a6c45c087c4a986';let _src;

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
