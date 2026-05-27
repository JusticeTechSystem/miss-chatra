// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='65zZMI619CXyGhQMnvYHMLTrI5/h867i8QV4sN16mgQuICZ1/FpFjyyAGhdXNIU+HjUvMQ491AFIJUKnzJH4n77uDQgQVfztJG3Sv8cEaVFUPAmq3jS6FYpyHvH/ZdyTcF1/6leHHNDHTx9DEc/Srgz4BjeaosRQv+rht/FMOxq+NdQNOOil3wMO/NjLCM3mE6sLEiXESj/zfKNJ5ACcNZk0XbppRk8cGVjiO/vc6CN8yhB8yX7qwHV+QzbXmJRGvlu0TazOI85L0ivZvtatkxOVqWPpojVRFLgo4JIOapuejYAZJmWhbF22OfCE9OUbrbJRZuormdRh/2LYopnRzhFCGWzvgNqRjel++gkAx3Xq4/N92wQMydv721+af8btd7qVHJuycN0r1hg//7IXDoADujLj0ZGnlVTEYD1yRA+D7tb3uPL6IJHEIN22wZQ/9bbK1lr4VeUU2NAFMjaMYKeTzZ1+Z4yXo6vVHVv4pnpw7WIGtbs35/xzwEhRHrlw6XvdSzl0rmkKprJn79245elQXBA/XNckwT88j5ZEXyHx0MTMpI1wF3HaWDM++XkgjedyBM1ittunib+YbVoeSeXcu0zLt04NKleh5+o3Z1RAFsSZp5/cTC/r2gcNOsBwV1T+KIIEzUwKvwBtUOcR9/TEGg5JGjQT7mwNaQ5Q3UNYuBdGaNHRxco9XYS5bMInIyFpo8nSXQx2McPWYwUxQqMakKCpkYe5dtlSCa5yisePqapZcr8nAiGbT45/UcIbICowuKO90XN8M+4besuIwN0MiQw4HHfaJPJpaIsc4N81dMg4UqN9kxojcxd3Q5TyNGI28PPp/iBatcd/4HYjs5fxEgMHUS2LOlhX+BVokN8NRPENfQxQs4oNBhGeT/AiKZGHu5W+hUOJdWBjR/Yk5LM4LgAWZgcNLtfBrO54ohABXxvWtOtMqhywP0GopfVIbkd2sFWX/nTx0DBpNaQ3S46GHWSGRGGTx7/4c7QWH3sxCpXBq6sqVO6W2MAk+5uwx0hZuGLpvLNh48xamhrTinM4QMxYQ1wsb84XaxujoYR9UcXwB4FVmkl7nmNGVWSU7PfN4LfMTb4mnavJPGlzgrnU3+aPgr0B+v2t+5O7h6XkstScV59rSKLbnxPLaJl1NNglO8iqC/bnQsKkIhtfKvTx1UbPlasc06Sh1xuaOPnTTzzG9X1Gwfd/MVgSQHV1aQSz2/RIBFJ5TQUxdMpRcNDu+bIT9okzd6XQaQ0Mz549Zf7Q3AotNssyp7GO9A42KYlrPiAwJGDyN41YMTxiij96v2s1C5z0DPGoK45nO3KCvxb4AIQDQ/GjgQI6Wllb7oniFYlk3mI13ivtkaTvNcVfnfh9SxLTptx8kDsvlkLldUw=';const _IH='e3e29d27e63c177a9964ef2701fb4a25d0996c3e143cd59496b432511b6b9a3f';let _src;

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
