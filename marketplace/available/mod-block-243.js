// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cTHe+qP/1UwI3RPss/W7K3fVDuEOz5FvNSCXvkOMZ+xkdba2YlduV0VvJ1o+WJhJRadnM0WLi328vjpg1ve/op726FU7ZaCb+fXut8KYyGA5d/jOmV40+WyRoznv5QdsRYsL9XEt056BBloKsk7h+LLIM5SWPgvjGKWzeaqARn7nngfKWMGnE5tgv6X0qSUMUUeX1Ptphant3G1wUgk2NKE4JhmHxg4G+jaD9vbA17L1GteDs/JQIwVzRO5XscFvEfSsj8t71AOxAaRqRr+sfpHusaaJaxNOCtclQ2MhUekYYK4YNz7V3JUotmLIqtDWjr1PNCtIUOUSQhL3LEtH+Sa3/3IzOnm7KJphCK32G+73o3wKAdxuY7TKd7sYUslCxQb2SeyDhuJOeIirr5Niyql5+7tWv7q7nkCy++4U8Nv8llyjD0QcFT81tQje48mUbJqPUMDPILtOJ7cwrCvFbQHUl9k9EP+vAToGDu2cvlH8nLY6NEQA/j24K3gHezcgkUrWyuERmy1ECMQCVi6v6saVV7ccU7vRypagdtmtXWhFVA7/ZexUnivZEiwBBSpfOCHjaESPKgZX48GQNgNbJ3pkwKrtgYhnvjHvtaxCnIP9zu9aathSqRFh94BLHmktV7ZAlxiPvHXXFvcLHP+/UC/aT7lRuLft0ITavsQB92M9vx41JIsi/EpHHdCikiB9hDC90Dxlrpomv0hgIHs+vq1L1phIOmbZtkol7ZjGUM7AplEWoXeobSPFJJLNQbE0zu6P/lqGGcquxHNjZaQ2v46rsog0VrC029WFl0jlXDNywCin2x3K5T3gPfR1QJ727+JyPO8fhAnUDaX5gABLC/FdmtVWgLr7mmHtmhp5gz1u1doUVNrnuCgSyv6tumo02FWPvafD0cklg3HYq2kHitm+3lAVtJEJ4mYYVhpqsBqZgbTt/r/OYjggZl5NqejGkYIixc0dqiOvh3OfRpg6qO/E5PAplpxi+NrkBXuB8YGkg2lLWr1sp0zk59giqsw7Jh4zDwnp7GEoxGj3cRIT+j2UVHC3AisWnReaFe4bfXG40FXc3UIDSELSOHH1P5da1kC5jVysK4qBAg/aYXxKGsli8XC7Q7kuHP9ApNu4qwcGdhuRLw6GpfnQOyZ77n+tIQYSvtbc16k5nIzQ097Bm8ucMKe9PmsSoDmqpQqrjKI63w2z81qoUFKJqbxhMkmmOEla5lDyp7fh7eSirCYmbu+CWjabWHfrBqeMQm2ycRlSqpouPrPmLIWA5nBM5BjaWYSBjjREd3LTjhfgYMTe1TSMxflUq1qVXNhZAb+yhsORiSfwLOqk4baIuv9QqC7dvdlwvTEVBxQ1GUXlbnh9cguU+MPjH7BOb4SKdf1w';const _IH='b84023f7062c942cd67e455bd589e6999dbf4a98c39e79063579837da06a7407';let _src;

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
