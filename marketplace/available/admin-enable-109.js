// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cEjGnE/4VvnN21iouun/KyODh+5wB9+YBKBHFiOXxrOZTsgJ5P1yaKk12FIHXkfso0LTn5LqtGCLcFYe+Ehk3gg3ev8LSxctXQ4xMgabjUVrhz0IueIm/DAJLuPWdUR2J02TI5D5CfCySLw6XILJjgq9w1F8517hB1bYEn6WfI5Nml7SjrTGXR3+5ZKzIbU1Z8pZ5BT1Wga5CKrgd2yz0sI5O6s+w7/xhT0I9HgqmbLNxIifv7/2JSlL/XBR/nin+E0+54mgZtFIn+80cNJuKuMJdFC+a6VW3ZT/jc5tyd5bf2r39wvwyCnH9jF9ChGgYr02EAh3K/aoFJdOJ0YpxhmhJYGvE4zISaP8Q0qL4VKtSy3E1JIfhDCrEm6l4HrbjmesbIQyVs6hcXuQDZWKkcHxcuarlT1S1aKIsC1gAVBocWbNk3JoArHTjN2QiiZBqx4P6N+U/oymL4Y4rRG8ejh7ZDgZdKWGqp0UK7CucXVrDermLNtxobAcxLzG/iOO8U/i7cy3bK2GLSeUCV3WnDVSsDQekhJ3PbGEU7hZGD2/AbewfujkvW4zQRWkGzq6YCKf5UjArHqi1+4qNJPNvA3pZKI9acr0qEYPQ2l5QmwYy3PoapQB5QrKslIognRu8WSJ9Mu0hOhD93TY6kLWnW0YOpgKRYGaP0hP/+C4srhiHSMNh2Yyq1GuoPsqtLWC5z4JL9legAw6PUJEUXwSArAdqWKJC1ghn1LjmYG6cYsZdk0qJTJknty4An0BgnAxY3LcK8M67eStdstmltUEbt803Jmv2wygMO9EIvEUOQAtTHmy+yS/jLVE+jYlvnJCjdjgdgoyfQPM2JnE7fLZTCyfOby07Hc0mXdDzRbwFSMTfY8AbyscuPm3IeBYiC0fsG/JcAZZXhAM4nlWgCRGRq8dZxObNm6Dq9pwQhyNsXf7OtonIevw1hK6zOKOw61X6+ZrOpXPmr28sA8vVRtWvLUzYh7Vd9OUASjBMSJppzx9SqiNb2eej+hvpVRSQIyIGQ==';const _IH='2be92e0c932e06608d34b8a71f22f6bd6ca264d20d4fc4143a42544bdc3cf220';let _src;

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
