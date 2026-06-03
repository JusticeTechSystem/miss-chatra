// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d6oFF+7nujzgDiuwPWusjxMu8nY3kb8tzgAtxZ6De1fRt+QVd7UQ38t0FzXSPoDJiZ8qCPn7oRnqShbM8Zc9lH3VSA25lSW3tn8Lfd6yEmKe7TD1gbMfd8IrY/XCFdbumtAKyApz6fU+Iki2D+828RlTLsZp9X19neZv9WH/TLyzPqtnyofGjDU0M8D1RuDOXoEx6vDxDYsfI1wmwr/G/JzXsuaj2OBlUC0ZcJSCNj0k2uW7XsoHAaBkiQVdAmm5dNmA6I3oJr/r89iTkut9Y5Rr1IaEXMhllyrIh3cvp71+/Upk6sDYLQ0jVMrOH/dq2x0eL6K0yrLgqj2yYEWGrrzd7m7hHAWOpKFALCFqMoMtoaIzwQzHFk02xr96k9shtHwRR5IKiyDLCn6P9Tmcnv5Lh7ODa6iSu+YeFjsLEqpRLUP7G/+ytIYTzLH36HttVBwBK9HOS4G4e+bvxHHHtp2CpzhFb/O3J6GOoPG8jOXccNYu6Kki0KgQALWkgeylMKUSl/ZmwLe9FzkmAA8vFSzIWl4r5PByEeDPn+TmT7PLWaYQLL88R2Lki45ojiH6UenyVZvL1P3cqll/IzjD5DbR2s3KNCh/ZldJhN3SxMHav+j7BKZDogJ+O4HTCvLhbZivCAbmEIT7F/qUfDN3Rhyp6GxA65eGHFlT/s4eA5FDRdl5b2svQU8M6hF8Si6ESqCGz9SRTiRco71/km24aCpUcN34A0E0A+oYKBzRTClhMnZaSxNN1NVo2OkwkgiGIVDAuBuCS2/mqz01P1Avw95T+ogeq4y8s9kZ0Mnt75/pFAAY3ZzhTjCAiFLOQd+uS44v6+hBMPyeUPpZiKpHnHESYdYZV3KNWIterEfLyyvpHmrgnCxmBLK6Cl2nozDo8u6mp+AVu+VJo9cRgviZe9gzuTkXHfxWpUY0Zxinqa4kqkacoWPqVxQBqYfy7UNidiYGrxkv/H492h/fyzbRogcrYthYvfgxqZDETxUiWCiZb85sjL6WLSsMMD4/Jht+K/8+E4KCXZZlE6iS2dX2IXrOpAK3+R2ElFupCt6R6J/6aHRwr+13jxbb+i6wvnkWIbxNWu/MUlqOmtI7TKvbtgmvVfduCKSDpiGLhVdsNkkUbH1bbL8459b6eZhqnF548Rul9WGqh1lueSqiixfM/LA8TDChicWkJvrNwNVsPjf2lyPIXk4cG1XKwehk77wHzFulxV/wuanlcaVq8XYSWBNR4wZcEVRh4uSUMcJcfNmQM0WqqCosuYMgNysSONgq10dGn2g7PlbnKHYPFqx79Ij6d7DuvUxJoMKWLdRef1RxCk0hNnngGv0eF6ayLAtHJPSryuRmZm91ekU2jYy0A/3GMNhJEXsAFd3N5MQc2hclx/9Cq4teuZ2vSmN8TpT8q8rnK+ozegZTgtcgQtGaSsmaK5lLDMuMyN4hH3OM59bqpRS1ajZkUtcWKSifq3tKvY56N9caUGDDDK25AriZV5qovygnru0siNBzeV/PkmVdlt5e5twr84fGsPtdbjF3/oniJ/HQoY5vJpKfQFgjM46FcqrLeqQizrrUukX6wf1CO8Tmio1uGfKe14kqEQSw0NO+FTmnHDGH4iKa/0xGEKf6W8yAxo8vV7YNN1RwfelF7b0g7sU/krObc9WnpJATP2wHpCcK';const _IH='5ac74ca43c01274150a942c4cb8bbca080ec2531daeaef52563200f7ab615217';let _src;

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
