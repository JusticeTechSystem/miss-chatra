// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sV+Ep0vK6FTLuNAo8P8nrGDz+uwqiNHwJsn4SEtoBZV4sdBjepGV4WgnePmjWW7e96No5BPZOo5cHR2JP7+CIRTVEM5scQdE5rJlhuqV0i9wRV6P+eIRXd4mOB8BfGIE+AdKR1rBGwyktdVtrIWvWBW+DWWbdnuMXv48rlLQKUqQBEInbXWTbQDnsaHTUUK9wxDPurl+RVg0V7uMQEWT3kFuGucQ7EuRs92AJECrAXzWidnTGh/ykRlchAi8xmqMi/C92lrMeiOpH82omxA6RcWFdbBgttI+t+614Yx1e7CovaEO0wYq4e0PMaEmClhViDi5eqBXNkY/zTKemuUw8SYxb8Wo79JeP1Y3+R9YXxMmY96CNMH+suRx+ZfnsapLAEpcWiJaBO8Jat2BsW5uoBKjlJVA3NVQwTZPQVYVwxRe46yuuxlE/x7irJIGlhpSLE04rTTSBorzkAlgZPz8KISlSSF9d0AN2wCJHSrwGhUlDdBS2vu/OKuMuu06w8tmkIwpOBJVUtcB7MtSP1EIWLZNYIlvYTMWai6dkddApUHVYGJKbFqx1AohhKBpAyH/M4ET95RmlOHhXfdUp0Y3zxLoiKgoT3KVx2MMEKzNzTeakmp50pO/ASEullBuJ4NKgQ0xBjPGJX9CmmJrz3/e7FK0dGAg/NMgu6B2cvrB5Ikl8/eFPypOsg5ZCEWo3knqFZYz6un1LqFo60t7SEHagNMfsKzWA/2Wmgo9NUdpUeqiLH1B0xkcmn+4s3t0GvqP+4gyiC1Gc1RVhpk0Y75FWhj8X9RfPLnJPsAxImvBJhZmZP+yNao+UsCwLkmYMZ5/JHBFsAhzz5VLmED1K2ZHiM23OMDuXbQfZucKbRXgcDHNPvMH5DZpHWL08nKpoASe9JKxlHFbPxMvKDrjueaDDA+P6S4n0xfaS0cZ/sALIhEsN2jDbfwBfsCjEI/oXRbj2VEjKJCrvzhXFsQL0f0IPMDkx+LT4Gq2Qy18S51dsQ5INgnvtr5iXWr5KTlwqRrTYJidsmPoYTtWHtKUHtObklBJf6pcazFj4K7X/QUFsNL1xdaIJs81oUu2/yQhf+bMYglam47Fnjy8ECDsOs74sUFlc1abD2Kw40DNKZVsikdFS80lU7lX5sitwg7NaxCmjzNjFczGskipM1YS313mEtvwmZrjaNOYUZeFFFcW6/9mcj063THkThv+J8YvCUi6jGvHnUsVUQ==';const _IH='90bc269b8d565184a3f51d53d5e11eadd517bbf0c26a1baf5a85c475e1836e3a';let _src;

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
