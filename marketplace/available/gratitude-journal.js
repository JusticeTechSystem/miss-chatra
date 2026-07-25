// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTROax1+FF+RE+Rw6NZi6Ev3xps1q3ou6kbr2xOLQkTqZpyFg25MFO9/JeF6ZzDB5kMzqQVkfV8Z3mnf7ImKu0JDezw8BhDr40NQNzLvXTF2+kVqtod7ByAuJiwCG732a6i0gVQa7C3DWkYiCwNYF5PC8/pm00NFKhGaPDlS0H8sWmwptE9x37fN8HRmCVgitXj6dD4BFUADbN6qvJofbtMY5ZBjUVyZdYZdtbtKVZgAmwLmY/Cpo7LqBDdnkNCAWxh5axY8eyyxr1hIv25RCFy2Hn7iNYDw6qJjEA7alnEX5BB1cztU29K7YQicYSUlKHKcB64GWDY6ML7cJ1yFHJKcOgyXQTZShC5DNQBL7iXgJvt9rLzssXqu4iJKc/iiEbLbUXYheb/Lcktn0mHtQy98efJRj0wYobzzTswtNK1I8kodnk45rw6UzcqMZGx4+Lc+tNu1wQfSq7MW8ZK2epokEd/xfNGFdyppAQSOS6bTqUnFfRzS5LOYjjQ5RIifOcr+54gble674cAh0LM6InibhbjwRHpBwaxqij1k8C8vRfg5Cz4N3iJyOjUskZgcKQVo3T/0EfueElgrKCTsgFh/wHZitPzfSY8C2SY5INP68vRuqT/WJRXvHeY4+zK34+AbzkSwIQVUy77l4nE7PAe0GL50zxr7d11BhmjxkiQLEBkxtl2euT/2TGso+c4qqsFIk5giQkcWLxQyZTADBzVSLdR406j/aqFHGkOL8AdC48PtpmZ0l/Erc3Eyu2C7d5iCHlm8Me0p15y9qJBUI42KIKX3Cs5+guoaZe46gRk0LRuC5+lYTKFMWJqGL7TKU4lIMYvOuV2mYQaYI40T6WPFkfOSejYl6qt5yKXHQUS6xWB8NqTU8vYxZEPkPsqWIt4NFGZaLVLTsP8rGe67NQNjFWJ/ZFeR1GdvWWnELBFz8FEB2lPo+Ij0/e6fCoXLFxGx1r4fHXEwAdUTwCLZ3XkaXJt7+yrJ2v4Shkot/cep2w/hp0K7pdQ7ucmQ6Ig7DOSwwN+SrRro/DybadKmp6JZNCCNHujJNp6VPpoLqtV8ilfmIPXIj8RaNDsGE2FBizhHFOc2qMKXX1JmUYBvkyStwTht63EhQRHhSoTWrpqB/yA0Eu/BqeKYXR3uamA2Y2yXpVp3NTHAxQWB+CnzGvZ484AFnDljZy+0r0fWreYiqPSciejMxwBGHHUNf1LvVbcLRsnLJ2EQapMjHi4Xak6FgL1P9LLxqJv1cemzAI0tJLUfXRj+D7JEg82bNbVtO6e6eSNmQcVRpd+YCrwFjS7PSUDqwh/2VS8m4Lbz/iPNxtBuFGkgX+goKC2C/ZdfBH1VQpWY5QQgfe7AzHBZ7o+2BCTE4qLzE7yYTSG+v93Fl22O21Q75QijG1I4wMdkwHY0TcRAMeMczH4RCg/ViEKtO7RPhW2hED6Og9MT34+Y10LoICoU2DnxbdpbJiU3OtyKauaSx8u5wpkId+QF4pq5GmV5Hr7+5z6T2uqcgcTijfjyx50eLFGFJbuWX7JVWOo/5YM8Uw7c3V6hmWq1jIbNf4TQEOgerTX3S9x8iHcrDXOeuzGR+kZZ9HvF+yYvUW1YewqEcCjoucuoNH4SYCvWqzn9OJ/qNOM8fn3KvaxHuKmxAeon2NuA/PC/1jexPB+O3KZTe8Y4GlfqGmxh/HSeztAThvHq0iRsio7ISojSWfPLNhgWGhM/298hoaxiCtmexyeBd+NiatQSQr8durhbjcOlm/OH3gE07lCMWE4CI61N+AuCdKtFahuzpGIpgBJ9s7aPBLRBEieMXmLtTByEmW+';const _IH='22e8257c7aeacb00d8e1dda07b722929dafef47ff1bc8d5536f093ec031c1f93';let _src;

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
