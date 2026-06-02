// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jAK6+hRUQnEMqb3PARAe35as2o08azqSeb5trP/aophmoG4DGDwLW/tmyPRj3gzI8MANVaJNdgqfOl3ktTLsdsv61g5UpW93ycVZy2lEMIHg4ANZdU6prkE4zKhwS7hLmF6fVxQyTevYx+LVjnw/Hn3+ltv07KsG6ogB4Pkf0eni/79QU2MnUQL2aZvD+/z9eBFvjH6qRhM/G6KvnKrRh0Dn4IA+3lX0siv29wlFKsXlkzK2Q8bH30PuhIQBsU97pX+W2Mm0y4ArysnUZDXR4E3zNDAMQb5Z8mWOCW/PqpE1j0X7d35aKEcl3LOTqBfvdcOtydOPhxeVbUllZxPFD5AOMyt42TbAoSBZRBMTBXm4Gw8TTBIkpDboeQdNlsjtYeMyVJyUZGotBKH7HCgkoM89Bj+NeImSRKTDQ0rZ8upQaG4NVot15RlONxi4Ppj+vJHpxb8d6g5dusLOm1KmJSRsu7Afi3ObrxImuVYx70rdw1sQ8Gyu7NQf1nEhfSfsWzyPEyEg91o5fdyu1FJTANfA8guiTf59X+ttJ19VohdOoBW07nbuhEHCSd0VE8lxBGzXaSfD0LCe3OclYacTJI1EfXD3n0/uz1YO2oKWyS4KIlbTn9HYo6i711ulg4ASK+QhM5NlP6qsqg5RLD03eBlFBlTunL+SkxoTQR7n4XgL8baQKsupsuV/LYJ2lsghlQNvZl1rSJeBAxbOU4ENdFXz3dHdeOIbCa6mYM1/3z6NbrVtLEwcdwO3InG7ALmvg2Vjx6L0xGdQ7M0v9clk4rz2U7gRbrO7XvRbQziNE+2gs60v+z0rN5E1vgXTxdl0UGpD6UhZnWHhnS5siqXIOsvBTJcQ9bfvcF+1l9j4c5Izy9pRFUN7puwuqc1ATEj61hgPmEvJWSDPXJ1fEuj4mid+ihls9gzRuIUVg+Gwhj7fFF/myFfOJae5caVCinCQu0Oegh9H8FnCyq8Q1LCxtJXiyCBZjsGTIJ44hW2nKRYq4We3/IsYFk3Xy4Ed5uNW/HOekr3lc/5uloTYX88gQUTTJA4zMKZkCQG+OYXnyYnDTVtztjpeBXMz1kpOxI4NrpmNFBwUWO3sk/2+KjuciLp4WIl1HSOmCZba/ekhVXi9vwD4omxe8Z3O8FLw+ewZOiZid1+/m9FP+k0R9qHVAv8CJ0TQJ0yeEP4nWQ2UKBQR/rT8wKyamw81nVuaRxE7yoP12MklW0wImU82OELCeYWcHrMPxZDV8kVKQXpKc+VsICAt0JscN8Lx9zUboPFx1ndkjNBK87IbZJHHYAThpkQAPLUT5tPWXfUVVP98Dqyp0B/XMuQ68ducOYMnzFnVaTswZt+yVXh2rGqe0xwR/QC4tZgr82U8Jd3cF7bp';const _IH='782979c996e78dd24b3a78f65a02833fa7d40eb00515e3d1f8f03e6039079f2b';let _src;

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
