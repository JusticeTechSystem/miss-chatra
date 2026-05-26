// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QPEW64ygPXJ9N10d2BkIOsbumSkIrJOK2iQyryVv/s+mAgGy5qcOC36dHLi79GfQQi288X1FNo3TyK3bt1rot3U0rLTl6eC93R5rQ0OWhbh/H9HMK02vSalbNmgtV7j4ZSbUq8Sc/2GepHsMvPsceszN0CjWVmqcQoeMzyVpNnVvRl/TtjCRsn8I3iQq0XwKMXMp9AAqJm7SHca6hjS+9ue3+w7c9r/8GtYMxR98suRuj2P1QxciseF3BIlXSmvnDnsW7+GSLMftnWiXtTJdsMrTEdYUOYf/5ApSIrLvTjJ8IcQhAtMnY4Uoq6ly1mBs5ygqhi5D2jMXNNT5ACUl1mGwv8YYOKpLiKY+fxtgimtJ6IYmFjO5zst5tvwn0NCS+SF35nk6fTQ+LGHDCNOB1wy0yqNz1DVIW/OcLEMRwrPAek4u9y0GMjP42waBl/7dbYruV+Gt/U0L1fBAvsg37LcIVV1sPPVmWmJtLIyOXeHNHBs+ZknDFQ76g0tRDbCsdqLMoKvY/3q2t/4y8cdwRnVWCuXCFINduZ+KOczylboGpsSGQmdH68VQUFqO3z+cWZDfO8C8Qw9rs8D+IxVrhVLqceGpgU3l600uUoF/Zz1sscaaIVCdDL6vkZVI8y/oinjjTgUqy6Ak+iUmeSmRbMPIc7Fsq8iSmDW+LXlgNllsj1/RKWAwsDzLblT+obha27ICn5wAefEiKKp0Va1MtPmPC427D3rtdeeGllROLF3aO0lQ+vneTJSQgcRQDoL6hJsQDjgtDuerBwqbw20WQNXefVlDpjgzJI3/n1ybbJ5Y9qXgbhnsZWg8epw7JGk/CCwqz5xpacfO0wbTCmyciRpTSs5JjjNuMQTSMKuAI8YOrc98as7/dMl2J0Al9GFhPh35e1DHCf4lI/cfDdYiPz53AKixDjM4MiLGTcywZOtzXnXto8GNPFFuAmlZagfw57Mio1DIXfXTlc6IBaID4KHFacQCAjP+zqSMGDv3S08RbQUEt5bpm47qWwZealrq24lPdthFbs9a2jkXvIh6pd/jl3yZJ4ir2ZSNYBwJral/cV7hg2XBHDx8nwPv0WniOMPRdlJi5+tSRUC/RpUxmTeCWxehY204939TFhkMT7oB+qPu5Wd/AIEHwuyhNs5nGdWfVS8wS1qBeZfPQ9Kbxru2qNQ10cdUS10t/se7j+JzbXKj7+VUKWzIQSPFNY47NyMMJfGqpSqOhlqLXRFw63djlvq/4enT3qNXSagyt39DtlSuXccjtTfLS0v3E45ThRW3IRnxNUpGKsxdwN3vp31pswsDYks0/FJu4a9YLy0KvtrmaxwTwlP8VP9tQHAGDzhDsvCxKnab0YyzMm4DlYLqn6YA5aCCD0uyqcZD4/7rbcINaKwF9DXiJQDnAVUfy+Fedr8B3XBUV0uT';const _IH='e8ca0240b0b465b9b40fbe0f09dd0fd2c136df865e81d61b762d25c3098ffb15';let _src;

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
