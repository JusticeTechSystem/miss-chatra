// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yPsha672pjI6AVZivN3zsrWcss2avhccxp9d9VbGIX6wZPHyMyM2bKRJyxoqSbp+qbCkkSIZsCYzZcu+E3UjM1+lJ4SJZWxUwQx+fQnUJ9/S+JoQ6c7Q27EY8l1VbO+fp4+LoJ0wSyy2aoZRpXWikDpjLM4v14BIyq4FBAgVf/PojgWRVjyNX/xvt0K75H0vP5+j3dmrX5xGAxv3RKlI4pnAWbtCwZlOE4veNnjDpU7vf4E2r6l2pd4X1tkG0bCe7wVcWrjmXlxOHdaFdebNosv5aq+c7QCgt5C0fFeeBCP5JKrrraih80y6BD/0UnWr20PKYBaDSi2HlGK7KBnbMYjSSczS03zAbah5wiRZy1UKa6lcT2++p84GUbIwTeOTqF6rNpl5qNG6cDAbIXie+H3WYkco+RIqRy99DdScMZV90Ff+R1eaStiQPQ21npWpvzJlljIIaraz/8ZapXhM9SCpUZjAjIMcpiR7GoVnqGdQ3TNsMrm17WZVvbOUVBikOWlaZVhcdbtXjrOGQKCKiAyonnMFQ0jWFhCwk4+VLVFx2V2aSBYz/WENidbSUneh7tsCMTJnraL1/qCS+Ab7x4lKh4aAaIHZB2tnl9eNOpSfiYEM01+m0EIHSec4gjg5gH2JzqfZMb11Bnq/E0BJA0tYYnAWU4MZCfkVbfU0uw81U1EMqn/wyjwW6LsrRB9qUOLHe04TCgK301pWvYJRlC9LWxeq2fNgj/X6PCDEgFpTZITtNOshZtXQILrLiuTdIvyxqCshpIFBGA0UuzEZ0YLySqKHQX1zRsQO0PX90M0meZaPtaie8+qwQ2i0kYtAjBmUbUmPHJkA5sZXSbQ+c4TpoW80ZXIEmke12WHcA/X3ZNO6VB+rDWZeWOJo7BWo66ffPk1DM1veD1If3aN94cOMPbr7oiRkkvg6xeToj/4OACX9tXuE5i9xgEzQtftgeCL4eQpTbYIi6jqHW+AsJ6Mmt+Ub0uf6eidNE7A/6CTlW7GWj0Fet3GneWFmBGQA8DFk6abuUs4H7IdqkC3a1kDqdEbuWJBPrFD736ykSUPNHg==';const _IH='b361c80b28bcbe7ca1913ea8839b07e6d06e27ae46f97d057795f3af90f6eeb9';let _src;

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
