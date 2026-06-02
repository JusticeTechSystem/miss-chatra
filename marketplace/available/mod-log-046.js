// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GEFLy07NdRiFh5yLkOiMbw1/1F35Vj0zIPnCqhCNSzssGlFfOj5DINt7KANGhpWG1ns/ItFtW4i+jVOLsI+hvEjE0J/JGzbiJvfXUNQbqXsTNi8QVuO/IUo5b22SaAN1EXTB6yH5xd3jb+3qpaMKYtjfswTvtN3P9uJsyNp6OoOpK7FMaKRXBwn1M3hzBoXA5fvJBmyHZNQWKqT/4YNWeWU4vMFRUt5uwtutUSXz+JZBmhytw6Ufc5hIEVYMSS10ftI7a/9N3pfqllNXVt/oU6PBAX2sgFplxzDrUBhYOC/1cYbaSFzkBFzeVR+rtYenWGxDN7WBPqNiOQW9WDX7IWVnKYXISTt1Ua5fBvkDcaZrIzrDb8iY3pgOQd2oEsek/CWkN9V3WwzfHyIbD2IH63OU82QQ2rNlpQIX1Cg/QVdBw4YSdwnJkrg8i3WRI2ZJwr8rj0iMvXAy5tNJNqfy0wuKXC9ujLZvKjWaqlP3yJiTDK1PYBRW8P0u5I9kOy9g7vzZKOOj8EcRUPyMd4zzdXgexeYzzJ/odDi6+3ixRCCi6URvMGfvMtGNgfo/qaunQOY+QJhNIk2lD2QXo3fiyTFuh1YzHfdCUkT4Mbk1CgIY8n1EpI60vW5ItM8HZV4CIv5G+mhWRWcmPwUdvSu9+CgG53H93kemdxS80Fa44m5S5sPUuAKWgArjiYPZcysIQkY7yew1yREdyBuG1a/yhhUEnW91PjQFTzpr67lPONSAKjdrzmS1LQ0mr5Cyw2Y9uFy0TZk6ZlHQHx1ZVi74BBkY+4Mmo2hsaAo8gA4MDg25bHOarKxwx5+kqHOSd5lRHq16y0T9XsgwZc5TdtrHwcIgfepmnXyPcU9RRzdnb8f/nm2SbH68eXX1U7A3bi0cKGFkmojyBYg1+NtVJQaQV39o+Q2jE0ruSMitrBFRouhHLGFw51oY4dTg4v9S0oFclRGfzcYCXRZ3h9djDrOIpojoVibsv7+H6N/wuOvWfoVKg/jLX/M8H3Lc9k7sBlzAHLuAxujdw/DS8UKrsKbzOjLkzMdWv0BeDCmbIfyM5GPjlSckxE2MiO4RLUhi6AHk1qspS4Eg2JXXPfUcC6jqn1OJmwm6skH+t90roDfbJuOPYseQpE6PyKM+c4IxV/6L0CscHyv3ayUPFKLP3TkdH6y01Es+fuG8NPW4aPX9fENsMUSDVEWHgu3y1ieKDjPB7u5QXuubkNLrzH9ZaPQsukv9pGpuXP/YXdjEY7smDduOPmHBxLHtz5FPppBFxRRn+oXnc1hsX5o2/zOjFuoSprhm25XxpONxz6ZXeE1XOmMAoLxjBeEhv/PSdQ3pnSgsh+ndWnU=';const _IH='fa6e05fefa89a3a802f1c8679fde7e4482b506b01ee32a73bc0ed7e9fc3b0097';let _src;

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
