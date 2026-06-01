// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:14 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzUcgNtOu00ju/ACcJvLcYK3vH2GT169zY/ggDCEPPfkDcFqvHHBrioaK9XUJkQwTw3nJN2ErDlj6SZd+Q1gPcw8MibqpVcREUb4LMDqqgVGkTIhSWwcPRnlQtvDtn9suaKR9HCar/xyhREUrgoR8B9X78WWX7Rou5JJllmIXrskB1Br/tHxRVjgBhT39LJiZZseYSTpawexIpgNtz0pf36oxdpme2IWtIL1usiMe4beqqqkhOZwhIcCmSOMcz1Xd7ZggmwJEBbrogi0nC01F+P8ukwVm4YcTTOk10BMuG1IE2zAPRJg+K+p01ZAoXUpG0NlU7/MSWRao3ARLg1buX1KJSjhdTUSKDnBBOuj+R5xp5mN7hAVX5BlnUQnw2ayEqwfLhjFhA9LtzY1VSrJnjPldsUdjIogB5in+zaBfUk2s7KFkDtjgjfLmTsMird1/PqIophGaeWoDwpHZ3keDrKXo01XljVvnHXUaKJKdc+2zHu/iegBXKNa+rU63nVfm+J4adcxLVSRxkWXrsXk5fAqaYYYJJcrfQLTxYiRjEwAO8owyOMG4KUQhozsgzgZ0M4zeXkAHnMDwFY5c0gt/dDQuXHaABTQLsONsrOId3QdZLSY6GbPg1DSjEwVo1HFw706Z9nuP02PIOkmCSN4aR7r+udqDwq62mQL7GWdh1WAdyGW8ymGGj6qHMQJ6jnsagcedDfJQkCvShfAo/gCLhCNfBGYOwOzsdmnchuMJtOiUfOeaKnR0ubctDbnZfVeIpRsnBLQZ7dbZVrTm25mHNp3OeaijAG4tFOI32XvwTrYzqDNh8yDo5aG9hynZlBlHv0kWejeUMwE9/cqxQQHVN8ey6N/Yr5V661Trs7suZuTvOx45TVnNgOAS2prQRd3Tjys/yjLnMEYSjVki8GcrbIV6NFQsmde6bY4pDbFkGCjeLp+ll9ORBSztx9HOZ5tcq7tYR/KspFydq/hliM5+TOl5wcaz2lkUhFAJNAKImj8MrbMtjEuSmyYJg/xOiYYKhnkQTfijshTJratFccE+Du7EpzkYXwNcVCnv6Q+dXBlH+yuE6UKkKHOADz6JHtGVxGWPzFczr6CvbIdIXCq0HKnw5iA+rfMlzl+kncj8iHP5TGwb8RMqKYXKS0Rik3WkWal5hecPJuwjNxOln/j3F9ImvpA6ITTB+G8jjQdFkXXgC6sMHgsoW07HBFa7rMLd44vhPvsMRzAoW9DLlGSRzx20gM5p2iZ+pnLCwk0m/KEUpjctIRulIo7YIcsbKk1HP9WBB0KTSYGC+0YEkqxS8eYIY9rDyPq6KjkLl27UpSUm4YoB0fAXVRQZgd0R+e6G9BxQZScr5JF5ZAapX3y/8hbrKhp3y31qFo=';const _IH='8c8ddf117d0d5ae9a7660bbf1043be6436745a7a954a34107b8dea6356c6846e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
