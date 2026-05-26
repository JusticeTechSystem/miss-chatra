// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EyplPjXYIM60e+Mq+cOQKVRUOgHT24c6CjegTWH1C1wfqBADOtiHD+lZkyQ49+xDDc+26eE/qkyUX++sQExW8LTaUzFrjNv1dGuOboXyGqHbC/jcu1aiyjgFUDWUShiaR5mAz5uC0n8Bt5aTy3h0+KQDoTMPgnQRs+yQvAIS7564KGR+JUYRFEVkVJBg/tSvDmDFDrPXJouc+7YRPgEsB8PhtP1B7dznidb8vD+uqvGp2Lgl0bkoDBeOl70lu5PRnsQw+5hxXZNGU9YXmgzpCzvoYRALHz89wVzSsJdsrZk/KHYJhgEyXq2RXy0v4Al1goeoy9+ZK5a9kpbWr4VQ8jiI4mHP8bOGGfsbWJ9J0Pbrf7CtMl/sJzJJ7y/fjR1lvwCHu7B76B+eSN8KXDNI53iIza9TldvKGqDh/3cf3QXI+1V7vTcyKBbRrxu7nfan0pswIfjQ92ZgDYLktEnHGbppODh+2KgJVMnlY+Mc7JdAA39D591UQG6lWa9R1BsMuYunlySlWUSkpfO5Hmi8+OphxrcEES4aZcDXzCYDzI4ijQ/YhC9uA1aOU1KLBlb76byyOGurB5zrYWY=';const _IH='7074b798c77eec84d5316fef059d40937def8053c1d559067430d954f9c88149';let _src;

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
