// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQg4g/EWXLAQRoIypSIb+Mdkx9Lk8tZ4aKbCDPC4+G7XKAMOEe7enRVi99pDNevaB9QOXBVd3KLMwJWd+Fl5M1RBxUlfykm12l4HwCEjeFK5OQTwkCkukKfWmloxLpS7ujyeg/BsS7tWoSaLlcOS7SVTsBjfkSopj8yVJS4LDb7YS4pjLLeMN1r0WlY55ppbWAm59wcVDL0wE3peBHVnX1sODSH3+U3lJhsMi8qg3t1Rlo9YHRbNGFWShcgn/iWfOTT5OKse58FQexAJoWz8PY1gQ2j7miEoqHxIiZwYdCBaN4KqOmHL6Z9tPPYpttwetBWPoSjw2IEPJSvEKiV/hKPhaKTbCNxiyeBgHPH9qCmoC16yOlSUKqfqXxend0bR15Dk4b0QSWoRGysm9QMdmwgwMrwM0fN1vqTwX46ZIYP9fELbAmE/gF2zlrWZ6K7Rhd3w0tPMciEEAxxvlylTBxQr6LyTb9lI5u3PNX9c0KB81j/IzD2uy2mAf0FbKq7sW5IDkASfYBIdGzwEdsP4JkJ0ey+VVVJxBpTHXjH9A6z8rhgjYNVtSxVlR3oCG2IcFNcBotjniEQIrh7//GSS1SpM0YC6X7O52te3+ih76iscK3+2JIFo+qfKsWE2Swg2VMLBa88mbQFA213iWlmgrQtd0SrmDHyT6u62OyjvgmS5Ke4IQdQpwPrrlLC68IugtauRyQC3U4C8FtUVyu5ybFwaldSwGmVJSWo75eA3loNqzCyVCnc7kUNfpqE4XbjgjIL7J7FfUYR2hfhQ1gTpIUZzxVO6WiCQ2zeSpLx311r/ZB/Bhv7ZBpLX/tq91HP0POWb2zr1dgfu9qBr686lElityvwcpTyQiWptIJN9JzjcU0dYuVuG518QqF0RCPJcx4bnmV8w3iqj9XTqkH6Z2+hp7nQKOHvEvtdThQxXXPdXeXCH/T87TkuTXLl4RaehaZad6D2BAkmlKraxiFIAICmrr0v4gW+pH7YLK8vyvpP8+qYt8N2iAdiEFT9Ia9HdCQyIGboo+macM9vLG3xTQZJUk0nRekd';const _IH='dc378922653201683d462ee493fc704decd39358a03c017ebce010a5669efc74';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
