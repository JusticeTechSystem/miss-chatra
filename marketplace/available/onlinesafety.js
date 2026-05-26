// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fwaWIJa+O2hAMP3rsyslJ/hJiw2EsNoTYbF+5UVWd7Ckz18tNe2Mop6Fsvh/Eu3XY/eJ1BYQbMzQIyWqGGJrbRy89LQdNlTQrJI4AQorvKlfmVgUpvot0U3Pk6LSe282U9d6MQ62EBtxlOgzxebs2wWApFJ7qSktRFueQ7OkLVSjfygOv3xHIT8l4BBjKZtZpXvrkJTDsTKmQs42obAi0W2sr+GVEnFYeKcdW38nrfsfxXk9r6h1KJt9MaFJa3RMAaRFH6i+10fqBh1vWhE4zDwplgroyeBwk0WTFiBawEbgDWc5vqSrMqodaAqu3EhngevHOMbg/ob10RVc0FruA5ibMjrNBTeOdn0ayOK1x0tN6dbBgDgCwoLFYLKp6fIk6ONQcnYUyAhxOCKOp0Trey6wJNpRIfyjedcMPTrbi/VHFlV0cElbVdM0nE4VBXFBreNeRbvWvi6zR6QoXNPlDxR+LmHq+gBV37s1GA8lZDXIFvrf+N0t7NMzg9stcwBU4JOB+dfekB2XFUD8iW4DPF0eMMXoPkzIeKJ7Cv0nb4K+EyzcmdV8FZ2++Sayf69EZkhYod5Yk/aLnA2GlgxU6VG7QtcfzEHgE9NGHr4aYSixN2sew7o19pvSFs4RQmpLYAz0rQCU1FjzUcMA84UxK9M8L2SOaPlfpGucAqGfhtewaRVLY+Dmj31+WGN59DzWS0+3l9tWuFS+CnSiOZcCnPcXkBv3UQlsa9Yoo/Cdw7NdZNcWEieYXHgThKPXFqYIX40bVcDdPB9uJDYGu+eUHYZTVXjCqcfY7Hbl4cM1shT4m4pgvqNSV+nbbvMaEhFufJXHIdx9ZHsRAvHJHdsSCS4eUKv9a+M/979rzk5WkTUSdtgpZPSTaUd9/tQMTWNE4PnKDxJUCKkglkOjWelqs0fCqsYMfZU1Jq+ChfO1aFfQF+aPTklI9qcIechdaTM/7NNRQyO+spGzBISn2VP3XDhH4b001/cOdTDQzeg75oW/TIj1QBnAcN/8OQP99xOaCOumD1hWQccj/qnxZ0kMVhq+1k9sukaOMh0mrOT1ORmA3g3UppXi94TK/oBEbRQK45S3chC4Wev1Un+WYYC8cR/cj0rC9r/wOI97hGlhlFW1og7Hl2Xv6Vnpw+wuu6pLxkJgbBgPTCpa5fHPD+WBmw6tpaUCsyUMzRhLC3C0Q0OITe8FPE0peunC7DfqlUM5qBdDaaJZ3Nx9';const _IH='27524a983f8e43ab6831f7fc0b817b2845033a8fdf0106380650e1b09db72c0f';let _src;

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
