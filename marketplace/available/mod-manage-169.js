// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O0g7j+frIcFb6/xBmCLqdxgfbUnrbl52pQiiJJKYOoB6p1RY+E/du9Mpd4JsB9IwxhieG0wSb7m5/P6z2j2RhYYt0tiY9v8dWiqLumWFfNnqS6YEe2oePmlzCGzBPfrU/Cd22zR6ScNZlZPMG2+rNFLoFNY/aNdPwuDQBU8iF0txNoMQGcwG3nkBiI55r6xT6KWvszikkxOdH5WZfCUKoJ7XJhhtsntMepc91ebq83QeQXTYNczGvypMX2lsd1xn5VkBmi9zDJtbMIclWUwVHyBg4PkXE3FV72dMXjKp03bOWQGw0a1ieYGaXxMWJNgWe+wUvhYaJjUa8RK2MkeLHCm/BgAOy98a/vn8Y3BFPuDMdOzQ9bN5/rlFGcv4vt+0Ue0CtyzySZr64/1WLWsTj3iWRMiSBXjmLn4LixAVXL6CyYT7V0FYqT3jVVghYE3csuCJ+6GckptGbKyhNS4uW5Pv3sdNZk8wyoadgI+LoTFjkO1n/fOf86d+1KaSVBXr9+MQmqFSga4fEc6w7BV2+oRLaVJx6bBmx9DZkGIwG/iozG5K8Y8KlI28iYC4Z9RHsGAYtu38VqIPycW3VEjPkXbnRmjli4I9jyKVxSQRZuAvL724SxxHNt5/ErwkdErqN8nhDoCV8oWROSwiK6D18cunpYmBCZT1CF05DoqeNmclfC+92AoqeCRlhe3FkrPbkhDqWHwPQP8KPVJuUhnnnPANEt1pqebtyuLB8zF3iWBGw23QfiBd/uZUZ09X5bkbQBq8WmTmgTwbknFb3k8RA1LqzeE5rVn0CF0Sb7CqPyN2OYEpgabJgwvLb5aQzaGJPEjN3IOA88IWS+/GgAahwkrkVNuQFGyd9LASRTubsC79xIv0pxUwEWuRg5T5XNN2PRJfAcjrro0A0kbRO9H3kDPKXqp6j6diljZy8j/vp8LHK7Gt8gdA+YxRIk+haTPp8PBK3abKwlaMAkwrJSTvwFXnonmafAK4OOI5TKWEdq68vwAWR0n26OarEUNGTyC1pSrHk68/62Xl9Q0Gelmk0EJ0rF8eoS0s7esmaHQdD9Dt8Hxa8bfZdWoSdZ63G68Okaug51v8i6677k49Mvcfm/q77Kbd0WFpBj09dcFYTfMa4g4+9VPiHNRerMtobZG4wUQvr+lfrtmUNOs2DTFadPMGoMUI/yzSmZojdP6bu7Rr9AiVAcVqeow/M1sSXeZoyoIc7TXAW83fKHTbZEhYF+nxHWcaHPR5wI+RNdfcqGfwRBxfmJ9kN1pgbbJGmXhLrgOistMhKKCedWrXUFOiXKiZbAMUlLEWy+2zxRtsc4CxYVXLahHXdN6Nrl8ZlQM5pmIzfzqsOhVAiAc1jxf+YCt0IpX08aOyRUwmqqvdNTCCC5MuOzN9fg==';const _IH='d9f91989586df007b2801c9005b853d5eda12f82724cbd437013b400c099c352';let _src;

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
