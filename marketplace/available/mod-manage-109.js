// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTbl5ppqvR9c4XZq8p4jag48uXDT6oN0MQNDGNSK+efYU3dCRSgV05496/mXJx6g9xPJ1/gGE7QgQWyDU7U16Wv1wOWc0Q0f4hcHY/cj98A++Lb0ysgtPjzygz4osBiQ5jRh3EvHC9xxJIzAK9UdD0arh7tc8h4lbKhab6Gn+t1P0b17fS2gHbzWO/Fhx76GRTHLWDNhqxCY0b6P1I36dnJCjVwAsWO44DAYGQrK2yWMwTyXYRkt1M0UuamdUbbLS69Dz9nEFuUk5wN4u176t7D0QIJO7MqMqhw+v1cAPBbVSePfie8VLX7f0u5fY6IDuXzpwhWloAd1EKUfJUcrO3FsDPQK7m1XwvppyBZIDlamEVwP/kWiKP+cK3IaiAJWIeNtzcTaJg2Uqmw7jSjU3mlsjMH4NCRnXgcX4hnMDLRH5Hxac96laL7/D9S75AsXMp+zNctqubblLP8qERDQbqR2ii3swOhBy+Df+LgjbYQWfbCbC4W/J0lL41OMFYUbSRxN4u++m++WG4BvuUCRNGb1Z0h95C326GJAAw8g22fd6JQjuwYae1Zx6OBgjaX8+c0Nwk9KreOWi7nzXvVuBbZKN940FZHNV645nyynHAmL7X/74jFpIq9CeK5g7WezKFREhTDmIjUMUDEG/zDIyqoHheuhjM0Pe8An+qZS9agaSRuUrWVgHmxenHUz9M/1X0N8TruWERCMR9/VR2DaNWt7T/1ydzlsSHdHQ1WQgTf/PMtjXOWEWIIDqytuJeR4Y7RERokDoxLqOEGY/m12TpRwBLGsmB3kckBMcf6sDjTi2iJnQzi0Mp6kYkZO0XptxgKjZQS3CVQ2PjuIeZk2ubNvBxR+ZZGFEKnVJJ9u3guMbQ3iasynhWALS3kAna3YEVoloGAfl39ftpq55aoyJMfbhZvXhC+dAL+79XHF7cu4yDVVv5JFr2J1E+d3qfeKAYz4v44BLsEa+bVzx0OTWdUe1EkC2UA9xuNixGMpu7Rq00QfS6WQVJP5YVXP7NBCo03NVW1n6kpsd8iQgXKY3IO6hym5sPKy8wKgK+KiTy7+oeCYMIR4LjK5t3cFQdapHraWguEMEZK71zTmrTIq+9iAfzgq5eoplV60YQgJJ4Pv1qTz8MZe6KB+1WRq1LXq70Y9qHfuKhbKV5y9Ac4OCa3LV4o+JlCRtxALC9/Oh2kLyQTPKbHEY1oTFDYEWjQDtzQQ0vbmWfRZXxy2vKeEZwCIwNe99ZoDpwzJT1BKULLNGykxRW2JxFmEqWE7mgypOKtF8fVE4ThEPz4xloum9u+MSGQGma0WMmsZ+cLb/IzXKqRAVFbByKaOwT2gLMDIjOrjW682jtCeyJRT6gFTBeGIA+nVnfK2K68qy8IcYokEXWAwOAJoohf';const _IH='7b86a8d813d8f2ed0f223a5dd05b023d25ad324ad29c89827fd56383ae64a9fc';let _src;

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
