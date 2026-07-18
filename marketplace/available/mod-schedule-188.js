// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQxdRLPEKTlshqRX/kCrkIJaOVd8Qec0jaKu/1tN3PUhP4x2xpCrogCuT/MN44pr0w/cqUxUj+geE57+ScWYALD9BgROuvX2o5DvkgbKfdhgUEs2a0wf66Bs/PQNrUL4bPM2T4Vtbj+oqfUvKKpmgj9VAKKOzvlKgIrSXB0Q6nS7xTNUjTvVluKRcU2Bx6OYsL9GEDJLXV7Z3w4BFQKrGCCLrYNlnGGJUHaG+GmhpKYiAPVO6Ey4PZG3GbTqxwdRef6qiboqRY9BjhT18WgaLv/vlk9zqc/RKEVRuk6ejLzNuQubvRe4eYnoPlh2Q1he/9iI1hXQMbsNC3vKAcT/91kiP/QakVOmbE0h5iObvqf2+en5LldfHk/e8IF+iN/D2v6SPjKPDmoTJkvQDBPjGRUB4WhOWOQEupepidqeEPJ5PzzG4019gnyyVcf5I3hWkUFQ0NPO/FFfZOcgwLsF52cs38HDyi4Z7vdxkr7vN/jGHNyJqfYMojjCqPO/MrtHvRz9iwhTcDExbH1W7hcxArb9DAF3dWqijJjtliLMrJH/9nqTmE8drp33Xz/cGng82L/LNoUlo9RnBs0WrAwK/AFieeq4e1vselyCIiSwObccWT9OKs2C+JgnfdXHsNcv/W1TxI35V9c+xTYgeKRbGL3wLyoGCk0/nvT0dFV2EIyhisTKOZ1lEBznsEJsZLI8NZcWo0sQdyueG+bMUqjau/w9kBCO1qCGH+kXk/iFqj26Pp+AmMMYVUzx62m4awZbQ6HROMCiVRuQc5t9A6u7j9RNxKs4FKf0wOhv7rBcP/lbB2Rrj+5In535xulwr+P36EqEP8tdFYE5eq5PPQwlZa3MZZCOQPp6wm83IfHrs40auqoIejWa5N4Z0QvfhaMufOwcB8ZGW7TV3gUQfCo1ezg54zGQgRnF8+kE6Qzn/3eDPu6q3Bh0LfVLWO+Qc8Yf1eEj0Wqiehass+qRM0iTSTkGCnNrvICmsw8ksuez6HYDRnOiauxacDuBHPsfsxK/z9IscxZBcflyGYzcBcge9r3irn08GSGHvOlQz5QuvREFd7uxwjJT2IKXzDzmT7Ctc6nanTET9WFRS7nUOFcwSSiBkwjDIToc/3fDBjeYvSM8nZ3qkdYXWwy3WebVAOuvNwrpRY0buEj/89hh0qJuJyuOBBD17e+qh/gVXhLDqRBdLbcuT5o10YrOdHamxW4VxKwuausGOJuKIwayYmqI24mD8m+fgivhO1EYwqMNey/HOBI53LtUr+f1TEmuRz/2InmDIfjxs27DbHWIlwhir6boJlzW3+t1A/9cDRJvT1Sv2VxpYAtX2auYS6wETkjPBkzI47KjdeH9EItU6t1kYXmYmlc2w6KuUhG4bQ7PCOkstBG9NPlps6uIpzd33FUrC1xkmxgDEciLBnupHY=';const _IH='6a42a3c5b4f406ec674809af9c41999ff8d575d6b0e103ca342f47322f53a180';let _src;

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
