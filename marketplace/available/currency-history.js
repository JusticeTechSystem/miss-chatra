// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nUbLvzptQIIbAlctY06bd6ReR0DCpKv5rMLzqNorkX64gZ8iOTHOWWxy4ZeEDV72EPjLJ5k6/W6CPZ681azUyH4BskBik3V6IVLBP7KUxH5C/YyxW59LEOEAJj88vT3GZp/eDgdJTphNww2RjfVrxNPAjLA8F7al1PboI4Sfow36AaPkd5y649NGQgRq7StTDSZ9N7WYnLxRRu5r3keN3qVeaD6bzuQmFX7nIVlpQhI2BUs9HO9YPpuGW533MyATMZTip6z6yJq/Y/hUXWeCdjxvgFT0v2ybeHUwzffYB1c0HHTqhn9H/+NKJvezjvuhBkvDDtpIP+SG/IwZRIBSSsS5nbiVPcv7quCreQKXMVwHaaBRkSWZt/5MdAxrV+BC0jGqpPbc12UpM6xabPfvNXBVeqXHrWMT1c3hrwdEkH0TlFy12lQPwBfdzzq9CiY0+i66xcQyzTnUOZpGtjocMPDpfodwOJMrYJrcEbX4MlvRdpGU/4cYrLcwczJzVu+WpL8iMHAhfhdWiJmkfWUq/EGulMOjiSgWAQuW16M/zB4jM2al9BRPPvMp1J0Cl4pRDxdYSM4qcF5C1mdUWjCSydl6pX5lGA4qujids2u5ArOcWxaq19EvceEF5s+fI0oBLioWQRVwYGEovbEH9d5cftKjK7tNCxcVWwNug8Bldn1CSn5YRnyMHmvFQ5rtOh0anowdM52DvFwKv5OS8euum7dmtbfFPi6lifb4NALh0+OxD1FlVOHmVFFwlUeV9S6yn/Vni8WcnryW+kK8ggOn2u0sY+991KALyvvgGthKqD3iOA67fMk1A6o4o6Hwske9JpCM22cvtaH0Trqmg0z4BPvQXqDfmDZGg0nB38JjCKVfd/Z9dSYXqcNxWotW61kajjSMs7yt0cMhAkkwUCXXfutokKLunRhV5E3koUs=';const _IH='00887dd5bfdc4e1b8b78a4c195a4ac99fad320eb903d15bac0e5b5cfeb5c168a';let _src;

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
