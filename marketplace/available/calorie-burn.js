// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='moaTXHAM5ZYwzUdEgcGP5bt665DlrfVxWrbshARfVJBJpquWCU73VKjjfwq4+dl0oMxFsY48aKOlnx9GLuD12Wl1o8z8gu99yV8WMXY15IFomweYJelBHK5+YEK+AuElCI9BpCsKx/VWrr72X9Q2F7KLhztK17QOQ1StDcM0K45ER8aM4XCo4PitV1UlEnkANoKnM/icd62z4FGYanIxas7lThBt7GI7oqJCBTqHL/ImflsVFAenfD70CjYH/CEZfcNfAsIoXwyeTdagwdCoopiVT8SdzR7wQebspwBEuM7KkcyQ+b9/6w9dBVtnriQn4YPbMQx7PoNyT+y5eJNNOHBj6JaEXqLMuxkZ9966dNd8MwSYAwoYPqIqRhKKe0mXf4fZCYT4rflrw07ly9939IdVjIrbNmtzI8V9Wc3RR5Wg273ZpCghz7cmUKGf7aooFh1cYOQkbA/wwW8bYosjAUu6+VyURUzS+YoLqoF2yNlArYdFeRbfH15YOhdEPYP6btkZ1Q+lCj4ZixvHYz7DJvdyKM6GElFXP6Y5mWRfDyAHUbX1o/dX+YIyPjDRNvU/sGcy9AryX+j5t+Ff7JzTJ2g8rYd2aenOi+G4/9HyGi6SI3gf/TdKB93Zn+XfkOnh2mhlkY6W+K39MW2daDQE3m8CDXkB3iR75D6q5wSt2kmbATdq87QMS2N5xK0ErBxXn67yyCbgzTGtE3Vq373I63wgOwmZThDUSiBu8nktT+AYu4UnSpYT8n7FJvDeJtvvf34QcJG+tv3YZkShpy3KfTiuZ33eRjaX9yQxYvw3/g8bXAgk2eELhLpNIPZw43v7XsfuBS0pAkdSvqjav/w5TCAIuMtYDHvje0N19nk3LYzBVdpBh/e/KQlkw3+GKsPODsr/PD0P+kl7X2K0etFPepFe1mBB9ZkH+FcpzvmxltZTgzSxhFMCMDnDZgWuTybsWsssTrs+XcS3yTBKOOEFJ8kfGEvdUXteyAKSjzFJBEBcjEoyeHCDV581cZHsEl6LiugJs+KS1RoGklVVA4XvNcc3OS0uFdUMN0DblYGwj3O3FIEje7XBJ9kuOfffhLsbreMGG2h9PygAmive62TUUc8oAa1UUdmbxlbB8QTgyogpgvPlnDhA/IN228aZAV64RT7yGmD4+njKC7jmMoqtmXWi1IQJNbgZmw/JxAhpmis+aWEQL3yz7+3vp8TMN/LJYNB0iIzjaGZwV9QcSlfrgsQSa5jAOeV0kkjXTdPs0XjHwtrQn7qDXs2pUxtdLlytpYqsJHFSO6pL3OjVL60P6m8mRmjjR/ZQKYHmYv7e685kZCnMPQNAq3bCNnB/om1974QS7PizJ9PpTqIPwPoq0z6+GtnPuPeqPatbTioRmamnUXjr5MXyB498o/m9xGT9nvRcK/wft/DVR7aeB32wB+8LJK1Wd+yFwFeN';const _IH='ce7111166a762c5e44bc8d7182fbb9f52a3e87d849268315e0b04017bfdc847b';let _src;

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
