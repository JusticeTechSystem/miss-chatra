// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uR8CgUi1jy0CGC/O4Tnpg2LHC/0dpeFncW8y6RJBQOaufOcptEvgiRZ5bRh7E6LY8svKGSW7NIa7/XYPpXG1DX8ovFUZvAmWzYJ1DsDS5pocHUQHSiMH9Zx08c3Y02N0rEd7/zKCVd0MkziMZGsm4TaSswfTpP7X6SmiHtBtOk0SbiGNnCmOvF4c5Vm6gK71aqSEyhVTllLmwV3KCHtF6k07QuYjTDDCdsOd3xwo9l35psVn/Cg0JW3Ku9A4XY40C/37lazcg58RjDwqlaDVypZ6LtlAG18XodLUOGKIfXUNPNwtH00yEJT1zFA9Dp7uE4kbNikquPBUUFcptp7IJXU9K1DXtWE5V1v+g0NJ705W2URjyBnPnbJgHR4GnMyTQUHfVH4EQ2S6s1Vmtxch18+FpUJMFJP7JTG3RYykFurG0wJJDGBU3Ud66azZyVVvGx1ZYVYBID599X5ta4LzmZm1HSsG2gTwmMKxkQkLv13YR/LOakLSZiqdvin+HfgnrC4iua5biTnwQ2d+3qRhtqcy1rJHw0D+p9hvz3ojqpknJ3QZpxxZfW6Bbd20081ni48Pa5xbHW2Ccs0tRK4rtT+DVBwdwz5oU/0C7U9sZp3gVxnO39DLvNMSJds2jIcblbLXt/lp2srWU1xDdWAA1+V6baWzdUwkWq9tr95l3JplOEW2aPpxHN++sTm2NMUQ8htWTFGBYeifyLUqSypG54KSI+UGXjnAQb2NRTGdDLrJthg20QFkv4Vg4HAFfz9P99zktGMxw371/Y/DEkLTm7rZgH0wyrob+6vA2ppcp0qvg9VWq3GBdSaxsTAoqz/r8wHwqSyPQf4CbqYDG+SpTqZ/hZlvZoWvM+NeScIVsgPo/kxdYVwSEIMHuTrIW9XgqhDo9dGzR8WM3akkFpuABbOm1cH668pI7E0tUnI4hHz8hrY/zle4X0T6x6mJtVY392Yc3Xh3X60T+xBVkFeG8Y0iGzs3TA6ii+j+Rg8ibv1u5iDbckY2F1iddyu2V4WfQ7QDb+/k7IntUW+uJFndUTAMs0kiwao7cuLV7kfTeucZXwTFoIjjsmKsKk79LZfVDL9xq58kHYhNFgbLhny80yMYalt/d/757mz99ngHZA7iY5z6OTIMzEDhmXCJBzCIBfIB/CVoBtB/t13k2AmzPk+c85rgtp4SDga/fP7BrWzhG5JHcVCLQ01auWvhL3mqtQV+gU1cggAx/Cgtp6H6Z1ynXoXSle51XsnKnqFiPdw2EMCSA8jd2I11uwpcqpUVNoHkLMv9MkXTa1XMn2HZyZNDCHq7b0QuVv39YKw247WtoRQLuAH0qSZQ5QEWTuC7u/cfk/M=';const _IH='5ed9da73bf8ecefa67c0f0ea2b7ddfdb934271e86e687fd4da991e8e7cffba43';let _src;

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
