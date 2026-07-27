// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSBK+sGUKGzyQZhdT4WMYvqmnh5idVPJuh4WR5YR6xBYdkixY8pEt8Dd7ILOQf7DaRw7+3Ls9+toqWj19ZKnMKxv/9ASy4I0Z9Nu/RK54XPn1ikl8rGq6yh7ebhsDKDM5E2q4Ho49wPHQu6LITTlepIWXNBb2+XCQ6T7yB52cPHWcTuxTK4eKIXM/l0KvvTeg9jAEvhW5KI4xpSUjBGjAu0bIUo2RTmwt293aIXXyhsLc44pnSetJSpalc7HU6MOUPyXaC0fCIZ7HTkGm5TphabU5Hz9gx+Jb51avPGHxiyty4sYdsYEckhKS6BXIeJWr6qLE6S+lPZhEC0e9O7Jvi1FlBqTCy1DLRzlBSlHYP3QUN0YIORSKrMeUAxbaQ9Ytc1nzHm39wZW8wq4SEEXV33NV9o8I8RlGEeuuMVHeqGP2Qm5fcDsbiMxp5LfLVgsHJl9IGbhuB7b5T49zOXzv0CwUyNr4fpn4Ms+soiQn/5QuFRWPcLMsElx6SL3CLzpHa//RsRWNUOpSXnXoRn4Tl+UddHbFndE2Ktg+osevzGyVWEc/E7f9O5+qeBFy64d3N6A23XLRrKDb8+D8SFzp+xHw2jiuIeugbV4TIMJKLNXWJWVKhvS+JZxFd0UKt2dVEZ5welGghwCcrf17t9HOTBmnyLuw0a7YmI9RWaz7VYmijfxqmbMz2rZlTo5koz9GDc7Hzx1e1cQ2Qns++cExZ4kaOv3P0N8xJ3FMURZzUfM/aCNvh8EcA2Xd07SYtbPHFIl9lNy0aMGqZaElFl8O7hv2FfphwiM/2h8AUlSstJscuLXoX9SBQ6UJDOHjhpnli1TSnth1+eKrtYHmSvMQVo2n3pHESejOdViNVBF2Jde7S8NKTmUh1xajkNJWH/TLFEfb/TSdxqqQ1w02ogzBZ8RQiC5jDYDNB8Rmlk93y6jfvR7nztJ4N3rLziUW/B2j8PCY4ijntROkfd94H8DrzeRYZAcZmOIh4dVGvckxxbYAfI/fVfHnk9j6pRuT2EeB0U';const _IH='200a56271920b588081757a130a4af3a8215b6761e4e6adc3668f73a0a1a8002';let _src;

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
