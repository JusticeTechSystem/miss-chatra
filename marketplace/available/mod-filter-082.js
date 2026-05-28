// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cDy/lZGLP/SWHObqlSkHrzAx/Lje+z+ZdzuPM3pSi+OgK4iO8YJ6nfXo31U/u/lmYSeUbQ+T4QfMOMZtXA8FNsYl5inlExO64ipwZF2Z6oIstGIX1yfe+/E9xwSSzbrBYYhtQmNO+OxoUjACVywzojidM6nhtjgNLlNxMCtL6XY9MC/Z4n9V8AdJjl+P88iHX/GVp/5xgvOHyqTjquGrdnmd+azwThAHK174Tz9JR9/yNi0VvhEMz7GQTqqSHh6JA8uL3BDULUQ9tR00k3zViaW0seoXn7aMAySicNPtalAxJ8SOjmWvr+esAiK2Yn1+BcdHOGb9OvY3YarjHt2MTM8m5XAg2SwIWFKSi8gU1om80WXFTHJiOnoj+wzPJeo62u+W0hqQniSMBEgvjVXHjFNFjRJvF4ceeRfI4vvlk3BSvUd9huam+6HRyrjilCC9UnEEHF1vlgGRyD6ByKc0UC5Up4Opx99MKXGSQAw+5MFo9a++wvSb4Be+zDLabUo3elnmyX22zYHEpaKjBbitICUcCEjqbQorLQ6FH87lI7RqgQRqHxXoLezjHTwTdRPEyDtCBu+CdDXfzYo7yOOj0exDM4zl8kp+QOpnzx4Hfks0niPCvuu3c9pm7AXyosRf2+a4zjvnJRkiMa+iGoQ1DkSPXo6EpXNdfaz4EwRr846/CCTKMlGnXZkci1JdclFLrhTIdjpU7rUq2utrJpuWLTo3duMoOWXPhurWIg+CyjqHl1fValyky2MHVKzR0FqukeE+h9/SOCjKF8T/ZK00MnXyZEz/4I50Kqhlpehe+xKSfoOKl/7Q+HDcAXlyKDCUWHrgu3UEfFFzpeIUKY5n8wx2K1/9DPjhAV/csR8UI/aNpIgRuX9FTwJk01SVLeAXaAqHP48OPw8wabbl50vnu0rzzyIfZOrK+vu0MH/AGYd+BtRxm/6uJfVcSiCWQAq21aJEVx1SNl3uiztLXHIzrcskLhajTvXtw3jratZlW1pB6arE4PmedVKYJbHFLWY8PKA6N2NY/y4f+JON9P30Ww+LlqALsa4tNPehwOizfg3Fd+5u+0Y6ZZTMA1JvBDmj0C81skdreouzaVRgQAskQtceOFHNj/0b+0O/nvaFyHHkLZHwScyEPIrtU02uMaBh9ui9ZeTH0hRpk62VojdfESgUDp9JzPJ3wNcR5CEOA/Yjg1sfpTsBe5aLWvQdZeVY5h7pyG5FORceX12+9se2okRiLNWFdIpWzdOMv7s2hb6jmb51SLbahDwUNIsohFB/qbIs9uXo3EsUS0SccN76DTC49lRDJT7dQqK9YM8x3OTonvGRXOpv33cv/uzOKjWhs71RDyMheslgu9cfisihpMM/MJzd4S4GPzYPKk8HUMfxpA8=';const _IH='efcfb2efb8a9b237606dbf6e14cbb1ca0467da4e178b7100e7062e620f3c14e9';let _src;

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
