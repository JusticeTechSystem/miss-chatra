// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l2F9/arEuQccjkvB5Q76OcFmE6RLHCbL/m+6a2T7PftI5Xd//jCWlBu8FycJO0W8gjfKwWGSs6ysOy8V24cfe9vOR0hVabpAzVCz2LZKFyodcBRWRPzPcotraJOHKKuMLOPvODoBN54Pu7k9R/XQa0/8gsga1X3L7N/4L32fARc0H5XKuRaiTXkAwSCQ/1WKfgyRL+8SbXUcgeOw2j+uHDdbPdbKG6bcQMOzbG8oEzAXoNfcENpTv/vqxofbTDJykiyM7LcFgeLJ3FKxmQOnmy+8IxcLIUVORV9vh5yfbKZTeY7Ei2Mr9ysnPhwkmrNfJmEZv7q2QmY4lr7ZDVeXt8QlnjNOydNPARk5wPOal9Dd7d/eDvJtEhz6xpDevSbXHk5kJmaakq4APYwHAOGD+7iAscboaXpDxFtZWjxYTkV5dCqecO87hVgyuLBGdaLlNfBiuowPw6R0m3XWv8RyiuMKRwUy4iPXzppS0dFw+D2kRj9nzB2WODxY2F1+y+LuHuYSp4gal7NTLo9id4BxgQWRwTErf12j+DvD911lOgj6a4qgvfZIbjwqBXwvj8CAeWDe64xcliaAkPz3GxsOmDcoieDNyHfidTqkNlCNf2zY4aE2ZwmNmEhWtuiEWuFKKFK/BNdnnjzAku+Kf1G9JBkoTmGTME3XlX+g2vFXKN+VaH+t1/XiBcJklK49WRsNDUP43dVdQrgdWbz9sU5dcYQM0ZoXKub/LwQYJokysFTJVo9a4j02lgnbvInuN5yt5NsDIe4Mc0moR0XoggXN7WYGpg8DxS/1H3raFsiLtW9MIJ/M7iEFUeZ2fdOZ2u9h7X7tUrp1RchI7CjlZDDKxLi6jK18J5PdiGcRLcho5wFDjDnf5mz97P9VbpTuiIaptvWYwRMHd2TqDnjg7uQVgyJuvaHueVVrcVfRtXyl7iGa7rNcoNjoqs08ujePziPP9xVcL1dz/SL6Hr+osVNFlrMvCI0L0KhLT57EJAtTBwCK2ycXbc1y2pWD9nr5LdVc2SOBWWIpez8HUydlnct1cMjNVOIbeJk5peIKPbiFfTa3EWows5vfkIT9Rdn9MQomP9Ud9ajRZMi+ihZ4//yf6o4HrtrsV94F7SFEvWKFhgOBduCpGG0JR8d2+qucRmK/eV9weA0bcix8n2cjqUjnvRRvF45OJaLWMrZnOM1iZPwQ1naq5Qq4+8KzXjrHPjwzfTte/8KbgIfX7qXRXK9D1gy3OTO/XP6gEz8xecO39ZH+9Ufdmqc9XERpYFKrzZAdb58aWjuWbeJGemHRlObId03pz+BwX61odRzCZE0gktss9qsK1Q52q3M2uvnkBKfnA/lquA3Y/48OHxNd+c74iqj5SC1VQvPEb7kDYau9xI+OKG8dXa8Ang==';const _IH='f1f5fa868139e0b7a6ee0de4dc4f413fe5d3405928aa5892a2938e602d420066';let _src;

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
