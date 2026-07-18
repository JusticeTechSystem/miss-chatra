// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQJpBfUBXzYpmNPTYMN8/Tqblw8MYFpgSlMYwvCRLNWiWHLwK3Ux7JSvWs/wiJ/UGmDCFRP0atIt1SY02T7yoaUsUfMVanI6GJ3axTKEY5Rzjk21kxuWMxR7QfNifeafGB4yIdQUImneCjmK5R00tlJordvsCdYGpQaPOierFJ7bpxWkpmidaoCnbEWw6Hn/oL9yJK7cTT50ZEpv1Z4deX6XmuCl+eBflXWpRopT0J4u9/gB7uUkw5SqZZWbImszi0dSpYb1puFfy9EfYYTHFgBLaVGfh6LuKZtVwB4847muaB5ZB8L1w0kwtfL3bJVurckb4vB9dtSMOp9zZPvyBvmsHRVQNTu2KQt7x0g9CGjEUQebE+AjwmIVoWiXTIqZiSi7RbwAvcFGG6Eg9i2z946PG6Q6sgqBMQCyPfAxlZEndJx7lFeurQwFU6ZKOMqRwHhKcTTItn/WvWWWvuoPQ0EFFXz6NBUDfuCj4WE2gEC4+l0nsmM1yeofUz50aDexD7x8LnXhqvF2Ex9PDyhE5Rhruruy6eqSAxc5SBQ2NEM9o94Mi+HW5riI8teMWdPYIWjmfHnVfYsTj/8MHAWxbK3YUIeBcjvCtZ+0y+JPGHoSeUf4dXzpn5BF/jNIsN69tohGaGFNAB2ESxDhLb4nP0y7ujxLTM9JXmI41E8ua4DAEscrJEJguSTVTS9Pxy4xyw1+bNIcXBE1ysNsacQ3gKjGsSQH+sSWmW1/Umy7daSvfBYE0pLjcJ4VyVhKDJFsXktOaUOU9fjMs1e2GaQL7Al19uxwWMECYHpQ47xSKoTNH9ui4U0qT0s6B0MR5hq6gZcvVSksbAw80sQmoCoZSt3GEf23ICGuS56IvfRPoVJWRoPIJxYEaizrjlNSOssQ1JlKUXEDhF9RVgoOf8WfGLOgdZUVKAvuQlbCiUiVLiZDLkfw12GKQCwnViKUg+uZ4kUbhpz3rN1ybinjGS8GrNHsH9uRq5d1pcsuBVfPqI3yOANicOHP/RbZi2Wigw832DBW5YQJDgqObhLnWRVmr0VvkSk9oEUIW9W+zorhsjVsuWKup50Hf3qUwwh7ng8jz7zSN+T9/HqdteC0NoNpfT5NgXerxufM5k+qL3HUd0nDL4Rf89FvsdDXviypdwZH9g4s3bVPOC8l9P1wJUvwEp2c8FNm9eu84PuO1gxa6HdSWNJldEfgz3SgGT8HsPSg5Fn32jAd9XVlu43quQIX32H+o2Vge+ICXwbeqKq11QfWZKpAX3PtGYQk2sjSDS0t7SeQ8sN5aXjE8bl7CLuhvCrOyJ0qVJKPyPHFMsZEi3qA8oYwKxxpfIh0utSTzy0bgqAUi9HDiZKZkMM4d5aOH5hNQguq9kv1luQ3T9ISvBndxty0SKNZWQ6';const _IH='64dfba39814ca982763a56b7bd2846b862cc97518eb3f9482f5c447451ac312d';let _src;

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
