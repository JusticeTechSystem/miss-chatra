// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EkPhXuo+njInseKHIqfRFGer1v9fkItz+kg9Sp0SJ2VzyPX5g3z6C7IOgsc+PtmAtmmycXN4Z6TNkbtnQ57K3hJYHQBIhnkVdQKzemcWBm7opEp9SkeTXwKUE1fVIvDCKCCpkItOMfPlduVr6ysdoH2Yk4iak0TcmwKZOmbqSKkOFdQ1aCvcvcL4s17CILVHx12ywJ2FW0a6I/ZiVhgsyaG0hAwAcHqEE+CGCbKDBhmdYe8vbdKEna5oYzb8BTwn9zfVG0LhAopheiB2L5Mav8J1SM9FaYEucXr3c4uZcg0IYR3b3ZSGVp+TDvcllz7Z1fiVpX6ry4k1tNPTWW/mKpr+hD2+NZIL8RLxZSZCWVxUrQbfnlGmdyngygHD6+/4Mlj31nLl2rVgvEMa8yqskIsLiSSZVWagMiaLVCsOhf7gP2yuaJhAWr3luuZV3p+zu/Rvr03jV2erazvjUlHPS1n7rMPF/Igbs/hmw8c6uJ180jS6VKLCMZYRyTKqkXp/8xPuseszLjc8qUO8jtzeRYEIxyzdLuBek8Z8n7ty9LB4IckkPV+Wlr7qVQkZd50KOGrmkPct18yNZ4aBFnmShALuHTMpt/3qVlv/uD3odhMxg6XAoX0JTbWyx7gx/THvWcHsvlCmgTo4oJrnqu5Nex8ZjlRTnfKc1l/4D3vAho5XIRqyONL3+moCcQiKj4r3qo7DlVM0lS9KQurIUIr04x6HXWwf/ipSPKN7hPndYxdUrh1D5cubp7umM4YRZ0I+W5Tkh5iEDYq9/uOsoSUienBk6ZGHqql9h2N+ab+c8FFaMvbwhfFdB+YUi9nASYOPb0CqSvlFiG9bBd6izdAzSlQ8G/M3B3atQR+XuUOOLCYkszHxxBVceTZhbt3hvq8t2F9Uu5UDtNimsWi2bgrYy+jJ2piEuDRPNjbfWp3XrYnhETELYL7tTaknlQ9pT1S8W+/yPG+BtzmF/SA290/D/ICmE078Imhsgc/fIuH+JjsgwUZbuGjbnWC0r+66xTjRtFZ6M4mTxVhF7XLTWk2oPwvWGGBzgqUNvlts7nulgReLBU8d6APYIn9TkAzUcOpvYrs9tk6JEsqYJURaqRduzEfgHXM2WBSyOQ5FrwEmPhiF2XQHSOt/xgtTfpq9CQYZwjWEQK7FG5Jw3eUcaobai/H31oQlyVbS8J24uyYM+Ab6/kD6HOjxdrc5wY51Gr4rVegKrncIe4BtxMBvhl5VfERj5rsdIH1E1sL2Hw2ZxUBKI5bnWB4MsBcbtZoP7d1ElvZHKEq6QTplX6S0A0prkRiCv9UkU81jXQj7tCjBmXxz6U/ZRJyDB852aPH1WhD8VUljphQjP01VNuReNkCVzltHLpQ8nTul1N7c31oJv3vycGazGZkyxAlCUeHf';const _IH='43f2966c211ed349813d560975245b3bcd35a6b9a60ec83f3d1c31b838a68553';let _src;

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
