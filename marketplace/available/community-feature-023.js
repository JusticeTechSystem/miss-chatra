// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ftW0NoWNDPCatnj77XdqP4PVJOuxYN0RobNqIzjYNNPa6qneEsTMrtT7RxI6uaXRpZ+a/R7cAIVS5HPwRV9TCZtQLCTCzGFtb/sOFAuyCzrCUa4hV1S9zba5nEMhqGOZgpleX1lvBMbnMYoRwbDxG87qmNcgHKWBJpuHHflo8/Ok7djkX0otSOSbHi1X0hpj9EL+Iy81FKwhqOun7eN6N9jZ53Rrq3Lx555nsVNQ3Q1mseVk+8UE/QVuaKfOg2J43YQEh9dUtYDRBkTR3cXwwJpW2aUUbi2Mu3c4WZZdFJrgYft4Go9ty64GRsBqsXhrDlROkSBMMDNL8NeI+YX8BTv4z94TDgyy9KKAeyR2wGyjS482Q5z1+xumQjyOGlLLdzup60hWjjstrGR4TDisO+Pw27sjCrwGGlJUQPZ0pulJ3ya54fK//IpAePAKYH0yIp+Yx9AmTNg12Md6N6eD9xT2+l4EyHoJEKD4ukejhzMxfpAh8m29vTkSD1tLxrmb04jJDFURUKMzLF59Xrw/HukIOQlXKMfqsT+IaS/VVh4nj6VUXZaZZ3IWY5o4D9sni+ouZBTVIIpTSEitASA4Oi/q4HL0MYytWiFLkmH8DzW7y+jz1VCI/Up47a7ic4tbgalcd+TNQvE9Qg/u7DT/iak+8aA14SFF7d3e/RuM+ZkB6YIX30g6sS5Ed7oJk29pPqe2N6HYDoesr20WmqE1b0D3DP4XsgwLFw==';const _IH='27e1107b096023371d41a525a3c089f15c835b35960536d5b757e95529af0053';let _src;

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
