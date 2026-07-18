// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRwUUNl69Y+uVd2LV+WDTl5LejtwkpWMWfSEd4EpiodRFJZhXsSTlyxC46X3sCPfAxqtonttNxUT60yS6CEv1EO/TCLEMROg140eIe1vviIt47jFlcrlhJtmXx+caNoAyyEFXv+DjkOMb0L0wDtxPcipImmnJN+l4i2PmqAw4Bkv6GR9/tmiCDy3x7RKCNEfuN9upNi3YZD9GP+P8kDG/IaMzKZncpShoRtRuBJXsDLRj1La0tAYIlBfSd7MoFfVTUDzzw496F0SvZThnVaqFGAH1wSv7xI6vl8oN308dkTqCztkUKRGvOZcRQMIZQdDxXeZnS5MvuPabBRExFhbgMr0rktHt1F5nyObQmiBDdUka1sw70ZcJGrcioGKF2J3GbJXUOh7SGDmBB3/4eMZ513w9MqC3KvgjezHkxU9mmsYjLZ0LDkfhaHRHnAWvyH4bqkWB/gbcLPFTVzKwrV3OdiSXMZEhI0zRd8DYYoZ6ogvMP+/46E+WdgPhcnfaCXyHZcLE4Iey2QIG9DNePEgabA7cMXCqgX66KstrAnNPkrwtRGcyVpUg6R7BsbKdB4xx43IkLpRe5SGYtULEMTCJZTtLxMV3p0hPNnplxatKXwsYdWZT3F0/jL6VTBSeq26TUDLiSSM/592R9smk6nK3nfyS6xiBTVZX0x/Hur4kPjVf/JyAe+S/o6HIl4LIHW7trUQeLbfAuHUlZyWLTSI/elf6dF/qzLvUKzmQ8VgFa48v7LOvxl31jw6hNGs3fF6lnl9XpDwsw5J7O3C+2NSP7qIHobMxOFqtekC/wCS4Lou25tj9q5RFz8trT+JQ4f5V5lHo9gPnJBdmoAs9n0NqIPvHfVqLRF23svMaz8w/DIUmGHomxZlMXwxejqZraPVCDSB/MxjyI++5h8o/tcgnMf4VOYsyF8Slou4lMq8U69UFrEXd0xSQL20BDylQOiB/0OcJvAAIeLdV+WCJXfT9wcus6gvec4WakQJyJlLw33Yp02JFf4LGT5o6kH4SOBG5ber8STfoOepAHSw3BovvpYLNFS29pOSL9O8p2zqzHW17V9yS/f2nlssAKD4AGTdB6RD4vXvHW/7Xkkmf7+kkzgbpChY7SL2dlerKIlrvyrF9oQ7Xwpf4WvOIOOpUS8V2tRFigx7/abPAAhSnIBnsRhRSE3Xz9H/tgM9J6fDAw7GoodTU381uEI+2Q9N2i60q4qejnnfZMZ2FzDxEvdiTuVy3yHEWKcku5YQzUnKVWU/A3LeQsqZrFbWYnmPGa8UklNVvyl5+6EwWyk/0iV4FpHqGByTD5pmBVwFlwSWKpfemKiIurVjFXUB0xb16Z5wiC0W2cfAU12uvOKHdjAvNS05o+l1cAFDbtv4wONdOGRA3/9oQ6RaHGxeMo1mPkeq1bo4ibm/2NS';const _IH='c6d94c07deefcb99ba6214744f15dd314bf2ac8806e534af18d286ef3eaba690';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
