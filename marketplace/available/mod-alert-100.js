// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2NtkkwwO6lK3gkHWj3fyy4Bf/pJmvUsNJ8KSKf2XgW/4JLMSDbWgIEJhEILv0Xg/EcxnFQwmoxZ8QLtZLre7/FMHKO264lKhf2m0GOX/4RJF/a6jLTaEN0JqIcv7uOt/iaZyOdlGnjymNyvLljTZVelxkv+C4iuQbdRvFWEsIlkau//ztV6rctlZcRD8Wc2AM7/wxqN8Y9x9pscyF8qSPeJgRj57hOddUMazLVsPibxxym1rg/fniLQjDSjmA2U2ZQPriiQLqZIuORD7/BRlQnC0tDVq+r+wQQieBupgL0IGDqRlE+sfCtBsLyM/X/iYjNj/xJVWZCQHQKpZlOSDbGRqPP2S1UsMfblE6Rgc7giktCrmVpLFVUhrYwDVvEOqwaVl9q8UaXlaBth7FwwleNIRozsp+4HfPwmpmaHqpCjVJtTfsdl6Qnyas2vrjFcDBBN3dIPUSuTAvG4Oco2UhgEsPhUDfXDqVc7hx7SaeXkUjWhCPrvbkjMEoM7KmbrHjiHeMYU01N4jOAufQOC3Egmb4qy3eA5quGEN63j0A2MLsmrpMzk+n3AV0DbSJC/t78o9+pgZFIEVjIMMtohv/+pR+dceXy7cJkReiiP74VOWkltkXjPc31P6fY7eoVjfe6gpYWUW8UYM6xX/i6SmHDr7YSDKxsgsRBtfjXf+jtv7RJL0atzBYjMfC8v8Rrlm9rjVKpMMund+pyOXk6nqxiryq/Ozsk6nMsUoc6aEdrMDof+S5ffWCNJAWcwv0jUzNJEqY4h4H6t0tfWCiDQdjSNrHqSzFo25k0UGD1yvE+EuZdqsHI0bl0snw4uryf7rpsWqbp4x+kKhl1tMBjlJ11Ni5crxEPHTH5QKMNc+/dnyZdB7J4silMscFX3wyP397KMmZiTsR2O30Q4siW7ITdiZg0TGyaE9YjGOT87advMM0D1bBRx+YIAKOQnhmFz2NED6YcX9q5L9s72uR/OlGy8Xz2NofWbF8WZFgEEZEB1/bnZsL9OXoysLjd37+BsgDWVFgq83iu8mzrNMNZ4nILptusnAsg2dgWaK8/Ca4f8gpUnerg/CO7tVBpMBbRuEjq1a53qv7P3iwF/KPm7rhfA26Dpks/7UuW2+i3x3ltm+LAVN3xO1Yik3tv2ari25svYKGMw5XS6ESrTin06KjeHY1sx1OsNmAno53CBhLwDlJgshDSQQg8bhyDCi/WchezF0K2SrkqDTEnrOle46UlR8wXXqgc1vtKUuTuDTwSdYY9nTaN2za99wLmHafRAPRh55QRmE8g3EUTmi9pz+1r2GnEIzhCciSTVIOTPXoWXbShjCMdWOPJZfVEqFWarnT+F9abmqESGQZQehM0R5fGuNxqKzJbgygT5PwuW+';const _IH='2ee51ea2fcd385908f47ffcf8d6c76beab6fa692c6b55e570a0cb60048422425';let _src;

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
