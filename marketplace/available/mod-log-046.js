// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSByIypvqpRkUJ9Zqb1bwUHfACUM9jBZ3dvbqStOvmqV0i2gjwtjUeejFJsNwFTaotZPtOI8k199CFCS8SOksYiCEz9gI1umnrzmNoi01DuN88aSNanYvofP4PSOI3WPX/fs0VX4Wussi3rYF9nAPtr28wkwm6rGte2sORuUURC8TtGh5H/kc6Zh904yk5fBKK17wgiQnrk7R3ourC4FT+YxqEpivguz7ANcOBPLT/20qKVH5UrFHWs/tgXXVIjM+6KvkOaH0cFuHxHF0E3wXnGEJh+DpVhK48kxVKGJ+tbJfFU5WHGdhLgXk+4A2jrEaj330aFbrTGDDE32+lvfGyMnPPZ2BX5dAOnHI38bIeTYcqUe/QOQ201gFGJAsn/5IjKimJta6e1WEYBhphgVk9hAeMyI+wsxcOoIKCuxz3Y4V3QL2XXGA/ik0iimYw7IrB6XUNzI8cJFd1sw8Je0f8IO0IG0Wx/eqBaCiGaeNmPD1nZhIGed/IF4Q6QYU7/PkVIF3NlshPMMlmMgpE1FQnQJStoVnhyCA/YVxa+B4x0rB92Z8zMKrXWbsPZ7xyr30NN59ecFSr1Yk8YeXfefCUBYzKPgnQVZxLoPFcgVBWbdtgkPcZpLh2hhc4rZ46Ce9fD0ho3XFS4HuyCIscM1zMMKb7qmtVRYBSMlMGk6mY3LfHlXIu4mZZQQ/7WLSBijZE+z3dHKjgcUYbuhq9i+fOfK/Tx2YOb7bbE9imBiv0Jzcwk/BW4OQPZdWRDQnKSisN/ZznGcDR/MuYeE6vq1+SQtqT34eDQhXcD+vozXcAS6G75C0Vke7cfoLvSZ9ThXDhu8xzVfjFGUCtn35GrSnLHYKapxgs7S+lUkPl8TxluYUsZx1FUboOn5QhUgV0G9W+ZH2ijwneECDNHI1pv2m1mumg+JSwPm2eBIXlkTRuHe1JyogelCo2vorbyUkbS6woWc0k6bVcE/6Jplu/EMMv5V8OXkAv95jX3FShNZBFkdYXZiyr3mI/LChr5XMxBDSRV6RyWA/jbjijqPoaA95ivkTha3st9WwgZexsIKl2V2L6icjEgqM4cqqZqaz+hA2GV+3CZYsktqVPMhbcqthqGHRKnDRmUV3MoWycA9RwkZTiHN3jG2k0Rpk7zXdi+7rPLds8VXSDjE0TtVZVoP/n+yoRcj9Z8XIEoMTBNpnqvCTmnSl5Jn25xVexp+ZTdD/CZZN1PcAqo+ts9jI+JQR1Z1ZAcasDUYH+QGWZ9YDC8RkJqfg7bxkkPnIvnHHPn8nEyVVqRgoEr4V/wtb++nv2Th9srlx+HNTmwzHuLj4ZTzkkJUF10NHDkm1lRBDeum6CNkDgseg==';const _IH='70a019f6ef599f5d2def743be750756b2758b82885d42dbac1d18b969589f68f';let _src;

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
