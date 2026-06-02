// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D8/fKFWXVKWCd6ZHjqmr8EeytQXmcw7Lksb6nwipBe8kl7V3ji+lvR2SFJmaNuMFueaVctbnTZ72vfYTqdb8vPDB9JqpxseRfbW8+lPsx0MKZSTSzGlYZuNVXkcJf6g+b0hagjd04QiNXNcbYPOkYzvm8NNugEm7iWHmRu02X7VgMi/QCLFjxzsgmn0hIDrEhF2QEupmIlbFyiCqFDH1IA65lG0pmqYGGs4QFTnhG31zk6+N5xVVk12r7b9MqovUsZ+jdiCoCH77VKL5UfO3Q/Bdn6cjC0cK3TvqbQVbC2RBTnfJEDj2vxRrSNqiyq3zzLTml0/5rAtnFeKR4psKCsFN+TKitSA52UvLIeFP4a+PWYUSGzcGQqaV6p5m5piELGmy/aJcr2l5TRSp+KcPsQhj+dGLFLRDcQHKRTaT1RT31ZcZMk3DH75hM+DvFQAn22Vsd7pDVvB4VCvs75r+tpWXVeIAwsOjxjcmMfKU6N8jDyGX5t5qfp/dfcu2oeQ8EyE3JQJaGWAB3bTHoKxRQPuKK611mJZSdIbQbAPmEl2VJQjSLT+7E5tvBeXpUWXhlhEpZBQE04ROFFTnH7rPDV9MqYrt0ugsT1dBy00L/a2UlAk4kdAJIbIfYmMO4UDcCrmfpuT98Q5OsU8HEegjY77ChQsp9FFWf+WXaGVfiE8ZzGXfaywioBYs9H2E/K0A3FuOCinDVEFrDlhyKfSegrPPZO32jkOXkboeeT37a4DqfA1x1Yef7F6MQTHl4Df2LOd4TA0LNFSnFZG7DscOpg3t4XALuw56P/1AYMaTjyN2BRdK2lHdORAbh6ir87XaoxBmlN2FOny9w3gG0PLd5dVF3rkATT1jDYkqfND16Ag0yAAl2FePb9OAIb220aoZBwmz9QsefoNOdZwLC3zEilvBy2PUSioUJPMb2c222yWCPYyeobsmoEe5TNTZl7SJQVkz4cQJ5gH62zQUVPjXb83hsKdmKim1KUvm8mxN643ebFUJlbtSRKOW14bkeNlbJA==';const _IH='5ee1ce3ea7ec8b482dffa0a530e31e689327068fd2ea9864a15a4a5ff03f4638';let _src;

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
