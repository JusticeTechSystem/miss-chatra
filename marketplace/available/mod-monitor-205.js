// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BC08eit3oRjrpHQkW+hQTx+b0DeZX8FD/u4Qr+yCWHKhkuPEobU355W0F+S1XTG8SgIifLkuutggLnCHw8QdGpPHncPb5dLtKpjO1StuMkxNxZehBiBc1Ou6mgg5Vsdz2NU5dIYeJigMFkE7USZ2MsZlPcLxJFAbny700AgidX3rfqmmLAvy6qNFVveddWT88WVXk3LLoVeJphSc43PO81mBKqiLJbvl8bSglhdBM1kiE2amlx5XTesEyE0zZ9NueKhim2vXbnNGQZLGmn4oH+stGMO82LWrAPfgivJC56Ax0PHLFxGJ8opc9jrA6Y9Wkw7wGUWz8RqeQkGf1jhOl2OFWVgW1BMyQTT8enK/++0jnxA7sumF6vwPnkh6ZJPL7wn7/SVFe+Bf55Z/v35lWRBOczfXKAdEnpM6QyIyUxc+jRJyl9owg9x6vy33FV+1JuBr69oDaaWevtvxYpiqCNls+7jv3wZrvjGUqJNYe/khi46hHR1b0VILjj9TINadwjSME2ZMF1rYD38Y4l4j8Uu1Iy/xSw5hAU+COPdOdDM/061I7jCllbOaYAUtsFsFCgJcFH3SQBpLK1TtztjpzGhkIZBDlN7NXajTo5uwrzZx+m1EtfYES97VQN6y2CdKCd+wRtHnY74rU6yB+OAOMYc+WhH193i4Iusoj3BDGRnMUfg3tXXkuQcpgz81eUjPHgBYEruSTOItQl2gmk9jEhu5pNUr6DSn4GO9HiM4YqJ4yIUMGKncnth057s65DlHyukqVKSDpA1VtR1mJeFtCv5g9H7uO/qe8FFng5FkGFpWLkUlArexpRtZ55bMCqwzRRsybZVWU2Vs2oVBHvsGVfTUrzMk+C5qCnsvdxnYOgs33V42cn6mrrgXrfi6bIisi7G59T3MjF9HxkhHjHbyEnPJj78DSFka+tpntIoYjYhXZeuJviQwdztdO7C99WF5om9uw+7GhNHdI27HdhmZeQ/r/b751UEMuxrXSmE3ibcONNjkXQQdVU0L/K12XPvCYPOoZo17K3DyWJFsmflccVMR9POVqVU8rQmj5q8WtCVqivDrJ7Jf4akmxd9J1NyL/0AVmdrocq/hiFhxYhfDVquFkXzSKLjW9E1juCTiVghYSpLiFIGDRH1Ap865PQ4X6Q2V8DodVtXpqBWQhv3+Ww6hnsgZbzLgFjvEdbG+54yRfPIMt0F+IcGL4sYMOJUgVTm21kzjj75zIMIKVu2KXrjlQw9vxH5IZKnOjMGL46jzS3idhXHSj21tml37y2m6mk0yVFvPEqgad8cm6MrlV4UGm66ifGn3oLEO8WVfj3ak0fdxxxBAecwqCXE+YgpCe6vIfrcmxB3iRKnpT7TE8aD8Yp/EZqv7C8U3/YKH2VNHo/DALH9LD6HrGqHneGayDDY=';const _IH='0c2e1f3c3ab9d30a56e0748726325d708f98a298611f798a14b633c38305b4c2';let _src;

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
