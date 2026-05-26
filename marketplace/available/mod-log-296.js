// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wMKC4y9hMEY8bbLusf2db4xPr8jpe4R0f/o6lGP2R65gpOT/69XfgDEjkl/rZc/skacNOF6960NeuY4skCyEr0P1DzwGejP4YLcTrlRnDxjFT21XKpt0MwWS+B7kfAbUBlo0CL9PbVazawO7IEDemOVLGZVWmf+jOsdoI6YaCuxBT8BlidkFnqwqT9kFU4bjMP6PQgqkOAx0mfB0RQVyLs3Rwygrack4S2E7fYEIev7iD2MZzq1n12ovu/Uj/FyAqkUKf2DZ/xwSIW9G3uSiXzpOUQEIiGfR0TYgZuZrdPN6/aEpBWnEe/yTT2GDHutRA/IdzWzZOFHL5gWax0mdXxL7k3NbYSE+NMwoQJ27a+sN6gogg1HwvtJf4TD/QfHw/VrFFdQSweEcDZwr8aPMHP28RgeyPMY9guXu5KX5nPTvHDA6c7de2m9Q0YWoeejfbbFXNkHzG/1MJG1dWPYu7Gn4IBkozrG90gUyrJ3jI6y2UoccOJynqD9ID+lhsRyDe8n6E+oGDglFmI5ocgoJ2Pd6/gxqDBAy5nCY88EBUscw7YY6yzBf85S9CUIig6nQJP3hrqIQUIdmsgJrRUv4EuHLYx9zGFLaXyJNRlyuDvxUUlTaxpboTwLXmH5SeRKgq0UNX4pmy9EJB+10Nfg1Y4YkycFBjlPC3x+NjW5gAahHJPG9GXYYPe0WAiHiIPf801YVAQikZ8x9Jmfqq0zuWFq3UveEaXVgD1c11bOaIW02Wer0GsNXV2V/4KW7VAnMM3qRgD9FTRI5RvV32rtLUK+xiLGTplQIeaEPybjYZjeZGW8Xu48OeuwyWRF/cqMsCVV85gxsUCed82Nl8++fwMNAXvBpZcsHrH0x7lzY3B+XBZqWymxuzpZEjKfeHeonMTLFtLqk1wVBVbBb+yNlQkcZQxHmoS21VYzk/fk9a7KpRJAHubYasiINHu6tKqO5ly/wmh4C/vG41/VeGYYiRtD4Wwlwa1buxx06ckHZ0ckqv/uMX0BZnXOC4qiglzhzoRSkccbn8vD6eKCjilR/BcoHy8TWAW4JIya2pNyNerxNrEtfdW1gVDtmmMKyVixuxz3Qf3VSLqlWiE83kWfQ1jwbmizF19tr61g8TTl2B7O4vZlr2QNc+5kPCp0p1RMIJ7ZzThdXnRlbKb0+UmnTN9WIZBkRDXucEs8+5/gJ8Xp0MTxyZnx2+Ca2c/PkMplFqnny3bd1MdOv+io1FHom+nyHgHb3PXWpKTsXyaGvzzeelwpgVDrTXrexZ18kDePyiuYKc2nIZbk6tP8TGKz+jVUe3FystIcxQWwp1DMq/hmwxXKTaNiXmYq2FvrfFzMEjMlkKMd3hF6mZw==';const _IH='f1544542901057587097b74c7d37ffe3fdacf3a5878ef0296c41efd74e1b7222';let _src;

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
