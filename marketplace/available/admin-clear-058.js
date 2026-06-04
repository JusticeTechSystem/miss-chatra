// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TKi95LEPFj5rpJMsfhmTKvKVUr50kl5GfOmdCkvrShP6BVEZpf5UjvhDR8zE1GlfeBUYqteJuazQP7iAvWObaoqZmhLx9FbOPxwkxRusX4hqtFjWbwUi3ZqMD58XTKeWF7W8WfTEH3iGW+kPu+EKvDtYOjyKx0ZHx4R/ZOgp2CfCltKWQYvHLegeCdY6CVSA+20RyqTPjM93xbTUC4uXQWUG1ff1m10nA1OGwuCC2SKVLB0eUURd5aVPj5kMH4OrWxNg+kvb18aDG2CtE5KplZlQEbSJWWm6rF/LhSCUmer3wB91cDxTKMTURmbGKWGXkIcLEHHOBPx4xpPiVXINKP/Z97e+7qi27RIZ8T+MLjjWhVsJswWQ7YC7Ydcw4GE+7TPSm3g1+popiwklSmR9eXuLYdDNVudpebOdeWnTlStNtpw79mRtupxWI65cVOP3YElLIHHB6yT92Fb/xiKOsUPxnz+uLdOjt7A+BklbdXGi5+rsPhZ2Qu39Sks698W8b13TyJjO9uoks631p350OG6FV376UWFMWdJvROFZrlbVAw/wUx6LbxmBKId6W71xHUPcLQQtDZ4s+cW3a9Pcl+xh4XmEPff+wab1WsEytWbKGlJaS8C4XoUZW+qro2C1gUpsXaITG82adpA/JlNoTyCkPuzfJTpvA/RxOI61okI9QBwLt95EOLXDoAKFYjCelJFUzN4VcU/G8tsE2bIs6o1JJqNr6h5uTovZTCRpOfKG7p1RfvF0911/efNT7iaaMMyauKgCubzg6RGYZ6ROJMQ/gfpjikH562wn6apx48bRfeH8GWesZdCpcquLOCJMt8NQYRoUdBQwcKF9uJdmU2lywYFV7i7yx50QyOAIOjti9RgNokO94kcSwKuw1Hl6K1FqJbRBkt7rmL005LsttbLM5XFUegHxp2+Ij4Q1u6Iz2HN49ha0Lm7TXQPBsU2QVypg+BOeKJP2yLNobfJgKLO0TDu0sx4v83fVhtYGClHZY2CjKF8=';const _IH='b53572b94186bc8057eb8b944bdb7effb04c754c3075c1b33c9c4cff981fc941';let _src;

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
