// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='as2RP4NgFISnmtyftMoGWDMu1p3zKoaskHlUIyCKIMw57UBG7Bh//UoeR39eMy94teR+2HkyuVEdBBCNTJDViwHN5XdXoHajyaBV6c/f5kC8NdKXeILLCWD18BWcZ051jTeCG0UXdLcwPMxcHRHJdkKcsBqym8B5iI3d6Va/77Y9OQpFIbL2hA6i0YdkXyz881I3VqEPCJPczVsgX2wOQ7b8tiTE6a3mRtcOOFuyZWnkRjMNjVtpYWAuqw3PB4iOm0m/XA4Rhrk61B28MCAs92Aa7++h/5nytJetieCXAUBt9G6pjCxD+Maty2bX2+Dt9ugEVrhD3qxTXNfvqoMeX5PMD6jremHs8e6ROu/A43NC392iRW5WnIwEj8AQJQyUEVINKOmdOvhrGVLPlXeQsVdGryp936yJD79B3z85uw4TfHtt+RgiZ+UDey2QYLdDl9CryHfZCawQGQhLiUV56XyP3fAOUSvUZ0t/dCn7twB+G5J6JF978jlPw37tH6Yt2hEOR8xAn90fzbqhvbOYZ+6BRQonou4m1X1PieXaxyQqaqLomvZ6Vh+W0d5YPawirjmy65GyTbjS2aoopTp3ELPZTQpdulhjafVEzK+7Tu9rgKYJqptKhJ5pqFf+QDP3xmQhLEUmIQa1W1uqwjUwNv9S5j7FIHKCKe6YqlUQ676Kv4z6VJQ7GrQ0JOydwwAS2sbNf74MXCVvARef1WbB5tDjGhhizrhqYbjJm8zD76Xfa/aTRgWJrBWAPPRqZwInMOrAJb2gr6xaekHbhdhcZLvXiHVx1P85ky31AOJVqqllko9oZuS+CeHjlTqlbWceCp6ajpRlrx8rRwGhmiS7pGHMY0jfh3XD1o7ehxBfH5gU2Ft/yh/wRk4jHMWGRRJm3GLVNTkz6G75AoCHOQJ7qhIwfwSp7WqukW4oMclBlNhu36DnnpdvUSrSpoRGItqSiR1Ppi3YFol0OczpJuUbSH/fgyk2cndMOR5gC64DUBTQJ0w4iiRVaHPmWhUh3F0g6b4PbrHRUPLoF9YGIgNXfp7rh2URBXhV0pkXblv6JAqEly0YxE3KPUwlRJPEjfsMJPpYC7xTblNz5oFVNf9ZIafeIgi1TcMytTEUDs0U8woszQGx25X/fxT3QeSgvjniBhvgnCQCnE+4wkwWSWQV/g/QK3QZTmgw1DC7mVlkgCoxOjRM58z8omMyEnKePJwKjgZxxAdh21Lz99thseqNpzWPB5YWAcJuc6IL+tfFr70X/X6W8w5R4BLTtSirVE+At+moNLiU0UPlC/d7W5QENVqL9m3sZxv9jLPT23YnnIDit68JHTrjnPLukvlmNTjr0Z+GiRctSn/G9yKVG356M1o/P0JVz9yyEcqe8fTlm6uRngTN4TNJvoTux6ZtRoaClNS3qNfvIqjz1VHR4ojZLw3au8A9gOOARJ+ZF6+5KCaIfRpsRfuf/rMxpCOyjbfUe/mzuf37C5imP/suGtVlntpYh+YCFsinng7Umlz+tIG4PkFSgFU4pNp30Q7Rb1wYwyQ94GPiFCscxALGZL7gstg60DB+3rI9JiSymaD+9N3rz+iBVrbR0oRqeV/jgF8iCszqnp6g4sHlALcW/Y1ug/C6ptxW0hwgtQHqF8TaY1vMjLUTSO2AB2MdfR2gNUnnQW9p8zHqn3Oj6xelTVCJ1xAUGpgJE4P9PftkUEqR72IDyGKvJJndCZKXUSQ9o71fPngLCt3UUyn0AynYwyVcIeJTg8fiSoO5SjkBoniGSXpxn1acDVtB90Rx709z7txS76MyBaVzgq4=';const _IH='e0ebb73b40068b99c4a740b8a26ecbfc4abd77a0563c613c067a5374a10f2b97';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
