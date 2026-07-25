// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS7b4ysw8FgR6yvWyU0jCmgRx9hQVWaqD9X+JVHU0jjNSiou85qEbkbnZDXHWaJoPuYwxoIu7Itan1CjwT5PDNhIjcJym9qlBxUfrAnpsoeRysWNCWKc66SAIEMv997BRyZT3WPB9N5NPWNX7h/BV2Wrp2FFCm2orcSwUuEjaTR339Dtuq5W8ST79GNT6zgIqe7s15h4xZqumQULZ4Akb5fUctMmKrDhVLWB+7UPF6+4mBqK//cVNbf9FeTMAZK7XRUmHQIH44WtN9pyISBtaRbQj/YRGNHfFHBc1Q5MSkjrZgbMf2PNkZKNTzLJg6rIenL1vTauq0HN3T2JY/5eSKF6K90P/nr7iBxyMKRp4REFx/6+JzqTUwhSegYFvxfNvk//1Nx55YzdEuj4ulZk64YF9Ss5V5lgdQc3taGO9zdqS4k4i91wHovPb09wjgzblzW5OYV7kcosFSXJfNNMnjcU9bXOba74eEhDnD6U53PMm4VCoheKehtvthR8oDTiR2QoHSdEUsooia5XFwrBwfbei1UXxoRIe8GZTCJ+F8QN+2BiPSOn6ZXdLlTU6vXBPUTTzsjCTvvQZcwAwz2bkzgmsR7o8p/t4d1w87ygp1K1o9KqLxjrBqIUkn0wrDBFoJ4/bfLfA1mo4mdDUVODdHL/PiAZb24Kx/gxrb/wB4/7Hf3zYEzAee+8k393CQlJpr+x0d0n36iy1LucdV9GKqQmc8v2quYRF/xi9Q3PCzaMNi2MOFctdcfql96Igil8o9FC4Ev+/uCOaOYQ981IHq3s6sIvfvqB/ytZrMvRjK3CmppALhTeTolHW19t9RDhKbIE4QI3vDrtQDgr72JM2Q9FOaTDW1BT+BgKM6NM4OsvshfXsw6GGi4H+gFuW+XqsVZt0DkqX8ZFuJ1Fc1eKSYLJnKuuUML8tadSCf+72DMOrrU+RBYar5U81OsvQd4/5IF71IyY6wLvCLFDBiGk7YJEhi4cIcqajigpgIjb30hBMmn7i+XH+V9ot4U2KUpoTE9px7fvSoM6HLvje6c9vH7npSEqyBm+anevaaZVXqBh5EEtJ/E7bPYRAcvCT7aA81fQFLo55ccFCQ3EErtV2X2NLYVPrITS3AHZp2xqklmekHhJeAqhs9Gf4IgZfwnZxbYRlFI7C2+WYdEyeEfvsuGknNs3UyZVLZWv3NPLwDDj3sEP5D0wqQfxkgA+kQO2LqVpkFERtJGRATQ58D+hmsqumoDEMZMh1kaDsdNUFBYdtyp7JYAvTJfBtzWF0uRfgl8h/qfEoXVDBWgapYzpsTJ+/RLb/32oRVuGYDI7QZm1h/TuCNotImbcpcDec59AcVLQRtQhTTfTP4U8ImoPirk9KpoeIrLQScGvcNnuZ9ccxbnNB/62Bk+nSTJmeuQgWGwWwiGh7hZPRS5QTCsqtaj0PNvBB3N3al2owcO2cF+UiC6eL3vbK5ihz9OoPBm81TKqCUa57J4+/8PbnzI8MiXtRZZBXoqYL5y9e23xZs87GeQvKlP40CCQEvshZmmjMaTlrvn/NCaCSnkdn/M/vEijUxW9PUjAyx2XE8VuGrMSihpHyBrQHa68j4uBHhtOc/9yBjcHdfcX8e3QaRs3RePyb5uWON3yUCEcaIKFw99IVCTr6FF7XW9YvDMKz363W473YsuMF9JnwoRpIXLwLgKD5UnoT3xSBZ25STt2gBk7pkLS/jHLbAOqjOs2kLWauYOdtVf';const _IH='dc51e4a6c3e684af5b252a51eec963b76327cfbe4bb586cf9f2587d6840e1239';let _src;

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
