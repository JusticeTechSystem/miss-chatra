// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9/9FWPH9QyFToc1d1Vlj3tn62mhlO7r5P6/GoS+KaT56n3+AnGefwq1O0e6QLUCUF10X930yvbz8naiveiqriq5cNuG4DBq2+ZAhhaEJhdwF5ZmTukZghRsVedZ/7Ezy69OiKYpSwZhsbu5R7qlxaiV0oRY9DoxC536SUi9Cr2iywvuG7339KWo9fG4WZUoNnTGZ13IgeBEYvs7fKe0XNpYUz0ktoAxApZZt7HOwXqzI8KmdRvYRrJ1BmblF3wkVpoaaSkfjSNlOJbIGCMxw4wsdI1VxnEo54KBUjEOsRab1Tvz9+wqkmPk2b/kcI1ZWOf86dDDJrJuyK5ZHnjJTNw9KRfMmHGdyU/xY37CJ80c2OoxtgYgL7baU0/hsqbsW9EJwaTO771zNcuUN38W7KhKKsiYaG6UnaeRX4oKw0y3RtcR0qwm4tVqHXZ0Ou6RW6J+BddH3V9w4Q946eGXg4tDZqK8Sh8oFwZ3qMfmlVqTTcaKAl1xoGQZGpMcvrAKduSZp2QL6qUKwGJLCyY14aUVm0bbIK3UtDtlR15/bTKtQOHOFDZxfBVnkC4ujvje9rGtrK3Ovqs83Azy0OvvkePlyDaE1FIbIh4JnWBB1mbxxyN+rSl8tK6Jjfe2gMZ5+qdIJWM2nGybp3L+/09rOjQv/vm5DGspTgGCYFUIy8AqhkMvGSUR0pehps7QivxKeGJUhENI195LCqcgetOujOTq/mD8XlQEP2k5JhLw8U7E0/jgbVF3SpFCje6vk8bnP/ZG2vP/mBRZb2Gi4b/48FBL3+RfIaGmxtDXNkyVhamYwT5o5Nuu2U5D2LVByG/tzYxfoAZ7vMDp0fm2P6uAUaAQoVthXoD0I5XUqU/5qkqgRLM/VxEGFqYb2INyCCIxu+DfrjRbDPsJ768WzVIAPqJedcQsDzZFcbFnKDqpAyshrJDbAHM/3gs3ods1Qi18CF52/pL0bHpyRHssfAF0zzqPl7poSCZLl82zkYS1OR06rOP5xGXsyQwZV3MKlq0C0VmNtjJQtKoIQ+0A6/YHSe5uSAXxyh9yCvuDQYN+9YmONyVO0h2h+DsAn7BbBy0q3aEbaq+mUimZVA5c=';const _IH='cfb70905d12c0a0620135cb2a92da66a5f72dc7a7c258d1e71eb7c376b0c0fb7';let _src;

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
