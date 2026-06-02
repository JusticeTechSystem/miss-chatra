// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XumDnpDNeLW+E3BQKIiml3LbAFEOb9N9mXpfCQofa+O4Ej0Gx4Kz1MhxVKaIAli3iG0GZFDcn/IFqwTwfAg5TVJ9T6NVb8d9i/ZEWyOZfsX+aYIspiyF4kpuX/POHPE34kzXOi/KcVACg4UtKTDKH0oms7u9yJhMv72Ru5vrAbVLQpIQzwg1wpAIY68mKOUiuslkDAg0ZS3JhZ/7rZNYDOGkVUVY2478Kw7vXSvZkTpP1xUN5mPstlvCyUtCUiDaE2LpnUKyIlbAqSjyQ3tGAj0G/KRh68h61Qpuq8eHtLcSK8Rt4Olr5LZxKCqWFnxNMb78WgZGbH9hP4wFN+87RSADEIisJ5L9FoOgELDZAtkrasLWt0XcrS+9mpI4+03GczXhjRmajO3GsjSKhOc/ff+KEhlBsbUYqd6ScLPRzjqWEdnaJyEoBRNTOcwrVdLcr3T+6nrdPtG2253/x3o3xbwmWaNJr/E5pRdO0b6cLo+WE46A3S5TJLTDz6Ack9yWmjxmtFo1Hlo2Vfp8rg3SQbvua0/Hh0M755qe6Wt686v4gVIikZdi+MlaGdy+9sIACS6ObzMH+0sAxTv+Z2rfUqM=';const _IH='f131b8283c664ab495b88ec2d82394eeaa8983bdb54a30dc37b0d2f57123c65c';let _src;

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
