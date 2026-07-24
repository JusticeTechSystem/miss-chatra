// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRt7y6DH0GcXWiDw4Lqif7N3glROZDyviOk08vtX13gyKB7YFLREC5MP3OVbjUqh3+mlyfTVg9vuYxBl+Pm+usAAiO++3kRTZ6MNNh4dqmyinjzG83ViMMf5eK7/u5sSEZM604FBI1z74dPCLuoUypu5pCfw/vZ4ymQVwOx8Gqf3mhH2IhlBwt0lXfgRfDkG0BmnSp4rvV99N8KmUwKNxn5y2VCyZzp2QgzcMJXIYTAi2UvqCA7oXRlx0DcpfRxDVLNd6P9CrOUDwqUABGiykqxkKNTpVOXccxHxfVh6S3MEb1sanf130OucCHmH246Y/ggDb+vqSNM/C822feuADR0O9bVgAajNXe4BuCilWROFliGrSJ18KRlV1pqs/Yt61NmtTV11upSABcVZ7bNjh6Fuc7KHPTw4QXwlVxNhdFzRKfpq9Ug9eTxmHPGbWRPMpwXsLkXdK54zLTjsVYfMfnIcxE2iT0uyTXVEpa+aR1W/Z4Idb+3JbklS8yjcwP2wBNGwCV46ITNBJ4cLwIq6cVQW/kIrjJQZnWSL2tnMDJ7dfGb9qVFZZdRilqENwh5xqiyVBIEKShfiX9sJgAp4vhxOFkD4gJnr5fJQCacFaX2bxebVZNYECXph/7aZrQukMXIy2/jdx6+XTVjPdtYtijv+q45MPW8LOfICJtHg0UrhkQ4+Q2qT5gRvO3LkZ9hKRES3yZdlYXnsrhdk5RoPCW8+zIbvlkUy96SrIjbfIFN6aiSx+sEWo6OTffKBAd3i8DnLKKCC9GaiHl5wy0rurS1xhmt+c7p4zgeX3AlyNrnbF/CAbQLYJxX0Doko9mtVdbqf9vCew3R2FPPRoJgMuwLFR14DS6iZqdHJdouvU66qpokPbXx5nH8CdRDPOLpjaptEFgQ2PA0KbcU80jbKdfWDqlKit6agOUx/RcjqR1YJmbJf1Crodz8rarbZyQi9SjfidXpmsAc3wZY9srEoDWzSXIg2Fs65RUTvrSv3qaIVrRsin25p/8/wLpH6A6M7Aj985LcYyvqaVf1UMyAWlkf19ZLlW/6IH+AdKgruofkj1fSInRFZouOFMqcWPpqA3GuEeQBhnaRyKcjmSG1UKoc0gXAmI96Eq2cNjOPZdTlqHasXStu+fTL8W+7uxxoB38PXa1W2aG5CJvPvox4xhEAKAwA+p8TeozFTKD/acWKWSMMLnBztLzeqcrPHoAcP5D+V4a0rD9BADXaqkeYoeqHRs9qwwJLAAtfGM87kQ3KviAvl9FgBFcIuOubPzhU6LMPrn+V1OqCHsF33+6SOLycRJ4JJ5rXQSbFeS6Yd5PMSIkWKprBxm08d+49qQGTj9GxzlM1INLEGRfbp1785uz4WflXuLmvMyq33MnFynH+TU6/hP3i2ZUs';const _IH='07614142b37ce3c94494832e0496032aab95739de6137e966427923f88b92d40';let _src;

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
