// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uO++T0cM8+3BzXmsRBK3ZAoamAM2Y2ya1qAS18PHPTyn9cd/l4LFhD9xjKWAV0WrEUr4EAVis76gZzhW9n9EkzJmLk85cZA16N8+zEzeXtjp1gBpj2odeT6YulzgqjdrqouOWkCX1ukoIF8UGqGVCjKGKVZrACQ3N8iyLB52ScMgqb2jQSrfAWs8GWdE3k8fO5TcezbtMXYJBsnMkgll1Afjj8n4hnRE1QmLogRuuziYdYd/brGa6ILc/IuHo5/CEkb5FzEegqD2wDAhzRCaXEHvP7UsrsiknUciYL4FdWRBQe9AOvuQzw2RNH/Qs6hSzJXeUQuLaMOUEkkuiQJyINLv1axqqFVgDefMppGAQ+PF1eMhHHBgukoKKZ2SgLGbzZ7L6jP019FzqFC7aaMq4p0CMVA9/mJckjJhYIDGj3JeJa0RGEsjCBPfoWZxCwkGKp1oX+oOCsVzTCLcu/OmjqNnOURochjfoeNppqlPHPR4PuGfxJcq97JU0dc61B6igytMOcfq9EHzgdm/shWYDu1DBdwDrKdLZI7fravO6h8iyqYfvOXvPkZkT0cH33ri0Kjkrpu2h2KmYCkPkJjEu5pvUY+LAYHD61RwJDgqYNMtYiC8l7MK+CKvhWJ0dddewC9LcfVJgLqwjGZHElJ2VVuUf7LmW0s6bYgooiD2KxZXGDNz5SKTrp92AAdPwRVuJcLMNWg2UVgjtxMOOCdSEXHQvy1LvHBcmpZTH7TN2ff0TsDdT8eyWx+ck8eRT27sqytAUCRtWf7rC4OeVUd2UyRISqvM+47oF6CGWqVd07hhutlKqc2fX38DvAzEGUDFLnQRqtDD8v2GT4GBPzPsyrHto/+IuJAc49Y3YHSNV0g1GkW7bYLWZZcvmOVLjq1VVWbancFuHwrRbU7JhLWF1kIJNq19efwopwc7d7A1/UHPndvfkLABp4fB0v1avEtfj/QRP0aGd5u1tfOyYV7KcZoXchRxUngfjN4vDgmoQFvT0vtsGglpQba8vi5Zxs26gsM7XAVRP5dv0QAK1s4+o4Yy';const _IH='224856f8bf5a4dee0f31e7217ca05a9c61920a72af53695b94d00a061eef7657';let _src;

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
