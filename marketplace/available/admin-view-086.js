// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6wsBnqjh3Jx/tWYkvGX6IkcvBcb0x93OaohGOPRX7PzJl6DS+3gXE25Nqb64XLkcOG9gp51Dq2t6mgeC5KFddp+cSGpqEs64bubht8mT6W80AJTRytuCKbsE/MWy0e27HFJg+1ZR/wshrwbONfSStgoMQW6kvGX/6h4cL8EKNHCRKEEsqCRS+8V76X264pzxK6shU3UssyOyH/DTfsbFuZtenQ6Fm4e05Dqrop0hm3z8+8W9ej4XFjVrd4n4pRDnyymHKHLGMoXf3iHw3mGC9+GvSeqD+YzTL+bI6sttB01FwzvdSRn7GNV+usTo0LM0sPzYCkKV/3n0g7dlhgP6S5fLIWAUrj37m4TV28sIMvyj31BWOuKtKvk4EwiFOs2poB5pXw57J/afG6xN8d67sHUuG/zNu1PxUIwtRU/3CrEutedO1EC12fKaCT9T95V2CfXO88lkVHc1jXK4f6YcHnZqDA/++ZVvexfS2RuaZQxmCNYqJgWb6oJiNqqFK4soe0SZhGygaEjlAChxkkAxpSD8PpaKlDlW3roi2HuxAdbwKEzBDQNIS6kjdT39GWQD2iJm1IXTzgClWPWGVP+f0/aA1eTRB0IZ2EKXh37rEbJEyNhl16qkqjT6LGuG0KZlB+qWw1CsGpwdBRN2KToPJmIt7Ns5oIWJG8vnQ/n7iMp160N2OFf+jRyoVbI2w87xSGfXRUiRtoS4YtiUyNnaK5+yGI/RdnBiEsEYsCe9NCBIwUKchrW7WpeW7T/fUfpurjEnJAe0Mh8/cN1cRL//7VGt/hPWmCHlmbPXwCSJzrIj0DpqJ8Lvih9M1N1zoo8rByXNO1+117gmNyShsaPsBeznu83P4HpCkivwSpL6+2czwqMjLVEBXlclslx2Mr0RF4yqscbs+cgDP0ZVuuX/4c7w6P/3+hhJLJJ5L+tFIUs2ms2xCPnqmB7BDsLRnQ1jTRFCrIDm8yggzYtlx+1aMxBXOy7gkJrGB+zX3d+3Pg==';const _IH='6c5e3a95609fb324a116b8c733cb4a21f5130bc62f3f121e5a013fb91efabd83';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
