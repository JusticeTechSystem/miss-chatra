// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rcQB05TvK29YUTXd/ffEcOEIxVc4CFPAhdWYNjpppPqbq74w4Nr8FicbePrQm/kVdyWet7RVs8y1CNCDcIjHUSsZ95iKdrs5Nk9ZStExdsJylGafGyjNQqqssuqPPRrwCpCvy/Tk/lKcc6EY8U5i0AweJAOSsMSVcYiL8QjMBQNpOui95KOEr8KQse2NPxiC0l/BxU2YdEzV/PHbW/EoRD9hTZDL6cbvOKc8TkyAbuDbI+PPYRZhsp8QK01MPx9tWBKVaKypJmZ/jvowFCrJefwx6q8/irs20Gg1k+mo4X1HBiIryXqik6dKMAb6QR+k0KnYAX++vnERLKkQJBBKDJVYXW6K1FF3tN5mutwa/WZCfUV9qQ657+0CfgZmPKf3Zvcu7xxLBOfEVAXAm+AxO7OMsG6FjnZKS9NB+q4Q9Z9rf+3Q2b1WxgUWxE7gQCHT8q+ibGwX/I1NW5kcslvGcQfEXN+ztOUPLSd6zdKu/GFfxx1Guw4JrBH9Ytir5khznX42QmnhcpsmW27zC/7glNWxYewpdTWSCH8Mp/CDdHmq06MvPep8hpjZvI1UpAsmt6AMzpiGIkrMN0CshpgVePWBEYEi88uFDMtumYEps701GWqZOxkfnuW56fkatOgJN001BMDbw2EM7WDi9Brxz/xdVxfTCTByVFlSMThTLCOV3ITwPY0vmbOq5TEGDrAPSdbCRSqjgy/mFqRu2ZS7x58YWEc1URLsetBDhXDfl7AVwlK6uN6IP7xMg0/9zTfKIrL47551QWAhl0XASbJAqVW3YGMN3ynOKtvsdOoWDWNcLx5tliNSKJ8OAqP4qD6o021dnQGMZeF8TFrGxwu/UpmKnFksmJq6Dqvrxm1rTvqFk01XWehuG3MhXp2O4EOnkb+b8lJTHmEJaoOFw/jbqP2jawGHGJdmacvC0wJM5hxg0jyGXXXNUYyT1k3Qb/BGCNghi7VOzXF6BkJo8MtlJkerZjZb5C5Kv7+fQI70NQ==';const _IH='52e46e34aea957a330b269849abc4d10d24805d60f7bf434be1f766c653ca23e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
