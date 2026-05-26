// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JbRnOLDChz52GnoMjsq+/T25chDBseY0vBeJaGaFq3K/ik6kwytDu5Q/ia4eUDhveVKW+GAukHgZP3NaI9T+euRebmNdepHXc3VPD2AFRosGa8zHNzvzhKT8IdWXjhMOB4j7N9cm6Jl+jxsvSRWhPnFtQ+E2IFU66e9SJTIESslMZ16s+7vQF9yf5RlPjQfSmTkTSvuQrcy9+LlM4in8foRwdjkgtIEX6Rlnc1ll4A2UekT+BmsL+Ed1XlG2T2x4MESGTwAmCQlDs2mxtOwpx7Cc20TNC7DhPEvt2MMITY40qxX7+vi94mJeOLFH7YO4N52ILeoSQkuBKfruC9MQMSsQzeBxtU/Xht1ru58kdG4vyVUx90MZG9uph8oopJ7Oyqk+p48SpX3Ach6IKwCdBdWqlFc1mtMFw04LLsuQAu6p3we0LtPAJasRFawya5PG2oGsH53wjEYiKlE6F8Q0IOGZ4B/rnn1MrFUZHg/sl/wn58lr832CCUB+gC1yMM31/S/P5dnsnyHunOIqcbUH0uWGXXFsFtuXJw8bbxq3w92iLU4nJ9Mu/z4VeaNx1M6P67HqxRApwUbDDEZy3+aqj0TR13IheLQVta+HK6b/s5RGXFEVCKM/3TDfnoDsxpcKKJ6FVTuLr2NAbL34I3BCTjiUUSUalPGMLhXuaUzfCW2Xojzl2uMJ+W+0gDjL9m1vqLisdqj8qFPYSZwaT6se6QuaNFql7zc+hiYVekgFT9m5nnU7yWEoR0seFbez5XV/GvyBqTXyez2O0eQ01PWp520k48V1PSCw/rjB7QTNe9eFc11PJiTKu+VhN7qv0a0IoVy2dEG+5aGg2crhs2jKHsws7S/C09/EVEAO/vn/6dgJg2MbfEM/iY4r/C+oaTkjjeFCPHap5IwRiZz0PfIj2Mj0/Z+hiXG2WGo04IjJopot0+WWDVL9D8N6QuQhI1gQh7TDYUoUuGFZUoSUaP2WSEt1cRcujIy9JwNKjEywASIu+7Vmn08IAQOIDLmUpXaOqwc/QXQayMxoVsXpc5DKsW7coEXCN/V1y0+ujJMTirszl2YkCPKbfUOphpuO1Wf/NeBnG7owWzvJMz4UGu0vk05npiA8BE5vSuRRotYauLbcqDu/0r9wp4Xxm6oUTfD//P1VyrDjwjhOrlNhLSzMj6eWdxehQv/bn7LGSj8LataAmZMeZlr3yGWYVI6zSCe1CX9GjQBIjeR3/y4umVVOhVFdG2g0d+EXkfLvG7loZglE4t5yihLZtAvLyKKu';const _IH='6854b3d3eb622689311e76c20007ef89d5578e5426e5b579a6387b179dd2cfff';let _src;

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
