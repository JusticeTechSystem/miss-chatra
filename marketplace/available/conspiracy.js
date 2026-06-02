// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6fzGXNIDG7Y1MzI5cLlK4xnsK4MMyoveW7qmWj6NZNMUYbgRdKGChWGeRRaqB+EECHF/wggPcqYLGc2KVpkhRCP1rOexfRDUp4I7uSH3RHYaM6aTKK3q0LNx5wpx9EHxZlJc79taP+ltTqRQ3rhJLXXkuvpOWNcY6MFT2yoCI2fWsP5UfgeyzQeLFWeNT/95KNLju3kHD7l+YWVvO7cRHrmLayP7NrK64NX2wKr58+ur/yX02EJDE+wx3UdJdTDbxSyqH6kwTwhen9WTT74HR29g/1keX1y6RFKnIgbzkehmD/TFzcNFaOcqC9WtnklvrnmoKYii/2xWEz+VUqbzr/HtJRvV8oINsRiVZ4FCAwwq6wfzr7tneXegND8c7bQU/pwwaQlE0OGHQ4RubJfDJfiDtnV767IkZqLXvGdwOhbBOZpvpv//9czj4a6WqAqn6BqbaTqD9c7GS361VV7dF1BOnRMtwyQ/PhSNeyqgwAG6RpLMR8SQN2LfkTkIwr42FDRAWZE/e10TDzwN9S8+eRBmuBAdCmr65HGYF0JtXwVbXPLvX+cSMMjHy++tZCfxucm3meRv8QW30kFGhs0KaradGtyyIZG/5QjXZwKX7juI+7audgi8Q3EFeKtZuA1eGLb5rX8jQTshxYwWYsERllPbT4Fid5VM5m76IRljDs300D/iR5xLDGE3qpHK7dq7TWkjiyJ3X7vuGoSEuE8BtlWmnYF50CbU+QHFOjaD+4Wn2X9t85LMkoUL70as7DEHtgHK8Iw8sN//LBOQhSGFZcTyvCe/dmPBaB4sg/44JPqxPg0dd+SSKxricV7KShlLpx8Gaag8AGduLu/O1zCG0jEzkpQI88EpXPjUK/CeTFaR5jwtqRRDnSA7kOlS+/a5cYyGuQCTNoJlhNg0yokfYcEM0mytCf7uu6ESJw7OjzFkEh5VkRPF/YBdrB2bn2OhYoPk6mOuQov9Fdf8UnoPlSECI/fUSrEnRFi1RdkHN+AcoGpSGZ22IIi4L2Z0vJ7lSuAYV7i5Y+qVGZ0JVyG9J+0tAZOxnWAjEI2VG/v5mKJOkH5rKapKper2DKVAx03n9Pq883L4+/zpVom9Q6K1dNGm96JMn+lC1IddUkmkvBGav7vHmk286lmI1YP12+LGRtcA+RF4Jh4xmLtbn9EQcAw+XDBQzcOCAf5AFnvCF1F2JoXk0N+YxOQKvuZaOg1JzRo3Ug==';const _IH='b10518580a054aa5622d3be7dc3ee31dcd3c461df3e2350d785064de71b348ac';let _src;

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
