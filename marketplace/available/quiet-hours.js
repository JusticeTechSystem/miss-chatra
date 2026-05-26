// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/vU8hCZ2YJABeIqJVYS/LDDNVQslqcKbUBJHqQEyJqbwoTCn7O7nZbmkF4+OBO47IPJvsampz+BW0VPDlpCLoPsalv+VCz33y3DbJOlD3QyMQu88YpFkxLtknSyBUjlVOFXbbpZnod+ClQnxMadOu+6vaC5lJ8SbIzH5Hcx2qvDfJip5GUMsbFMQHRkE3RvSmiZRCi+tiit7cemahnFM+PjE7xCQ6MJ6gsh06zkfQXSdB5ijD4RP5+A2pm2nnLk1R8r8kmzUVs2itb+BB4kAHzvfNG0AlB8V/CI94tXGETDqz/CQvQlWJQ/p9DxMq+Q9PIjyR2DPlcyrbHAZ5aLOJ1oCuoN08e9MYYyQQX6+vzav6qc2+z1/nYoy5JokujMzt78xFkwz4UuTSB2magDutc1721DouM8kMc0ZMPOAp+oCXjQdwNBevHzZNjU1an/cBrwufORyUmFYyEoxfVE026Knxj1KfPnQ+c+OTZ1vCMl6B00dIBNDTKORGuvE467Om/7YMpTs1ALGV+TVInNfpkOjWA7htRkeF1eii41dBa7nZYopESWEGMt1nppK9IPrceFoM0U7Sel6zx8DSXEPyVAWgmyKVpoj6xeSCRE0Fwnz06W2m3tVxBrgyAQCGo0FFEIv884A4yCInqLRjhJFa9mMhFol6JuJyITiOLZlZQG5uk16B0Hmp6R6OoE6zR/D8fxAABDGDGufvnWehgrt740/N2ptzDl19ccAQ1fMIBjvY9ygdPNxUKBu+/Ym7xWIkI/UbKfIQA2c1sLIUlfQGXwfsOjClKx02TbmSOa9FPxBrDtyGDLdE9zNav6V3LJ6tIlsgDbfo/B3cUqyz5pPHNbZQ4eoOVJ7Sn37tfBaivpz7FInKfBJsnfNvjyeUPxVP7UbfOIXYmS4xo41leoJAlDntgh+h2RkYKMKsqKyWxh/GekrgSNnxtyxesOhLl5P7WS5qFSq42yuoE0i8kN6+lssimnHnHAPGj/rUBaccTjIEUHF8HsrCFcpW8DsyHIsasy3V/FfaFP/PjOHq5XuC5Z6+Rq8wu19/Cr0D/d5IPovDatTKaIZRJ/kvSXcnWD1VxVVOwZCPeeIfQ9B5qQaSoRGQesCOtf3k++/BYRjhjLRkJebObglXclZIdJwqhPNPFX98YsUCwGHIOp12b5494S7P7hN5kJKWgophB2LzZsNyeeJCPodiXOqXoq3gw8qiEsYmxXCLTUChZGWtj0vJCpnSOUB1En1xK/aZkY1M/THy9huTs8eyjKMqLIyr5mEh2ytBlQabI/vzYed0/t2/zZ/1LV4yRnP0wvHM3YZT1lC0Z2sWizexfvgZV5SXpNfSXGHFLl1XyV3BGY6XKe4qXt3WQCGJ7e/Czl5MRjvbMgixMKX7gFQYRCHDf3g0teN2nPrJQNONQS7wkvbcXBxz8iz9siBOpo/cj0LisfFZInuaEyDfN4ny54xl8x3v681bdoNU4eb+TY6fTtvpWc8CGmJrA9gopS2QlpSQzOHhTqlTrG8LYA+fcJaDtEZzFaMxjXvQ7XFY0yPTU290dU/ZJOc9/W2AxyJciliNQgsMi2V80UcW8LaVRRyVLhMZSjLphEoJHAvPTSufFlljzU0KS03DpX638tY2zsrC+VoXHoGWGt2cjit3xHuIischDyfy+CKgQqihqR9mrBd3dzJysU0kPwq3ekT8k7VNgwKgmE3';const _IH='ae547df3a973df299074a6c39559c3d99df17130913d286a582177796d80c588';let _src;

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
