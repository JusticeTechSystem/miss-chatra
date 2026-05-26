// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7MpIrvUb3kOBzQ99RbQHFs4SRx/tPW8G+/os2WH9DBiYBwwBngpxmQsok06m9LOkp39u/74tVRoZ8Ma4MVW5C0g/W0ReCf1iWx3MqBhfDTovdTYV3tNHkEg+Dt7PJpCC6w+J0Tr7YYbg1eV3+boNaY2849n5XQYkLfbeB+eEjVreA33xtKPKGMeGqTydZOHUS+VwZj2jBO33DcBYETysxM/7n16OGTvt3IoWlQ+ETPcwAnKCdp901YAeHdsfndhfPCBz/d0g//pdM+coTI15BFvaDNLcNFuBiydEMwcCKtM5ImX0zvhQ26N2yFKCAfsOADnf7W7gzeFMl4Pa9X5zeyAviOQJQ94Yb8qjFmLafMEJPharfPe1oQ6ySEaKchvWkksXBZm7UPO0G3FKxorie6ZiWmn4+xUF+sALQOSCKidN3neflxaA7jbRdxDqnTGvhXkMlE9jlfhPm5ssYS80zmDLXFTFpCiUROqmFwEfAUHfT/e1fhfwSd691hN24IqJJetO1UWUvj5q2MmTx39XMUK316e6jnvegNhRqUcqUZOrRodMZcjFeo3pCskR9MuH4XkK93DQclj0IlBddvgc96em2tDOHt+s1Bgv33cvEhloSAk24YM/Qka/ddLzX6RBK5p3h0RLYZ07mlTAtra87+TGpQeIir4lroZmhw9J4J6jQvv9Mt/xEOJgLOEIcJTSswKSqvO/jNJFiDrdbdiPhXuoyUH7mU9/WEednZiAcJ+36vl/gv9pY/LU8QFlvT+7bZSpsjbt/lz8HbQMtZftVZUdK1pYci1udmOvzcl1FMTxQY5z9amQ4YSLufLNmWwNbvBpVsjTIrOsJXeiGrkvoXj0ppiix3FQ7MLmjcxHq7qMOqtRMS/dsH1Y3/rCO4LyDiG+5xlkXhDmtyDFkKvWcbIAqt6LMNPBAhk8b7CHJRgzRnDltnf8lanDGgZM+K8nyFMVKMVnjxqQP6FdTZ8tdLGCZ8MfLIO3nGEPwqpB2Ty1H3dJpvhpOYjTczn9qI5naYubzYVLQ6FYZLeaioU=';const _IH='eb2badafd5941a92ba7baa830e4aec056d4af12072514a04885139d6b531c9ea';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
