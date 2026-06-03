// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jAA+Z8n7RlfUR/n4aL2rLlgKYpYMmzmBhLR4PG7nR8vUk3mYbrYjQd15L6EDSWI2CBVoVIoe1yZ5pHTTlDk2GPkftDghKn8R9BcEsaoE+b7Kpz9Uhhd3UrWkK6vGFOwywxjqyZYLceI2gRMaLoHRaC9A+Eww7Z811gXztYMzXJaeLYf0BBjiiZzOIz+kymViIWlAfdwj+6NqzHtTbe2K38mgCele+ZDiBEaBeFt4Lhr9sH9qR0OY9EdAyTNTaQXRyTp9wieUHauDCbo/r4WTmBTlQvr4rLQnhso7WYmqvlYtGq8CMndu5B0erJT0IkD2OXyCjx2R1LH8CeVOQ1hi+ORB/iVAM+oDRagW5HUac17UlIJl1gCWsa9cxADfs1wxNYguNXu3m5QvJGkmDMFMvSbmBexyzwW7oHbpYGDknITxUJTpnRuVLen+evxvDRJl3tsptrBvvdccdUKdyl9cl18Si+CeI8LyTo2tcVMg1+aWB85vWoc5R8GoIIEMAQzvF2MG5H2WuH/9YOdGIYhgJcu4Kyc+55nOZaY+OYopVCHSy5zTYkbJR8uT8GDbjwZboNiDTWlEpelxdUGqQAXNHClHhu7vDSbVen7AYB70fjX1f20Cwlf1NaMamOXMmy6UjVt/SCYwDEouwlN3YZl5lFMMYHjIeEbCfbNkHQ8KJgwq5bJFO7+6KXA+6j8AfkzlRXjJ9LGOFtWAmaSO4GO+I8TQ3wipo4Ipz9S0ZQjmoDiPtmF/pkoLeRII/sQKh5DiOjed+okAOQptI9LuHzwyj5GjqxiUEo7BxV4KWcD59MqxrPEm6IPxx8QVAJOOq0Y6YSfoXWHiX7/t19PftwAwQ3mMTYpYBiSQ2wPSTxys/xjDnWoScc+LojcfilYHzpcCyqmwNV+qQahc2m+T2f2nkULIzOBkD8YdBNT27ULoKNHpscGKSUreOMLqKJ0US8UpzCXNJwRd1eKky9jyY/DcpF7KIWngayAx72jKDk5KWeCmirmdNuloWn4QDO1ucsUivI6iafXjmo/7L/WKX+Sbo+lGw/c1aiL7FuPAFewtpiUfQSUUwzH2b/W0nVOifVf0JHXmrMVrwQISwzHULOvxxrtPTVgtTWQ4gVlz4uUCu3El85seET8M/JLmTbURHJoJSBcxatm56RG2tQoFFZnDvj7N3LF2Um9R2OtAqvoL3RgqvzNrnO0otaP92vtuUAJVPL9/HtdtSLNuV6l2AlkcM3BTsRxnO4O/o/NWqC96jAEsz+ubOb02sSRBAkesDhvXV/ZwIdvA+GIodbXNPj+osmg/Lwf71Fj2xdTfXRRh+IKTpwZQTXwAds1OlnQnMTfR3cX7+SMrM2MvBzBrVY903OFyeCft6jje3B9p4PbR';const _IH='84e2b76a6e193d7a5f5a6b12e7c3c80225854992f6c6b5c66578308a1807e0f0';let _src;

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
