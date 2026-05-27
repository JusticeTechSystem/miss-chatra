// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EHX/j0kI55DxR1QyQrJBCNGyMvfD/vNoDXFeaBHhhdR2LJ1Jy98yZQj3hyrKM05SCkYK1zijMBkg8UEfV80oldJJp48QGawluAK38RpWaqiTCjBs2gThmASYzqYxf2dFAzWKG2v63dEZxNRIqyqlvQkzaLlGb67c35T94izpsBM7nVWQaR7r4ZN5tL8sPs/vW52+ppxDucSIYP92kShjkdhj5YDMx7TdzV/wiJAO5/ZtZJNCRGDr5I1jsM0wYAW1UCm/vzMZfUBEAuo/EQBRfffE3KN+9ORgxbXo0g0wGRw/h3Jm/MtdXITX8HW8OJJIVlmHB7kcGpC/69ky9jy6ElbGn6c9S+joTnskye28FmTMzuK2dtsyf8JFxxSC7hDxYP+ASobHygEU7jzawV9GQM0/AzbectbUJyuXnKR5HpGk/r0Osp/biJ40iMQQXo1nxJZcrAfh33HYtKiZiPRthrjowwtiWPfrd0lUMjecaWIVxYZZflgu213CWABV5AJJMNoZ/RFgYKrzHLEE2UombJR7BXmPs76DoNyfcNOqFYQ8DEUkXPCmeps3ViNK5o4whg9+cT/9I6E55ljgG0cwlSyU50qF9CRJ4J4+5Hwsp5f299zas7TeEAofavgcoEERft2bOezYLipwFN8qbg8J6PdbaMDBSFnBkfg8XBJ/AXvJPSPPBWFWfqlHQUqM8ND0TuRwe/4LPZOhxvXaHaTDF8zvYXOqtra7V2UcM/8cUE7Bqn4fx+ajZISus7iP3pqcqf3qkvjKR8rJQLmwGZJ9UOYESL1CuCdcKRuhrRVXH8YMbYtfyt8B3CvXGM9749FKc57avjumYkEY13C+J3e2ZJ8W8VuGTKpmfJPA3FECsQXupM4+p29qYJ713PW+K7OdZK86E762CNUThMWeeypXJKdhtiTjBdO6KH/hjo8328A+2JvN3ldIICIzAxs/LVSLP1dGgxdgAqHr8UWfP/Od/r2HNf5sdaF87Y+O/zYHFYQ1/K3XJUM6Ez4waLGIzOzyGyBEXxql0dHiU1aLFTwhzWT/4ftcXDMENayCYkADWJ+9kD/bGoRQ7mFYYpcl++PLWyyHbUJfiTl1BVBvymHIQ1DW5yyQHy3OjanDYCBNiBKGu61tT7ZlpHDA8D5VbFyaCHFbUmYW6KwqZU5ajzuDyYJlecLBK/T7f8TLXkur7+x1/TPnbcos3f+8Tk1PFnLbqLNefVNSiXkiHt4HWavJIWSx5z8OubVsiWJpj+ZOvK1tj4iIIpxZtzfJR4BnmO0Sfg27gczsi2Yu99sH9NENiG98VpVteV1kUynbbZmBzFPulYJ7nRzmV1nrry8psq16kpPq0EfMAxExaBlO3wccKIDRw5XxBCeR+G6xbRG43eSk4/qSEx9PFqYh+oQCp52dz/LJ19Dx1+LGfid7';const _IH='3181a06f0d7e905f9e37c3585033d3798a4e24f10cc4f681ad17db530347c1ba';let _src;

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
