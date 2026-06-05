// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='435LJpQuOM631oQ/MKbr8bQdQNUOyG28yTBvhmHsh5CIqNwFBidKvk44NNMOJAOZ27QqKwT2e7zTsg8Sa0ojj1vsq6IbpPSv3jIFH6Xo77xtb4hdJLoO/S/Yv/VGTwB1q0KxJFTISc6w85P30U+d00Dg5k86f7JeOGbCMXM/HvU6JZ5Jz5RPR1F1zsq8vfB8cEf3hemnSK9ZNw2T/ZArOcbY8gTOmxLJbOyC24HpIPZXioykt3ktscDw22BT/CE9bz0njxSH+Iy3ktoXp7OXW0N1LnAQtgLUehnJScgvDFWALTbKPa1/gTGuA67KC9IaKtqG3Y3/5QHqR/aVpLjoy1Hk78zFTIzmiUSqycG15hV/Qy33AgiOSek0wV1Gk7aMv7BvFrThyMc5fnAbEgTw9BGVU4FOBy7pSWhl9DJpsj8JQ/bgBTC0W2ZlXpPzrDapvn5ojQSM7yh+JfpB4WXwAs0UeQL2Efk9odqFxzY0ruipPbXgDaqdqfxs9bCyactV/9zbUym/DULGVH+CHtnXZzEvQyW9oCWDY7ykpqcry8StXA2sk1dVAVqWctlQtE9hTxezgNGXVC2fj6HDZjxN4VaLwfDJxg27X0rqjT4ta5z0fplN/vB9iMvs1Sticiy0+fqAQhcFHKgEeoQ5ZlEU1fE8w6q/Zz0NsSUEKOqhzN3SuNbbvLuukIknUHKElMSc7TvKUYM3p8oWxDrgQAknXk8niHXfr5wnJty8icjzE0v8FwhuAloR6UdCSV4a4n9ez08bv2BcU2Ui2qBmNada6S0jj3vdQ3vcUa+wvdu/mYW3oWbXKqY7TO/0PCkTFSrgub7UxgE5doaEVMxx8cxJLLaNsEwqpsetOXcm2oHs8VoChYsFjmqEJFjfHrO5OTBHCUwjYFhh5zeLbMJsckesZ2mYToHfTjLY1etqyAbsCwTqMio6vb59lIqVGR78lDHpE8/+8a5UCr0lNyDiuXDyAHvnBJwJu+hrT5IYwn7q60sh6gMnSJIRwvh3m6HHrP7n9mKEctcYIMuNyOkI7TpqeouN3eX0azl8HzzBMwz4C3hyNkbiuyCphlB+QCfYVLn7ME614VNq8yTok4boWNpxZbBYAVwESNytIRD36chb/8hd+51SOHV0p6iSJXSQ32tdZX/CBoXv26XNjVWoY0//+t1s7bxY7kLzrFt7G4IyElODxWtiAboLwsPMEgDVdsaRNg==';const _IH='67b115a1e2dd20345a5945bb208cb486be926a9be06de2460a96bed315fa098b';let _src;

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
