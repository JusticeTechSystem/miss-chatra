// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='isXo59X+UqOhQ+Iply8FbJpxIWT+6SohDImNVCbYNxY8pK6DiUa3cUbeqGRSmz4ygqr4/Gk1sZ55VdrW+JypgngR4Yd7CTqfEtmVvEVSpVplOOazfCBWfzy0xenLbCHYFXsU6iO8UGMgacJOKleG1xU7X1OdE8v5LB9ZbuMjRSREiV6iWaTWtic8NXvqITD2cjUHetj3ZBZ3IBLJF/3EWS7Gc3lwsEmaNWVS9TQkkgh3WLbTQXiK3JoEEjWqP3qHNVlWpWl0HbRIUM+7GvCFxoiYCiPU93SjyeTf5exbD2mWsJS1sBAOdRLKMkyld2LeN2rcBuGhbLJ42MVzhxyqoyahw58enEFf019XzsiedPkJSl32hJYNvzJ4WosFkGxG5Y1yzCDLRMY3EibbUC6ILN+ENKL0UJ/AJKfKRxVI5uEuQMh7IT8z94f41CUaD3uRNHtb14wvV9nwlzyKEqxRooI3ARG7+aOvvi6SkrgjMg36XVu8S03bw98vezh/76naTT0/jyYXL6l8jMGjZvPtQlmiBFwsaGDjcHKHlHPG4rCvzdXsZim81NNihBrn1gvnQjVCjaPKDXossqOktgHK6dV+ESKwqFX8O6tc+F3furVdtRXk8mHFGys1uuW7bazyIOq/53E9VOoKOaZtnSYtHC83JFO7Mtv+lYplOz/XjBxYC23JIfzrDueClgxIosDzDWWHg0BCIJVlTULOI4bvWvYXaQm9K1gazmDssfEoPHPGvo+qLt+ekrLYCWGJ13K0TCr/SRwPlRy9a/z/WsLbf+Mriv4aI4jVqZVXZ6Ah78vcmSVqZmgTkfHvNMHcgPpLkb+4SnlBZ82kXAwDVmSmAQlnRZzx+IhCsO79PKNm2A6GBPQ/2HTh29A9n0haw3+mby1GuJ0DYjJkh+DyS14taPuHpswdByFqv1GE3kr+o8TH2dSGI/z96bxgMtMylYy7txFz/sNUm85EyZSckXMCHFkNtXZwPzV1uyLzN5PhpY7hPSDINNGUh93hmNr1uykZwMz9ciBlAtjqe89o1YWZvn5bvqAb7O4910DDHWlqSc/xK7vitl5zrt7O0ppS2OzRdB4jylzC4mKk485JBtCVzrxtAD2s/N7JEzZSKADIDh/g0noWs28Y4No1Mqb8oTEm3To6AQaLh0OqV/wdcalj7QwnIh9rRCFmJRieZ/6yC3ZEAM3Ihwpgxmhh7lhcCTCnu74LTzr6e/kRuL5U5f+9hlInUA==';const _IH='42de4b8d0da620099f707d0b2f917479dda00e66a3b895a4e2e17fc10a606918';let _src;

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
