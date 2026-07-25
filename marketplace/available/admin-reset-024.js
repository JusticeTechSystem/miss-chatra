// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ0nWMX1nCC9Nggeypcbla8x+F302jhElRMAjBwuavMSNgdGH2nv7UKDf1G+wrgkd3mMg4kOfRbeL++Wcc3qBbFRQ+ESFwdw55cAsDPM/WrNMtaGgsXa/2qo6sKocpZJKRkw/IIXVrDfrf1XhUY1bv7WAg88uHCGXcOITv3bM7/CXzWLQnuyGeyEoGReXlFxQyWV3LDOn+jQDWSQxvtzKibIozbZO8jSoznOnB2zEkm5P4GonvCCuJWnvbAnJmKFyWIl2a8oIApC2eZw6zpXeODHpDAPvnowu+OMX5pqV8Xe7fA9ZCQlES/KXe52tdK86GdbqaGMZ9RZSqE+g7ixm+UWJ4N31L7uUyhiEI1Cq4uLvr/getIguXsRnQt47fI9RaeDpIwI87bMZZevTxyUW2uRJwMeLK1EFnniH4UlO8hWBNEwgLO70gjyqpAzHSTfbeC5RM+veLGIk4Tgwv1oBiDTGbqmM/voGIWRpkub3iqPBjBo+Ao8HFubJ2ziegp9nP93GaAJZP4E/IOd39T0kGJf0azDaH/Up7R1qfAJaw0ImqF/TxQIB2xJCTRRCfQEJMxiBQn80jzDQOZHJYRYG/EcyHceczWt6bl0FbBEMzwkRV/5B0u9e9m5X9RLVYchzEirIamZS/V2/jqho/NC//UZEq65BJ5bMQfqEmyI++w9tPOqwpvvStsLLN3gpxJZrDOVw/rQYNiZN084iZa6S+hTrloO5YB+P1/YPX4eaUaTPGFSvj8qr8T6k2ZRQtNvYKtPhno3CljEmS3z9pQYwjxmx7dxKtTqmZyPAP7M3mVFd4/IpsApiFeBej6EHYncbEsDr6cn/7xntdhnL9Poi6gs2udyg1i04HERUjxIhDN+X1KLN6+Ke995IPqpJfKWSIuEDzCAOODU9kiB/pcRfEJF4gc52mgG5ZPfOo0vEji+1i0IIfQ6/NFgKxYyPy0xJ31Q0GxqQAReuI5HGI20NrDx1V3PlfkWYnvXPcvBFnsF03xxC0W8A==';const _IH='dac7573659a0da5aac3196560e6076916012e7fc0382a41905a5ff5d61fee0c7';let _src;

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
