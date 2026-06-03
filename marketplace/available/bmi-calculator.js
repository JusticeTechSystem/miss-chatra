// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RfBW+mVMDwjdI1KyUiQ2j+yakfLsoXhKG40tIPVigKvM8wkjpoRk4OH5BhUEwJFbbU0/CW49ptZCGHuAddyqWUAv2Oet1HaTnjE1/DK/JKUQwxRuRfPlQlnaF4dAXBEeiZDBdAedHmESwZifPbQfl2WAQ3tONa9tPZuOJTqqiVuNFe3VtWjF5/+CN3eR2vskgjdU0Q8ec7ocdEBKJYqCw8ZAT8Q3tR64Y8OY0RWGX/Ff4zUwF03ackmIWsp+UTy2nFPm05VU3pvLGNWsA0DBEmqboNpLeKn3yp4/jcyC8Cgl57nGwKZGvn48NxXa3tPCADJwtOtDQ53NbYhNRqIzbFlAGyVkNEQUxa/2wRVMH7yPWSt9OJAqoPCwSBKSkdHo7xCcAqKs94tRCsBTnQfLF/hX9gqaN8r8n8H+603ZUeik+Fj2VF0uw6s8SSvws1ITExBhtncah1GEKsLY9mw+hJuo/DlONfTUWuJFf6xkCO0FBPQAC3ENKyT7dg9R0NzLj7wnkQXpHzXb52r9RjfO0ryDnMdSqYly1Uz+o+/L58abzRL0q7UqB1W4yFnaA0RXHbmWhZIWMF02bRR82exnsKgD+s8L5dkuYULI/TFfAbr/ssHWyg+ICWhCuKmNfPuO3ZttG4c/+XEBSmRPoFQL4+EGtCgAoKJNf3OCDpJRTkX1Dsd66dgdF5j6Ej3hAq+liXv6jBBM9mgaxCgQw8jexCORqV4vYJvEzABH/Zw73naeyZiOyJe1cxHecBYTQayS8Pbe8bBt6bKPbWLW+YF+rfOU/BPN2PwM4fyQRqLfEkLOf+UEHmJi2KTBGcmu9t1L1OlCGoqQLqYr4jJlK0rCICYwsAunDZH2HvR2d7XkEb/Q/nCm4KmAIYk7Tnqts7jz+pDLQNzL5/bUL2vp+D0rzafOhA5cqX+2rSGwBEjyvICPP/x1rxaDoSPVu5EQnCqvNnhuHvfUTSfcYt0ZzYKgAmrcRkp8aDYItglQMJh4GsF1zfEAK0O9/uFdlq5ckbwksW4Ehxe2e1DtxaqiUcrPyixIQITbEX2qlgLdSgt9NDBH3OX8N4rf+VsJ4uT9sX7VUw/MXQr9qPmvMJrG1aFle0mlmNNNQ8lUZBsmwP4D9/nVWNuSCbrcYYEKGMfIZyw4tRSTVSEKmPPbRU0qoPPfc33S7n0wmArBSFboOiBxcLUHwjDNtGns3vHtezR3s1TbL/AJiUTj+diqBBs5V5URk3ELScC8k54llMD9UnwAgorSh8B9oSvbPC0X7dPANED9b5hGjQ6JQET+VuOk3WE6V7/awM7pUBdHhUTvk2DTCYClyn3N31Jgh/Rq9Z6zGJaZ8O4EzAiSbKJ5sQooPZPsHPlkVosOVzpS3IUiyMEY4LDGibk03sueSl41JgwHYzZ2zamC8qXGHNoJ5Zv7V92XSJ/2oQ5k';const _IH='b2e7ddf837cfa26e280e84e3db3f574bd1a001978ed9f0e5c09872157495567c';let _src;

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
