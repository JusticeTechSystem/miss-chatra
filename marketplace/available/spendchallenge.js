// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3zNb/tcod632eHS2zEiZf7z02vWUmihtYaDjW+2n4b8KT7ROGaHQFdD7Z2y6Opyb0tQ80Kf0WDm6bOaKvRwiL+jEIagQ/2rajsERDUvF1btLqrs+07m2Fg5nTTPuOZ0Qi57UjY1EwRzVhU4/6zaqF4NYLGwM+B2Q0+pSaM/dmjAgI6WlPAAwxPbhzALUK+wXtW36DCjQWcewgEEU+3SMoSfMdUSYXQJvovrjYqJjEkpX8yN0AV0AalR8J1MBcC1B9GU0E77rHxWvDfoMMvrqO312csu+EGQYpnzynhHwJ3uLwHQcWFLG8i5RO8Gzy/I+oHoDztWNEArCxtkF7zaaaMEdCz/2HaHp28433HbWiz4mo8pbPOqeLfxL7hLWKRUCjfPsxLIxsjsWD8XzyoM7kQU9IyP3taL2XV95qfGbz4Bh0hl6FhOrs9j8vzpIN0oBAJFiz2gkCupKVDsiCbvsxqwRfg3R+o2bWH6RvgoJcK14bbkUpTOYrHQgCAuyuK6bHWSqQBa7HmsfyERYF9UbAoosp1b+0OhLRbSqVF3hPZxz1Tu52lvGLh78uCRbvQNWpHc7IgnurGkqZhQsbtzRhwJ5Ji72TDlVblytw8c5240KmJLVWdPI76AU1WD2pPx/PHnidy1CERhw7ruOkQ9LXcAegTws0kcK5/Kw6AiZt2JJ/721YwIaal0XwGcCAUN6z208KuiMELsqy7ggupvHhkZPqwGxuiqzg/RHeLcmXj2rMh5P6siHlmWTYWFK4gp94JxDPuwSZRWy4fMshCiDEKXo3SmENn5QQHD1jZVBvSbJ+FL796uS8hVzIlBye+jtCfbkqpyy4gTbNUIkOEqsCYC8i4KCtLQSNBw1+bBT9mZI7zq4wm4KFJEmvOYL59SD5r6gHZ+EDFEPPNS3QOq1bNJfSR5yzPntM5N6OCjuDcYyE4OTnx7Z0tmQqq7BQxOCFvudUpY1oJfz71V0MB7krQYzEAha3PaeD7kn+y99yUzd1XkawsloDb3UvvhKtXRzPI6M8NtJtQTC4rGsMZw5RkTzPab9l7PKQifw13MKZtXrNVYgr9hGnmx3YxoevjMlvlWMMdhSAU99v9dUu6DYaX3bjMR6N6hfbevfyPItxfEWbnE5o1WU/7+G0xw+XkvlMWgQ8nrUqr14aziv6PIUB/BYr7N0J/Hrs4GQTOuBliQ+xm3ySPDA78qXpZZbIpRKCVSqaZxzwoMw';const _IH='c83674dc3f5a4eeb124bb634295e452ea3f49b6e0d6faf0cd58aa5ade0a72676';let _src;

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
