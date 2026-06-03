// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='20BRiGgOZqeZNwr+fvm5tlo3sgqnf6QKNJoBIE5M1btvRmaDGoZ+DbJjsAtMnJh3eKsTr7k13EMbN9lfY67ww8mDNr78IpBSn4dxyxQLebuNuOVpHZrROj7GWkesKDh9cnxMQ8CpaP1e9trycJTGKYrVTnTgr4zCrPJlbxlJWuhMJHnyqImpotQdoTTlLTR8Olhyu05ctwCzwhv2CSoWslQvUJXsiD3GttpuIO5+9QL/bqjDKW4TgL0Y83WZkD4LtM54JYJlg6DYMv5dOxsnQGbm6mrj+/eDEjJ8wOBkSAy6webPSoSCL9GEI4uDUEMjIU6ChCGqVm4FBWj5a391UZgbJIyyduGJQFsGjvWiORvLnBc26hcHcOEdyhL6E2LnE0fOU+bZ/N7HCoUX6lV3RIQCZWRqVgeobnSeSPgnnz3Wf/NUnSOsdFpvBbUUYCqqAtykmOGXDtYquxDkPB+ETNOlJ75PsUaFVhtuje8+PRrLIcD5YWrf8RmTJvHq4CbxHE2ICMocjQc5w1gB/C/qPXPGVMTL9lV36zuvtIzjL6m3+ghkOPFTPhXFu094Eag/+IL5VUaDmmvfEZ/XqBehY4EIouz2oW930yWmtOSonTwq6gcysQ1KKxLJ/wQYJR90xUtoDpgtElJMfetEsJp3/uNaiPDR7SkP/Rozy3CCKlHwN7tbaJhgLGFsiez71l6NqAvvlC7YTL9Ar5xAEEUcrbNulJCRGPbTeWGChTNyrtHveg/4cTgE2YClloPvNadwWDyJOqB8rPxLJKpkJ4icO3rfxvZX+Us9sUYAhVbLKgD5ptp4b+R+o5kZb8sxcCqeJAYrJZcX8yjyEWkbtGvNk9iiJTqiLYdbtqsJWY2cbordg1W032TVkdvHkk7pBoUuf89yBjgGXlc1PAEdjsuD7YuZqUeLnr7c7fCK8OlN4uhUUZGmsCsMuy7SDkviGV5L0cXNi920FRwuOu6SCwK0vV22fAied3johFVgRsoUD8BrFZbYyP8W+dMRjwevsjwL0A==';const _IH='fd82de5977b027cb0935b15ed719e75713782ebf4034195c1d87c02095acdb97';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
