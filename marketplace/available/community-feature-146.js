// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQFKrPykVvpCJAjb/g8v69YatUHjQ7eW9gu8XJ0RvghI7SQBRMOArGhKXzrAaXHcR3rzj5QtKJ19i8JDJ2CGbJonPV/t0VmnrfQghd7jJgSBKFgSLxnIUiyeMuQmLWc95QSkzxzPOKtRCiMEXVUqhTYYgC5orbJazPE6zKYEgGpMzy2jqoApz1hYYc/zHKnm1VNeOLe3GB6GS2SUSDEVNh5IIaPLSjrpy4Rm5IE8AxTITgKg3EhsbBvdK0/GumGyEbJsk2ya8/oy490SV83Vubs890NODYac+r/jLROU2tDbaw3gVa7u+HuuhIf4i5E8HNAhnOkdFsKYw82veiUv5w7Xg4lEP2ilNDYnmEHqedlbeQYGXT18NcYY2JHRNP5U38RADmPiJdoKAiOYMgAEs/is/d8lcCiS0mRP4qt/gxYPj7EDLVP0oUhUNiE2dyOPu14LJQEZvVPJT8K3HxMp+cVbN8YXH4ICPKAuKReGzS28BEPjtIWFfzQ8Mf6gX16jW66qfpQ6WtOttdEkGrxPCeOaizZTsIkyezUFXCbkDOq59yyD4c7b5rXghDAC+DC6Fqky6HQ1aF+iDmqstrB7n2utC7hZEoD1eIf7AjGL28N+1JyigfQVfasiIC2Fn0FUxmuMM+dm38ybXfTY3SSWIVX4bHk138oVtAd5ek+5J5iqFj3prT/+uGbjh/WD+jt2HPRAdU36fRjkY7z5bPXSw9+iU4WvA==';const _IH='96ac0a1bd59ad2c4d538882b2a55ac81101583b88542e033f18613e8c51ed650';let _src;

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
