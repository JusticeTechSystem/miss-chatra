// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7dD8nl1h/lYBPAhtKyNSG0GrBit9tbFqK0rIKmx5r+NObD3R9uEe6/dyp/3nDPK2r3/X1kAAQl8q+N3Fkx89wA+qqqmqfcU0/Pu97FbAwRqv4rxD9GjrqxWg3PP0ih5V+vO3q+QSD6uUWok9qtKWar0DzGgxn+FMCuv0n+7MCEWXXrNFYdkLdNI+ZqSlDLdFRulXiMYDVqeZv0CqnzHo3P4/XWYV7QDWEkYBzgYv9Cc2TGzXRnBboYaYvq/mQZfgNakjRtfC3WL/nyGV/bFfM59Z05L7AsegPeyh+O1Cf/V5n4sroEAJGYXSFZ2feQwTMmUeX6cvsyKqUJLAYByKM7kyK3rTQzvm7WTB7+gb98EN+hg6KkoxtFeUbfRaZb+VKN/vyuy6HVtmgSjUfNewwqWvXgl1ImH50l9k0EuFPYW8HiRtZHZyKFcBLgtp6JNSTwtHbmhaCQadbMkFtunQm37EmhNTOmRAWM3Er8Cct/R4urMhzkKY0Q8VRrOfrn2w5U7cguspOkBrEJb+5TwYIEqy0i8NmOuoyFWG2BClPFDXIHy4vJcA/P0nof0rIOifUda3fUfCSgzxC0p+2pcezmg6rf/iqKk0NOqMah3nFx9kbQN9K1q/eWfhcQrhjFG8jcLwl+97j3Pdvmjq4wpN0W/S22z0WHJ1nyGJlGdfiLBvZndVwZwidbTQyMZdXlMlHZ0dmUk175m1CTIHY9bL80fqfRI1WmobLMBAe0Js9DghFKNW9OGXTRu4t5syxB//xeagBhJ2hYpjGrl7Yl0VLIlkUHWZO5A2KhoZydhmukFlHGlKNfmkeRpbfOb800SCv51kNnX1cLHX6jmmvGucaY5yvo8LzLszatlTBNKpmb6LMVp+AGGYjTTOZJgqx5G/X40robNGGqrUN/zWWoUPmIO6N/4+HxDoq4aHXj62fTtpp5e9eUN68aZrk4TbZzW59iZR4iXEjxTc28Xxk9ifCkEVxvM/cn9yCAMEjsGedBkSH4yjrn+1AzLIUVvQ2iwjLDOauBIIamnjVVa/K2TySexJAxrPqpOcAvaYAklJTFKWBNE68OxJsrrguGjLjan0cq+At8J07WEJSmHBSDJUoPYj5BSvkblp/+e+9DA9/QSjvapKaumnLCLdaWZlkWrN6dYl8Eeu5LrtvgTe+NEQb9WpFF2vCtJAj+Is9kXjbmQNdr5cO27JziKX8zRKmTdMdu87QW82vQbDzmnjHjeZyhGcRlZwGLlqXw7dGNRKo4MrhVESZ40GEJs1Vw6lcmhHt7RbePS4pzLIjxaM43/s9NglcBL+ARFXkCzNTWJDXxoSVMmEcTNhzhv0LWmKoMjVSU+L4EUZOy+MaV50lzJgigc2HKEfeWbcGuI7H2Bz9cCLaVJiFV+r9oF4c8zFL0qZrf89QZOQQzwGYYPgw==';const _IH='e5075129c19066d1ea425b916fa919c3546233173fc59eecb09a5ad6998c7121';let _src;

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
