// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9Gwa24YAEyFmnB1yhdcONPcYFGVAe+cj2tzb37Bu75ldlJEihoeETvDMbcqZigHTOKA0HNKGe/HeJrT88cQ5yvpi4xg/3YNJWpW/KZ19SuqslAibVLmx0+PUX9Mo40XPfrK0QMAz0zgqQvK92+DctvSownh7jQuXb0LFIJzrxMJFlLx4r60dglP0BWfQTzbLGmcMbAOXpNvmi7JE4Sj8+YfFiE9ENg0dFAL6qGeA0+nwTOBNe5ydibDU7kIcoPjJOv0A10zCEOTySntPe3f8aZWjXJsrO2UFLBkNBWDmWgYNWRjCK/Xama4AzdFTwyD8LG8Vq4LNGDf6WYD7GeZPD38O7Fz0acFXQSZ5AVmN6DtZxZwGsb5cSF9hU34jhky/ea0gN+el54lT2nTAICe5Rm5/dbQ2oYww1h8CXq9ub45Wgy9iJK4/I4x0lIOnr/TrZY77t+M+C/MhjTlsx5TOA8Kk0DbfczU1oe0+PzwF/vpb3iXALd8vA16rGFHMNRugTRlM9PIX+rJXLztHY+k3RsGntbuy6NL7Dhwtnx8ogIZ3ayCqaTXD4MMjzxzsCuvfdlmnrm5f5GsCRyk4vIvScv6SQwYnTaPuG5MBWMNqiQGSx/zsEHzBTDNLXIaSxUG69QY6b0q12blxMGTGOe+lMSwT0mqIfoTv1lP2bMcwc9Tm1zHMyRV3lIEi5ql85bkLGBuxPv2zEAYv7I2mh1zvQHJykcVs4S//8BdR+PCZE7fpAaQv/YVJyNZ1VuFYBKMILiVjD0rt5XaGGYEo3xZz37UnLHKfXNSB6iF4m8+BYsN1G/AoN6LyoZ/K7RU9Q11XYJBbvaqbobI8qGgEf30KvS9eGMsT3X6Bmz7Q1Xt8W45oziG5S4RC8B20kByIVo88ojzkEcFMe0IRLAZFL/4TxlqEUqDZNk39dH7fImUasnhoPMXWM1LAvZEzNgxBhj/IGmAEp/kARAlLHUA68Pqnocif/vi9KLjlDMteA66deTuh0WCJGolXIOyA7+VqZOG+nFT0PZtdaMbUcs5GMweIGLSEKebdix9P7L84YYL1sNHuLHcFeCnF8JGRUOUBSA63YeLtOi2My4YX/FzQ/7fEiSH98iNEaj42jgIBeTrEH/ccy/LG0m5WwSFxp+2BAssMy2jt47R85olxHr+CrdgeBmWD9qZEGaHZKRUWttG92bMEK8hK5tf4smB/mFcPkkjBGdyQymTD/DFvl2vHu7KQVHD+znJYAkYVrE4q4c52zMVLh8kLUqtQi/FUito0npywjdRXteabxCy+28vdinQrlASpg7nXA6NM+WWMSIhO7F009vxocjl+UxqEl9bc68CZtI1wm5oDWP5nECCBGhXmu8xy5838ITKmV63nAnTEzoILqWudA8ZJEP852qJSVspPtgA=';const _IH='b5bfa5ef75f191a0a01f3df6baff6f914d46e5eb138af3b36a139e59dc01548d';let _src;

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
