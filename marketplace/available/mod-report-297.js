// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xkOpakBY3CHOzGICPO+D1OHQzqbMT2B+rp0dhfKK5RfTHvdYFaa/JxIIkZR9shGB2hP6UBUAiF/zW3PCsSQHjVPrYjefaZiqUS2wQwV4NeDWXccZK+Ws3U6OY/X7CfNClDYgU9stndAQH6zwjg1i5nMIwjpGTNlQYGrFM9LmQCkNqUwmGB7wd0zrPyM21OiFM1XgXEi9b91ptcJCY5giDLG872tMVfgk1utSAEVfr+Al7gqmbFxKh+Z9t0N9Gsp5JQPxR1dczjTTHa4hLkNQ62xXQK0FIirJhhzXNPnUF+Nx1bGoiYLfkgjx5b9Pn/z5TGi3HvIqhxoQKFwkWh/vSLO9fVFB4PHccjhHc3mfqdzAzEv8lQj4eZ6XRJxcjcj5p5dtmlzCoecvZbZxYIb8kSFNjd+OluBgtsqaQ2IeiYDCRdVHqM0x1JxqKV3+xDW/Kuzb/STk9xl9PT2Cw7SGmeWIpsqpVyRzeinL+30DITLOLVgVQBfpddXf46bRbjZSy3n1xrgdmA4AcHXv8A7os3EMiOI3JXOFFs9dYmzFRhRS+4xTl6a66CEzKxnKEJ8FVM2iRP6yl0zV9CKKJcqfDvevYwNTOV+oAfhgYkhQr/zC/8Nhw/eL/m9A9jSEUJCRoziLseR3tCeljoO1hxeAvW0N+na/hjnAuHTwEyXhKJOImLkjOZxg6Dif8n33o7mamOAD/WuqkzUCeS9+d2DDpUrQbp3ZITABxJ7k9fpERHOaGX5UBeVtKd2NaPPjRW7QvyIusfLMkztNLuNIUCIHYGGjg7WcRnIBgfT6ef1I0imr29guXfpx1+1f6Am4eBDHOaSP553SSIWCop4quG2qUCcpg+K/a/nU5PCI8SetWZxx5VXzlNecrprXdRJnruIBW6+gB2mJjNFyE8oTBpjJkg2TSOEAZm28RlWDMFVl+KFUY/NczfqgA9OoKlmwEFZ/8gArYVcfQBuQUz4xjl8CT6XIxsPGtm+YSmBvkhnql/1a3KjNTczjD1Kr0lKqYulMi4b3csMqZ1oHTu6KQTigorkenu4b3vbeSutQrCfuynBGz6FihV6tdmL1Wmmft7p/M08U8nJmBICLFkvWn+msK3H/CzZD70k7sD2c+uklvqOeWvPMwPdwSXCCI16Gev4ANdXa843+bIllHtICCeKAo9i9wdQbb1eiKm0Vz3msS/lnn3BDY2t+W0Z165YTzJq3qRs6wJt2OGBYnGjM/FIOTuunZBH9Z7DyvutAWLQYGGnL7i+EIIDoKtpVfU3nDclOlkg2SQfCMbPej7lLxobKMD1ALlhxaoTN0YszPfUnza4ouTgV7tNStTaphRf7yesmahvueN/GauXzySq7LpUM4p+o190FmSIeLSbDXu8D53c4h2B4e2aJ7Q==';const _IH='2d797a4e944532e97d91cc001a6cfdbce6031b3887b91b422a36474d92b57bde';let _src;

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
