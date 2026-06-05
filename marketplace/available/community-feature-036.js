// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t6wglUhzDAkFRTJd93aFlcfW+d0WkO0wY8WaF1SuHZU3g753oIT5n3WNmmtpmAIXPp7BQbM31v9GqMBQzU9LrWj8MmHvfIjtXhPEQ1RfK7SdYATjneI65Bj2E/O5YlIlbQQxu5yQPisfDWStW4UHlo6qTdRNaEnmDwoglYmRgnlrklfg/kbMQxLNuSzsgVaKr2TgghxPBEV6DVSoNpVAmkH6UI7Q8EtUKNyKAZGl8TDOeCWMwltAKxm26OVqg/lkPqaZQc12T40/DnTezn8e9AX/4cpjuOItQFQt+sE13d7Z5jVE+0nfoOhXxkHaS7Oe+3oCUkEL4f+iPr9leBsc6nHpWQzFEc2lTQqSzJDsNR0fs1d8rUkJWUDxiUL5OrUTMpZ0YfomB6RYBiXpxfgKb6gISuPrE9YgeVtqDttAs5R0rGAu7uLzM9qJk8tvaUBg2Nxgaq+T0ea5hY396umVc1wQEodSDbCyEyIpCotvc3EMYbXZsML3eMJ/IttyN+NHX8gIE8C2XGWEzEnxs3ET2fFGdCaztwKpltYtjoPZGK0jnkdb+gHAMJ2fOqz+re2a1KjKjVnD9KyJcj8JKabmYFd2gJnms5Qad+i23ddH+ApqnYMDr0cu0B+5bCpiwcKXD470ivfFBEkfmlo6BkTVkrUaQdmMSr3DZVm8Qkqw35ZDZJ/UXkZfDYR/ZUCpz2HdJ+LxyPM9FCBgzHRqp8173I7ZqJQ=';const _IH='3690a154bd21ceb7f7b63ef1e0dacd15e8ff817ebb2518cbbc6b1318bbaeeba2';let _src;

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
