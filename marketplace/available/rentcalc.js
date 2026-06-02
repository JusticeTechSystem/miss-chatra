// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u8Lr1iePA/9e4MeX5nRh6lll5QEsatzoWRBqA+xtzvx0OCePDmq8CxRQ4QqctD+vx2N+V4hN04mw73sScHOKTwHk//hzk4IzMW5XTHnm78QhInjU7Yp4zkRnApEVFREf74FZHLfEXoUTTlELnE2Q6L2LodDdWaxAN/A7Hl53aPw+EKeN8Jpy5D7klVT4moeNOYd/4d0XAL0QbthEUgtFxduvvOVixs/fIbpOb80cwLZaQ/x39LomAN0k9k58t7miz/TMCDvQyEQmBMIH85lQQOlbFeZRq7rMX0Svud5DAlOBq3EPy7OwBtoFtMTXf8yuPICYnlUXZivTJyOP2zGeSt8uHxebLNx9nirHU10ZCyPKZUfem1hnwOP5Is8dpWG3G6o0okCNfhHLQ2s2/kytWbuv6OYbHOc6+bqIhCIWtrKFsgoa8lz/1SgZ7ARz0G8qLhEbMWjJS38BTKO4R7r4pf9/tLUktO6yz4ccmNw4ZgqJWXWsXUwNhljjB3urZW1uTu2PfvEQ6k5jjER0nPcc1Rtqk4Y2zPYDvrXyDRwRqZrRkQ4HmIPuJMeptSW3i9SOq6zP/Rt27TBieDYKOPa4n/pmdA/u4AWlTVBpBUYeMTKVt4ltxHmnXNCmxNLFYdi/1SmzvZVqoTLGx5YXZv4hbVJBsjmoJ2URSh59YrxXAYhq0iQamAZYriv/hFQov5eRGJqKPgdqNjJHldlNOQ3XS9pTGpoVl4+e01XLKDgyCKsMVLNO7pu+BirMrcgnUWqAAq1GOuf1ZLbtXZ7d92RSc7FvI8MrWet0WjjykrVIiieT38+3bHFEAlzZ5FH8+5RpquFtwDmn+HmmZfYX6GTv5h3inEZvuzmgBLFopxzUFiQR+CvBtMak8SMC3Vsk2gcZjvM0ZM0R1+aXx3LyzjGG6e5O7f2ZklrPiyfLbrqG4t67G2Le8EcFu10Yn+SAg/nFSfR93PRowm7PBJ4W89QqhyNPCa3/JBDofo33U0TqVyfGvKh5RDfMx9bKa+Hb50AcMI7PZ5l8Zbjp51upJbgBRRuEZbXfq/zwZhl12ADI/FotGGYnQ01GRMVEA39yTioMo5lc3a7Km20a4lHW8RUN4cUavfS5NTx8MGeGdt7tDN4wrBxN/M0495LLPfAizfSZlHiwBVlNYHcpgpzWBLM02otahryrCpQqgsu7oH0R5e88ditj10Tg1m+NFB2LhTyO';const _IH='2120329d53aadccbe3741143d8227e8b717c709ae94fc73873c283cf0630c21b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
