// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:28 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5fNGVDd8IINvag9IG9s0vk3TSkix+B8keCq/PYniUP6m/9LpT0rsI3HyCQf2HKJXAvU268lu9f1v+1Phea6bmfntAR5lgWWEZ2Ixv9rwPxqiebsTtTGsz4kJCenot03pGMEaGOU14Cbl4Okb16vbwY83FCSIDoBGqcpyEqIJt66csorRUOcmSR7xvUus++zRxm+9/QxPRhTIF5IIEujsvZsXMMHKbkRYUFAQ3wVTph9MV2W59HrrN/5+yEs8XdV9xIpnxgd3Ui24nTg73bHyl+ksOTrgqDUysltGpeClh6pZhYGpAtHjliZPVimNlEIGuUbOIKOZVx2XHB6zrgeuht+SmSnIdxG1MSsbuMMbIGhr5xFSAhdMs41Ca+Jatgz0COhaSiqhrUX3XH/atINO9SabMRbGQBZazah7tGNmElk3/aW8yGi9sCBVKwDBTBG1f8VXQZIy4BWaSvtMeydLZbMktMQAVB60gXZRhc2h7cUWCHNwZyJVp865vnAWXtzDEy065WAur5R4ts0hpamD6duH1i+wWZ7vkvJCdUB8LnfyWiPhkUSh340YIDsGPwinKf8pmouedbbnIxOFArTIjD0uSIwkcnRfDxTsCEmwz9JjHm4Cf7y5SCUZk+kkdMSW3WifZeu74bleVdX4/mhGiYsWTmNZzzObu6uQAOryMg1A2UAhkwiFKciYeexDzo/BqOemTr1elFFUzdSjeN/9fS+dGAgHmWpx9W6fZOciOpqu8xpWJw4oc8ERtz3gYINMuGSOJZbT207EjSX8vpTba8QXyTaB6mzF0/T8vGbaTdEro8F3o7zExsP5jjP0vTxFd+1h0JwjekiTr9bekTgh+RSNyRFIFizAtooztJ7sn9FKJgbmymZ1wRNMJZiiFVAz3Twyu2etshTOzAHa8VyEYMipWVYe4+LEw49m5qpfNfJ+ofORRSYOp1JLhzceHqU7ttZEJKO8JoehrWjxAjj73aBglV/ezq38MgijNhMkU9rJRWK/8GEEHGxbpMQddxhGQPEz/JF04V7CifhDKd73L0oqd/VjV3cgS8RznuinFDpubDFQCAJtsYMclVlFTjWFCTJNrbBnz/lBQP8/6Qm2dlhy/sOB90L6UJCSwNszUpnkx+6YTlz6YtDSBVm9Ke0HsmDcA861GltSoteq+9NxT6SwmpHFMzp8HNQGI8eT8JKKU/c7prWfXZyw460Er0XAY0jHwf5V7oKHkc8CBCmyAWcHQ6xXRneTJmfoPfU43sGaNUIbMBSBApWEwZJ7PZLyHdL1y9U/ppukJEnH8RRSQtmS6fWlwZs7eYs96dyq3e9HHokZLL7pyNLCLQGwY76MhKHtu1uKtK0E4+NW3q6eG1Hv2IKG86E0FO+/aD+VbeLvk6vh2HkMCQUT77lKHRoi8gXyXkdhDJbo7qSX9q9cfSaqNRaAUFrEngtMsQd5YuZfkIcurJuozgSaTCzi15oLgb0KuMe4qBOyBPndJ5hUoJyVMnMsTTCYg4i376HZUdTreJcdmp51p5M6TxAkP8Wv/7WiNCqZ/7UPLuDlHCZkoXnoWdVvGB209MWsAM3csE1NtGKZZ0IX3cQyY3tO00rPe6h89cAy3ukLOXn6vOf1t4QhKjxINLjkBGjU1BAF5ZAT8NwpVUH8SmnLqjjkBYZ+7Cz7JJFz0Zldvec6HQTpr5KFzTJVzLslkc=';const _IH='f1d4552d01f92e9afe4e33af27585f4ebd08c9dafb5dd92fbe448ae4f88df11e';let _src;

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
