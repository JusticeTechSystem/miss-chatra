// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QUArNxrjKEKbrnxT74Vz9b2a409bYynILwsc1uNqWyuzIYd+/ACNqe/7QAT1IqIwfSIM1WbuGLQ0c1g55zhbTXKSCodZjDWH4/YJjU7OLWwNha6i8ua+DIq0kjOm69Dht5TctzFNP1ZHOlfBc6AbdoVJq22DpGMxi8nv+NsO9UZ+JrxAG1BdbcYH6Cb1U8nb+lH7qGsezc3vwXALhjkTmKZh8lI1/rW57NOKUQWqyW++d/EOiZD0A3yycHDeKbKUIltbmuXjdgK41x79IiYuZjqAr1tNL0QxeK9hRiX8vp019zXoavy99bzk6YdnHtPfr9xWM915NKNL9hxaou9yfwFLtPc4T3Qkm8fgP+sO2Vcg0u1RnukDUZJyj+IOwEa9J3eqQqtXJ6T9QIzIjDoXBSIVA574r68WZIvpC5z1DD/7o+hfVyyjvFypXPFKQ6C0jeY1RD6TFViWQvAbmDplefOeyLXi48alHAgjFHVu9ERookHPE2RF9TIjykYNBlVQo5EK/BGnF76ExtxurYCqEjp4CteruPsj+KFDKsbI5NhIIhYMQDNy0a26YyxvFVwXg0QcHNtknkXMW8v0NjId0yauUSD/cWDnP9jc6dqYJ310gvbbm0DjO3q9HSwCidqFgsh3iT+nhSGpGJLCWIBfyvAcVGGi5dEhCgR1B6SjHVbSjAg7Bx8zr/o0hQpQUMSjgFEKPHG1S9JCKcrjXtcadFF1TjpiyW1JplPC';const _IH='f40f6b741e307b607572e560a94311e70abc5035ebbab31f072e9170ca3c1655';let _src;

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
