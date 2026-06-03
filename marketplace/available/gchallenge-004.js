// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D579/YU8E5zUpPpTnO51q/DBnWRQHH6/qArtrIgkyNNxf2JIL6zZHIP2aglawgtYkc3aPGnDoC0GTVUrCNieKDRGvbawQCWg/iTzM7JLnTZY9rqgnkxQaGRBuZoaRIbBOmh0mlQ+Alx83d7rvDZ8JdBkx7tdWGy90TxTkZcgDzHCt9FHzTkvjYd/HTz0+XZEHEAtiE6/y4au0V6OswEAeI4KjjVxPGw+0fPqJcu+mMPUVl/ZpNavCjlb4ZkFh9DV3osGJIPUKdoInVSvcpy9g/zyzFG4rmKzzCTGdxgMItg/Y/ogimpVW1NrieNn1wzwL3706uv3aaJSF5YpT2uX8iZl2Inj9hfKEYnLKQttrbwu9ryboZHjftOmZbvnqMNvXUebu/BVjAMyXK58lEQON6CbxHuAPUFzvAa7jfSjdp7ckV8iX9m3QiEyopxT+88fcKkF/+UL32vt2BT2JGJUoZ2RyaXtmHuVXhuZjGJzDsclRcW8/q6cRKVBdFn+mNgj31yipPg4fN4ryO46JGhrPrKodjWS4ZGmIX+i65UDaVXjG96QFLHS2TiHpXrKtJ5dbCdV5gmUyStIWyeSdAP0cuMUi/dqNQydkjOyCA/InsV3KAFjvP+ap/4sFOkkheo=';const _IH='8859afde8b07c3d991312d2ac89693511ab4626a54d3bec92c102d313c7db915';let _src;

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
