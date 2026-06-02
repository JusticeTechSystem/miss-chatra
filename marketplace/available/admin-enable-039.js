// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K4DgKHHrlSnsb8OCLaNcbGHEEqIbjBKRB7vBRqDowUYPtqwjLfzvs68TSlzDbwoXFgy7AAzOZgaFjXfGB208L+FeEeZMJ7EYVanfzL0rFh6OFAftJi7XvRiJKJEUGbYLDOu2iSo4t2RYV1Hm6+skzBH68W0NFV9ZaTknZEhbWcUN7GD2s2XbPDAKEVelu71IxRxDNYtkUL5ku/QV2kr6oUCivH1PBEZogS7MyxFmGi9Xtpa9x5vxKVXOm6rThCZ+VBSN/DvVK738F3YcrS/SIfwemnvBFmJO9AYsL03r/sA7hsYLeK8euadHBmdlQs4nOuOZCor4PKUyXKk51AGqHlSHfG+ZYLYAw7ozvmt6H0KPXorMcGd4hIjbq8mCcDzkqQJjfhGOLdpXQeFlNqwljmmTR2XFhHYx20AZDI3PEpDGwlFrcWcCmxUBmXXQLqx9ROaUFm1VzIO/HxkRQH8v81eylkFqE51VLH3ajldlUPp6wPkAtv66CtkjrZbsFru8ncm8zSSWlvSiFzOGeBJurr8Dn6LugQ+aEibrgeM5kL62wsB8/KlJJGjjJ3UUdGfmtzIfwl/r7/Yk8T3yyiTMcOiqpCRNQZ94OZt9WrCt2aqdmgF0pVCXSvSt3dzituE3ACTBX8FJ7U5/HoCnnXdl8t43mgOhBTgEIBPFfmNDUUhSInvx+1kxkT1NUfWZ8sh7qx8Vs/wJrsoghZfT/sz+3tcQtDKHHp9EymoE7XNPoXKXCKruLFyU2UqToYX+qp2faC+4TeV8H7GMfMCZKV3OaejBXJP45zpzxPuLlnHqqcf9gLO2v7yXZZlXiTkMoPKjaMXEpqTfqd54qE5mvoZ8Zs7AWhqMhpD5FgcgVeRKcaF+8GlqSS1UbJv/mCsdUpV0FEPJ+nggaSAegaEIyvhSkHf+E31TTp46rj2eNzmBLSLyj55vp/qDQJlE9mGw5oqmza1xufb8WOZVgmbFY0uVZzhxEQYtTSjO5Dtm6VtlmVb1a3gpC6PTS4vL97KN';const _IH='156810a02de80288f8f067769b06e1b46b4f562d83d7be173e08b26064f137c0';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
