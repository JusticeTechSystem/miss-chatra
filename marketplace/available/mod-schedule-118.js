// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ak4i8EP1JUYt8V+Yyq1mm8iSsfGmzE22FomJ7RinXovVRdB11umqfo8LvoEDg2tj9YhFP1or0Jj/fxTF91vW6kz8kEUmwnsy46c8x/oq3ygyFpwptODBcP21PfD07bkot0xWe/w3VAwCeT5yo7s5QYIWXu2KU1FUeVTT+H4t2zxLcUAOpcXSuEn+aO0hcFZLzVYdR7hr4YkzmcNacbrjEYKlR/2mrwQQEGNnDNznWheC26QHBgNAccT3fxsN3kpg0AE/Qt78SNjRJzTulS/NADZCYxoZXHeQ/SiOhBVrNrwJ7KATPCNrmJUODn2QHGgwNzNslo1W26SATJHOzjtWUzmNzzKsONpGP0+A5Aayx1EtMi6veTwC/RBBND0bPN1EJ++dWo1OhZ9kOyn84B8dUGYGRhscUrgZmYRcVagRFod188dQblj4BUryJPiBNnE7acd6+EiovuWm3x7NH/SNhFMq+ZyGAjiy6nQutoQa/YK/Zq3LqG6GmpkjgId/9E1Be2fMO6r6UrhBIVskGmUIXeM1uC3anhzKNG9WBtW6Tk4Zji7pWThqSBzRfQV4FzuOLAskl6xizD7WumpO7+U4HW7bcvksIM7qyHKUmoDZuc8y5JsdKxyu+pvXyweS40FHZNuggQYLX5FI1Ope+3PwwR5pl1K92FUtmiKyUNLUWvW9m//NoEHMWytlT8+MUkj7wqnL3jXLYySNE8LQvTW8FnPcnwVzd/Wcwox+gdU2MNEDTGkI6gQFjBKmDj856kWNAAhVIfDyYOfc5Y7gbXrETHGR0H/CHnaNPtZ0E9Ddc2tnR8QkK5dU638Z4lm6ec9zbQoJoPtdMFRhcm4FEIbV0fxV13ynJwiJusMrpdmKVD0uHKMz1z1DKzn4pSviZ8S6AW9RKmGbNemdyWaJyqM8UDy8aGhHb6IHF1RBOD39lJhInEokRo3Ord/rVTDkRb4JoVutqYlBK5bcj6yvpvEMKI/oXLNmZaF8czXhRuguj8CORNxVyVYlzJFyHWzXUbcFUlEDHZsg1sqnugRNyp9rPSHcK6FX6KfcR1oI3wn4oBRvm6csnkjXCJ8Old2JkdtSNjaojJdhDr/Q3L8FF0lqoVKFBMZOJKxWpztpIPGdQyan85AKWJlImuLRuBgeGsTQxJnYYdthn4wD/kYOJbAw5z8ttZIBiHd+8PE+oFrVYaitdrKtCqs0NiGPn0l6WTthDDAgCO9eiuv9jP32SQ/5qRJFYSPRNAVAHdLhAEbm8bSrmSCmHKO+5uujEiyp1kNEpG6AM4jZ9+ZI9G8LzwhF8J65T+sxWOvvIXiqnTPvY8vlssw8xUQnQS4lUSoB638SupmkvWHzgZjs6RUbmZHZo9bVExAt6GaSF1xQLMj5X0Ct7RcUvSWi0hIx9LnMQFQetCixmbhppoY0jENp';const _IH='8ecff7a5e45ec7173fe764fea51060ed3cd1624bb730d6a3ade2b9fc933839cd';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
