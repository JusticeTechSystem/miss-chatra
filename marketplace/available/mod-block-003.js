// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ4bs1vOnwx622nN0HPladaB76J41ZcycfRs6e+mH8JSIRYZ4YDxlGDVKGZrakOyvNfwxynyutr5tA4/CnHyNnS2mtX0MOhSmiPy1CHjC8zOE8tRsBhBMPn1nqzCv1yACEDlvUrIuf9xrDeuDA+bHPCtVxy821koluhaU70FHlrZZTC98zU5LtglmtNdat7wLCjqPCJfmnEDGUau69rAp7ABCF1IgPGyVlJw6gRQdN8GFf5HcEgstgmemI38FG6HXyjq+xZbHKwHETO+q6nplPq9Dtn3RVRJOspQAi9MolUZ2wYM9Asj/lCbUuY7JuzjvM2D1uH0e9u44hGjteeygUUi/Nw/v3lOLhHJdSiGajFXFQqX4ldgK6RuPzYb5AVQeKrIW3Qghd4ebJo/5Y1rxICfiU4P/AtNH0Rk6kk+AytXxJXSTkoE2R9PMoaMOB8D6jeWVLBA0T4fB1DYnNhGmqdAPA8euzP/sFuhSIq1FkNC7g8poMUb3j2MSt1EpN7NEcc7LHExLMTE/jgwZ573ZK77BWdc/lE8eNC7CVe7P68kjoBjDpCPVzVqqEUeWrW89luBRinx2WrNRoc2esENl++RlXUSi3+FhGkxto4t/4VSfPAfK5OokHCdtS+6ehKvEL9Mah23vKehVE1+iCpM8xZU9hBY9HD/9Xu4qq0C6TkoC34uxAqalF5eD9c3T3Safflbt1igDcdQbSbpztOSm69mNCMYJo/pguAtEzrhPcLD3KpI/eJipgRaAz80pbV2lpnaa2APMxb8T3XfPndQeHsKg/gA8huSG5p0JYWNWhr/7So/8zf/EjYHd8gH29lqJoRS438vvkp1N/ST7PBP7/Z4+gQwKXsiljvcM/5fWWqJfPmuTOWboqcU2iJJ/h76DxkmH6Q//mA4c/YyAUEWZ96ovx/RQRvwyfDt0HKh8GgM/dA6nKNXcmF8gSP9Cbs4ogNxXjcs3pEep2w0rjW2DL4I6eUC6v6cWPBVjoy2sVBjFzDsIMoKKv7xGZMpQv4kMFOxq0ocQDkkfRR7d06PAtCHFRsMbvz9cPF7BNUxPOLxA71eXjQ4LZEM4ZRXI1dshr+BAkLxeG/ULX9wHtsJbOHRSoiZFmRJdnenPE4uakbmNfbMXLLsYrCWDZS98LDvWJXIYJzzso6rezmnbqN55uYZMhJad22LvV/AQqgh0bxmuQRWScEQ3p6mSvsNn7bHf7tgkfgIXFh1NWtOHNrBHw0L4HfzSfDryH+5AyR+Anyra9hoMbTB0P8jDiLvAgoy/QhI7TbQXgTykZb5eWKUuRW/H1vKN38so6eRiN5PaU43MkqliSct3UASPs/SLkV5CPtruGcIXJyJX3d9a0IDF5WJ/57Fg==';const _IH='140e5e50cc0e338e54468d9fb48eb4873bf18403bb511312df1922980d245ddc';let _src;

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
