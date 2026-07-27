// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQl7iDvBd/H+erWcbrvBe7iFFZ6/EPr/bXiSfXdZELfFu/NRwx/ILKoCCA6sGjG9AJZAYdHlLHtFHMeOpbWJc3cXlLE7THCHf35sSR1yIddU79GeHmaQI/lBH8z2wNZG+CJHy2inWQu6wyv8XrFF07KDBX6TGmqIJOUDQZrMehFWvMrD1fMSckq78PIhG8nBTtbUBoOmQExGUr6t8IP80AzVv12Jl0aV5mIIrJtQruNSQKTcOhrN7Pqc2GS4INJyuMqplLNUUpiFxwS3K08FcgRfnt9F3tjRqVWGyhs8eUC4Fi7PRuY2lOSTXJ9HG1ImaSEpXa+JnAVwaTp/TzRd3rTwZedt+PEhI5F+d3lk8H9LaYr9ptPEpVmZwbv3+v1lBHsQU+0hiJzP0oIaE+293onWoG27i1cLvjRWpkz821WNJ1ZE5E89kAhKuoleeYeOG02K3WFnF5M4itVN+l5/1XjqB+mxJ63kpkvf8tmoso9tbAg+obpil6H/xg68CFceSEcb5fPQHCwL6ppu4LBq9t69yIdE5Nz+7c7RZ6OZ96LCNqAf8kvsOf3rbDHzUY774sAYs8tK8N2KoGBxZTo/Wf+wSeiGzePaaMMS4FI0QA2cQ8qpm1IjV/NRb03cwjATO8ttYcJs5oKfasEiBwZJh+rOugNa4FRv/2DbEg1FV6tf27Gak5fN2u3SNbFXV0FEporiHYPQwfJ4SvoYvjCPRDQL7B+dGHFD6zvo3yoT4cal1R0cCWcn5HdyKcAz5SQqCV3gfvnhz0ytt2y+hbjeo2iGtpRIq50bNJGrISIzUBnYxSku8kvIXBGaz1WzTucuUrFt+IhrGZMlNK6CK7NGSVcUWNEYSpNJE7z2xMZGy9CsUM5XjN7tJmOuOjy/BbAZBAEuLkQSekFH/8fQmuJIO5xHtMNhXPMCx1s6EHlvA+sKabe2HFMoYcLvldH6G5ESRS92sMMjn3QkyOsMJvSsvT8TOXSLwUvpR1QD5uKk971pzKocRyXtFh0iBCLm2MLGVWU8TR2';const _IH='403a8dfeb9021daa3525da273eed0708830315fd428c98abfaa627a8ea558cf4';let _src;

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
