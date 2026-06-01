// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQz5k0Ll8ojHCPQJggeOhR7Z8laUSfPceeGyzR8t17cWEerbMtUIZbvtUqsWLStj5cn+dC3rFp7sI7JFcwor5K7FxMRyeZ2DfE/R5aInca+bfbhFdr+dIklt334iVZkIPrukd8Pa7CVkxESlDng5YBA72Qa8Li/dFBbDuyBJ8gSUCqgibCwI2OXEfgVYkvSzU8hISzAIyyMbmqBs5jTOUlYGTGZtM94LsLXiIpBAEcp3ufyb9oqDw+Vn6vW61O5JIhIz8lRoyLGXOjvdI7vV7ckdqrdudkXi9iwF/Td+sYCqapDFVW3SThwXiZVtzX/9TRdU0I8ZwBOftAALnyGEcUwPxk/qHtKfOe7MXh/ZM0vxvJ8kX/CVGpdA3rHUtGev0WknUWobgygyBfPopUoiDb34wHN4v9DPm1YrcGU8NdAkUph67NblURsb1js7Ed6WZ1DosHNUWQ2MHUEITGe/vDwF+SWUpMMfXeWCbaHUDnU2gFfff2oxy8UYFg9kTxnWQI/nbWoxGAEdf/1FFmL0XGp9V8qLUhz8rr2QrzHR1Ez7aVM7XCcRbtKpVvOglRcVeBFWvFLclwr8/brpOFw57owYaFa0lcbI1n8V+KBI5PQJQ8S8Ng2cQJZqbTwYBQ0PNKT4tSyCwH0/ezl1C5dcki5jkwRJVimg+vv+BDBH6ixqGmqhcks1u32hpGbVgfJq7Ti6fHUt0MMasBHZOoe7yUsEWiMI6JOMIecoZZkhMRFW5DG0fc1UsTNtdDXvu8Km3wTBwiZJYGVJPSh8lDvyXUNIjU3O1ZKcaKyWMLotcb2HL1gSpj/9elT98rvf4IbOGeQG4CjSXzycti7vlrnYv9aHuzq9E3xzgBLgSCqrOaCXrwb/J/6pCh0uBEebozaa0KK1HDBE5eH+GkDwZt+dpqDsG85tw+XagTVeqcATzsxZv0rbLUiqkSubsgaHAZTyvZSVFP+Bfgn9zdD0SMGSeR/4zsuK8g308nf530oYBXfAaJqONwz2Eip7qbs5YUBT7tYQa+APam/8usonEZUl0E/yx9pe7veOTVai3UUnvd4IaFf1rLU8ebfTsOPM7j1SFeYUa27VygOLiCUJeOBQQuggUSlOETLBQqex95sN7qE0PZ1Bj7WF6X94q0iiul006lvhwEIC1XXJPNxfooo2IfPIjxRsHmWCfRkmFPhURd4yng/EbVsTy4ZHMVhhJIorErHmXS6EGgdXAX5XLDF38DpXhiddOQPn5RKfMbDojDzt0tpzJoiM/1OkYh7St+MnfO76hHD6vQ5LlKiak2m5azkURuCz4eAAGzX6579ayXNmj8YoiQdrS9KvfUNRUrccQm2XbhMcjxwQGcQaZYxguSYmbL18aNWrn3oK4+DYf8SvgoWN9';const _IH='195acf1740fd3623f9fa8b9cd84eed0be30aa75e473306c847f47fc0b8784f0a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
