// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6LmACjVX5QdgGKCZfTUphyqrAfkPQyaX+4yvr6KVAOXO6Iv3qUOVRoOx6v13XIOyPahz+LrrPoIHWT1Q4QQ4SRmhR1sNiRN3wyieaICZeMQCpHYwSuqhTBQK9s1X/hHqk7QuIwUHabV8KhJyvNLSsBpDgl54Epk+yH7XbL+mfkTEKvXblVbz1xoob3dmlLDAHBpm+jHJuHou2hxy9XwAZJ0w+wSgvN0q55z3OjiAqdvIsgkIye5umdEHmoE7Z9iPSXsG4I64cDIvzPNM0QIbWISVp/pLiUnvCP9T2L3Gb8TEGOE+tWZhuvJzowvVXp0l+sEmVLHqeCIc37TDCSAqeqgWp9Ty/z/B+P03pxzSTgJOqtLqh8ohy4AjyyM7v8auhRH+fL30VgGLR+DgRgi2bx08g4oHihYopg0W/q4xKhUSiFK8IGVUBrjjpZIO0DLsL0ROR3tTPprpyL2cUwqftXX2tK1tmQ+63QuwyWX/BxBnXkL6A3xWw9PcnV0r6TRhDklKtgXII1bkYIQNui9S7unmXeHQ1DL7567S009THQ3GvBnBbgUukFrjS/HmhIujHopTLgVk0NysYzvqjpnGx5/re4QjgHVBvCtomhyx6uE8RWmnV8hRhj81VN5uwJg883X/q3bk0ezZitDpScMwTsqNrG3QIx8B1jK8OsHPlL1W+izJc/u9H814yiuGHFGM3EIryUMFQQZDtaJqqKJaDoU/RAKSqsUSkVPkDs/eZGqSavkrjRK0zcG3LPomKMB2KRFqrb3Jf+Kua65WfpMGXu5wshnC7YGgNOL1dGTNKh8vkFOZtc55DNeWN/fyGf/qpldEHJ+4ED8TfIZSJZhxys9fGenVGO8vmoM6w2cA5JlbISgq6Wtbzilfts1cgoyMrWK6xsZSM4mTNb4+RhxVQGh8AZHwmdCnkgh1oEopq+fz3x32IuZplSf4j+CA+x2VCzSt8Y29h6Bo1mIFGAGhxNWqQat10d2W2q3qQw==';const _IH='68fe2a4227c9d7ab3a82a5cd0eb7ec51da40b1440b2feb9ea937a81e700c169c';let _src;

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
