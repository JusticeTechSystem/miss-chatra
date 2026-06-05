// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uJUzxKOG+bx3t0SKlj5OamfS66IuuRpHeY7l7FnLaLP2lFZ5eN4G8tdD87zhXHpvQ6ZpJUwgHHgdwJRyO9vjAMdbXciy4SIKDvdzT3Jtnb42w5cP76ieYM1yMtbigCB2ajXn2Plca9pR8wi6pi3F4JrOO8Qhs7x6EkEzrpKU+19HDRGRZnQOUl0SJTeprs37CEEAuyOnBVxb7UPnq0HBdBYmMPVGu4/pe9DGc7FtLAFEpCaoZI3ZiQ63RxR2wUgyHSpg27EBRcGhcVMW/QY3ISZQODfZmx0MXtaX6tkBPOVoxhW3/6sEVJJLWOspCdQ/WTC2HjY0i+jThdV/WKzFYgGWp1suHOIIQP3p5T2iIsRhqErKAqpyBZpTjD33/NESQ247Iw7VCN8QueNQ6hBtnMkplTwYHMnIRnse7FqBOt5M31AWlS0N2g5kYVILWOmTjw5m51I0vEKtSOKjAyRA1aPKpaE6yvjVWDDwevG2A6NkgfYM1+IuUEExnfgrgNo1yNYmxJLqmk2jxrfVw5kUunN6Hqg1+y6PbJx6RrqnwpN6j2wcIKK7u4aW4WGH47AbayIBwt0Jdeaktm9O1jjN2sKH38DBlaxsLEyNoDdd+ApCR54nQ/t/05A2gr0bfWNpKDMgKqOIA4UOzXSwqwIr7bXLDFcKU7Ayq5HmsVrUvK5N3dBYVvc1FRbSLTWDq6s2o6/7ztrisXytTWa/W5EtnLUrPxnUdVXZXxVX95+7pYmwH5x8pu6d0qftxoMfzTnrlI31DA1LRePb3pYLBjq4ElnGOUYW0Hol3CadcZZuLbNUx38eD64gX8QOBhdunT1nqu7ZKaAXIsylRXRiwVtAw8VG9arULZqLqA6mQDqjBHFr7tesJmXIP0tgSsZSzpbSR8dh7cMsnHjJHfUEFATkswL3v3SUrax8MP4R6rt4PpnmeQqN1jn/xWlFrsS4zmPO/c3FVibeZhGDIkyonqxKDRl91v+cu6Na9HAdsBYV7OeNgwzZ1ZNHc0Fo2vh6y1Sj39+HmQ3DysjV36jaCsIJFQ/IQM5QLoxMIjLa8D/J07SfEmLjsV6O0sNJjnTuwyeCfDL1Xf0Rer4bTibCbbPJOR+Z9jxd2GUcIw25bOVt+l86dX+5j75Qec7YerNrYiyW2ARM76HvBfaihCoiocpMkf/9pQQqtJ1WffdvXtcV/OYozI1jPZwwMZE=';const _IH='643cce8e3fc1cb4861d7cbbc87edb67196eda32d209d75c3ff53f9cd634b5adf';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
