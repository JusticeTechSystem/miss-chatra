// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTIhNAUUZviaSxAI9cEqG3aalNIGrEsOZB7stULRZyhjThFg3GnrViS/vJA/h5/Kcq9b6k4mP7iX4xDraOKRRGNUJSeHDzsxQgoiL466wLKKS0gweyEGld1wMWNrC4UzfrmV4HsQcxtVY3hs8wxhV67oaDmLqzvAalntRoaf7DegLaeGvxg+0lXEgL9UMdm67WsW2xTCAad3tdDyMP1em1JPUKSBNTLMLSnpcR2YiUcXsv4MHAccLBDb/YmWPzHZZYEn6Cfg+8dy2GE1YIYQQruoxlHecO9jT5Z9LAo8pF27FBTkdQPchzK4luzFewdFFg8eiriUeR31Eyb7zV6EsQhm6Bt9u3ma/CD2VkoqunKssVD/CifqCQnkNsM10n6OdEIfmLU+PhrS9I31g1GIau0vV14E6GAS6OnS6khJj12bZJYxS+ow3M9UBZo8Zauoroc/coBy007WNpCLwC3mLctvHfJ4v+3mDYzxwndQF3zfgz6vF2vT+rFJve74a1uEIxXWgY9/gwhQGMHA0jOcHDKkgHyFWnYPcsytH9hak6Cg84Iw1pm67jGJjZKff03i2hKWawY0C3+lQgXv+Ww7dvTtgjuw7rFQdLwh+1asOCd9tz10hOBR3x8xk42U8fwhPf8hzxLndlGBtvPoXtoLfXeFfF9RxBNfYCnX/jYqc2XRNu4vwUePERoB5Zt0hMO754hF2nKZeMY0Qocrk0ogg2AYWXU6n4xZFlv3w0Q8FtnlpvaXu86TbdsPbK3JXJaO55OJSL1krPtFch0gnB6/q1BY/5GQtZUKxFaNLZpe6K8ZuB6AGe0IW50KXsb6uKGwO2KzZFdPLY993MHpx00Sa48C291JOMM70XZPSNvva8/9rjV4Kd48A8j7q39a7aN/+YEBZIx3iZfWNiTN/vwlIyd/j3fOY05u0c5Z9fjzSZIBfJxkkL9tEwmqGzxyFMPb+QfilsuCJz8hYkijXWRYcxlvzUhwmlQRqgloZxphxAYyJTbV9G/NKcFpiCLaeo=';const _IH='11bd64b4a340dd208afc0285035b402389dceba76a595b8b4417c9e8961d5b35';let _src;

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
