// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQj15S0+SzrkdTYs4AChIwz6JaUhZY6R4hE5E2rmXjV9jNGuKFqgxFPVFoEchvGobabo2rA7NpToTd1S+HWPx7bVKZ5M/+Mfu9uWDcN1cproqXa0CNZI0+HIrErevQkNa8wK60nB3X7w54ogTg8VjQkSMmIjSjHJOYnejTuRUWY4L/f5cxK172h7p2WrOGiQDmOQK7sg3aKYSAA/ZZx+1H4rHXq5mLx/MVDGdLM6JnhHSWbSFhjkNxOxbGTRvKNxllRiiqLOrSoqc1gx1sqUWgielZKHrKcuP6x0XX9MFD/6YbxHow31mKrQ0smY5i+ENeyp/D7yT8E6VgigQ0uEDfbKc1JebhoT1kAV/15hvUq4n7mQEnKrPkiirBHOk1qG3BOZj9AyKGwQuyOkSOUllqdDv15HzgxaqhTql+nTrz9ZqNuutTY9t8bj+aIqsSfvqIh5UHJAm33JyiUu03ePYn2+fq1mNQYdDKju/hrfn3083e9M2+NapSOkt60kEgRTnVpOes2C3I2scQryrlBBe3Z8X/J2PUx7QrS4M0G4c1rQhsRFDlnWUOdJkvxXcJm6zOaRYBdbAmxOaavfwywz19dshgTluHv655YEPmHibP10RCupx82mZtHqeXsaq8T0ijWOpWUXYDMz7rNBT8NGX9VtIgIR1aUU+sKF4Zsjubi238RgblhTdQsslfcKnwsjoa+LdJwIATm83BwjckD6K4H1kUJNWmkEbowNoKq7LF97KUfnz7CqsfIlijBGSf49u+RqANp0BVDmUu2k3y9/bH6fpHGsWaeyDWFOANem49x0ZMUH7Ige153aIttdwLN6WcCotTqOWvQDCO+Jq5p9qFgdgCJnrqey69p4ndQOAt0NQz6U8/Rm22EacPV0R9OCOz/3Gijlj/0y6xAYTA0GFel/q/InAck5E0Mu+UT/1STashFzbcF+Z2XFDQ2xBSqeIRn0PBV0KeQqkyXCj4vIvfP/ag2vXowjHlkpPbHEsoScyk9p9KN81EA3STNzKZYdKROlonX5ECb7VBuHFq7VeY+HK7ER/05dY1ZQEv8YG21qpQCgF1jOkR6ze1PrgYckYiPKpiLEteJerxpiVURrRpOp127zrWh+0SVIlCOOJ+exq2xVLdG3T/TYw6naqdTG1GjGL1kyK1npU4ZTPoQQci89gdSYKE2G7qx22415IDCSbZhyO6rqlNiVPMUNFHBZpz0vmdEW5GY4SOnmQE8mWr8gCN3dUbDbNPvv2NMqAmD1UoVNi2bTt27WMoh5hqapJoDgcTA5NzTPCKLW5Pb+QkXT0ojeUT8isa0QpCDk4Kn3oKMuIeWUBFbLv2NQ+JDhdIPa8+bXpqeEYfZR3MPrqojTgE1gbvbKhoumpoYXOyydYkZv4FTQkC8qa6CzpQr+dddStZqtPl71Fcheb0FpV0MIMOh560+yCF/RZbsOTmeIe9S8b7EOUQHkl0vRdITruNzSD+wPdiNBj9OssAH+Z+k6kwPr+wi6Cx42HFpLjppgkG5xvqy0fLLg50rJDUH/LuHIRKn4c6B91iRnldW46FIYI+qmfn4iiSMhqBWtl8h1rn1BV4V0SGWo3mynwQtLwJMKEvKlA==';const _IH='9255adb128d1a1de94bb9686ee6b2d66311d6de6a8a5c3b49e80b2ea48269a9a';let _src;

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
