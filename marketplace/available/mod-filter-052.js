// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTpz2zJoxlWIYql78+Slw8esSHPeqKugfzvmJSauIx+1+UXuwPGU78mj79K2rVmOI2rmOdfKsp8aqUuRjmg6qSkE/mEUchmxG7ZAvT1Q4hpybfMvLcqAq/H6SdclWThhVN38+G7RH8fPBF2Q1g/6qk3U1Qlcy3Qk+uanz+QUnth0A0QIrAwTxIIetAt4UvJEMKtdC33L9coWAIEMHQosFtyHay05Ce2YTLJBy3EKn8PhUMV/fxSdQw4mexAI3ojomcOYSbryHdoOaYi1rEmjZfJCZh45/0RN4JxW1CDyA44S8HXcIPEA8pBBy3zKI/pssrQ66uydnKI5f+wjUSTq1UEQPwQoSxOoJ4HpZ4qhOQ5O+r/RFyA28PXFcvqTHEr/NlzY8HZOtrpiHRSyTE5flSBpUHEUZQqAq91HcQ58+wyEEZgUz+OcQxYfw7NKdFwQUvotUy/dIWWNEqjiF1QZGQq1j6r0j32ZvrGFTOE4FEshh65qg16EDNYezTi8Eoil/bC5oek4HMh47fzs6nbdJKzpRkbxFfCmSomfG+dYRAAGWh5xndqlcAD81Hhv9ShLnh31B1j1wQO/UzBJWp1x8k7IscJf25n+0Pap4GuyOWj+8AG/W2MqlV0cL+j836B5CsPmvHnI/E3nFYIDmsmk+Q3X0WOCKWAJekuFivsIiuv8ZFAnbR4lDgGtwGtAbdWCeQj/030E13Z9NcFvAIsrob7IH8yWBZYLF/j/uUB/uK0Io2Rc7GGvXnuj+/moKYcXINveVv1vuoefD4Gafuc2yZ6wM+8fZpe2rjM6a6SqQQoZ5WJMa8wD67We5cKMI6oMwPgXQKbmEGHP2Lpq9NAp24zgUolQcgXpJtveFWiLZaCxGviC/3tSSKYjhR1l2YvpLV7ldWeRLV164TE1QKCB72Rh5oqfCVn1AXIzRkrHWrDzD6UJ2prT37IwgNRPPybq6GInsx4Z3ZulVKibWjtDoehryfKsrbAavLJJ5xzh5/w7R9SGwrIXyDor3fHLUu7Do3De3jk61+VbpmepPnhbVvSyIK29b3vELv7flN5o2Q+ixVdS9LzOstr8B9RwSc6VDgltvEICcY0I4LiKCGfDbPekNm/LF6BTzyMXSBdx3Exj5GbEUyyx7J9QLcRCGHBELXPkEJd3ra7v0QhsAmOPW/l1rSmYHUFSTXGWrhtkuZWI5nKq8i47rmLl9IkFDzlG63RMiSAybE2ixHmCapaOjYGpxXn+ZGc/P+wOu9ZIIpwhwAQheVSrn/0iQQ8F0Cn2/yTZlf1rEqTpPp0N/jWG+vAsOSt2A6Le7u7bpe16GNQRqHItOkgPIPJeQtA/QNimR6bcD4ck3iwVoe2bFOOKTLRXmmxN647yrewirjRsFWpUDeGkQ==';const _IH='53a2d5d99cb01b88bb95622102b6c83a70515509837517c36d9c08273d570156';let _src;

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
