// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSpEfruzImNbM1J6eFMcbDi6Fz1r4hj5ykUadQ/xm9r7IcELX5q6RKT97AoetUtGsfEypTiAqDpDTJVDO++Mk5pLufHjN8Ycg5KpvhqwaWeqGyjwWls6kS7Qt5rxCzSnk5AlzTc0vr04mFxa1TLFTplkxQHbFsADQzZCYOkzRllv2h/sR4Sg3tUCjbRbvqEQ3acTAJmUXGLdVhlZB86bjjXid8yNTT7NzVoF0Mem5bbozRhitGXI6FiuWuuW/CKKL5APThJMtSW2tGGn4UA/0Dq6Lxc21lE8cS+t0eSr7Byu2gN7pqb0feksTY6mYunLkjj1kEgLTxnFFRcFt1NIsIIXS6VLUhFZyQJErWQBUqO3s7HmWGV38kBsibhFMKFi9kTsvKOiNb8Y3JPM7leVn0emEUuueTAtfERUxA8BUrepnygbW+HrgnRgfzh16NzVBmdz0WrwCEZUoWBZ8Y3EwGZFTJOPxIOA+oSGndL+uRDcmuW23bpIuPw42EWnN5kRkN0jH/2VLlRe+hV+uFaidM3NlJ5Y/OeybVuK0kh8zCnqSTWzeqjUiOvlFo5cm1cAUswB8mcq6FD4jEV8KOer5kV0cWdBHZeup3IEgbRxfj2PHGtB1FKp433s2jfC9K4l3LIYtvSvmeXVftot2EpzXeKbb/8JCVCdRSJosvCUp8/WkkM0nwNvaN38JzuQo6SUdBC86aUa6vQZQEJPnt09KmPFFSVAqVeKUMnb/bD8CJI5eQAKIu9LxDzRUiu+AFEwVE1miT6x02DIrHOY4as9z2TD5qsXVudkWI4TCv4tE3Gd0VbaEc5xP/2vyGulaOFYXp77stGuo6wXcB49olMN23gKeF7i9oWwMwIBO1NRnOii77iZQ6gOX8ptE4b744PWLZwxywmnXwUVWXWVvWejr5QUcb/b21NoD9ztPCa8uDQw+E+o54lUxEjiMyy';const _IH='2c9334cdf88d2f7cae4e18cb2ce6475e2fa40a8203544476cb11f659ce226587';let _src;

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
