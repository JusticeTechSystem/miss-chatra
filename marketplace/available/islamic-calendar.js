// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TBfstWZ4SJF/PbSnUYJE1xRYE3iX6r6HLaUWnUHKovko4mXxZjYhZ9C+DXW1Dv8BRsP3KJ01/2ln1BeOGo+ZXHuOT0GWC23Bz/voxgMa2ymg7flDRfVEK1kLIMs/o4q+pMQhVtfza0z3LtBOl9E2/Fe+mKhsPM/RRHYZDdJRh7leQcras5dCRMgV0dEJO38gePzCli3Pt9IpvuffgtWVDuF8pqjE7lkgfzgk6cLmAnhswt6f/XYO9D77t/XAQ5vbxqL7jfQIoRZ39Wj4BhMW8Qj5UdHSmn7i2B6Xl15RPvju6s6Pno3ntVGT38JG0HtJ/lL4RJxj89EaWrl/ecUsKCNu3tvggkPLMoZs+KBkdlP7odkrMGDhQvJAt4/J/CVhLUvn6Ot444HJUS9wB5sbnz4XFqkbmTDK/cKZFIUoVEr7jlRpqGz4LUJ7UPuJhaWiqBz0lKQFw1fFym0ZrTQ3XDPwBgGHDLRS9xopUev8HhBbjDNzZPPlK9v9yL54T9/rvLsP06gti3rScMAjD5+lz17NG87x671NxkBmaIUBhlIMvlJFHGdJJc8UShqe2I0jgduibKXabGMYARLzrv1SJWxDGQMGIWaH49RTzDJYwW7YMJteI/EMHxVeolEly+VD9visCZeEYdvGg9t40uv9k4kZhSrKDfxspH6Oip+LOX2SqypcSsDQ7wRCshBci3d1GyhBVlIqtd2CiU8LyPmgzrTuulnghPJJUJGqAgZz34ngjLxjfLhjXZT+qLNRLM+mcw2346L3BE3t5raaNF31093uWRZ9/z6fwUwPnd0BDUZ5ZIDzvWyod1/RUzaqi2+U57Z6MZq0HFbPj5J5Lyyl6qvgh+BNZrN+G/6jWDaeh5UxLkPzuwk/ygFM4TIua4zTiwy3+Mi5s31pJ14dohfohP0bNE8kOupfvDom/ogEP91VItPGJooMjlwDFMfKhzATWXYtvXENS3gNBNv/N2b2pvTv0h8GTPKhwopyGj+4hGB/6MQr/fcxuc93SFaBjcbs0/1N+uY6X4lmAx9ZOE2XiF/smP+JhCb40pbp3ztf6I4Da+dXUCkRSVqzkCnGmh+IOOB7ouUZ7CdX93ZHIeuDeAj35C07PhhNdFc3b9jSbrMxXgqDTR8WdqPv7M/DoN+6kRgd7wxvF9vTSDHZq6BEVW3kvsG2fOB7hddVoQOlfjEkxXb1Sj14rkG3yov0RK2iZqA1iDY6ROr763WK28uHVpHpPlchMMrpty4pthHN6c8jva5ZlnYsPzGyR4KizmLLdbaCKcV9tEZ9Ggs7FuDcxeBFq6pJ3p8Cg0n7CtSUia5oYPJPxuhC+yiaQFoYXbDz/soU7xr/Uymklx+rYIFiL8xdbmZxi0b1W6/xX+iSep42fLIN7e/QrLgDM6zUItsvskDD0IaBuvdbxaPnHXgWv8EeRf3XU/JCzdYdZdYXGALohP6vvmnyKH+5TvIvcL7HUEJSCAxZ55y6bqmMVHiyMYOmwsst';const _IH='fe4a5d68385e72c65550305dd0d9e61e711d63e938d54aa894678f17f7f5750c';let _src;

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
