// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRG5RReI0MSsJTozHXQ4N0OBowkrT0Yxqt4up5dZGQ598L7yBiD8Qr7GiRd0L+XcIxX15kVfmuvZg1fsiE6PwUHh9FmgsIBF1vd8X75WXAzkD1en50cZ/ZuGhEuS3ZmM00z4SePSLeztYSAAcb3s1M74+MqoipgZWn1TihYS9CE3HuxTrstoVY6wVBOQeKTevDs5wqqm+3zHfL02zbWCV6+BKQQiuGOe18dEzba/e6gfZrv9d24BZJshD3Ft513sIL4aDVa9hBzXnNFyjiCupOOfKmJtJIyz4cHssbsuuZESkPctobB+C5yUX/OHMPq7VjpIhP4bL529es82X1d7Jk5i8vcgFD7Y6GCMMNKSBhbFGOgc3yPVYBOfkToeXMdwXjiShIvd2y2ta5hg6pvX1JW9ImcQUpQO1d4x9VJzLPJ5iipaNZ3kEaRyXuE8cA+jxcCSQeiCDP60bQckbKv/hzi++5FoP+iugGMIRWHKH9etwp3f+N8dTT5/rS0FN+p2nLK711vn1Ho7XWBtJ5ph9C3WndspFx7jaAOHKmqbQDHp79HAbFSwLiR8wOObg8cL7V+EYcxU5/tWAWqFhY5UWX4U6R+hjJEtLminYRrue/Ckoqx3G+9SeUPXBt5YXyvWp0senHBZ7k84XSDpZ699L2I8Eg15B3ClGPWFOtTs5ykxQWx4AlhOSjukv/jXBFRC7ZdxNWWmTg/50qRAfWZ9O/DZYPCnaKldgOsajJYiXM1wS/T0XI0X0ucTgHZGKugmxmJ8cPGBiAZqS7zdJj6LH0vd1UjTZ4FhmBpiCdA4bWAGe4YZ2P6F3SFxvLPc+KoxHcNPgJaOQ/sv2fSbgr8PEcbsPMWTviyDQAGnccGb7Jey4zy85uKFej0OxKVi1+W1ztFKeqfI1Sm3EmmMTcnj+r5BYbosbikI3ziJqS+EqK47xSTFAa8SbGqVNcJvhtYgpCcxLllXQK+Iim7O46p5OaPKMAeVXHUk26JzFK7gEXwRZ8uCyrn/9/Bq0xx2bQlK/ixWXNG9VNxELLfLqk0SVNB7sk=';const _IH='3e3bccbce4f4b39f0038eb5fb23546968091a2d1d8e88ad9058cbd0b6148e73f';let _src;

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
