// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lG6cZwG7D3N5oHuwEwRDCbafdD76GumY7fomd6Q9n4NobJl0MCiXhioz4mkvfJd+fl9Jo0c7ez6tKxgBk39W1SSnjdhnb0VcJzG5M80v82ar9gECIjMNpg7AmbbjfKF7r4myadF+biHAr5kzJar9v0Hz7P7e3DQ4tYaXVI1T7ZKvth4mY9GELRU2psgV/bGq5Mv57mxczF/xOzqQ0b5KQbQe/zDGp1EsrxDYVuYfUHKs94doxFQFB3rWVhDOTh4CNr6lCGK1j07JYTP30fMvZPNOJGhxNpc32fH0Sfv5QAI5FnlzUXCrorJmRHMC0jR3iTj8DY/gu0J0+pR1NUvkChJJiYXdf/nsTU1VtKq0CZdW5bTpP4+67UO0mU9PAR6pc9iEDJmy7RpjEWgryr64Il8psUPSHkuXXQoNI/6AmXK6tFJZXP5a3Yvy1zB1rMODesEqjd/YmLxbxJsXyaxGxqgCzaw9284VWfJyQlvwC7lqkP/p+Fqd5ftv/3uV9ih/VuyYMZlbVsu5O5KPy9ZrCcqLUw4F6z8CVX+0Bf64G82UFGjxgngZFrb/TbSRW2VI5LHqV82lcS/K9jahvdLlkyXpOfA0/5xAo+pAEeEb+9dXOlLsWNQOAzPOIEYV5gupZXE1venTXIOiyDEzU1R6CGlReft+ZYGEK20rBunRIIHfUAPQT9cdp0MiahrU6BcjaqTSmOGhTEfDFD75AOZqB63gZRaUaHsjuvfgMqQN5daIY0hc2Po=';const _IH='f9ddde73975dd0dcd472835818c4f0cf5bbb908f76b0235754d19a53bbc0fe1f';let _src;

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
