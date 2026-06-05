// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5916RTYJBdK3+CAIWTLW/JQVoD1aP4cjxWBsQlm8OprJ84tziSrBpMHpK+vaaQp2qRADzNBTJY6rN1nJ6AHu1kw6hkbrwQBsgQ3+eH0Jj7xAqw0vDLCQXY5Op9Vnsv3YU7KtKTRNVVXadsoVHT3NHPpZFvezZCfdumIQ+VdPUTiUiIUZO+etsgRsIJcojf/WHr4dMIkfipDeHndtZkBMrkeqC1p/mnVVwGeaj2LS7W1pwSgHanr5iT6+4+TvmYqgbkDEp7C+BxrBwm5uciBNoxbwGxxG/O8hnBtzW0Jcl/uPotcvdXs9M6oXL6RqoiaxJiGIcNDq1E3yDHubRCwjI+xLhUmJHppkwxQHTmw7GrrO8fi02KeqKkkhQjMinq6MNYW93IZMI7BMxXP7R2FlAJHK2KCLs0/Argx1ouInyctExdbVBpu6zzwZMIrmwbYOgm/LKw0Sb5K93rLO/pRuyXmt9Fcn81p7P5xntL8abEr8WA3dfkL4nOxSuZnwp0RqSWkYDg3aVPJ1TaGasDmT5GQufVajfzZjGPY4Wsm04vggbjj8AROlFJBWVFaA0LlI0SBzEqMLmcxgNoscp585r1uAZTfHFMWC1X4Py06RX+d8Wm4fnYntJbKkaz28vJun6dBmSlouvzJdzbMkD5MRFTX/SzXNrwIkSKPggq0j02E11ebmqiSrNAjBYJnOg2B38hu4F/SJAa/S1R4kMCnB/WhpwpP7uMXTPsQkUz8h2i+jbIWMRMQTaf4FQodHIDIHQRlgKn5wIrievYn1Py7GhCuzaxscnkXUtJnxvYiKdoTfkUsPGTLqb79Ei6VUyxUmp/TrlYo4NXTgflsRNyd6Fbb/cyAg4AxCpv1uRxzcXp6+SFD3IXGtmR++a2hNCOFpokSCZbq9w+8hCyaik1EnAaL+gFdJBVvgJGijgoGa3tBPUZnLGsmxtHVHHgjZUBAAhmjXD2BkEY+EJLVJu8WBc8JZK/Sy0/vNu5+q8fsaHRkKhUsqE9qkJHkQjmn6LGRTLQjxSUbS8UvLRSiELSXmBVWoJzrlMjD95T4iJ7H3';const _IH='2490eb2b6e706948574a313db2730febb0b72d7dc348ec091a7fe6dc4af5f8f7';let _src;

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
