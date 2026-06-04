// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CVndp+05r7ClZtm2QlrQthX/fprP+BC405ZNdBivU3wsh5ddGA5j+vvRSdbMeK8s3LthrWxdCIN6NSdfv1rSu/YE06pqGJ48qJKGY0Hz0EPXjttkq/fhIKUIk5/hopw1EfVNQaOFDvK8DEGmTqpU9IejiFVCvc16NG35Qbsg2nTvkRbK/8MFL0q1qX5n8a9x3O+DG71bNhrYRec27jnW8tTuAxbCdIWn4Qagpzt9SuiB/NK+QoJoTm45+pGsvg0JfHt9rWS3iep1GeQl1co11sf8IZBAqBNhPIsJgUEJ3JU5IVNJaBVQbW/qYP234TXGoefetro8qdB5APv9IjokQSpau0dLsqVc+Ho8eQicGWTsAfSU0N+Xcz5BcD20DMHcr3bd17XHl2icp7/ETwHSviwF/XxdybDH3TXGQuod19PKBb+t+4cWxcSsQfPiKWx6TkchZYWEDbKlvkL8UOZzWZkU2xgKB6QPiZWiGhJ6wFCwBc2mpsfKT/83acQG2ltk00Kd2LxzOa+P/azLcm3N5nGl5eWvU0LODJSx7QBhBg95+ILRANyTzMOwGuKHVWbAInTEsLgumdnjHfa8SwSwTAfyI0hPQuCz6L6MtuKoEF5u3RuAhBpGJ01/pfUQP1deKHbpEFnACM59iy0WxnK4oLFVCZKstq5oTZfr41EmZ6wRLdK+0GT2qfSzPPiIM+6iYM8I/En8O7mtZuNIhXyVswNtTCk9Urd4r/MI4ckYRyAoP/IwVuKSCJ51G6UQB/mJziNZDn2CwVkoWEX+Q8AQEkrzxAfevbvz8c/WEsQglnIyY49EvgUKSicxQqNRK1gwZInS9dgTIDII+iSoAdaka6bHJ0hhX1TPO2fRDO237IYh/HBSRsFTzlNkaIXtfCm9kKA0vKo0Q8XyxNXKxD3N6uF4t3gRna+s0ND1yZF1MNsrp8phFkIPiANfQlj7TQl+mmZtMtVJJmtqjFpSAMth3+UNxuwjSOVYvoFWQUAQIeTwtstb1f+bBV2FM4houLPRec8hVt11sUD2R9tykPVLnQhFoUrRkTz+bXnIoogJxxbR34UT6V6bOxdmuj96sdXK8buUnBtZl4TJPML8U42edpS2armHf14MPhL+SG2A/HoHO4LW1Ttoa9H0jmp0Bf1Uj4prijDnWXfSwUDrU5U0jKMEIJiyg2pZX9xP/5kGbXQ5hEiwny7CB4IbQamB7qkkczCKS7Rf+GmZ1ZPs69ZODoQuG155L2bdy0aqOnwE0b+yLe3LBqq4xsfcy0UTYF7pMhC4FDvx32Sy5rzvF0fDw2g2ge+dt5Yb6OkVV7eH13MnbEMkuWgJmF9Y+6bygMS91gaSZ8XLry0AhN69WaPWVYJJVlvLJyLemG4JPZlzE2IEAqEaQ2EAIA==';const _IH='cd2d92e1a8b58c7e7d9d087e63789b7c086508d63e43ae4f6a38f0ace5bf6bc2';let _src;

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
