// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS4wx7kvEq9sUnp6NlVSyGHlJJEkLgegQD1q22+z/J+O6+V6TBDJN2e01jTMKPF1901PgosjWwDasE5QrTZqPSaUFPbBDVz8fPNzAVl0GE3Hu/6FRH4nF+tqb5pbypLoC+BpqoP/vPfqzCXgXyOZFrjg139dMKIlqUQPfZ5vzG5mQHE5j5VfdffOlQwXYAj36OUJtLoCODAI4NGKYqgZgJ6MqWaT9+GNYfqoLsLA8061RAUjs9pIbajXvWfXC1Yl7bnILOg1oTHxNKlrEHkIUCv2j4GumNbNipEYo3k3gR0z5C3/zZxM290KXtxUoNiOgC7yv5XyXT6AINTTUrA2n3JDvE+n/wVKkBphkxRBNwraTqS3i2Q4zRsBquf8Db+DJJtYbj9/yn/4LQaW67ewupJ97ZaK3N4R0O0LBtsRY6A9KbDzqftoELj8XsI3QZW41RMCY0KVKjLp++hdiG8UmQzVFDk3+jRqFA5a0SWAFkteo5FKWT1R2shT+2CS2F9It6eyJyRz3xQIB7s/pO/r67/2rUdwW/YSsoA0D+WhltyJ7mfxO3a06HvDYSHK2UH0EH13Gy2SgIbPcrLIRjS7Ri45jFPq5s6ID+L6j8h0HDFQOymf0dE1q8VUzwtTUEU8HYBYAu+6QhShaNQZt147gFQsAofQRogxsOt3GrXnOuuBJSBP29TZdqAHerjIkw2HD5Z8ZRZGW5xom/bSjHcgVBdXAwWb+ed/M45TJUpLRxvHbITTXxhDTcEL4R7GTYhdGcE3C//iM4sJXD/Ik2OQMHZKVmK+nbJzH2dG7rfy82UfdDCQfldkuaxDE6hPVAZz+Ee1aEWDNiRrAoqn5ZJcmQvIZazKs+kDI44cUj12xAH/rMAfiIxj7AVFB0nZv+mXCZEAjgwHaLXDqeEChmIRzsGEDRX2HgiVwg+aLMuwc1HqeQffqT71AGemzF1XX1MHvvGLnSlYPpy7L7ukD61nMnckzhh3xagYcHZtS1IIw+Nn7f7XWkqgD0qDvnPOdUUz9Dso111c+eOliydMsON6d+ic5DQ+L+vzzX/MrI9vY+Zo+N2RBHFFDGmCeBmeWPsgAJansetiZtfcdo2m9nChkJ+T0H3uRmv0mSc285x4Y0RRTvBgaxnnsIHl3d7Fx1Z/UnaUuQb6e9WEG4wfkyqsHNckWt7ic8fS7Ce7Dn+sQEDkQhE44Xh8jFSZKXZbdO9B0vwiQ==';const _IH='c333e0b425e4bc722ae004de6ec16e6723dc8e033f3d28191f7f3edd5ffd099e';let _src;

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
