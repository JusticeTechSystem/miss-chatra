// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YYyUZi+b9zGDTCdlA6kiLb5q+onrt8XzwIZlhtGichpD0BGIQR4zenWGy4ICemo7bMdRRq+RV4m7ODhxJWQt73eCHZ0FZVqp7IucWt9zPZ1GtfnvpcU5zFqyvHzwB+Z3NQ9v3HeH8WErj8srWMk7fo8eBMiqUbnk9DKERxOJSMNgfPGJqunzjQ0+REVhjvDTcdq5XH/pIiMyPTevqWKDo0mUBlc0vzQma4SIY9BwkUYgbQpxKMdBbtki0l7MXE3hyzCx/RZXiaMOkM7GvTDOgZlFAeGG6H4tow4LZzmlgwtIC4kFppOucX95jsSh9J4sMrxvrbgPQUU2IVoePoiDCkGKwdxRaYK8XsosNl+hU6hyCzddKyvX+5BHAAAQ2k0ejXWwk0OMjSQOTEvmXkMyxClWHUjSLmvYe/NVf7qv5XNOBJI8aVw7z060gjM0TGlgpOhevASwm4bvXf8igjVO5/QN5UO4cYyMM+sYdU65+idIDeH/Zz65AMr54IQBkRIyANLi7kOyY0W+GQfuSpz8PWOMi4uwmJ/nudLAwnnTC+P8nBVeTaQH1W9SlHHfniw8gWPAiNMw71aBM0/wRYoWJeYbIuwzYVf8I+yiEmfsEeK0Uupz7jsbX7jIv9N1E54rv/6Q4JP6fVJ2qQ77rlsiMOO6Q5vx2L7W5u6KGgmhYGhZRmDxbgrxCL/pfY9QuDubLgdGNHj1uuqQUbiK+7Pk+TeqM4aIIB4diQfTm4nxxLbBuNlQIeapioXn2cejE1E7q76yusZHhtUP9yeRnpln1zk+Ij62njTNjxW/RblGoxO5p/3NkVMCo0FvjYOwowkpsP7NmVpQ2/M4Gw582tzMgF5eHepzmzSkQblKELnV9Sq/LOdgPoSPux2d4dskgqbdL2mB4vm07DRSU73RHOAZfu12sS9OOYbYaLr/2xDWyEKv0hdf3+oX2k4yRWwVAtNWfNntkHWXAFYCksJaX13Wwp/tIgKUYGC/WIN1Cq6y1uysEUvgolNhr8rluXeQbaIv0VZf/8N2NAyWp1u/mSuE5b4CaiYweKejX1hfJGt222h8wr6/lxQW5F2e+pJitTmRqF1HhmW8Bv81o82j4aLFH2xL5MA1RsaDfk3Y2RSaQeRQLKmn0ibmncaYgyZGrKETwvAZAE6buoXpFOaQELJneqs5iI0eI0E4xgp1ppw3Xy2ixwVp1Eal4zC4HtA0Twoi';const _IH='9065d2500265679833e28d215ae47da9ea6e7761e717763c4609ed7c8d522b23';let _src;

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
