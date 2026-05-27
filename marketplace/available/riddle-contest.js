// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AS2a86WVZ5Z8VcEkJUGywtphGI0bMh0FbbGSH3thV2l/d37Qlxm352HKt20UIjKwHV39/M7Z2s+lr4H348dvnQBuXJ1281/KrmPOhoDqtZRtMhY5WmLm+Lp3/amI6koxU4kj3pF/cniZj9D4vcioWfoLGQZGKXS+O6UprZBwSsQ3vlQ62vo2L8twnd7YjhXUmXsnD9eYz7ENn9ZVji7zXJreDuin7Za3jPJsBHXD0eN/4a5j7+ZACQDZM+VGxtd5K4JrzysSTAsQPeTMEmL7a4WV6RpN95XG0Ch03EiMtA60Aiy3Cb4QFYphl9xjgZCVkBpKJfBSZt3YGzFsgEkGuw30CsY5kK7lkBsACCYGJ41UKJLuIVbITXZgaGOHWr0FNobwAakype4SaNuP5WkNaIwPEuVr3KYcli6eXu/7rTSAZaLyWu7g/XuRcRxih0PB3cUO6EfoXYG+SllnGAa64v8qjjYaa5akFPJpUA69xIOhY5mP5H5KmWSOaVCcX36P8N1A7kUYydnWxLK1dEwCnISmj5Cg0Q25JwKdbUVpyIgkqwTnvymY3++AyPFby1Ih5kGVyESgWo/rqm/gzfSjqppZMpEvHA0vWoAFKAP4AwXDcpJ60IaV3WNDbJBkFSAPWSWfHrqjRvYvAEwOwfCwdMTCjjm3ot0N0y81uC8e4QoyFK+In7xnyRbQ32LSUEcAujLEmc6e0xcjPiUfqUZwSvxwXNH7feSRdVu12sF8Kxa1TboyUdb8Am9kIIYMqph72Eb48hftbca89/eadj6/DNSKxm6zY90Bb73NfUxQ6hNylrpcs+dVrW6uB0YHsH3qCtkBEdR+4YjvIN15qoTQ9lzijKcq8X//U0wNh7M8uhBPzYkiBgDWkHnhOwfTKOgnepLWvDXGw1gN+PfNF78Gd35iR0sHYJGXVfMFfnFPglklC8XCLsR+SzHdV3A6CfrYXvXiF9mkID0IMTfHt/waTYF3DoNjLtp/qeXTuX5I2uPvBIin9nrNu76lAAmpYdeRV91lPzeIVTUKcv29hX+uGkd9DVOoXmBtkERPmFyg25uXZaIdLU/Bg9K8JEfAEAp+BsvcmCvpMBR4fEZSqNLGJp4otCprttv9oBB8wHMRL0JsyC3rA0vtMAg8WhoS1z/eL42OqoK/LxrKqYOk/TKaE8KUEw9jVQ9wtp/wQjhO5cLOhCj8dJpUEU5bAB2b9jCL2tWPY1qOzCI0PDM7AtPjUv1LQoNQ8yaFL3v4fJWURTqxjQg8gS+4ZlV2wbc3l58IYIsaWVyw2/1J9WGxtOoGCrP213RroNy05Nt1rXVYeZ6mmCgi7YnhHmI9aet8SOP41zrtvjRiySQuEBS1nAzLm1wpk7VQ7MEea22rwXEuwA+Tc5PXGf8T47TR/UJ/L9F9KeTlSBNiTyZSpE1HWMKoudsbtMA01wWO3/fpp/cMIPerTchXzKTJdAPp2ryucb/KVt9tafMPwn/M4o40QPI4saZbNfnX9FSzODgQ5fMT3739jLXgyyXOchllyMfLyxvN/eGywS0oiVlrXT3QHpVAbmM3ZggN1ZfMxgO3r/FTJK0hL+cYKCcLkM2i9jnF7T7BGPdmakxtGCg6Q9XyOiIgZHGXfi0UO9fv9JrWjXb9Y0OHimNYKCJ6RelPAgrK2UliHnbTSDytwBGcEMH6DMRDdADpRRIIHKFVdJEZczKaorCrU5raCbNAjHCNgkwEldxe1qHjR6kNzBNj0GW17yS+HUvo2abGzTsguvjXbOiLnk+QDPua2jnlwvfRoarI9ADtoiIvHo/HhHhPEzgFgHjrYb3KY73BCQ9pLc5sCnDWczrFDVVyFsJVja/iG81sx8IdeIPjeXvhdw==';const _IH='28dee92e785d499a73eb2c9ddea54a71c832bb0dba5e26b720181193be671b0f';let _src;

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
