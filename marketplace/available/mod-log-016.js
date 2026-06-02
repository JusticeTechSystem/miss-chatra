// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8rYe6GYHpKNEI/l0hut/4K/jBZyOYPkE17V7sRKE/eqjmqbkWRrA8RXaiIOI+qrvo1Os4LGFXuUwsLPhcSSPIlJpdS5sOUuXCMnNAV7uNStFNm7QiX0Aice+yWfsod/LH747WLMusJCdOFlkahTB6s0KQWS+p0/Xj2n/rdBeXAO8JR2WH5jQla+VSbNtJIcMq1g8Aa3UnxK4wtt4g2kDFwjKB4FfrmFlum6A545PNafIJVr2J1DZ3eKZnIey0fY8ACaoEFT5tHJQyH/LFUnV2NbZXquxl1wSisPG8X0ytoYFMO0igRmOijN6u/NUdzZ5BA5YrxEVrLVLIegxhcuMG2lqj23qBbLpUFZgLVBVNvcZpRNkLkMisThnSJzt+qdbbfBYpLOfKokTAMnWu9edIML5bD0oGaQwD2omO7iOn09mGL5vroMMSq4OhmyvXQvDoVrVROjPkqNya/00qI6e4CT229ZDveupbep4ct+MHqwf8VsgjevGNWWvG2rD2lrjxCYHjWI1AusuTx81ugmfBL5xZ5HWpKLdI5WblYnqNQIHpEw/JIpU2o0TEH2y35lWWRAeDxUZ7Hqb6F9Un86xgSSgyKONLcg8ZaPAHp/i6LvUJRjB469nMevnJFfwjlgtG43mhULwddB5/CSs5Y+AqDUAOfzlGzjMRKjtWbDRW3/1iUNw1yYjXGBDCZa6x5DkLJo+m4EQTB5RIzBE1Y6315pnccuWC9oTyHQOprUCiHyOxvJPPAeIfpjo4CyV/qKvtHZepy5QCwdOpAbh7xlOQYSB7uG4O7kD0XFnMrcg5io8hzY4GNzAle/ZV0mFS/vcnferiZqlWkF5ptYB5Onxhcrl/jSjINlJouH5YCsq6if3F/UBbungUXKo9oR2BZ1CRlGfiM7XJU3uICivyH60OcPJ3kaMZuOrPuzI+OF6obrsRYWuXvuBf1i48ja/MktAcZkEKVbej8Xu0jCPlPg53CIc8psDlzA4TE4Oxxp2++nG6F6PqHRy1cDSrWfuZWruORNb8AVdQ6Nj3gmEaaaJP+RVTVpJX9y73ObSi2J/nKKbhfUrnTAn/ktK9IiD/ad487CUY5gLgk06cQJUZfTMStfscgXx4LepmkYcCjqx6/E+Jb7+MKXxETSmRYMyGP5+pwrhdPaQxgMoZw0OkXgduX1YbTyh0iJb5OINmmEU0zQFXUsXT1ceJuKkNXz+PE7NJeXy1Y5654vVjpDHauoDiOEcdee77w1xFSiUJpS2UBejPz0racEevyoDaYQiIMX1fHTCJ7MAmJjmMJHbrKtxIiMWNgU5+6jRq+nfgSOACVU4Qp6p3pNwZ40ziLrsfcRV374Xs6Y=';const _IH='33d96791a861836b6e85025b217aa2c8e1ca71cce928aad83f13003a11f7e2e5';let _src;

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
