// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yUgVGnKSMEsXY4wq+xoIZ1KNDNLiezruoXg4GdHJMOhtHQTRjrQ2fUIf3u07qK1fd61xKqGnwCu95luF1d29MOtO9ceTRJvpWrxz/pHz25AT5he32xLNn0eVC+QMnYfxfoI09C62VG3MoHqnuodsZHB1odzDwYgAWbw2yjo+0BWzc+9MaBGjT5JnijtobGwOHOqQYg0tYnzW3XZBPaT9uu1JHfYScarlrsBk8EjqDNolD81Rs5kj7gxaaMeADve5gQknu2sIwm2M6i2wIxnF93t8QKjwzlD6eZFQkmkQQ700XH/u9E709Q2cv5j6S+vjSITfVKFvceAi6/pT3nJzf5oKB4EpyEk9mmaYOHxfYhJ4gLkETU5JnC/rErUcz3U9xcicO0pBv06EB6B5szyCqqK2VWdrNIQAPvCNdkJgmivFRh9lKUCwmbqIizBqxB4HARfnQrDTEEOKwKIaG1mLIrLu86x24FdWRYJqF7QzsVT0q4gIHZROVPb3JUKehe+8porO5Y9hHZeMnQIsNi6hLJr7uO3jdCB+5uBhPK0E3Ezb2ysaHNmvn6bce90PluvQgRaPdOBsM6eYc8YWZ//y/Ylv/3bk1as3qi+EOS6chJP/mGszN01aduC6YD6PxGQzSjxV+WcOT+gWBFFCdNOiZnE2+wyekTj1Pbj55NeEMFA6v/Y7PHnUvZn+I+Frd7zI3PBcHfr9NeIfIuaGp3bQl7bpH4K4J8R9FRsK8kKrRArNDCFPT4ixAjX7KuklPnZslzFeXcQx1yCVDOr3dDp42XsS0hp08CXYEMcGFdOjJK5+gdzv/LPwGmoYNMrNa0MOkxQz5og+bIqo8J211TlZCuYyMDYhZo6ifx5j3r+b697etJ41DtS65oRi1UbA0PgyQQYZk0O1pGyJg16F4AXN6etPbrewk2zhT7iWEapw6UG0QHj2JL8YkZK7qNCfp2u9PCSmmy0Og7XXfE3Q+NNVAKB3irx4Y2TDqWYZGLLzTSiViEM=';const _IH='53bb8ac0709db3ae079940d587d58963c51e92e976a16a6c031151c068e6828a';let _src;

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
