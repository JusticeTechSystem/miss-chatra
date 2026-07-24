// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR+7TpuiPpZlNWzrHHAfXQcx2/uqAmcdyRLAqFLWz7nZdBxEjqPFPr4xHrJm/ROZmQKi0jvI4rRUn9InRomfn69wBJUBni/Yi0lJiOmtNT7H+Ux5HNJS0lbYNf5wt5P0o7rYFpDamWTFMBCNpqEaP5bq6Kk+ajZJQCfDE7Td+xiEWKI8wgdKa6FpdL02kkmZ1toNEFitymFf1BeA4x2qmg265+V3vUwFBFxny/mR0OwH/Q7bdmItWmITy6jIkn3whuDmrOi1cmVdaUygyczDKAMvwGW8j3N8PHkqDzykTWM5jNDHZZxockvPjY3zQzRdxeuMSMvIenWsE01lReZ724Ns+M3Xxunbr9MUupaIPdsKpOgtoOxyWeMT0a7a5smdHZkkMqI5IV37Jcffv2AxdWX+aRaFs3WP+ZmiwxPbGkr4V8RkXyUi8q6GzxTwni643Vd8n/4GQ9TA45mfGgw5jeJNka+NMc2ACWMlQ6lAkUl8qsWmGm6mh9L0H+4D5eJKlaPSi7Av72YJ5lxfn8D+mcnOYZOuribTT/lrGF5hwNqEcyQhaB5cRHet+qTrcQamvQKpzFBT3m3tJSqaGhHKZHG9eA/6nAAZPa02bfaFwb3csxXJQz7a4Y3n6TikytPQmn6KSCD2cg3KupGu9Y3rXMQb8tQWhLkkDll0xSCRy2Emrokr1amFnuFNgLGy+HnwuaiHt/0ZKHDT3bPGoH2NkzmcbUQCPxtAhF6dUrFdg6c9CImkxhsXuI3z9y3uhAzKbDIuTYZYuG62eJ5vaRN8aKP/Pxpl+BJP/5z9MCZd/KTl7fMj/KvpwOz3kAhSG21sVKP2iVmKEeQpe/AAIWez93YHwE+ZB2fluM3yWXow3kT7n2/n2AVG/WbhTjjCabHC87Kj8nbw80XaGNJsDPd5E1SIuM+U5dMYUZNpOpqu0ngQXRkrsuyDMlMpea8i2xnVRKCyBpeqlAGUahX+n7EzmhCjV6nT2xd4xkYLS7IhoSnWgXk2c1Z+vPEQ9Upx4qyNzzI8Uw0PhaNrCNhrio5sU2Phr72AczNm0c8t9jHupx4YbkknuVQfbiJ/239O/ev+OvNa053NEi/Gaahgn6W+NVpE6uSHoihnzGu0XgIRSDE3WJ1rX5/Nd9JAJkUdudUNjHmhr+p7ErjbbOlM/L0XRMS3ubKixuYaomCRPzV8s3x1FJZ5YoMRtEfzBGIrZNziiBO/51pW2iXpTEEmb2Ut/C9mWLkm3FZfOty+bQccuBYojrp6OZ/V3oC1014uO/hGrk9pzw1s7NB4E73WCPqMESzZAlPAr4DtlqpZUeMumqY0g34osxm4C+Xv8sDvfOxiE6yv7QcHw==';const _IH='b034c7dae2198e0a28b3bed595c002506c823b8d2e6e9208ed425a1f2499e367';let _src;

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
