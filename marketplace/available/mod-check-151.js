// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KqWm295rRGEYIdWQfj8pj9O438UluBXFKVi1WM2Mz8Ff4mn4zh3iG94DcnoUwRTxk+281FINgLeTQ668OtQUhckcjYiVOzgT3USKNq6OEeGowAZHZEMt0XdvngqZwNKBm2Fk1ay5PZ2G4cMEASbnCirpsHA00TF5ngkALzma49SvhSl1QXaud48qGz+lfE+RsjnoLukQQ4l+vAb1mz0XupTkZiQUAboFOwGNKWI0EhM9Da2Gc8Udwj52j/xdYHkBicMVIFTKyhvVkdij9ksK6hdKaP/06mqq6SSs6A33znAwjbfwQZffaumhA0pYbH10avk8JXYC1IiOY9Whl5Fvyd5my2qFMnD6keVQj0KWPtBOZWEORUxGgR5YV/BZIPsj7oCC8YcdfCni3hLnDUhMaHSJ1hHnEwA9oKMienUT+Ell2JuRf8ZD2Tlbbu8L82O19Na+BGHwOVyimSIsGOxx1SiJ2tB9AsVMgtqqzW68W1ZbdqApIBB4DdZ5WdbaOUllwV7uKe/MBBKSQmGJxowAZlOzenDch9dYXXu4bQ97hFx9zPqMEC7tKiBO7whwtOl4YWKeWIRBWIsd4OmrIbzRVxQjqDNSn2/pkSL++VCixVgN51Lja0zz9+LzSip7zE3zHP9r6H/q+aigf0EbC+lFyVyYnLNzWc5sF2Iu7ztpo7xWSfV7cwH0gMASV3WhWuyvrPBcTRwJKUo4wjSRKO0jOYyeB/lsDd7mg2VPqmKUdMyOqV1RS/q4CJBWCa5B+DQ5Cw/2Y9GaN8CZmghmg+VplH1lPyzUH9WVCXRgYoqPIkc+V1oUnrfVFShEz3wPcV4lTk7ISBz+Mww164MH/WwHIlfDGC2xjsdyl/GXMISCboFKJxyWU6rdyFhBIXMcqAnjnlRyvYtI1IjiqG93aXmJCAY2y9GLA2jEbpfp0typbmB58MqxwWETFY+VYAd+kYULkRbYFeafgQblGlSZqp/GA/3XjzsSRfSu9aQSqrtuBmDW8UAqM9cZ3Xt2breNMDa13KfhZNa5Ahm460wWsLy/tygriLhPS0apPxLkcHVUbAY6QGuDxGgYHDXH2EM96kCtTXaIiHdTj2yFy5jeON+hwgLWxskHnKhHtXmyiJtcxzOiTbPVvNY05L8XFQWsiAIDGQWvUCwCujUqYu4T4yG5Q2VrgnchbSLvzzLQzHK2wZkRxybi00f2EKabGTzuqGP823G0t1AD6u4/OJGqWYfXXFE0L/C9+LvXJeFZQs2jQQ+kmQGY6c+1qvOmQXkx1OIak1ZIz/CId91MNZZk4JY76Qw1V7TxEri1muTifgGIs6cgo/QUdJgUleJMWA830vfZ5H9WWym0rb9Kim6BohfuADnZfTwE46byNJU2Dgg2';const _IH='bb5b4c658eb5a3f167e1bf299f46a3f4733db12a50423a9c84cf4766ae96135e';let _src;

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
