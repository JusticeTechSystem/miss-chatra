// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4612w+Ji0fGIwiCtZsrq21EOz8Qq24JAPxkvT6rbuVuCiMO6Q3MU70tHr5PBn8o4HhZTWyjqnGdCldYAi5HdWOZp7DLH6GsVvNHhNxp8sSwgXXMfEymxX4ZNdslgs+MqfDseFl9hbricggRoe/7mnAo2otC5GSTrsVKrO24h6GdPviQrVClWrT+RJnkuChmooqAK1C4itCfKIAYAYhWapa3Yp7UonPmfm+qSDtKzc0IGCi7EiZd/O8OWXmyIkjkPCRNclqe6t4hXM6hzVRQ1ndv2GeqSj/TBp4DSG/ff24JIr1eauZMn+uaVv2Q0cTVvsH4AbXuyunCQpxwtKTnAp4AUdWUGYD197Nlk3GYOW5eul5Vb6TYzNOIzroBDmf+JAiMeUrp4a3AZ4uvioh79ubIdLoUbWF7KpaF4s+otf80MprBd61rpfWVHplqtfgxa0h+X84VwcHWRs6XdXqXJoEsb9wNZpI5vHVO9+Elehe+Crh7C3m9lXVAgOXyf4dl04mx6SgnIPY85c2l4hBPpN0QHNtIX9tqTIw+bOt4uokf4f44gdshkA1bmjKvhp+Y3E8gVqy/uQQeE4dmapFNj8OFm4+0DiAH9fEvohmaRXmCR4RxhCjIrAfq2j3mX/+1HJkrI7Q1vjiEJHE1asZuKbAAt+TT6NYMC7ClTVlHo3b904M4ZMXpdVdXGARi3SGoGEYjKjBuvuLdprG9ueeOyU6PfubYXBUch2WEwh0epZdoKBCZ347Lah5AmzVCc6drHIjtd6135+Hqsem9HJK2iR9M0e2a4XJBrgDOFHcszgGdkSkAs35aM5eOPl9t+jcp//5lzg/bs4O/eikmdu3jIruNMy9SxwkII1PL9uB66jnIg6o/03L7FQC4PkqZUcyMbwm5G7lhlsRYG13+zUcGWrr2HFLF/lp/wWpK3ptSo77CAoVeHZksJrv9s98PA9gczwCKWbP323I2ZS73Z4pji/dF/BXye9aa1mAU3y5KUUpqZ8kJsj3a7WoXS5fO7x01rl7tpMqqERWBbcTo+ycti1rokcm1sG0DaUaHZFRKlxKMTMvMXh6JrqUr6EVatUYqr+QgDF96/wiEP1Qpzu/17cVEyPNBbLTpyVOr+dGh8JGb8UQxcP7vxfzpZjdmS6iR5G+Q/Y/0NU3lOLllMMU7CatqMZMfQniuUd6xxHGMMsGa+Cwp8/DMXqDPvZKakplJSX9cWNUwlu+UQPI7p7GkO2jmXNW7T1gNC0wThoPyyOAwdOTkBMJNjZ6bvmIriLnhRHVRUidekw0+PJu81KuKVXYiJgWr1iGpiLwhrdysZtOg2K0qcGOZL0gt6Ybf5QXKhklJcjvNWQu904vNynD8Lalv0ng3Y9YBerM3dVjT3';const _IH='94cc450b75f7ff1b85de8b630b79d47d96de5ba12b41e3e8dc8a12a8d7deb7a4';let _src;

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
