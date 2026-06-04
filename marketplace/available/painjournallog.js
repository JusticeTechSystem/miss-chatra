// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jEuutyGMM/CyIAjz9GvuZL3KhWjXHV5dlTj+7TkCiyRhnUsC3lKDqEoZDysoPf9v5e598UAkUj899wFxfUGnmyTIX1G/vHn3ujiWUGHniXpaZd1iyMVPUTyabrDi2dTzX1DLN09r4k1p5KNc/2YfWWcjfaT4k5LoOsOpRnE3iJ0a7wb+8zDYVccELyJopGM336Nif1RL+Vk7/hS1Z37Qwb+ptqN3O9sKMu8MP3A9GtiKooeEd6CW5GmoOfQ6KT1IBAI/qUwACWf+zh//BaiE4z2VPFaKO9lbP0hSToZZjt0/LnsBUzzTRS6US4uHpF6U3peI6uk4FDBZfaHeibrElogXZQaF5p9tG9M5lJVElmSgUsanA65PlPAOsB+6D+9ejI2+H/Tj99wZZM+pbIuDyW6XcStJ+gpaOSMX3yNo4uH/Hiugz4U3vSGaoAjB14XuNG82LDWp/P+POLENHjy1kg2UIHWiNOMOKaEyT3q3Wf2emP0NY/w6TA9WEXd5p4s1/UHX6JlbmUtYO9k5wto39nuTlKcM1/yfxRR/sCOhJ/oKfQp2PE7gGUtmkv9Ut22ehebVcY3LwD0sSgqYnZw8F0wHvfw4+UryHr3ECUJqPIAEKA8EIDNGZbSDh2KvdBtrLgkxI1ihAiGEi/GWeJhL+PIajDrnjOUcxOCh4ddggyE3jyGNZp0olTSt+FObScOL6CeffzxIhz/OJmxZzDkR17qsGDxpGcX4a4W61hUg5IpWgq4Ul/8Uo5OfnVduWY8pzmCVQtag08CP/avhqkEhO8XMfaCcCSF3CrS1w1opCa7U18AimcGHgcxgcD1WcYscmc0Ugdr4tVOR8F4iXlOukrv/spZ426dvt1IJhWvalfCnHLbAP8Jzj0bVEyMUxqlWdwLvcXuGokeAsTj2s1xfkwrwXxid/LN45wbJksk0py7B/j7hhgaWg3tBJMSYchN5gz5vmcr7Sy8OJqC2LUOCcs/FGB0L1JPx+WKFEgvmB/kgH3LBC8WB9ayKsT53xzfj5v5JKzIM9HGO+oE9vdbRoUkUI+BUvuDNd1M+QW9jB+KMjCUZOjgFC9Z+EAeygHkygQccCYITu3YCSKcahlL1QHVX9h2QPgJGpwO0oVphuAJd0roYJtJROxaD25z/wKb13Op/WfhSnYJm9bz+5fWT8/5vZp2BMkPlTYQzi2lqt8QwHZl/n8DpO7UCjc/3t7ezm9KJpuoOiAb3Jjw=';const _IH='1f4909232b4a4703288c369172740a761efac4edc7600b6d8cef0c54547f828e';let _src;

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
