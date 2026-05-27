// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zPBZHTWxlgRFeixO8KGV+wMWvM6oNNCKE6qkFpx0nh4Jmy9tv8QQI0OHb8uDXYwaT2chBOLttp5w61D3y+4HbTH/QWsk7a8YDD5c5dKZxpt7eHEu5L54/L58BHXMc4nz6UoZREpEpXhO27yvWtd7mcqiukqBRLw0IDQLCNBgJsKi9+TpBuiTxq1uiJroIrwc1cgZ8JHvwKSAhoUfZIMTd+/T0K681ZtxxRuSaIH2D3h/NGHQcjlp5hIQVWMUIntFE3qptTw8GK1A03YO58P9BZ/GYAxj11jqRYqosB+Zq5w7v0zM7moo73fdqnW+ZwwmZzSvdc7es8mYWQ/GDEZWSukp274aktiN2EF6NDITvW/fn6GzTUmXsDCyt/RG7++N/YLybi+ocIGCm09pUPuAsOp916nzc7MkqQC5wpF3e3ZuMBfu1+Y9nyHLzfwJBO6OxQM+nm7oT9Q2O5zA7pDoPksCBzFrnyu7Qnv7H+q6qki0fKBFeqGghxZrrQpFH531JQODz/6c+BU7SWOtiF2+UICKlmeJPiFBqcjOp08t+mooq6hxPXJZzkeVkTjgpCa5Vlm9dS/ZOPZea5sSCtlbZGbjAor75IaJi/6JMiH3tFcnLah2Z0juTeCpIC8RCG4xMa5ZmgAuxmwZSreD6QdBZvWyVHqodG1x2I3QBa1/VhWiI77zCkOpD3+v1ioMER7Nxs9xjluM2sUKn/DRvZtlTruASWwpOo+VAz9wX8Rol2h/hhgWBNU=';const _IH='cff23d76a65b38d199dd2c3fef2a065e9ec5748eace8114daba844d66a546fe5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
