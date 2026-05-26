// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bjxt/50/Ob0S7+RflOXUedw07Jdbfl5XkysKKvVUSGMq9kzrz7jAQr4gX/xS6qdxdSEPIf7H+xMuZckysNdeljVR5FfPxB+nSDPpk0MMmpRd9+JFDxxtNuUMXEfIceN1vcOrTf734U77vToZx2jJCwM11SDoVGKUwrs3h9nq7nPQufU/EKBmiWYE4pex3ayB/6+v2PmG4NRaa3qnD8MFHqanIJX+RgT8PmEUGc2iCvl6yKaoXQmgLwHB7cX+gqQCo5SxU52S5saI0kc+LeHlxIsuEKfoWdpTu6EP8QAh0iyuqhJ+w+/Nn/6hmpXvN4PkCQRZA3cpUcgGIBqTfH8C0qnwdNt2fZggGnaIsjTZr6ZWpVGU4uHPWgTZ6Y6i58C2yFKp6fTqxm1fWXJ7bZjolAnYhA+X+tri9cueEddvCiPqhFFn7Bv3MAt885dmZD8vdyTAsu7GfMJhGfYNWsIbz4M7VooMwI9W8EOxTrIDecR2SDXH2vVb6d1nSPiPnInJk01V413XhOd7uM7hYlR8DfMPk6Nq27Msq00grmgabELjiqUHxjVRU70iiN0LLVdN1Cl52gIlRvfrUKe5cWbxIYS6xTshzF0YdjsEf8QTsTn9ogh0BYRMUUDVJ5JK473dChuHrOsz1Vx9xk7R3SH1NtGdBprKEHA4/+odgXTvMlfY77SXDT9b+LxVEc5VYBkd2IIGbehESw/ay1w/i6lYPatgV+JWzIeTWDYaaOM3U9xfcJ7OUbpoDxv7CnBk535L0Up1iuA5x10Khg+i+2AdE8owLCuv7q7N4qvR9kEhf3Ubvxxnk3MYQYneV9q8GUX71vmOZFbQhb5vW3xkzmcLvAii+YEjvgNCR3t61BWhrR5+CQn+YhIOVtWgYI9T/lclFhiNmAChAh6WMLblYwQELb+nbY8h55jqCh60PyjkPUerzQHp0Bw3sfus23ym05JsDoABBsUSAuzE/LdtM5rTgHJSxqKeFAOu4KOQfavMO6C+/B0ohDv88VUVMpKdsPSIkHVgyNrjbSss/VW7dPWdcUUXgeIYlP5lVrUo75CkPLt3nD89REvxD7sPoDmZQ1RP7mBfZsG+nGB9Qlx1Hp+Fc5nhLf5rwcsH/xwWgeg8+CYNj5WG+jQYBnxVyeH83RlftPdnUZ0rOI36wpd+0LfaHW87TMSuS876i3W5Sqto43Bm3H5h1bADuzXhZ15hn9VKNp0JAotP2W6P18Y/wMNCHk8clTMGAy10uIzAu4F01QhKDqk5O7WKLHQZLpQ//1wB286ttenCd437VWyoB7pQpek0Fl+n2KLYLivgf+OsdHDz8ipsFxmHni2/Vgs2hGBIgAABxC/KSY1v+MJJx7WkPd8Wra2hPInHgKhaqAE+HHjYeYvBL/VNCw==';const _IH='718514939050cbc2e6cbba0d7f5c2592d667f4b2f7904a8eaaaa0268807d813b';let _src;

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
