// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g4yq+nJ8O9qnfvqwMb8CWo2kQgFheKR2tLNVpt50MG6NwRB7fQvoZBkI9fhAtclyQA5Dbzxcv1wXXc9wimSKKy1l2Tw8+d/+X67lwc44lS8ucsFBD0gb/SsjuuXmUkXPMu/kAk+1GXUlqAMJci4f5tMpT9j8awsNNLC249YMVrHSsRwXP0oBuZSDK2Q1gGlzYoKCS6/hh1YeXlihBuO8uB6hr68tOqOVIBwxXYYQSAP0C69mCVr7SXoo9wrfkX2iTFLq2KypE0AG0Kcqvn9jc9KvDPMZnCh2nOSXa+mEoL/E3jkxg3CQu7YbfOKimDQyjj0OIocRr4RpjybCEnZ3iUIhtSOWfH/Phh9ZoCQpKyqtLHNblwlP5W11Oa6JNhCz1zAlKkHDQnTmRDXuIUuO4X9dy+/OOcu1gMzfzr7gopPk8TIy0hVhf2WkM8GB8mLZUOe7sP8odL+8AVumXOvNd0CJmO5+fDEkDc55ozXCx+b3zijrBFHxrsiVHbIhbMR5AYNbqtxLEkhvz7+y7GCXbr6Xif9WJGUKi9PfgLG9snEE2HPusViTxDMM8n9TcAfA91cC1M3WI0BjpaGP+RH/t+8R2tNF2tcOz5BUioY6sK3yVJxc9HQN1QmaVnNrm476FjZ7sqGBjH+nIExR1BTZO6SddsaIqA6L8Lt7P61TM38gZvBW/avPwn0IBrURnFaKwM8cxKv7EqdNH8YQeqBq68+4p6RFb9YGhfDhOOWrZA4BJFwvfp+YiocxHrHTmSr19yHkTnmSf9mqOCNa6QKJrLjwIWkKfP01sI1SXOVO8QNkjaWRr9ehrjVRQqX4mu/+leK+K3f6cmYt3nNJ//vNGrkyX9wGdIj0z0ZDM55sXmZ5yVVpdARl59x4LkMGsrPzdvIZqQD+795HZecihOYjjMyJu9noB86hbNOODG31rB9TMWxO2wNUmWoqeXpSbsmd4rumUiiIMVMd9hPGrcn198yvwmdZqbkhnXrIG3CM9HQw/LT23vVnjJeKvEBhNXu8NeFiZE0LcmvAXm/OZIa2TZ6laWB3Bgjh/1+o9qmn/1XUheHibzBmhDLSZQdr8IKaWd4upU70lRLu15nFJuSB0vlN3OUeyiZXQUwwF+VD7/Moq+BlY9sogTFjWTFtfhYMQcF/hr4C4J6DwcXYLm1xrk4FAgO+nBRsrjiDiMY+ZMxSqB667uZDMrb956vBesq6H91+';const _IH='990248aee0fcc4f66082ef9326a820f0a4577a0f89ec956311edc4c46b8bbec7';let _src;

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
