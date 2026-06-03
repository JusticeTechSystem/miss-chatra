// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n0qW8CsrT9Zg2ixanHmCyUMYl8D7jfGZXNZR6FMPZtiwQLj9tnUijt4xVIe1E7juBcsYnSrYkJC4jv0loNKOAIEQAXH09Ix7mIRIYmSoXpQQ9TTbDyruPWv0BcxS6HvOKQ4C4Yrx1EgsQO7MaBXJh/MNyhW9i3KBVXY62i2JAPw9s0PwZ7epnAzPkZEgRGeOsNd9VGTrnisG4Pqt9BIdbU0oSUq7deFfKn303lsphqlcAnkM+fAW0YZ6BhxWtdl6T/IGVe5o/5OIeN0VG+Xmtc7zHQsb3GoPPuVxslFXJjxlIfj/NbZP1mGWKw+QuBvqdUA1hQ7nEnQqDTM5O0Ni1irvgv13dhN/zccRYTUeAdN6OXZngwbvEy6XUVvvsXTUPlX8w01kaN9z8jBmNGW/wGTdApPuQOuSf4GEuyXaHbN7EIN6dhw20EzhFji9hVFFySSvbAzpVuRMrNcx5F0ae4BpgTxTZd41sJ9jF3P672W1bjX30ZXiteBrJMfngYRKPKBCooaLkUhdDOMbxveK28njho90eCk0uSLheHFBqRFtj+SW8fCOiW+0kltoMwU98Rurepn1Z2ZMVhBGyJwT5Zf9Hq/maod7Nwgn/dcPXMfeS25mIgw+VKew1tudWCaOZOjhUp4YBfyF4uHNlmq5QsmYv7PALwKkIS/1pHJFKu4mKcxXQgGufM8DfJgrqWrLOHYOmMuJ5j9XAy3uZ4RT6nZkBP3AiqIZR8EcIAaMqv4ytOa6eCzQ6pIiFj3tkofUaqTT3mdPPotgVMTrQDnZ/IQ3AWd2WXDbTkZeF7BbBdo6Ok/vVStdU5YqvQsMru1SQwHIoXqfuMjmluVrGOrF8tDB4+tmc6rAEVIKuN2M8hGfpmnZykk9J3epU2CV0vxZbN6XDDlQPVzQiRXLReXtyifzkxveIPhvXCJwiXPLSTzMU+U0ApZAgvmLd0vPeVKvuYBHMsnCBx8Xz47vJ/50WPBNlgwt92TEEfxgMs1AHkJ5oDos1Dq4XcFRAK4BhxP3jg/sizbp28x3znnfrqK5pRdWLPpgIkLHU/dalNLDoY3D';const _IH='10993c30206f1f5d87a338baf885c3d5c2417f398d89cbfef28f6d67d661a67e';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
