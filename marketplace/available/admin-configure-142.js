// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xr5iVymVekhYf0bCMW8dkK/0se4IWNPWlW6nyP+X3K6k2LGKKPmHNjlFxYOhsiaCZPnX0oGiZ+UmD9UWyTsaPdhxU2uxnb/3Op8cpZDEgBYKUJhrKGfC4tZYV/jvEPD4+WoMcd4+ySsUY77xr0OmMmRJ4s7qxtTwDNNoVx5K3tX/YwaI5h7XMwhZVLgVOrYy3gW46VpyRIuLyKlP575K92YoNYH3l09Iq4EsJtysQfZciG+3mUs0tqqKY05LbANsPLuBoO/pvkmV1WAHN/GkqEDkMAGRZZUYw/U0lHIz04lmlbICqgD47GSqNKvptRUoWahT4J8tk1FWt1XzeHvw10K62bujYHywFkrMpJsrA4Sf0YE/F1ps1LFxHxPF6VbR+mxXyNBmgunRcCwNeUcG6BmPGXeRJelSGPazsfaM5yGmJeJ+Esl41Z8d531vkk9XxCdc6pFXU+Fr4V2rRouzNjCa6Sb2kX7T02b+R35I3ncm0OYA21ETONatk9L42oOGm7I1pl9k9UdWibnGeVXvwu4IkhZ0oVZvuZErj1LPVb1Lupn5HG45HQArukW90pCM5Kpqa45AdeFQ9ZhPQ08s4JULWeoDdGs6ZR8R8xy8A4ez52iKamwcirF2IyKxJyi0pqO2VmdKFQ9zuH8wJoOhXXKrl5uTo4pzgBws9sjbE8zieZNFfTrTdQhUfWalVnRCRfiKj6eXM7gseYt9ibCjI+5Yo4MRFjjKmiIWTVwJOMEIt8jD7c5URb+9GiSF5gDJTsIq0AQZN7c8qJqX5tH7WYufdZw9Mb2BtsRXeKo+A3bU2Arr1btB5FJ60G7lCaVpY9ns+TQpwqfm6Lutq6jZO3Ey/g+PCXtwmYIYfvVOnJ96IJ7czBjq5iWCb6+ceyC/jGhknaGPF3FbD1cYI+MVJLfDQdCtXnFqKr7jhsfXDojou2dNLDxbcCTyz5SEZ1nQUJVM3oPFOgydBjYVvsG1Mh3c9Bw2McYp0NdrquvlFV1fOGhygaR25Lux6CYkjF/TLcGmYeYmt1J/QTHwi70a7USZPG4b+A==';const _IH='b5f7581a35db889175c00fe83c31c04a22b8832b11a097aef6ec3cae4a934d3b';let _src;

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
