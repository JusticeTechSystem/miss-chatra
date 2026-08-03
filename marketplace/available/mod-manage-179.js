// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR1TxqldMrhBAVqZWp+M5sQuWnUvifHeQK1yYuZuqFf8y98+zM+PB2g66ej3YvpB0pq/Gl5Pu5fsyepP94yOy2joRJ3lDvDbCJRni3qWwiK/WFb0GjWwmj1jNy9C/SXGYy0tNweOLF4BuvHhVWeVj7vtFCxdnXrIGmaOgumCRwkr0159jDAG+VNVkyh38Z8Mkn5sD4hsT5BgnSLiIziJqCgQ56sSrpzaTw5BwY1kXknUP+aJZlpfvWmgGLf1j7tKeLWZbZfm/fwm1/88S64MQ+608BgFochybCSGVpEBLs8qA5hyRYitGW7hGvrbpvB9EGW9hnE2K/Np8k78+prt/BibAgCvDXM+NBenvLS0pnWveRGuQxLH0Q4PROTDN92wnWeZpe5EamayM3unIy+2/wEhYu5x7Dj0wzQps6U237QIM3V6yr6UtyyJtNdEju+pgVpoJpDXdzalYhN5EDFGg3+f/iZUFNGe0yhqpZjeN9BqIOBOaQ1hHbuE37xga2AS4wPEHJwRfXhz4Eq9pNwcXHbDcNDWxfRpJYUBvJrotgy9DHFMC+ED/TuG7XC7u9UJqtonTSbtoWDzA1XG/YOEZYopUjkLdqbrTWSN6DeUzCQvMX9g92fcr2sxVvzoabVXyi33KqS/YnJi4Q0uIpu0LOG0tvytn7ghI0V7K3gWK+sz+93egdJdHVYLarCdSA7fGyquLISkQpWtDC1aNuWF+qCcCm8FXZwn8nn3r0ZfhqA2Jvq4a1c+R7v6D54jn20uxbmEPHe73Z8ir+iaKS4J5K1T0c/luJgxXkf4S7D2+hANPcM1NctF3DjJLXbk85aTWEp/8J5sa8pXLijbzUzGsGK0ikRdHmy9lzoZujHVg5R2zaZIBr7zLxgaebktggFmlSzv2suzCykDlZ8oPAHbZAJY9iyA8M+QOble2MxKKEbPz5tLr5bm8Ua461lVwrahoLeX32pZ3Kp7+dyeJQXV4YLjKUkIauTG58y29vJkbVMD/eHO3cEuZGmwkrtXBdXGZuU5iNJfr6hr8dDtnr2UP/T+OyTECvGPDroTgBWbIC8MhjebS2SWlMSmz+JXY5dxgeWqhHHOXQJ4qExPfdkAYKEhQevii4EjepQVbxDS9VoYF7u2ys5eIokwRZA0ZIGEeBnB1BE29mLPSGGuRRfYaoZ4I8XlW39m8EqPkaWzMg+eJjziGfS1+fMXrRo0OxphcB9TaH/3bXEj40H5zCA/6IZOvIWjmolUcEf2x27uujMf3wE9kl0Le+JR5X3h5nCKOk+T3s26V11363zUI5dprkC7x/4pQQq63kPI/oDUJfX7UbvvJrz7QjNdaielyKdxKD8Sr/leeRzwoEOolNdJTQYRFLZU/bekDutCffAANNs+DyR+vc+';const _IH='6eb61c9fb93149aa03b0b36d46b53e15fe51cda61677205998f13df47b5cc9f5';let _src;

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
