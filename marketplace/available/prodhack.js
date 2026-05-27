// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gLUSpZDq9TvLAYW4wDAzM/7XWU81q6upVSzxk5BFrt1q8hvoBDNpBHasqTHvDvoedfKMBKmqqP+bN3Pm+DuG3tk2e+TIwqXtXM7n6ytr889mW7xXuimigxkxJUZhD0jbnpOrnSpt5aIvQ461LOzf6z6+3PWAFFdpb/OkZTwwrstNbcrrI00khLxznyHIT+GeaJxmDnCnA9MykeIVJp0H3pu+Zm/YlgSBN0ODCANb6qF70dlUA5AddrlDXgCv0N0i4lAIraPYsbsU76kdqw3QIZlCzqFfIMQ8Q7TAOGaN3EVvyc/nqQZoAQBPEE+p9bWRfnc1Tuhs6uLnwBKsxB7QGcQhT7JBzmU2xid2f5+82zrBtF32Afm8uWR7VzHl1xaulDYUXZgZY3NdpXcBOldpkqt0PswK3H2IwbgX+qcSvGtHMUUcg84EXnIoTl2DueAQPS7XRyD97nybn8WlZLAyn8Vu9eAonm9jtQBlbjPpVTJWNw7SK8nkzrQ1tNJmWAbmsnrnFGeZFan+GANWu06MQE3tbo+Usxf3AwqVlmahzKcuftiCN3rXESwDcxz7oefvMrLOzLenHfShgf7CCEzl+Gxdo+92kfEyKXt9Dr/DZYZ1JSMYVnlEnkxC9ZX+gpoYpovGtuWTX0Jg1EK/tv8CWXZJhpaZUZiKhXD+DcqLD86vQBvCiErW5mb+JfvZUkd/sAgBEUbJOrAQ3T4b9qJhOGpDE4fWWK+c+KcI872fD/sUNmDLyxwcjjUx9cztLYXVNd0Iz/5qpa5cPZcicKjfu5vH7KSOhhJtLIygXrRA9GUXVSclzMg2F6lOcSspn6bNWW0dPaKgu8hv47Enm732g4l167/YtWclJrtHh+I1MHZBpbVZj1OdyNs1aZ/ZZtJc2lQvrZ1mCmxI6Ug5dfU+ZJDiesQTRqOFwQYJL5GjsKoHUX7+J9Q0z2ji+icGQIh1Mj9j83yhmi9Z7c5IkYITtLR/NN0ZbHuQxnARYfs2hBrcvQM12EaiV/5HxZNnZE7lkHEXwl7wgAwyKhSAgh2iFrXm1xzpttVMXO39LbDxxesns+cLPwQPibhUVJPWmShG2c6fnQ2MZXkzT9gurjj0HXzMi4LJ4C4dLnawGi3Ztymm1MhWW4xAW3bvhR//pD3eeDH9wLNhZR6PZD+Bb1CJOecistV3mPdmFxtbuowsGINfjYPQ58RdK960WB1EQhkb+SfjDlI=';const _IH='00f857d13128f7ae2a574087137d8ca3569f436bc9f8e03f7dd2ae26a05733de';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
