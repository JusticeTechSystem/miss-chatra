// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS3jlCSMBXlT3u8/Ym7TvBXrFUDagNPcw2H1U9LEwYqdB1ZuWX7AOOXm8GfoC7vgzjDttme4sWfNpc7t3oAwb4Ad9jrVd4q+UGzhbWKrU2guA3FR+CXMsmXVREtspM0OIicrXyfWodUJo4ELMEc1RL/dchoKhfLaiEgE2k8smXii38mCPNVTTRKAqmmbmn/Xv4Vew8EBQNMkWo0kDP3yGH30ufN4NJxeRg4ilG6onfrVMKsyuypczZRYbOpexO/65I5CoBd81MRBU36Mg8j3AFkm/oWA4wqdjuu5WGyMy/q8UgVRn640WxcKGh7PWBtm8PtYQ5t8k63bYAn72VeIPR9CAfFBHoJt1zY3qa/uQrlcCi0CeuFknFjeeSZFl/cFULWY/zmSmOnvxaFyEwWYY5cwCNm5GVhfpf42AFXu7r/9gQfKmVy3YlHvZtbZCT+j3TCQHdkJaRa1+qV9JOnYxOG0c6MUigWqzyfvD2IUGKBW8Sr7FgtTPh6Hk+Ol26uDhTBsWPv5dzr+LC+dXdNTv0b7jV0g/5iUhdsOaFjTu3ZjjipG/lNRvCpM5GaoIb0sn3sK8q2/VHj37ih3V7l+MHmdqOe84arp9YB+KMic4C0HePCmZPW8YCvg1YsiApTpzvD/d7CrPmd8bZhIFx3S8JctjLuXYp4UUFMqIVWxACg9w/AQU2fXYS5DyOKaSBuSIPNVnv5Y+acXwu+GUJCDZAA5DqV3EEjikuriLQ0BJcz4ywW5tr5nUFBwslrcg0TCBWIFkap2SyiGsshKISDUjYCy9bTvIJ8QnIeF2JMJx8lbrLIp7pNCjQMaJYvtrR96DpWPlp5mpWsyvd0EnYSxlPECAJTsx6N4gCGJfIW/dm+J2bEGgeD16iRPVLULD6YmWzVG1qbVtxdqTpOxt3ZMUP3CcYXPLvPq6d4RzCYuE65C7qyYNhfzUQsmND7p5bwLt3qtYxWKxsMS/qOFI47aDViKGJait2WJJKPMqwwqffB/kCU8V3jYNT4p63NrHJqswjfY29YCdtucn/D040OPG0CruHcHGjw4wFMSIYXJWnj5FSLF2nJrA4FK9tvPKxlQY8AzrkzXiG+3UHkxKUN+dsNu7v4gFKEhk4oV/AIQxsPY+hUPnPdKfkZOC5IDT17IIRdcDzsp9zyz8bCM3kNc+C4JoZlZDDkHVHe3UmcsyWUupqWsn65SVmW/5Q/y3TmEKRO4T850MHzl+ckfFGyXSvyvsKRiyu9Vs6zJKaFT/xNaXW8C4nmLzm/ui/hGi9/e3oJEJwmzikH8D1CMQH6G6dMH5YEsZtmrFLiATWqfEBDQ13eQ9wuSD5eZ1D2sXouZvUk+AT0WedJKrsGM0nSl41DKt47GDjOlyvBfDBseXhXgA==';const _IH='e334aedc911ff18bb56b6a3301ec54b001de610c4a9b58b27ace3748989e16ed';let _src;

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
