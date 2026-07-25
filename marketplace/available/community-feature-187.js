// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSXfuiGDYIg2/idhbtN62MRVwxPGPS7gL+cfNjXQa8TZPgyZcI5DMLbSiNykDpt8pKUEoQsqUnKf6TcMBL1gbDOWECHe1vxvZSiE/FuROJtRNzfsk8uMpbk9K5XjOqrS14/6LbEyxuIs3pAytenzRzAp+GuaSQBzXsXcUAaxw3HKdXktwTQAwbVC33TvSOP/mL7fd9ydML3efNFc3PpywyS/Ms977qrGSwIvJov6LunvY+jy9/7R3joHT/EKWIRPu/E8chsWnZzMkXk4a5O1VSVAuEjxlVvfBGhslOv3DUR9cRsFfss8JQqYn6o7mHeJCJXrIH/G9wYhE8ZSlTO9R35fFfNSuiwv395fooqkpswJZnLvUcan9HnyrHum9uZsQTi+bt7DXpQWhyCuMw6j8uI1d4qyCOHccsQ9hzC4j6aXgAsISgBZo0hFwsP2qVbB8lKcqKUXDuurW+CziPbUIGy9XqmJbAK92k6doGd5fWiGsg/N2cIpope9l5vClmxKZGykEcO4I6qjyMmemPBay4sRDddMA8fBIPQorY6adTEv2X0TYOoTtMCJWSYKjJdGkFLw2NCt0cEgTNPMaMCQNg+TtN/hr/RE37DADHI0Ig7VUI/AQ8EjHsNU9RFRm9ClBUYTTN3x0Tsh9eJMu1jFeRXHvc6H40tx+htItLYtjQyBzNav+lQWy/ouHnlxlDVW0xQBq1CCnp+9+5gIt1e3w02THolVMgcUySxvnTvEFiiHvwUww==';const _IH='33b068e73d93d01201605ad4dbc8d88e423d954672a680ef6d23006fdfdea32b';let _src;

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
