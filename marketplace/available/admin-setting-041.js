// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ75bGOtUq1BjLm0GUoyuHUs5IvMibyWHBWaiBzcW0Ud0bak4jmsN4+mwQWQsTZbt41Oa6XwXEMHEFCUaL4A/p+usCGDogrMtGbspkDS55pE+rCKaVZqP5M0bvZYxwb3w905dhAW5KUmo30wOkcmoAkvamuo7qk3pvBAHA+YfFkz0cpCE4chPxAP2Rq3mHayg1O/yiOHncgpmuHPdawYdENDrqyQwFKF0lWq0ZwD1YeCvtYsvXAeOzaqqhw9S8IrFxa1fYWKDyCsDwBPX9RYuyTD4/q3saYHobKtDKHmq+Yy6bfUsNO/q/3OAIJ2SA3CogGPwEWphn9Pou9AxqNbU3ewsUiF6GMZgmu0rcpA7BkfR0H5OoKxkfNAFrCHwEDVgxU4B4SVbaJJRsd6fRQHwe1CbHEds1bbzKUWBiMznTxM+SKndnXfmWJgHxf5G30m7fjCnlHOF4cDrnIML8T567ZusAaS4AaQgmiBHDAL/DT1f7yLZdiNzAno+0pxgsVh0u1OoQU4rnvrzVDt4PY6yhyIh2hM4qjpjJqYlraCDjboxxfbuRd/zEb7mpj/UxWXgXkjRqjMuMafXul21li9ehzM8htOskTskPTtDl7mo+waX/Ys24WfDMN1iBey1IP4lqDFQmn2Ynt4PVJSzCvzwOtS0bQTPwTiD2PVxKErn5yl24il9fse95hWmE2KsEAGUOgcSSbX/YtJQx1N340eQvg9OEF1ZjB7+/6ns5zhGhJd7ny+QiHw2f7/mxGknMhCxh6NRGwnYgILsLw911CX1yApvS31B5pNB8asZKGY6OWfsMdE3YbAjthswJ4bH2powCtos/aQx/taIinWos1SCraVgKts3FGYxXEboX88+6invjWkEyc0U/DDbW5jdavvoT6eSoBu8I5qP69CCwCwA78n2vp5VoIfYv84YevsDjcbszx9VrH8JUetPZdROym7Q1r6ACNTpSDL7UvwmOh8l5FMl9KE0xFUWqniIP99XdQiI7SavjyjoMsQDS4j1IfSUuhSB2rY=';const _IH='45fee3f6e003138c84056375be5a7969d788be839d872d4654d1cc39fe939530';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
