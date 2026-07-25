// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQSnsjyibBzVVPLWRhn35v+nmFt7cCDVixvVGF/hN4i6RczUPzgE3XF1s5I+Rlxaggr1aUcWS1dEK5XJ6S7jqDD1ukxTrRiFXPCGj4jaCYlRAKwa90OpokgyOw5OmaOXkUr6yfEFKAqgAwr3bXja4rCeNJUIJ8qHFM0K6PMWlxQTGcI9yz/hRWh7yB2SrTFqu7PwhoazUS27k1n+7naf6VLL2jFmcA37Tb4bc8SS9x2r9kaSOSoxUnbxoBPcbTn6S+fh1SQj25dCu+xn10i7VoMpOYt8kp9zAXDfwJDeZNlJP9q5UI5YDZYlS8ucT1Mb2U8isNG2MVv4tAoOfHD2zV4AE/xMPcOXZu7NnBM7f3rMy2tpBqEsfIFfeWfep+VUCQpZFcGf4T9dsP+HQtOADprVwzxkD5fCTyc9hT1o+uPBjGKVWqSSRejgjgrY/RzvBnhI1luzIQUJCuBRoVqRB+XPb1z9V602adL5nqd44yZ3Xq7tic+YhSkb6Q0MCLICvtS51D1YQN6wrRXZZFJ1dRahsTtMJlXr0MIrf2XYKK6FU5pKlWjrKIVpsfbxQJWc0NKK4m9UaCbk12TcqKBhtCT/aPEo86rrUH9UQToqwxMQAhLy3FkzF71wI9y8UhbulI2ajsg8VCEmeagbf1IOFm2ti2fJ4hvAnKOATJ2fPHcOFaOmWabfMEniV5syhmevuZDbrT84cxW3MGzbhq0K+M4qwEEXcXTIYCozOJfKN0GKqWyP/IGaIpPf29Z14BlOU1uiFTFLkgUx6XReYCrIkOGEJSyEgCTVVMMvyD7UhP6jEwo4N1bsOINEH/yDJehE6g/Kk2SHTEm3/57rn+N04LjS75K3IvtcqFlzBZM1Hhwu9Lz7+eypCIfHT3AmUGj3NQfxigLPbAq7qKMWEBpqW0cLtkHKYD4Ni+LVzfaKgYwz4sI7jLjIWMtIR0aUZDfJL1IiRKJhtPjZJnRcIrRiqkYdooepe1CFvUP+TaIugMXZeVVKRMi8FN7jl7DAKKsodZRQ3hY7j/ITT+vR1ErHfMfhTXQ+/MzkP4wir8RIaej+ki4PDusQSOdu3Q70t1HH6dMYExs987pCVPVS5V1oQ19anNJw/M4t6To2N5tO5PjSd2NVazN0WlO2t3gu4b6gjzgjkucXNsO7xHp6PNIc22ytIm5Ga7mFlh9Z8bDLIXEf3N51aTuvpfDlp9dgz6r2DCL4kTW0rWR57V9TnjwezPeJZekEXkcjCLK2YV7jJRKFoygPe5+VthkjSjdaFWqpK5Q4q2Zba+5kcUJGOEH2YWXtsMNqTpOjyh/5WIruFxkNauPXaBYqwgIpxPDN+IKnR77+VpmexmqQHjb3IMm0G/FKFJm1o1o6yN7vnJtltMMctumaA==';const _IH='f8055a4976744b83d9205013300f87badb1f5ca51786a1602633f9f97d03218e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
