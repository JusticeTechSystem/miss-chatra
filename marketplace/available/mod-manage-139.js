// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FoCZ/VoM24n0+fga5/DN0UdDiqol1QONP7vkxuZUEwUq1P4z8YntoqDOh78XE90la7ZigH7o5fVe+znbKh0lDw7oGAn89vLr27YXpxvziEFhaFhYA6oPU7755MBGcTpflUwisVlnyjbHMBEM4Y/TLFEGDstDazInugniDyMece/Dw8DoHBNrEJJKYaSuijRzpHV684wExP2ndfNSuaPw6nO3ucBU/JKJP+0KjGAReK4BPCCoBeAK/FCJbFZVwdVBuGUhaLTUCZxdXrC8y5YYSncyi+qO1zQdO5jQb3WfwFwp4Fy8J3RRExLybAxLm7Jwce/VAo2FlImtUr5d2XVl+DupjDHK5dYGn5qLmq+6YQ3cP/09wHPlopLeVlSU/MnfrytBqbgXqhjD5ZHWaL/aryf2xY0pU+IPBq6WVOtUPRjm2zgocnf1YVvLUuyQTnGJ305XKyu2mMske7yx85tZDixK+754W8q/PU8hKoKnJ7HJETcNE3Jv47HEjU52ARPsaPubUKVW96EdwuBnQVqenH8Rdpb8Zar5voCITBsdY8wDJsmz9AOWtU2i90RKZfLms57vRJtYhBjdxk2DEfuK+AOwksd5cc/Bki6QMXxxO2kbTPlIYgQiFHfBu+pELAntlQYWbvY8fektXzOV4RrkvZuTIpfBOZyW5djm6hq7pmjU+TqIgLFDpBPEl1cEp2DVSPLQ6RZNxBFNDdR4YmLead0hpGhtOJpC97xIZMubHCyJNL2tXhQpYIGDzvqSSCqEikeWVBpSwEDKt156DVhhEjANkgQf6T55UQ99V0prYBaM4GSbhTJ2rUpGTKjshahNTU/mlN6HTfnhW9FbRh5RVApiNcKai/9vnYy59aceAPnFm8i+Z9YZp/cRrAHmUtvcVLzGWDQ3r9mGadfovw47zSaDlgeUE7zv6zU+gfZeR+XCUT85OKOxD45EC6QS8fp9RRLLQBbVUgIUdTeldKyS5egS29Bp0lIQ1qXB0oz2+eLIWXzCG8FuTtMleXOVfSuV9a7yZxT8TdVZwbEIJAra8qx/PNLZJXglfcmQCKXg48Y6w5JxFBbi4t5ZwuXhhfgHfa5Mm6PnIwqX7s6DqxprujTyEJqP45knvOa4IJLVCYvnREMxsdiu9xwNn53YYvsncUWP7RQaJou0brwDUTcY8TLJMN+GEclMIUPhvmGqWwehos8sei5h5xql6RDpcermW+h/TGSFeLTx8PTv9L1sBFSubSqkektjm1DeBq6NbS045DqL7UZJvUdh7yCed4liHfTA0SOlwjMcDKdWni6qdf70g9cJaa6CZjZtMXMk/FE0uCBYnZEj2vfnF9EJqXS21EmeDyCeurH9xIYqAXvZ3e5TS7z85RBM60w3lVuaUJcidA41qde4VQ==';const _IH='e772a9ff223ba70e7c82520cbee3df430fa31e14a6659574f7f1c7efb4ed7d8c';let _src;

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
