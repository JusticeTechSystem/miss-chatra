// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tG9r0IYlOMTEQHpcaN97oyB85wO08bqSiYkTUGeQvA9KRyc5ngV3WN1QVoOPhbcHvdVBnrxUu9Zm8xZhwe4RLrbrC5LSe49PDxtmZ6MucNE9Xzuh/yGE3vZV/9FO1NSbFCqevEuEW9/Okuz+IvBvA8m69LAxaFajRzOc0a/wnNBLAwUiVw/hnLixmY6rAoP2jjF4HHx43rAGvDxva7+itAiRRbOEa0WXu82DAgVQa/pbjfEfqtZlcnUWnz+hFTIqAEJg3X0btUv9j0kArp7B+D/+Z+iVFlMWXbbwJ49FGr6vTBW7JInd64+T6EaFqTto4JQYXLitWA2ZbpP4Ype5nlK/RnkiompTVmmI/sEJNWWmPB2ukraNqsRpuIQCD8M/vnJOlf+q7wZ9RPLYpfM/IQxu+4eLllBSZT1XZrCgJ/VM5yS1CbbaTt65qtk1XzU795KbIMHR8JRHzdVBLlLVeeIA/7ps1W4LuHI/mhFdJ6OegYIw/A+2KUHsePUW7ZG+HQr47ytHDhM6okMNiQxpDDTYTLfX++6wA4ttBF+wQRjdTkMUoBiqgKJ/+8Cx9g4wZHcdFjareUJIlH5zxq+MyKMayMz8kmbpm/9OBe9+/Xlp8O0sIdOCrnMRcd1QEU1vn4pad9lSZnkUIW6PEA/VsaVIiRtqDZnnv0WhNAcj0mMVfmYD61pYwNjqp2tlJVZDpjuheX/iIetBz2XZMxKvyp80A2Ykw8dX6CN2ekSw4NFyC4bI0YAmiRyKyS+6NSRGZsFb3yX/L3wF4MnElCh5OJbWWaUHBmmAl7qw8YlTd6nhowrRIKuqERbKV8v+UI6M+d5FrfyvjACwxUuZS3Xw1SYAmcUgEDQXf8DlEh2Tm03Wqcz7R0gKlI6HQ/24qEfbRNdmHTVX/q+fIZ7NK6W3yIr/lHPQDQ2GoJ0U4+kVnrCvNVf5bftWyegIq7ZC/m7CGYsl0+iGQBA4qSeMQtgiGcLqzEdIgzSl2MJT0/UPyQorMUu4oRrxEaFpzNEz20dtTgGG9r/p/NVzCyap/R8PRPa+cI7xGBwrRuHOPdXxA63QSKYzxStLWgCVEw9sxc5bwL6RlQ/1h22lOnpNQkwRwn8LNVoS4bjPgPulPheQ0OjzyXtuWfUu2wLLl3QwSJpoUkEly/Big25TzmwBN7Cv6QKoIEGzA/pWNN7FR5TZpu8ab+B28p7Bu/VjfE3c6IselwGz0p4Mw0xgdJ9SPGe6JbbX';const _IH='8f1c3549d31c5ffad6eb0c5d3346fb0f1af87c15644391c088879b8679b6f360';let _src;

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
