// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSo0+TfW8LNQckSIv4FId7TebWk8ezcKBcIYcFFMf8vC0t4IMe2gdKrk8+KZW0M/8gNXCIkoxZ4EZHKRCBEqA5ecpZ8Mt1ACXOCwRtnPQoz3IO/QX64ynQ1KFDxCLiwGblOvOOvZt4AkM9n+tGr/Mm8rlP6xC57U8SrXUpc5aymjii93huNcUxxufvYlUA0ViERCIXu0nX3j4uFugLatUN4TNCliugUkrglXwZpe2NVWGGxq7LM4O9V7eymcz9r3B+X9U5vOgMtWR0CzjGiUg9L1P6OolZibnwm1mQ8x2Fv4+jvsKzCQ84ckI26gpSXOqSyGXnRRgBwX/E1DRgtAkSea5ctSyZAVvlt7QVz5GgfrfCnNtmbJGz7lemlotnrUzdrLuwjeU6rSQLI0B0fZWGmfImQN98sXrKXpu91O8fv4hKvv+n0qcdnTGmMzq3+al9vdi5LlUGxT2L+ku0XqA5bYz8hJxHEfvF4okmzg7HuRbGbO3fpUHcIKs3duhx5dognaXCI8f86uO4/Yp9IUjT3KnDF7j7U51jqeAj0+fNAMw6rBCKZZyUsIKWRlJNLX1+RWNYnwfu8pxxZ1PgNg8PMnrfg09cBdJhIJP4oU8YkJl+Fm3wkiMMKo5wPsD/TMSL0NwBs6I5bGqfAjifWGEefdCcUdDrwtr2uu8ngXwpRWei1jwCU/f27ugW2Z1/vEttf5R9cjV03VC6eXQKTO6pVdnsAAW5kq9+XzDAIiahe4PgbQHUW3CKnx/p8dsZuObeODXCn1f/MmXH4UKtw2mz7OuW5Zs1pFkZj0iNjSNjraPfEWI02Dkx7mnY/5sEajH/8KrVJd+TJZ/xJuK+3YWUcqrd9MUSbwsNIaiWxIK0v1HoZqGfh/DKTIqRuqr8ONLBSb0qS8hwZ19VrNimPrwh/0YeCa/YdJOAvJPh3jM2leKNJxBXlTxSYWxZUctAepREU4ku/4eGS6NxGfVREdYBjWBcWj12FnZSek33nEFfv9+sYISz5Ty/t//Y=';const _IH='3cbf72fe551c47a7717a6522108cea2c9f9e23772a5a1d97bb508003ef8ed90e';let _src;

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
