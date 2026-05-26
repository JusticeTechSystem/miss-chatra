// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jzFsafOafTopmJuZ2kTjeYfCkVt00diyjATsna0cGdlMyAkKltY7AIeGH9BpcNZCbyKgAYd1e6C6T03FC4wm0xbqEcFh2SD6RLQLB19PTBOzykDcrUzT6iUz3V71pw+xTuJnOBydMlYFDObKEGdhwzuwNQ+gEzvglvzhq7+G+VRr4sSoJWHAfHrxZTLSDkXAef/NhCW1bowgK7vMvZogT75ggyz45g3FgQ57jmcTUlQU9AX36wkcFVVX70CQm0q4mULrehg0ao/D1cqvW5XdDX0VnNeN2YhTxSH5+eLmianpPoyWHLu5inK16A2nQKdr1+Tn7bQAhFLBIIywTaErgQguwqsDdf/5CsBsAbrDQlMR5w8MDFRR6iriyUxHJdyyY9mn+JK4bKR2y9WbMk4Bf9sBqiDiGJviK100+oTChg1VrYECN0ONIz9DRLq87+LsX3uOnyaYT2tjBwb8SPpFLY1be3lwS1xIzGzIXvK6GGLo4ac2q/vafPzXMfhwIVT/8Rt/ficBsBgzt365+JZJcJB71176DlNDgQ8BolDaE8wZlIrP9LYpV4WPPn54pqZbzG/Ol6OrkKfiYgO4pSF6I8ljaynhgJmZmz4EoET3vDuXYLj61W/xCVszzNs6Ip/bPklOTLFSc6SYzqDI/fc+jCeFlXp3BOQmZ7527FkKNLvy1HMpZDluBlakv6N10dge4xSmPOnJqHY4OO1oXRtRWN8jivS5GvqYY8rRncgkJHLaO3EZpHGkQtKi1dwpNctW85hYN1AQWt6rejtT/36px6pCGxrv+w31sN3UX3a82S/BZm3YGdvUUyl6mcQCQ8VM/1cde4vsk3dqmxO2ItRA1wBQBOKvyVkIOp0g6NDkdsPncf1Wauf5t6tWjG90CFdWlb+hN9bg3+t8EPWnRbwDbBxY7TcPeNXfNPNR7rplp8X54LXkDrKmdbsdElESNWINwy6PBwCe1UvIWhFkrwrewg1thCXRQdVRNU3Ary6QWHR+Qy8c2I+p6MOf2Vz6MKLGyYOE/VP1YFS+2cFDN15FTPcgdvw/jKcsrpDoYJKl1rwsjbRBtZeaR6CV/13mmbfIVoERmd9qBQyQm+Gmm92VFoxp3m0L2K6j1fSMqwzDYuu+Vy3+sgizvzUS5LWPkV7Nrs9nKF9g5Iwa6+NpMHgRzmcjHirfaqSX7NVh6XlArVQQ0aQSY6focuQAGbmh2du2Qg==';const _IH='0e262cbf704e3c2b159d9d161cb2ed33b113f675ea9425fb35bafd66b4c9ec23';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
