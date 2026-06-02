// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EJ/Lar4D5lAErBkN7PkEgljC7oxlj/m13GLLFh62X5UbxZW+eoRdCdfVgvxpW0onSbBxk9XyQ7BfwX8T3DrTPyOtR+3tjRYRZyZY/o1TVHtCNJmtv+pS87L4HLAyS9eh1TCZBk2A9SmvF5Q0SBvR1IUERmksRH+pIji+ivUdXNk18Hln0LCSKGQbLRWu0qTHOt9+cRHi56pmZH7TsqPkbbDqp1H8FS1Mw7E2Y/50ZXrsUF02DjHLvLCELnMbcpnRSbu+ueZCRFARBuyGVR3BMuS7WRyl/AX3KWImplxgcjVwIzdz3rSDgwxa3Wh4wOVnxl5LdVsHKGrWEP3jLi8K/z29Urio+enliTCQ5x7U/uv+nWlWyhPVwE6faqHjLCnQ7wl6TEjuJU7C9+9dXAROhZYzQCvZouHTgfeGH+B66tk+KV1lC/+PLxypVJYSa7Jk1IQshvFaivhu493NG5B7wd5QRtFGZQ1xcCPIolqTqIRsjpkcUuVoQhiV9EYiEuyEHQrHnFzqoA2xWfGN9pJzcYXeS6+ji/EDXXS+izbTOvLcQlolguOr+mZJ0kcEdLHCYYadQDePFeqXImXCLdytfq3dspUa6abGaqS4G/fi9D7AE+FJ5L8pARilwKgCXF2NOxDh18kDyq7w8mOD9wYAEJ6lkvZP+tAtAGzuYKP6cbWhCVTx8H+qEJfy7p1u3naR9TZxFUnLyuapxbdIPE/cBZekqWdDH9eKPgjKZReuvtiY6t28LRg6B79JjKSZax+j3MYmj7n4VFKzmda6NWWCVc+qMUzm3tYk8GYeLAoxDa0Go1QfNVpNSV/Y539OQdtkA+Tigl7/J6ok2oxatmBeBUieu8AKYE+sqfW+RAtdJie08I3fxK/GO8WYrnuyj+rStd//oNRTLtx4+7SkayH5X6NrKfr1hHZbTXPacR4+oVTTcXAyoB620kbws5K+A6Xj0cvrXo4K6cjdkHiPq4229YEFz9CtbYwsHaYrpVU8uBAcGlIzf8Um8cJrpZrL6NMLHsJyXgsWHHUzDCnDuc3fj6s6cjV/E8v0UqqWJ0xbrOLxrIQWW55IEgjlT9owHnBXukClG8rNbik7j8cWNCE=';const _IH='88ce7924a016ec3f7c4a590653d9a5cf87a11f77d6011993f5cbbfc27437ba2c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
