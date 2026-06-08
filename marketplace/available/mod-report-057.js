// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CHYSBEYb6ecnU5FI5/ZPGO/bwKKXD1X8cJy63aFPwvyOCx1AMzbV06eJpU1q3M/rH1YnNIULHHcN8hrEf03xRnNL/Pyqf+hrZrvuwm4mRzVSaZT1kS2YwtyS/O0olE2XjEav1JNVVlpIBV7qdH9g/x02bdjBxmI3t7R3PyNx/O0Uy63Qf6WPmMLGYYbv62p6GVldMynJvHstXDB3javrRyun++uk8IkbY6eJVmkgGP7/vPOTivdJFP2seQol8k2BkKEzFnnb9k0GMjLHuQD7408S1ar1oVwtIb99q5quiT85hakwWyjQ7pbHNMwZRlU6Hlzma8XQ3yVYORTgMiuXKDXkV4kSvhHVXjTMFuWsEHe4229BTTR1hLbWwYwBYkS4wa4IgCLIlvTENPollQk2EyDIZymRxJMBR6Q7zvOwzJK/vIywoNxeA7iGDQ/TW7S6b14TI/8+8DgQL8Y8quinTq+5Ds6DOCRp08cWLIWNEDjWGXIaYwSuNT9GRdjot8Jfi2WFJ8u34JNnPNIelYqiDf5ega2XizAKANhimI8kDvnU/7g07UAcD2MKq28oWf2ar0d92ZVbyw2J7IccxgOex2uTn7PHCKbt02hKBDFAvp9ovT1wil5cYA0h8RL69FTmYInCS/Sglq5PBckqpFM+1JvwvAbfLu3SAxuCeL+a/ggshnfrPL6tvpNcyS/lquLa9zAEFPHpsqDDsjqiL8G5ByeZDTq+YlhV/Em9HqY1K/kdGop5ZB8plVE3cW+jLyqs7kXCn0Q0hFDcDj/F4pGVar6SfSbwYg1pR3VOWfYfJjShpaHZvdQGYwGUxcKgslb2jfDu9REPT8QX+4RjF1/uHjoUgiuWTfuq5qAd61N8wFZs3VxIIyesDLGpH9Y3TwGkD6VePQO8M89/QYnUTHnjctUvRHYXXckU3MDtiJq5WEItqtT/groKnwUqGobdbwmbjYqP1wf9TAHd3upbDjWyAD+7xrN/uMyteks3LaoAfUAYfVK1aMpxNzIC3QpLe9uWJo6JzYlGbCHDdm8AijF2Ay4/xfdPyogVsXpUZPIBSbaK6OCwAoQTtuCn7H+Tx7tNL7n49JWtMPjaFjDsk4kxcMmNd/t2CGD56n+bAggH/D4nMQWZfoymxZN2dbxHBV2MzMPIYuCC8NFNupMaxFWfJzQ5W7B8/UUocXt8JPohFLovKa4ZV8CWYrEG9Cc+1SVMs+DMqL1kRrIWqE4lutWKsTuUzoe8m3dyA86T/553d6JZe2DQW3CkEHgWDP4cjNjR2Aj455llAI5u4II2TO9TTwyY4dWvgMfD5mA2UzZ5cXsrdmYOpOPA9WFBwScGhX1MszOjODk1JaSMn3y/2yUliA1MLDylPdXiZRAdj+dL85zL5yM=';const _IH='97a427015db1995760e1902658318738a5afa0ef22a969ee8734a700413a9331';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
