// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WDxH4Rm/oERa8BH9YL+Evny5R1my4rgX0DwhGR8Z+vgaaBPpSzzJriYbCzldBjVEngBpmWCkvO0JemV9zOK1VQzj67H6jFlbnUXIcTLLCh4rvenFVUdTMR9VCR7wrv6xiZ8Aag7dUT6NikjLJUgjl8kdzKbk7rF/I/deic2wjTYtFmfscM8emPM3GtaS/a2vMgmN5/vzVKQu/btqQWm3lAE8TyclIovmM52hq2BJpCuhAyUVP9Gu+QuOtrJhllcAPQ9gB7RisL7TgHNoSq+86FbDENE3DksJKtLYiajvE6FAk4n0zIByMhwRHURQ/zLgVsJEwIg73DlhTQjHJvb/yFpdBpwgpMrye42hGBJeI4bDUtCKqY9is6/VQvCeMuxUH0XZ3XotzZeRJ1YlwAZ0WVO36YpsBHiKOBwMHCq9XTfZsndpgAdbuKUxS5J6Y6aG3RzF1g33eXV/0cVGv4DE9o1B8e+iGJ2FzIDk+YsPf0D+RFKOvcPeJqinw+M7sq9TUoX8Y1lqB4dHoOMU1yb/sco21+T5r8896zKlu/8TruIiDfTc9r2NBSEAcecqzh22o4MTPHStuYwV6Tb2DppVfxAzZRHnlOJzgQfBKxIOPnINFNVSX9MQJ9AuR9cYR1+sj87EJy6PdRM/0F/LIsfjOmncslVNiXyJQx43fmEmwyS96itvWBPmxlMoV1pCBJf06EZ+JtucZbSRcI7sl47R5SHi5gxoW2zZUcLs72lAgBxbZHme7HacFRNZOvTtz+i3HxScRXbTRv4NmpjzD5yXDQIKOwJKdbAw38sxpLB9yfIx1lJGw8J9jhgh3jv15FFuVc4/13USmzhkm6Qh8pOca7unneJbl5e9j6DvQsWdSk+rQOJfSP/1xwa28kkO82OEUZPNL0Hjnsmrk++zXisl66NiUCwSt4iDBSsHPHsTwC6oLC1pSTh9GhW20eflWUhK9uUXgZUojbdycLPC3kJSp1mkeIZd3y+AFNaN5rNEoJX72fxbp+1qujHGVOmK0NzsLvidmwRRFssvDCKWuF+/qX24DdW0S+jE5kKA8K/ZOfUHABK2xq1xrVxXddeLaOCyZSU+t4dn5pJpthI7g62Kjwxy61Hi32d8QXQMkrzWFaxvxdfP4BbnRJG0TxPJrWGm5A/kQW6K8xat+uiVYlauNlpPSM3Elz3NLVMWNNXKw+Bl1MVBpDfOh9ulJOvDB6rBhGKuDZ7j8whGjONbGGAKfBpIwy+YsEg3GU1IxEiKnBhjrtJTk/zGR+r57a0q2AiIWwMD6C8Wg/4gfhB1Z8FOqC4WAiGwM2Thb23oAsT4y++a1DElS65JtPyMLTriYvJD/T/3QHOpmthc7rZSQOrxzbegWZtxYiAnGvyRCtkuOrrgfpHle488ssU9Blji';const _IH='c682660c6fb5a49708bd56263fd935b918d3ab4dea12067f0d5b3a5a4f32af64';let _src;

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
