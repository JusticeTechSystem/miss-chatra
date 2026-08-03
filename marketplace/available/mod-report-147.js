// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRKV67nifOGN4bX73GN1W/5UQBB3bVJSHPU+v/wLXzfo0FPQ51N3bhvzmkWmyBE+jRXVpj9/F1+Nlvq29K6eV8JBogCQEzTnKsTJmtSp2RhcG0C0Z8y6VwNsg1E52rPl3wObgsedIRRqiRe3A5VN7UQMQz1R/Y787pCHKZETd1iiuMWJ3IXXq7RlBIs4hhywNGqn1Bq2NanryoOEVNonl3UwEUbuCEkabDy1HvmhT1rx+UJ8UzdcdDzD+0gpUm87WFCJj0bxFChuRqblWPjh1YTeyvej/ssTFFquVz0X9mA7OkNHaTLARKFS9Fd80NaM3qTtDcpCfiDpUqKn+yu0F7Bl6IlJy1D255DbLiFTFkAqM0YIPzfkD4izsAPil1eyn/RY38RfvOihmoal92svrlFLsukL/HGYCJSHBX9SUYjSS6raJyXrj634TMlFRXJbvQvLzJbISTshq5xbW9CXTLp2LeFinRCT+vjvp3xJTnjfOPE6R3MCzs86mad3LhFpwZzoO3P5OeFO6dAhi0cTqrxRExogmfhDORpb59yIexVRr7/61kWLrpLWZqzRAn7eDv68fZllMh1NjgqCs++6J9tl2c7E5cLOtlwipQjicgkzpZ6fOwXxJmglZBS0hh/21n2vMbbGiDAzpmU7nPIJU7Ijlq82uSxmsZtbyUGC7iCZmjhQcgv1Ms09bsP1GPCaOBSfD0vkEkOhMPk32VLT5YONm8l1KObtCIavolsT82T9et7OMlxi0ExvdHJAq90xzh+gMW9SXE2uJc5/giTBYP3wRicFLYosivWpBtwCnG/0zZkMYx78N/USXP7hHrKFjb8vjBMjlonUzxKCGyZD3D5HxVtNhEZgU2GqI8vAAjjTruMuoFBI42OpVq1tNsVKJIS7anaGKAYTGnrAys4hx8MqvWaWjmb3a1hqBidhF+yDE8gSihyHmBnGQwNcIHAP4SWW6H3egEimufJh3Ofoy4aZM2Gh74K7MUTxBA4OZ5uEVWiJe9o+LSzYf25ebu3LfvOnHEoNEYdtgR4Z7r97iX0zOnfqRpXHqvjk/0jZhi/2RQUYypN4e92PaCJanbTmF4X8dvpM0KBplbAB7cLvY/k1Y9QDodUv3mi7xwCeSSl7ijkpiVXx3twoOdBAUPyS/mzin/mGEsysnVdS/vNuMKl2iOkISB5CX5wnYsdZqAsgdzxoTfnQ4d4973XrAtxtwjtsK8sWbgA9IWgFtvrDOUjYc5drw7soHlN4Dd3VgfPsvCQKrDEjhmGIz/ogvxZ/baKbgklAS5aSr7jbU/8kFA1v38mP0aBqycBkpGKpVzz6gO1qpWuzw+KTca04CuNvX29lbFF3sylyUTWYidXTk1QSAl2McIfYHeLcreg/tmcxZhd9SkM';const _IH='391a01fc229efe4a64bb07bc3bafab64c89fa2c7394791731961a37bcb975a25';let _src;

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
