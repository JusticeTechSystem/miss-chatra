// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H34CQQNb7TsQ2le4SAtTgaUCDtNvm6lefShZr/BAnegyDOyc7OMqBBZ0CvkLW3HwdynwQgjmDbyFK2uWo+cKwYnH6TYbVt6gI+8IgrBXaFhP/Ow35QTDVqqfok5i1CHMlHUk77kNuROLwC/1i4HbrUn3y3bmXRLhUymU5K44FFS6WlCN+vBjTw//vOCEuTekhXKle4OThGd6k412PkSBOj9sWo+W1ih/smp4/zfnVAXcqm4LvaVc3icHKc7drC9bLq6cIu7Uuwv3C7BK3suuBxrRdG/LiXIz3xGV5pr3Ri32dsubKqAFEljikaDPwyDWCLkVFvElbd/lp6QXpXqLhfgsEu/6e+yJV6OASOKI6ZVo1m719UlD7a+4WXFsX9KEf1avvPO1IGRToAzwT2gTkA/4aCap2kI/5pjfoN9eonzsMuCaH0yC1U5tasvAdWCIgMf46qn2dhdT8cGsHKmzCyib2GeS+V9bqEKFgmyQMfcsmOifJMHc9EoknZkyfKN6iXO5S5KoJ1J/6MlMdDsFdB/YIZiTvE+I+dkwzdZ6dLjPQXyMJBOCQN+6pW4DLgOw5Di/ceRUtMtVexvoDEmUUjMEUpTiBU0zEUoheaOMwjwCpE9SsqYdN4+KSdqQG88vhG9dB482VPjWEcXvR9RBmquwmbGjbZa8w46eiJTz/ZixZjPKuRzGvF/jtZx506nQGj4AEeKlUrWe6v0adQBMD9xi0Py1DyI/yxcXtRPHpXTFnQ019/dT131tBAfDIcQpUl7qDTmmv6nRlPQbQPzMcBcQlKIsyItzp7cm+n8nKC8dIwNSgBpyHC6dX8zCYE6VJEbCb9jvOpdUJYvVuwnVv8ESIQMdfJoC5TGq/r9lGOwI/82gjfe3CFw1YR9MTC0lTbFWBEbO7sQ1TjoYf4F2S9qQ9uqTuMdDur2e0Sy8UXhemiiUq1oYIfesj/uV4LTKSCmFhlMrQkmNPhdBm3mlfDLwxIlZVQ2BoRjXkSCiaal3x8Q3NGpSU6So71f9mudjnlRqydsJIvaRbHNqF0K8MW4ezC1Zs6xkJMOaViNZgGsyW+ULxZdlfNDQxIeP8gQ+H0ozX08wC6IGBu5kUk3ziOk3hyLgASu3xoWCzNs6CLkHS6IrVSdZGlPjK62FMm3NU8CbNh5No4Add3DyHwtY9aIiaYwH5nF+PnaPCXp54eezlOJWGBbbRJKUDBMrwbx3x4GGulSiDZSGG0dzmo6J1IlwymXAkAbeMGQrqkWlyKtd3EP9AtvkqTEzsoa8LdBhxaeiZHZktQiUxlfvXCIHRY3FdV/rkJwc9ZSYwd1pF5HwXwITYUPb9jlV/j82DKwsZOxcweuB2rG5rtqTI9bziNyaEyioT/1vC+R2Fd/o';const _IH='53d9d623583eaef96dd555f0587a3d9093624fbffeabf69a726408da6a077236';let _src;

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
