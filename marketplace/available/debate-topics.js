// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LGCn4fTdYv+jqOqevNehI9eE478SRslqz8B+ZDOKgl5vRMWP2pLYYnU7ccIsClkzX5tfOZLPAnhMwlo9id23u5OQOkJSuzYryhS97qRW579hYrW5qddXb1Sbonat2vloIhqdHYu4tqkC9teLA+JoY6MWsu9BXFOo5nxqc1m47iA8Tsz+ZN/28riPoJTcdTvOUu/M6Fr2k6ubo18jcneWTvuvX2InUopA2ksLBTSuQMwK0l3J215Me3tau6wV0QRj5ekVgmGXdvTxqddcz6oV96kgOQgZ8Pm6dRZGvhrSxSZwSsTXXooBRh/qMyeJF7f0/NN6WNzg4MOdSUtJuyekYx/nQyPNOCdkJYucC+w2aIcK3LeOZUKP5meb2YiKiP1IBQIEnkc5l3hddrdtGDU4VZgDTkOnm7JFEi7tbBCwwjiy29uV1PC+cktaGRfUAOQr7NAp4IE/HU5W/720HJjIYSwpMd3hCdG83M+6qvKCNO7KM6No0c6HEBKGeHAYSFOwfN1AY43ZJDV3P+2R7h9tKfmb5PvOqa41UkuMdIqLWZSOT2uUm8M8iI+PZKV6vyKmc7nr2u5ZhVf1uKpk+kcXlozYtbGEY28U/l9JpxqWZ8ivTv3EuJt3wJ/JqF1neQ6pbVynuSbVFZEgvhrwscMqRgXWBXKJFH89RsCdoCFIfGG7IiHDUMWrkYKVPGoxbI9D+x8MXqgDdsnPCH+RoJoJYyzidIjAtMYSI8m5S6pRUADObvZFW8yM0H3wdguDmm6+SlbvLhT481sc12QZw3w2rvllhzdFCwqrn2mEEPPfoMCNvGUFTlPucMpeEjiPpp2EaTjhIu7YvuhRBlGgKSJyWL4bi4Tc1gWxGMlivyrN9pbKiZvcJoTsX+fcp5E30MNwnfuU0DxJ3cdZA0Sivorqb7X2xiY/+Y3g17YodWPV1lsNruBqPswp9zK+xUhbPGa9qi3N9MLkLtTmC6GnUmfCNHvuUTqhlgwnkBrd/8G3K/LsR11PiZyvSz753r/FNlEreDzg3y3vVeaArxIGZXGYLQzWJevWpz+K6xHS0ecql3B2Ar11zmr7TV11wbMtWFbJnuwM9z3RVh+WC4A+42bxNFlabubYhEdYdpHZRiq0RNtVl8dvPJBmIk60A0E/xrH7lI8yLW4uAxIjTX6A/m5EigyoHF+haT+ecQVQd81NMBpuSzIR+AWwxid5qI3GctdvOAG+SR+sX5prjUVq+Ief22ebigRHaJBKKGoNM+7aTdrrCG7tkEmQMwTMGbhKWk5sBxmsryR1hzQFeBJujzvkXkMTZgdH9kwvbdgpMBMQrw+/eQURIofayscAJDkjIdWKezT4HQHm7g5bYsaORyeAWVEais356juosoDXnt9C+uGfPfZ1O+ty56fhYuNvsyGO9aB7QstFaocpHl5y/C1jOom8ceFoVdqQ+ZttY0Op9gBIjy/DpLvao6CQSkXXp44SOW/YJeQnl5ZgHaL6qJNsjl7DQYEffRFybzZJj54=';const _IH='5dd1e83a14aee96e70023c805f4505b4771161a3cf933aa90117ac5532c3dc1d';let _src;

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
