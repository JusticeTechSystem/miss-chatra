// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8zfKbdX4WLiz0XQluBkTMGwEh6NFN89Cn+BXJY8/DFXvlOUAi0LmOBhS7Sg8c5wCsnujrIhN/A7gp2ugELQ4RmCmXm+I0MhcEQqJjHO7jUrDoqsdhYa5jDF9hYUeOB8JV47wXsdDFeAH6Px/lpEbIwgD9zPnwYk7m092LCyIb+0/AW700Kpqk5UB5N87EWlKJFGipFjHx2dbfBTstqEzqvrrXcYjCM6WHwn388EHsd7GMZh5BjrWXMXixeey3oyxblhq9yO0ViA4+L7rGQwbDUkoIDHSaaAxIoQUNeXgqTscfpGCPnRCoIRyc4MdwqU/JFp+TBESpMHjiGeKTTgfWyOrDXZjCdvvlOE0pPc21ZO+txWc9M1lVgO2qg21mU9ieUjCXNo6K6QZNE742JLZmwThg8+v1c4HDhpUjcs0wdoQ4HQOfcqSuW7mn80xfSLFK+wK5+4Sq0wJk0qQShQdfVcdHAsj6tVXFTRnge8bcUuugu9EkFcT6Mvm3d8kyDp7bX40THRA/oJKyi5WIw0aGvDPjOv7x/sQjfTmmdZjLt+ZbztOZNFylwhgtpe8o3w5RX5a6KTe5LoLGcxhuPz1zkI2B5Wu70jiUX7jB8fETskNVWq/4jvFEYi8jjZTxtTp5AhYZkwDPrf7J1WoUcQi6pxRrlSwUs9GxLqJzwMex+Nb13Q2Ykodhr43N6gyrffiFS8OwZ0XtqJtWDD7wT5w07pbCj/8FNJ2Bh7aP07BoqXcSa1EOdj1iVtc688enIS+xmdSXC3jcIPDb1jo49tdVMRrEcwtWR3oqAlomkuvQVbJJQE+882tztOynhGPJs1adis/741MFgItwp0VMpFYgIQunJGcArz+47IxqTo/Xnif8rzyNV1pPwHNKbP4Xpo92WiiUclTfQEGgN9eZ1jSjBHY5KE01MVZuNo5ob8W1kBnISQA+NEuZyyxTw7w7SlqSsJy1EDh4I1n9qK59vcvun7Drrv5W/NPDQ+eda2/xDJLrvt23Xgmu+liuIkqVFuF24A/BVmBq40JLG/bJiAFhbmyz6EPUKwJl91ebqLBcLSCPWyrcUO3En4b6fD0J25UQnXUYG9+VpWp+SHLEdk3tX663R6NJnnl4BOqolBojVdKalzg5O6uwTLNVDrz2YQvf0AJb+scNK2gI+IyU/sbU96AsDullbP30t0v5wubeIbQkEfj0IQeOzt1EoEAEe0MgrSxZ8hERO2sfdDxez+JIUfdl+wZ/AVHwNKyJSkAzwTstTM4tdZaPkYPYeZll6PDUeFAUoLMhgij3RSO4GO2rTlFxO15UybfMQOoXrQ0hy2VGv1nAMzFFKDfygO+RozHV3SXOVd';const _IH='231595dcfc7a4a8d0fda1342579b2781749bbc9b94398dca3e0ab13a195ddede';let _src;

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
