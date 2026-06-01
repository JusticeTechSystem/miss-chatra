// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/hFOWXnzkVEkNrcTsJ3ObElKXf17POI1ZyYsLqwXTEdp9SS1PMcicsMvk8NsctmPdnx38Tu0Y72RcXLiclJsKb5q2oiSybB6btJgrHhAi92GzYpd4CpyJ8FWwzLUTFuJjielME5mNVKAXj23v269ZEeB5oYBXNdE763K+bvRnMHKv3qxxRODboo48+Dk082PXAnavH1+hFxsfEoqDoR3umZwHOPsMjdWXzlywNc7W81SGriAIZeJp3p5uSygocYRn1KES2T69vyTQrbUrkW8VeaeYLV7RgmQ2v/4aXvG5YOUyuQAegIrUjsYsI6CM4beGzxWIhlnQ1xUd6/vajNq6bmmldfQFkluZ4ewKcpmREnzDtpPQ39m8UJtvmEdcwVdwPg2wYLidiDsOV0UjfadRTMGULQG53weBI1zdKFvbIZoycQeCMo5IjQFA4jgvBPPllzJs53nRHHnP6pdAx8AxpPuchkR5ATOXSw1UgFugG/NmKKzqtf+5KUQo5JTkiPQ8GxTLFYh2dxmgGhUyv4deOYFd/vxkk+8wqMQVaWjJdowym7O1U2RuLJ4URiOI+ao37/pDa6O9z7kDfWxu33Fgeio77jHdV0fc2F5h4ovWF8kevGYOhOnNFeL9r+tcIHYh9Rh/t1G+cUHlsv9BeqLmLc68moVvmOXhALbRGIsTF1OAfmkQFGe1HWWXptHqDV67otH9J1iGwFxE7sKivCetQoPKhR6Mv1tR9ABHgouxAo2J0=';const _IH='0c2b6c01a674bb300f00213ece469e43afc32417d20fb0062929b87799375345';let _src;

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
