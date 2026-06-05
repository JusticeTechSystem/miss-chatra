// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YGc983OELiByVIZNl3uhTNNrUbnwBpW/vyaP6ZCvIBYKlPMpDO9YJzuipv+XCouH+CSR0wUqtHcKSCO4r3h0/P1YhZwROPfHA2WIxXiiKiN3HNTIALvgDABMuJes4wll1TwSAC8gCVy7usDVtKS0CmND14+SbRIc23ruKYYFOLwxNXcwp1Nc6HfijlrZaCsc6uE40HzYKHkCSht7HtzKu9Emxzujy7+UnQglMdwn8YKkpIyxidDGpxIzwkCHkNRt7lLSXyMzDQu6gI4S5wc3jllYQlWhqelF0IuIApL/OEixPH6/dCynsr0D8NDC/LZ4FvLdTzhmvtgkjkA6XhrH7QJsT3SmjFmHFT2dYJtjc+ei0Tfuf3cz67ejpLZZAiCnFkP9zQ3nJBJLBKjC7ekvgf24zcCqdWK9Ock1nuMI0gdN7/zuf+HXcmmxSUiemNjBAt5Ca91IOHnjIpaAL458yOz3x3sdOKQy66Low7Au+0ZO42U6SlJfmaG0PIVaxvJ314YbTWi2D2x3/g/G/QLN7dNHUociwER7XZaRQoix2YUvgJwRgElYhbsMvirLfp11ZAYTHSBgjcgjFHQOLTJsWVrxX/FNUrleT3h9EJnN5BkqchMSvxO7mxQ6LdkprQGlEo5NKxJOjGN7paFoFBTRfpK6aAgKQLTmGvGujaWCFjyU4OLRNgIz51jfwFQGZ59rbxHM+zs/yCgCDOcny/aGkvO5m0SyNyfAWZJpMYzht7U/63Yu5clr9QAYmBOVp+mGWz73cU2g8irotpebKQxUryIurwR/XT2J+6fVxi7odXCo2ojAy2BUE7JO9FuxHkwrljydcxROg02JogZwmLpdczPaDKZb25i4wzwOjz0eTZZFri9WCO/Nsbng9U50URjvJFci4t9UwIq/mBK/u3C5CxjXJ9QlkDuclc1QLXJ8AunTM4RntH7QRfqk7rIXdsZaq7v5bmQisXqsL5Y6EwyvFY0BNpqFJFMiVsEVb5gQUqJy/unpESPH7YP+9P2r+rDsFF8YhNG/In7hdW0SAmOiDm46SROWpONrjc8mqgLQC1y/0pJrAiYSX68o/LOnFMknwkqpw5gP6qoLD8MG/OZyhhX1O04AduRRlAjEwaO6zKWe7HFAZNcuHYE2ys0YMcFLOW2LDfEByn+XjfUUrgCdY5aoDSE8VCWu8f0BASkRPo0obA6a3tUiUjTN';const _IH='ccdba39187c3454758413a1d796c24f35ecac5e046791e9dba001d612fc29918';let _src;

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
