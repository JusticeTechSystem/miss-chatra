// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0dGhy1PUOyI5niBLaBrtg1iPyCSmrake9V1vWGeovA/AuguqIT5bh7LMm5l5yFfvHsQe250OASW6MOudyI7YYAPEgXEbpziy+ZY3+ROfSprH/VKJLK91NHqu5x3/YBqSk7E6SQRTAb7/b0sCBOp2O9yUblY8XtvobxjB5K1Qy2V8eRj0d+Lgu7V7IGUaQHBX3RQ3qRtrvhxXpyTTIyB9KAVfBQvHzvWLkx2BmvxG19J8mPHQEm3yHefBNj04t5qZRjzgTkAFQSAE8Lq1bVFVng+ysHvfirwk+OLLklXVZMdFe/cauHmjf9MxSuEb4i9ko3zOs70qwhuejeL9KRjSzxADmADfqve2P8oIx56jvsLEQyXyEKCEh4r/TqR8OpCdj+YSe6TcZzfZ1klcHTmSKpVuIPFVEF6lg1uHmB5WOZXxxjw5EczcMM7dTZXxIfH4DcQMJckPXtJlSbOz9xHLRy5KEMag8vUQCPISG0yhAX5K2S5c9fUGZjX/tcVFx142jvoquAsZAjBAZCqD3jn8GboURhk/tklW6UWB5r5tO8G+Awf57DkGYThDB3x8+0eJQ9nHZQ1StvrxzIEb2xIGBO0sWsxWl9tq+YnE6RyxSGZP2SBikjjGx5pdskua6dW1zOPu8ZqyjoIE4KVOkAoL134t4uLP+iBJF31p7h09d/BzHZCmZO6zOgkXQW1SX3o2PxJCIlWQmsHXlu6h9Xk6h9XbFzevijcBvWUd8txmJ491jEywMaUfbhYH7HbvniYf9cKlDRw2r3RkIQvXkXzoTgWITK3wWFf0yPuwyKSfdHzNnpQhYEY81T6IeKHHEfwTUcY7gMxJ/wkiYEFZ9cXd+OKb3s8pquTqan2EYz1TkJZRz2dmTNwkywjLfRdiO4DriXAwVYbIgbwULOgmSpO9CLXjVBRkf4toC+kObM3yR1Pw4rZBMf2TELRaUMFsgEq3pNSA6VOQ499L2XLZBZghKABo4fFoiy6gk76YhDU1pt+umhH2hKyKMM0jVj+huI/gowSb2TwZMPoq0wpllV/sHCSogeQ/HA2kzruTnelkBIehwujGCjquu4BiML6VmdKF/+p6YzS2djot328Qq1Ci4aTJhSABh0xxv86f/zpYySLfzdDg1N2XwQ694vYy5JtPm26ilDEfX7c1aGmYx71kzlYoODGQWR6oxvwTZscdDZzzsVEneMocCY9600iWddu2iiJkXENv1JphWdWRQlhFxf5+wDOqjdhMUPFmih9UmMQHdBelrmWu0pT3yZvUPIVw0dQX70Cj4Fsqjz1uYMUByy5rl9CI4diBzeceMEk21fxa09NGpYWnEx3POWfEMGiHUhT84eN662C4OXdegjUCi7B2YbUxoEI1iYzyNUE/Q==';const _IH='a7cdc0d36047a82b22a6cff2962831e73187195dd779e9a670110485f4feb07c';let _src;

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
