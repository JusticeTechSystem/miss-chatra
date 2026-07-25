// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQBxNsGGlyrG2L2D0uoefNl1m0gPQK9zCpN8S+9sdGHBg0ye8iEkh8z2eusGutnCuri/U66G6JJJdAWA/9XOpVjO5G9hlb+SQieTzYtmBCwi0t1F1//R/O2sMSbsFCt1RtHj0hRkLvCBpCuXDd8ngneEKy7jUoQMGnqcOE57jUQ487ZO3uNKTZiBhrDv18DYSvZ2FmYQ6V6UdSDC0rs0ISko/BikOiZn3+HVHoY+oG7u02klUukdXp22kkaOPXMcI9top1KXVfXdER8AW2U0xIZMfFUORnV1WF+ATWzP46fD97tCJN6NjgpRN4PsKWRiuDyvRQhcMMPaIzUzFf5AaJRxRH+eKLZ8Pg63V2Q+youFkh5W/jQgplH0V3iijaaB4QjmWTR8cdcL3Ujb7lKE8h5jZKi82JeFzwp9iy5kg4NNA9jpG5e8cCvrhrkv/HsDlflcz91VgB1mR5R4sWRnwayLTWh1gtq+PC9mwGxva8p1OE+ASHL2hPJ9e3TVNo4RgPxsS5x5BtgeOdhMD/klYZPYT1mlB0fT2ViikZ+uR9JQMRxAHQPwcIQFjWdo2DfeeWKfrxg3ngAv9kjbiI4Bt0JMjWXW4a1cWMouO9bFXBXzQNwrpLMrgMadhpvabafByxSFp3qdZ4mHjB3gbKB3zBFIIJZBG0J0sTXbQV3uG4SAqqqPvyEFzYJFcPfjyAg23GqI2d7YZ0aQYVNImF0Gc6x4HFTOLvJyVbOq7ek6s8iZHbbHBuRDIpVLcNq/OziSsn1O98zeJV+g9qQRohnhAm/w8CBDaG2cf2VOWgIB4iBitjNsuPdM4OBapxecbHc0wRY0nxU+Pm4K9zQB+T37s7PciHOPa5vQB1fdoKEhnkcqXkW25MaVBSFPEYHA1/BjojnaM49Nvqe/2+ZMUmlOB71OMgbXu8WQcBqKlZDUkPMntv84YldEpxcca3zHJopYq8xE6VbtoiFWlKfC+X0r0ioOYwZ9VzfpLXz6qTiYDg1Cqz+kGcGdVvldX2MqrmvuYIRE6iZA/JuMp1UmoERiA8+M6jMOBVwO2zgSNZFOAWosql0vmvorsF5kN/LCzt3rRz6du5/7Z8xynv8cLrAGqwdD97BwXXqdm0KArupA4qoN9t73INopqTq/1jdnS/sntUR0y5eJ7P9koOfY6co585HMV/pMlPf3S4kuexb3IEsHuDfvjulaqX0+WL+ufAJYQ6GTZpoeFnP+YKfnaWUlwmW0kFtPd7ULHJ5GDr+UQTG6ufYWr3xYOA/yVRYNYiviCoZog1nCmQu3IUd4CrDpQeeefVdw1HqzHSWq8mR7a0xt1hZJbbDhkuSxIGO3aQuIxSry0mrnBOkd/tycBU4q0rxZ8jINT8pb/4rk5tBo8u6uMN0sxpykd6G';const _IH='e3e75adf0de9d0ee8bba8ac9b97496b6c9bf5bf08b4c9049c886dac883a8ba36';let _src;

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
