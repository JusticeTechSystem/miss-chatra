// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Hl3krsBKoCPZvtG3QIfMQKck4RHH7SmdVEXxnFZZ+vFsMd9QnZltioo3Z+n95Jvp26+BqvVPzNgke6qvDoq77IuAdG4M54MZKNyp2vDhI2wV0SeYk5qcZoS7erfYyqJrYCTt2KlBA7OK0FaSSTfNdGZIeOoif4jbJfp9xpzh1u3V7Fc3EAEP4xnHFdJ1mrjBRi4lAREQBHPTqDXxzTsdHRCl/Mofp0kU5kJ2QK734fox5KCOji9JS4OXYE+v/P51IXm646GdeHK/HLe7MSr1r02FXbHJSKN7jaJqFvCGkVrXiI+tg8bZjLdXVyl1hqFsLRz1oBDXp2D23hoOI98dk5+L6pc5H/rIBFBgLTLoSJPn16E+h3QNTpTJLZQTRI1ToZL9tEqcoiC8FohAYWu/Up2SipRnI6QMPTy6RDvkVYikOirvcXdEMa2NJboyf7EwbHdx46Epngc38lsqWSwTnHj/QAeZtsnZaj1qsgkoh9XgN+rdgKi0x01wWlGoIv3hy6VL46LCLC8lRS8nrKNuyGXXEzIHTFJYU0RvW68xSOAWOIiysrgD1BIpX4UvrbHL5369ZQej4/lgLyhpwO0GgZomIoypWBOdUKsNVGAUv85EIbNz3GaOdjzbxgXczFcEJ2MDBwZLuz5RHtqGcwY1nV80gVpjISaVxGA4yUxeKyX01/Psx/OyHIQ2yWV5ELHuTWu+d6RRK/btI+XuuYsWf9es/vi8S/242p22eadsA0S4Gzy2E3/E/in+l2M+0J7ZvCYrKx7BYz3zBbwYIRSh4Gc1CsrzP4OP7WXipADcMzRTGfvV5+sYcpmrSGK9/Z/0qvwBWCzJ2wRUSvuTc3kHP5lczZB33NJXLnVX0l4iL0O0COldh3QgnDYPZnMyvMWIpPngb/AlTlJcsseLp84HeZkb3tl0qhnj/uMlCckV2ZgRNnPpMHoS9mvLxlFyIgbhQMd+zInRcj+67meOfTaVv6phlwlqwwvZk/+gFFLHdAGhJpRUlz+M6cKEZlxVjJMM5U+kshFhP3S7aFI4Zv7rsoxUTdYYwExZTG4sF6Zuue9Q3jz+rJie9iagxg4MW+HDNO6ACBWug/zsuad4VvuVHixKqcNR8mmUyqjwuEVAp6tbby8ha+QR3Xf9MS5JByNs4T9IWBY35GCR0rJ5Oe3CzCVZmvaBALzu3UfdN/xzXi0TACiLSWLRMox7tTvYd64lHJiBN2gSsk7vlFUTzrMHx+yTlKtbH+7QxGbPD9qD2344nRBV8DvgueueJ31AJsNGJkhH6WGAMw6kOfG/7dzNUtrebNnYxJMCyPwdys7i+SKZxajXq9C8HN5glp86Cxfm+uAPr2dtrxPk225s6ekWVvXu8L/WSnGAMyp7K0pqRQ9Kb0g=';const _IH='7607c4f004d1004cde0eaf7d4c59cb5aeea51f9218303b2ad860be8b032c23ca';let _src;

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
