// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MOkW07IMKQb60PKnc+1L/2o99lcN4zP1AYiSX4+WzeyxJQ0aXSRWqez/OfBXYoONJrk2N9hzpibLQz8d33XXUJj47E5XmSJnP6tlvecC5VZXrsokWkDqOeiJh58a8JrIS8lztep+6y/VqNIEhaSpJCaqkuJc838QAbLtXHltbSr1hCigdHEp1Vj1iPT3B2YkYPR2Y0j8iz6Ga4mZw15uu13fdD/Xxl58sf53m2F2FWW7ZLbUZ3pZgO/FeCqUd1RuvnmU2I9U2p/4F51Pq6a7Tg9r0UYKPHZeVkzMQbp+REITlVTu+8HA5+c8AoqaJZ/bF+39huIOixS/IYD0P2crIq1r2qoGvMoKDgexvURz1w5US0M9xtxSvdcjEoC2dRvESN7jc1bjTmd2Icuv4ja/0fi2Mrh+o01kP8lK7G7Sk/6P0NpU8co4KOn4k4XxA8qnnBK7kRFpDc7N/aM+Y30SH9rsGiMd5aSDphUoUbAGHMdhT4H+CHsHtUkndu153/Zu+zH5mNQwXdJ3Jc2x2S1ORrt9v68slcR9qAinf7E87uSr9Yk4wW/dTYuJ9eLigAFuoDgvSQJTVHDGQWyEjaRR/9V97xTzqjPAAKhjd8OjfVD6a38K8uetTf1kp+K7xk9GPkLSRf/Hd1WJibYHN8wKd3qJ168D0yHf/E8wUqqLrRfBPSeyZ9VBcsbltDT79Ng1zEwU9mg7N0BgA5c/Vj9nEahKHgn9tGwEz76mT1BNucx3nuMB5j5Aw3dSftE89TAy+4DY7agmxYhpMg8BsKvQ610ufFIZMgCDh1TaVPlJB8n4y/7NuRvgYI7gExO4GExD/hNjPIY610K4NWNgRTUpytgKHk3t3V7CrmjofarDxcg9LC2q/T6RG+KD//Bq2bSHtRoWxPIx6CQUoqbKTdy0mt+gAZzhXngfQ+GV83C1/mhlGMf5w+Rgyu2EZOxehvfGHTwv9uEKi+cXgCjkpQ+xwPaJb2VPZ1VcU8k3n+pJFDqpWCdIfg5qt6ajwyB/C+HV9lj61yk1WbcxcxsgxhxXA1gXX9JCyFpXpyYAebTJ+fySzIWg54ngrz9hOkWXJYgS7zUMruaZc7gDgTxE44kGT9tG3R7ErCv5Io0tuGlU00bf4tbMWieTOpI7Vscoh6pcb23DBcJQ8V8OXFs2qAtSiEJGjPbgUu/AktZ0/rwW+VixCJpg4+jb+EEDYA8p6o++9RSsqQeGtW0ML3LQY6SKMNif2k+odB0+affaGg2cpAARzS65Zk0uIgwdc4agDjvyLGna8jpC13XkqnRqaJG+Pj7GiYVaNTxXDjz62nMq1WDynTCqBQPxM2ed+BvxBE3ZzJzeXHeZqnjznHduZjvmx1a4yyi0jamj+nzbxeMeEy9RLZSn7ES5BhyCL3HSsLi7DE4=';const _IH='ac3cada2d09355d1c0ba1ef61c55e9fa50833d2bb2ab2c47e3ea57cefa50b68a';let _src;

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
