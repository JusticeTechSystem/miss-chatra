// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8qnIhjx/u7vxGw8Gec2AlIZOo4ghbU8P9WswI4s5YFknEVmUNHTR8lhKnk7J13Yc4uzWMaPpj+miz5r87wAsJr2bzPL7d7XJg64QdnfNJnwm00rRbNOqoyQc/Qe4uKs+bhzJL1BGy5xoKwWYWuFbM52y1x8JPPwJOCIAYCcxInzZYjZ7KRTZrkkDDPF7+72FSVjb+DuIYCmZebSZo3jUuAk648VlqbhJKw3EmOT96FDUUIhWZ7YWestrMCJbVS1go0cSpjbCyadTZv0IPiJKj//6vaiV58cgZuOv1oOUvAZnMo8VDnNmMaQ+GyGe4E1bnsF9pYqmcu/+eQqm3zbgDi5PXmvTTz4Nbgq1KYBlYTBFdCnfKzbwTX9CrXsfQ/w46AAf7oPr1W5EN8NcLrAIOhB48l9JH6UYK6epjQ5SpqnWlEmMJ+dnlyyHMJiKilMMqDNKOlUAJU2fsY76whwWX5d3vvDpD9wd1vvhhj13Km1PWEuB0bp5/7hgCGoRLTVbOXZHonKbA/v7Dpdl7IhPTw30BBm6Z9MSfhqQFiFNzpMJ3wedH1Jt67eO08Mh9KPck4inoxxQ35XOk8to1M6EpH4Kiih/LdX9EGs1v5ZbexOaec7AF7Yhl6c2EbgutUkoN2ZHCcXO3Gj2jjBeItAfG/4WDzoanCRWE8CD/gYx4VPEIYFZARJ7uuZBb+NNqjy9yzzifGuocinXFoKwZRD8bOXNiT90MfiyJZC99F3OQO5dd0HGp2tbEhvpSGltZLSmXpPiS0m0RDbVuvrW9vkybWGw6yniahb5aBmXye9IaOXcPqrhKOe2g8tx5lWAW6A0S8bKw9gcdJAF/JvELdnxz3dtIu5RZEnjqYTrund0bb0a/wioZYXIGGN64rf0Ps5A6pNKUonFI8QF8TCKQ40GA6WZTRUF6SvY6yw4c7aGLqt5QHSi6Z2vBccBKgTonzvOI3zi/4T5Z1Ns+KAOCSZRr4vLEngS9sLpgtpGKu7lDXVHFzcU6G7KxuCMwHxM2ppVswUA55XWXMzsEHtXjnTjQuYO2m/mjprsdaZNosIbWe4GvNBe5K2VFAGYbzcd7aHxMcPvsKqp50H2MLrR6DW8S3ZhRwxodBBpq87IwIPJQ9UUd0n+qs6oxQ/JdPiHQSRS/Qvjs6AsmnpHPcdoRm98iMYSum3oFCZwyXlmHF7yuA05cCOW2kMwGEBGT6LVIdu5MbGihQzTsoigCqIHTkc+F2Z8SZAw4kfMBnQ+CwqjE210GM4x126/z3kxyM6WLIq3tmJZc5A5VhEj/Sd6Bpl04Da1RVdqy5egT7kfEZBlIvJc5q3Tf7UHlz4SoypkMl/wh8cDCsEdoE+6PN1zENCIG/rtlxH55inal2u6LFbvGZJMcgmckFO+xg==';const _IH='6b2bae54fab07484f1a83b8a337e517d8fae268022eb827f72b2b90129bedd39';let _src;

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
