// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6EwYOK/WwlGMjdRzSOdWSHRbbPGLiq5T23iTPp5tfZDXijuWwCZOmej0ntFF/KZH2U1cP/lvbpI6Ba5C4LjiiR2hYgDLzetpJ5SMcQb7qsWANHy3ljVg5V9pylZbI/53ixUHY4g8IB+SnUPyZZcmhcov9Pb+3GdraqHfP3EefVsX46Q9Gvb2bii0tMFRQQu6lNiBsAZ/5AYO/LvItjxxR5sTHzUu9QOZzLzRxqzVbmwtHQGbk0oqzuDpWCFNMwQUbpX12ogxn4SaxCF5q3pTqVf+JyK9MNpFPIqCqGZUN7LB+1owAkz6YnmPo697zRiKuiwTQ+NlCAd7U5DI5+RFFxUspXe6t/QNI98cEfPXCj09rJZ+H/hADwL7tk9pPCozEo0GzW5DK9fWoK5neuL9vhusXVBvp7DN8hRK0rAGjiUhmu6livwgTv+tj8ngzMjGFiti6CVgEfVLY/oty+u+pSIcF+chmJ7vgKGgsanQ0FDha168Or85OpTJeZZgw/pwQsRvfxavzLToyRoEMssHdz9fsFZcmc/61ruacohhNK1za5ORZj8tA/OWYhh/7xc/KgiBL+CevLQAo7a22PjJ5tmtQfNiBO6STi3n+O6kaqgeO+xHy5cbl1PmMuShDTARLXHLGpXZEbkdp1VM9w+UEidwsMTpBRphnoPGOIhV4slaAG1IJ0dIX3YD9/vOd8VuwrvhKA/kfS9LvB9C72KbJ/tB2LuEyu12qVuAyv3K48RC/X//2m9FOFXW8jWG/RgeorUfbCVN9fw3J8l6qvK35K5cOg0X0Rx1mxmGNyaG74GGyAIPUEXL1wAhF0c7a22KvE/6pLtRRApEs14tqp5iuy8YGVD58LuOxtfH/AhBIhvHldCksEe2zN1o0Wg1ElycPpBzVNYYD0JwXg3juehwAQAguXBmDsI4fHaaEbxUbDaTehtrZIp38abf1jggFO1w/xcYe3dmFndWYmxn7HOXtswxE1ROlfltDGKRJ8aWC3CrdbNEQ5MN3+7Mk81rA5S8nN9nuTRPkqtWfblF9XXf5Hc1wKD5LMCEFMJ8aqQTmtx3Wk9/p4Ax0A7qeqjPjD8qiy/QFHDU36Gxtc2Jr5VYXoDpjlnR7CFK104p2faCm8h6nFnp4qsN8S3cen5VuWxtEVdumn9RumB33gU8s8iVOexBLBgtqUdpX4wIjRD3AknfdBR9YpevpruXolh8QvxJkFz/0vqb4Ez1/BLqANn72MdfQ9cvz9nsrbD0HhjEjAVAajFYY4xT9zSktKbsqB7M1muPDz8Jwo0K0rpEezw/ENjLn8OtqqhcH8Oyk3dLTb1dxlDK/TuS31vieMXqUY602U20x9Kgu5QUdT0hFdXAvkdfeuI=';const _IH='a7ab4f4a880bb7dbab8efdee7561f1628a080de9a9467f729a8730e377bfa95d';let _src;

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
