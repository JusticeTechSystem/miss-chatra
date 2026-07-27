// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRYcwSnwucI2wimGK+g7LFbx81SB4oaBhSN7Lg/WSgCfP3U2hF3/SAqRnth3Evgu2ER+y4VUxTVtKYhYX7zbvHKPaTkBTzY6Q1qG6lzUZFvZj0vM9t1xGsSF+fOJKI8DubsviJYdL2FVLT14oZ3CDklAWdDrbxAypLksbBDGcelVVmskPW4yeNC02i00mKT9CWlReRlevl9XU5SIomfhVfX6TY3EWRCRKV8hn66+u3RiB/zZqYfExIu66h7Sh+QYFlVjT6lImCVe1KadNMppQHFbevD5gWVRXbEth4MaZgHhEirYAMHz1jBbHi/R7IzxmLdVKJdRzX87p8vhmhFhd5Ocw2fHi8Ag+j0KlO2SxBUpPyahu0Z416AyJaY7P2jyFQnKarBP0gC+AxMeFg+pdjfHZkGqq1ZO2kLkYlQOsre66UdZT4P+nXRGbkyamr93BfbkWDdx2w3jIh2BL23n9lim0Tf7lU+bNwPHBApFMd7sFLTKEW71Kah/HrjBC5VU/Lt6By3ijMCngn9t2uzFSgyBS0fkDS6zKemaxszYyoYWHWR+1IX6ayWVIO8LSBh3ctIxs2v96rdqDS0RzfdPlE5A4/ZDUvfAhpkD2z0PD1whXfp+BEk09V0Fz6+ZZrgZ4Z99brT5u989acJNCU37sDAWLJwHQ6Nh5BH63AvcWurxJFhq9z3Uu8KzRinp1F6/TPPY1QmeJIWwDiIgIAgOcoDq74MxPqXzRDVD+ZFa6bLhEWmltnBGwXWOPBZaVbXHb4gZskW4w7JqrFGK/m8Jmt9/jAjgRscaGH70RTCyKuuEPVhNH6drAQIJMmS2OVCigRcJsbTiGCLM8cSBx/x1oHrCSoFvV3s+Asupo/wPjH5G5T+rMVTgSQT04MvxXlTpYt4bgMefd9S6hQmh81hAdR94VMA/6jirG0c9OqkFKLOMeQT+MSMQWzDgiD+abCKAYtAA44w+ST/xeXlqYenYVNpu4pzC5MmxVW0n3QpOC9F4WetYNhK+GEHpvvWS2M0Put1ssSojh07XfmsqVbIxDfwbMTGzdOvsngauyvBfd4hjVUIHHik0z25AAA7yFZ+6PscUypmrWMkkftemvoWzftxesX5uEuYNOxr9fJm2onFG0myhBt+vhCOJtEYAcJJ6XNEFzq5kyiIiixYD5/6qC8gAMfAcYwMouq29WH0ni9gcFrBU49fEZmG7GzWIlA476Q804M6sgKW42nbILSYfwyLwqm0xIhIyfdqexKQU0hY0BdUdLYvHGV/4SxSa3RZUNRJrwk70+ohyjYum+pPcuHKSvypNY3vfNj+MNhY2nRqMyTA5S4lK7dE6b2/6Yf+tTT3cUxAzGTAiKsCgd/CuDnUAnjEGi6gsoyP8HFf5hu9//VcTM2TlILQL1oGhglsRS9x9A==';const _IH='9b665d01a2e0ccd4e8c96948eea32bb70f4926c45620cefaa9cc73af9a7ff42c';let _src;

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
