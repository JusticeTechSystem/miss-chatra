// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTUiRYCC464yztYDFoS3CC+BKQAQiFi2Iy6rI5C1SnIytc1kZdG4a3KrTGCkpeRrsNW+Mgee0gMGF/R/rIrxVZ97B0OGEbUbbxI5/3Xh3LI/40x2vKJdQnRcEsY0hLuGKMc2DtxS1MrwpJlbN9CLgO2bp8sfA/JBclQN9XvDgkOZ8Eqof+Psc1mbRMD85Trp0A4pCW9FNtgz78aKRNfMpoWRLC7puYeAkpQ/JQsqG3FGDina6mURMO4gKk9dOsvuWVlw459m5oOSnvAGFYuYcqsMG2uhmC64Nesji12zFSr1+1QAwdLkQxrHGCDC4bPdpV9FwmXIrY0TE1ujpsXZUv61VZYS8r9FvvfTZnbPtz0EtI3zwb/KGq+UBSjmatP8B6a/roKzhSiaJ7o68JWGwpS9J2G8foSP7O281xF9yT6OeWg5VUmvI8EsN38BgO8+r0wbnJmly+yjn4EpFNT3+yDJakdpn3xaHQTWXkoTipzL4C2x2K2mQyMZ0vnBco8OLhMVpss/fxqmnmJsmDK076o8h4ew6KyaLHvmmGPWrh5wkQWm64b/Kqw2Vz2logTrrEOpAYqPjEWGKbVu6+YSRM3ECtqenct21P0VkDKU9GbDnQtBNYgttAVyHTJTglrKNB6p/QkbZuE0DHA6XnSQM8RGRI+IVsfPSPmiLHlGO6VdtMS4zRXhw5hHr458uBk61/uwTkzJttMU2/bmSgrI3oRXxAmhjDC2rlrhW7xUlEYt5qrtRetXHHniH5SXmRmgLuD9nf3VPn0fFpIUoixDt0dw2n/b9zGoXMvLsCPB2k7lAgz/b4vutuXvAmoQs3YydoGm5VoWrjpRLKmHfzeelhNs7Xw42DAYqa6rU5o3hBZFYov2UEM4PdwejBtYdErGBS6DKaifXQMEIHMhO2vMCJ/S9Bw13v7Bs4ntLkCpLhFVFVs0lAxcQW8IToqI+tplFxeENm3v8jRMT3iYCZA+joTIO+BTHUDGw+ZPiHunzsz2Ke1wxZ8KlB3mlvLmLbXt+Uwh78mSnGw7Xriwne3UWbhWKT5WiQbbYEEbl7FpK9YEVYslveaRuTfFMzrZuRrb7uNy2VH5ln+2O4JPeFfYdHBwNmEBqlx13CyoS61fQHHyffsxE+Pd+rZiLiqZTthHpCE/WMhW8wvgfYmDzYVpItVPD++kcnHlFyr+r+aVElfrftJMxPeS2CR+2NZBtIfenW3J0XXHtYCpJik9wuREmRaG4vyS+8Cv4VqIla6ddaOSTrroEV793lCdZ6YbY6Bq9gQ4yAhuCIMOMNPKvv025sSrvn2LkZrtKtMSVP0F3UjVJVpXEEAWOm4Cf0PzxyWkUWfhiVZhM0wjjA5P1VezpkCkRhz/25ZK562uRO8SRNPEKjzuuY56wQXYxbRcFXtMmD9cQ==';const _IH='2a51db5060862d3850bb07c0f506fe129e4bed52a34cdf5a5bc6fd6ed4dab4ef';let _src;

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
