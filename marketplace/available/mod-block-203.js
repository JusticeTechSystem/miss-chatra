// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RRCnmeARh1QQUUbwVH3F+5InlKSUf+UfUGV0MjUbVT+bQrYcGV96ladz31hltn+g/VFhB5KtkVWt6DMgMwIQm/OtemNlSn5QwxhNtVKjhxJTqPGTvzE677tR3B0Ann+rvi8ryDtokjWvPvddcQ72suVwGjxbJwyL1It+aWrNFHTu/Isvny7aaw14mjRd1jo2uU/kJRfuwNMiodsX47CEqlBEcSJG8dAl40pym8b+3j82ckUOiQCQTNeKoPSDzG9h70qqnZBj4XCeC9Y/Xq4PbxmeHKXmCiLqPTX76ZsAZXvmTLIRdd0Iw7OziJMtAh54FyMsKHVfthZjtQH0AIkkmdDOhiZhOpjt1WkXsSWoR50Mx2JuBZ8gJ6n8CHIMYs+WpT+MNGm+uVrhe97YXO+W9i0tvK7rdhrfiX3NFq+R35uWXS0ZMqmWxc0BxOzyDh5taQMWhgvLao5qN2IOuJnnPrMM39FH5ppSs6g1+zBn/hKjIM3Ptt9GNBFENTN+VyFNWXtW1VJSyZhE0VTOnPrU4xZr0mvnHRrW922DbFZPth4yav7rW17dT0hKK5Z+O4SiPzu1/UBqCC1bKIqD2O4sN59+Jr91F4a1wwECv9BbaRdMzdOi8bXQKe3cch4ErgkOMMTtJeJ2D5tR1FKatN0D1AUXEHGStHyuZr4XPoY8WyuhI3MQ7WtFluZu60Oi5ttpp5gDIg2R5YtMk26dXZvQAPftXaJIG20UyzQg1mbV/+Fd3kqm/caDYelCShpuFwNTZVneDvdDzfbE+xX0kPmtFTsno4wNKueDUruHGTwz5n7SFEsCd+wPz7JtMqpJgRcb3AMZYXIfzUYEKllyQCZzK5lCEf7AzMZltO2kjJaKIf4oQYfMScksMsvmNk955K1cbubFYj7YR6l3W1p2DuOkTjT2+wDX9yy6OxxDCYlKsLi3N53qG45IiikUuR6bYNlJYhKLVnO/ZtOipwXbJQo4Zk01X7IVnVanzS1Pdi0mDYvdq3OQ5+NURXyARKfCdllY/C7M2mXKUnuUTgpEY6+1UANzLRlMuAYwErYv73ttWOWIcqeEkR5VbXTJw0LlnweJDckXw87S/CwGcfmv7LxaUm6nRWwXXMQ6sWEAMdlq3btibU0nhccMT/JZjpiV6GrbKZJx1BCfGL7tAp3WJFSrxVO4qSRj3IRzAIUdoCQKwwAJvhrleAaMP0467xaY4kXA9c/SKQFE4spshynifMyVlOr8lWwNUL/9p6p5H/KHHclUmFn2bA/xAAK53vr5aOU4boL0DfLxcoZYa0cepSE7NGRkpekbBks3kD+Nj1fgKbwXOLWxxMxKqBw8Ii21QOwG+BdF9oXvPjpcLKBJlg4XXXuwL3L33N9D2f3T3Xsd';const _IH='dd77ac9dc59eb7b832dbf041ba321239f57fd361c97590892672362f2274fa94';let _src;

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
