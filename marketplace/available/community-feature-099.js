// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/UbveULJIjYKRccxWtJ2b5ygDgMQWpfkku+SoGJGVJWpTIyNYEqQ4NZWnpRL6eYpvdUk+OetKVlR8z/zvrUp/yHPSpFl1fFKm0DSscrlXbBW7b/nSrhcBNJkMdWWXFZCxD7E4UBtuaQJ0X1+nNt5XmW1nIGCyVF60R6ZQfSFTUhM2wq141o8EMwPUPXpjEvkk1jxGb0gK72UGHE0SffImTu6eBj9n3eTL8ztBUzoBU5ZMLyRY5+kuzAO9EN/GfQRzgBkXlxy5pu85RleH34mUZ1wQf/nC/0em6zYmhZ9WjxVG8U5o4Bvcq07hFo3Fc7qBmXgvJgpq9klsIC9tpOzhoN6dJx13LY0wfIMKSrB6vgeg707TtBtxXv92U4/jU841w2VDsjmPYbQ1RJcWmUmRDzlpP0GNL+UmWPXvKvIDsg5WZTR1W344YwOBWxlsq9AxaJ6FOfXF7LvIrG/UYLmg1/nZBFNkon+xkmju+qDivi0VkVjHgjJ3rhQoW+uYaqJ9gCzsHX3xMtU+e7S1IIezpw6Z9UjwNze1Dvp7q8hChhfK3aAEGN1NyAwjVyrdXivN+8bq6dGgEMhCrOkTyxJ2lxAPwFcMAR3cU7codTTIG9AmVRlPyFADMA57ibj9p4CiuOE4hHj/RtlK6t/cpCzSd65rZBik7qZYRRf6MIK+9HDENvv9qNtlcvUjSDVnKbBDg2Jp1lAEdl6kjaNmIYUqB1bYfEo9MTGOVHF4wZv3o9rtAk=';const _IH='8b37abb0fbc41a3c75ea1cbb3e6474b3c7e025a280bf56c79cd05cf3371aed4f';let _src;

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
