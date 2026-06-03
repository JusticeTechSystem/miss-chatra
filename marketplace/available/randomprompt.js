// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u3Cr1tQ+rMoN769odLD67vk16oOarIpfJkOUJSLAs2ECyZRAFfBnb8j8C1AcQKjvqEj2eU/9Q9hMzJCRdi3+5gbNdwfjYMTK0PLSWiKKkkEtgtuusj3Py1zMhWjavObwo4vf6PtYzyCf0OdcNCZ/mq+aBKvLHogBlL+emrA3DTKZ4/XFHGgkOXAnDKpDPNMZNkQqsO7DcnrELDjvx/a5LGpwxQK9RuUgdl3LhzQ1n7ci2oZfndaJaEmhbbrm5p9ryRsaRz50lHCRNePz38Yx97NQVxdYBogdIirSeklCSLJKoEbeyyHs8dlIJUC1pKkn7ys/4w/VICkarNCVdO/rJA1vQ0AK538Lu/JdmBAcH3y+45odtXbTVFzlyTcYsKc16jilWCAaCPgnr+OAjyk3GHnXoMeJ8pPEKOymu4wZpaoTYW89FNklWJdS4UHmGFYWDgQ+M004TwmIPMVmrU5iVI3B5iPy491SJTLoKGHJhr9MJ93twhQGfJJdsRV7gtUHt+Gly0yBmtydsj6MQoqwIr198iRoPQVYsrapMdrya0t8eGuvlQvZk/ytiOYwmpjY4DNJvEKHT5tqp6mzRQiInG/769J3LgJBPzPb8KGXZzzmWhYQCrmRf/QY6t/w8mywWlH9Lqp0sdIF8EBVZBbZZto7hWewPA/M2io563Vpci1a1P/mbncxmuPfvOyRQET1swWwSQwk+XJose0PXBlD2DITLdKcSiG3ZHAGwOnSCJkA5yCtmBpRdBSUh7xmryvOWH5322YlgowC8KZ6ez/WZb877L2ovmg1N/aP30IAZz+FZ5VJwj5JCdQ3AGr6vT9Yt0q7kH2b7Fd57s2JyTd+ena4ijF8E/UhJTAUm2C7mI9YE2NibsW/2Y07xzCaVSms2zcb1JTOWrTUVEnQbsaXKUr3tp8YHikH34OCqU8tLtazDOkJNMj37NmhZbU8nmZO4O/GiztYteurQ2LElgnzBNLnQEvdxP0xdZzszaZ8nvi3pnqMzQuxXO5zDQfFFhYwghnv4oVN/pDV4IcLO1Kh3GR5Rv7oBUSQzVUU5/7wb4ctQeKP3r3ER4TUKzj/psKA3MRIx8VBy/exaWkQLKSNsmhhK754L/uODD8QIrn7AStGdw+4pWMIu42y5T6ovZsiDKHwnzVq3pA6miBbtItNAf03p1D/wj/whruM0J37jIq+DSacWhD+Uhb+wLoXcv9t5diQladeEIETMg==';const _IH='337091633fb5119ac681a55c4cd5f2aa8257ca95a1d90d7c9658080d16918aba';let _src;

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
