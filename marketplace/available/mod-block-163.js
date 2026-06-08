// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sQXGyTlMRFQTlzXcAyPVt/q5hROCw16O6WE62ZGBQmwawP+bq/YPlRLDVn05nTBp0aBonkTQeUg7WiflJAzZ6/ztUF4zt1S/8Cl5jHppfV2iETTQH1+RZyEaK8Eh6ysQ1EC0x3mIJh3cbxkFTnwn38DVb5LaZU3hVckb9aRmn88mWXq64U5VmXoQK2IEfH4m4gEl02F6d5jWnbAd4evfJ8tiGIurBYlSsP3hDMyWJJt+bQAMsle4GdsRzK0tInVvGWr1rIG9ifuT6C1GDjIO4Udj1d7f1L9ogTHw1LY9EA0ClP6Q//ABDXpKy3mbP5TknRU4FyuIMIpRDe8yGBdcArZm7tKgoJloJAmLuJbaLZd2mwJnJuggUuTtIWikPrBvcE3Lr79M8Rgo7RmjyzylkJo2x07t5sRWWI7Ui9P0QyvGGKQ2AWHY7eN/j1sxfjLCMSBLKLU2oLG0fW0HewKjZtCVk8zUUiaZfotdQ5AxRxOD5lbw9roymZtH1Xezu0OaRt836kARpxaZZgPGCJuYI+X8hSwRIBWiGsSDnWorI0zHyb0qOvdwj1EyQqd8H0JJQUGJNDlQiXnOzGuZ6KpfYxMTOM7Pf4+UJ9fr4vY1e6sBEFfXeCiN4fBAMhHuNAIe5sj6G4Yu+helki5EMOmpZcGM9dI1erOcN+LaOXlN/xEI8sfal9pCKWE3tQRAipobyAsOsjHMlApxJg3x0jiKdsdrA173V1cLNvjDSSmhl5FhXDjbwFuu7RgQypPTnH3E4FjC2LvUmNuoxZXc5V0kPSCQOGMTXqq+KRYKclq9zH4JD62/tx5T71v+25pA+ePfeh+lY8Tw/RGm9yUKu9cROyr8eH2TTUMK1GuyBGCdx9XQ1to+YA7ToyHDOYlxmIs1jZk61eH3689zbejtBJ+ue++O2+m0tcgR+w6TaW6/gcT4foGmSNuJPCeVnffbbbmSQdCjQstnvZLVSo5cnsMGfm24wKr/Tp306zeTC4nIySrlzEeX27wFL07ZKX9gH5Q+lER9l1oNS0tgIpXyyN58AoWJQNCvK4IFDJKpu1cNQGonK4LAmHnh1x94hN/gXkgQlPxzh/07NcUlZ/KaTlly047kpxP91eBzi+dij8iOtN3OblptHtv68pC05368sTpVngnGNZZvNSmJD61qNZq/JQ+yPQ03/I/Q9YJnFXIDESyiF00SExLYSbuHqy2l/hC4g5iJsEt/qG354fGbSqDLepoi0QesPfDmGjVHSvX4o+fOx7p0531eyN92lI4koJ+xl8/Eg4YLXIGUp3bdaSaH/orDmFW6SqRJGDoiYPc6UJVJaY9XO/+Sc7FS30q9GT3lgLlCQFaELvYw3hZon1q2/g0bFdxb79knK0J3s3Wm';const _IH='cc5985bd13022c77644d07e34fd58a3754605f8628550469f33544769364f99c';let _src;

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
