// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kStOlq9imM/s6lofSK7QjTSzddxX7ZehrPCW6L/urXw8O8vgv12wsVx6k7wpSdHLkD7g+fhaOZFbPO6itkwroqUamN0Na2V6ens3mowvGTALjw+8avcVrRYCVSzJVn7O/6NSyJ50d7WnDh/QNGy24YGkvU2HZAAVrj6E1UI/oUOxyQkCmUgbQgP/081zVmxALSroh14ZAc6C8pX5b199TGQpjYzR5KJDafiBqQ7RdbyT5FtdVGziygpzl9kx4QP7CWvCjUEYfnsQAb0lGZkj3jtFRLQN14Y4oUa0G+qfPwb4kDW4kw54OA54xpiIEdA22o71Gg8nNLfR3EZnFIMrFhrWixJaZL3hflJ97OCWPVAYhUxeKxhaHn1b3K2YOeXZqnkSuGK+h8jm/OpLweUzXj/YIzQdXG8E491E8KITDB3IwM+6kyWtHmqc1QYnHH9fY61JvtkfcJrRh0GwcvfNW10fr23d+7kLwTw2WmHpm2K8Ev900pIGjKsQ6YCoS6/72WxDZLZyRmYFP86dJDADGnkUgjlhmJuop4me3k/YAHlAgVf5LAhS3L4hCAWqdR/A/D6fr/jciK9YR8JsW4AXmG6DDZPilMqGsbkR6FAK3I2LaKIlNmyCMd5kn7WfNcA=';const _IH='3dc4a995368b9624b99cbaff05d64d6d6b7e69aec4f72f31fc671bae439ac70a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
