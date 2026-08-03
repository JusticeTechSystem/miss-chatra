// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSo0SwH4fQaO1FvNS0PLZcXsrGUu2+sj6qYOTl0LdC1IrJXUKp3QcJ2naqvOvjaU8NMmiyBUUnkYAToM4YZv/orAcBoI/X6kfBTxjRu6T2bn2R32VH/+1MkCQEvwzlndPKtmGLdhaMFKxTJ0/b2UnsATCYbn/ogLxV8h0uvVqUUPyrcGF9Rj/QKxRZDdUMSANRR1j6WNYDEa3mEbltI7CsSI0UI6Ll8OUSCipiWhBA5v81usa7LBmPKrnkHIQ/DBRNOZoZcFfKoh9ZqUWHshBKCyL6SX/UrG/UG129q7g0cxspjKvYGR8dSybPkgenTxfKNAkiunDjiKWo84RezYhU1DPqeyUMq9codNHjJhvkPXwG3EGE6ZSk4IWaR7nXFAqTEuWztKOsyuXqzYtlvjDkD3Rok8hbwfOJhS27NV+jOZGMGS+v0hkXrWhmbCrs9GMUkvsc5UrGO5XH0oXAprPwufSoFfIczadC16UGGBhXlGgtMKIWgfirbrHIVdsgUfSdstXxh1venIl27VX/ai8eUs8abxbaf+tSF7jLVTun74jPEewfEOhcps3S04ms3tnYBlE2ZXPNqwJdo5TZbiciC4+06Fsx04vf+J1xI9hRxzfK3eAzlDHPnxdn7GyNNu89/dBRIkF3nG7ezneobknMQNZX+Quo93hp1sruO3fNGLSKhf7y+0ymb5fFgCYYN8kiS5FqCuiz60FIAwwBs7wQ51RLvr8fS1TQMy55TN8WPL1v9XYO7Vpo/gT+Na9miqpQMXPNlW98j5Rt9/XAHwM8bqlS2sz7r/s5rDKksLUM7i51qOqZouyUkaU/on22qH64TXwIKD9MWavl209Bp/Pv6upEE161VuN8f0f9Tjo3MBvwl1R0foSUJC5WIbYsRk65GFfJRxw7Gxjkt2+Qa09N8Oy5YPba6HYifk6nvrvPQkgSgMEX8iaCt8hrmjDvEYJ1b6Pw56CtnyLF/7hSe0HHYrgH+XJYwMXTGkPLbZGoMTSbgf/XM8nHRZzEs/ecaGUWvRCDqlPoA2VasI11ULmLXANZwc9i+We86LdSnZewoZrk2/XHAZo0R5BmOfZMLSy66W+raNo2FmJen7osQbteeCH9eeG408eYXmaN+VHtyq6h59FH3zqDTNnjPit8rnaIu877gAxrgon/RkPhQ796IABFKGnt3oDawoNrMYRCOwO/r+DzbqqwJ62FOeKNsN0JPguUAPfSvBuMHlBN4X1QijkVrQ+ESGfQWJU6W3QEUOpa9jMtI9YG7k3CymjE9m6/1SGjKRjNjtej0cCMq0ZClxmGFAsQyfno1MOMWaOvNT47/r3j7Eue+e2wdn4asyuiH6QLbpG8ov6p6Icpgg97Ewkl540A9Zg8lzd4=';const _IH='f9be3b0cffa93c1641fca69465cdbb0fab3242746d1e24734c6bd6594f72fa94';let _src;

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
