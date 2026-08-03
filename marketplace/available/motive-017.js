// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSuJC5EQYDq9xdMD5iBgZp+M00tr96iZlzBS+KuAgPPsLy9zXqTpPfNYXmzVBHjYQOfbdCwTmgj0LDt8NFYQftSS1MB5khpBNy9CJeM+FmH2z0LahS8uxR/iOX66DMqINkxpK2qXMdA/ai3/kKJYMpNlSwOP04mKEMXTzZj42SXWhLxI9n4a0mCtAvcOwOD2W+5B/8fuUbY0X58770igCYYs+6q6GkC1HP4Vrn4wc4WUr4OU4qGp4TDBZJxKOTs/VJJgiDOvYLKSBs2VUH0020ozNnlpf0e1uBA+TLMfhANGxm++IsUQcw2gX346uqX/03H5fGZfMvogH9DAQRDXUeQ8yKGkOUotXbc/Lk58nCh4AO0Vx3gmB3AJuq7C49GTPAXXzvH/7qbuqSAgf47Ik5QG6CJ083C3up2uPARN176mwIge46AWGScbMnFrYCefZcgfOpVNtwopZ8M4AEH7+E+30og6mlpEdSMfJtHCeYOyye2rzKJsuI0p9mvJb7Pop7HwiUjJlaZiHztq5h4roa9QSrIczWDFD0MnnEpMWvLjcF18XLXk2a2LUyAO07IcAbEZfNp67S0mbHVOqyqG8aOOFgHaXkf+f7Ik93c+KZgSXnJJ1T37QF4V46MeLKno1kO+KvRVA+tO9ofHNAXGI3vaB+f3B0Xw69TRZG1zLDx1vobHwE6k9ZagFHRGSHWBWlFjCNcvCwDZWtuyAsfvp80QXbOZBR3dcJkmyi9qT6DywkiBQE1qZvKSjX0Mbf7fo83qEOcnqdeb6GQELDpdI3cAOGkyVUGY+oBEn3+8PuHXsOLfnojs8uZPYNDjYtN1cXNZOl4yevP9Yd5IhDAlwEnxyDBi+Q72/xjLOqAVLQt6mCN+L1Z3SEzPley7z9yyrk4dLemJ6tUAVfkxUbufTgs/bQ4NZ073XGpG2D6Od+dYv3Pu8cLfiCm4XXKlb9u7REYIBK1ce1tr2MliMYMH0X1Ji90yeEVf8QQa5OG/jV/YoXQuNwvl3mT9dv1XydFcvfh/ZHY88iICmpIM4rbXZaQ';const _IH='d05c39902a61f96e683b244c8b37bcad76fe4876904fbb167a5dc11c3e7ec7a9';let _src;

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
