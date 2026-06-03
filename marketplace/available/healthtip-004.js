// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='29tTrv7F3caTjVfoKdME34zZ11wbFddF/e5Fo3IGJytXqP8MUFCgh4656C8wLiOLfsZKbhPM88I7sFXj1EwY3vQ4PrcY0374I+Im4+dqVz8LIfTf7peUh0uL490MDrCAbSYvSPIt1sqydkhTTsbl7ZcAky+kUdcAKmnUGn6QrpFo/TKSiqMsCv0JJQzTWqttXcd0Ww5p726uMJ4ELRXjc3cdqnt54kXpKXsNxH8yCRUSGv1J3gY6YpWtNMI8ilG6BBsmMv1lGGbeif3nDPbJkHkUJhi4/u9Dy63apj7mirqjCRguCyXphelcjMNJPMhhMdwXeQpvgMo0tIlh1DfLN8Dyp0CZdt8iDetWW9xdrvrM8Dp/YCOTB0hBhULTe2/RCCjHcQO564+EdTp597V5T8aFPeL+UdwGWQaaiMgVeqW07ML0P6j8RdwOCe+aEcGXVbdpGhi3GB1Y+YU3rd+KS5snukXI5/5tpK4VDc2aNp3vIDG7ZSdHpA7wHxhZqxpwZBbORTCJyjbdmPELoivz6pCW1nb7ffqQS9JQw3BdVfgAhTTKYu2ppa1uKAVyBb6faHx7ZRqYjrzoBW6xf1sQfwk8xNDWjHdG9xNRqxXrLu8aYsKVmSZRDklZ2f7VkHml7s7N5RzXXn3219da+41FsnWLgQbdHICkoJrq07ptz7/QhuWJS/qSupDYg79JKD4LDyQUgApjVbtSpvRb6Av9L0ZsAOPbAVR0Zjs2S4lbB5blh7GBcdtRuXZ6i13mNywm7PsAE3CbDJaxJiaGQ6ihscNHR/t9ImJatLtnK9XizF+h1os0KsC8RwCgtGBJjdJK4MRh3pHTo5Wb49Q6hWmvMIrifBLFDLgmGU3Tgd7f2BTReTK+uru9E9V9Em6dcXUzVretSkv4kux6j8TPmzgM4FjqGj1NP9ZPo4McuQvKzJph4QXoyaaAWA==';const _IH='272274d259a6b961ac1a99b5fbdd4d90cd4bd7cfab62e3c979c508c07ace0dd9';let _src;

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
