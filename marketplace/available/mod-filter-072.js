// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kkwYsWrT3XiUuyJQXB58COpDK0xY91kYT1PYlcvswyl9HlnlhqdiEp31Ubn8/aVlbwVzz6DZfkullIrUPKGNepr6rTytUMqeA5CEfWnLlLarflPWy2mZ/JfHrxTpcPop2lEwTVcXLbS6Zyf/785fmCyS+/wnP24tnbfUDHJ3i+0bG3p/OTKiwFl/Qz5ip2T8Pi8vxMhspCN/bvB9IOifMiYZwG2M5Px7wSqaVtJkLYhtU8ceM/rS+QtqV2bwtAI+mnYnxbCdCoeLavo5MPLyV30HjunLBar6//BguzNMJiFZHMe7Zm3K+He/puwzmDSgveQ8fMYAUtLzurXSJ6LWbE9l92sMuqO5ifY1EJyQGzWKxC9p8mzSGWHGJ/Vrh9/eWXHd3GwErGFgRJbvnHJKy7KvgkbvxQ954H61fW8l5JFHavdYP035TXrSyLE4A1yRwq770uqJ38hN1atWTDwxXT2TawVIHhtt4+WzMvbfpXLtgFPTsCs2ZH/WN0DBxz/zb7tVsJ6ZQXQNEM3c5UwNF+R6oKo1j/BZihHnHkQ8j6eD7jdt9M5XUyZ3fnEo+wXpcWDCjAHzy7ydtAqYG1/KncRmX2AY3d/9ki80AhxJVn2ZMPh75lVQu4audLe8Vzu7gWqq2BbhDEnM/yL1huktV4hXWBBRkdD2ITGRSfUtn5tYegoe/+jrmRSPX2zsyzGgT5URtmtu0muzK46WTSxw9OchVduKgJ9QpM4rr8Cqy6Sb2YMoWt3ImAySQDFLWkvNkFSbTkRI+ewexh+rr5ao6Ejp60xhJS2JeOYyZGzWDKHWLm1nBLoudQyjDkrLkdfmEZ4XgXekLO3a6Eq8uRNcd0ym000bP8x5hA4aJ9rFoicOh6kWA/QbaN0Br3MWEPpb4b7vEUiQ4llUzG9REB6SrCR//w1N9SSEaRcTxuC+CrhsHO7wR+KwfiKJV1qXOeDG0Ib2cozU2af14Mq0LYGp7uf9LMCA3PJRhcKw3/DAVcYLKM9bZbut62ul/yPdYuJyhh1nYapgylRt7xFAdCGpfLv4g2Fx9wGVOJ62ODdwsw802UDV1zgNW4uo7JZ7iHS94ETqMJIfFQmWVVWLO3Pjwjh0MqBdJdYct3Boxc5NrcV/ye3XBX/hrIVKhWOZ71LLNvQENa81t/TDR/WpB6/YZgY8cHbq1EP215azFXCF1L53cWcz/rQu8uIZC/jD08oWN1z1A7JtL5fjmZ6jlr8U4lx/Wx4RGQnKIfq+Xg3la/5Hgd7k35SQtoDWlHrNAJUAW9oLc6iTAAKwlfwXOtmVKs1rEvo80gNYss806s8WZR0+TRI8B8/4fqmrRsXB+GZIeH2tE8s0oj+qMS0VK3/VA+TwgHh8NiEgFcrLdvsVM7K6L/w=';const _IH='552e1542b48546691dd953e5ae66320971d3b0db1c33c5d82656a373e58f8db5';let _src;

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
