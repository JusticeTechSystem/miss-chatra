// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRhb6AH/1t/6GsA53DBYIp2dCwwAj8UIUT9xvV0X4DXJKMAuGko4Mj3Y0bVZ2RM8hREJ9/Hq+qOsbguAZ5tLHvpTGbkemhGRjEDP+QEz2pI01ryeHwOhDGQwwHmHYyQNKU3XeHttbnXM6BREPgXphxkwbcoCwn/z9RG/dTfKXtWKOS/fIlYZsiJJZG5+Ser4drW0P6YV/VPCe+g61AOUlp0qN1LbZly0pglndfsYbMSjw1klU/7Z6qwvSvGUT9sSh0T3jDICHInA9WwQNat+072WhQhrtIg79SL5+2jcADEUMZFJopZtbxvxwOqICnWky4Vd20FQLQ6Ags4QaAO+wEkkZ6rw3n/pqr2basUgW8OKh52aeC4SNdiTmm9tJFLx11rHe8QEO81BV8NidGDpv/I3gI2AxVq2JhJ0anMurt/CnZF0YYDPlvr0xCP04G5FEjX7yhvdwl8k0LzFneiC6ZvAuoWWoc4I9ryXuXzBxaOQBNeL4hfuXxIbiduxMTgRR0jGqdORws/pI3jOyLUO6F2ikaZOXJ0FTOygVBrLAgnm0ekFT9AWtW9A3duRRex8vMTSID6AbJBhx4QbZ4R2zJ2V+3VDVM8AzgKRyybzawxtzrnFNHeU7lo1c19OkqR5UJh/ClYpEGgpd/TCL7hcSQUAqUKHlHwCQMFg4d1YfTjrx7lwelkeS4NIYBXQidpP5TQ40UKZudODHzqD6KrEW3+I4T2AJV3f+78RmgSmAEmlbONYOywW9a9ZmpMphYMekWv8vfQn7YlregTckSaDy5xL/mqM4rdCK5msL0C9aNj72HkBz0U4Ada1t2fRjlLO+GD1j+u4IeIzVNZJ0BY7jrAKSpOgR/ru7qMWw3TiPsmFuLLT0BdTpd7mfjIfii38rwuiH4gtv+IQf0vJZAVYWY15488pcsRIGQ1K1f1oWOfT05pfzAdo6y/4S0KB8oPIMXrBjgx7RkUvTmD4gT+YrJLN0YRvaHOrgpuZv5o87ruM9KYyNFoyJqUDURQqzIDd5v8VPrlhLcjAkZd3En40tos6TwyQ6sibi4tqqQBl3xbK4PuRca0L2KxnTJqiseqZJEnebA7OD+VaBA4ow37obpVg6C9wTBNvfA1ALVUG21fMqSpXPs1hHnsmAiSC5+/DU3j640Q0iURe/T8u+58MQFYB7te2qIFPq21oQK96ippa8+cZ6BA+Ne8mVrEC8147Qe+ivkpZg==';const _IH='d73b0aa82ac426507b52356e1eaf9ab6a054721ff71a943addd6d3dc5e417e4c';let _src;

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
