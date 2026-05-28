// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DbJHLPbTVTrs/rG/fSOo7JclqRf6+Pz9lWBwVS4ZNXs/cfXMBL8dcfnsXZyVmVgzP3JG31yxo8AfI/VXjBn7c9euQd7W3yfNw63aGFan9FonR5eq7S8mDCsh7Raro7WCnvqRTF+oGJ66ob3o5lEv4XBuW6X43cbX5FdGUUH6nj9M7Ca7gs8slqB1pG3YqHQkUf1ag23NHqkoGMbcVXJ2oo48xcCpRp5OGKNmGVnPX/as2xXANltycWRz+ftkZleRxwRTQwT6PfsCjeBzWZFECEpsGuwAuRmX8X+kW8Tk56imxUr39XEY9mtpwLBepLAe2b25RW1N3NHi/GdV84mHRCYY+ixxrPmRmk0FBuoHtfmGmKk+D7kJMFoV4/rBCXTIm77joIuY5nj6EK8xjvZJzYMYLHRFBCZKXCnZ2pMKOlX+OPm+Rta1Zl7GgiAvlyl76EEeCdj/W2RsEq+gyZjF6+DZVYfsuUMb/7bMo1x54C9eHNEo9tYuVA1u/PDO+zSOnkJkA+XS+xK/GSAsqi0uq2fH3H8aCHFD7InKVz/ZMKU8dEaxKQ7IvAIb0cEKb0pJNTLirVWA7iJ3Ow0dUu9ItdBxQTPVM3zrg0aqBeYYWTv0I9WlxLQAdfwjbRxsaleQBKFgRmBX363dIr4V4iEKKgJKgwCMS5csqe6ggTk1Dp9cGExfo1Vhwl0WQlTsBbKQ4u68f5v3Mwz9q4bu4CeCI2s8jYA3rYFGXqljXLXmNmx9jqpoy+/AiWU+mp8/iSTkN5TL+KyqRdVpZOR6N0I4eIGZw2eFgm+hwDYGZyPxC8f2zp6YfOGh+zchU/mtuEq0XGCAE/brw9PPX+nM6dOynxgck+EMilgOUNPBmztF1LZ5CSxJIXXFNtg0FDopzRDdWU5eWWpdDHrtzkuaVfVJD+QYuHdq/3Ncu6fSiLpOB/h8HlA03wX29hWVsNclH3O62j/qfE8rXNZcpkf/i0DvZOqiRbWSt9tv04d/7D2YENlTdPt9WVDgRQ3UDuKy5Apiu2QTfcjjGqCRMm4gJjrGLmuvVKBqO8Ea4jZd+VRaoEXmHQ8bHWKVJkW271JQ6mIevApR/T6hDsSggPwP9hNmU/NY2QnHZgH0qgyF5v4+nHtlWSa6AM80YK1EHVdw93fFIdwlZ36blUA299AVEni6AWJys+8Sa1dNr47dR62PPWufC0xMl5ON5eQOCLaG0z80XM3sCEsvuH6aMJ/0/eFeviLP5Eih31Gr9nhF+A6awOhOgBfdcuDFg04vPtc96aaPbFniDK5AdQGk439BSr6YvnjPs2v97BW/TjM0KN4KeibL6YvSkQLM5tvnJUWkf7U0tq2RKUIx1HN/bI7q6ev9USptHB5Grja9OPNiuUDp';const _IH='2b4988e24fbe7be981d1fc7a39d3d7ae801fa3a4ffe55a364e70b085de3cf2b6';let _src;

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
