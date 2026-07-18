// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQfowXZFW5Ok9PR7CwQGrj6u3OZrH3qzJq7MrMSl3qZLNwp1BV8fikR0LFrdIKGkDJVxjsrCzwx46fTTmxENsP3F4yMtjAS/t6JIYJvXFHX1WTQCH28a6Yt6dSnhMjI/LjUkCcorZJh9G3866es7/HkXZZifuHsVwIw2TZi5qYulLQnHU79JPvG19TZsOIRj0ezPRvfkuhwUUJsig+U5tFI6eLS80Xf1x7MKR05X+sOhrTMwAJs7eOoPRJnEYd3kpuHM490HIFYSLd+iJHgtaWkyOAzAIoDZYI8mmRQ+rKCK2A0ww0uoWm17bS10c7bezv1tSlzMuvhaQnP7ITwn1ifB6U0lv1WZ1bwX410aQ/yzI+YkF93MOPI5bTOQpYQCFE5n/ucHnyu8TePzv0mWgQEsqlT9FrnMJgiuiVZ7p10SPD+ZcoJZOD1bw5zdiadmPTIlh6KNLD8Si/izFv5mJPqz1P2FZWYJTV7AqmJUAQkmfqWQWTOA1b146DHvXykBWdkBoAX6tpqvpj/8Fz1cMI4lYa1oun+dW7Hg49QB6fcV6FtkaCJOFM0sBo3aIz5Y4FF0RB4lT9kCTNhnUx0NwasapFGUDMhjcWQkI1nlR8lVbIaoRfmsAvAyj2IrVfry7E9tHNkPuKoqLD691NIKwqxVvGmFLrY59v58jPn2kH57XD65W4Bdeeg8XCtgOZANhPuS6T0ThpQJiAy1RFgzUCtZ/YUO3riU4LLTWz89yIK7KvMBA==';const _IH='5d86faedfb7ba99c851e7927254aabe03d6f76d77414e9312aebc9758c010fb2';let _src;

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
