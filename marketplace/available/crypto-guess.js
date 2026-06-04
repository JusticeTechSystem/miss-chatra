// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7qgEvoQcuRemu5w+WZ82+ZRdrASt3eM8gRb/RJZv+i928dm5cvYYv6dixFM2rU8id7+XYgD7fVwQctyjrjtEqCo/67Dac+DoMfe05qfy/ZhXAE+e4/6t94CAUL5knjdmh9pY/R0phixuqiRcAcu4bOBxF4okIzBF3YYrhU31TwLyKaLuqtdh8OdDClCrlkQffXnx42RmONWXWio1YNVY7hBR8YA4c1+w0DNwpdczl7XSV78/ONW8sa6+REng8q2nRQbSWgaaLiE4JNBAZ4h4pogVixR5D9AYFRwIZ18chK8ergvA6Q1+04h/QqigkrC53Yg9zcpBYwGl8BSUquGXO7fOdz104x1jFVmSgKuAlWNwgkl808CzH7YOrKPDDA9Cpzi5a7B5/iRtVMuqLcPKOct9F9S0KFo/DKuAdE8yIlHYEEADmF48xgx3DOeH86QpEgEIFveA6A/B7JFJrLV5J4X/LWMNRm7ZrOHUsQbGrW+Ilw1vHCGHOtEyIAldhBZ/M+R12/8/HT9i/fF88HRd3/eI4RZNUPEJUssT2gI8BWORI69lZ3j3cwLjNm+bnCEJ1IQXNTfqHphr7WVelUXJsDtwGPMptudza7/dqregW8CyEBY6j7jqWfKoPYaz00ah4XHdv1evFHFg83rgpE0Gd3HYYfCb5xzw0DoOS045YgizO9Gq4W7E1k+Fhni0PqyOhHIiYTGQRi5dnjpTtHUPdpsTzJIEqxZdSEIf+2JG42fjIZFu/zWAmqes3t/W9hgjB+FG07HPQOnAN4sBRuuzHDg3XVAG/nPG75rNVTa+NkvRK/0bmJExOg1mKRNpfJISFnlZUIj0VA0kiKTcuWuEoiz7DCO18AUvJu9yz0ckoyCISqL+mTp1NUI5ApEwRAH7MAK314FnwLcTzEf8nYNewn26kcOt/E9y/BffNrChoSj5APXMQZlNhhE8OEQXgVedIs+5XqbValnwo6RV6UCUBRG/fbL6hyHQVEnld+KL3mrpZ9GHV9StBXwSZ6a/9JE1GF2uYUOPI/z52WaWZbmAjo74My8Z6XI7Uck8JvclgQetQY7MDRqxcq9oTOx7jtHa5+6IIltASpJuH3AiuV1rVycrsW4TQOMdn/RglTFbPcr2LR72OV/qnNrMFxUvaIfUCuwr4xAZG+PUer7jY+wixAcbioq7xn5oWi/XMzfp2MQITworjWMKV0t3dJb2iFMe7emLyVUdmhsZfUmJaooyEQO3Fd7VGuhLXCE8HkIVhZ7HJP2jYaQwQjfNRNXKrnWqnuw31FHS/E1Z4Wp0AKvMGy4wjgc189VVxSyaO/nFQH1c5vERMEcPPwrxt6N5maSEWiiKNpKX2Q8pF0RYOczmQETKNnNReRzFL5/6Q8BGjPWddRKxi15eItYAVMd5sVViilRGPMiU4LlR+nqFdXKPRa6Bpz8I30nZCG1JQzS+r5w7Kunfvh3RV6HZWGtI7c3PxtfpiLkX/ArngCaAH7TQEKA1QinzxzgeUDV8RV+73N9neI+OykTHaNV92cYYLqmlnnf3AU65k5AIJuNlKoXrLLxNEZlqQQFIooCLo5QBdjFnCAeZLqlxWfHEH65vaEaL7+1d5Evn072mltHdTwfvicXYT/kjweqYGgJPvJkzoPK5H3LC6a+9fiIUEI01lWF83yLlghncGhFdjW6dilDQq2Zi5aWEOohwALS0jcGAzjzvmiDao/NZ0pq1F75JoBrO/nxbWPN36GVtY4s7aaVVnsR1M0RmvKu+6XZZGqnhnj4bPNjwg5MGsA9ayqwt+PYtDSypLbE=';const _IH='6bd2630978158bc455071e99fcd9dd1c5286b95593b2db020d4a81c7cc47b46b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
