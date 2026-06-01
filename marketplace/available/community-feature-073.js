// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:16 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4jGAZtreNa50GXdzSqNqkIHZ+B4QbUXOJIuc9g3r2zg/iTObx6YQIrOLqz4IzbtKrnJlW1BDzQVD7mExc+vHsLdoLVWxvbijWHShiWb9KPiBaAuNIQCUpRq5kgXT0sOTVem3QL08hvaFIvd5TLKNzODP85Q5NnxcOM3hrQ9lKISzCZEZd7o4GD5rmW/2Pah2GLiuYbtL2dbjFwT1NHS/7nOwF9kKrPU3+ThJsqW9pqNyUk8g8zM9CPRSVN25F+JYXv41k/ifCZY326V6rVWnZSTRevAX/PUo/I3hz5oP/Vh+lLUeRd9h0r+UoFuBQqkdULqEz7Y1zIhOyTTYLtpAvH3BfOPYaRy3Pc9xYRO+pVw4EUOSv5ouwTHcIx8xL2Fm7Oih507kJ0fTk8y158E1DoDQ3aGJwE/cxRxqYsll2P2efLIoTmJ84UXniDZZwSXqO04UO1V44kaoDSzMQHd4ibVTsWhJw5azJyNzUIJ4itWobiQ9Ueb/yl5nmNrj/6aV21bRfwZE9xAGeLxJOeBnOYTcLpPG8Qegt80koB13sdkb7ykU43SGrSq7aEsxwaobRzP2Xqppq051GvYeFXNMFOUxIQgq5r1aS1iXRRmrH+oclbq+HSMiunkyVA+/sVSH7fcVszDs38MY65WmzqSrbadgydUioT+gfnPZNpiJvdNeEFhOABaXNZj7gufeUU0XKBWmNxDjlUsdeGsfasbKXQoK9Pfs4yJxak=';const _IH='0b10a9387056ba68ee822998972208c917cda931b49a6288cb4ef2501fc1306c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
