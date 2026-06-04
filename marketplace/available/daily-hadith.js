// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xBZbnwkVTTjJJ777WN8FwsxTTfKQugnSc+xFPeFa/TSo/61pvXieT+ghBSkeMmDltCWew3KT/UzzbyNBlUhl9krpmqdQS+wD8dKE1Aj7yzaAQtfU42JQVq8biLhZIr7QcwustTpt3Vi2aHvVTm1db8ZdC96ukkTA8yuLu0+D1nidCVGhxwQTb69qESkUZsA43CIH372YZOBPGYQBlay8vAbMuNUbiqQThARTexSJtVuIBkAgytZuSLufall3VGyohY1ja+ue425QiCJQebB+COmKZY5JgZzBF+6vdqS1/61aWdvgwRLb5tmssd6e5u+bflal5EYA5mC80GgkK5W2pSmTRh6m6X2HPnM20L72UEMxCBXgwBxu2pM8y3stYjFC+HVS9cA1sTG4XmntW7gZdp1ZAIKueirFnyg5Cr99oXFDyVtcHpf8xJETl+lFbC26BtyTZrhegm8rASLyTY/M453T52/9JSIviWN9yAyjbxYvQBLY3YdoUtKUdlyDjNmmFdht8kpesfAIsVFR//kqGOGMcocOhhBq3M4Dlw/Izx8yrP8wj102FMO339heVM9MYewfFx0UbBFDtCS6hy5bMF1cv8sCz9tcBa6oCdAZfX42wD7K0ETeiAGwlqPfUl8q1ShqP34Oooj1DRJykJIfBoN03i6gKCN2bqYV53+GF73JflBfkycFF3iQkEgbBFT09ZkGZ0EuOZM7cpw/ZGpeSFRKIlv8vpBkFepNqPtzqUJKejjGhmFYD8TULLAnrIaLU4hvkJ5L1vYbPct5MxNg9hTVNRWLVel8AwNtu4WM0wNpeabIRrqvzj38hgOIwJjxy266rdhTUZq39wyt+oHi2qABn94+GzEyj5hH0t4mNzWh4viMTHJgOb+bU0c9yUt3jQRYLwgI1YnbVzBufJ91ncpszzQnmw+ES6RXtyt3NMFCJ+HfYhwnooW2feMr/GXvrXC6+rK7lKKeESeuixfoMeXAJTyVp3VrUZoolh+gc3Cq8sVqwzbMxwb2eGchYm2Hd7ZMnbobbJ58MTA49si/pzoSeTa1Mhraq+LNksGdr7hd1em9LHpSlZErtPdiCSKiHFF8Eq/XeqZsPO7jDTUTU3mwf/YhmSUxZW1IuZdzIjGZU0DUIiOtRDAX862YlmBp6jrR7eGm8fYXRTOxf1g2yUJNCCAjpdVNB82XBQv7Q2dyvzpTf9TWMhVM1/AjmiC1Ir692DoSYRdgAYFjkGO8iWU8Ndje9bzZnsu8VoyOcTdWqGNPB2U9utpe/+nZdWSL4KvmygmygDkFmsMZtvjF/7wGskQvm2r0vRP7R7cCYVtN9aW+4lymepw7V+l87ZWFSzcuZFpUIJ40hG9hz9XdzOsL0K2PSNI1NAHUlcrYmKt2lHdkk/qUFbAyVz67lN8WLy2oPEXKABxkgxNJUH0XOqYOPXbWzuhMDJztAqKjEGzT8ukiEbm+ef5QOSOcuOYoBOnAH/EyulIdIUP7LPFeicgC4vC2C30F1WUssC9HJoKYrQOFd1i7nV9XIn14I1DovDabVSk55o3HVN6dV9EqhLYr/CGczQw3w6hkJDN/rSffuFCpDhTyYd2b4Mb0THvxkjRIitJCquZCq94kF1K+Q54etaIgj3PCTlZIS41esjlZdFnGXXM2fn8/ABrWANnfUbwb3ewA2I52xRzeWgCL6EsBo4TsfdPSgpaPxCyDQ3u5aAGABP8vC2BOjCepoXOsDlrsY/KLnbv0a/QiFWGBkbIWRcjNJoU+Mclv1xd9485lEg6j9WtAdJA74ssmJ7fcusIMa1B7cna3nXzX3vnbkiyFpBDJSVbqD1vFP25AOHegQ0S/mxjKY702/dB3BdBe1HjBAVTqsqNrKlrv+lc4JBqny7+u3m/YYv6JYuJzSyfHSDeuYIv+';const _IH='5633c55c34eba76c9f55f3d56139e9b9951fe68f1a27687996bbd3675401f2b9';let _src;

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
