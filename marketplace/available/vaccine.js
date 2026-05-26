// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:31:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h9P2IznnwltAtB6PnMsQvPblXu4U/5QFBdLGV/wpl6n1GysaCa6ul8zz4MNqShf5reUJNtj/IR8aMsPq7x2xbpboM+tqQe6tv91UC0di2Z67T+OgjIvIpfMI/mCvWQy4tIynPKlJCoEzOYQalGvdomTa/3eZhlArdCJswRIRM3y/RHPA3dmTkQ/absYxfkx/vpJpWpqh50XUhYXbS7pYFLd+ET0I95v2SKj074UyrgnYVaacAt+o8EMF/PMCqhPFKkpvAL7piKMCIk8mvz2dxUn+JkKZKabyBPBx276UMW7G75tu7R9cWjxWpG3nI/239o4uwqGP3RxZXTadov8fSnto5BNYiCvsMTLNnO0ZXidkCM/D0SO0353ImUwu3Z46veQEwZsa4nf+8CxUkK7NuJ/7FtOW4vaRiRw+POuTSqJXxbZb/9HJWyJCmItPdcotzQzxATcuhHSgUx39gC2JRR9oZ32OuZnsYcZSw4Qbw87SOQUgdeNy60XAFy+qCw0mpEWvF7GJq+UOYNR4OdrObRbgDVMx3FswKYijPhvdL+AU2fkAaw5jHFRBgybAimdfgpeKOKFLNiEM7hWo4j8LjZDM84cDl6oknxPeSQU/RmVNPMsi0M003V6AXy60qXKlo0tZVjqzvMBQpJJ3RaSQhWXnzgTnuIfsKngPTuseITL7O64E3UHLb/A4Zpr6gBU3k7YhHKA3zbHj8AEnX5O9h2vsgjPCE1IUGiDymKHHMkUwTl97SNEpICiBEqt5NOZHDGdE4gk+1H6t+GvwroFn7G6HbEIMmAyU7YvZ+4dkR5Od/QpUNIXZqviiwtIqoFikzF8UNH71aMaIiqzQUP+OTOlXfDB2jkoxK6kdenaX4lJhNCE6JEI9LgCM0oK3gvWykrj2M1R7Cxz9k0IKTwOXau6lEgattGo4UfqBd+GbezJetOZCyEN6OVoJMv3cNJ8scE9RPv7HlZsMqSCE22pG7uZa1nZRwoJARAJ6nZf9cU/ZuSBth3gDireZvqztuKGOLHKRZIoSxhitIRu1FlVlkhdKqdmQL5Vcfauvb1HkJg0TScHxUC1vxG5oTqjFNwLb1uqN3xkUIdGej8wOA4Czpo8s408jdZXh0REAHiHwpXpJYS7FnbbP5a1oSINGhnra94BRDr1Kkkhbk6KUIMKttllVPKTtid/DRIU3bajzXBxq1c0+T0aMaeh1LfU=';const _IH='66fdf3855071ea4e355fc99678b94f412242ab4e5b56bfccf329f0b9eb55ef76';let _src;

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
