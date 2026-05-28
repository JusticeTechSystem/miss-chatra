// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cbauWMgN9i0Zd6q0H6iaU9PydaOfgntxqY3E119wQuGUVAHvz0jJLTewltto0kK18vr9/wghaKAVLLsGtRWL7vah+QMR9DnJWxX42kfAsoRo303rCKJF0J1ueLBe/DR4Ewf2lWZ6qzkyILPtTqkVG4H0yCzBcriSKMlP6GVdDLDzs5I3JF5B8CmvnXKDC4ukyaudbHOmuIRG0R5/fpgaMguVYVVykZwdWqrGmYVeCbY6908+C36xETbrw6bJLeutriY8+293Im01z23gXsCjETFld+bxJ5ri/pUKVoYXOHSgR4k2lTIOX6kE0GWS2pdF9NyAEui0co0Q8KlFgKfz8CF7GiLhfQxVcFZX8zDe/9EfPLuxvr5DDHA+DIR8A7cV3nF0dk+Ur/OByQJpmDwkaLnJUlucJTfClg+x/nNfxtex1hbhOgguUl+3ANKIJejLYucu1AocRwCaMPnz6bSCRYd2V1wXGnbF8kREzlGedISFlDdl1AGPx7zwRF64xfjeuLPEYvaL+U0LcF3v53ohP0R/maYPaZ0GUpt6cAaRec8iHFWqBu+G8+mVzoB5YUre7c1hRofEjb7vXFsTvEc4VMi/BRfKvTe9FOzyuMeMs47tmntd1fMhBJCk/7Kq5KY8Wnq3f89gV6EJc6o2B7NW2E8N5ulHSkHQ3TAVuxvuAodDZufDfPUr1NEoD2ng6JjSFRLUmUbvXjG1Pkt98G5nggcl6xt5Gh/pQcw7LR3Z+yZthdgWs3cOjzQ2z5nOn/VuYO72CED7DaQgKSDFMhMAPdZg2zNOOrHbZFsCqBcLTTw+y2GvgA7Ie8XNdms12Hc2d8jCunEloSzfCJcNhtHEpyBSjdIHq6BebwGj5Jza5jL4P6q4ijWesRWDO/sOzNFdDzoxgy0MNtBtODaHE+onxDuGEuk0NSLGmqnIFyzLSzRhPtr9NiYPcjRPgWjKFVj4LN0fhMMCqM+n3WGLUcMQqE5PfVEoimhOzTzvL73AR2GZAObD+2WVuQK5bkhCa26ZkaAKUQz5Vf3wQTdWc+FlLT7U9XhODjqDW3V/7zZKT9ni/7xPF3G0zTXUg92mB/pp2Ukj1jIOA2yjD99RVDAoZYyIFJtbe7sEIsKyswOiZRCoCi7ezV2CHNs8nGNeJGL1cjseboF908113Bfyrole3NRVGdtJlTmyIrRuWlyCb0scUGPreKk7GMlmwTI7XQjj/1YFUHbKvPJdkkevxoLWizHjQ02Ms7PaDpegDqCA6IKmML6A17rC8ksH9V9+c2fWG7wLagaD69e1D0azGX/UzbH+6eQ7kh+DKofdGM6KtQtgOt21t+wd6xwC/zAqIYe7UB1TADwNHPVbVITNmUJ+D6whGhH0jGi5TU8jTrjebf8LRsuYhpcwvA==';const _IH='28858d6be83b69d7c84348f295aea3374eaa5f8e636d24851840855941a3044e';let _src;

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
