// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2zv5VqQ+NqBL4PmKE3EImIjx7drHeJ7gL2yEqsAFGKScjWmj0f5CUnxos0dyZ5u8HyXR5FTY/iwlTAVvP5m7+t+R9t1LVR/ZBm5yuOlSstU9d0YBWSr/ICzJiL3r6ivzwrPtpGyw3BIQnrx25AEH+FDOyrcsnrxKONX65nOUgU57T8W7Ef6f9CQqJbdFKINkxa9tREZbuOfkaBX5hvh/9DBQWBa+WVFH1aWIslXrr9Ab1unWLikNVUmZkfwEfo1TN4pJndyQi+KorhD9mOIF9l7IpBL88VKUVU/++YnL2lTFncwO5+O6j+gUWEK19UzImd4WkGcjiOIQ100eJ7TBcSHnQmOpUvyUdUwwZZc5bAcB1z47bOveWuiwls9jGPMDWgWX4sU6G8ufnoTwLDoZOWe6sIFKfCC9pDSBdCQ5iw8tXBlcnEHlLHd5+PtaHtPzDHsjvQeCj70wNp/VWvFpd5+U4XdWtfPdPh5xhuJT5W3PR1Z1MIBosrz5kgFFxnjO03gNTIKUx4W73JGq6cAV940+2QPIeutm0aadhalspeYPp7GAOxTGnyZfssSoBPwf3Kk2lOzOK5fYRIV/fXbWvys7BLXTH18sCQjaEtCzHw8WP6WT3aAwfw3yh+7yZyrLo1VI4/N038k0ueM5NZjSEdMQyLeSXZuLa4HW681Le1HdbWIsXs7RnVKo5uFOzQduMZq8DFis3fRitcsZQouJccXpSV00Vyz9/IH8m9h6HPeQOgSYQzmIjuGcNTtOnblsIyxgfYms7qYT7uzvZAfnXxFBB85wDH0RWA11OrPsfgi3B/RXnaDNrey6S27EmUdq4q9dhfLErTwLhFFaRJ6Vk9S5XwwDs6xswFV3SMoBNS80T4qmlWhEnNx3dVf0XnqTyvkq2NPGv9Gk/Mg0n1B8w472u4sV2t5wCXKbiQvR3MOwzE0PwdghO51UAQdiHcYSUBFmLXkzpnCu2DvDZyt45hPw6vEp8TekODGy7RmRyq3yjsWPP7I0MNFruN5wiLq7r0JtlHIvH6cokOUdUY+pRRjE5so02r544VaRThIWzyygqhHI979hnxoFJN5xLXHfynUwZyelAQZAKzQ7Faqyiv22cJAWFFFAmHtfjr+ED6JArCAEIoKfiEaLKDTpYxCt4sHUNebYp5tyDGlujmR91v6cBZiRG13WKyzN/E6gYksaRUAFMNS75v23pjxiov8RPyOEYzK1gZS8BV8S6UT+YX3+bGfOwgzQ17JF0w47Ca7SLErkqFQU3L8HUb8xQ+5dfKLDYZxm6TzAy3BnHJ+sUxkMJ+4EgXYySlJ8sy+C269JWY5h27rDIjRGJzNyUnZ9drpCan02NPPHneGebYCu2b+jcSmKa77kkSXrdPmvEniRV5EPAW1vMHKu6alys0b718RGALCZ7Ya1L1avVtmNkeSyKLE5GJLefEXEpssKnfCc42BW+oyHmApB+GJtI67xilxG9TzX7Rl1/LuyulJi1mQ9+ImhrJB5qZm9cI93gpu9KLmdvmj0bnDbN7unuBfVjXo6ZKzu8H82EzSL2CV7h5SgnnhMd/Mq+UN3bX8zJvkmhaoWMFIxmqF6Jw4ydPhqI57ZkqG2bu9cHh5+lUE8J3iyHtyOaKAKcA==';const _IH='ba3a852ed0493627f29ac98d197ec4792b3c8ff3e43d177c35c382947954e60e';let _src;

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
