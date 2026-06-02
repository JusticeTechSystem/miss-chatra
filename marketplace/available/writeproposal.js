// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uXda8W2lQVvuKVjEPmdzL7EEU/C1oxvwXiNAP37umSL2luX0q+iSXd9YoH3GHY1aLLWshyGCYBallGVxBLAEtByyrd6UhmfvuvpNPum6TWKi2fwlQQB5aTliuO8ndDrhDiv9EyZsHTPHV8/tW7i4cqg5gQetpCxnZy/JAPNiC3I0LxKA8V6G+A6z/IH4y8BTCyH5V5OBQ5CJ+AGnUeRgdwpnEjYw5KidOX2X1LFYXUkSUQv1IQtPhUmWMZIrdvjVGzjBVYLlOs7+LLiIq+jxGCRyFaCw7QyxTSz5kuZwQxjwBTz1lLJG1/krt6zM8bxRIxWZFLs1NbDTnvyoBdo/M8p5zEaq3hDnA6rXb0ap1Xo+o4rYXHREWGplqf4eMkH4WG75NkaqEStiHS0PAGiSUMD/ssmJ3sVWMsMqDf3mZa+fN1GjLU2kEYyedTDqcjb8XaYG2m6M7LUrDkPPnMgdMPeKHTBUmv5GLV4knF1Hv4wW+EfgiAcEeH5YO2MUgHU5MRACangkh9V2AB2deVCu1C2uyzZ0/xs4nmIgEPvdjLghIehRIPVPz4VzPZByXIvchZ2DO53VKTO+mWQ5g6pBF/3Ki90vtAcARoDpWrU7bIanYPskyFmkoNPXkoVYswig1kos1LDcJcQe+PPK8s5CWc4Fw13hD8/wiRbCufYxuWfnYCvjVaPyMzi3BlcG80Sopy19+ZcibfIZ2plsNwyyqM+ZqLN1rOjUaa96c5ZkIvJUukCo8EXh9sD6nad88slWNAAXkh8lvq+6zHv0iVlrBapKEBv4LFcjlniq4/pbac5L41Q852ZCYntYz0ENXwXTbUf1w4PZPMr8DrIZSaqN0MN7UAiBpUN1PcuySEX7fulT4THGNryDmAOyNp3LnvXSzXfznw+rtHGoZkAuqPHOLBHGvqcwVkES4Wv8mUvZNeo0nMBGC1iaiuxJybWgs3J/3mTOZTnszkdOtUg6jd7sN48BqltJeNQB/B98wwkV88XMYRISA/3J8Vu9pSKP1WuNvZkBuHpnxRbUt6kloQpOUWDyGECA65vXBQKYhq6amPA5yONIoE7OQ4lUF5h4UN2IHKYaL715ry4aZ/MR3pqm9baH7xzN/d4etcP1kBuNaduu/DZWIyT7wiUSOOwdXiEa9zWI8BHSBmKp6sn4fvlkvmIPB3WOkVKRayNweHTBV1AX+g12dhJQfkHGYIoeLargSp3YDjHB9qOVnBhjEnLGjkzSkQ==';const _IH='69eab75d1eab3fb7764af2cb3ff275b09b16cfdd9bc8da2e0b38f3877415df48';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
