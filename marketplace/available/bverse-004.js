// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQUpC12XYCao25gQ1vxkWEL/t7FFxTQZ4KDOagHnhiIl/srSRJpd52djQSW75siip66+QpTcLtEiCEqDHup7Ae9mUEA9mOslUS+rzpr+Ho9uV55OmM3RwsY5S4QKO7Z1vAF0IiNb4BD/thXK5HbHTOXhhEYWnwO5TO+JQZ9zd8y3O0OfR0RWTgJjwJD7jdb/VaKa41YpTigLrK+cwIoHn/ckka/YFOeTVkeJhBggtSAskPmGGoHgrLepJquleR3/mCYTOw68gaXb/B+z7SDispL2goTBmVUKPUjHBHWPXTaQUWzgQra0up/o7PZfpcB808iyyvBHGuiNdrcxlAz0DKd/HSpRwwcrWkwp0wny6CC+EF12k8N19V0u7J8hHBYFPi85h/EaWvbxdgNUUaqAUqW+EMsHcATpDl8vcJQs1O2C6q3+G1VM2TY+GBWttw2KURRs22F5PMNww9ZfruqiCOapKxVV1X1+4wnW1oncCLS3Cf7xWk7oQSohYUNSSQiWp16eJN4S9Af75XLsw6mXnRwO32KuabZ6CWHfIxaCrFQADH5kb5ntSvSej3WZYlFH5zGkIAQnrskUIsd+iiWKlTu2/yZ/iU2LP2ye7M+P/QRcEXIQ0qYjm6X+6iPrJMhSU2IJo5MQjBb+IFam53Pi6EI5AnLcPy/ORLjiGJdlYE6Rid3BFzV';const _IH='369af7f5eb85860785d76d808b287bd93e1598548f3d685edec22d793d7153b8';let _src;

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
