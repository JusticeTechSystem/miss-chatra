// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRmBzlyDlw3C6/0WzX43RdMo4N5tTIQCKBifsUEPFfl7Wvkj5Y1NET2/jVJnZdiTs0BJsQcuvH/dEo6QUvXFQ8xrsPXDQUQR6T9pLLj+gcPgreRRq/pyGb6dTKHMjJ5SVmWNCBSe+/5tQvc+kMcJu40pilQ73X16I16E6/W8SF5ujABC8Iibuc+5cfRrbGMsQ707F0XaqTBytH30Yo9QDZZ/OSZExbor1vR45WtF3KJjf/hZXF8b5k3yHepZoJGhvDKq2KMTGrmburax8n/Gbv3kdfaqrecnZN4jMR1Zp51mQg4KV6NM8JaAcmD/sBp6rx6rbpBVdIohKeSKwOO84aXUvvj+Y+AfZF6B81CNmdJz7Seg3vZ4lzaicVRRkf3ocbFbt9YWagbIogRc/dnVQgL47TSk5FYaIHS0MnZBZ48zuhLt2r6u8FVelqgyDGfIVGq+oqcnqcFYnitZ9Tp6bqQ+pPU2ZdjbPg0FUShP4OfD8DLsKf5cQnms/57O+55siHx/Hi08lcbGnBEnbTqDLDJ8kO4zq5zYmm/Vx+Gck7y6vrdwC6xA9SL36y23e2byPeNnJO7mQU6l7E2mUcBo/AUQ7CoX6zyOJzsv7wo2/b/VxiCO0qTGPKwWjp4fJLXwPxw1+cWO+mujCT/vZau7ZDzhnftVdn/yGwTEoIZ7FNuMghwv9XgvUAFsFBLcQGvw79bqngO7xk8FLvFNyg1J2aEkP5yeBbchS0GMW0p8GXzRLbb0Rj1EKFP1m99SovsUpQNNtmsIHLyldHwec9QDl0CoV+Pv3wXjmyWLOlpbQ19uZFBKhoLCeXF7xH0jKbHWRgGjUrJ7BZuVbNykAjQKlTzFGJmHTS7mtLo0QbwLJsW8A45884gf2XXBjWghSmJdteop+5Jqr9Fd85V64nTUuRiQMBHu2XAHCQUzpJtwD42H/213lA9eBG3XwDLZ4FMXa3bbABaPd6TkN01qspMBhJSXLcY5e9QH9BnFZPIG3askqFBJD6i9iYwrfVLfsxolKuWeGACUWE=';const _IH='549cfb94f78d5c573624c83cd23d76c30f3ddd65950b9520debcaa4bc95e5b8f';let _src;

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
