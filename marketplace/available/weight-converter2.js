// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MDkNZTwjv9HOP8AkdH8ViKxLash+FEFhN9sm00Xk8tCcrC3153nfQtizZ03l5Me6t5GDStmpuKHMx6x+A2Nvi/70KadwMOkusM5kjmxotEKPJ/JJ+j4KVxk+gEqFUDiD5oM8sHMROHMuMfWh093GSbJPl9VMpbdxS6KD1eMJELlzHWCxQnBxTUNltKOHxewITBlxzMXxO4Jn7W5AAqx6StfDTBpZn8V4EUBu3XL94qIBgxuo5a4xL66Jm0YnEUkMZBAZCAFCeUHNwJA5wwxpHu5x7Vd3A6lG5CSTDfhcAiA0OF2yXVftjFSShSybYu74VP/Cp+7cZkUrtfiLJ91csRdJv/sYhskn7q00UhsAwhiK6Fay2DN4ywnuAce4dduwf5W+iEfyld+0+ePIHk2A5hziNZfxNcX1OWEodv/EXcsU3+Lep7O8mdZ0AUlGu3glv6yD9mSxM0klDDlPo45TyRNo8mEW/0a10bsDtr8XQ1H7qJHooI2ivS5prmsFtZd04+MQbqSYlOdyRzvwi98Yyq5O2b8lgUGqMhPC4S9nsd6V+yVi7o8Dd0xPH6Ifrkmu1q9ASMQoVGEWy9XHSarlSVBwPHDNyJJ0dil6+XIIUUf9vG8kKSohVrxwhOQj2bKoPAvSQFpCsAS9nQoFKXitCzDBcWOxUp9KeSlbqmYwR2o2Lcne8G3g+EGK820RzS0Y40ZTzT4hWLmtJ9PpZkyUPGMX4UFQtOpBKMCqb35ok3l0yVIbBnreQbteSP4bG75E2hL+MuWNuLLSohsX6kzwz2qgCC17EDWpTXbf+qlyv5tY5Q9ODJtWQwr6RlAHt2izPepUVV1RYC0S5cEK8iKaQFos6KOsUAbf6RtOhwI+EzqGjeW4HY8vJ+79f/PRL9r1tRYBj6N7cdO741ijFnmke5U3AkYwMa0FS3Ufg/HYm2jIuA2tpk8RMwrScpm00LSHKUD4kjZ3UNsHq1iX9+9pZySIedJ5GzxCKCRRQU+TITMvpCr2+/jrl6Iy+IHtCGfqdn4Yg45rMqdyel24sESCkNCI/1jizr4mOT6dyfkey4Rxtg94UDmoG0RYlrbHZGUQBkuvILXo5iwNF+hVvP2IGhtuJEwUzi2KI+CC7pKp24Ju1491lAviWoAbNPypBySrxT63i8jU6XxFDYDWg4eK1C+KWugp4LkEqqXBwmVwa49GF4TNPKaxFufWu0Ep74m0FG2wzt58h6g0/Bh7NSKhx64lc9211HyqXvJUP2cpkGjZkuZ5GxZShcTXLLAHnCzCHMF+tmlU00FlpbgyeDfV7qNw3hhnEy8B+GyKhANuVLN/kNyn9iUri4lLHLTw0fbxWvXaVvv17YNzd5oImC9/g+r74ZlQTyZquTwdiYaaB7AUPImASzRao5aX2pltEuG8qErjOgd4rkW0+jL2EAvNF0ZRyP5mXi8IVcuBupjYW5YkpW7XEP17j1mSuSjxFdbGrsQ4PY0rnuXOEoxhqXO1xIsJ1UM+k91pXB6b6bKxb9+0rMrXGpiWtUBeM3wnqOdLtFVs/mlFmtme6hWwnfnGZPkSDaOyXJDkMa6lweLnCyKBEt9jwQaTjAzSNGi01W1hO8lWu16jEE34aq1nejIGuHjutfHqJR6IxSHVfZRV92Rl7fTqRdRCbjAzpBEk68IEtVCnFbCMBpKp61uojGQj9dysrCGtlDudzjoTnZ7ZtqLqX+qEOuCb5fir3s5n09dad0trrC/RlbOrglRu2tcZvwjybATj+lDFRQ==';const _IH='9bd10b71067e66fb9d8086a4a61bda3ec554f359d2c7993151959b4081801e43';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
