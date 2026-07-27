// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTqB/ick16Mt4l3nTlDOQO9WbQtKgR3oklL+4SVOYb80KsXbJFBt1uvWA97SPLIdUekNzh7t3+O/05xbZvO2RHoqVbE6miNQ1hHvY9lhLRcfhnYzXo4b3DZGZooVzfzx4aIsnnkwtb7lDQNVeDul7EtGmIsWbyOxyHfm5R+2PZdh40b7d/SnzkajM1j2ThodL2CCOAcbTE8ITc0ftiJCHrJaI656Wts4eFPnjjKbrb+7Eu6SqtubstzyVvuVQFtNGb5g7TNGNxiuJnIEswQOwiiXQpCIQ334J5WQ9m7UWVLZgXb9ZuS5SJSAcf+ODuBogWSk01/ePH0+NRxfpUr+c6y0FKtn7zSFXhfX+M2g3/Y9BMAH62n+zSUKcX/jAHvUpNzTUNmgGiYFTED42efD5hXAv+2/kcuy5Ou6uR+rJ2bspxDrfriC7VWcSmiFkVnaM6i/Czmo+Yd4yFx3AEKDo4WW206cB+Erv5tllDVuzX1ptpOgHiPc4wxqcbdN3bd25SW8L2fnqbwEMAggOz8govZEjMi9yqN56WMjvqhFdYHWARmouLKWUhdEYTAXOjIXp+0jPqqWjXoB5lUARbc0vbFUCQJYpwS7peJlLbF9mwXvv4CVPUrELXR+ouRujEIrCv1FyxXBZTf52gPAm6bkSaNsIAoyqxyRkfQJEFNzTdON0EvW1oraBhlFM1VKtMQuyRN+Obx3grrxU5C7MKT82dYOjY3iYBTp65H4TIk1vLhcGIPBHMvAiqbYAJRNvKHeiEaBoKe3XlA+CkjVCm5jfpCILq696+rZazqIhJ5bvehcl21DIj7CLYfl53PPxA1HQOQAhGXhEbt7YfnZswBCdqj+QRCVlG+wHrCebCpOslVwfomv+WaG2rEogdqMPljkU5mPZd8Q8KLdUMaKe7A0PFtHVfuDDyBx8wqBEgE9acrtoZYfb/7PBwOE4vJVCAKJMPjiQSNTjv/s5EbQsv0nCBlWO+4v5NmxrfKbVNU4tTvgCnNtff7a7OAAqTZ6qdIFzgGAxf0wexJ4q/14EhWV6pHJFCdF5V3hSW7iRhloB+184qOjnfQwyKiqPJp2O4qrwAg1g+pFO6A1L1Nx+E9RjXANVCqLpkTsEc1oWBCXw7QXZI4noLrH5SvCELSI9fqfBekVlkWWcEAmhujkyCeacUG9JLw6OWAYVmIvM0rFmkzpsY3lfdDoFbSQvW8U1qKoGMoQF9KFA==';const _IH='a5af3b929269d1b91981f4b616d7bc2786bb506b57658201dcdb2c94fdc49753';let _src;

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
