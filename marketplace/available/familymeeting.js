// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HrWsd7OckcSmEKFI1+IZ10iOOIjlbJGQI284HKlM1IRvKb025v8eZTYlxCBh9bn0GYRb/SSc4hoxxsu3IwF9dbM3XocvOmsRVo3wMRIb43JMsASG4mkzGwwvsql9MGsvSlgNurcT7cekGUpIdsbOXv474ThXZEG2Bv0k3cLc+WQgTnQOrnfRdIGt0symvUYTx53al7+DPR7s/qx9K49ZwhbKAgTJdSNLp195n+wMxuVXXN/hmcNYwOIsWI2wVJF1gLxWMqDEuFT5D5dEhRFDjo9vPNfy8qcgN+GPW5sj+HkELYt1/1qrrp/wjCsY7TL9wVTEcZB41GIkKdn5NKpB58BEtoiA6Yo7LEB7qhzXuVbdrikmSHhV5roP38hl6qpcJa+yWM43n2JhF/sARBGe01/kUOKjoXh2IcfWAnF2oZeoNh7/24MwNS2xbOCsQzGU6WLE/uoijtHT9RsNYJBeZMr1d2n4ROIL0DTRVEVyK9R3qICZsXjz84GypPT0bFXE19674/24LmzJBhA2BjmqaVzguDw3Lb9CTQTgC2t+SEtJjzQVZmkTnpkMiiozJqTygMFMRUOL9mAfJq/16uMQKdgBRT3MTm3zWarimpV6qZNEmCI8eMFGHMmuKpHsBqz1zWpio9DbUC4f3kCf+2Qnx9qPNIex3jptVgDx9CcVezjbE6q3frwu0My4TQfcGaFXCd8DNWvmvh1YioV9PBFffKU3z3QnVu6aSV4i9UwX2GKws6WafING9hUhxpGKxhzMMlBe4W5cG0gAPgwx7mfb7xlMx804JbpU6A6r9i0oRGqo4MJcTzu9WsEGaDW1cxH71BSlnzZiCYgzhAkMtFesJSsNhEHpY/Zsp94gnJZfOXGNhgpbi4RNDeEiGNgO9bXSXeXm/AKSTiucxGjvSu7EI3OoW+igJ9KjcRy6x0f0KK+2/5mRII0yf8b+z8LBbndAsYTZ5ByQsCUcH4+DyZYvZaoQQcUT3EcedfGVDIJGHXUg2Smz8w9JU7C/pXmqgpOJIKtJjzr/glOVk/VPuC+d9iLMA39xKkBp3YON/FC6jSFAiFU5w8kxDVGuqmSLaRmsCscR8HocmFozxui2SvyugxhsaBmhe/DLTpup0K+dw1vOe1eafUCAYMjKiKp5XeahPJmpncdyeDNvne06PDP6zT+dO7Xqd5jHNpfJmRmRuBvt7vWvrRPQf5Vn3g+FwyydNlVRCrrrk9LyAA==';const _IH='7c9262899f208590fa9e2ab128b3cc10bc4936e648f89152ffcd8a28c8bf2dbf';let _src;

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
