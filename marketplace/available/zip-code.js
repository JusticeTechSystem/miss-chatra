// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9YrQWgxe2zqySZSbWXlNHnIoEe8eXHXIdBE4IZsKdJkn6rAqgvGBJIBN1E2lkYyTHwMEfdnZGGCoJgYJCApAEhHKUGAPYXvt89YRwZW09PDNQJEZC7VU4xyli/l+awpdA8LNCp1DdWbG3lERjxO8bScCOM6SW6v1isqz/6WKt/SPmbxHR/rftjrFBQ2NppmNLg8rnnqSLoIWvLbb0KDBFr5xFQKYq//vNCOkJAhCYcOC4wJO16Y6jls06/w+Gkw0CHJwgF/jDiP9aOeVTcPsWpr83qFe6QFCgtO5NgIKZFFBzqz7qWN+do1v7MVgE962N47r0kkjnEMX2E7wY+0Gd0QWXtgeZq3FUSE/pvQBEdRAYd2Ubhsr0lyOo1s4UIo+KFZR6PKsDAcwxEFRDXm/gGxCKYMq5rLCPS03FE5AmmG/hCc8hsx/b2RGq1SBA+lcapmsJj091yrIDSc+ssXhPOOrap1UcyVG3zfoKOkXqHI/MLtijap2XEVl4/W9rLMCnxymsEUfccZrSe9nfjtPBhCRDlLCTtCk+ZqriYyz/rlcbG0TN7Xh97rCgLoqYukeINyLqJIMm16d1OdLi6m/9d+XZq2b3UrA0lDXEFnUC4X0CHXlGIqzLCO6AjyDknen7pstyPjvmAWocxGksMbZKxLUXfIoRyMeD42gchuX1C3UuvZP0ozYOkdIioDRkQVqGB5B4rjDnNQtnfAWM+pNNGGVUz4n2GjFIZlIj0jk/iYA6Djy+kheEaOixPjP3ZwxzSTJpIp+5wul46Y5eXWy8oH2PVKGCn92sxghTyE+k8xgWUV/9jmFa9KbgALhKeH/RAXTTEigDhHHLDtxpsEazL2eN2lA/79cL+qU9WpqeWDS/i/WuIYrxJoTAnLaGMjUFWp33ZOsYD7Vwh/zEdY58ND2ZqfZZPbDEIep7iSKfrFHzga9R1dfw1lOKCqlWgs0HYubSKCX6tZTKFSrKN49OaWE7mOvsENotAsFKePsT4dSo1rhs588zFyKaD9hLkxff+dB/0ybjpiOCBvdNr4Xcft6aIGxoHEYvEHRL+1zeNXcxm9mohyUzGhNWWnt2jGM2Ctc5WXoknIN1uYEQ5WgrQ3CNyc8V/rGieQVB3+PjTmEKsp21gKZAP03ZQUYffJRTjyk1mSsBYz5BpvFnzr+DJc7jPO7NH3rWP1jT8ie6DQFyHoXHd2lxZPNSyi4ABQxCSG9THvVrINPWxYI3JL19KhVNYKrnnsmZhtjOhNEs6yP8l8HeA/TAVhmaolz7SCTyvnU5FkcGIvs9WgNcB97DuCIaCsm8n278AU4RA/3pM6KfWb+2GbRhvdqQpNT1pwIzV7PkUDG+0OIQp7Ja8vGSToEJ1VqiWgoVmUarDgGARBpu3cWCK+wPtOwnCNgMzbNMGWE4oNcevYL0cI38JFOv+R0MymmqYfp6qRqmt8IwNjkFDhP04jn3LqUtP1Dh0S3YVluAu3Q7fQy34REUDdnPho0MJ7knKIthWig8sXU/P9un5YCAm3He0wQjFOXwiZET3zoB9vxacZAooanokOfyVfUV8NeIETL9Vb2qiaEx7ekZsR72VexX7Y4wh4BO+5PDXC1Mr9YGXG8CA==';const _IH='68e787951fd884d00f8e2f190bf65dfc0e2bdac4eb89643eaa68e7c2f3c4d1a7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
