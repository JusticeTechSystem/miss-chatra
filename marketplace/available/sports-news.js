// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSEWmXnVqkDaldAud/fptcW+IR5w9RBkqpWQk4B4XhZlEezo7DXdMWqEtgwEjPQIGWWwaW/edpIpobRebXqlHET+lN8HrFjok7OLUTKqFm/5g01stehtY15vI+o01DmewJqEqppqN6lU8nQmV3KDRUO+YiF3GfLV3XTaHw1vJpUvdoSbN9uSBvEIHrJv6+Fz/S6l2xiOc5qsuxOGQBtUpAfMF7lKORCIbxEpLxGzHmz0u+ZJuEvRhVhq1v6anVFH5kILm263dVI+IDUB/n7JAlwfcaSrc7R2PwbQCKQD6mp7ebhXw6jvvmbuVpesYjnN/4g18IaiSN5uaO4E9Oz+NlQul0KzVfqKvVNJl0XdIxPkt9hpiZP74xvnDi8SUamRgvkn3FpzmT5GlSvRVZDCcyLcpfiVu9SpJ/27nvPcXZZ2qdLWXfyPyaE711zbllEVfXF/qJG2bl/ICa4Se0691QrsgEuXYsD7Hm1/+K+1X1X7/h2KFW6f/sJW55vWcEZMmay+OpAy6nO7q0UfOnJ22WX5aAzaRGDQxP5EfFh6ObN/RNsa03jqe7FQCRb5QD7kWICjZuQh/uih4ExcTG1s60N5WBdHMn1SDataIRbc0HS6xvH6rgIqhQr6re4ZnZk7lgnFVSLRgQYwETp02wqlKzPpGgy13pkeykTiElqBXN+jweoFtkHC/M1zo9hJkZtlmID9PNpwHdgt8B/ynwJYY8EoNtoHOl6b10qckkMMakhHh61MciUEFR7uxd+AbdRWlyP9hVtv+Mb8yOnPTd5hzfFGWZ+yLVpjZd5NtftPk67SIYoCyyADtBSWlhTyrj2IbNByglXstvp4PXAwFYyxoWW6vLVB/4OewbU7KOZAofkduL9YJQrTv6AziPDYr4Kwxb5qgRkPUSqzyQ2A/R5Rlt1I3+kkbAtxgW9U0P9+wYWfDExskMcY9FGHro2TlrK6p1bbQPUa033SOHEgNozMulS66NR4wFMZfqfGD576yF4oB+PC5DO3S5nNHYzOwnDB54zrKrmuM9K6yD7iDBUCqzxUVuZI7w8w0uU62bkbAbJ36kYI5zdKq/du4MnnudUp/qY+xiw4m6f735tbPrqRdrNYO/DnOmJd9QWhG0/rPq6FNETKCaoR2+up7uCK9LxEyBlTON15YJxH3soQSm22PKwOS4MXp3DDAmOa9f/ZB7/5PMxyQ4t4jDVjNiJr9UU49cBt+p6vH4UkgcO9PEukcdbZN7eX+qYG6jc9JkKbzDGOJ0VP+C7RvbADT0t+NjYXi/qPaWHr5NL1JpwR1LQ1nxsFEWw6iuZPPbbSjWzjez9I99mnhZjtdNUfk7UjPsErmKlF9XLjOEp3jy6ggiNgA5PBaBOawFuWx4ZbG4NXRtoaYnGKyfppBYO2hQm4gor94AKbYusZSYhE1zAIZdQceqoc4UQZOYU8txywkQW6n0iwZoFWM70oC5d6eJlXwgmxjFlOEFAhUlrGWXW4+PiFo/5V1b5Hf7Z1lnZ6JCYy2ELCsbj42zS6SYOzk2ScBdvSHuiua3o';const _IH='669e399df97fcf6805b7783634870f5d6b73ce277065485d361b2cbe858f2325';let _src;

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
