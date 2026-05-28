// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L1gBqglp9EhssvQHtdHJnOEyWCp8yjYdhtD3Gf+mjBQ0+Ucoi/ySfL5Sbp82xQM1NDUVMMQXwi2begFt9KxhidvT9Nh/F/B4YljYPTnsMtq/KDfsARoN7oCNprGUUhDRf+ccS4s3ETH7TbO2lehp5dicwIlV57iJXl3XeLEpIxrx5XMcuceW+1qs65CMPxpXa4/CbAIucwu6qHgobSZZpoPtpeL50ZbM0Ak60UDOOf5v0rANiOY46LOJUaY+B5o1IeHHEccA7WOMSYd+jEYUMcnXJVDwAQzulx7yMq/YAITCyTEwz0AgW9ywqcGK6VSrtpZKjAzs8D7va+7dLPeyLDOgbIgqP9hxIXtBMwiJSdVlQEZvOiBVgoFS5ibLoWNS5no4VHHow7dljwuucBRnYdfXQHvvq0z3y1qosLOEeXrpmhw4GDrX8crLfdqxKyzQz1n7uBvE/sDvg/7FQuTMYrVvFEvYTSG9hHx0wciuMH5f67N2ah8UBffebgw4uO8/hKmKTiOlektHtVUa9DCFFIs1e9dfMI63mThXWj97201K7uiJu/Gdw1Kgt7G7q/JNGrIbfVx5ZGXbHi4kMCcvWSaf76JguyRRIX4JUVIFZ2ZCH7VUR9038ZKFzRii1UKj11aXjMUClwY9MsuzK5TX5A0SicuHdkVoFAuE3+mqpP9m7gbpmak/mNGcTxP51RO76ilX61ljSx0cVKFxhX7jKBCLThojTYpGPXCnpDTT9yYHaZYohkLBJyNrZ+HFqEIP/HsJWxcQ7yJMdtD+RSlOS0DUqUgp8BfcNZJ8365ewraiOgqX6GIkBfT1DsVoaarmJhL28Bfu3r4xAlqBwtgzGgCB0+AqBcfISD8uCbl6hZ22QOmrpJ0PkySUkCEj1qYw5FMPi95KEsV23SKol5SSTU79SemcIc1dXp/j3Glj46H/sovJMdND5ZeYzhjywh5w31tMOjKFeF7Vi7O/As0RGA+gfHHg8jJzGlY9OBWhY/XtW2DvR2ue8A2iciGZbcMtlo3w0YoVe0WWqoaWbxwXFROMMwm50NANZC5zPLop1fhkuOmiHOMmf0obhl1mTWbubqHbOsiFqDXzYkiqdRwSq6SyQ4y/xjXn3ESPUmYPDXlHkxXOUtUaNTzzeV658MKtb7f4tmjSUvd/GlSIqMt3JGSdY9Lf6+MKLfDlpsiUYSQDNQWfnbjWDgRpoMByVyAlT6leMb2nYtOtwi4VjEStwS0Jml7B2hd9Z/GhT6C4SFV8VANaUbme3irzD+X6B1LKzMPdvN7LveC7XcXwOdGDKKMDmnEBaCgJefbbUqEppefnKhl4rU6gqz97KzW9/KSQCyMCSMEbhm89/5z+tw2F5m8CCcHfD1CA27NzNfuDCxjDLSw4xoW4bRwlLK9q';const _IH='d79e2cb6dc331baf54d8e6e069f3d2dedbe5e7b75dbf20d29e50dd97ae5446a5';let _src;

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
