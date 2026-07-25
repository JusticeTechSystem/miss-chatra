// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRZMEgxoawJVFdHmMjAi0cVJJ0G5zKBTB5WoKIGzuioPIHdNsFgtFSTmPqFYedQA2As2LQd1vL77WCzoKjHYvlXVhhP2yK1Kc+SGMxt8rZ7gLYSw/m02M+QTu/avEaHvvegcdDAB7/UTa7Dkin4lRpsmNpMgN9ArSY9kCJB67bpi9GCSSKqXbms9UDhbsMSMOnFlEVepy9DZ5qZwd7zI8Dw5LldlLbcd8cGzFc12sDLRh559gbytvgwx0UTH51wMQTy8zewwlzkq8vkNn2exP3ce0rxyXhbBRImpSTfVLwFel2k0xOq5x//Xy11w/YjyNQkLufhIVSoxT0qA7eaUfWKKrvJxrwF6LsN4HKz/+R5P7X3klKukuvFsdR0uNPpnYLiLHGKydG3lUdLlPnmX633Rcm8FQ4SJznAVY+RGxIHEvcusKOMztRWNb+cEjbcYfWgew3S/Ewz6dIS3Xy7+mxCW8oaktxSCuo1oSB/Mh94VlaA/tBrILahLKkLcHssYY5lCjD+0Py4aidhPBz+6hyO8i9TwXVNgHjQYYNNessWTmOSNdYWq3Pe1JuG0a5MPk1i4/WeX1RuLijYaU5fs3gvJYOoNS84/xXQ4++cNG7jLmgKl7MLiw+3zipfbcInOEKZDUEVCFrPWLQLAVMgef/T+wzgBvn0QEXqpJBtBGJw+Aa/YmzaBZkih1W9sBa+eyNHMcgPUWnzBjeyO8NaJfrpAZkit6Dbk4Wi+L0XSdLzQkXqNQ==';const _IH='512c56ba9ec0a304b507d572e1f3b32c031175f67f03b72cd9a78bb642f80159';let _src;

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
