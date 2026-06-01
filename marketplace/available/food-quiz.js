// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQw/33+sZdKS3NRWmwOsd5+xjXQrYbpqpvI8RZZZzSpjQ/pachYJ+/ldO5A0X1etzh9jQnzOfcm/peNz6E9rYDXg0/o5P2yRRzLDAARcMWa3ugOi7uVx97J5DGaNoH5cyexFkzUyJmK1i6A9dCRSqrJn3es0dyk7smwPp/mgEZJto4wSkIWamAO9G0Up3/7Ch9SB8bKJiYUIKbn1u2XiLOHmXc8pomc0J3AFxmUd4xRtmx98YwTOC5FFT92UxMA8qF6Z+9KskcNTJLxY8GpaYaJ/th/F9qMkW8LnXIxzMubzu54RvkXoae8I0vPQpA+OexZxUTg1WKGPKR4czmInkFkagAV0Fxic8OVF706wp1vJRIulF+oozJQO6xhj1blKvPxnq6U3BoTVUJ1BZwDnp9rgCM1uUVtbpVHmcMa/AEiUJ21O+xaiMmg8IL3g3Pgj87iYdPTvli9PkiRTJ54odeSysvyfOABAST8YKKl8gLPeGVpspeq+rN/lwyqjL6cTxOENGEyTR2gsSgiclESX3Kj51RaSfky7aiwPiy72eI7Ta+vVz2uoIp2SdxX2kuvSPe9fZn4HMidbg7u1vVBsExvqZg5B/ZnCN+C88Zi9QTu+c1lb9/muBl7Qxz5FVMfQgO0bP+T1mRr7MjerJkKtLQAG1ZXcwUiwoxNMQOmTFXjunn0Fc49RK48AwBicxcsjz8zoA5GK4GXjMu0z3Wvl90FS7Pq+Nxe+sOtpQfUQSPzb8batqYBzTCv8oaeJ5cpy6n00APHE9Z/SUPN4FOVmMDBDrGibvuXDNCr5leHBhBIwxW/jKCI6ECFG88cXQ6ZkXmbG03D0DGOJEIxYZUQBQuiMx8tuLSNH+YoMB8BwpJpoa/vWvyNofCwuEyc1Dx/UQxtIJwvUUZQC9z66v7SoGVGYfNMSL7lEQ76tqABCEABZKowkYuyg0nIVuvwaYGWvw339BZgAVefJGcZus1yhXa0OtEhJ0UbK0Sl845P0UyVm7jCDWR8MVbHB+48UcgMMmpNrf00+OYkSm1iIg9aO719ujZ5CXlnsDG5lg17O1EpxwKvsc5tD7ogt3WW85N5kKJlcZoackz/taxvfiXkdLqoxqRnhA+97zZ3HMerORWa2QiuPh6DLEplQcUt9uku2pmRSlO7LOunQrUxApGtk5WssiQNzYiImAwpGmXtQf1rm+cIxyqm1WSJ0V8rsd/kyBAG+tcz4Uhv/ZjLTDfT59uKrx67kDf/yGoh84Yw6rqGezgwpfB5OMg2vPjaWkc2VN0177c2POIuN8gy24C8yPSB/5fXQEpUvPYyCav2WX6aj0toO/YkPeFgT+zVAh/tbwvJCC8silGzLoVYHGY+FoaJe1Ak+XhhkMLwwwtIapRWtQvuB/OKFMJcgGtUMLP/yl0T5GfstcR8DAoSGQ1GYezBuJ24rQWBfzQfu2qYzY34ppUwFNu0yTJKs=';const _IH='14542355aba0f5d16094639e1be14fd289394d7d3d239eaff6c6201803050028';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
