// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dztvSNBwaguy++RPiPtYbP5iqFbfXxKKRoD0yTQqao4SWYpNAEXddojHYEXlSkfwd4fqYW+HQzrKwR1qeNmZMRD6KQAREHH7X5h9QVq7VD3nuFCfEUmSYo2kyjIFFjp9/lNjyAMsCu0umGdrZvrjWwtTZqT7tJcGfhjVNy4XF5Mc0qyX1vU1m3hMdwx8COAwT9Wh98scUunb4sbHP4oIddjrhRfBenb1vJzADs98DjsG+t1wSMk3t2ktz50UqdmVMkqRf4AKEIir6JrlEl6a650/yjfqGlVLTVyF4cdg0gl43cRA1IE5DoSCEY/O6RXhw6M0mPb4Ld1ENfuAZPS8mGa4plw+7eL6aAd5Gkodatw10Nu5Pv2hcJCaajqkkixp9yz5xbBfLJ/RWfC01PIux6C4dZq5Sv/hf35aN0EfCREIQRgrDFQj+WGpsuL9T/u4f638rPhgx+UTuaxI0a8YWiUB4KdI8WBakn7g2QQxzKfXY5GM5p0uwl6mFw2PPCoX22rhJpEA4reZapMcEzmArbUpLh9/RqM+10RTY8SiHBxLQxodtyTBP3kf08gP9lGDyuDzwvWaADXH/eNwAeorPSTzQ5uzTpxdMyAnzA13M904n1egaYtTDj0gz3EwCGQGSV+LyQov5hAirvNps+5Hms1gO/oD6AzLuSv0vlcucC23F4CwlfoWlqmTpeuqep7gfeciJkXwXf8ZckjnC2pcc4Sgbf1DipTqs/9i4wMr5a2lvP0Kk4suo7G46972NwNBQxbkccFnFW5hdDq8NaQcTNS7KmH5yz2JNsr4rt1kc1CYftdHNhH5lqpYitJr4oibwqQnSAxMh5AGUsgocvdxQlAxXaz0Ec//GqOJEcLzihINOKiyYLv6bipW1kvUZh2bvj9SPqEXfZfWDoaB69qRwJy2iqOhItCotEvinMlrlPODowKQYntfUmDVYUMkwFB7l8kieAhTUyStKR0bUAx9hVnKZHzIUg5gsJhgi81Ovm6WDuNRJjxCZA4=';const _IH='6e103b0cc6f132d51aa4114491ca1c561dd1639e1fde6166c850d082c1f1ffa2';let _src;

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
