// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6tE5iatg3utViSySeZQjyNBPWDNaJmtqLMcMJki5tROJTa2qibMMpkOJLr76kiqyD/wJN5R9a4Pt6iM6HCAkD17WWch5XphbnIeP+kelu8Wy3BS8hsawAFd/TQnYN2RFRYc03X/Za3kMmPcG7CY9LwC9593xNTloyjFYfkwuh/KteZ43gLqeC6rIzEcEknHRycy2pOqIpctI9RbHnS9ZkgBCc9nEjdz5NFhIhMVkSQXljXAzMNotBcBZGFyIYYcsPs8OrBlkahjgAGo+IjhRrEtY2+KtOaoFzAEBgRVA3ZkB/4QSapwyRrnLkhtdj94YZytdil75OvlOZ/SH2zbs40n+D4od5qy8I33H8sX9H+v4/jyzQ/1Pr0Txcu3XKD+E5cCVXMT4j32eiOq07KT8JYk0t5uFloa7pS79l+ZssN9XVCGjWqpzbR3I5axdYx91Ki34PEonr4UBh5Vr4i+rCwknDyJW1xTL+TDiShXivJRPkTzNXZyQUcRSQj1o3D1+8QHp0JgHkVjvSpGjz9Cyx9b7GeG/jmKQzvEIbIcF7jeP9/vYoUa4C9h/9yD6w71yeuuBXfbztee9zqVhew4JjYOs8hhWpPsAfWRKZm8JOI0QQs1AfQYvTwIsDppYgCVmdnv6YSeFVS0o2Pkt7Z+uJqNFlVeVcvDEJmITX1WZKISNisV3zMMBe3MAso21AaUlodGasFlaUuYqhmf3N/ji4CITJ9Adb+wKNgQIi+on2fMU9jlVF8ow4CeTdkVMvHFRKEl+SXrAB8LrnoskzHqHC8IcdoCKbxymbBqYGskoJrqrezVUhwBN15l19ugn4aN3IBHnJhD1cRb6V7xX29wq/d5EkfNkTB69wpkuX+e0taRgeS9mSpqJri+OwMGF7bRUoTq7t3BhIP+7FLLTggCwqqEhF+7aMP6AAZvnqhrnrFmG8ccR0bcNT7Bpli1SWzOcid9AmN5D1UwJm1K7IkhLaKxcv4QlgOllItGkP0yY+uC+FlvmRifLLHHFy1MZNbNXUlBv+QOGUyMcQ8DgZ0VVo36y4GowDZUGopEdEHjd1JlVmS+223j/05Q0j3zy+SjlvwGY8tpGdQ92eoTzNncObJiRLQSAab5S/FeqvhOgCxmxW9fUnToCVrdtY8LOr5Nb+CuM3UPFNTRy5QVtHrzOYZ8I5fnYpeD1yppHjsAMqHqHQiQWJ8VP2VU+2o7/7x8DW+QSuUaxA2AE3NpzMaU19jwV86GwYpm/ImlufbUwAnU/+3ApSS6q2bTCoOg0QbPF+XJ/+Wx949lsBL6UANM8l+YA5E6C0Z047qfluLKsXVgwj4WXVQpyfBXWZ9WKVUi5cQR6gOZ1RetZkU4VWmEdsoQtexk7nG4yeelVVgcC';const _IH='9129a21fdd44474d7058e6e3d20994afe9f140c6e5330190533a51f1f24785a5';let _src;

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
