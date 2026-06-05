// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PXLGL+WhCGXKA0r1Dc80ZNlU0SVYVnhOvPN9yfAir4pyV8mBqI8dHXqA9o0oDDw98drBgf4b9aKthXtlV/JYwSeAkzgFDXSIcQofznI8Ijc9ZxEAw86Ix9CR1owBCW0+IE8FeoGo3n4ABVmDKj/CjkamtTL4gU/dCK6xr/GRlafoF8p/ICDac5rhnyvTzdnl6p5NUf1p3x71CVBcRrr7NOEADVUbjer3SUsZ6+ok1YWrsxG9Lk4IBWAijADaqhbiTL1OsOd8z73DmsDFWO1i4m9Inn/T8O+lkJhCrMt1CSTfT8X5WPSvu2AoWMwwCf7zN32qUGbxoNr53d+EHB2d/9HEufr7BzxjmFL24IssEME48LmydBOc96AjeqnsAFpf6DM+NK68IueZblYBSBN/CBTxSGl2jYkHMu9k1BzWi/GVUYEqvqch4mRWTnv5LXNMuW3dG85gBEDpTT47eCwM3aXBsxUjj+6JsGGbGRDXCVq3no5EQo+pMKMFGkcC0VHQ5l1PYwAAZsQmfjdRGHqwWMLbLiogET1PYmLT02iu2p0GRsUroBOoqrszDOAEUviMZIwJP3zbTsWJijzzteT95aeuhOQVRwKjBF+kzblxSynRD0DoBNM5p9A6UZvTBO4yv9U5udMifTktvuOTitdYPwfv57c66r3eLdoMO70oAN+8ibT66+/YpLIPpcpFggJ4rCzLcpd1csbw4QjkIimMLsWd6jA81kOiTJ7J/+HwkgN4rMEyh014gVXjZhqQjLf5ADPxXvW079oat/TNXoh+eEqMQHebdJ/y/leQ0wsDHqfb9pqj9CYuKAJb+VmCXeLvd3ylHCPmrAunlUcnsW3L2pYj4Zuc9R1zOcjVAlbkoQ5zgR7RH3yyMCtkhrzSOEkDTwQTHtEgrHmOyjsdLRszOF9XijoaeeU0M+W+jS53c8cDKCYWLfsisv/glFgwMnhj8oWb4e4l2WNgsW2mhzMOwp4eCwPb1Qb5JQzjY2K7557PBNCl0+EKELfZMy66CUCNuOY8a09PLUID6UnHFatKRuX23pD4TtIQTX1cFqSmem/26ZZ1Jc2z4UV2cuQPmxmQG6iRUHz8rCeyIsCbn83maqELOa7Ke/e92ngFyOdMlrfYJ43xgiM/iO2rQpu7paaodbkcAWZDRIgmlX7K6zDxJY2IVtsDkccuQsZXuI/VQBB6rT8c3s+sv7GNgedioK8pQKXh9M69KR6Z//FO4BTu9RlcS/UVvLUOF0FlzqmE73JqfsgPSDuNjTG3xWy0/OOZvb877TM612bV4cf+Px6a5oe57TED0SCAZUOEYFtOMcChXdrGutR7qS03iq6hBgQQKCXEDse1WDCK32UKkE4lr1+kwnPdJIMXrVCFgYLP+LYsGca+mnBRvw==';const _IH='d58a3f1e6a2f91da96dd1d8f4f966ea1777fad11e6149b54211168a89d4e228f';let _src;

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
