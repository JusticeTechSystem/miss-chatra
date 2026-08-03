// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRUtOO1gm779GedNyUa+ADERvkLEa4HD8J8BWaYxvIxqMAg7vhLVNLpFRzbFlJSQG3PX5fUc0O9YX/L5GtFhnSHvuuB4scMY/QlapkhlTwgonRI6FAWbr4F79TaWjNF3OYjcQyyAvtR3eqy2YjPWHqIBbQ6YpfPpHrxnanogahZ+Kn0g6Iz78KnF2C8ocLE1brNvH7+afu3Yi+ugP4c8Gvc3sJJR/mOblLAH4n6kQP86khnRUNCQ0FiMGl2jT0U327aIPrDIwykM1nrYQ2ntnaevXbjip+/bXI2M50qaDMtZ80kG2VYhiG3uwV/OTcvrceSo4bNTjLP1SDeOmIGlXRqee6ftx8tYO7MF489ydIagnyJ+NSCEi2oY+mjjgunsV/F6vE1e1NdMekYKAcjMQxp3GPO9DN9P9xyARAo3W8r4SbvojS6v8P6HzpDw/2hc8QuNWQSwnEIqty/1HOY1UN2slTgbSxo3O8n4EmYBsXZOWl17aEmvfZJEAP0FCmwBz3tEJtUgdgMXfvhIk/XIhq4BHvtQILQ44wfrtQo/DFiaUBPPyJfuNFVcbs0EcDWhfAVT20SktCLR72knkRDG/mqjk4wbAcIz5Y0ulzOiuVZhDN57kC+p+8KoCEES/BF6CV8SIg5AMzCBbj0kpaKHf2VWppOQyjZzcFnxMQviC60yLmm8HXbidYWtlfgCVYnzoOsRWOexCIsaRsn011EG0qNAixUrYqpCOMRvnkJiJE0Mi+xNS9kwobxMvtftvYJ5I9SNSyXjSbL7w8dGHBwB3ibBcb468lo3hPikps8V9hTDFaT0fbKa00gQSjfLgCf2y9hJCeHNjfnKq2ZYqBXuzdWRfvUPncGd4jWpZ2y6kF6uMTiWR+nRRADZQbTolfXDIxW5caZ5yuaVCoJNGbkDemtR9TUmeJ6phwa0FWWgXRgD0PKVWolxkurGVVKuU3M7xjkWbTgBD2IGy+SB4ArCpN3/4r32xitY+0OI9ksB7Ro737BSRFmHmfEPi3vi6NBnMuRseYWi2CkXkH2YXMhG4EFRtvjgiuZdNTfg/ryrpkTLaI63U/7kKIaNAJPlyM/wRi8MQR3J3/6fbDZWMlg5WnnxcmksGaNYi+wCMhU6PU6R4Tjs5XVqPKoJXBMMJkj6RAm88mlh1OU9WENWZRzth0VgJcq/eYnup94H+g003/DxGdGe1SiPMsbpg==';const _IH='3588e6d76a14ff539d086ebadf8dbb143cca9a817bdc8f29c4d4c4ddf2f25114';let _src;

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
