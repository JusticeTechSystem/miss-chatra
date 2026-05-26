// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7f/mD9wr3YjDELuPW/Un6BA93bUeLXNUzwTc1/J6q39ZzaroHto34dCO6rq/5s3nXouujUhx6WuCd+zE7QsV0NkyvMvjQwEDre+ex/0eZlXMv8Q3A9GUgK9IuVoKzxmyYQv8UuoxzY67nRkp/A9kRloRRKjnyw2spzzDy1a0zjFor3DAoBMR7E1jkGBWT4WBq8zp3y/RNZWdzZb/xQnGCK5+C0u84NzT3SF7LEIKHul2tDAj7NFnZTUdWdBn9QJpK3Ui9EfdiPK/2lanqVvpGKsLp8jhW0ebKkRt6eYS5S46D0m0F+gKADPu3qR7jbkYeetJmewUlk5UItXpnPaFHR/voxAA5ZYhrQzozQ8ly+n3rN8dVOBEcOuWbwWcTpvFp83DZgjYdKCUdYSCS4mELERTaEF1UyPHEryU287FJj2cilbmKK8YDi3b60RgFKzw5XRQbSRRSR8eobGN+XiyJplttUFXJZD5QWMB5MQfk742dmDIw7Yw2s+/teh1DooMAHdSHzK0cZy30KyE6xnjNoKcCVp4b3gzh/wKHGp8/4Ev3Q/BuZUExbq93EDW9sTPfWa7KFUGqEKhoPqG46c5R1V8mi2MszyC092QeJ5Z0VQKXP1/2+wL44dbx0PYwtVfJZxMHEOYJC1vQBRRqsaPen33Wd6vZBAaY6i/a3p8wLFg9hwYwqd7iVZrgejAoBEUJX0htCUW2C1iTg4IOmvF9ncR0jj9iXtJNWng1eqDinY9jh0+X+FhO6PaqsZVwPPlOIK1gwmXsNMqA1W8jrGE1Onse3FSK4k/h/+EUEr5oL0wY8XMmn0DGCR75Lk/1nmknUk3+f5eEQ6mwjY+YCpBOon8Zp8tl63B/azpbQ+U7cSzp5cWLelGu/a6OBvAm5EPYZzuJBCJ3+cXI/jQGegZ5GhjP0HFNTqlhNvLeFQq/XdW6ttzuI1BEs2ngsD/CNPmZGfiYp6YKLZJmHk/+5d8xV8+Xn/i9pH9tDbjrM/9EflDNgociW5tsRxOT6jTfy3/VmopVGLbnXN4pqDdhXdNCts1BuiR2UXpPgjz/cgW/5/AdE4usNbl+uLea+XRX25mekVqFHIoW4Di7Xvapx/sHnPaemqqR3fiSp5WZ80ubh9vtfopGBFCiOcqPKP+Uw6POfQ1SOGdVbS8IXwJN8wfRuERGzbwra8eh4LWfL7EyHKhvowKe9zZXhAnmG+wSgeOKWvdG61XA5JLxXJ0e/7Oc0wrkcOF';const _IH='78c4ea116ece7f9039076f7edc3bde7ca7d8981a18c398804e68803eb11357b4';let _src;

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
