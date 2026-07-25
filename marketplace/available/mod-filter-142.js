// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTO7ZD9gC+gqqUhkTvQVbNPLE/4RhQAkOHYheF/r9Q+5vBIfn5NccPmN53r1QTRtblaj719B070DDezZ9Dw987EsauEztbKFaPcHv+8JygxVahnAb93+34zD+7XBWbJuoe14bxxYXcM3IszDPhL59kFmLXdM2+iUxWjEzFggfFa0jTDD9ZC1RS7bT9ZnvEPU1F6z4xIDqAQ9ZQRTY9yoauxsiknHNufhQjitNV9tf3a2qaJ9rwCtC2xmOp5t4CPzbvDCB2aa1zaArxHgzFBFWHdKdJaQVlZMrmZiSP+J3ruTTcuGHrzyS96fN5G8kzwODzVBehTDl7jbjFjm6oGsQVv+zqf3hKXagR/Jloevc1hX+r+6+MtCMWxxUnDyCGewNNjkx/csZB6/DNQYoOvQrhkZMGG91DqJoPmwUf/0CelCakWAoivyg3OQ+yyZpzCClQDkm5HB0fsrKqeGRLYda+PwEjhPQDhdUjdv8RRbWNtAcnVfheqy/TSeTj14NSUiuh1WUTfE1FSlAeKO5EP4jLe+rH+5qNObs+IOeJpdMsj3wHfRJCuIyfdrkA7LfHWTvX8nr/4UyuKviDlUILQLmGNA+SzB5VM41nsMgkojbdvAenqkaLBPmX8LS3EpoBpyyjvhOSdeHWbXEwRUbzA/CoKYLsdHl2cPpQoydl4ShwDMvcF6RKB6gUcH1RzvgGbRcn8KkYhOAx4QdHlnuar+6KPNhyyW5rf3axDN7eHCeM2ECAoNLzIouFFGsJgPcVRtEGuzBaa9r5sXO9k6U9m0WHmRZtyZlA54DmEQeAldlxH+v5ZepO9coa0HlsQUd8jufUefkilXIkcMtZSknpgm5lDFr6HW5tx11nwfKEBh2Yckd5+5s65ADl2SF+8Yy9y8WSuTmtVwD/7coP/fiXupAv3d2D91HUyWAQlUY1lCLLNAwjZN7U24YUi9boU7UnUvZA+YjcgJhEn+3Fc3hbpuve/TCCuY6XCcN9+CxAFcG/ZMv74CgG3bvi3h2E01WMc7N88OlABIjnHlCIWp+h1dplkWO6s55bfIZYDLvKpXA2ryBjiVksRIavCN+CC1vmUSd0K5jELiqK7LWtwQVaA7X/3JPPVwk4X/bo+42ZHNzZWhBnTV43pPclZCu/QhCqtmMlXNoT55NoztFYg19bPBCz4ycWJfMqQ1uNczCMpLn5e+as1Yq5HLQA/MjE10Sh0WtvM75uDPvxnSaG7hIew5wIf6HHEpsTJEf9IBP9D2Nl9g5hML/27T2+mGgoVA9daVpj+TRsMLTPbVtmw5h3yBDuM14XQ4Ikl5aGdEWLoFstH5yEOmN8KawzkbVdsURFwf18ftD/pD4T3hD7l+Y9sCrv9s5bIF2ugvctK3cezCHABV2etT2bly9pQ';const _IH='f4997ad066ad37d8ce11dd285e6241c38925ad40e93f091a81283b32a163957f';let _src;

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
