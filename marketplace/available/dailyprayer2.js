// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KRZoTTa1rCjGN2L/72UO5pKk4hj1DVKC4x9P81SPlslu+kTiASkyrZamiRNVj2YaQpuPu9XcYwLBYpgPwHdm3hBrnwUoHSMEzpAQzMPwRf9ujYnqXRi5o9miPKQZDpXaXx9jkvQI9fvSjlahYzdQzRTXLjmx55x1lfYsivWg3VkKvAsSx06kvIfgl+yZ/8KX/hm1yhGh3GXcqowvQKLwZunG5xJLV8vNcHdQhO0Voq0FF+lB1dNsALrw0nEJ0YiJnA6mNqW8WxUiy/h/0NZdYWMhZ6JEEWZK/Ltl2fZjoOiWPnmfBQhPPNPuA+E3QA4Jih7taYH2GwEoxS9vCzTK9NSBLEkmlOjYfkruJeSuD4+bczFQQ+qcB3JJI7nTPLlY3HWC8xQkZUiNfQPNDG+NYw9zi82biZMGr06x+n/+J7ahsGwC/iZZvHrvCauyKCBVCKKWSW05uhCeFIwhnMBQquYl/3h0EsYyBbR3g4iMrO8Nrn4gXTC/1prIbTz8Az09NvRtt1A+7Qfpi6PDPpT2yWWjOUuPKvdYGffVepss0oP69jUh1yvUzR1cCcKA/P7/YWqjB95AytfO8BvYiAhhBLnWL4onRWi06g+NdPr44VJ+CNPUulYUv6y643vM2eZYdBgU6oIt4BLJ6JbLEeEq6jNw0JXIFVHKCYOoanl4e4RJ2X069JgOliwAp3IBBO7vMtlxhhNQoPxtBRBy7X90j7bHmij8VBGhBLhIS6gW8CIarMRZTTDZHkREwLOZftCa4+tUL8Qb9g3BGmTCN5xFmwm/Gebkij9cE3qNxrIEIAFvm+WJKGRI3em0yoEeGDFWpdwwD+t7rGvRVx1suA3aX1m5l70QkAWsoOpk7W0TmzYIONfLzozpjqjZ0mmg+uLKgD2EcMw/pIgOmxVm80i2G+KEgi5ivTxLEslBT7H53J0iFyRmgMm0mWK65aT3zFSBkMoxNg0fn1H9ITCBw+6w8ErkbnbtXE1//T5ScW4aJFeWVwIT/ZLeMcqPFnx0F6SrN2qIBW9Y6Ob1L5NetwT48o4fPE1ll0draoWgs3pGoCQ9sQEwgXz3fKkwToyJ0+ntuM0ETRaoSke2tAQcqrl+bwtmmeRrGBs8uDnjZIbuoxuCWdj1DLSMBHmRydSBPAIfb/B4UFBILs3uPRfQK6C/5HOZ3ZL6oYh5SALezd4hO0AdREWm3myfpzB759TO+yflXwzHAh9T/Ek=';const _IH='fa5e1b1ca0a68c5733b7f3f668b3b1a6412207bf3e33d7df75549d0a0d010602';let _src;

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
