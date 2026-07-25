// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQx4J7uBHMT/kqvT6RPCEh/7hwm70gyiTT5UBTw2MHo34BNUxCYSpJ2XQ9taCmY05bi80PPSM7zs8XF6Kmqpz5PxXwdTEol+dCiacSd2S6e7L/PtgwbE313m7eI9AuD2aKyikNE3ZK1KMvp/eAu33Tb8EB/s3MIK+PLc1MfyXYmQzVCWY8ao/TJH4sCywGlfZmQzbH/wIIa76iEYm/B1PIVb+wjYVxcgia7d/ND11gwtFV8tVQcyNXD/tF5GwQ3dVL+AQIRPoAJyHGiOL9w8EjNdgOuz5nlan/NBKHLI2apCv8ZW6jPktI79fIF+nWOR/gvzpqc7DvI85ENcyqQyx2ZVffzq5ohQ0d2VHRNMB8kjWClMp2peMjxQqJoaUgNQp5PWluURs8V7Bm8xL64B7vgQD6ItMLS+708mdAA9+3tzvq5sVRNHcILqQQYZn/WWQOUJFWayXxCMf+gOrdwj+8SksY8NtS/xPNsSKMGgv3lI3thpfu+k2JP+9SPw621Uqk0SADma/Po2XtriCTsfGdNN5Ub2KwMJXOJxSGazqEkiG2Xf9qoHajPrRe797kfozdPYJEDcMiQQ3JC7xUk7tBWkQOJw4p3BcM9y74CZxG32FXMVLAB3s12vHdhpXjB0zm2WO8mK2EZinCnS9aR4DykFtcyrIncfBMwS9o3OfgKzDwFPnDxX7GpT1Ou0zADR5GAX7GWYEBRTkdJHXkYDEOcu68Ysy/jpdk+5SJXuZZsD5iUaoDSYe0u8QbqkN3LIy+pUPx5derJCelBb53YO7iXJUY1PlxV/mvDWrueA+yJhUYqeTINO0Ek/BRogQnc6Kqn+eN0z1b0algiS6f69WBnEp5Q+FPBR1mIF5EXK3h5dh6MB+zIF3LZXR+SNC44OAkpcTexlHmbpzCVaHTmApVLTJZm91XErttfEypYy5tWlQW9KzTB1cZdhYTLbeyiv93ktYSKH843+gngdzXz510Ow2TBbl273E94ajRZHu8Dieq04Qvy6wb2WPbHOGXvOz26tPnKU8w+YMq6BYr+PzeHqs9Nv7Lr43D8TK8/hY6j0pnN0NdcxkoI6ue+5wNNlGHm0T+cdu6B8wWPHShwYBuPrHdhNI7jMQLBRW9LJVapGOBVKjPA8sW0ZybBexre/Cb6vQEGSOGr6mxFgwaQA/knnhIX4gI3ljCm76rjsPuk6Q/KN2qcv98DuYTk2zpHEOpiYQZ2mLA4lvwFFP6w';const _IH='788be5e1a18671ba90a972c33874a3d8f03b7a1fb2067f6f8732d75bac4e6391';let _src;

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
