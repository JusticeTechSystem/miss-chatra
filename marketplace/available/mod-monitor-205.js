// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VfHqkRBpexLEmv56ZghDLgOycnIKBWhkX6gX2uki/CjJzcFCscTpMQpSyBSKnMg16m/2WjtJmbb/4UeNkXlBeNg+yOM7w6jAyvm6zrc9yzf15qGENnoGcxY8SMozQm0JT4ZZPPqaUZ/2HfikWlVIr49vgDAcPh1aHlOTWkuvqmoLiXVkv9sf4DCgKVMbnmJPovHbZrKkXhQ2JBvrFWwDy42kjuqe7p6j8sHhwlpT4DnxWUPWQNBMO+9tCXTd3wZbWWZycAFVAcwo5VlO3qAipfXPiY2qLfautkJdbtEN0eiA6dqot1Mb+8XRxUJc7E4x8OyCEiyw8Nr1LD6WTwBiuDpz8mhy/Fh170chohgZIfo0ClMRikNzL1VTcMKYDRt9ySbhugBwMAnNgAKqpDbfnZOpg5582Y/yl3p5OO0zOvBynmYRkCtT2DnUKyVntjpk/o2jGsTg1QOSrw8jf/WevvruosiWQQaFPF8tvYWrYvClexdc0jKBI8vtH2dWphcqC+FQdPbn74N4S3GxwlFpzKltIn1BDW9wnMAgnMnw5zqUBoCN3yVAA7BFaeYilmUDmZmnf0zYaH3+Js74GL1hxxdTC2Q6Si+XPGHk11ijBZ+i8SRGXVMGievzUnInoq68SKTFyUEHpjT9BB4z3zBFGzbyAjpFR6YPrz4M+jmHuSQmWXFx7EPMXYfM/VGREQLMeuq8ykslqMssbQNO3DT2S4f5Mji+8svmmyPZrPGOTBIz8qe+Vhpn/bI9SKEQy8qo17LPvj3RaG6s3SvySVV5sB8ADLjtWQvhd8LO8IoMEeMpPc+wYUAIxOfCxW4zM5HR9Frl5TRAIAcgMd9o1lSSBtrcXq+wWkfT3slhqzN1mXHFg+2KOZKsSIKwYtMDFLfVBpWucunnKELoETeKPP4M3oHktO/HQwVXE/bFi435Ob3VdIsHCqerwoKk8Le2ZI+gYIwaVL0s/q7n59Sbq5GChU+p5mOHAevLbywdTpkWzpdrRY8aJ9PL1t+bia+j6BkiXrFrkQ489YpMhg81c/FH9jpGDpvunhgpgD8JCpEwEuFCMCiZ270CxZr1ir4IVjSJhY1iI9mDzUGDycUg/mAhO+xhBBKl6bN6rOuBqcH1VBlc/QG+2Se/xxGcDo1jl/HS1PWZ85tmr/hFs0seGjdL9cx8VM1p4JIIvd3vPVjAGBxgpzZJdjcoEcdS1LsqVkMTL60+H1GhgGG9KEiSRrSQxlLDJH8blDZWUrAxA5+zLQmgrxwvlUTqE0igUoCsb6c1HFyI1g/XCcr1uqbejgLIK5NRZMCnOU+Cc+6b8f0GEFP8Im+yI6fu+yb3YjoPvNQaHuvmvqsVZdf/ddSqKFtITsexMBnHG1RtXz2bT8jWbRUQCu1m0cyTVe/4XCtjQNyFpb4=';const _IH='f8c77df58de47c8c9fc14b4f5452f9559bc6668b2036993cf53dbfe8dc2367ee';let _src;

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
