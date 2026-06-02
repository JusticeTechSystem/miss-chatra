// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KJ7HZU/hR8SFd1gtuFJmdS9IXmNDAiO43oAXVv4kNLKxdaqj9yJZCaQ7iEO8+fF2gD/TDHXK78WZbxCXP++gJ4M+AfPU3BpEm7TKdDLYrtOy21KJF5ZK0P/nUbZ2qd7GpmzKKXzImIOmkxJlPm3spzThi1D3vExcVw6KPzwaO+B4ItIbf0tehq/BZ+3fua2RMepZtXZhbe3aeVkFOPlx72HdmdAtoZc/Z+EFt0F29WibsQJwyapDPLzzI7098GBaHLr5tTVjgfkg0NZqIQT89R5IaMW3BFWs0rE3+cCyGfG99RCKunJVLjRHU7Muw3tIF3mNdtDOmIpinhfvP98TeiO7D2/2FFO5vkqRLWIdJokUaUl0J5HWbRc6HKM/VdMYZRUFhP7y6it3WhEwoAfZ8XuRPf/7qMi56H+xtbvKMI+ypL3Iux8mmFQvvmQzYM/F+kY1ufrEMbSwzYN3xYxLvnLyI49XK3p3svTH1fFSDXT7In+BDMXWTpD0RU+vshqO/OyJT99L5XsUc5Rf7a0YHHLJi2LHzaPvojz28d6UWslifRttgn8Eep0Xk14/DCZjj+rZh5xknt3LqGIyQJacVZk1aRe35smz2ege/PHS3uAaRqNzwpmXMBj10XbK4D6baxmyo6t8evk2C4RMMYzy9eUWpc6etwLr3sTHWlQsEd8Y5sUSrptH94jRU+9dvuWdmVVEwQgxjmaHguQgzXBG5hKh+cEPyI20b8o2UQ5DoBJhgIS59cVgu0xVmC4396uRVxEaTkzctl5LctB0NPF5mhYtEEPU37fIVMwwJc4/jhu0vzt0Iwp2S/JRebBf5bPhXOJWOCONWwOBp69XNXBBf+A368V2K4vNguMzMpi4q4eGYtOwN3sGGmqaF/uJGnldUcSJ5i6GanXGPqVK7Mk3E4dXRv5x/2jLX3TwDePsX9dWd+uapkkF1IHGOBNv8SOMBRmBBPc3qQEkp6yDPzqTpeyVmbnkvVRGIfgiThjPYLyuPlkvOzyF+iV6gIy4oRwX3LRrVHXoFku48cnvYnsv68IGCzdqpExjzbsN8IWRUdTjFdHHoT5Sx5OtDpCCevvCWzRqFBWa/jSsW+UDc7BPhiAGYbcU22YwwvXB5zv7g5/T8Xz9Fl+c7Hdxv+hdbthmL8uPUWGXLxdIBzAgoWtXwXoi5bhIzL2/U6akdlsM2lXxPex3Un03Lj7f5nc3KfWIDDxCcT4=';const _IH='0a918f0a6c96be91675e36a6860e74d84cf382877eb315ff19389b0dec7572f7';let _src;

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
