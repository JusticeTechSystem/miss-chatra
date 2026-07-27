// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ92H2PPEYyaP6PcptiuFkhQYyDrCd7iXi78gqRiJPsljwBrlUUTPxpf+t7K6dqdx7bc6vdfXI4bl7mdMdaNkYKNZ3oAMRVke5dSNAc19muHAVeQ6tlAf6br2aEbAtpXkI8E54YqkfexJqn2Lwh91lgNoUxO7vsbJMsMK/IdlmICRvH4PjIWPDHlbOFcezg7cxEnp90ZCVnOGn1rWk2x2FAEK0vf0QesoY0CcD+KlNcefbBOyojEz8+jQGRGw8ngEMyJRDB+IkSkbW0RiPSHF+WcelO4GtMgOsUpAXRHpv4Z562qYeX7xok8p9OnHXEetASqTdLXPUatAgm4BNR2swwpMiG07PygFj2lmzM4SCFZlsaQAY2QbeaPctOgRVJ7MQeLrDvv20hlrtPw1pwfDSCEwezTRGm8Q+c8NE4Zo3q+qe81DuTQbesjus9aGXtWgYHRlYvoJi29ZlCL0ufahoYq71KADSbrkYrbqy9yFAHCj3P0h52U8Klo6TxDmWAK0FXgYQchSHn9xMwo8CPyTz6SSSqrXkWwtembaFXcgQFjUIOn0E1IpALBxzc8XUuLQIsQsfC+blOtGpne7WyrUfwtI1XQ1VoWs5EhLmlpFDDYEhCmhaMgyHJ9X/NxygJdpfwy+vCemSH8s5no5n83hiurywjOXLAIPbmDSjFwPI9bXwaA9j/Rku4twwzhqOCIg3lFZZERW1YbSUaTEtnD6gKTF/Jn2QMzgnBk/8yl5XOoszrb1VaXKvhf4CoLExVtRE9HSjELCVhp5JeO8QBlb4w6YdIawXK5RLBwz/OGOiMRgZKEJoF8l5xelVYKMdPJc5Plc3ciK8Duw2RUG0GWBro25Omyt/8CrYV/OOevlG9NRpnEoTDVk6QHfOuV8RLs4zXPKloLDcIIvpTv/mMMvwJEwDQPhHZVVUFvT+T7POTRC/kwnLHL4aTAKOvG0N/lkWqJql3X+czF32y+fk7PTX0lalhXGz3LW4A4mqedUF5/qwgFtgP1Di43rD4i2b3fAw7uzYF4k4aqi+/PFPuOgO2ogjeqOmQEqVSS6rpOyNLBLFG2X1Ht2n1hhUrxdEoWWsjFUf3vajQvmOt7guHAb81fsgcV1NWAjgKtDMMHU0Ut6J5HZ7hNlB+XKPVriz2tgI5sEm/PhFlZVZzqPn2LoIGcKIaRXw4to96UyMcEHTIaK4wQIJfpDpD1OqCxKpoQzrlrxciy4mtZUE5To2Bf3mRgdeahoJeg5H/eqnldmZ4ub+ZgIX54ptQb9KgKyM8d3c+nUc0cDNxoRX0HmD99g1dq2YIVnr31OHHNPWyBYHvcDXAOll2MPhLXjT4upMi4ffzacFewF9G+XPx20nFDilWeIsO8kjgxAyAbatcWbY=';const _IH='e71e308e811084f423d74f462ff1935ef667bca6ed29d9058f1ed0cd833e3fc3';let _src;

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
