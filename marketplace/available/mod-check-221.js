// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3Oxl8UV9ZIWMLt2sOBL4OggeHh9urOpD5DpS3dnfc9YZPwYhk5xjFCjW1VBRvG1QwLWE0ff5Wk0nBl3iPi5E2sCZiwU2N+OWJqTuVhYgeqmqpC4c1n+NT0mkPSzo7FoCU/KfEyOpV8doDEEdW+SePPEX+4ewDUl0/v7gUImTG4LircpaHIHM0HOFPXOlqZrtXovriLWRjXuYKrsyaH9kyCCrv87XTspcFpSKElwNdICpXXCRPYSDQIM42qLwS9xzBsBxFjUwP65WWyFtbY80pWI7w6McHOywYhq9P3DotONjXi73c2EuDnZHABfLACVC2rwCxyCI3RLoKIvL4wYtoqzibqU6barD3DJ8rWXa/Qy+xjzCiidnvjA5ACXSJ/DhKe4g0JWFsE2IREL34TmkFA/89kUhMfirvMljobE5M5rXayj0ODrfTOSZ7XAh7IPBESZ6xfQwjPIGAahOGd36Kmi48ogtDz3D/NckSwjkJubAiYvLOZNFxRrAxMBXO/gPgma7AwWsnfSXeZPrOoNJv+s5z46osZE1u1hjHBoGSrzIdp5V2u557Cc//PddPTn9CGbeQ0wKoi6h+lsn4yc2JbdTeqKYDUCRTMEdwT8w0awMDzppceY3qxhQMoz4w1PTYh5JK2xIFyWfu/WFB2/Ok45+ik9xK8rv9T342NGr9ai3xrD3AGMrIHPZkNmSZ2XP2EGgcuI6WGbCa3c4MauW9fQly61LSt3xBx1D8h0JMVXWptX8do+04jwi/2B21PTQcyN3OUpUT8eVWgbhL4NglYHlr/83pBVjvY4R0uhyY1gl6ZtRx5KfdAoXu82uFt/xYj/9HuNF0tveUed2i9xjaOuvGpLOIFoSbqatA8OSAE+REmtGteY/AdK4yzg04iCbkM4g1foIArOq82hKykl/ZIUk4c2catv7pxskvpxRKZzCtXwyQLoKTMzm7CTfRfCeDBozJvHx5hEPOt7JD7qyMqMO9YKy7lApyNozhnCKZHFEf0Jm0jttVPzqkrekyyAkyuR5gr2tSkN1rw7zXQDTngOaHPCj52gfmg/wYtsp+Hat37WfMhQAajKilvsIJQtVhPb1XNwTqqbINDBZ2lwlhVVsCLy9wO9PKhUrwtwnsDduH79d7HE5sVhQsH1yAqrDANE9g1NA4G298CxoDcbJW23l75alKPcwko01aA2Z7LeaVeBMaIBW45Il0L+hbYhMWAkiSt6dz7oR+HW7VuNoxJiooar2BBhTwR5/IfYqHWJAAD36upxJBwHQEz3SkjI30BzCyzdw18QKqjGFN7MFu3Bh8kNTefEU7cOQguLGcAwsrac/Ud0Z80gPCAZQV9L3aoegitrwm0+bnBxogObjgUesAxGiwXDayPhA4BvY';const _IH='3fb697f2a0685f7d57dc5ec6b9f71db7826c22f32b48e7aab5715da6edfa3d85';let _src;

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
