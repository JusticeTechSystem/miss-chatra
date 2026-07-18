// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRCkYhau974AQwqi+KuUpQWvTuSOvKh/0/Awth3ysMGr08y/+b1SnrDuzpoDv6F+i5BxggtrHIsMFWCVLLhf3moyDfbXWk6vJi6cv2GznFsUquZ/gEUfxnsYcH7Vpk/nEw6HRutRlhEH6G/JwW7FNww8Scp9IhnhDnY3uyjoVDWkkIhGjVqflOqVjj5m3mpzsWi0KOfjRUmVe/Kw/2cT/RvC64uzN+Cc6LNXLym4qc3S+Yk4QiW3ZNjLjoUBKSUdSx5rvayQ8v8bAnfFZNTU+7ofSsYBK6irX56QPnpMZRaY0kbiBJaRQiIvzNyR2JH3ivsQSUBbowH99mMHSoi7zltUrDMmtQuqIIj/wpP4ZCdLG1Vs+rfvZq1jVMyPS+1MzWmGxZKtV682qWtQ82tkS9vGcf+Hy+mgk7qnF4Z0RFcYx7yBK85W9khg7PMpTcl/w2tPZu4LUDOs9rBlVVsMVdVir/0QXELftUILtOyW1jnSGgR0HMO6toiqevXE4UI9/oQ3uVbuL6Ey1yNZDh5bM3qoBcgM6uQKIkm6kc2UhiEwh4aGtrt9+TwkEzCb54HYcqukmLYpeMAHM0svx22NXQqyDQ4LwDtssyhOiYgHfSQ7Xg1K0uHQzUfBQAcmMenhTF1gZSa5H/p4KDr0AX0sGio2pyMrmNaKrwn+rFVBHFJTYt1aGzkvZPV6tN5//KQ4uC3NmnIHkIBjy2JQS05JLjxo8DWjkV1dmLD9j1fBBvapy89OfR7XpxS4wbrvOCU7pdh/IahaxCK71QyGcQzE6SlT7PysBJP1QSfX4UzI5h3UHtwH9sqls2gpzpSVN7gA4g68eV397I6Bg79ch+xJVycNDPnhf58SWSkAp3kp7UGl3BZWKMSYdNPT1C6KY1HxygB6poIZrmPCtdwAyqnZvuGY0TVqU7Mip1owYU8VeFnLXQ6Z3ERjaLvUfREtTFhxchRE5vw4gssGSSKxOjCqxhKfAOe46ZBZFCOYVAw92+IlMOXeCLjD+D0SYH4VUu70pQkQdCvs4Tf0Soz9qNhwcsJTGk9wW9h+0PjQ1+7C5oUXwzUh6Rp2irFjU9/IsSdLlMAP5yN90JOoZIC3ZDvAUKXkofXz71iW+vbh2/WfGyIzPxtc+HdlPR9FLs1LaQZzRWs+6rqQIkcEKoI/+hSMNWC+BEc+BfeDKOGe1FtFn7WtbxV5ISFQn30j/JfSoq1LSmeQZprTmEPmtY=';const _IH='72b48b35667229f9fa8801b956282b8ef0985534a6025f4f8db0c237248bb49a';let _src;

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
