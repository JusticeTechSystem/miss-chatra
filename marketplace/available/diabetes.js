// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1Y7omJhFJhAWIZDSirB5KErllizFcK9F7iFgdEEuCwiUT96cwHAixQclBlfjcI0PgRemj800zPigdKhNQ/DXvhmlvI8fMBO9ajJ0EABzD/UaSzDjRmlqzHI0o/xCJptqu8CBdZUrwYuC5KuibjBtGGGyhaeM9H14ScaNqs7IgFW5xxVuJqlJ5eMhjm0v0cUNcaAep49Ugan+xZgrrLH1/2KOQ+cxv5yX9aGbZ4SUZuGjjZsxIg8BSZgo9nKmVdwSui6NRUPKER/NF3UEdg3Yb1KuPd7dQtvt/i7YWBlwixuWBIpHw9HMmWDUgxzEXM+oAKk+23ry9xK7q9K7p+NX5BzebpvoSYgnC0J6cRXPZmytAoC6RO7Z5IW2J7ew+eChWsufLJd6nZ8yITSxeFS2rHmav73vQaztgYeGjxrjv8IODnDj3RU4aOpuTGtmIgZBtJllJF/QhhrQBQMSM99b1Nbe2dm43pC2cz0bYX08e35bC/5Go/V6y1CI/8TxDiBS4ruGoQ6LYcsQODEGqQR0w4ML+l0pYmMG7WnQZ7CnTdfQ4uaI+Gx8Iz0HWnSTyL7J1j2TDC0x12WvVFnX8Ovahumpm0xq7i+1ja/LQWkJwk4P34rC/Ex5OGgxNjjigY1iGu+BT2ULuCEazPuBJy6DXeIOtQfvCb7e3OBGLFNQYihtnpnNBRyxEiUBs0x16JxG510J7+A1xv3SyoSVSHuZxVO+0tEbAmZIVA6IAhq1rof/HflqJveqbWf/5FaGVrYLkE20pGO40Okts8R9w4ySPuxY1F8RvkNZQg+dbMr0yhfKXWa2+4y/e5o/mjKGjBwgLaszBqm0LP7WrCdc/VOGre549de9pX7UTKK9T3s6hh4eLrl9wFaWJQnhpgFYF+4HlulH5bDN3PqroVyb57AjlnAdMAJE/gxUq3khKD2CDd7j26bOjr4Or8PzhwW1TM2kM1t1TOOdMZB9bAD6vRCDPpu5GTSi6unlqAIfjZdD6AOZWV1d+tkrz9REUX4l4CZxdTHKefNsoC2s14C5m8MT4U36z6D3qdGb8us7wOVn8Q7mymGzJhGWJX2zzvNF9OCluB+RBsKeGOI3S+3gple1RrD5MXWIZViXymq/5kZtBwYZwAxIx0feOu6fAIErhdG/ycPKN+Krb5LQmcbGIVmHafv1ZnARQa0KXb9D30Wn8hl9KX4913wCW2UrE3LpCZiEXTA=';const _IH='f82762319a4efe463fe21596d43b58624d6648bc4dd3bb3759572c4384fae664';let _src;

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
