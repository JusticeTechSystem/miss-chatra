// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ0sJ1KLB73zk0ZyNKeRiyyo7gVJSb08bS7SE4joh9sN0Jb/WXmyEC0P2VYZoqZ6icaJvsh+lmBWVUtontLTp5Ohsm4Q9h7qud6uTRLyW6591AhauX2JbPM7YzWNogZ+rsDbgMQ/1oj9lFpAqGDd6GVoEi320F1nnngpifspx684qbCo07/t+aytG4xXjoW6LUNQkibkbKpv0P8V3Lk/ssvYewUpjJ5Sg+i+Li6di0HcA2zLSFfnUZwHvzGBeY4O+DOvhbkGQND/76xP7OnyYtKZJTW8eniZ+WioQcTfp9yijOf9PBJd5dfB/VaWwN1npXshM7uUTtTcSRC+MHzA2PSIKb4wdL1L0BD+4t9Y0MW/SYz9SqxsQ3H5P5eNJIcvG/wQjUQvOT0zIsjwAi+kmNsH8URok6ptRaiQQN7BWSNU5wGW8JRk01kQzQrDaD6W5kEu3PDnSifgTt/naxQeiFMUi+BwkIJtCatOxNNeNIfAgL6ykDbkFqkVpcbnM4WYD/90hZBok9bvRxlM8ZI3Frbnrt9RoC3gnb75ZUpFoEzxEy5NPO6fjIJAj7yfgdJnR38ZrGlJWjw20LnqNXCy393PYf7X9PT/1CM0ruLa3u5whNZxFZkYi+zsNzdZTPraoks/Ej8j56B+iC/wg6kGwEQO9B+fzp9zwRKcHJcUidXr4At3AEQjgsK0BOXl2EY/NCd4NR3+vsSIf/V7gvwMpU+7MvR+7BA0D+4BZv2vBSF6krW11QCFLXV7gQC6EAuZS+SyF56b3zkfvz+R/8oe8FgprF/sHumIig3HlqdsB6gV6H+/+OGnCGFBAp75gxQ5vBt2qJJU2UlRHw0oo1eLJhvFIfiIqhUz+/nAdIIAhWf9vEbQQn7ZizbHsYtKpqZVXV/Kx+SneXC75uYjem8C+bxforASJiD1H8CRRBjUa2XgP1OUNsumaQASVf8ilEuB2RWrGXWQ66NBuKGdaY8Mf6UHQ9Vfs5Dcea/6jWyG4OsblfL0URdKAG9fY/kQktq7bXoFuxS5/gF5V+rxirwPkfzm0AKle899WdE3qdbqxjT/JAzinR7DYSCKaVSOfGoF9kscxzW6oZfBYLCJsOTBOP9z3ItgZeQ3f7CXGAeFzAtO7fSBNRZZX9oVar9qurid9jwW52b0J2aFYWMLwi6kE+mF8c/Y/L84wnsPRx2loEjDTKe4H/tQ5YDhDlAKcVp8XMlgQb9XGiq+zVpjCnh4WLYTyv1x2NZUf1/LhLL2JEJFEXquyWgQiqsZawoiNgjHg4h/p99ymk89rS2n8kaNUcoVh5cPAJ8eUqB36938W5enTa1ZnoBjX48zfyodE3FBNkB0Fc29+Na2rMv67OpZh8S3FmWS+LT7WGpiNQ5JLuyihK3yqii/q1ceB07hZ/ZoMmX5g5VoEmn6Eg0tYuRvKQAqZi2T8c84XUuTsbJw2BkBBvYNW5NIrWWKT+Rd/XbzllCxtP6Ycub/m1Ahrv6FATd/FSY7G/9FKLHc8tUZJnk7B8wEJgKjPGYI2yJb9oLXzSYx2p6lRJMHzsrUCbitZBK0wkUvdcbkVUbeYUTOHSi88H6CDz0rFQjjXUwMb4x5jyaTzG3726OcjYjgYlZyTG/FrvOnUD90B4CdIgfwSo9yZI7zoXeBclhvdUMcyO5vuurM0OowsDICDwD2Q2Q+7L7Ye7IHvGQAVXCbYfVBzxOeszlIT2ziX75EajWn3XiOwem+b6shqYp0AB9Ukhe3z8Bj0M8lpXd02DQ9QSSoJoJHeQ=';const _IH='20dc4fa4f5e8e1ad79a4eb7df5fac91acf6260f46928de2130a105c7eda4047b';let _src;

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
