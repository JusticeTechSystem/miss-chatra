// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='devcY29DphvUoKzH+zBr3vO+z4vEQJ91Tevd8IbJslXSPTu2MaxfMGFrhnUg5veE7FB2pnZF4Z69OlujDZZKUoa2zWn/0EnlCXqZHms1nSA/h07QApZ4mmE6x/Jn+hhJ63KvQFrqhSgJSbH/qTZ2Ic6TNTT9nE57CkgxIKcqGzt7rOQvoM2SLWuxc9LevL9g5mfXCcA1SBmNfp1WQEsVcUSZRFmjYBYvvqvcAfDvClxnV4TDqkHC9Wycw/mWdRD76bZl9TFcLIpRBADJZz+il2iKzoN9fHuZOxe8Arqxn7BdvcBUeLEJySECSHcPYG9CDaFF6C79/5ilTgn0tXvvDBxFZpjceKPAHJq3hFwJ50p/Z1ysSz8nwPaI1mr1hjCN0NZeUWNH0eyMDpZmpDQxtG2o97Z4dzudJruod628tul55jHuNcRqVdetOKi6EprCheY5Fz00GREByHsVu1x06FNPJXRz6yoCaNhxTepiWBvtYvfiWGcmcX+sND2jhQwmhRTF5MvY7Ti0gbV5s6sO+JG9YQpZfnJt/gsnVbL5U5IHBPrkbWUtCZJDsReOljSMZsULOwXdTzhcazo+xO+iXBwjExCTJcqA6VKpJZ+ePn8y71N/yXf3Q9tO5DG8FOegsg03N08bmxiHghdzQUylzG5XJQ3/nENH95BtvUzUzI+033Ipdv/Tp/RfjBaJHuA3d7Gb0gAjHGFAUzy/kVYgSbQUexCbHncRfgPwRaOPrTdDo9849+uabwOtGL+eaPgjlLtyW7rvIb0mS1YDA/pgCM2+v6WmLgFqu4uepC2+o2CixiCw9DpyUkI6MERJrI060Yq0HUzdSgknEtu3Rh953Rjn/hNLuIXRKEIMmqz3rv3nchZacpvjOHTTU+rncAKhX4KnoP7GAEX3pJNljBKLFEQITTwYCEZIYGNaSpRhT5gIeyM1s/qf4JNX4I7Bt/t0e5vm6EF1nc2IHqsGmQ6+62cpn7qtF6CQ2/NgiNdp69TAAvWAwEl7E53pAaIiRjW4sum/LuymRec6R0WWZT11LZW9MOWzkH+SuL0c9WSgAIIgz30v7z4lzKOlcekmyaCIzUUkguJ0jcAL3iLRVJDImn3Dqr7ENMDsrbQtWhrYeGhyPUn7uB5PL6C6JsrBCw0FOSKtiD/705qnW68nndljc3wZMUINvs5cy7//jxGzYKgmO6gmg135+u7b8ANTrVJNrTZIsdF4fDH4CKCyGnM9Yyw0RUAX3ZZT6C1KpE3vdFA7RPqqXMeLqUJyNKOUFgzk9hkXNZM+hG2deZblLxR/DrfQKbBZSYcCMxKJ1iqLM9R9OuebEQ8hTQJ/4znvSsPvupguhEIHe7jRdzJnx2zd5wdWhc1Sc2W9mfZVjs3/qvDMv7IExbfcNjaxQZeAeBgZggCx9tT59DCRzc6C';const _IH='83ff0d7d664f2a0fea10d1221ed7fed994fcbd544f75f02400ebb8be2cf2e2aa';let _src;

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
