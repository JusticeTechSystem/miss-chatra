// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='baFEjkj5l3JEndX9HKvQN7xLHRy6o09w0eYamXk+z/4PTzWJ1etvNT18di4tal0x/CmpYyaVb7bvH98oitOgm8olgz6NrdspF0Ui8zXT3O+2LF21LoDqh0BWU3yEK9Jw+OJYSpOSAKfbIpKYUGT+Ub1Pgg7xg8uJpfa6XGxIEh47Gf+0fJvssjdD1FJWld7JK++yUSoGNkdqlH2t3AKBsn1U28w7jymGK+ajKlemvLiqTHqq3wDaK1yQCC2r7/a7NOTHcjGvHdXA7MAfvt6PdnB17EDPdV2HP1qu3TFkF3bJPOVnplnxHvXwD7h3hP8gdHuotmw5PDLo9exwjVWWdBzvpb2v55y9yqcQa74zvFUSdYVTJHFw6utjECZhPklRX2PlSX8CkyKbvUblUQVKXzTvDuXT+J/X6upZHBctxq6wTsNC0v/arQ9yem6dLjJmgVkw1jSvmiFkH1Zo0nc9p8VWuZpde7Nx5CPA6H++AkqGA4ssVKHf2Cjs6Ro9nIIbc/8zF02R/PRHAIBkQahcqapvv5YWilic9dH6NTkn5+9plzb6K1OPbWksJIkJRpn0PuGcxqU9xZuGRG1/XU4DUNllqHsTJsNpwIW0GuCZerakQz3ZtI9QusSUi+45K6sVhLH5jt7GQO/5ln5ztu5Qd8FbTTCuv6dJmwPs3sORcnHc7NE/+vRH9EB3WrFZBaXFsohuH3KuY9V8BwGyCvOrP08CTEOWxVDMGEVzL+yjW3w=';const _IH='6df2037d8bc8160b21b571f6745c0b3a3ac2fd8173171df5bbfb66d871b7ed21';let _src;

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
