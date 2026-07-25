// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSS9HCc1i8EhcK6aDcwGGxGknoG+CY4zge5MnjVV/cMKCHWPFYqwtXSebFTX+c3rBVlubBbNbTMHhqfDTK55c1SvMhP/moabCu8AAV4rWQI8xdcSVeJS6an4ml1UkdEqM+6iK7eYZZH9v34Hu/iAWu7/CI8FB3suYlHQcvrT7Oo3xsWUi3W7JoCSpifwmzdfR4OpCQx9cdDreoe80NSNrf6gFO7kuRhyzJcWRFJ9aByd1AC2wbJ8cEslco6KOkMkJMy4JuyeeFqtiJQ41GoqX/U0c33b8u0d9E1K0A0SnmyyA1N8Chaf26xPF14slBBhPiH7DrKEhbSAeikcj9gjD4Z/yr/dtE+3iks0TF4fPqvZFVqd3MuRLy+rY7Y9kZNtXvAwEwaBCeAccX0g/S4CkM8Y2XFW55ZpAJOXD577DkCFcemO89gi7CS4AEWqbSW+VcuB8UtuEV8zeWUyyEvUQL+EK1XVbAU2f3qUEF6woNgQF/l6hNoXaaCV71f+Fbq4XIUqjKG2yU4CFYD1ECzF2IK6cyH8k6i5KZXcU9YVikjuxqkcgKamglOt3P0PrCRh66Z18L1wsSrCGtcRlTwz3sa7e0FQnkFSDBvwaE6PaegkfKelOPxMrY0E9gfDJ/JN+FoCIXr0Aea2OJ8KBYqplsMSioMZgksx+CmgLHAlDJGKKB7Nb6Nez7VZN1ys0B8sUnGWlTS58TLWb26XG8nfKnVPJWW90Zdar8jZ7AsAiMu/ut1WnIAB/GC+ZChl4NRS8FoxoUHSnK6NMg6W4zmViM6OGKjTMyJAgFOkEnp48ekGUDZdXdCgLmV8aX/52VjSVC/D+MInemftcVW4i/+ZYccOl350w+ta/ALvff0vCdmzIWxPjbDbv4yqqzKmEFziZrvQNuERRyxCJKrMVWenKDYqEGp5X4xZDw944fL5nVKa9X0rvM0TTb3c/M4YeXGs2yLIq5m5VMsO2xcHp3L/DZY+pvUQJWAJDP6/kK2Y7QmSDYrKHlM1ZbwhnUTXYfba9kGxCB2Ictre5HADeI8dsZreH8cU3s6MHyCAaUDi+7lSm/OK2nDPJSpwo1EeuCSFtIMApu2vaIGHadQa91xmsFOaLkK4yh0W1K0L4RWhkk8i3Ow2crsW4t5ALeKIWANu+DS8ufcFR6NuPhFSnbKLCRIc7N5bAzFZP8ZXxXOzwCv9VxOEeEwYtZu+2FCdvCkizmZshCPJgt5sv7RSxTQ9OEX+3STnGSUklYpB8qqAyvytjsCRGA217xr61wPmdWOP05qFYYVpw11T3soEF3LuoUawIJS+BiRQ7edaS/lvMFQu0Lpsmv6XJaHT4gg70BMi+CKaztNDozrWo2mOy4FEeu+eQPecBKdIzFlSMq8YtZ9zRd/FehwI+gnAJCg/SNa0cAj8w==';const _IH='952ee6f4a3d16cd15bcbbc85b970f9d9d42003fcd54c771c9d0d09f60c76474d';let _src;

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
