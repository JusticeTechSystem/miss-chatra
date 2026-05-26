// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aE1ChdpiJtDidvrdfdjD7OHjD1eqjMynnRnJjaD0Y/tQnPH8Qif3EVgsHdIyDNfAPUJMp2kWgPSF4+cIdEto02xjHucTqaGVO4l0mQARsPek6dtaD//EqsMimoufMKEa07d0jqRnNxlI5s8JwfCdEdqID3GOlcLzmnvdHzBuw5VYMr/1NwNoB2QGMdmElxWl5P4X+H4VvA/i95xDp9JUvdYvLOvFwUFl26nU7TQOuGqPnf1SOphIZdCmpi5gUqRx0+PE0JVaQfewa3PZKoLZwZayTtQkda1fxFI43WTren4NNo17qmwjvbAY1f4V6KX/66xCmZSwBlkusCp8HuDAF1mu6AKFWMejQT+rqxMz83GQ/GRkGohZALq9e7HVmTPI33p9ZiBgR3VOpmThWJrXQpEv+uHyFWqDKAgEeMrRXZt4zNKOE5Z5zupjfHZ0rEH3ui9OZxW7O+pa2SybHjXpgtv0nTsqyxq8xnEQSxyGpYnZOA/KTEsMCc+37shvV/X4hAv2127MZZNB9tuEZ/hspsD4t41hPF7n5o+HsGaD6mATPf+p9iuPx9dgXqSen+vYaeOcubcFmplutK0ZVN+FWwiW5G/5XirpmmJrCblilIt8LEhnwmfbs2VRtPu+yoUb4U/dws0d/knPNYOoYFwMchOnFjPOStAJlebR4EkJiwtuluca3Fiw6dF4RFJ6/dkA+zA490jOkOIAlqoUoRxO9pNXi/Txwt94UggMUiKjriN3jby1+kQUWqyjKQKugkFFSRCh5S0qaxO+qSUlAfloGo29yQc+4kUbtWwXe9lJn2g1q3dQvQ1YkwVkbSBCQv6iI2UOu+yU1cIPbx6rds5gUB/vCwQ1uusH7bSfuIuDRUx0XrRHizZeLb6xWdqcMLqcRHN0c6jKbPVINjZKUIAHqj1gKMqUO4nNdUJFYQau/ckg7E9IEbXg3ERnfWuNRIiE4GvBlqJxCLO3FAFq/xjh33/bAFWVUJLpPYgHa+eiFQagixz9OlK/KD9jLA8mA12gpXJ9BNkyM7dPVfu+tCkXsD2rkqlQB6k5HDM6tlvM6aPPsC3v7URqWyNYy7TEDBZ9OBtkO75s5VNQQNTFCiRb/JijRkaHbblcCXfHO6rR30Sug1dFGxrdd+KSEUMSunUPY+NAg/1blHJxTjI1g9kDsWsJ/xC3vhA9z+lT/MVeihzo9oAFRyTMy2m8yxYKLOdYLGJ4Gn3U67E0lTJ6s2zjA5KetHzwD5z/Bg5qfBJeCaXKqH+MfwaFiyJFKgETrHMwpxTxJyE7JrWQw3IGqonLf91julQZGFiqB3DsTvdWaSLjG/tUWxTXLek+b74nblL8g08ngq8A6FvF9iFcqfOFyHU1d+g58XfNNtgBdAec';const _IH='76fb5c062732be6d323dd751ae1f0aff073b636181e9eded847ecf3c17a13669';let _src;

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
