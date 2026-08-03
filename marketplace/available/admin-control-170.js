// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTwZZ5/9Nmqh4ryl8yRwlEH0lg+7m3LttJxP4F/WCvkSM3tpjcGVtvHFiu6xi7hBCutTyl9IR4ufvnWbetcMQHQGj0ykXpPsv/GRqPVaI7G5ZPQ350G0ibfiWPf2yoWHb9xvE/vgIhYQVduIHg3Yh9m7vHA3P4C1Pfc04O6NrBWgzYZ1oHhysX1v81nWgQaVVIKbaN+CseWf51ZaQ6FYSBiuMP5AA3BGhwXGThPX1PyALDyzyXQM766miTJhgpe+wMKJqKgpjs22YulZU7wLeDRv9S1CDVjyVqsrimGYcRr+XawZULY+5fXdYz2nbK8U2wbw7x395CHMWeADZv8zIg2vJYcSnzDZ/7mGZLiIU/Xw8/v+jNgGxbYCGZn3sxK2Zm7CeZ5+BunwzDlpRt2fnc2wgraj/q0OcDIjxP/ShJ/P4dSSJpH0ws3M8JKK/h1kSTJ23v6+pCXt49LKu5OsWxm5QLiGhFQONYiuguTcR8WrX6UnQYc7WdlS9spH5C8DKqiek5nlHVQJsCsmm6vrwrRDQKQjy8JKhdTQSXfjAD6jMcB9oZaI2BrOV7STEnfodpFrJV0ar/Me9fW9iaZiO9pc25FegrQ01FgWuCiCLoTady3q2FfkDnaFvDGa1wVHHT6tJemsughximhImaVnQU5KA/RoUHidh7mkgbNDp3kWYt5YuO7lnt7av1AE+Iqy1EMRArAt9PODjRoA1u65vk9biCsB7hvAndqoa1+9Crh8rVqdyFaolca6vf3OBH9W5BUhDkykGf7SD51yR+t9KUFDBg2AE6vftJ4CGSpwz4KV4Qdzf9qqtZnG881lxh089FcOtrL8KbRW5kt5nXV3TY/LvS/F7KKRNWS1KCcqAgd/hcX6qPDH67mHBqgLZVdEVfR7YXFwxxSvX8C2k9PpNIJQoE8jBLQ2zP8LF/vwJmM0aJruo2sb2pys7Lq0wtwRd4WABIlQ2igAgGybWnUNnIRjNb+DAoZi+UBNmSXCRm/v/abx5fqPija9ntPem9uF0USn2jlsw0=';const _IH='aac575606c7b7507eae2541fdd7ec208f3fe4286e830462249403d39e822ee89';let _src;

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
