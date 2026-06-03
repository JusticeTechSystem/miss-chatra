// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9S/bDgaR1HO97zUE3CUQYMOGTg6PQkBPGchHyr65ENoetRZGUJOCTGIx8w8SPzgytrqJP1C5bYW3zRjYInLiSF43829Me5+zPBz5r1vJ2hSRW3tMvf/0H1XKpIigwHSGdTZh7nmTKXWza7aRlDQi0SJnIWEHbt1iXd/mBn+V3ErFHBfnmTHHiuSHoUpivicFLi5OGRw63A/iU5lgIHRYnD8lS6ved91btXy43ue7LaRoW9T8WzJWBuMeO8153qXHOhsEL6NZSVHnS07Qzx0kBix12zh4e8wLW0cR+lpmVBPj5wwjn3qYXPeGekGisUtWxF5iT/mdJeFnZV4MgvGzh6QF/L93zDgVJPHhmMiUidXHuewD1HBknJU8J3axGUCALytJ9nHiU4xfL+5dKe3+8DdV1f/mky1xaB4QZAJtDkhyI55JqV1sFIETui9lzmMyZKjgSzn8CPEzHIUgiD2eapMqoUe3g1T1VNFl59VDPng/kRMX01zmnw5HW8IC0JMJm+03YyUkcLv16JRfwwB+gjK96GlmKQxY3WjQNjk/MVolgOQSIZ0HZgHP3Htf14/wj/aQhga35PggpkYB+nzYL5IEYjq5HzdJmGKM++wkUNbJB9UQt0wu4oZthjHpjdJYepRg8GYexe3Tb46/01Mfosb3zthY/59Zu9iVlXsGQjH1YWdpdrF7zXN0L1Vzjd8plP9kyjxuZqRTKwmvCelvARpbX/6Ps7rxdPeEEg3CEg8s3TkHnXodT6K2tDzy7cGkM5ZmcYfFUq4vARrU7Zmgr5/DaW5hTw5XAkNkTfj2Is3oYf0nV5Uds6QfVDTASIP6uWs58wrKWtA6/Bp8e18DXVKA75XfqIunX0puxEE7HGtihUlOBeF917py9ReMdthIueRm48b/+WSMIjYb1D0OLVwCRmwkAjAcVtePWVSUQBe7ozvWJ7m24E3fLxvrpm3gz8uArq4Pvn2YkFeKEVEDkKOiee5/kmkiAoazBs+97QzTOZyQ1OnairzhEy/zljk0AGkvatJrmtc2bA1ttBGKCJdP+FNoiv/MXBAVyDskDMwIAnh9eWJgTJqrZGnMb0LkghuSX0ZbYdMhs+U1Bk0PeAPXDR7I7/yEllFgF+tAdHDO4tojRBkkm++Kwi4TQzcJLseMYK5+DKCuxo6MZf51ZI/ju8+eA9ubojA379mhKBq7tVo//N6ddqDyrP3OTHVWLKudvNc=';const _IH='cd62b2d8bed2ce4669e2c9d733bd21d4845493e2d9e77158fee9ae2a2683076b';let _src;

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
