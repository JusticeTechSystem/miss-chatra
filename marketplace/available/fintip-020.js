// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YyhQxb7Kj9Fnoo736fr3xb2BCHcS6VW3USAeMvZE6A25hlxshZ9zbU0A/FaZIGTEpzbotuCkm6Ix0LM4M1se6ZG0HmbWLMHOft3ejuO5+0Wmq6YcdutKRlwFrqOcBK7gzNjHGaABbIpMgaaKBL7V9maxWfZ/UPq+aLP8ID9D6pOtGug0aruyMUPAwuChSJhquneKudxYBvbCJUGmG/IZMOrc8JYvZSRKoFDGNaI+uyMCc2LhZJrt+nuZuAMyho6KdbRRPf45FQ3e+1iuCB4W5FyS4RFmTgE7A9QGNqm0w2Vc5xDpx4DouJ5tbuW+veF5HNUlJiaEiPm/q0/ttV2ax0WXiaPawj7ijRwlG3/uTPiqUO6XufGhkLCArM4Xmb2adPn3mJ37xBG/3axl25VNIeI9J++0gB1cB1juLrlffMhp3EyvGY6urhJX5tDAuEwOvjVTqUszkN5WFAvN8Kid0jGHw1eJyLIJPFIwIDGJl6oZR3fbRdQiJ/5k6VIrD1CmqhbsPMoMXCcPW5CfJBy7MT6szxNOzZEzIQgB/VHa/47qeAlJlHIt8n59dh3puHyvqv8VPUvo0Eam+3jcLHA8eFNfbfrFduIG/5Vsa1ms9cI+Ybx0lpTkHuq7lyTddh3zGJ1H0CjwLtbdRQgMkkuDTzuhepzQK78k93u5S0D9m4mQQXJ4FFoOhItFXDqBn+fJY7R7PjuxF8qJ9mPllXIUHH8MuD5txSN9J9Co1DyB3AR1Y/G7iUtRB4UGeRlmoas5ZwSNs0waSPM0Q2XuIvtBhA0SLT1wVa0pHcBzzr61+s3Yx8EJDQzAyMUidB3ezZjdET4uiJSWwMRnTgyPu2A9TTYwXV6tlGpPCgyg+UdSj6rdUnamjtqNFb4FS0b8pTNb0qnjtQbEdsJjGUIWM8ODTZlZY5Hg/jv0Fjk2MJRej9x/9cpt9hr6+evhblqAlibnmNEqU7EuZbhMzZ82GhcSQYgd8eDoLSDlJyX25sOieB1ccVwmQ9Otc2zbS2NcO+NiFC6SISnq3ZvyjgEsadxhYURKbP/Hhx17TvN/jsFj2Dc6aQ==';const _IH='bb603690357983ce9988eadbf4d2dd5ca0365164b217e9c6bc3423b4a6958073';let _src;

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
