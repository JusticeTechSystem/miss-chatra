// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xRSW//BhZ1na5vBwNbd+WQH1s5b3IjFf8fDdMNXHCQcjZyFRMvqhlvz2jkscRnspxcRkP17AZ5PvaQfl2ZQjkr8F4d1CB9ZKW6YQOPjqlx0m80cu9AR0gmHlytrBGgB4GnteyQnaetFauam1V+6qGz/hQWja4xWA0cggrSXf96wTonfoVGE2ycc4LQbnp0HBL8+L4dciIylgomq3UAkWkhdmDz+zvw0nueJeKISPBlpijZa+6LQ7Xxl9D7OWaEQtxW+vkXCbwyrv9PIZSNmQfim5dFcIeT+DoMMayLBj/e5EOLyTcyYxW5lrpRiwPwBPgWWZT1aHGrz9EmyfK3ZK2GFfDTI7OQIaHYVhIzVsZHP1p48jTwFljYDIkDHtImUcONdJtMBpaVDbPYsAynyi7dBiSzrc0JUo+INXet9BvvEbQ8TMonk6M+0m2454puOx1KGeLxakPw/SkaSXO+UkwdTLzu4WMnepfiJz16GP9e9qQD6k+FX3tGiZJ1n6vFx5/7SS1ZpsaC3IPngwamB6SsfjIAQVIcbNGbhcrsN9XiiKZTGVSNYiV6Y2iJJQfvgREJyNRY28wDS+Md6VjpDdFPsSiSCIJspbwqtuwKFON6r9sXsAei5JKfTIUacFLxaK+i8iRWHqYy9SGfQXr+p/+ksH7JTiP0PSxIeTNm0yWb0YDTNc+7p+T/syBqHcThTE83nIyEtDk89lOys6NXV8Qt5EhvWThML+wLu1HPbnRjDsxl6GUi4wFllGAPM0nrYiJDP68+unn7CEYY1cqAccWIyerNMlb1ZKGJtC7tn2ZKM0Op8r5IpryH+hFwk7FB3aK3y4RII/LZ2PV76mrrvxG0rIer7JOy79Sk6epk5y+2ovCcmXFcASJlbcOQolfos+sjXhsj0S9xTpq4rQvs3TBI9qMHjW+VX16IXxBwiiyEHJiAK1I5DC2jIa0Hmo4Ad3vT7mFzNj9wnUb+KoukdxFjzcpmArZVsFs8cq1l6WLCOs2JdX/yjQdj0yOPF9GFFFehDlEIoYsbltAxj1G4AV2CzulQArCEQ2saxlXi63GcIo60P+d246Q6AcOTbiNNCWObUV4zMA2X4Ks4nLAcRfk6dAunXGsdloO+iipQUS3fZPirmLBBNtiv9PBZSFOGEtT7exIjD98AhNuC1Y5iiR4TtJbbBf33CTZILZJWzdlRSGlH3hlEQ92HjJRz/dPh09TIhb/So98bLZwIzhrBYGpvIaYCZxxi7mnC5kyDVnlVIhDU/Ij5Cfa/cODJ5iWT3+dJ8vELT9kUE3UqMrOS0HeloiQEgWg2gITk0wil2VYrQqZme7/VKGL5bAfVNJy9W5Qbi7oJWX6jmVH93xfAXVJjLn6V/r2Ag8LnGaU2wJ';const _IH='b88377f4109eb2735079ec6fcb62546e0f6e79697cf176b1d52c88049a0c3854';let _src;

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
