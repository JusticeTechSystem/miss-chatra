// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JQKi4WJGoP6BxKCTVQ0/IXkZwniz1gVpR1n7iplCyqTkiWMW7XctU5po7rwc0g1MnZVUdZfWZ+/Cke/FctXbfZgZIDka+6LHR6Gw8tr1YSewMiEb4ysOr0yz0EhCX5neCkL1hvYjAPzCqkFELwDqlA5nWIPtXpK2871RKBi7g8c/uFcPHmA0ZKqt6/p9pDWX86RFCdJ0omM41UhIAJOrlvHdk7bSllJ8gKu1X8gFUQeqSbl+qCZhb5i2uUlkP/m5eGhdl6kXuztO9I6cPocIF/J1BsN1LisGEXTQTfoHfqX8HX5tC2izQac1Lbm34rNA0yDrorScJfvlaTtbH1K1rroSI/nDe6j6HhLQwQFpiQS8jBV4X8QwIDR/v+T1eDI1b9UASja8rx1Ef5gmMESUk21XfhQLbAr5Ml+TPf2/WWHoFRwRLoERVI63U7kcIS72RiLWbwlgYyoYR/ydfiY8tNUMMlhmJsmNfbCiHmt+hOoFcityok51RYYM1X4Pa1T7Nhk0fB7uTya2k3bWk0H9JZQkKtAoVR3/a6UTyijwb7VsU0H7xvMOBbb6R3QNjR6m60oJcSsVupqiPfjoJFIz1KQDWZH2gzc9dgvypGu8DhlZXwjyivz5JFYHn0TR8ML8sWfMH0D0l2OHR3wN/QAn76zroaVAMqJwZ+iNEkt+M4YpNOjeSSa+mpAOtGGzcvtQykB2aM3lH8Muw7cZw6ubmHB6EiUQLHSJxPMxEr8VYQcl0vC2Jq+YzGjBqQRv2EPjgQK/kULztN5O2BLpmXo9YxAl40gnpH3a5wWPxjJ67gsfjMsFJezSzDQl3QZPtVpDWgre8rIdW0PhuYyDjEWJgwal6sPlEhNxsgMz6QfxNdthkZFQZiBR8A1omMlZUrjEl/6MHgrVjD6KhJMsIDUpCw3i9/VZi1XNFgqNSqtCmKNBD8Z5rDs0MiNipT1osd5MOl+4fPv4loX0n/Lt5voqVx7rtJnV59D4ZOc6/OEYWqo1pzDUrxq45Aj9NysZz6pUEVoilBNWYHxBbW8rGMQrAPUFXDcNzovKoGCBR8FeS1fLtvqdks3uJd+4QXRPpIy7c0FVX8NvnvKpjxN7DQi0wMPOWImIncV2IOcZQAnFGD9XknQUOw+eFP9hCdQXbOcPlEvVzEOJSkwHI0xdbGfPbZzGnYEpVYtYn7bKoOd05wwLngNOz2z95+YRo2ULTJpfZWHOx8qHgeMG';const _IH='828c2bdad40ac34310c68e94fe79ceb2012cfdaccbec4a7c589ffe70ee81a6ec';let _src;

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
